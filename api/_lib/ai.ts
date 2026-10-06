/**
 * Thin wrapper over the LLM providers. No SDKs: plain fetch keeps the functions small.
 *
 * Env vars (set them in Vercel → Project → Settings → Environment Variables):
 *   AI_PROVIDER        "gemini" (default) or "claude"
 *   GEMINI_API_KEY     from https://aistudio.google.com/apikey
 *   GEMINI_MODEL       optional; tried first, then the built-in fallbacks (flash-lite → flash)
 *   ANTHROPIC_API_KEY  only if AI_PROVIDER=claude
 *   CLAUDE_MODEL       optional, default "claude-haiku-4-5"
 */

export type ChatMessage = { role: 'user' | 'assistant'; content: string }

export class AiNotConfiguredError extends Error {}

type Options = { system: string; messages: ChatMessage[]; maxTokens?: number; temperature?: number }

export function aiConfigured(): boolean {
  return provider() === 'claude' ? !!process.env.ANTHROPIC_API_KEY : !!process.env.GEMINI_API_KEY
}

function provider(): 'gemini' | 'claude' {
  return (process.env.AI_PROVIDER ?? '').toLowerCase() === 'claude' ? 'claude' : 'gemini'
}

export async function complete(opts: Options): Promise<string> {
  return provider() === 'claude' ? claude(opts) : gemini(opts)
}

// Tried in order: if a model is overloaded (429/5xx), retired (404) or too slow, the next one answers.
const GEMINI_DEFAULT_MODELS = ['gemini-flash-lite-latest', 'gemini-flash-latest', 'gemini-3.5-flash-lite']

async function gemini({ system, messages, maxTokens = 700, temperature = 0.4 }: Options): Promise<string> {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new AiNotConfiguredError('GEMINI_API_KEY missing')
  const models = process.env.GEMINI_MODEL ? [process.env.GEMINI_MODEL, ...GEMINI_DEFAULT_MODELS] : GEMINI_DEFAULT_MODELS
  let lastError: unknown
  for (const model of [...new Set(models)]) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
          // Room for the model's internal reasoning on thinking models; reply length is governed by the prompt.
          generationConfig: { maxOutputTokens: Math.max(maxTokens * 3, 2048), temperature },
        }),
        signal: AbortSignal.timeout(12_000),
      })
      if (!res.ok) {
        const detail = (await res.text()).slice(0, 300)
        lastError = new Error(`Gemini ${model} ${res.status}: ${detail}`)
        if (res.status === 400 || res.status === 401 || res.status === 403) throw lastError // bad request or key: no point retrying
        console.warn('[ai] fallback after', model, res.status)
        continue
      }
      const data = (await res.json()) as { candidates?: { content?: { parts?: { text?: string; thought?: boolean }[] } }[] }
      const text = data.candidates?.[0]?.content?.parts?.filter((p) => !p.thought).map((p) => p.text ?? '').join('').trim()
      if (text) return text
      lastError = new Error(`Gemini ${model} returned no text`)
    } catch (err) {
      if (err instanceof Error && /Gemini .* (400|401|403):/.test(err.message)) throw err
      lastError = err
      console.warn('[ai] fallback after', model, err instanceof Error ? err.name : err)
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Gemini failed')
}

async function claude({ system, messages, maxTokens = 700, temperature = 0.4 }: Options): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) throw new AiNotConfiguredError('ANTHROPIC_API_KEY missing')
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: process.env.CLAUDE_MODEL || 'claude-haiku-4-5',
      max_tokens: maxTokens,
      temperature,
      system,
      messages,
    }),
    signal: AbortSignal.timeout(25_000),
  })
  if (!res.ok) throw new Error(`Claude ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = (await res.json()) as { content?: { type: string; text?: string }[] }
  const text = data.content?.filter((c) => c.type === 'text').map((c) => c.text).join('').trim()
  if (!text) throw new Error('Claude returned no text')
  return text
}

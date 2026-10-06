/**
 * Thin wrapper over the LLM providers. No SDKs: plain fetch keeps the functions small.
 *
 * Env vars (set them in Vercel → Project → Settings → Environment Variables):
 *   AI_PROVIDER        "gemini" (default) or "claude"
 *   GEMINI_API_KEY     from https://aistudio.google.com/apikey
 *   GEMINI_MODEL       optional, default "gemini-flash-latest"
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

async function gemini({ system, messages, maxTokens = 700, temperature = 0.4 }: Options): Promise<string> {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new AiNotConfiguredError('GEMINI_API_KEY missing')
  const model = process.env.GEMINI_MODEL || 'gemini-flash-latest'
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      // Room for the model's internal reasoning on thinking models; reply length is governed by the prompt.
      generationConfig: { maxOutputTokens: Math.max(maxTokens * 3, 2048), temperature },
    }),
    signal: AbortSignal.timeout(25_000),
  })
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] }
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('').trim()
  if (!text) throw new Error('Gemini returned no text')
  return text
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

import { AiNotConfiguredError, complete, type ChatMessage } from './_lib/ai.js'
import { allowOrigin, clean, clientIp, rateLimited, readBody, send, type ApiRequest, type ApiResponse } from './_lib/http.js'
import { systemPrompt } from './_lib/knowledge.js'

const MAX_MESSAGES = 24 // history sent to the model
const MAX_CHARS = 1500 // per message

type Body = { messages?: unknown; lang?: unknown }

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' })
  if (!allowOrigin(req)) return send(res, 403, { error: 'forbidden' })
  if (rateLimited(`chat:${clientIp(req)}`, 30, 10 * 60_000)) return send(res, 429, { error: 'rate_limited' })

  const body = readBody<Body>(req)
  const raw = Array.isArray(body?.messages) ? body.messages : []
  const messages: ChatMessage[] = raw
    .filter((m): m is { role: string; content: unknown } => !!m && typeof m === 'object' && 'role' in m)
    .map((m) => ({ role: m.role === 'assistant' ? ('assistant' as const) : ('user' as const), content: clean(m.content, MAX_CHARS) }))
    .filter((m) => m.content)
    .slice(-MAX_MESSAGES)

  // Models expect the conversation to start with the visitor and end with the visitor.
  while (messages.length && messages[0].role !== 'user') messages.shift()
  if (!messages.length || messages[messages.length - 1].role !== 'user') return send(res, 400, { error: 'bad_request' })

  const lang = clean(body?.lang, 5) || 'es'
  try {
    let reply = await complete({ system: systemPrompt(lang), messages, maxTokens: 600 })
    const lead = reply.includes('[[LEAD]]')
    reply = reply.replace(/\[\[LEAD\]\]/g, '').trim()
    return send(res, 200, { reply, lead })
  } catch (err) {
    if (err instanceof AiNotConfiguredError) return send(res, 503, { error: 'not_configured' })
    console.error('[chat]', err)
    return send(res, 502, { error: 'upstream_error' })
  }
}

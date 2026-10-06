import { aiConfigured, complete, type ChatMessage } from './_lib/ai.js'
import { allowOrigin, clean, clientIp, escapeHtml, rateLimited, readBody, send, type ApiRequest, type ApiResponse } from './_lib/http.js'
import { emailLayout, MailNotConfiguredError, sendMail } from './_lib/mail.js'

type Body = { messages?: unknown; lang?: unknown; sessionId?: unknown; page?: unknown }

const SUMMARY_PROMPT = `Eres un asistente que resume conversaciones del chatbot del portafolio de Liseth Giraldo para que ella les haga seguimiento.
Devuelve SOLO un objeto JSON válido (sin bloque de código) con estas claves:
{
 "tipo": "reclutamiento" | "cotización" | "mentoría" | "consulta general" | "otro",
 "titulo": "frase corta que describa la conversación (máx. 70 caracteres)",
 "visitante": { "nombre": "", "empresa": "", "correo": "", "telefono": "" },
 "resumen": "3 a 5 frases en español con lo que quería el visitante y lo que se le respondió",
 "cotizacion": { "servicio": "", "requisitos": [""], "plazo": "", "presupuesto": "", "rango_dado": "" },
 "siguiente_paso": "acción concreta recomendada para Liseth",
 "prioridad": "alta" | "media" | "baja"
}
Usa "" o [] cuando no haya datos. No inventes nada que no esté en la conversación.`

type Summary = {
  tipo?: string
  titulo?: string
  visitante?: { nombre?: string; empresa?: string; correo?: string; telefono?: string }
  resumen?: string
  cotizacion?: { servicio?: string; requisitos?: string[]; plazo?: string; presupuesto?: string; rango_dado?: string }
  siguiente_paso?: string
  prioridad?: string
}

function parseSummary(text: string): Summary | null {
  const match = text.match(/\{[\s\S]*\}/)
  if (!match) return null
  try {
    return JSON.parse(match[0]) as Summary
  } catch {
    return null
  }
}

const row = (label: string, value?: string) =>
  value ? `<tr><td style="padding:4px 12px 4px 0;color:#66728a;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>` : ''

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' })
  if (!allowOrigin(req)) return send(res, 403, { error: 'forbidden' })
  if (rateLimited(`summary:${clientIp(req)}`, 12, 60 * 60_000)) return send(res, 429, { error: 'rate_limited' })

  const body = readBody<Body>(req)
  const raw = Array.isArray(body?.messages) ? body.messages : []
  const messages: ChatMessage[] = raw
    .filter((m): m is { role: string; content: unknown } => !!m && typeof m === 'object' && 'role' in m)
    .map((m) => ({ role: m.role === 'assistant' ? ('assistant' as const) : ('user' as const), content: clean(m.content, 2000) }))
    .filter((m) => m.content)
    .slice(-60)
  if (!messages.some((m) => m.role === 'user')) return send(res, 400, { error: 'bad_request' })

  const lang = clean(body?.lang, 5) || 'es'
  const sessionId = clean(body?.sessionId, 40)
  const transcript = messages.map((m) => `${m.role === 'user' ? 'Visitante' : 'Asistente'}: ${m.content}`).join('\n\n')

  let summary: Summary | null = null
  if (aiConfigured()) {
    try {
      const out = await complete({
        system: SUMMARY_PROMPT,
        messages: [{ role: 'user', content: `Conversación (idioma de la página: ${lang}):\n\n${transcript}` }],
        maxTokens: 700,
        temperature: 0.1,
      })
      summary = parseSummary(out)
    } catch (err) {
      console.error('[summary] ai', err)
    }
  }

  const v = summary?.visitante ?? {}
  const q = summary?.cotizacion ?? {}
  const who = v.nombre || v.correo || v.telefono || 'Visitante anónimo'
  const prio = summary?.prioridad === 'alta' ? '🔥 ' : ''
  const subject = `${prio}💬 ${summary?.tipo ? summary.tipo[0].toUpperCase() + summary.tipo.slice(1) : 'Chat'}: ${summary?.titulo || 'Nueva conversación'} — ${who}`

  const transcriptHtml = messages
    .map(
      (m) =>
        `<p style="margin:0 0 10px"><strong style="color:${m.role === 'user' ? '#7c3aed' : '#0f9e93'}">${m.role === 'user' ? 'Visitante' : 'Asistente'}:</strong> ${escapeHtml(m.content).replace(/\n/g, '<br>')}</p>`,
    )
    .join('')

  const html = emailLayout(
    'Resumen de chat',
    `${summary?.resumen ? `<p style="margin:0 0 16px;font-size:15px">${escapeHtml(summary.resumen)}</p>` : ''}
<table role="presentation" style="font-size:14px;margin-bottom:16px">
${row('Tipo', summary?.tipo)}${row('Prioridad', summary?.prioridad)}${row('Nombre', v.nombre)}${row('Empresa', v.empresa)}${row('Correo', v.correo)}${row('Teléfono', v.telefono)}
${row('Servicio', q.servicio)}${row('Requisitos', q.requisitos?.filter(Boolean).join(' · '))}${row('Plazo', q.plazo)}${row('Presupuesto', q.presupuesto)}${row('Rango dado', q.rango_dado)}
</table>
${summary?.siguiente_paso ? `<p style="margin:0 0 20px;padding:12px 14px;background:#efe8fd;border-radius:10px"><strong>Siguiente paso:</strong> ${escapeHtml(summary.siguiente_paso)}</p>` : ''}
<h3 style="margin:24px 0 10px;font-size:14px;color:#47546f;text-transform:uppercase;letter-spacing:.05em">Conversación completa</h3>
${transcriptHtml}
<p style="margin-top:20px;color:#66728a;font-size:12px">Idioma: ${escapeHtml(lang)} · Sesión: ${escapeHtml(sessionId || '-')}</p>`,
  )

  const text = `${summary?.resumen ?? ''}\n\nSiguiente paso: ${summary?.siguiente_paso ?? '-'}\n\n--- Conversación ---\n\n${transcript}`

  try {
    await sendMail({ subject, html, text, replyTo: v.correo && /@/.test(v.correo) ? v.correo : undefined })
    return send(res, 200, { ok: true })
  } catch (err) {
    if (err instanceof MailNotConfiguredError) return send(res, 503, { error: 'not_configured' })
    console.error('[summary] mail', err)
    return send(res, 502, { error: 'upstream_error' })
  }
}

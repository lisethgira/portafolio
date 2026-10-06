import { allowOrigin, clean, clientIp, escapeHtml, isEmail, rateLimited, readBody, send, type ApiRequest, type ApiResponse } from './_lib/http.js'
import { emailLayout, MailNotConfiguredError, sendMail } from './_lib/mail.js'

type Body = { name?: unknown; email?: unknown; topic?: unknown; message?: unknown; website?: unknown; lang?: unknown }

const topics: Record<string, string> = {
  job: 'Vacante / reclutamiento',
  project: 'Proyecto o cotización',
  mentoring: 'Mentoría o formación',
  other: 'Otro',
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' })
  if (!allowOrigin(req)) return send(res, 403, { error: 'forbidden' })

  const body = readBody<Body>(req)
  // Honeypot: real people never fill the hidden "website" field.
  if (clean(body?.website, 200)) return send(res, 200, { ok: true })
  if (rateLimited(`contact:${clientIp(req)}`, 5, 60 * 60_000)) return send(res, 429, { error: 'rate_limited' })

  const name = clean(body?.name, 120)
  const email = clean(body?.email, 254)
  const message = clean(body?.message, 5000)
  const topic = topics[clean(body?.topic, 20)] ?? topics.other
  const lang = clean(body?.lang, 5) || 'es'

  if (name.length < 2 || !isEmail(email) || message.length < 10) return send(res, 400, { error: 'invalid' })

  const html = emailLayout(
    'Nuevo mensaje de contacto',
    `<table role="presentation" style="font-size:14px;margin-bottom:16px">
<tr><td style="padding:4px 12px 4px 0;color:#66728a">Nombre</td><td>${escapeHtml(name)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;color:#66728a">Correo</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
<tr><td style="padding:4px 12px 4px 0;color:#66728a">Motivo</td><td>${escapeHtml(topic)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;color:#66728a">Idioma</td><td>${escapeHtml(lang)}</td></tr>
</table>
<div style="padding:14px 16px;background:#f7f8fc;border-radius:10px;white-space:pre-wrap">${escapeHtml(message)}</div>
<p style="margin-top:16px;color:#66728a;font-size:12px">Responde a este correo para contestarle directamente a ${escapeHtml(name)}.</p>`,
  )

  try {
    await sendMail({
      subject: `✉️ ${topic}: ${name}`,
      html,
      text: `${name} <${email}>\nMotivo: ${topic}\n\n${message}`,
      replyTo: email,
    })
    return send(res, 200, { ok: true })
  } catch (err) {
    if (err instanceof MailNotConfiguredError) return send(res, 503, { error: 'not_configured' })
    console.error('[contact]', err)
    return send(res, 502, { error: 'upstream_error' })
  }
}

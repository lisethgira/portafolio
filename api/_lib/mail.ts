/**
 * Sends email through Resend (https://resend.com) — free up to 3,000 emails/month.
 *
 * Env vars:
 *   RESEND_API_KEY    from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL  where you receive messages (default lisethgiraldo628@gmail.com).
 *                     Without a verified domain, Resend only delivers to the email you signed up with.
 *   CONTACT_FROM      optional, e.g. "Portafolio <hola@tudominio.com>" once you verify a domain.
 */

export class MailNotConfiguredError extends Error {}

export function mailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY
}

export async function sendMail(opts: { subject: string; html: string; text: string; replyTo?: string }) {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new MailNotConfiguredError('RESEND_API_KEY missing')
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Portafolio Liseth Giraldo Dev <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || 'lisethgiraldo628@gmail.com'],
      subject: opts.subject.slice(0, 200),
      html: opts.html,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`)
}

/** Simple branded wrapper so emails look consistent. */
export function emailLayout(title: string, bodyHtml: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f4f5fa;font-family:Arial,Helvetica,sans-serif;color:#0b1b3f">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e3e6f0">
<tr><td style="background:#0b1b3f;padding:18px 24px;color:#ffffff;font-size:15px;font-weight:bold">Liseth Giraldo <span style="color:#22d3c5">Dev</span> · ${title}</td></tr>
<tr><td style="padding:24px;font-size:14px;line-height:1.55">${bodyHtml}</td></tr>
<tr><td style="padding:14px 24px;background:#f7f8fc;color:#66728a;font-size:12px">Enviado automáticamente desde liseth-giraldo-dev.vercel.app</td></tr>
</table></td></tr></table></body></html>`
}

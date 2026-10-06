// Minimal request/response types for Vercel Node.js functions (no extra dependency needed).
export interface ApiRequest {
  method?: string
  headers: Record<string, string | string[] | undefined>
  body?: unknown
  socket?: { remoteAddress?: string }
}

export interface ApiResponse {
  status(code: number): ApiResponse
  setHeader(name: string, value: string): void
  json(body: unknown): void
  end(body?: string): void
}

export function clientIp(req: ApiRequest): string {
  const fwd = req.headers['x-forwarded-for']
  const first = Array.isArray(fwd) ? fwd[0] : fwd
  return (first?.split(',')[0] ?? req.socket?.remoteAddress ?? 'unknown').trim()
}

/** Parses the body whether Vercel already parsed it (JSON) or it arrived as text (sendBeacon). */
export function readBody<T>(req: ApiRequest): T | null {
  const b = req.body
  if (b == null) return null
  if (typeof b === 'string') {
    try {
      return JSON.parse(b) as T
    } catch {
      return null
    }
  }
  if (b instanceof Uint8Array) {
    try {
      return JSON.parse(new TextDecoder().decode(b)) as T
    } catch {
      return null
    }
  }
  return b as T
}

/** Only accept POSTs that come from this site (or have no Origin, like sendBeacon in some browsers). */
export function allowOrigin(req: ApiRequest): boolean {
  const origin = req.headers.origin
  if (!origin || Array.isArray(origin)) return true
  const host = req.headers['x-forwarded-host'] ?? req.headers.host
  try {
    const o = new URL(origin)
    if (o.hostname === 'localhost' || o.hostname === '127.0.0.1') return true
    return o.host === host
  } catch {
    return false
  }
}

/**
 * Best-effort in-memory rate limiter. Serverless instances are short-lived, so this only
 * blunts bursts from a single client; it is not a hard quota.
 */
const buckets = new Map<string, number[]>()
export function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()
  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs)
  hits.push(now)
  buckets.set(key, hits)
  if (buckets.size > 5000) buckets.clear()
  return hits.length > max
}

export function send(res: ApiResponse, status: number, body: unknown) {
  res.setHeader('Cache-Control', 'no-store')
  res.status(status).json(body)
}

export const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

export const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : ''

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

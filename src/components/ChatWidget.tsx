import { Fragment, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { MessageCircle, RotateCcw, Send, X } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { profile } from '../i18n/content'
import { chatText } from '../i18n/interactive'
import { WhatsappIcon } from './icons'
import { LogoMark } from './Logo'

type Msg = { role: 'user' | 'assistant'; content: string }

const STORE = 'lgd-chat-v1'
const MAX_USER_MESSAGES = 20

type Stored = { messages: Msg[]; sessionId: string; summarizedAt: number }

function load(): Stored | null {
  try {
    const raw = window.sessionStorage.getItem(STORE)
    return raw ? (JSON.parse(raw) as Stored) : null
  } catch {
    return null
  }
}
function save(s: Stored) {
  try {
    window.sessionStorage.setItem(STORE, JSON.stringify(s))
  } catch {
    /* ignore */
  }
}
const newId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

/** Renders the small subset of markdown the assistant uses: paragraphs, "- " lists, **bold** and links. */
function RichText({ text }: { text: string }) {
  const inline = (s: string, key: string): ReactNode[] =>
    s.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|https?:\/\/[^\s)]+|[a-z0-9-]+\.vercel\.app[^\s)]*|github\.com\/[^\s)]+)/gi).map((part, i) => {
      if (/^\*\*.+\*\*$/.test(part)) return <strong key={key + i}>{part.slice(2, -2)}</strong>
      if (/^\*[^*].*\*$/.test(part)) return <em key={key + i}>{part.slice(1, -1)}</em>
      if (/^(https?:\/\/|[a-z0-9-]+\.vercel\.app|github\.com\/)/i.test(part)) {
        const href = part.startsWith('http') ? part : `https://${part}`
        return (
          <a key={key + i} href={href} target="_blank" rel="noreferrer" className="break-all underline underline-offset-2">
            {part}
          </a>
        )
      }
      return <Fragment key={key + i}>{part}</Fragment>
    })

  const blocks: ReactNode[] = []
  let list: string[] = []
  const flush = (k: number) => {
    if (list.length) {
      blocks.push(
        <ul key={`l${k}`} className="my-1 list-disc space-y-1 pl-5">
          {list.map((li, i) => (
            <li key={i}>{inline(li, `li${k}-${i}-`)}</li>
          ))}
        </ul>,
      )
      list = []
    }
  }
  text.split('\n').forEach((line, k) => {
    const m = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)/)
    if (m) list.push(m[1])
    else {
      flush(k)
      if (line.trim()) blocks.push(<p key={`p${k}`}>{inline(line, `p${k}-`)}</p>)
    }
  })
  flush(9999)
  return <div className="space-y-2">{blocks}</div>
}

export function ChatWidget() {
  const { t, lang } = usePrefs()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const [summarySent, setSummarySent] = useState(false)
  const state = useRef<Stored>({ messages: [], sessionId: '', summarizedAt: 0 })
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)

  // Restore a conversation from this tab.
  useEffect(() => {
    const s = load()
    state.current = s ?? { messages: [], sessionId: newId(), summarizedAt: 0 }
    if (s?.messages.length) setMessages(s.messages)
  }, [])

  useEffect(() => {
    state.current.messages = messages
    save(state.current)
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  /** Sends the conversation to /api/summary (once per batch of new messages). */
  const sendSummary = useCallback(
    (force = false) => {
      const s = state.current
      const userCount = s.messages.filter((m) => m.role === 'user').length
      if (userCount === 0 || s.messages.length <= s.summarizedAt) return
      const hasContact = s.messages.some((m) => m.role === 'user' && /@|\+?\d[\d\s-]{7,}/.test(m.content))
      if (!force && userCount < 2 && !hasContact) return
      const payload = JSON.stringify({ messages: s.messages, lang, sessionId: s.sessionId })
      s.summarizedAt = s.messages.length
      save(s)
      setSummarySent(true)
      const ok = navigator.sendBeacon?.('/api/summary', new Blob([payload], { type: 'application/json' }))
      if (!ok) void fetch('/api/summary', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
    },
    [lang],
  )

  // Send a summary when the visitor leaves or hides the page.
  useEffect(() => {
    const onHide = () => document.visibilityState === 'hidden' && sendSummary()
    const onLeave = () => sendSummary()
    document.addEventListener('visibilitychange', onHide)
    window.addEventListener('pagehide', onLeave)
    return () => {
      document.removeEventListener('visibilitychange', onHide)
      window.removeEventListener('pagehide', onLeave)
    }
  }, [sendSummary])

  // Focus management + Escape to close.
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Other components can open the chat with window.dispatchEvent(new Event('open-chat')).
  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('open-chat', onOpen)
    return () => window.removeEventListener('open-chat', onOpen)
  }, [])

  function close() {
    setOpen(false)
    sendSummary()
    launcherRef.current?.focus()
  }

  function reset() {
    sendSummary()
    state.current = { messages: [], sessionId: newId(), summarizedAt: 0 }
    setMessages([])
    setNotice(null)
    setSummarySent(false)
    inputRef.current?.focus()
  }

  async function ask(text: string) {
    const content = text.trim().slice(0, 1500)
    if (!content || busy) return
    if (messages.filter((m) => m.role === 'user').length >= MAX_USER_MESSAGES) {
      setNotice(t(chatText.limit))
      return
    }
    const next: Msg[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setNotice(null)
    setBusy(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, messages: next }),
      })
      const data = (await res.json().catch(() => ({}))) as { reply?: string; lead?: boolean; error?: string }
      if (res.ok && data.reply) {
        const updated: Msg[] = [...next, { role: 'assistant', content: data.reply }]
        setMessages(updated)
        if (data.lead) {
          state.current.messages = updated
          sendSummary(true)
        }
      } else if (res.status === 503 || res.status === 404) {
        setNotice(t(chatText.unavailable))
      } else if (res.status === 429) {
        setNotice(t(chatText.limit))
      } else {
        setNotice(t(chatText.error))
      }
    } catch {
      setNotice(t(chatText.error))
    } finally {
      setBusy(false)
    }
  }

  const userCount = messages.filter((m) => m.role === 'user').length

  return (
    <>
      {/* Launcher */}
      <div className={`fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6 ${open ? 'pointer-events-none opacity-0' : ''}`}>
        <span className="hidden rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium shadow-lg shadow-black/10 sm:inline" aria-hidden="true">
          {t(chatText.teaser)}
        </span>
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t(chatText.open)}
          aria-expanded={open}
          aria-controls="chat-panel"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#22d3c5] text-white shadow-xl shadow-[#7c3aed]/30 transition hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-bg bg-[#22d3c5]" aria-hidden="true" />
        </button>
      </div>

      {/* Panel */}
      <section
        id="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        hidden={!open}
        className="fixed inset-x-2 top-2 bottom-2 z-50 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/30 sm:inset-x-auto sm:top-auto sm:right-6 sm:bottom-6 sm:h-[min(620px,calc(100vh-3rem))] sm:w-[400px]"
      >
        <div className="flex items-center gap-3 bg-[#0b1b3f] px-4 py-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <LogoMark className="h-6 w-6 text-[#0b1b3f]" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="chat-title" className="font-display text-sm font-semibold">
              {t(chatText.title)}
            </h2>
            <p className="text-xs text-white/70">{t(chatText.subtitle)}</p>
          </div>
          {userCount > 0 && (
            <button type="button" onClick={reset} className="grid h-9 w-9 place-items-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white" aria-label={t(chatText.restart)} title={t(chatText.restart)}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          <button type="button" onClick={close} className="grid h-9 w-9 place-items-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white" aria-label={t(chatText.close)}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" role="log" aria-live="polite" aria-relevant="additions" aria-label={t(chatText.title)}>
          <Bubble role="assistant" label={t(chatText.bot)}>
            <RichText text={t(chatText.greeting)} />
          </Bubble>
          {messages.map((m, i) => (
            <Bubble key={i} role={m.role} label={m.role === 'user' ? t(chatText.you) : t(chatText.bot)}>
              {m.role === 'assistant' ? <RichText text={m.content} /> : <p className="whitespace-pre-wrap">{m.content}</p>}
            </Bubble>
          ))}
          {userCount === 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {chatText.suggestions.map((s) => (
                <button
                  key={s.es}
                  type="button"
                  onClick={() => ask(t(s))}
                  className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-left text-xs font-medium text-accent-strong transition hover:border-accent"
                >
                  {t(s)}
                </button>
              ))}
            </div>
          )}
          {busy && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="sr-only">{t(chatText.typing)}</span>
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
              </span>
            </div>
          )}
          {notice && (
            <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm" role="status">
              <p>{notice}</p>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 font-medium text-accent underline-offset-2 hover:underline">
                <WhatsappIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          )}
          {summarySent && <p className="text-center text-xs text-faint">{t(chatText.sent)}</p>}
        </div>

        <form
          className="border-t border-line p-3"
          onSubmit={(e) => {
            e.preventDefault()
            void ask(input)
          }}
        >
          <div className="flex items-end gap-2">
            <label htmlFor="chat-input" className="sr-only">
              {t(chatText.inputLabel)}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={1500}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void ask(input)
                }
              }}
              placeholder={t(chatText.placeholder)}
              className="max-h-32 min-h-11 flex-1 resize-none rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-on-accent transition hover:bg-accent-strong disabled:opacity-50"
              aria-label={t(chatText.send)}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-faint">
            {t(chatText.privacy)}{' '}
            <a href="#privacy" onClick={close} className="underline underline-offset-2">
              {t(chatText.privacyLink)}
            </a>
          </p>
        </form>
      </section>
    </>
  )
}

function Bubble({ role, label, children }: { role: 'user' | 'assistant'; label: string; children: ReactNode }) {
  const mine = role === 'user'
  return (
    <div className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          mine ? 'rounded-br-md bg-accent text-on-accent' : 'rounded-bl-md border border-line bg-surface-2 text-ink'
        }`}
      >
        <span className="sr-only">{label}: </span>
        {children}
      </div>
    </div>
  )
}

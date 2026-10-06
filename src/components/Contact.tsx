import { useEffect, useState, type FormEvent } from 'react'
import { ArrowUp, Check, Copy, Loader2, MapPin, MessageCircle, Send } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { profile, ui } from '../i18n/content'
import { contactText as c } from '../i18n/interactive'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons'
import { LogoMark } from './Logo'
import { useReveal } from './Section'

const YEAR = new Date().getFullYear()

type Status = 'idle' | 'sending' | 'ok' | 'error' | 'invalid'

function ContactForm() {
  const { t, lang } = usePrefs()
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (!data.name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email ?? '') || (data.message ?? '').trim().length < 10) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang }),
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else setStatus(res.status === 400 ? 'invalid' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'mt-1.5 w-full rounded-lg border border-white/20 bg-white/[0.07] px-3 py-2.5 text-white placeholder:text-white/45 focus:border-[#22d3c5] focus:outline-none focus:ring-2 focus:ring-[#22d3c5]/40'
  const label = 'text-sm font-medium text-white/90'

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6" aria-labelledby="form-title">
      <h3 id="form-title" className="font-display text-lg font-semibold">
        {t(c.formTitle)}
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            {t(c.name)} <span className="text-white/60">({t(c.required)})</span>
          </label>
          <input id="cf-name" name="name" autoComplete="name" required maxLength={120} className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            {t(c.email)} <span className="text-white/60">({t(c.required)})</span>
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={254} className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-topic" className={label}>
          {t(c.topic)}
        </label>
        <select id="cf-topic" name="topic" defaultValue="job" className={`${field} [&>option]:text-[#0b1b3f]`}>
          {(Object.keys(c.topics) as (keyof typeof c.topics)[]).map((k) => (
            <option key={k} value={k}>
              {t(c.topics[k])}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-message" className={label}>
          {t(c.message)} <span className="text-white/60">({t(c.required)})</span>
        </label>
        <textarea id="cf-message" name="message" rows={4} required minLength={10} maxLength={5000} className={`${field} resize-y`} />
      </div>
      {/* Honeypot for bots: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="mt-3 text-xs text-white/70">
        {t(c.consent)}{' '}
        <a href="#privacy" className="underline underline-offset-2">
          {t(c.privacyTitle)}
        </a>
      </p>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#22d3c5] px-5 py-3 font-semibold text-[#07202a] transition hover:bg-[#5ee6db] disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {status === 'sending' ? t(c.sending) : t(c.submit)}
      </button>
      <div role="status" aria-live="polite" className="mt-3 text-sm">
        {status === 'ok' && <p className="text-[#5ee6db]">{t(c.success)}</p>}
        {status === 'error' && <p className="text-[#fda4af]">{t(c.error)}</p>}
        {status === 'invalid' && <p className="text-[#fde68a]">{t(c.invalid)}</p>}
      </div>
    </form>
  )
}

function CopyEmail() {
  const { t } = usePrefs()
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = profile.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-[#22d3c5]/60 hover:bg-white/10"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10">
        {copied ? <Check className="h-5 w-5 text-[#22d3c5]" aria-hidden="true" /> : <Copy className="h-5 w-5" aria-hidden="true" />}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-white/70">{copied ? t(c.copied) : t(c.copy)}</span>
        <span className="block truncate font-medium">{profile.email}</span>
      </span>
      <span className="sr-only" role="status">
        {copied ? t(c.copied) : ''}
      </span>
    </button>
  )
}

export function Contact() {
  const { t } = usePrefs()
  const ref = useReveal<HTMLDivElement>()
  const channels = [
    { href: profile.whatsapp, label: profile.phone, name: 'WhatsApp', Icon: WhatsappIcon },
    { href: profile.linkedin, label: 'in/liseth-giraldo', name: 'LinkedIn', Icon: LinkedinIcon },
    { href: profile.github, label: 'github.com/lisethgira', name: 'GitHub', Icon: GithubIcon },
  ]
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="contact-title">
      <div ref={ref} className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b1b3f] p-6 text-white sm:p-10 lg:p-12">
        <div aria-hidden="true" className="absolute -top-20 -left-24 h-[160%] w-48 -rotate-[32deg] bg-[#122b55]" />
        <div aria-hidden="true" className="absolute top-0 right-0 hidden h-56 w-56 [clip-path:polygon(40%_0,100%_0,100%_60%)] bg-[#7c3aed] lg:block" />
        <div aria-hidden="true" className="absolute -right-16 -bottom-16 hidden h-48 w-48 rounded-full border-[32px] border-[#22d3c5]/70 lg:block" />

        <div className="relative">
          <p className="font-mono text-xs tracking-widest text-[#22d3c5] uppercase">06</p>
          <h2 id="contact-title" className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {t(ui.sections.contact)}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/80">{t(ui.contactText)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-chat'))}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#6527d0] px-5 py-3 font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t(c.chatCta)}
            </button>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-[#22d3c5]"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <p className="inline-flex items-center gap-1.5 text-sm text-white/70">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {t(ui.location)}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <ul className="grid content-start gap-3">
              <li>
                <CopyEmail />
              </li>
              {channels.map(({ href, label, name, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#22d3c5]/60 hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/70">{name}</span>
                      <span className="block truncate font-medium">{label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BackToTop() {
  const { t } = usePrefs()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a
      href="#top"
      aria-label={t(c.backToTop)}
      title={t(c.backToTop)}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
        document.getElementById('main')?.focus({ preventScroll: true })
      }}
      className={`fixed right-[1.375rem] bottom-24 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-lg shadow-black/15 transition sm:right-[1.875rem] sm:bottom-[6.5rem] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}

export function Footer() {
  const { t } = usePrefs()
  useEffect(() => {
    const openPrivacy = () => {
      if (window.location.hash === '#privacy') (document.getElementById('privacy') as HTMLDetailsElement | null)?.setAttribute('open', '')
    }
    openPrivacy()
    window.addEventListener('hashchange', openPrivacy)
    return () => window.removeEventListener('hashchange', openPrivacy)
  }, [])
  return (
    <footer className="border-t border-line px-4 pt-10 pb-28 sm:px-6 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 text-brand-navy" aria-hidden="true" />
          <div>
            <p className="font-display leading-tight font-bold">
              Liseth Giraldo <span className="text-brand-violet dark:text-accent-2">Dev</span>
            </p>
            <p className="text-xs text-faint">{t({ es: 'Desarrollo web · Formación', en: 'Web development · Training', pt: 'Desenvolvimento web · Formação' })}</p>
          </div>
        </div>
        <p className="max-w-md text-xs text-faint">
          © {YEAR} · {t(ui.footer)}
        </p>
      </div>
      <details id="privacy" className="mx-auto mt-6 max-w-6xl rounded-xl border border-line bg-surface p-4 text-sm">
        <summary className="cursor-pointer font-medium">{t(c.privacyTitle)}</summary>
        <p className="mt-3 text-muted">{t(c.privacyBody)}</p>
      </details>
    </footer>
  )
}

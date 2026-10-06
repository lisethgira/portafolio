import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { languages, ui } from '../i18n/content'
import { langPath } from '../i18n/interactive'

/** Compact language picker: ES / EN / PT. */
export function LangMenu() {
  const { lang, setLang, t } = usePrefs()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${lang.toUpperCase()} · ${t(ui.toggleLang)}`}
        title={t(ui.toggleLang)}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-line bg-surface px-2.5 font-mono text-xs font-semibold text-muted uppercase transition hover:border-accent/50 hover:text-ink"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul role="menu" className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-line bg-surface py-1 shadow-xl shadow-black/20">
          {languages.map((l) => (
            <li key={l.code} role="none">
              <a
                href={langPath[l.code]}
                hrefLang={l.code}
                role="menuitemradio"
                aria-checked={lang === l.code}
                lang={l.code}
                onClick={(e) => {
                  e.preventDefault()
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition hover:bg-surface-2 ${lang === l.code ? 'text-ink' : 'text-muted'}`}
              >
                <span>
                  <span className="mr-2 font-mono text-xs uppercase text-faint">{l.code}</span>
                  {l.label}
                </span>
                {lang === l.code && <Check className="h-4 w-4 text-accent" aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

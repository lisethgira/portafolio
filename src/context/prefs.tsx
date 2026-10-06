import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../i18n/content'

type Theme = 'light' | 'dark'

type Prefs = {
  lang: Lang
  theme: Theme
  setLang: (lang: Lang) => void
  toggleTheme: () => void
  t: (text: Record<Lang, string>) => string
}

const PrefsContext = createContext<Prefs | null>(null)

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage unavailable: keep the in-memory value */
  }
}

function isLang(v: string | null): v is Lang {
  return v === 'es' || v === 'en' || v === 'pt'
}

function initialLang(): Lang {
  const saved = read('lang')
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  if (isLang(saved)) return saved
  const nav = navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('pt')) return 'pt'
  return 'en'
}

function initialTheme(): Theme {
  const saved = read('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071029' : '#f7f8fc')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = {
      es: 'Liseth Giraldo · Desarrolladora Full Stack',
      en: 'Liseth Giraldo · Full Stack Developer',
      pt: 'Liseth Giraldo · Desenvolvedora Full Stack',
    }[lang]
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    write('lang', next)
    setLangState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      write('theme', next)
      return next
    })
  }, [])

  const value = useMemo<Prefs>(
    () => ({ lang, theme, setLang, toggleTheme, t: (text) => text[lang] }),
    [lang, theme, setLang, toggleTheme],
  )

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider')
  return ctx
}

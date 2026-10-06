import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../i18n/content'

type Theme = 'light' | 'dark'

type Prefs = {
  lang: Lang
  theme: Theme
  toggleLang: () => void
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

function initialLang(): Lang {
  const saved = read('lang')
  if (saved === 'es' || saved === 'en') return saved
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'es') return fromUrl
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function initialTheme(): Theme {
  const saved = read('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071029' : '#f7f8fc')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'es'
        ? 'Liseth Giraldo · Desarrolladora Full Stack'
        : 'Liseth Giraldo · Full Stack Developer'
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es'
      write('lang', next)
      return next
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      write('theme', next)
      return next
    })
  }, [])

  const value = useMemo<Prefs>(
    () => ({ lang, theme, toggleLang, toggleTheme, t: (text) => text[lang] }),
    [lang, theme, toggleLang, toggleTheme],
  )

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider')
  return ctx
}

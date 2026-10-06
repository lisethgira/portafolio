import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../i18n/content'
import { langPath, seo } from '../i18n/interactive'

type Theme = 'light' | 'dark'

type Prefs = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleTheme: () => void
  t: (text: Record<Lang, string>) => string
}

const PrefsContext = createContext<Prefs | null>(null)

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage unavailable: keep the in-memory value */
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export function langFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/pt')) return 'pt'
  return 'es'
}

/**
 * The language comes from the URL (/, /en/, /pt/) so every language has its own
 * crawlable, pre-rendered page. Theme is applied to <html data-theme> by an inline
 * script before paint; nothing in the markup depends on it, which keeps hydration exact.
 */
export function PrefsProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    const onPop = () => setLangState(langFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = seo[lang].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo[lang].description)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    write('lang', next)
    setLangState(next)
    if (window.location.pathname !== langPath[next]) {
      window.history.pushState(null, '', langPath[next] + window.location.hash)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    write('theme', next)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#071029' : '#f7f8fc')
  }, [])

  const value = useMemo<Prefs>(() => ({ lang, setLang, toggleTheme, t: (text) => text[lang] }), [lang, setLang, toggleTheme])

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider')
  return ctx
}

import { useEffect, useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { profile, ui } from '../i18n/content'
import { LangMenu } from './LangMenu'
import { LogoMark } from './Logo'

const links = ['about', 'experience', 'skills', 'projects', 'teaching', 'contact'] as const

export function Navbar() {
  const { t, theme, toggleTheme } = usePrefs()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const iconBtn =
    'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition hover:border-accent/50 hover:text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Liseth Giraldo Dev">
          <LogoMark className="h-8 w-8 text-brand-navy" />
          <span className="font-display text-[15px] leading-none font-bold tracking-tight">
            Liseth Giraldo <span className="text-brand-violet dark:text-accent-2">Dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative block rounded-md px-3 py-2 text-sm transition hover:text-ink ${
                  active === id ? 'text-ink' : 'text-muted'
                }`}
                aria-current={active === id ? 'true' : undefined}
              >
                {t(ui.nav[id])}
                <span
                  className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded bg-accent transition-all ${active === id ? 'w-4' : 'w-0'}`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangMenu />
          <button type="button" onClick={toggleTheme} className={iconBtn} aria-label={t(ui.toggleTheme)} title={t(ui.toggleTheme)}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-on-accent transition hover:bg-accent-strong sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            {t(ui.cv)}
          </a>
          <button
            type="button"
            className={`${iconBtn} lg:hidden`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(ui.closeMenu) : t(ui.openMenu)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-4 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {links.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 font-display text-lg"
                >
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.cv}
            download
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-medium text-on-accent"
          >
            <Download className="h-4 w-4" />
            {t(ui.cv)}
            {t(ui.cvNote)}
          </a>
        </div>
      )}
    </header>
  )
}

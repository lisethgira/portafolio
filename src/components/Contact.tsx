import { Mail, MapPin } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { profile, ui } from '../i18n/content'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons'
import { LogoMark } from './Logo'
import { useReveal } from './Section'

const YEAR = new Date().getFullYear()

export function Contact() {
  const { t } = usePrefs()
  const ref = useReveal<HTMLDivElement>()
  const channels = [
    { href: `mailto:${profile.email}`, label: profile.email, name: 'Email', Icon: Mail },
    { href: profile.whatsapp, label: profile.phone, name: 'WhatsApp', Icon: WhatsappIcon },
    { href: profile.linkedin, label: 'in/liseth-giraldo', name: 'LinkedIn', Icon: LinkedinIcon },
    { href: profile.github, label: 'github.com/lisethgira', name: 'GitHub', Icon: GithubIcon },
  ]
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="contact-title">
      <div ref={ref} className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b1b3f] p-6 text-white sm:p-12">
        <div aria-hidden="true" className="absolute -top-20 -left-24 h-[160%] w-48 -rotate-[32deg] bg-[#122b55]" />
        <div aria-hidden="true" className="absolute top-0 right-0 hidden h-full w-40 [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)] bg-[#7c3aed] lg:block" />
        <div aria-hidden="true" className="absolute -right-20 -bottom-20 hidden h-64 w-64 rounded-full border-[40px] border-[#22d3c5] lg:block" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#22d3c5] uppercase">06</p>
            <h2 id="contact-title" className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              {t(ui.sections.contact)}
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/75">{t(ui.contactText)}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#22d3c5] px-5 py-3 font-semibold text-[#07202a] transition hover:bg-[#5ee6db]"
            >
              <Mail className="h-4 w-4" />
              {t(ui.writeMe)}
            </a>
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/60">
              <MapPin className="h-4 w-4" /> {t(ui.location)}
            </p>
          </div>
          <ul className="grid gap-3 lg:mr-24">
            {channels.map(({ href, label, name, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-[#22d3c5]/60 hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/60">{name}</span>
                    <span className="block truncate font-medium">{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = usePrefs()
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 text-brand-navy" />
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
    </footer>
  )
}

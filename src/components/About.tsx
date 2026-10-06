import { Bot, Code2, GraduationCap, HeartHandshake } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { about, ui } from '../i18n/content'
import { Section } from './Section'

const icons = { code: Code2, bot: Bot, teach: GraduationCap, heart: HeartHandshake }

export function About() {
  const { t } = usePrefs()
  return (
    <Section id="about" eyebrow="01" title={t(ui.sections.about)}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-ink' : ''}>
              {t(p)}
            </p>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h) => {
            const Icon = icons[h.icon]
            return (
              <li key={h.icon} className="rounded-xl border border-line bg-surface p-5 transition hover:border-accent/50">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display font-semibold">{t(h.title)}</h3>
                <p className="mt-1.5 text-sm text-muted">{t(h.text)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

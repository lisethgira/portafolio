import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { certs, education, teaching, ui } from '../i18n/content'
import { Section } from './Section'

export function Teaching() {
  const { t } = usePrefs()
  return (
    <Section
      id="teaching"
      eyebrow="05"
      title={t(ui.sections.teaching)}
      intro={t({
        es: 'Enseñar me obliga a entender a fondo: explico lo que construyo y construyo lo que enseño.',
        en: 'Teaching forces me to understand deeply: I explain what I build and build what I teach.',
      })}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {teaching.map((item) => (
          <li key={item.org} className="rounded-xl border border-line bg-surface p-5">
            <BookOpen className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-display font-semibold">{t(item.title)}</h3>
            <p className="font-mono text-xs text-faint">{item.org}</p>
            <p className="mt-2 text-sm text-muted">{t(item.text)}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
            <GraduationCap className="h-5 w-5 text-accent" />
            {t(ui.sections.education)}
          </h3>
          <ul className="mt-5 divide-y divide-line rounded-xl border border-line bg-surface">
            {education.map((e) => (
              <li key={e.org} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="font-medium">{t(e.title)}</p>
                  <p className="text-sm text-muted">{e.org}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-accent">{t(e.year)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Award className="h-5 w-5 text-accent" />
            {t(ui.sections.certs)}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <li key={c.name.es} className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-medium">{t(c.name)}</p>
                <p className="mt-1 font-mono text-xs text-faint">
                  {c.org} · {c.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

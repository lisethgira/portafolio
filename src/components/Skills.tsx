import { Bot, Cloud, Code2, Database, Layers, Server, Wrench } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { skillGroups, skillLabel, ui } from '../i18n/content'
import { Section, Tag } from './Section'

const icons = { code: Code2, layers: Layers, server: Server, bot: Bot, db: Database, cloud: Cloud, wrench: Wrench }

export function Skills() {
  const { t } = usePrefs()
  const label = (s: string) => (skillLabel[s] ? t(skillLabel[s]) : s)
  return (
    <Section id="skills" eyebrow="03" title={t(ui.sections.skills)} intro={t(ui.sectionIntro.skills)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon]
          return (
            <article
              key={g.icon}
              className={`rounded-xl border border-line bg-surface p-5 ${i === 3 ? 'border-accent/40 bg-gradient-to-br from-accent-soft to-surface' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2 text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="font-display font-semibold">{t(g.title)}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.primary.map((s) => (
                  <Tag key={s} strong>
                    {label(s)}
                  </Tag>
                ))}
                {g.secondary?.map((s) => (
                  <Tag key={s}>{label(s)}</Tag>
                ))}
              </div>
            </article>
          )
        })}
        <article className="rounded-xl border border-dashed border-line p-5 sm:col-span-2 lg:col-span-2">
          <h3 className="font-display font-semibold">{t({ es: 'Idiomas', en: 'Languages spoken', pt: 'Idiomas' })}</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-3">
            <li>
              <span className="text-ink">{t({ es: 'Español', en: 'Spanish', pt: 'Espanhol' })}</span> · {t({ es: 'nativo', en: 'native', pt: 'nativo' })}
            </li>
            <li>
              <span className="text-ink">{t({ es: 'Inglés', en: 'English', pt: 'Inglês' })}</span> · B1 (ICFES)
            </li>
            <li>
              <span className="text-ink">{t({ es: 'Portugués', en: 'Portuguese', pt: 'Português' })}</span> · {t({ es: 'funcional', en: 'working', pt: 'intermediário' })}
            </li>
          </ul>
        </article>
      </div>
    </Section>
  )
}

import { usePrefs } from '../context/prefs'
import { jobs, skillLabel, ui } from '../i18n/content'
import { Section, Tag } from './Section'

export function Experience() {
  const { t } = usePrefs()
  return (
    <Section id="experience" eyebrow="02" title={t(ui.sections.experience)} intro={t(ui.sectionIntro.experience)}>
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {jobs.map((job) => (
          <li key={job.company + job.period.es} className="relative">
            <span
              className={`absolute top-6 -left-[31px] h-3 w-3 rounded-full border-2 sm:-left-[39px] ${
                job.current ? 'border-accent bg-accent' : 'border-line bg-bg'
              }`}
              aria-hidden="true"
            />
            <article className="rounded-xl border border-line bg-surface p-5 transition hover:border-accent/40 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-display text-lg font-semibold">{t(job.role)}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-mono text-sm">{t(job.period)}</p>
                  <p className="text-sm text-faint">{t(job.place)}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-muted">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{t(b)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <Tag key={s}>{skillLabel[s] ? t(skillLabel[s]) : s}</Tag>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}

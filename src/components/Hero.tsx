import { ArrowDown, Download, MapPin } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { profile, ui } from '../i18n/content'
import { GithubIcon, LinkedinIcon } from './icons'

function CodeCard() {
  const { lang } = usePrefs()
  const k = 'text-accent-2'
  const s = 'text-accent'
  const c = 'text-faint'
  const p = 'text-ink'
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/10">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-faint">liseth.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
          <code>
            <span className={k}>const</span> <span className={p}>liseth</span> = {'{'}
            {'\n'}  <span className={p}>role</span>: <span className={s}>'{{ es: 'Full Stack + Instructora', en: 'Full Stack + Instructor', pt: 'Full Stack + Instrutora' }[lang]}'</span>,
            {'\n'}  <span className={p}>since</span>: <span className={s}>2021</span>,
            {'\n'}  <span className={p}>stack</span>: [<span className={s}>'TypeScript'</span>, <span className={s}>'Angular'</span>,
            {'\n'}          <span className={s}>'React'</span>, <span className={s}>'Node.js'</span>],
            {'\n'}  <span className={p}>ai</span>: [<span className={s}>'LLMs'</span>, <span className={s}>'RAG'</span>, <span className={s}>'Agents'</span>],
            {'\n'}  <span className={p}>cloud</span>: [<span className={s}>'AWS'</span>, <span className={s}>'Vercel'</span>, <span className={s}>'Docker'</span>],
            {'\n'}  <span className={p}>teaches</span>: <span className={s}>'SENA · FESNI'</span>,
            {'\n'}  <span className={p}>openToWork</span>: <span className={k}>true</span>,
            {'\n'}{'}'}
            {'\n'}
            {'\n'}<span className={c}>{{ es: '// también: socorrista y scout 🏕️', en: '// also: first responder & scout 🏕️', pt: '// também: socorrista e escoteira 🏕️' }[lang]}</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export function Hero() {
  const { t } = usePrefs()
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      {/* Brand shapes, echoing the Liseth Giraldo Dev cover: a diagonal band and a cyan ring */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-40 h-[140%] w-56 -rotate-[32deg] bg-brand-violet/[0.06] dark:bg-[#122b55]/60" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full border-[36px] border-brand-cyan/25 sm:h-96 sm:w-96 sm:border-[48px]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t(ui.available)}
          </p>
          <p className="mt-6 font-mono text-sm text-muted">{t(ui.hello)}</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-6xl">{profile.shortName}</h1>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="text-gradient">{t(ui.role)}</span> <span className="text-muted">{t(ui.role2)}</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t(ui.heroText)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-on-accent transition hover:bg-accent-strong"
            >
              {t(ui.seeProjects)}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-medium transition hover:border-accent/60"
            >
              <Download className="h-4 w-4" />
              {t(ui.cv)}
              <span className="text-faint">{t(ui.cvNote)}</span>
            </a>
            <div className="flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-3 text-muted transition hover:text-ink">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-3 text-muted transition hover:text-ink">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-faint">
            <MapPin className="h-4 w-4" /> {t(ui.location)}
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {ui.stats.map((s) => (
              <div key={s.value}>
                <dt className="sr-only">{t(s.label)}</dt>
                <dd className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{t(s.label)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeCard />
      </div>
    </section>
  )
}

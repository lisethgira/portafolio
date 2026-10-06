import { ArrowUpRight, Coffee, Compass, ExternalLink, Hexagon, ShoppingBag, Truck, Wallet } from 'lucide-react'
import { usePrefs } from '../context/prefs'
import { moreProjects, projects, skillLabel, ui, type Project } from '../i18n/content'
import { GithubIcon } from './icons'
import { Section, Tag } from './Section'

const icons = { cart: ShoppingBag, truck: Truck, hexagon: Hexagon, coffee: Coffee, wallet: Wallet, compass: Compass }

/* Covers use the three brand colors (navy, violet, cyan) in different mixes so the grid reads as one family. */
const covers: Record<Project['hue'], string> = {
  teal: 'from-[#0b1b3f] via-[#0f3a5c] to-[#22d3c5]',
  lime: 'from-[#0b1b3f] via-[#134e4a] to-[#22d3c5]',
  violet: 'from-[#0b1b3f] via-[#3b1d8f] to-[#7c3aed]',
  amber: 'from-[#0b1b3f] via-[#4c2a85] to-[#a78bfa]',
  sky: 'from-[#122b55] via-[#1e3a8a] to-[#22d3c5]',
  rose: 'from-[#0b1b3f] via-[#5b21b6] to-[#22d3c5]',
  orange: 'from-[#122b55] via-[#7c3aed] to-[#22d3c5]',
}

function Cover({ project }: { project: Project }) {
  const Icon = icons[project.icon]
  return (
    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${covers[project.hue]}`}>
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -right-10 -bottom-12 h-40 w-40 rounded-full border-[22px] border-white/10" />
      {/* tiny UI mock */}
      <div className="absolute top-5 right-5 bottom-0 left-24 rounded-t-lg border border-white/15 bg-white/10 p-3 backdrop-blur-sm transition duration-500 group-hover:-translate-y-1">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
        <div className="mt-3 h-2 w-2/3 rounded bg-white/40" />
        <div className="mt-2 h-2 w-1/2 rounded bg-white/25" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-8 rounded bg-white/20" />
          <div className="h-8 rounded bg-white/15" />
          <div className="h-8 rounded bg-white/20" />
        </div>
      </div>
      <span className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
        <Icon className="h-6 w-6" />
      </span>
    </div>
  )
}

export function Projects() {
  const { t } = usePrefs()
  const label = (s: string) => (skillLabel[s] ? t(skillLabel[s]) : s)
  return (
    <Section id="projects" eyebrow="04" title={t(ui.sections.projects)} intro={t(ui.sectionIntro.projects)}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-xl hover:shadow-black/5">
            <Cover project={p} />
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs text-accent">{t(p.kind)}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{t(p.description)}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {t(pt)}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Tag key={s}>{label(s)}</Tag>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-on-accent transition hover:bg-accent-strong"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t(ui.demo)}
                  </a>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm font-medium transition hover:border-accent/60"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t(ui.code)}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-display text-xl font-semibold">{t(ui.sections.more)}</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((m) => (
          <li key={m.repo}>
            <a
              href={m.repo}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full items-start justify-between gap-4 rounded-xl border border-line bg-surface p-4 transition hover:border-accent/50"
            >
              <div>
                <p className="font-medium">{t(m.name)}</p>
                <p className="mt-1 text-sm text-muted">{t(m.text)}</p>
                <p className="mt-2 font-mono text-xs text-faint">{m.stack}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">
        <a href="https://github.com/lisethgira?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline">
          <GithubIcon className="h-4 w-4" />
          {t({ es: 'Ver todos mis repositorios en GitHub', en: 'See all my repositories on GitHub', pt: 'Ver todos os meus repositórios no GitHub' })}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </p>
    </Section>
  )
}

import { useEffect, useRef, type ReactNode } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-24 ${className}`} aria-labelledby={`${id}-title`}>
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function Tag({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={
        strong
          ? 'inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-strong'
          : 'inline-flex items-center rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted'
      }
    >
      {children}
    </span>
  )
}

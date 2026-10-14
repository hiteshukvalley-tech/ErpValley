import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { securityPoints, techGroups } from '@/content/home'

export function Technology() {
  return (
    <Section tone="alt" aria-labelledby="tech-title">
      <SectionHeader
        id="tech-title"
        eyebrow="Technology"
        title="Modern technology, built to last"
        description="A proven web stack, secure by default and easy to extend as your business changes."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techGroups.map((g, i) => (
          <li key={g.title}>
            <Reveal delay={i * 60} className="h-full">
              <div className="h-full rounded-card border border-line bg-surface p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary-soft text-link">
                    <g.icon className="size-[18px]" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold">{g.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-bg-alt px-2.5 py-1 text-xs font-medium text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <div className="mt-6 rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-bold">Security and reliability</h3>
            <Link to="/technology" className="inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:underline">
              Our technology stack <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securityPoints.map((p) => (
              <li key={p.title} className="flex items-center gap-3 text-sm text-fg">
                <p.icon className="size-5 shrink-0 text-link" aria-hidden />
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

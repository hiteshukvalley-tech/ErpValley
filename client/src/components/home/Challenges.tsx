import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { challenges } from '@/content/home'

export function Challenges() {
  return (
    <Section aria-labelledby="challenges-title">
      <SectionHeader
        id="challenges-title"
        eyebrow="Why ERPVALLEY"
        title="From disconnected tools to one connected business"
        description="Most growing businesses hit the same walls. Here is how ERPVALLEY removes each one."
      />
      <ul className="mt-14 grid gap-5 md:grid-cols-2">
        {challenges.map((c, i) => (
          <li key={c.problem}>
            <Reveal delay={i * 80} className="h-full">
              <article className="grid h-full overflow-hidden rounded-card border border-line bg-surface shadow-card sm:grid-cols-2">
                <div className="p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-fg-muted">The challenge</p>
                  <h3 className="mt-1 text-lg font-bold">{c.problem}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{c.detail}</p>
                </div>
                <div className="relative border-t border-line bg-primary-soft p-6 sm:border-l sm:border-t-0">
                  <ArrowRight
                    className="absolute -left-3 top-1/2 hidden size-6 -translate-y-1/2 rounded-full border border-line bg-surface p-1 text-link sm:block"
                    aria-hidden
                  />
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                    <CheckCircle2 className="size-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-link">Our approach</p>
                  <p className="mt-1 font-medium leading-relaxed text-fg">{c.approach}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

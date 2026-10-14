import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { engagementTypes } from '@/content/home'

/**
 * Case studies and customer outcomes.
 * Only verified, client-approved case studies are shown as outcomes. Until those are published
 * from the admin panel (Step 7), this section describes engagement types without inventing results.
 */
export function CaseStudies() {
  return (
    <Section tone="alt" aria-labelledby="cases-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          id="cases-title"
          align="left"
          eyebrow="Case studies and outcomes"
          title="How we deliver ERP projects"
          description="The kinds of projects we take on, and what each one includes."
        />
        <Button to="/case-studies" variant="secondary">
          View case studies <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {engagementTypes.map((e, i) => (
          <li key={e.title}>
            <Reveal delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                  <e.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{e.text}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fg-muted">Typical scope</p>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {e.scope.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-fg">
                      <Check className="size-4 shrink-0 text-link" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-8 flex items-start gap-2 text-sm text-fg-muted">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
        We publish customer outcomes only when they are verified and approved by the client.
      </p>
    </Section>
  )
}

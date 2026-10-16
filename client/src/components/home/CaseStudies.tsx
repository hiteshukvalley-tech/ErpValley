import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { engagementTypes } from '@/content/home'
import { photos } from '@/content/photos'

/** One photo per engagement type, in the order of `engagementTypes`. */
const engagementPhotos = [photos.teamTraining, photos.engineerDatacenter, photos.developerDesk]

/**
 * Case studies and customer outcomes.
 * Only verified, client-approved case studies are shown as outcomes. Until some are added to
 * content/caseStudies.ts, this section describes engagement types without inventing results.
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
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card">
                <div className="relative aspect-[16/9]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Photo photo={engagementPhotos[i]} sizes="(min-width: 1024px) 30vw, 100vw" decorative className="card-photo" />
                  </div>
                  <span className="absolute -bottom-5 left-6 inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white shadow-pop ring-4 ring-surface">
                    <e.icon className="size-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-8">
                  <h3 className="text-lg font-bold">{e.title}</h3>
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
                </div>
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

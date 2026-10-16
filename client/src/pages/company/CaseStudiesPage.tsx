import { ArrowRight, Check, FileSearch, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '@/components/common/CtaBand'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { engagementTypes } from '@/content/home'
import { usePageMeta } from '@/hooks/usePageMeta'
import { bySlug, useContent } from '@/services/content'
import { fillLastRowMd } from '@/utils/grid'

export function CaseStudiesPage() {
  const { caseStudies, industries } = useContent<'caseStudies' | 'industries'>()
  const industryBySlug = bySlug(industries)
  usePageMeta(
    'Case Studies',
    'ERPVALLEY case studies: how ERP implementation, modernization and custom development projects are delivered. Only client-verified outcomes are published.',
  )

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real projects, verified outcomes"
        description="We publish a case study only when the client has reviewed it and approved the results we describe."
        actions={
          <Button to="/book-demo" size="lg">
            Discuss your project <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />

      <Section aria-labelledby="published-title">
        <h2 id="published-title" className="sr-only">Published case studies</h2>
        {caseStudies.length > 0 ? (
          <ul className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${fillLastRowMd}`}>
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/case-studies/${c.slug}`}
                  className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card card-link"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-link">
                    {industryBySlug.get(c.industry)?.name}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-fg-muted">{c.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                    Read case study <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={FileSearch}
            title="Case studies are being prepared"
            text="We are documenting recent projects with our clients. Each one will be published once the client has verified the results. In the meantime, we are happy to talk through relevant project experience on a call."
            actions={
              <>
                <Button to="/contact">Ask about relevant projects</Button>
                <Button to="/newsletter" variant="secondary">Get notified</Button>
              </>
            }
          />
        )}
      </Section>

      <Section tone="alt" aria-labelledby="types-title">
        <SectionHeader id="types-title" eyebrow="What we deliver" title="Types of projects we take on" />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagementTypes.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="card-hover h-full rounded-card border border-line bg-surface p-6 shadow-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                    <e.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{e.text}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                    {e.scope.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <Check className="size-4 shrink-0 text-link" aria-hidden />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-start gap-2 text-sm text-fg-muted">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
          Our publishing rule: no invented clients, logos or results. Every outcome we show is confirmed by the client.
        </p>
      </Section>

      <CtaBand title="Planning a similar project?" text="Tell us about your goals and we will outline how we would approach it." />
    </>
  )
}

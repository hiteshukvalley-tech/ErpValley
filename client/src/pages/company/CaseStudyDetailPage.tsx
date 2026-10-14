import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Chips } from '@/components/common/Chips'
import { CtaBand } from '@/components/common/CtaBand'
import { DetailHero } from '@/components/common/DetailHero'
import { LinkCards } from '@/components/common/LinkCards'
import { Steps } from '@/components/common/Steps'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeader } from '@/components/ui/Section'
import { caseStudies, caseStudyBySlug } from '@/content/caseStudies'
import { industryBySlug } from '@/content/industries'
import { productBySlug } from '@/content/products'
import { serviceBySlug } from '@/content/services'
import type { CaseStudyContent } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function CaseStudyDetailPage() {
  const { slug = '' } = useParams()
  const study = caseStudyBySlug.get(slug)
  return study ? <CaseStudyView key={study.slug} study={study} related={caseStudies} /> : <NotFoundPage />
}

/** Case study template. Exported separately so it can be tested with fixture data. */
export function CaseStudyView({ study: c, related }: { study: CaseStudyContent; related: CaseStudyContent[] }) {
  usePageMeta(c.title, c.metaDescription)
  const industry = industryBySlug.get(c.industry)
  const others = related
    .filter((r) => r.slug !== c.slug)
    .slice(0, 3)
    .map((r) => ({ to: `/case-studies/${r.slug}`, title: r.title, text: r.summary, icon: industryBySlug.get(r.industry)!.icon }))
  const usedProducts = c.products.flatMap((s) => productBySlug.get(s) ?? [])
  const usedServices = c.services.flatMap((s) => serviceBySlug.get(s) ?? [])

  return (
    <>
      <DetailHero
        crumbs={[{ label: 'Case Studies', to: '/case-studies' }, { label: c.client }]}
        eyebrow={industry ? `Case study · ${industry.name}` : 'Case study'}
        icon={industry?.icon}
        title={c.title}
        description={c.summary}
        actions={
          <Button to="/book-demo" size="lg">
            Discuss a similar project <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />

      <Section aria-labelledby="context-title">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <SectionHeader id="context-title" align="left" eyebrow="Client context" title={c.client} />
            <p className="mt-4 leading-relaxed text-fg-muted">{c.context}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">The challenge</h2>
            {c.challenge.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-fg-muted">{p}</p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold">The solution</h2>
            {c.solution.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-fg-muted">{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="approach-title">
        <SectionHeader id="approach-title" eyebrow="Implementation approach" title="How the project was delivered" />
        <div className="mt-14">
          <Steps steps={c.approach} ringClass="ring-bg-alt" />
        </div>
      </Section>

      <Section aria-labelledby="outcomes-title">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader id="outcomes-title" align="left" eyebrow="Verified outcomes" title="Results confirmed by the client" />
            <ul className="mt-8 space-y-4">
              {c.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-card border border-line bg-surface p-5 shadow-card">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-link" aria-hidden />
                  <span className="text-fg">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 self-start rounded-3xl border border-line bg-bg-alt p-6 sm:p-8">
            <div>
              <h3 className="text-lg font-bold">Technology used</h3>
              <Chips items={c.technologies} className="mt-4" />
            </div>
            {usedProducts.length + usedServices.length > 0 && (
              <div>
                <h3 className="text-lg font-bold">Products and services</h3>
                <Chips items={[...usedProducts.map((p) => p.name), ...usedServices.map((s) => s.name)]} className="mt-4" />
              </div>
            )}
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="alt" aria-labelledby="related-title">
          <SectionHeader id="related-title" eyebrow="More case studies" title="Related projects" />
          <div className="mt-10">
            <LinkCards items={others} columns={3} />
          </div>
        </Section>
      )}

      <CtaBand title="Planning a similar project?" text="Tell us about your goals and we will outline how we would approach it." />
    </>
  )
}

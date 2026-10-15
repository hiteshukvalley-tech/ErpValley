import { ArrowRight, CheckCircle2, FileCheck2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Chips } from '@/components/common/Chips'
import { CtaBand } from '@/components/common/CtaBand'
import { DetailHero } from '@/components/common/DetailHero'
import { FaqSection } from '@/components/common/FaqSection'
import { IconGrid } from '@/components/common/IconGrid'
import { LinkCards } from '@/components/common/LinkCards'
import { Steps } from '@/components/common/Steps'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeader } from '@/components/ui/Section'
import type { ServiceContent } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { bySlug, useContent } from '@/services/content'

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const { services } = useContent<'services'>()
  const service = bySlug(services).get(slug)
  return service ? <ServiceView key={service.slug} service={service} /> : <NotFoundPage />
}

function ServiceView({ service: s }: { service: ServiceContent }) {
  usePageMeta(s.name, s.metaDescription)
  const content = useContent<'services' | 'products'>()
  const serviceBySlug = bySlug(content.services)
  const productBySlug = bySlug(content.products)
  const relatedServices = s.relatedServices.flatMap((slug) => {
    const r = serviceBySlug.get(slug)
    return r ? [{ to: `/services/${r.slug}`, title: r.name, text: r.summary, icon: r.icon }] : []
  })
  const relatedProducts = s.relatedProducts.flatMap((slug) => {
    const p = productBySlug.get(slug)
    return p ? [p] : []
  })

  return (
    <>
      <DetailHero
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.name }]}
        eyebrow="Services"
        icon={s.icon}
        title={s.headline}
        description={s.summary}
        actions={
          <>
            <Button to={`/request-quote?service=${s.slug}`} size="lg">
              Request a Quote <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/contact" variant="onDark" size="lg">Talk to an expert</Button>
          </>
        }
        visual={
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <FileCheck2 className="size-4 text-logo-blue" aria-hidden /> What you receive
            </p>
            <ul className="mt-5 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-logo-blue" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section aria-labelledby="problems-title">
        <SectionHeader id="problems-title" eyebrow="Problems we solve" title={`When to bring in ${s.name.toLowerCase()} help`} />
        <div className="mt-12">
          <IconGrid items={s.problems} columns={4} variant="accent" />
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="capabilities-title">
        <SectionHeader id="capabilities-title" eyebrow="Service capabilities" title="What we deliver" />
        <div className="mt-12">
          <IconGrid items={s.capabilities} columns={3} />
        </div>
      </Section>

      <Section aria-labelledby="process-title">
        <SectionHeader
          id="process-title"
          eyebrow="Delivery process"
          title="How the work gets done"
          description="Clear stages with agreed outputs, so you always know where the project stands."
        />
        <div className="mt-14">
          <Steps steps={s.process} />
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="tech-title">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader id="tech-title" align="left" eyebrow="Technology stack" title="Tools we use" />
            <Chips items={s.technologies} className="mt-6" />
          </div>
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-lg font-bold">Related ERPVALLEY products</h3>
              <ul className="mt-5 space-y-3">
                {relatedProducts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/products/${p.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-card hover:border-link/50"
                    >
                      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary-soft text-link">
                        <p.icon className="size-4" aria-hidden />
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold text-fg">{p.name}</span>
                        <span className="block text-sm text-fg-muted">{p.purpose}</span>
                      </span>
                      <ArrowRight className="size-4 text-fg-muted group-hover:text-link" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      <Section aria-labelledby="related-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader id="related-title" align="left" eyebrow="Related services" title="Often delivered together" />
          <Button to="/case-studies" variant="secondary">
            View case studies <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-10">
          <LinkCards items={relatedServices} columns={3} />
        </div>
      </Section>

      <FaqSection title={`${s.name} FAQs`} faqs={s.faqs} tone="alt" />

      <CtaBand
        title={`Discuss your ${s.name.toLowerCase()} project`}
        text="Share your requirements and we will reply with a scoped estimate and recommended next steps."
        primary={{ label: 'Request a Quote', to: `/request-quote?service=${s.slug}` }}
        secondary={{ label: 'Book a call', to: '/book-demo' }}
      />
    </>
  )
}

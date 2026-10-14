import { ArrowRight, Boxes } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Chips } from '@/components/common/Chips'
import { CtaBand } from '@/components/common/CtaBand'
import { DetailHero } from '@/components/common/DetailHero'
import { FaqSection } from '@/components/common/FaqSection'
import { IconGrid } from '@/components/common/IconGrid'
import { LinkCards } from '@/components/common/LinkCards'
import { Steps } from '@/components/common/Steps'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import type { IndustryContent } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { bySlug, useContent } from '@/services/content'

export function IndustryDetailPage() {
  const { slug = '' } = useParams()
  const { industries } = useContent<'industries'>()
  const industry = bySlug(industries).get(slug)
  return industry ? <IndustryView key={industry.slug} industry={industry} /> : <NotFoundPage />
}

function IndustryView({ industry: ind }: { industry: IndustryContent }) {
  usePageMeta(`ERP for ${ind.name}`, ind.metaDescription)
  const productBySlug = bySlug(useContent<'products'>().products)
  const modules = ind.modules.flatMap(({ slug, why }) => {
    const p = productBySlug.get(slug)
    return p ? [{ to: `/products/${p.slug}`, title: p.name, text: why, icon: p.icon }] : []
  })

  return (
    <>
      <DetailHero
        crumbs={[{ label: 'Industries', to: '/industries' }, { label: ind.name }]}
        eyebrow={`ERP for ${ind.name}`}
        icon={ind.icon}
        title={ind.headline}
        description={ind.summary}
        actions={
          <>
            <Button to="/book-demo" size="lg">
              Book a consultation <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/request-quote" variant="onDark" size="lg">Request a Quote</Button>
          </>
        }
        visual={
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <Boxes className="size-4 text-logo-blue" aria-hidden /> Recommended modules
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {modules.map((m) => (
                <li key={m.to} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-electric text-white">
                    <m.icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-white">{m.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm text-mist">
              Core workflow: <span className="font-semibold text-white">{ind.workflow.title}</span>
            </p>
          </div>
        }
      />

      <Section aria-labelledby="overview-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeader id="overview-title" align="left" eyebrow="Industry overview" title={`How ${ind.name.toLowerCase()} businesses run on ERPVALLEY`} />
            {ind.overview.map((para) => (
              <p key={para.slice(0, 24)} className="mt-5 leading-relaxed text-fg-muted">{para}</p>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold">Common challenges we solve</h3>
            <div className="mt-5">
              <IconGrid items={ind.challenges} columns={2} variant="accent" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="workflow-title">
        <SectionHeader id="workflow-title" onDark eyebrow="Recommended workflow" title={ind.workflow.title} />
        <div className="mt-14">
          <Steps steps={ind.workflow.steps} onDark ringClass="ring-navy dark:ring-[#0a1836]" />
        </div>
      </Section>

      <Section aria-labelledby="modules-title">
        <SectionHeader
          id="modules-title"
          eyebrow="Relevant ERP modules"
          title={`Modules for ${ind.name.toLowerCase()}`}
          description="Start with the modules that matter most and add others as you grow."
        />
        <div className="mt-12">
          <LinkCards items={modules} columns={3} />
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="usecases-title">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeader id="usecases-title" align="left" eyebrow="Use cases" title="Where ERPVALLEY makes a difference" />
            <ul className="mt-8 space-y-4">
              {ind.useCases.map((u, i) => (
                <li key={u.title}>
                  <Reveal delay={i * 70}>
                    <div className="flex gap-4 rounded-card border border-line bg-surface p-5 shadow-card">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-bold text-link">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold">{u.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-fg-muted">{u.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <h3 className="text-lg font-bold">Integrations</h3>
            <p className="mt-2 text-sm text-fg-muted">ERPVALLEY connects with the systems {ind.name.toLowerCase()} teams rely on.</p>
            <Chips items={ind.integrations} className="mt-5" />
          </div>
        </div>
      </Section>

      <FaqSection title={`ERP for ${ind.name}: FAQs`} faqs={ind.faqs} />

      <CtaBand
        title={`Plan your ${ind.name.toLowerCase()} ERP setup`}
        text="Book a consultation. We will map your workflows and recommend the right modules and integrations."
        primary={{ label: 'Book a consultation', to: '/book-demo' }}
        secondary={{ label: 'Talk to sales', to: '/contact' }}
      />
    </>
  )
}

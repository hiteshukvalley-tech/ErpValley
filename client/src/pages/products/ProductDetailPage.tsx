import { ArrowRight, Check, Users } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Chips } from '@/components/common/Chips'
import { CtaBand } from '@/components/common/CtaBand'
import { DetailHero } from '@/components/common/DetailHero'
import { FaqSection } from '@/components/common/FaqSection'
import { IconGrid } from '@/components/common/IconGrid'
import { LinkCards } from '@/components/common/LinkCards'
import { DataScreenPreview } from '@/components/mockups/DataScreenPreview'
import { ModulePreview } from '@/components/mockups/ModulePreview'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { productBySlug } from '@/content/products'
import type { ProductContent, ProductSlug } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = productBySlug.get(slug as ProductSlug)
  return product ? <ProductView key={product.slug} product={product} /> : <NotFoundPage />
}

function ProductView({ product: p }: { product: ProductContent }) {
  usePageMeta(`${p.name} Software`, p.metaDescription)
  const related = p.relatedModules.flatMap((s) => {
    const r = productBySlug.get(s)
    return r ? [{ to: `/products/${r.slug}`, title: r.name, text: r.purpose, icon: r.icon }] : []
  })

  return (
    <>
      <DetailHero
        crumbs={[{ label: 'Products', to: '/products' }, { label: p.name }]}
        eyebrow={p.name}
        icon={p.icon}
        title={p.headline}
        description={p.summary}
        actions={
          <>
            <Button to="/book-demo" size="lg">
              Book a Demo <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/request-quote" variant="onDark" size="lg">Request a Quote</Button>
          </>
        }
        meta={
          <p className="flex items-center gap-2">
            <Users className="size-4 text-logo-blue" aria-hidden />
            <span><span className="font-semibold text-white">Typical users:</span> {p.typicalUsers}</span>
          </p>
        }
        visual={
          <figure>
            {typeof p.preview === 'string' ? <ModulePreview kind={p.preview} /> : <DataScreenPreview screen={p.preview} />}
            <figcaption className="mt-3 text-center text-xs text-mist">Product preview with sample data.</figcaption>
          </figure>
        }
      />

      <Section aria-labelledby="benefits-title">
        <SectionHeader id="benefits-title" eyebrow="Business benefits" title={`Why teams choose ERPVALLEY ${p.name}`} />
        <div className="mt-12">
          <IconGrid items={p.benefits} columns={4} variant="plain" />
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="features-title">
        <SectionHeader
          id="features-title"
          eyebrow="Features and capabilities"
          title="Everything you need, working together"
          description={`The core features of ${p.name}, all connected to the rest of your ERP.`}
        />
        <div className="mt-12">
          <IconGrid items={p.features} columns={3} />
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {p.capabilityGroups.map((g) => (
            <Reveal key={g.title} className="h-full">
              <div className="h-full rounded-card border border-line bg-surface p-6">
                <h3 className="text-base font-bold">{g.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-fg">
                      <Check className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="connect-title">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeader
              id="connect-title"
              align="left"
              eyebrow="Modules and integrations"
              title="Works with the rest of your business"
              description={`${p.name} shares data with these modules, so information is entered once and used everywhere.`}
            />
            <div className="mt-8">
              <LinkCards items={related} columns={2} />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-bg-alt p-6 sm:p-8">
            <h3 className="text-lg font-bold">Connects with</h3>
            <p className="mt-2 text-sm text-fg-muted">Through the ERPVALLEY REST API, webhooks and our integration services.</p>
            <Chips items={p.integrations} className="mt-5" />
            <Button to="/products/integrations" variant="secondary" size="sm" className="mt-6">
              All integrations <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="navy" aria-labelledby="usecases-title">
        <SectionHeader id="usecases-title" onDark eyebrow="Use cases" title={`How businesses use ${p.name}`} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {p.useCases.map((u, i) => (
            <li key={u.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full rounded-card border border-line-dark bg-white/[0.03] p-6">
                  <span className="font-display text-sm font-bold text-logo-blue">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{u.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <FaqSection title={`${p.name} questions`} faqs={p.faqs} />

      <CtaBand
        title={`See ${p.name} in action`}
        text="Book a demo and we will walk through the module using examples from your own business."
      />
    </>
  )
}

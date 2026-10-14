import { ArrowRight, ChevronRight, GitCompare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '@/components/common/CtaBand'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { products, productBySlug } from '@/content/products'
import type { ProductCategory, ProductSlug } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'

const categories: ProductCategory[] = [
  'Platform',
  'Finance',
  'Sales & Customers',
  'Operations',
  'People & Projects',
  'Insights & Automation',
]

/** A typical order-to-cash flow showing how modules hand data to each other. */
const flow: ProductSlug[] = ['crm', 'sales-management', 'inventory-management', 'finance-accounting', 'reporting-analytics']

export function ProductsOverviewPage() {
  usePageMeta(
    'ERP Products and Modules',
    'Explore ERPVALLEY modules for finance, CRM, sales, inventory, procurement, manufacturing, HR, projects, reporting and automation, all on one connected platform.',
  )

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One platform. Every module your business needs."
        description="ERPVALLEY modules share one database, so a sale, a purchase or a payroll run updates everything it touches. Start with what you need and add more as you grow."
        actions={
          <>
            <Button to="/book-demo" size="lg">
              Book a Demo <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/products/compare" variant="onDark" size="lg">
              <GitCompare className="size-4" aria-hidden /> Compare modules
            </Button>
          </>
        }
      />

      <Section aria-labelledby="flow-title">
        <SectionHeader
          id="flow-title"
          eyebrow="How modules connect"
          title="Data flows from one team to the next"
          description="A typical order moves through five modules without anyone re-entering it."
        />
        <ol className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {flow.map((slug, i) => {
            const p = productBySlug.get(slug)!
            return (
              <li key={slug} className="flex flex-1 flex-col items-center gap-3 lg:flex-row">
                <Link
                  to={`/products/${slug}`}
                  className="flex w-full flex-1 items-center gap-3 rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-link/50 lg:flex-col lg:text-center"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-fg">{p.name}</span>
                    <span className="block text-xs text-fg-muted">{p.purpose}</span>
                  </span>
                </Link>
                {i < flow.length - 1 && (
                  <ChevronRight className="size-5 shrink-0 rotate-90 text-link lg:rotate-0" aria-hidden />
                )}
              </li>
            )
          })}
        </ol>
      </Section>

      {categories.map((cat, ci) => {
        const items = products.filter((p) => p.category === cat)
        if (!items.length) return null
        return (
          <Section key={cat} tone={ci % 2 === 0 ? 'alt' : 'default'} className="!py-14" aria-label={cat}>
            <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
              <h2 className="text-2xl font-bold">{cat}</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((p, i) => (
                  <li key={p.slug}>
                    <Reveal delay={(i % 2) * 60} className="h-full">
                      <Link
                        to={`/products/${p.slug}`}
                        className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-link/50 hover:shadow-pop"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-link transition-colors group-hover:bg-primary group-hover:text-white">
                            <p.icon className="size-5" aria-hidden />
                          </span>
                          <h3 className="text-lg font-bold">{p.name}</h3>
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{p.summary}</p>
                        <p className="mt-4 text-xs text-fg-muted">
                          <span className="font-semibold text-fg">Typical users:</span> {p.typicalUsers}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                          Explore {p.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )
      })}

      <CtaBand
        title="Not sure where to start?"
        text="Compare modules side by side, or book a demo and we will recommend the right set for your business."
        primary={{ label: 'Book a Demo', to: '/book-demo' }}
        secondary={{ label: 'Compare modules', to: '/products/compare' }}
      />
    </>
  )
}

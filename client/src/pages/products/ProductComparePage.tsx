import { ArrowRight, Check, Layers, Rocket, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '@/components/common/CtaBand'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import type { ProductSlug } from '@/content/types'
import { photos } from '@/content/photos'
import { usePageMeta } from '@/hooks/usePageMeta'
import { bySlug, useContent } from '@/services/content'
import { cn } from '@/utils/cn'

/** Suggested starting sets by business stage. Recommendations only; pricing is quoted separately. */
const sets: { name: string; icon: typeof Rocket; fit: string; modules: ProductSlug[] }[] = [
  {
    name: 'Core',
    icon: Rocket,
    fit: 'Small businesses moving off spreadsheets or a basic accounting tool.',
    modules: ['finance-accounting', 'sales-management', 'inventory-management'],
  },
  {
    name: 'Growth',
    icon: TrendingUp,
    fit: 'Growing teams that need a sales pipeline, purchasing control and reporting.',
    modules: ['finance-accounting', 'sales-management', 'inventory-management', 'crm', 'purchase-management', 'reporting-analytics'],
  },
  {
    name: 'Complete operations',
    icon: Layers,
    fit: 'Multi-team or multi-site businesses running production, people and projects.',
    modules: [
      'finance-accounting',
      'sales-management',
      'inventory-management',
      'crm',
      'purchase-management',
      'reporting-analytics',
      'procurement',
      'manufacturing',
      'hr-payroll',
      'project-management',
      'workflow-automation',
      'integrations',
    ],
  },
]

export function ProductComparePage() {
  const { products } = useContent<'products'>()
  const productBySlug = bySlug(products)
  const modules = products.filter((p) => p.slug !== 'erp-platform')
  usePageMeta(
    'Compare ERP Modules',
    'Compare ERPVALLEY modules side by side: what each one does, who uses it and which modules work best together, plus suggested starting sets by business stage.',
  )

  return (
    <>
      <PageHero
        image={photos.warehouseFloor}
        eyebrow="Product comparison"
        title="Find the right mix of modules"
        description="See what each module does, who uses it and how they fit together. Every module runs on the same ERPVALLEY platform."
        actions={
          <Button to="/book-demo" size="lg">
            Get a recommendation <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />

      <Section aria-labelledby="sets-title">
        <SectionHeader
          id="sets-title"
          eyebrow="Suggested starting sets"
          title="Common ways businesses start"
          description="Every business is different. These are starting points, and we will tailor the set to your needs."
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {sets.map((set, i) => (
            <li key={set.name}>
              <Reveal delay={i * 80} className="h-full">
                <div
                  className={cn(
                    'card-hover flex h-full flex-col rounded-card border bg-surface p-6 shadow-card',
                    i === 1 ? 'border-link ring-1 ring-link' : 'border-line',
                  )}
                >
                  <span className="card-icon inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-link">
                    <set.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{set.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{set.fit}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {set.modules.map((slug) => (
                      <li key={slug} className="flex items-center gap-2 text-sm text-fg">
                        <Check className="size-4 shrink-0 text-link" aria-hidden />
                        {productBySlug.get(slug)!.name}
                      </li>
                    ))}
                  </ul>
                  <Button to="/request-quote" variant={i === 1 ? 'primary' : 'secondary'} className="mt-6">
                    Request a quote
                  </Button>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt" aria-labelledby="table-title">
        <SectionHeader id="table-title" eyebrow="Side by side" title="Module comparison" />
        {/* The table scrolls inside its own container on small screens; the page never scrolls sideways. */}
        <div className="mt-10 overflow-x-auto rounded-card border border-line bg-surface shadow-card" tabIndex={0} aria-label="Module comparison table, scrollable">
          <table className="w-full min-w-[760px] text-left text-sm">
            <caption className="sr-only">Comparison of ERPVALLEY modules by purpose, typical users and related modules</caption>
            <thead className="bg-bg-alt text-fg">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Module</th>
                <th scope="col" className="px-5 py-4 font-semibold">What it does</th>
                <th scope="col" className="px-5 py-4 font-semibold">Typical users</th>
                <th scope="col" className="px-5 py-4 font-semibold">Works best with</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((p) => (
                <tr key={p.slug} className="border-t border-line align-top">
                  <th scope="row" className="px-5 py-4 font-normal">
                    <Link to={`/products/${p.slug}`} className="flex items-center gap-2.5 font-semibold text-fg hover:text-link">
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-link">
                        <p.icon className="size-4" aria-hidden />
                      </span>
                      {p.name}
                    </Link>
                  </th>
                  <td className="px-5 py-4 text-fg-muted">{p.purpose}</td>
                  <td className="px-5 py-4 text-fg-muted">{p.typicalUsers}</td>
                  <td className="px-5 py-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.relatedModules.map((r) => (
                        <li key={r}>
                          <Link
                            to={`/products/${r}`}
                            className="inline-block rounded-md bg-bg-alt px-2 py-1 text-xs font-medium text-fg hover:text-link"
                          >
                            {productBySlug.get(r)?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand
        title="Get a module recommendation"
        text="Tell us how your business works and we will suggest the right modules, integrations and rollout order."
      />
    </>
  )
}

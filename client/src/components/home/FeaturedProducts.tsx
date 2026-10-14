import { ArrowRight, Check } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { ModulePreview } from '@/components/mockups/ModulePreview'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeader } from '@/components/ui/Section'
import { featuredProducts } from '@/content/home'
import { cn } from '@/utils/cn'

/** Tabbed product showcase (WAI-ARIA tabs pattern with arrow-key navigation). */
export function FeaturedProducts() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const product = featuredProducts[active]

  const onKeyDown = (e: KeyboardEvent) => {
    const last = featuredProducts.length - 1
    const next =
      e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section aria-labelledby="featured-title">
      <SectionHeader
        id="featured-title"
        eyebrow="Featured products"
        title="See how ERPVALLEY works for your teams"
        description="Click through the modules most businesses start with, shown as product previews with sample data."
      />

      <div
        role="tablist"
        aria-label="Featured products"
        onKeyDown={onKeyDown}
        className="mx-auto mt-10 flex w-fit max-w-full gap-1 overflow-x-auto rounded-xl border border-line bg-bg-alt p-1"
      >
        {featuredProducts.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            type="button"
            id={`tab-${p.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${p.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              'h-10 shrink-0 rounded-lg px-4 text-sm font-semibold transition-colors sm:px-5',
              active === i ? 'bg-surface text-fg shadow-card' : 'text-fg-muted hover:text-fg',
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${product.id}`}
        aria-labelledby={`tab-${product.id}`}
        className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14"
      >
        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">{product.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{product.description}</p>
          <ul className="mt-6 space-y-3">
            {product.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="size-3" aria-hidden />
                </span>
                <span className="text-fg">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={product.to}>
              Explore {product.label} <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/book-demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </div>
        <div key={product.id} className="animate-[ev-fade_0.35s_ease-out]">
          <ModulePreview kind={product.id} />
        </div>
      </div>
    </Section>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { productItems } from '@/config/navigation'

// ERP Platform is the umbrella product; the grid shows the individual apps.
const modules = productItems.filter((p) => p.to !== '/products/erp-platform')

// Three tones from the brand blue range keep the grid lively without off-brand colors.
const tones = [
  'from-[#0B5CFF] to-[#2788FF]',
  'from-[#0B1B3B] to-[#0B5CFF]',
  'from-[#2788FF] to-[#5aa6ff]',
]

/** App-grid presentation of the ERP modules: quick to scan, every tile links to its product page. */
export function CoreModules() {
  return (
    <Section tone="alt" aria-labelledby="modules-title">
      <SectionHeader
        id="modules-title"
        eyebrow="Core ERP modules"
        title="One platform. An app for every department."
        description="Pick the apps you need today and switch on more as you grow. They all share the same data, so nothing is typed twice."
      />

      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {modules.map((m, i) => (
          <li key={m.to}>
            <Reveal delay={(i % 6) * 50} className="h-full">
              <Link
                to={m.to}
                className="group flex h-full flex-col items-center rounded-2xl border border-transparent p-4 text-center card-link hover:bg-surface"
              >
                <span
                  className={`inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tones[i % tones.length]} text-white shadow-[0_10px_24px_-10px_rgb(11_92_255/0.7)] transition-transform group-hover:scale-105`}
                >
                  <m.icon className="size-7" aria-hidden />
                </span>
                <span className="mt-3 font-display text-sm font-bold text-fg">{m.label}</span>
                <span className="mt-1 text-xs leading-snug text-fg-muted">{m.description}</span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button to="/products">
          View all products <ArrowRight className="size-4" aria-hidden />
        </Button>
        <Button to="/products/compare" variant="secondary">
          Which modules do I need?
        </Button>
      </div>
    </Section>
  )
}

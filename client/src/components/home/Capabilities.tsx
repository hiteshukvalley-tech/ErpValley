import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { integrationCategories, platformCapabilities } from '@/content/home'

/** Platform capabilities plus an integration hub diagram. */
export function Capabilities() {
  return (
    <Section aria-labelledby="capabilities-title">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            id="capabilities-title"
            align="left"
            eyebrow="Platform and integrations"
            title="A flexible platform that connects to your tools"
            description="The capabilities every module shares, plus integrations with the systems you already rely on."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {platformCapabilities.map((c, i) => (
              <li key={c.title}>
                <Reveal delay={(i % 2) * 80} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-link">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{c.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Button to="/products/integrations" variant="secondary" className="mt-10">
            Explore integrations <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>

        <Reveal>
          <div className="card-hover rounded-3xl border border-line bg-bg-alt p-6 sm:p-8">
            <p className="text-center text-sm font-semibold text-fg-muted">Integration hub</p>
            <div className="relative mx-auto mt-6 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
              {integrationCategories.slice(0, 4).map((c) => (
                <IntegrationChip key={c.label} {...c} />
              ))}
              <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl bg-primary p-4 text-center text-white shadow-pop sm:col-span-1 sm:row-span-1">
                <span className="font-display text-sm font-extrabold">ERPVALLEY</span>
                <span className="mt-0.5 text-[11px] text-white">REST API · Webhooks</span>
              </div>
              {integrationCategories.slice(4).map((c) => (
                <IntegrationChip key={c.label} {...c} />
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-fg-muted">
              Need something specific? Our{' '}
              <Link to="/services/third-party-integrations" className="font-semibold text-link hover:underline">
                integration services
              </Link>{' '}
              team builds custom connectors.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function IntegrationChip({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="card-hover flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface p-4 text-center shadow-card">
      <Icon className="size-5 text-link" aria-hidden />
      <span className="text-xs font-semibold text-fg">{label}</span>
    </div>
  )
}

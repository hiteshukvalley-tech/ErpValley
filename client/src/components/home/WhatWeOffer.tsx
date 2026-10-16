import { ArrowRight, Check, CheckCircle2, Circle, PlugZap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { productItems } from '@/config/navigation'
import { offers, type Offer } from '@/content/home'
import { cn } from '@/utils/cn'

/* Small decorative illustrations, one per offer. */

function SoftwareArt() {
  const apps = productItems.slice(1, 10)
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {apps.map((a, i) => (
        <div
          key={a.to}
          className={cn(
            'flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl text-white shadow-sm',
            ['bg-electric', 'bg-[#1565e8]', 'bg-[#1d4ed8]'][i % 3],
          )}
        >
          <a.icon className="size-5" />
          <span className="px-1 text-center text-[9px] font-semibold leading-tight">{a.label.split(' ')[0]}</span>
        </div>
      ))}
    </div>
  )
}

function ServicesArt() {
  const steps = ['Discover', 'Configure', 'Migrate data', 'Train team', 'Go live']
  return (
    <ol className="space-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-fg">
          {i < 3 ? <CheckCircle2 className="size-4 text-emerald-500" /> : i === 3 ? <Circle className="size-4 text-link" strokeWidth={3} /> : <Circle className="size-4 text-line" />}
          {s}
          {i === 3 && <span className="ml-auto rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-link">In progress</span>}
        </li>
      ))}
    </ol>
  )
}

function CustomArt() {
  return (
    <div className="overflow-hidden rounded-xl bg-[#0b1730] font-mono text-[11px] leading-relaxed text-mist shadow-sm">
      <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2 rounded-full bg-rose-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-emerald-400" />
      </div>
      <pre className="overflow-hidden px-3 py-3">
        <span className="text-logo-blue">POST</span> /api/v1/orders{'\n'}
        {'{'}{'\n'}
        {'  '}<span className="text-emerald-300">"customer"</span>: "C-1042",{'\n'}
        {'  '}<span className="text-emerald-300">"items"</span>: 3,{'\n'}
        {'  '}<span className="text-emerald-300">"sync"</span>: ["stock", "invoice"]{'\n'}
        {'}'}
      </pre>
      <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2 text-emerald-300">
        <PlugZap className="size-3.5" /> 201 Created · webhook sent
      </div>
    </div>
  )
}

const art: Record<Offer['id'], () => React.JSX.Element> = { software: SoftwareArt, services: ServicesArt, custom: CustomArt }

export function WhatWeOffer() {
  return (
    <Section className="!pt-20" aria-labelledby="offer-title">
      <SectionHeader
        id="offer-title"
        eyebrow="What ERPVALLEY offers"
        title="Software, setup and support. Everything in one place."
        description="Buy the ERP, get it implemented by experts and extend it with custom features, all from one team."
      />
      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {offers.map((o, i) => {
          const Art = art[o.id]
          return (
            <li key={o.id}>
              <Reveal delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card card-hover">
                  <div className="border-b border-line bg-bg-alt p-6" aria-hidden>
                    <div className="mx-auto max-w-[260px]">
                      <Art />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{o.eyebrow}</p>
                    <h3 className="mt-2 text-xl font-bold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{o.text}</p>
                    <ul className="mt-5 flex-1 space-y-2">
                      {o.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-fg">
                          <Check className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link to={o.cta.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:underline">
                      {o.cta.label} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

import { ArrowRight, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { industryItems } from '@/config/navigation'

export function Industries() {
  return (
    <Section tone="navy" aria-labelledby="industries-title">
      <SectionHeader
        id="industries-title"
        onDark
        eyebrow="Industry solutions"
        title="ERP solutions for every industry"
        description="Manufacturing, retail, healthcare, logistics and more. ERPVALLEY is configured around the workflows, rules and reports of your industry."
      />
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industryItems.map((ind, i) => (
          <li key={ind.to}>
            <Reveal delay={(i % 4) * 60} className="h-full">
              <Link
                to={ind.to}
                className="group flex h-full items-start gap-4 rounded-card border border-line-dark bg-white/[0.03] p-5 transition-colors hover:border-logo-blue/60 hover:bg-white/[0.06]"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-logo-blue/15 text-logo-blue">
                  <ind.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 font-display font-bold text-white">
                    {ind.label}
                    <ArrowRight
                      className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-mist">{ind.description}</span>
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
        <li>
          <Reveal delay={180} className="h-full">
            <Link
              to="/contact"
              className="flex h-full items-start gap-4 rounded-card border border-dashed border-logo-blue/50 p-5 transition-colors hover:bg-white/[0.06]"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-electric text-white">
                <MessagesSquare className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-display font-bold text-white">Industry not listed?</span>
                <span className="mt-1 block text-sm leading-snug text-mist">Tell us how you work and we will map it.</span>
              </span>
            </Link>
          </Reveal>
        </li>
      </ul>
    </Section>
  )
}

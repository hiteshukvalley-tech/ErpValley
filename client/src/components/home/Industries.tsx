import { ArrowRight, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { industryItems } from '@/config/navigation'
import { industryPhotos } from '@/content/photos'
import type { IndustrySlug } from '@/content/types'

const slugOf = (to: string) => to.split('/').pop() as IndustrySlug

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
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industryItems.map((ind, i) => (
          <li key={ind.to}>
            <Reveal delay={(i % 4) * 60} className="h-full">
              <Link
                to={ind.to}
                className="group card-link relative block aspect-[4/3] overflow-hidden rounded-card border border-line-dark focus-visible:ring-2 focus-visible:ring-logo-blue"
              >
                <Photo
                  photo={industryPhotos[slugOf(ind.to)]}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  decorative
                  className="card-photo"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/5" aria-hidden />
                <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                  <span className="flex items-center gap-2 font-display font-bold text-white">
                    <ind.icon className="size-4 shrink-0 text-logo-blue" aria-hidden />
                    {ind.label}
                    <ArrowRight
                      className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm leading-snug text-mist">{ind.description}</span>
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
        <li>
          <Reveal delay={180} className="h-full">
            <Link
              to="/contact"
              className="flex aspect-[4/3] h-full flex-col justify-end gap-3 rounded-card border border-dashed border-logo-blue/50 p-5 card-link hover:bg-white/[0.06]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-electric text-white">
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

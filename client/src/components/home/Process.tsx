import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { processSteps } from '@/content/home'
import { photos } from '@/content/photos'

export function Process() {
  return (
    <Section aria-labelledby="process-title">
      <SectionHeader
        id="process-title"
        eyebrow="Implementation process"
        title="A clear path from first call to go-live"
        description="Six stages, each with agreed deliverables, so you always know what happens next."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-24">
          <figure className="card-hover relative overflow-hidden rounded-3xl shadow-pop">
            <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Photo photo={photos.planningWorkshop} sizes="(min-width: 1024px) 40vw, 100vw" className="card-photo" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <Users className="size-3.5" aria-hidden /> Done with your team, not to it
              </span>
              <p className="mt-3 font-display text-xl font-bold leading-snug">
                Workshops with the people who will use the system, so it fits how your business really works.
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <div className="card-hover h-full rounded-card border border-line bg-surface p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="card-icon inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-link">
                      <step.icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-link/80" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 text-center">
        <Button to="/process" variant="secondary">
          See our full process <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </Section>
  )
}

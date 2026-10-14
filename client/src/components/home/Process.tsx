import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { processSteps } from '@/content/home'

export function Process() {
  return (
    <Section aria-labelledby="process-title">
      <SectionHeader
        id="process-title"
        eyebrow="Implementation process"
        title="A clear path from first call to go-live"
        description="Six stages, each with agreed deliverables, so you always know what happens next."
      />

      <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <div className="relative h-full rounded-card border border-line bg-surface p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-link">
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-line" aria-hidden>
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

      <div className="mt-10 text-center">
        <Button to="/process" variant="secondary">
          See our full process <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </Section>
  )
}

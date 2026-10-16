import { CheckCircle2 } from 'lucide-react'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import { challenges } from '@/content/home'
import { challengePhotos } from '@/content/photos'

/** The everyday problems ERPVALLEY removes: a photo of the situation, the problem, then how we solve it. */
export function Challenges() {
  return (
    <Section aria-labelledby="challenges-title">
      <SectionHeader
        id="challenges-title"
        eyebrow="Problems we solve"
        title="From disconnected tools to one connected business"
        description="Most growing businesses hit the same walls. Here is what each one looks like day to day, and how ERPVALLEY removes it."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {challenges.map((c, i) => (
          <li key={c.problem}>
            <Reveal delay={(i % 2) * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card card-hover">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Photo
                    photo={challengePhotos[i]}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="card-photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/25 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                      <c.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-mist">The problem</p>
                      <h3 className="text-lg font-bold leading-snug text-white">{c.problem}</h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-fg-muted">{c.detail}</p>
                  <div className="mt-5 flex flex-1 items-start gap-3 rounded-xl bg-primary-soft p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-link" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-link">How ERPVALLEY solves it</p>
                      <p className="mt-1 font-medium leading-relaxed text-fg">{c.approach}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

import { CheckCircle2, TriangleAlert } from 'lucide-react'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { ProblemStory } from '@/content/photos'

/** Photo of an everyday business problem beside what it costs and how ERPVALLEY removes it. */
export function ProblemSolution({ story, title, id = 'problem-title' }: { story: ProblemStory; title: string; id?: string }) {
  return (
    <Section aria-labelledby={id}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="card-hover relative aspect-[4/3] overflow-hidden rounded-3xl shadow-pop">
            <Photo photo={story.photo} sizes="(min-width: 1024px) 45vw, 100vw" className="card-photo" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-midnight/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <TriangleAlert className="size-3.5 text-amber-400" aria-hidden /> Before ERPVALLEY
            </span>
          </div>
        </Reveal>
        <div>
          <p className="eyebrow">The problem it solves</p>
          <h2 id={id} className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">{story.problem}</p>
          <div className="card-hover mt-8 flex gap-4 rounded-card border border-link/30 bg-primary-soft p-6">
            <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-link" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-link">With ERPVALLEY</p>
              <p className="mt-1.5 text-lg font-medium leading-relaxed text-fg">{story.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

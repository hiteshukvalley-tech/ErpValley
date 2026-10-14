import { ArrowRight, Check, Handshake, Mail, Quote, SearchCheck } from 'lucide-react'
import { CtaBand } from '@/components/common/CtaBand'
import { IconGrid } from '@/components/common/IconGrid'
import { PageHero } from '@/components/common/PageHero'
import { Steps } from '@/components/common/Steps'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import {
  about,
  careersLookFor,
  careersProcess,
  engagementModels,
  partnerTypes,
  processStages,
  techGroups,
  values,
} from '@/content/company'
import { securityPoints } from '@/content/home'
import type { EngagementModel } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'

export function AboutPage() {
  usePageMeta('About ERPVALLEY', 'ERPVALLEY builds and implements a modular ERP platform, with custom development, integrations and long-term support for growing businesses.')
  return (
    <>
      <PageHero
        eyebrow="About ERPVALLEY"
        title="We help businesses run on one connected system"
        description={about.mission}
        actions={
          <>
            <Button to="/book-demo" size="lg">
              Book a Demo <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/process" variant="onDark" size="lg">How we work</Button>
          </>
        }
      />
      <Section aria-labelledby="story-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeader id="story-title" align="left" eyebrow="Our story" title="Why ERPVALLEY exists" />
            <figure className="mt-8 rounded-card border border-line bg-bg-alt p-6">
              <Quote className="size-6 text-link" aria-hidden />
              <blockquote className="mt-3 font-display text-lg font-semibold leading-snug text-fg">{about.mission}</blockquote>
              <figcaption className="mt-3 text-sm text-fg-muted">Our mission</figcaption>
            </figure>
          </div>
          <div className="space-y-5">
            {about.story.map((p) => (
              <p key={p.slice(0, 30)} className="text-lg leading-relaxed text-fg-muted">{p}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="alt" aria-labelledby="what-title">
        <SectionHeader id="what-title" eyebrow="What we do" title="Product, implementation and support under one roof" />
        <div className="mt-12">
          <IconGrid items={about.whatWeDo} columns={4} />
        </div>
      </Section>
      <Section aria-labelledby="approach-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="approach-title" align="left" eyebrow="Our approach" title="How we work with clients" />
          <IconGrid items={about.approach} columns={2} variant="plain" />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button to="/values" variant="secondary">Our values</Button>
          <Button to="/team" variant="secondary">Our team</Button>
          <Button to="/technology" variant="secondary">Technology stack</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  )
}

export function ProcessPage() {
  usePageMeta('Our Process', 'How ERPVALLEY delivers ERP projects in six stages: discover, plan, configure, migrate, train, then go live with ongoing support.')
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="Six stages from first call to go-live"
        description="Every stage has clear activities and agreed deliverables, so you always know what is happening and what comes next."
        actions={<Button to="/book-demo" size="lg">Start with discovery <ArrowRight className="size-4" aria-hidden /></Button>}
      />
      <Section aria-label="Process stages">
        <ol className="space-y-6">
          {processStages.map((stage, i) => (
            <li key={stage.title}>
              <Reveal>
                <article className="grid gap-6 rounded-card border border-line bg-surface p-6 shadow-card sm:p-8 lg:grid-cols-[1.2fr_1fr_1fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                        <stage.icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-sm font-bold text-link">Stage {i + 1}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold">{stage.title}</h2>
                    <p className="mt-2 leading-relaxed text-fg-muted">{stage.text}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-muted">Activities</h3>
                    <ul className="mt-3 space-y-2">
                      {stage.activities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-fg">
                          <Check className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-primary-soft p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-link">Deliverables</h3>
                    <ul className="mt-3 space-y-2">
                      {stage.deliverables.map((d) => (
                        <li key={d} className="text-sm font-medium text-fg">{d}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand title="Ready for discovery?" text="The first stage is a discovery session. Book one and we will map your current processes together." primary={{ label: 'Book a discovery call', to: '/book-demo' }} />
    </>
  )
}

export function TechnologyPage() {
  usePageMeta('Technology Stack', 'The technology ERPVALLEY uses to build and run ERP systems: React, TypeScript, Node.js, MongoDB, cloud infrastructure, automated testing and security practices.')
  return (
    <>
      <PageHero
        eyebrow="Technology stack"
        title="Proven technology, chosen for the long term"
        description="We use widely adopted, well-supported tools so your system stays maintainable, secure and easy to extend."
      />
      <Section aria-label="Technology groups">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, i) => (
            <li key={g.title}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <div className="h-full rounded-card border border-line bg-surface p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-link">
                      <g.icon className="size-5" aria-hidden />
                    </span>
                    <h2 className="text-lg font-bold">{g.title}</h2>
                  </div>
                  <p className="mt-3 text-sm text-fg-muted">{g.description}</p>
                  <dl className="mt-5 divide-y divide-line border-t border-line">
                    {g.items.map((item) => (
                      <div key={item.name} className="flex justify-between gap-4 py-2.5 text-sm">
                        <dt className="font-semibold text-fg">{item.name}</dt>
                        <dd className="text-right text-fg-muted">{item.use}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="alt" aria-labelledby="security-title">
        <SectionHeader id="security-title" eyebrow="Security practices" title="Built in from the start" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityPoints.map((p) => (
            <li key={p.title} className="flex items-center gap-3 rounded-card border border-line bg-surface p-5 text-sm font-medium text-fg shadow-card">
              <p.icon className="size-5 shrink-0 text-link" aria-hidden />
              {p.title}
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Have technical questions?" text="Talk to our engineers about architecture, integrations, hosting or security." primary={{ label: 'Talk to an engineer', to: '/contact' }} />
    </>
  )
}

export function ValuesPage() {
  usePageMeta('Company Values', 'The values that guide how ERPVALLEY plans, builds and supports every ERP project, and how they show up in day-to-day work with clients.')
  return (
    <>
      <PageHero eyebrow="Company values" title="What we stand for" description="Values only matter if they change how we work. Here is how each one shows up in our projects." />
      <Section aria-label="Values">
        <IconGrid items={values} columns={3} />
      </Section>
      <CtaBand title="Work with a team that cares" text="See how our values translate into a clear, well-run project for your business." />
    </>
  )
}

const partnerSteps = [
  { title: 'Get in touch', text: 'Tell us about your company, your clients and the type of partnership you have in mind.' },
  { title: 'Introductory call', text: 'We discuss fit, responsibilities and how we would work together on shared opportunities.' },
  { title: 'Agree terms', text: 'We put a simple written agreement in place covering scope, referrals and support.' },
  { title: 'Start working together', text: 'We share materials, align on processes and begin collaborating on projects.' },
]

export function PartnersPage() {
  usePageMeta('Partners', 'Partner with ERPVALLEY as a technology, implementation, referral or reseller partner. Learn about partnership types and how to get started.')
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Grow with ERPVALLEY"
        description="We work with technology companies, consultancies and resellers who want to offer their clients a modern ERP and the services around it."
        actions={<Button to="/contact" size="lg"><Handshake className="size-4" aria-hidden /> Become a partner</Button>}
      />
      <Section aria-labelledby="types-title">
        <SectionHeader id="types-title" eyebrow="Partnership types" title="Ways to partner with us" />
        <div className="mt-12">
          <IconGrid items={partnerTypes} columns={3} />
        </div>
      </Section>
      <Section tone="alt" aria-labelledby="how-title">
        <SectionHeader id="how-title" eyebrow="Getting started" title="How partnerships begin" />
        <div className="mt-14">
          <Steps steps={partnerSteps} ringClass="ring-bg-alt" />
        </div>
      </Section>
      <CtaBand title="Interested in partnering?" text="Tell us about your business and we will arrange an introductory call." primary={{ label: 'Contact us', to: '/contact' }} secondary={{ label: 'About ERPVALLEY', to: '/about' }} />
    </>
  )
}

export function CareersPage() {
  usePageMeta('Careers', 'Careers at ERPVALLEY: what we look for in developers, consultants, designers and QA engineers, our hiring process, and how to apply.')
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the systems businesses run on"
        description="We are always interested in hearing from developers, consultants, designers and QA engineers who care about doing careful, useful work."
      />
      <Section aria-labelledby="roles-title">
        <h2 id="roles-title" className="sr-only">Open roles</h2>
        <EmptyState
          icon={SearchCheck}
          title="No open roles right now"
          text="We do not have advertised openings at the moment, but we welcome speculative applications. Send us your CV and the kind of role you are looking for."
          actions={
            <Button to="/contact">
              <Mail className="size-4" aria-hidden /> Send your CV
            </Button>
          }
        />
      </Section>
      <Section tone="alt" aria-labelledby="look-title">
        <SectionHeader id="look-title" eyebrow="What we look for" title="The people we hire" />
        <div className="mt-12">
          <IconGrid items={careersLookFor} columns={4} />
        </div>
      </Section>
      <Section aria-labelledby="hiring-title">
        <SectionHeader id="hiring-title" eyebrow="Hiring process" title="What to expect" />
        <div className="mt-14">
          <Steps steps={careersProcess} />
        </div>
      </Section>
    </>
  )
}

export function EngagementModelCards({ models }: { models: EngagementModel[] }) {
  return (
    <ul className="grid gap-5 lg:grid-cols-3">
      {models.map((m, i) => (
        <li key={m.name}>
          <Reveal delay={i * 80} className="h-full">
            <div className="flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                <m.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold">{m.name}</h3>
              <p className="mt-1 text-sm font-semibold text-link">Best for: {m.bestFor}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{m.text}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-fg">
                    <Check className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function EngagementModelsPage() {
  usePageMeta('Engagement Models', 'Choose how to work with ERPVALLEY: fixed scope projects, a dedicated team, or time and materials. Compare what each model is best for.')
  return (
    <>
      <PageHero
        eyebrow="Engagement models"
        title="Work with us the way that suits your project"
        description="Choose a fixed scope, a dedicated team or time and materials. We will recommend the best fit after discovery."
        actions={<Button to="/request-quote" size="lg">Request a Quote <ArrowRight className="size-4" aria-hidden /></Button>}
      />
      <Section aria-label="Engagement models">
        <EngagementModelCards models={engagementModels} />
      </Section>
      <CtaBand title="Not sure which model fits?" text="Describe your project and we will recommend an engagement model with a scoped estimate." primary={{ label: 'Request a Quote', to: '/request-quote' }} secondary={{ label: 'Hire developers', to: '/hire-developers' }} />
    </>
  )
}

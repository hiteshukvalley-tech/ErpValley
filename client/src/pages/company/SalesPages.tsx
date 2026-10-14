import { ArrowRight, Check, CircleDollarSign, Plus, UserSearch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '@/components/common/CtaBand'
import { FaqSection } from '@/components/common/FaqSection'
import { IconGrid } from '@/components/common/IconGrid'
import { PageHero } from '@/components/common/PageHero'
import { Steps } from '@/components/common/Steps'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeader } from '@/components/ui/Section'
import {
  developerRoles,
  engagementModels,
  hireFaqs,
  hireOnboarding,
  hireProcess,
  implementationConsiderations,
  implementationFaqs,
  pricingAddons,
  pricingFactors,
  pricingFaqs,
  pricingIncluded,
  securityFaqs,
} from '@/content/company'
import { homeFaqs } from '@/content/home'
import type { DeveloperRole } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { EngagementModelCards } from './CompanyPages'

function RoleCards({ roles }: { roles: DeveloperRole[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {roles.map((r, i) => (
        <li key={r.title}>
          <Reveal delay={(i % 3) * 70} className="h-full">
            <div className="h-full rounded-card border border-line bg-surface p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-link">
                <r.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{r.text}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${r.title} skills`}>
                {r.skills.map((s) => (
                  <li key={s} className="rounded-md bg-bg-alt px-2 py-1 text-xs font-medium text-fg">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function HireDevelopersPage() {
  usePageMeta('Hire Developers', 'Hire dedicated ERPVALLEY developers: React, Node.js and MERN engineers, ERP consultants, QA and UI/UX designers, on flexible engagement models.')
  return (
    <>
      <PageHero
        eyebrow="Hire developers"
        title="Dedicated developers for your ERP and web projects"
        description="Add experienced React, Node.js and ERP specialists to your team, full-time or part-time, with a clear onboarding plan."
        actions={
          <>
            <Button to="/contact" size="lg">
              Start a hiring inquiry <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/developers" variant="onDark" size="lg">View developer roles</Button>
          </>
        }
      />
      <Section aria-labelledby="roles-title">
        <SectionHeader id="roles-title" eyebrow="Developer roles" title="Skills you can add to your team" />
        <div className="mt-12">
          <RoleCards roles={developerRoles} />
        </div>
      </Section>
      <Section tone="alt" aria-labelledby="models-title">
        <SectionHeader id="models-title" eyebrow="Engagement models" title="Flexible ways to work together" />
        <div className="mt-12">
          <EngagementModelCards models={engagementModels} />
        </div>
      </Section>
      <Section aria-labelledby="select-title">
        <SectionHeader id="select-title" eyebrow="Selection process" title="From requirements to first day" />
        <div className="mt-14">
          <Steps steps={hireProcess} />
        </div>
      </Section>
      <Section tone="alt" aria-labelledby="onboard-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader id="onboard-title" align="left" eyebrow="Onboarding" title="A smooth start, not a slow ramp-up" />
          <ol className="grid gap-4 sm:grid-cols-2">
            {hireOnboarding.map((s, i) => (
              <li key={s.title} className="rounded-card border border-line bg-surface p-5 shadow-card">
                <span className="font-display text-sm font-bold text-link">Step {i + 1}</span>
                <h3 className="mt-2 font-bold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <FaqSection title="Hiring FAQs" faqs={hireFaqs} />
      <CtaBand
        title="Tell us who you need"
        text="Share the role, skills and start date. We will reply with suitable profiles and next steps."
        primary={{ label: 'Start a hiring inquiry', to: '/contact' }}
        secondary={{ label: 'Engagement models', to: '/engagement-models' }}
      />
    </>
  )
}

export function DevelopersPage() {
  usePageMeta('Developer Profiles', 'Developer roles available to hire from ERPVALLEY, with the skills each role brings. Request profiles matched to your project requirements.')
  return (
    <>
      <PageHero
        eyebrow="Developer profiles"
        title="Find the right specialist"
        description="Browse the roles we staff and the skills each brings. We share individual profiles matched to your requirements on request."
        actions={<Button to="/hire-developers" size="lg">How hiring works <ArrowRight className="size-4" aria-hidden /></Button>}
      />
      <Section aria-label="Developer roles">
        <RoleCards roles={developerRoles} />
      </Section>
      <Section tone="alt" aria-label="Individual profiles">
        <EmptyState
          icon={UserSearch}
          title="Individual profiles are shared on request"
          text="To protect our team's privacy we do not publish individual profiles. Tell us your requirements and we will send matched profiles for review."
          actions={<Button to="/contact">Request profiles</Button>}
        />
      </Section>
    </>
  )
}

export function PricingPage() {
  usePageMeta('Pricing', 'How ERPVALLEY pricing works: what affects the cost, what a proposal includes, optional add-ons and implementation considerations. Request a tailored quote.')
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing tailored to your business"
        description="Every business needs a different mix of modules, users and services, so we quote each project individually. Here is how pricing works."
        actions={
          <>
            <Button to="/request-quote" size="lg">
              Request a Quote <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/contact" variant="onDark" size="lg">Contact sales</Button>
          </>
        }
      />
      <Section aria-labelledby="factors-title">
        <SectionHeader id="factors-title" eyebrow="How pricing works" title="What determines your price" />
        <div className="mt-12">
          <IconGrid items={pricingFactors} columns={3} />
        </div>
      </Section>
      <Section tone="alt" aria-labelledby="included-title">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="self-start rounded-card border border-link bg-surface p-6 shadow-card ring-1 ring-link sm:p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
              <CircleDollarSign className="size-5" aria-hidden />
            </span>
            <h2 id="included-title" className="mt-5 text-2xl font-bold">What a proposal covers</h2>
            <p className="mt-2 text-fg-muted">Each ERPVALLEY quote is itemized so you can see exactly what you are paying for.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pricingIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-fg">
                  <Check className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/request-quote" className="mt-8 w-full sm:w-auto">Request a Quote</Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Optional add-ons</h2>
            <ul className="mt-6 space-y-3">
              {pricingAddons.map((a) => (
                <li key={a.name} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
                  <Plus className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
                  <div>
                    <p className="font-semibold text-fg">{a.name}</p>
                    <p className="mt-0.5 text-sm text-fg-muted">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section aria-labelledby="impl-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader id="impl-title" align="left" eyebrow="Implementation" title="Things to plan for" />
          <Button to="/products/compare" variant="secondary">
            Compare module sets <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {implementationConsiderations.map((c, i) => (
            <li key={c.title} className="rounded-card border border-line bg-surface p-6 shadow-card">
              <span className="font-display text-sm font-bold text-link">0{i + 1}</span>
              <h3 className="mt-2 font-bold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>
      <FaqSection title="Pricing FAQs" faqs={pricingFaqs} tone="alt" />
      <CtaBand
        title="Get a quote for your business"
        text="Tell us about your modules, users and timeline. We will send an itemized proposal."
        primary={{ label: 'Request a Quote', to: '/request-quote' }}
        secondary={{ label: 'Contact sales', to: '/contact' }}
      />
    </>
  )
}

const faqGroups = [
  { id: 'general', title: 'General', faqs: homeFaqs },
  { id: 'pricing', title: 'Pricing', faqs: pricingFaqs },
  { id: 'implementation', title: 'Implementation', faqs: implementationFaqs },
  { id: 'security', title: 'Security and data', faqs: securityFaqs },
  { id: 'hiring', title: 'Hiring developers', faqs: hireFaqs },
]

export function FaqPage() {
  usePageMeta('FAQ', 'Answers to common questions about ERPVALLEY: modules, pricing, implementation, security and data, and hiring dedicated developers.')
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" description="Answers about ERPVALLEY products, pricing, implementation, security and hiring developers." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-24 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <Link to={`#${g.id}`} className="block rounded-lg border border-line px-3 py-2 text-sm font-medium text-fg-muted hover:bg-bg-alt hover:text-fg lg:border-0">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-12">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-24">
                <h2 id={`${g.id}-title`} className="text-2xl font-bold">{g.title}</h2>
                <div className="mt-5">
                  <Accordion items={g.faqs} defaultOpen={null} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand title="Still have a question?" text="Our team will answer it on a short call or by email." primary={{ label: 'Contact us', to: '/contact' }} secondary={{ label: 'Book a Demo', to: '/book-demo' }} />
    </>
  )
}

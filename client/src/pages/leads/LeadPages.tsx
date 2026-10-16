import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageHero } from '@/components/common/PageHero'
import { Steps } from '@/components/common/Steps'
import { LeadForm, type FieldDef } from '@/components/forms/LeadForm'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { COMPANY_SIZES, CONTACT_TOPICS, DEMO_TIMES, TIMELINES } from '@/config/forms'
import { siteConfig } from '@/config/site'
import type { TextItem } from '@/content/types'
import { photos } from '@/content/photos'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useContent } from '@/services/content'

/* Contact, Book a Demo and Request a Quote. Submissions are emailed to the team through Web3Forms (services/forms.ts). */

const name: FieldDef = { name: 'name', label: 'Full name', kind: 'text', required: true, half: true, autoComplete: 'name', maxLength: 100, message: 'Enter your name' }
const email: FieldDef = { name: 'email', label: 'Work email', kind: 'email', required: true, half: true, autoComplete: 'email', maxLength: 254, placeholder: 'you@company.com' }
const phone: FieldDef = { name: 'phone', label: 'Phone', kind: 'tel', half: true, autoComplete: 'tel', maxLength: 20, placeholder: '+91 …' }
const company = (required: boolean): FieldDef => ({
  name: 'company',
  label: 'Company',
  kind: 'text',
  required,
  half: true,
  autoComplete: 'organization',
  maxLength: 120,
  message: 'Enter your company name',
})
const companySize: FieldDef = { name: 'companySize', label: 'Company size (employees)', kind: 'select', required: true, half: true, options: COMPANY_SIZES, message: 'Choose your company size' }

/** Module choices, plus an option for visitors who want a recommendation instead of picking themselves. */
const moduleOptions = (products: { slug: string; name: string }[]) => [
  ...products.map((p) => ({ value: p.slug, label: p.name })),
  { value: 'not-sure', label: 'Not sure yet, recommend modules for me' },
]

/** Two-column layout: the form card and a side panel. */
function FormLayout({ form, aside }: { form: ReactNode; aside: ReactNode }) {
  return (
    <Section tone="alt">
      <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Card className="p-6 sm:p-8">{form}</Card>
        <div className="space-y-8">{aside}</div>
      </div>
    </Section>
  )
}

function NextSteps({ steps }: { steps: TextItem[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold">What happens next</h2>
      <div className="mt-5">
        <Steps steps={steps} ringClass="ring-bg-alt" />
      </div>
    </div>
  )
}

function ContactDetails() {
  const { email: mail, salesEmail, phone: tel, address } = siteConfig.contact
  const items = [
    salesEmail && { icon: Mail, label: 'Sales', value: salesEmail, href: `mailto:${salesEmail}` },
    mail && { icon: Mail, label: 'General', value: mail, href: `mailto:${mail}` },
    tel && { icon: Phone, label: 'Phone', value: tel, href: `tel:${tel.replace(/\s/g, '')}` },
    address && { icon: MapPin, label: 'Office', value: address },
  ].filter((i) => !!i)
  if (!items.length) return null
  return (
    <div>
      <h2 className="text-lg font-bold">Other ways to reach us</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label} className="flex items-start gap-3">
            <i.icon className="mt-0.5 size-4 shrink-0 text-link" aria-hidden />
            <span>
              <span className="block font-semibold text-fg">{i.label}</span>
              {i.href ? <a href={i.href} className="text-link hover:underline">{i.value}</a> : <span className="text-fg-muted">{i.value}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RelatedLinks({ links }: { links: { to: string; label: string }[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">
            {l.label} <ArrowRight className="size-4" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Pre-selects choices from the URL, e.g. /book-demo?module=crm, keeping only known values. */
function usePreselected(param: string, allowed: { slug: string }[]) {
  const [params] = useSearchParams()
  const known = new Set(allowed.map((a) => a.slug))
  return params.getAll(param).filter((v) => known.has(v))
}

export function ContactPage() {
  usePageMeta('Contact Us', 'Contact ERPVALLEY about ERP software, implementation, custom development or support. Send us a message and our team will reply by email.')
  const fields: FieldDef[] = [
    name,
    email,
    company(false),
    phone,
    { name: 'topic', label: 'What is this about?', kind: 'select', required: true, options: CONTACT_TOPICS, message: 'Choose a topic' },
    { name: 'message', label: 'Message', kind: 'textarea', required: true, minLength: 10, maxLength: 4000, message: 'Tell us a little more (at least 10 characters)' },
  ]
  return (
    <>
      <PageHero image={photos.salesTeamScreen} eyebrow="Contact" title="Talk to the ERPVALLEY team" description="Questions about our ERP products, services or a project? Send us a message and we will reply by email." />
      <FormLayout
        form={
          <LeadForm
            formName="Contact message"
            fields={fields}
            submitLabel="Send message"
            successTitle={(n) => (n ? `Thank you, ${n}` : 'Thank you')}
            successText="Your message has been received. Our team will reply to the email address you provided."
          />
        }
        aside={
          <>
            <ContactDetails />
            <div>
              <h2 className="text-lg font-bold">Looking for something specific?</h2>
              <div className="mt-4">
                <RelatedLinks
                  links={[
                    { to: '/book-demo', label: 'Book a demo' },
                    { to: '/request-quote', label: 'Request a quote' },
                    { to: '/faq', label: 'Read the FAQ' },
                  ]}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export function BookDemoPage() {
  usePageMeta('Book a Demo', 'Book an ERPVALLEY demo: see the modules you need working with examples from your own business processes.')
  const { products } = useContent<'products'>()
  const modules = usePreselected('module', products)
  const fields: FieldDef[] = [
    name,
    email,
    company(true),
    companySize,
    phone,
    { name: 'demoTime', label: 'Preferred time for the demo', kind: 'select', half: true, options: DEMO_TIMES },
    { name: 'modules', label: 'Modules you are interested in', kind: 'checkboxes', options: moduleOptions(products) },
    { name: 'message', label: 'Anything we should prepare?', kind: 'textarea', maxLength: 4000, placeholder: 'Your current tools, the processes you want to improve, questions for the demo…' },
  ]
  return (
    <>
      <PageHero image={photos.analyticsScreen} eyebrow="Book a demo" title="See ERPVALLEY working with your processes" description="Tell us about your business and the modules you are interested in. We will arrange a demo built around your own examples." />
      <FormLayout
        form={
          <LeadForm
            formName="Demo request"
            fields={fields}
            initial={{ modules }}
            submitLabel="Request my demo"
            successTitle={(n) => (n ? `Thank you, ${n}` : 'Thank you')}
            successText="Your demo request has been received. We will email you to agree a time that suits you."
          />
        }
        aside={
          <>
            <NextSteps
              steps={[
                { title: 'We review your request', text: 'We look at your company size and the modules you selected.' },
                { title: 'We agree a time', text: 'We email you to schedule the demo and ask about your current processes.' },
                { title: 'Your tailored demo', text: 'We walk through the modules using examples that match how your business works.' },
              ]}
            />
            <RelatedLinks links={[{ to: '/products', label: 'Explore all modules' }, { to: '/request-quote', label: 'Prefer a quote?' }]} />
          </>
        }
      />
    </>
  )
}

export function RequestQuotePage() {
  usePageMeta('Request a Quote', 'Request a quote from ERPVALLEY for ERP software, implementation or custom development. Tell us what you need and receive a scoped proposal.')
  const { products, services } = useContent<'products' | 'services'>()
  const modules = usePreselected('module', products)
  const chosenServices = usePreselected('service', services)
  const fields: FieldDef[] = [
    name,
    email,
    company(true),
    companySize,
    phone,
    { name: 'timeline', label: 'When do you want to start?', kind: 'select', required: true, half: true, options: TIMELINES, message: 'Choose a timeline' },
    { name: 'modules', label: 'ERP modules', kind: 'checkboxes', options: moduleOptions(products) },
    { name: 'services', label: 'Services', kind: 'checkboxes', options: services.map((s) => ({ value: s.slug, label: s.name })) },
    {
      name: 'message',
      label: 'Describe what you need',
      kind: 'textarea',
      required: true,
      minLength: 20,
      maxLength: 4000,
      placeholder: 'Number of users and locations, systems to replace or connect, must-have features…',
      message: 'Describe what you need (at least 20 characters)',
    },
  ]
  return (
    <>
      <PageHero image={photos.deskPayments} eyebrow="Request a quote" title="Get a quote scoped to your business" description="Every business needs a different mix of modules and services. Tell us what you need and we will prepare a written proposal." />
      <FormLayout
        form={
          <LeadForm
            formName="Quote request"
            fields={fields}
            initial={{ modules, services: chosenServices }}
            submitLabel="Request my quote"
            successTitle={(n) => (n ? `Thank you, ${n}` : 'Thank you')}
            successText="Your quote request has been received. We will review it and contact you by email, including any questions we need answered to scope it."
          />
        }
        aside={
          <>
            <NextSteps
              steps={[
                { title: 'We review your requirements', text: 'We look at the modules, services and timeline you selected.' },
                { title: 'We clarify the details', text: 'If anything is unclear, we ask by email or arrange a short call.' },
                { title: 'You receive a written proposal', text: 'Scope, approach and pricing for your project, with no obligation.' },
              ]}
            />
            <RelatedLinks links={[{ to: '/pricing', label: 'How our pricing works' }, { to: '/engagement-models', label: 'Engagement models' }]} />
          </>
        }
      />
    </>
  )
}

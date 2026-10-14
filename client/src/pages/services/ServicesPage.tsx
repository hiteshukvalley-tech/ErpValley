import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/common/CtaBand'
import { LinkCards } from '@/components/common/LinkCards'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { services } from '@/content/services'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ServicesPage() {
  usePageMeta(
    'ERP and IT Services',
    'ERPVALLEY services: custom ERP development, implementation, consulting, legacy modernization, cloud, APIs, integrations, data migration, UI/UX, AI, QA and support.',
  )
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="ERP and IT services, end to end"
        description="From first consultation to long-term support, our team plans, builds, integrates and maintains the systems your business runs on."
        actions={
          <>
            <Button to="/request-quote" size="lg">
              Request a Quote <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/process" variant="onDark" size="lg">Our process</Button>
          </>
        }
      />
      <Section aria-label="All services">
        <LinkCards
          items={services.map((s) => ({ to: `/services/${s.slug}`, title: s.name, text: s.summary, icon: s.icon }))}
          columns={3}
        />
      </Section>
      <CtaBand
        title="Have a project in mind?"
        text="Share your requirements and we will send a scoped estimate with recommended next steps."
        primary={{ label: 'Request a Quote', to: '/request-quote' }}
        secondary={{ label: 'Book a call', to: '/book-demo' }}
      />
    </>
  )
}

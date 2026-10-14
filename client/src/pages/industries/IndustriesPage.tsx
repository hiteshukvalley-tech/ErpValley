import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/common/CtaBand'
import { LinkCards } from '@/components/common/LinkCards'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { industries } from '@/content/industries'
import { usePageMeta } from '@/hooks/usePageMeta'

export function IndustriesPage() {
  usePageMeta(
    'ERP Solutions by Industry',
    'ERPVALLEY ERP solutions for manufacturing, retail, fintech, healthcare, education, logistics, real estate, professional services, distribution, hospitality and construction.',
  )
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="ERP configured for your industry"
        description="Every industry has its own workflows, rules and reports. ERPVALLEY is set up around the way yours works."
        actions={
          <Button to="/book-demo" size="lg">
            Book a consultation <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />
      <Section aria-label="All industries">
        <LinkCards
          items={industries.map((i) => ({ to: `/industries/${i.slug}`, title: i.name, text: i.summary, icon: i.icon }))}
          columns={3}
        />
      </Section>
      <CtaBand
        title="Industry not listed?"
        text="Tell us how your business works. We will map your processes to the right ERPVALLEY setup."
        primary={{ label: 'Book a consultation', to: '/book-demo' }}
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  )
}

import { ArrowRight, MessageCircleQuestion } from 'lucide-react'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeader } from '@/components/ui/Section'
import { homeFaqs } from '@/content/home'

export function HomeFaq() {
  return (
    <Section aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeader
            id="faq-title"
            align="left"
            eyebrow="FAQ"
            title="Questions businesses ask us"
            description="Straight answers about modules, integrations, timelines and support."
          />
          <div className="mt-8 rounded-card border border-line bg-bg-alt p-6">
            <MessageCircleQuestion className="size-6 text-link" aria-hidden />
            <p className="mt-3 font-semibold text-fg">Still have questions?</p>
            <p className="mt-1 text-sm text-fg-muted">Our team will answer them on a short call.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/contact" size="sm">
                Contact us <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button to="/faq" variant="secondary" size="sm">
                All FAQs
              </Button>
            </div>
          </div>
        </div>
        <Accordion items={homeFaqs} />
      </div>
    </Section>
  )
}

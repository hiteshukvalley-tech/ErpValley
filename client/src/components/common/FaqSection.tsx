import { ArrowRight } from 'lucide-react'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeader } from '@/components/ui/Section'
import type { Faq } from '@/content/types'

interface FaqSectionProps {
  title: string
  faqs: Faq[]
  tone?: 'default' | 'alt'
}

export function FaqSection({ title, faqs, tone = 'default' }: FaqSectionProps) {
  return (
    <Section tone={tone} aria-labelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <SectionHeader id="faq-heading" align="left" eyebrow="FAQ" title={title} />
          <p className="mt-4 text-fg-muted">Have a question that is not answered here?</p>
          <Button to="/contact" variant="secondary" className="mt-5">
            Ask our team <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
        <Accordion items={faqs} />
      </div>
    </Section>
  )
}

import { ArrowRight, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBand } from '@/components/common/CtaBand'
import { PhotoCards } from '@/components/common/PhotoCards'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { industryPhotos, photos } from '@/content/photos'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useContent } from '@/services/content'

export function IndustriesPage() {
  const { industries } = useContent<'industries'>()
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
        image={photos.warehouseAisle}
        actions={
          <Button to="/book-demo" size="lg">
            Book a consultation <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />
      <Section aria-label="All industries">
        <PhotoCards
          cta="See the industry solution"
          items={industries.map((i) => ({ to: `/industries/${i.slug}`, title: i.name, text: i.summary, icon: i.icon, photo: industryPhotos[i.slug] }))}
          extra={
            <Link
              to="/contact"
              className="group flex h-full min-h-72 flex-col justify-end rounded-card border border-dashed border-link/50 bg-primary-soft p-6 card-link"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
                <MessagesSquare className="size-5" aria-hidden />
              </span>
              <span className="mt-5 font-display text-lg font-bold text-fg">Industry not listed?</span>
              <span className="mt-2 text-sm leading-relaxed text-fg-muted">
                Most businesses share the same core needs: finance, stock, sales, people and reporting. Tell us how yours
                works and we will map it to the right modules.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                Talk to us <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          }
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

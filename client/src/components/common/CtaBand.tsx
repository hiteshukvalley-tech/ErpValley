import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface CtaBandProps {
  title?: string
  text?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

/** Closing conversion band used at the bottom of public pages. */
export function CtaBand({
  title = 'See how ERPVALLEY fits your business',
  text = 'Book a personalised demo. We will walk through your processes and show how ERPVALLEY can connect them.',
  primary = { label: 'Book a Demo', to: '/book-demo' },
  secondary = { label: 'Request a Quote', to: '/request-quote' },
}: CtaBandProps) {
  return (
    <section className="bg-bg py-16 sm:py-20" aria-labelledby="cta-band-title">
      <Container>
        <div className="bg-hero relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-band-title" className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-mist">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to={primary.to} size="lg">
                {primary.label} <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button to={secondary.to} variant="onDark" size="lg">{secondary.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

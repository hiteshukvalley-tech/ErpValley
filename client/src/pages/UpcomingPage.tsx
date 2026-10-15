import { ArrowRight, Construction } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import type { NavItem } from '@/config/navigation'
import { usePageMeta } from '@/hooks/usePageMeta'

const sectionFor = (path: string) => {
  const seg = path.split('/')[1]
  // Only pages without their own route reach here: accounts (Step 7).
  const map: Record<string, [string, number]> = {
    login: ['Account', 7],
    register: ['Account', 7],
  }
  return map[seg] ?? ['ERPVALLEY', 7]
}

/**
 * Interim page for routes that are registered but not yet built.
 * Keeps every navigation link working during development; each is replaced in its build step.
 */
export function UpcomingPage({ page, path }: { page: NavItem; path: string }) {
  const [eyebrow, step] = sectionFor(path)
  usePageMeta(page.label, page.description)

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={page.label}
        description={page.description}
        actions={
          <>
            <Button to="/book-demo" size="lg">Book a Demo</Button>
            <Button to="/contact" variant="onDark" size="lg">Talk to sales</Button>
          </>
        }
      />
      <Section tone="alt">
        <Card className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Construction className="size-8 text-link" aria-hidden />
          <h2 className="text-xl font-bold">Full page content arrives in build Step {step}</h2>
          <p className="text-fg-muted">
            The route, navigation and layout for this page are ready. Its detailed content will be added in the
            planned build step.
          </p>
          <Button to="/" variant="secondary">
            Back to home <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Card>
      </Section>
    </>
  )
}

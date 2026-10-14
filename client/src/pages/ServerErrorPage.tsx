import { RotateCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ServerErrorPage() {
  usePageMeta('Something went wrong')
  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <p className="font-display text-7xl font-extrabold text-link">500</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Something went wrong on our side</h1>
      <p className="mt-4 max-w-md text-fg-muted">
        Please try again in a moment. If the problem continues, contact our team and we’ll help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={() => window.location.reload()}>
          <RotateCw className="size-4" aria-hidden /> Try again
        </Button>
        <Button to="/contact" variant="secondary">Contact support</Button>
      </div>
    </Container>
  )
}

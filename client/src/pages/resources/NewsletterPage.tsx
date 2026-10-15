import { BookOpen, CalendarClock, CheckCircle2, Mail, Newspaper } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ApiError, postApi } from '@/services/api'

const perks = [
  { icon: Newspaper, text: 'New articles and ERP guides' },
  { icon: BookOpen, text: 'Practical checklists for planning and rollout' },
  { icon: CalendarClock, text: 'Product updates and upcoming webinars' },
]

/** Newsletter signup, stored by the API (POST /api/newsletter). */
export function NewsletterPage() {
  usePageMeta('Newsletter', 'Subscribe to the ERPVALLEY newsletter for ERP guides, practical checklists and product updates, sent about once a month.')
  const [params] = useSearchParams()
  const [email, setEmail] = useState(params.get('email') ?? '')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (state === 'sending') return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Enter a valid email address.')
    if (!consent) return setError('Please confirm you agree to receive emails.')
    setError('')
    setState('sending')
    try {
      await postApi('/newsletter', { email: email.trim(), consent, website: honeypot, page: '/newsletter' })
      setState('sent')
    } catch (err) {
      setState('idle')
      const known = err instanceof ApiError && [400, 429, 503].includes(err.status)
      setError(known ? (err.issues.email?.[0] ?? err.message) : 'We could not subscribe you right now. Please try again in a few minutes.')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="ERP insights in your inbox"
        description="Practical guides, checklists and product updates, about once a month. Unsubscribe any time."
      />
      <Section tone="alt">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What you will receive</h2>
            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-link">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-fg">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-6 sm:p-8">
            {state === 'sent' ? (
              <div role="status" className="flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle2 className="size-10 text-emerald-500" aria-hidden />
                <h2 className="text-xl font-bold">You are subscribed</h2>
                <p className="text-sm text-fg-muted">Thank you. The next issue will be sent to {email.trim()}.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate aria-busy={state === 'sending'}>
                <label htmlFor="nl-email" className="text-sm font-semibold text-fg">Business email</label>
                <div className="relative mt-2">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-muted" aria-hidden />
                  <input
                    id="nl-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? 'nl-error' : undefined}
                    className="h-11 w-full rounded-lg border border-line bg-surface pl-9 pr-3 text-fg focus:border-link focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <label className="mt-4 flex items-start gap-2.5 text-sm text-fg-muted">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-4 accent-[var(--primary)]" />
                  <span>
                    I agree to receive ERPVALLEY emails and understand I can unsubscribe at any time. See our{' '}
                    <Link to="/privacy" className="font-medium text-link hover:underline">privacy policy</Link>.
                  </span>
                </label>
                {error && (
                  <p id="nl-error" role="alert" className="mt-3 text-sm font-medium text-rose-600 dark:text-rose-400">{error}</p>
                )}
                {/* Honeypot: hidden from people; bots that fill it in are ignored by the API. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="nl-website">Website</label>
                  <input id="nl-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <Button type="submit" size="lg" className="mt-5 w-full" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  )
}

/*
 * Sends website forms (contact, demo, quote, newsletter) to Web3Forms, which emails each submission to the
 * address registered for the access key. The site is static, so nothing is stored by the website itself.
 * Set VITE_WEB3FORMS_KEY in client/.env.local (and in your hosting provider's build settings). The key is
 * public by design: it only lets someone send a message to your inbox, never read anything.
 */

const ENDPOINT = 'https://api.web3forms.com/submit'

const accessKey = () => (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() ?? ''

export type FormErrorKind = 'not-configured' | 'rejected' | 'network'

export class FormError extends Error {
  kind: FormErrorKind

  constructor(kind: FormErrorKind, message: string, { cause }: { cause?: unknown } = {}) {
    super(message, { cause })
    this.kind = kind
  }
}

/** Field values as they appear in the email: lists are joined, empty values are left out. */
function toEmailFields(values: Record<string, string | string[] | undefined>) {
  return Object.fromEntries(
    Object.entries(values)
      .map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : (v ?? '').trim()] as const)
      .filter(([, v]) => v !== ''),
  )
}

export interface FormSubmission {
  /** Email subject, e.g. "New demo request from Asha Rao". */
  subject: string
  values: Record<string, string | string[] | undefined>
  /** The sender's address, so "Reply" in your inbox goes straight to them. */
  replyTo?: string
  /** Hidden honeypot field; bots fill it in, people never see it. */
  honeypot?: string
}

/**
 * Sends one submission. Resolves when Web3Forms accepted it; throws FormError otherwise.
 * Honeypot submissions resolve without sending, so bots cannot tell they were caught.
 */
export async function submitForm({ subject, values, replyTo, honeypot }: FormSubmission, { timeoutMs = 15000 } = {}): Promise<void> {
  if (honeypot) return
  const key = accessKey()
  if (!key) {
    throw new FormError('not-configured', 'Online forms are not set up yet.')
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject,
        from_name: 'ERPVALLEY website',
        ...(replyTo && { replyto: replyTo.trim() }),
        ...toEmailFields(values),
      }),
      signal: controller.signal,
    })
    const body = (await res.json().catch(() => null)) as { success?: boolean; message?: string; body?: { message?: string } } | null
    if (!res.ok || !body?.success) {
      throw new FormError('rejected', body?.body?.message || body?.message || `Form service responded ${res.status}`)
    }
  } catch (err) {
    throw err instanceof FormError ? err : new FormError('network', 'Form service unreachable', { cause: err })
  } finally {
    clearTimeout(timer)
  }
}

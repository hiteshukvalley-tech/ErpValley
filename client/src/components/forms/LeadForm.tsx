import { CheckCircle2, Loader2 } from 'lucide-react'
import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ApiError, postApi } from '@/services/api'
import { cn } from '@/utils/cn'

/*
 * Form used by the contact, book-a-demo and request-a-quote pages.
 * Checks input in the browser for quick feedback; the API checks everything again and its field errors are shown
 * the same way. Includes a hidden "website" field that only bots fill in.
 */

export interface ChoiceOption {
  value: string
  label: string
}

interface BaseField {
  name: string
  label: string
  required?: boolean
  /** Message when a required field is empty or too short. */
  message?: string
  /** Show at half width on larger screens. */
  half?: boolean
}

export type FieldDef = BaseField &
  (
    | { kind: 'text' | 'email' | 'tel'; autoComplete?: string; placeholder?: string; maxLength: number }
    | { kind: 'textarea'; minLength?: number; maxLength: number; placeholder?: string }
    | { kind: 'select'; options: readonly string[] }
    | { kind: 'checkboxes'; options: ChoiceOption[] }
  )

export type FormValues = Record<string, string | string[]>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE = /^\+?[0-9()\s-]{7,20}$/

const inputClass =
  'w-full rounded-lg border bg-surface px-3 text-fg placeholder:text-fg-muted/70 focus:border-link focus:outline-none focus:ring-2 focus:ring-link/20'

function validate(field: FieldDef, value: string | string[]): string {
  if (field.kind === 'checkboxes') return ''
  const v = (value as string).trim()
  const fallback = field.message ?? 'This field is required'
  if (!v) return field.required ? fallback : ''
  if (field.kind === 'email' && !EMAIL.test(v)) return 'Enter a valid email address'
  if (field.kind === 'tel' && !PHONE.test(v)) return 'Enter a valid phone number'
  if (field.kind === 'textarea' && field.minLength && v.length < field.minLength) return fallback
  if (field.kind === 'text' && field.required && v.length < 2) return fallback
  return ''
}

const emptyValues = (fields: FieldDef[]): FormValues =>
  Object.fromEntries(fields.map((f) => [f.name, f.kind === 'checkboxes' ? [] : '']))

export function LeadForm({
  endpoint,
  fields,
  initial,
  submitLabel,
  successTitle,
  successText,
}: {
  /** API path, e.g. "/leads/demo". */
  endpoint: string
  fields: FieldDef[]
  initial?: FormValues
  submitLabel: string
  successTitle: (firstName: string) => string
  successText: string
}) {
  const id = useId()
  const fieldId = (name: string) => `${id}-${name}`
  const { pathname } = useLocation()
  const [values, setValues] = useState<FormValues>(() => ({ ...emptyValues(fields), ...initial }))
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (state === 'sent') successRef.current?.focus()
  }, [state])

  const set = (name: string, value: string | string[]) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest)
  }

  const focusFirstError = (errs: Record<string, string>) => {
    const first = [...fields.map((f) => f.name), 'consent'].find((n) => errs[n])
    if (first) document.getElementById(fieldId(first))?.focus()
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (state === 'sending') return
    const errs: Record<string, string> = {}
    for (const f of fields) {
      const msg = validate(f, values[f.name])
      if (msg) errs[f.name] = msg
    }
    if (!consent) errs.consent = 'Please agree to the privacy policy'
    setErrors(errs)
    setFormError('')
    if (Object.keys(errs).length) return focusFirstError(errs)

    setState('sending')
    try {
      await postApi(endpoint, { ...values, consent, website: honeypot, page: pathname })
      setState('sent')
    } catch (err) {
      setState('idle')
      const issues = err instanceof ApiError ? err.issues : {}
      const fieldErrs = Object.fromEntries(
        Object.entries(issues).flatMap(([k, v]) => (v?.length ? [[k, v[0]]] : [])),
      )
      if (err instanceof ApiError && err.status === 400 && Object.keys(fieldErrs).length) {
        setErrors(fieldErrs)
        focusFirstError(fieldErrs)
      } else if (err instanceof ApiError && (err.status === 429 || err.status === 503)) {
        setFormError(err.message)
      } else {
        setFormError('We could not send your request. Please check your connection and try again in a few minutes.')
      }
    }
  }

  if (state === 'sent') {
    const firstName = String(values.name ?? '').trim().split(/\s+/)[0]
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="size-12 text-emerald-500" aria-hidden />
        <h2 ref={successRef} tabIndex={-1} className="text-2xl font-bold focus:outline-none">
          {successTitle(firstName)}
        </h2>
        <p className="max-w-md text-fg-muted">{successText}</p>
        <Button to="/" variant="secondary" className="mt-3">Back to home</Button>
      </div>
    )
  }

  const describedBy = (name: string) => (errors[name] ? `${fieldId(name)}-error` : undefined)
  const errorText = (name: string) =>
    errors[name] && (
      <p id={`${fieldId(name)}-error`} className="mt-1.5 text-sm font-medium text-rose-600 dark:text-rose-400">
        {errors[name]}
      </p>
    )
  const label = (f: FieldDef) => (
    <label htmlFor={fieldId(f.name)} className="text-sm font-semibold text-fg">
      {f.label}
      {f.required ? <span className="text-rose-600 dark:text-rose-400" aria-hidden> *</span> : <span className="font-normal text-fg-muted"> (optional)</span>}
    </label>
  )
  const border = (name: string) => (errors[name] ? 'border-rose-500' : 'border-line')

  return (
    <form onSubmit={submit} noValidate aria-busy={state === 'sending'}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const common = {
            id: fieldId(f.name),
            name: f.name,
            required: f.required,
            'aria-invalid': !!errors[f.name],
            'aria-describedby': describedBy(f.name),
          }
          if (f.kind === 'checkboxes') {
            const selected = values[f.name] as string[]
            return (
              <fieldset key={f.name} className="sm:col-span-2">
                <legend className="text-sm font-semibold text-fg">
                  {f.label} <span className="font-normal text-fg-muted">(optional)</span>
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {f.options.map((o) => (
                    <label key={o.value} className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2 text-sm text-fg has-[:checked]:border-link has-[:checked]:bg-primary-soft">
                      <input
                        type="checkbox"
                        name={f.name}
                        value={o.value}
                        checked={selected.includes(o.value)}
                        onChange={(e) => set(f.name, e.target.checked ? [...selected, o.value] : selected.filter((s) => s !== o.value))}
                        className="size-4 accent-[var(--primary)]"
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            )
          }
          const value = values[f.name] as string
          return (
            <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
              {label(f)}
              {f.kind === 'select' ? (
                <select {...common} value={value} onChange={(e) => set(f.name, e.target.value)} className={cn(inputClass, border(f.name), 'mt-2 h-11')}>
                  <option value="">Select…</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : f.kind === 'textarea' ? (
                <textarea
                  {...common}
                  value={value}
                  maxLength={f.maxLength}
                  rows={5}
                  placeholder={f.placeholder}
                  onChange={(e) => set(f.name, e.target.value)}
                  className={cn(inputClass, border(f.name), 'mt-2 py-2.5')}
                />
              ) : (
                <input
                  {...common}
                  type={f.kind}
                  value={value}
                  maxLength={f.maxLength}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  onChange={(e) => set(f.name, e.target.value)}
                  className={cn(inputClass, border(f.name), 'mt-2 h-11')}
                />
              )}
              {errorText(f.name)}
            </div>
          )
        })}
      </div>

      {/* Honeypot: hidden from people and screen readers; bots that fill it in are ignored by the API. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={fieldId('website')}>Website</label>
        <input id={fieldId('website')} name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-2.5 text-sm text-fg-muted">
          <input
            id={fieldId('consent')}
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (errors.consent) setErrors(({ consent: _removed, ...rest }) => rest)
            }}
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy('consent')}
            className="mt-0.5 size-4 accent-[var(--primary)]"
          />
          <span>
            I agree that ERPVALLEY may store these details and contact me about this request, as described in the{' '}
            <Link to="/privacy" className="font-medium text-link hover:underline">privacy policy</Link>.
          </span>
        </label>
        {errorText('consent')}
      </div>

      {formError && (
        <p role="alert" className="mt-5 rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-sm font-medium text-rose-700 dark:text-rose-300">
          {formError}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={state === 'sending'}>
        {state === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  )
}

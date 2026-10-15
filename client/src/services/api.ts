/*
 * Minimal client for the ERPVALLEY API (server/).
 * VITE_API_URL sets the API address; the default "/api" is proxied to the server by Vite during development.
 * Set VITE_API_URL=off to always use the content bundled with the website (forms then cannot be sent).
 */

const base = ((import.meta.env.VITE_API_URL as string | undefined) || '/api').replace(/\/+$/, '')

export const apiEnabled = base !== 'off'

/** Field errors returned by the API for invalid input, e.g. { email: ['Enter a valid email address'] }. */
export type FieldIssues = Record<string, string[] | undefined>

export class ApiError extends Error {
  /** HTTP status, or 0 when the API could not be reached. */
  status: number
  issues: FieldIssues

  constructor(message: string, { status = 0, issues = {}, cause }: { status?: number; issues?: FieldIssues; cause?: unknown } = {}) {
    super(message, { cause })
    this.status = status
    this.issues = issues
  }
}

async function request<T>(path: string, init: RequestInit, timeoutMs: number): Promise<T> {
  if (!apiEnabled) throw new ApiError('API disabled')
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(`${base}${path}`, {
      ...init,
      headers: { Accept: 'application/json', ...init.headers },
      signal: controller.signal,
    })
    // Static hosts often answer unknown paths with index.html, so check the content type too.
    const isJson = res.headers.get('content-type')?.includes('application/json')
    const body = isJson ? await res.json().catch(() => null) : null
    if (!res.ok || !isJson) {
      const error = body?.error as { message?: string; issues?: FieldIssues } | undefined
      throw new ApiError(error?.message ?? `API ${path} responded ${res.status}`, { status: res.status, issues: error?.issues })
    }
    return body as T
  } catch (err) {
    throw err instanceof ApiError ? err : new ApiError(`API ${path} unreachable`, { cause: err })
  } finally {
    clearTimeout(timer)
  }
}

/** GETs a JSON response from the API. Throws ApiError on network errors, timeouts, non-2xx or non-JSON responses. */
export function fetchApi<T>(path: string, { timeoutMs = 4000 } = {}): Promise<T> {
  return request<T>(path, {}, timeoutMs)
}

/** POSTs JSON to the API. Throws ApiError (with field `issues` for invalid input) on failure. */
export function postApi<T>(path: string, body: unknown, { timeoutMs = 15000 } = {}): Promise<T> {
  return request<T>(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }, timeoutMs)
}

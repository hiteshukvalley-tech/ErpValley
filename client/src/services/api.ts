/*
 * Minimal client for the ERPVALLEY API (server/).
 * VITE_API_URL sets the API address; the default "/api" is proxied to the server by Vite during development.
 * Set VITE_API_URL=off to always use the content bundled with the website.
 */

const base = ((import.meta.env.VITE_API_URL as string | undefined) || '/api').replace(/\/+$/, '')

export const apiEnabled = base !== 'off'

export class ApiError extends Error {}

/** GETs a JSON response from the API. Throws ApiError on network errors, timeouts, non-2xx or non-JSON responses. */
export async function fetchApi<T>(path: string, { timeoutMs = 4000 } = {}): Promise<T> {
  if (!apiEnabled) throw new ApiError('API disabled')
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(`${base}${path}`, { headers: { Accept: 'application/json' }, signal: controller.signal })
    // Static hosts often answer unknown paths with index.html, so check the content type too.
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
      throw new ApiError(`API ${path} responded ${res.status}`)
    }
    return (await res.json()) as T
  } catch (err) {
    throw err instanceof ApiError ? err : new ApiError(`API ${path} unreachable`, { cause: err })
  } finally {
    clearTimeout(timer)
  }
}

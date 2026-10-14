import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { pageRegistry } from '@/config/navigation'
import { caseStudyBySlug } from '@/content/caseStudies'
import { postBySlug } from '@/content/posts'
import { routes } from '@/routes/router'

/** Renders the app at `path` and waits until the (lazy-loaded) page is on screen. */
export async function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>,
  )
  await settled(router)
  return router
}

/** Waits for any pending navigation, including lazy route loading, to finish. */
export async function settled(router: { state: { initialized: boolean; navigation: { state: string } } }) {
  await waitFor(() => {
    if (!router.state.initialized || router.state.navigation.state !== 'idle') throw new Error('router busy')
  })
  await screen.findByRole('main')
}

/** True when an internal href resolves to a real page (static registry or a published dynamic slug). */
export function isKnownPath(href: string) {
  const path = href.split(/[?#]/)[0] || '/'
  if (path === '/' || href.startsWith('#') || pageRegistry.has(path)) return true
  const [, section, slug] = path.split('/')
  if (section === 'blog' && slug) return postBySlug.has(slug)
  if (section === 'case-studies' && slug) return caseStudyBySlug.has(slug)
  return false
}

export const brokenLinksOnPage = () =>
  [...new Set(screen.getAllByRole('link').map((a) => a.getAttribute('href') ?? ''))]
    .filter((h) => h.startsWith('/') || h.startsWith('#'))
    .filter((h) => !isKnownPath(h))

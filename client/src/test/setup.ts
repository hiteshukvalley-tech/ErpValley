import '@testing-library/jest-dom/vitest'
import { cleanup, configure } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

// Pages load lazily and render in transitions; allow for slow cold starts when the whole suite runs in parallel.
configure({ asyncUtilTimeout: 5000 })

// Tests never reach a real API: every request fails unless a test mocks fetch, so pages use the bundled content.
beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new TypeError('No network in tests'))))
})

afterEach(() => {
  cleanup()
  localStorage.clear()
  vi.unstubAllGlobals()
})

// jsdom lacks matchMedia; default to a light system theme.
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}
window.scrollTo = () => {}

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { ThemeToggle } from '@/components/common/ThemeToggle'

function mockSystemDark(matches: boolean) {
  return vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
      }) as unknown as MediaQueryList,
  )
}

const renderToggle = () =>
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  )

describe('theme', () => {
  it('follows the system theme on first visit', () => {
    const spy = mockSystemDark(true)
    renderToggle()
    expect(document.documentElement.dataset.theme).toBe('dark')
    spy.mockRestore()
  })

  it('a saved preference overrides the system theme', () => {
    const spy = mockSystemDark(true)
    localStorage.setItem('ev-theme', 'light')
    renderToggle()
    expect(document.documentElement.dataset.theme).toBe('light')
    spy.mockRestore()
  })

  it('toggles and persists the choice', async () => {
    renderToggle()
    expect(document.documentElement.dataset.theme).toBe('light')
    await userEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('ev-theme')).toBe('dark')
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })
})

import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { renderAt, settled } from './utils'

const WEB3FORMS = 'https://api.web3forms.com/submit'

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })

const accepted = () => json(200, { success: true, body: { message: 'Email sent successfully!' } })

/** Mocks fetch: POSTs get `reply`. */
function mockPost(reply: () => Response | Promise<Response>) {
  const fetchMock = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
    if (init?.method !== 'POST') throw new TypeError('No network in tests')
    return reply()
  })
  vi.stubGlobal('fetch', fetchMock)
  const posts = () => fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')
  return { posts, body: (i = 0) => JSON.parse(String(posts()[i][1]!.body)) }
}

beforeEach(() => {
  vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-access-key')
  return () => vi.unstubAllEnvs()
})

async function fillContactForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Full name/), 'Asha Rao')
  await user.type(screen.getByLabelText(/Work email/), 'asha@example.com')
  await user.selectOptions(screen.getByLabelText(/What is this about/), 'Sales')
  await user.click(screen.getByLabelText(/^Message/))
  await user.paste('We would like to know more about the CRM module.')
  await user.click(screen.getByRole('checkbox', { name: /privacy policy/ }))
}

describe('contact form', () => {
  it('shows field errors and sends nothing when required fields are missing', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/contact')
    await user.type(screen.getByLabelText(/Work email/), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Enter your name')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Choose a topic')).toBeInTheDocument()
    expect(screen.getByText('Please agree to the privacy policy')).toBeInTheDocument()
    expect(screen.getByLabelText(/Full name/)).toHaveFocus()
    expect(screen.getByLabelText(/Full name/)).toHaveAttribute('aria-invalid', 'true')
    expect(api.posts()).toHaveLength(0)
  })

  it('emails the request through Web3Forms and confirms it was received', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/contact')
    await fillContactForm(user)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('heading', { name: 'Thank you, Asha' })).toHaveFocus()
    expect(String(api.posts()[0][0])).toBe(WEB3FORMS)
    expect(api.body()).toMatchObject({
      access_key: 'test-access-key',
      subject: 'Contact message from Asha Rao',
      replyto: 'asha@example.com',
      Form: 'Contact message',
      'Full name': 'Asha Rao',
      'Work email': 'asha@example.com',
      'What is this about?': 'Sales',
      Page: '/contact',
    })
    // Empty optional fields are left out of the email.
    expect(api.body()).not.toHaveProperty('Phone')
  })

  it('explains when the request could not be sent, and keeps what was typed', async () => {
    mockPost(() => Promise.reject(new TypeError('offline')))
    const user = userEvent.setup()
    await renderAt('/contact')
    await fillContactForm(user)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('could not send your request')
    expect(screen.getByLabelText(/Full name/)).toHaveValue('Asha Rao')
  })

  it('does not claim success when the form service rejects the submission', async () => {
    mockPost(() => json(400, { success: false, body: { message: 'Invalid access key' } }))
    const user = userEvent.setup()
    await renderAt('/contact')
    await fillContactForm(user)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('could not send your request')
    expect(screen.queryByRole('heading', { name: /Thank you/ })).not.toBeInTheDocument()
  })

  it('says the form is not connected when no access key is set, and sends nothing', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '')
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/contact')
    await fillContactForm(user)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('not connected yet')
    expect(api.posts()).toHaveLength(0)
  })

  it('pretends to accept bot submissions (honeypot filled) but sends nothing', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/contact')
    await fillContactForm(user)
    await user.type(screen.getByLabelText('Website'), 'https://spam.example')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('heading', { name: 'Thank you, Asha' })).toBeInTheDocument()
    expect(api.posts()).toHaveLength(0)
  })
})

describe('demo and quote forms', () => {
  it('pre-selects the module from the link and sends the chosen module names', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/book-demo?module=crm&module=not-a-module')
    const modules = screen.getByRole('group', { name: /Modules you are interested in/ })
    expect(within(modules).getByRole('checkbox', { name: 'CRM' })).toBeChecked()
    await user.click(within(modules).getByRole('checkbox', { name: 'Inventory Management' }))

    await user.type(screen.getByLabelText(/Full name/), 'Asha Rao')
    await user.type(screen.getByLabelText(/Work email/), 'asha@example.com')
    await user.type(screen.getByLabelText(/^Company \*/), 'Rao Traders')
    await user.selectOptions(screen.getByLabelText(/Company size/), '11-50')
    await user.selectOptions(screen.getByLabelText(/Preferred time for the demo/), 'Afternoon')
    await user.click(within(modules).getByRole('checkbox', { name: 'Not sure yet, recommend modules for me' }))
    await user.click(screen.getByRole('checkbox', { name: /privacy policy/ }))
    await user.click(screen.getByRole('button', { name: 'Request my demo' }))

    expect(await screen.findByRole('heading', { name: 'Thank you, Asha' })).toBeInTheDocument()
    expect(api.body()).toMatchObject({
      subject: 'Demo request from Asha Rao',
      Company: 'Rao Traders',
      'Company size (employees)': '11-50',
      'Preferred time for the demo': 'Afternoon',
      'Modules you are interested in': 'CRM, Inventory Management, Not sure yet, recommend modules for me',
    })
  })

  it('pre-selects the service on the quote form and requires a timeline and description', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/request-quote?service=data-migration')
    const services = screen.getByRole('group', { name: 'Services (optional)' })
    expect(within(services).getByRole('checkbox', { name: 'Data Migration' })).toBeChecked()
    await user.click(screen.getByRole('button', { name: 'Request my quote' }))
    expect(screen.getByText('Choose a timeline')).toBeInTheDocument()
    expect(screen.getByText('Describe what you need (at least 20 characters)')).toBeInTheDocument()
    expect(api.posts()).toHaveLength(0)
  })

  it('product and service pages link to the forms with the item pre-selected', async () => {
    await renderAt('/products/crm')
    expect(screen.getAllByRole('link', { name: /Book a Demo/ }).some((a) => a.getAttribute('href') === '/book-demo?module=crm')).toBe(true)
  })
})

describe('newsletter', () => {
  it('validates input, then subscribes through Web3Forms', async () => {
    const api = mockPost(accepted)
    const user = userEvent.setup()
    await renderAt('/newsletter?email=bad')
    expect(screen.getByLabelText('Business email')).toHaveValue('bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('valid email')

    await user.clear(screen.getByLabelText('Business email'))
    await user.type(screen.getByLabelText('Business email'), 'ops@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('confirm')
    expect(api.posts()).toHaveLength(0)

    await user.click(screen.getByRole('checkbox', { name: /receive ERPVALLEY emails/ }))
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(await screen.findByRole('status')).toHaveTextContent('You are subscribed')
    expect(String(api.posts()[0][0])).toBe(WEB3FORMS)
    expect(api.body()).toMatchObject({ subject: 'Newsletter signup', Email: 'ops@example.com', replyto: 'ops@example.com' })
  })

  it('the footer form hands the address to the newsletter page without putting it in the URL', async () => {
    const user = userEvent.setup()
    const router = await renderAt('/')
    await user.type(screen.getByLabelText('Get ERP insights by email'), 'ops@example.com')
    await user.click(screen.getByRole('button', { name: 'Continue to newsletter signup' }))
    await settled(router)
    expect(router.state.location.pathname).toBe('/newsletter')
    expect(router.state.location.search).toBe('')
    expect(await screen.findByLabelText('Business email')).toHaveValue('ops@example.com')
  })

  it('does not claim success when the form service is unavailable', async () => {
    mockPost(() => json(500, { statusCode: 500, error: 'Something went wrong on server.' }))
    const user = userEvent.setup()
    await renderAt('/newsletter?email=ops@example.com')
    await user.click(screen.getByRole('checkbox', { name: /receive ERPVALLEY emails/ }))
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('could not subscribe you')
    expect(screen.queryByText('You are subscribed')).not.toBeInTheDocument()
  })
})

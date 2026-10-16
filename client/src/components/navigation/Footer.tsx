import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '@/components/common/Logo'
import { Container } from '@/components/ui/Container'
import { footerColumns, legalLinks } from '@/config/navigation'
import { siteConfig } from '@/config/site'

const YEAR = new Date().getFullYear()

export function Footer() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const { contact, social } = siteConfig
  const socialLinks = Object.entries(social).filter(([, url]) => url)

  // The footer form hands off to the newsletter page, which handles consent and submission.
  // The address travels in router state, not the URL, so it never reaches analytics or server logs.
  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    navigate('/newsletter', { state: email ? { email } : undefined })
  }

  return (
    <footer className="border-t border-line-dark bg-midnight text-mist">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed">{siteConfig.tagline}</p>

            <form onSubmit={onSubscribe} className="mt-6" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="text-sm font-semibold text-white">
                Get ERP insights by email
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-lg border border-line-dark bg-navy px-3 text-sm text-white placeholder:text-mist/60 focus:border-logo-blue focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Continue to newsletter signup"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-electric px-4 text-white transition-[background-color,box-shadow,scale] hover:bg-[#2a72ff] hover:shadow-[0_8px_22px_-8px_rgb(11_92_255/0.75)] active:scale-95"
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </form>

            <ul className="mt-6 space-y-2 text-sm">
              {contact.email && (
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-logo-blue" aria-hidden />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-logo-blue" aria-hidden />
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white">{contact.phone}</a>
                </li>
              )}
              {contact.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 text-logo-blue" aria-hidden />
                  <span>{contact.address}</span>
                </li>
              )}
              <li>
                <Link to="/contact" className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline">
                  Contact our team <ArrowRight className="size-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="font-sans text-sm font-semibold text-white">{col.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link to={link.to} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </Container>

      <div className="border-t border-line-dark">
        <Container className="flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} ERPVALLEY. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
            {socialLinks.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-white">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  )
}

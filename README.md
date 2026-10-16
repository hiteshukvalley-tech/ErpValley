# ERPVALLEY

Marketing and lead-generation website for ERPVALLEY ERP products and IT services.

It is a **static website**: React 19, Vite, TypeScript, Tailwind CSS 4, React Router 7 and Lucide, in `client/`.
All content ships with the site (`client/src/content`). There is no server, database, login or admin panel.
Forms are emailed to the team through [Web3Forms](https://web3forms.com).

## Run locally

```bash
cd client
npm install
cp .env.example .env.local   # then add your Web3Forms access key (see "Forms")
npm run dev                  # http://localhost:5300  (design reference: /design-system)
```

Other commands: `npm test`, `npm run lint`, `npm run typecheck`, `npm run build` (output in `client/dist/`) and
`npm run preview` (serves the build on http://localhost:4300).

## Deploy

Build with `npm run build` in `client/` and upload `client/dist/` to any static host (Netlify, Vercel, Cloudflare
Pages, S3 + CloudFront, cPanel…). Add `VITE_WEB3FORMS_KEY` (and optionally `VITE_SITE_URL`) to the host's build
settings, plus `VITE_GTM_ID` for tracking (see "Tracking"). These values are baked in at build time, so rebuild
after changing them. The site uses client-side routing, so every path must serve `index.html`; `public/_redirects` (Netlify,
Cloudflare Pages) and `vercel.json` (Vercel) already do this. On other hosts, add an equivalent rewrite rule.

## Forms

Contact, Book a demo, Request a quote and Newsletter send their details to Web3Forms, which emails them to the
address the access key was created with (`client/src/services/forms.ts`).

1. Create a free access key at https://web3forms.com with the inbox that should receive enquiries.
2. Put it in `client/.env.local` as `VITE_WEB3FORMS_KEY=...` and in your host's build settings.

The key is public by design: it can only send messages to your inbox. Without it, the forms show a
"not connected yet" message and send nothing. Each email lists the fields by their label, and "Reply" goes to the
visitor. Spam protection: a hidden honeypot field (bots get a normal response but nothing is sent) plus Web3Forms'
own filtering. Newsletter signups arrive as emails; keep the list in your email or newsletter tool.

## Tracking (Google Tag Manager)

The site loads Google Tag Manager when `VITE_GTM_ID` is set (e.g. `GTM-XXXXXXX`); with no ID, no tracking code
is added and nothing is tracked. GA4, Meta Pixel and other tools are added **inside the GTM dashboard**, never in
the code. Set `VITE_GTM_ENABLED=false` to switch tracking off for an environment.

- The GTM snippet is added to `index.html` at build time (`vite.config.ts`), so it is baked into the build:
  **rebuild and redeploy after changing the ID**.
- `client/src/services/analytics.ts` pushes these dataLayer events (no names, emails or phone numbers):
  - `utm_captured` on every full page load: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`,
    `utm_content`, `gclid`, `fbclid`, `referrer`, `landing_page`, `captured_at`. They are kept for 30 days in the
    first-party cookie `ev_attribution`. A new campaign link replaces them; otherwise the first touch is kept.
  - `page_view` on the first load and every route change: `page_path`, `page_location`, `page_title`. In GTM, fire
    GA4 page views on this custom event (not on "All Pages" or "History Change"), or they are counted twice.
  - `form_submit` after a contact, demo, quote or newsletter form is sent: `form_name`, `page_path` and the
    attribution values above. The same attribution is also listed in the enquiry email.
- Use `trackEvent(name, data)` from `services/analytics.ts` for new events.

## Content and photos

- Page text lives in `client/src/content/` (products, industries, services, posts, company, legal, home).
  Tests check the structure, links and the content rule: no invented customers, statistics, ratings,
  certifications or awards. Case studies go in `content/caseStudies.ts` only once the client has approved them.
- Photos are from Unsplash (free under the Unsplash License), stored in `client/public/images/photos/` as
  `<key>-800.webp` and `<key>-1600.webp`, and registered with alt text in `client/src/content/photos.ts`.
  They show situations and workplaces, never presented as ERPVALLEY customers or staff. A test checks that every
  registered photo exists in both sizes and that no unused files ship. See `DESIGN.md` for how to add one.
- Contact details for the footer and contact page are in `client/src/config/site.ts` (empty values are hidden).
- The legal pages are templates with `[placeholders]`; have them reviewed before launch.

## Frontend structure

```
client/src/
  components/common      Logo, ThemeProvider, PageHero, DetailHero, ProblemSolution, PhotoCards, Steps, CtaBand, …
  components/navigation  Header, MegaMenu, MobileNav, Footer
  components/ui          Button, Card, Badge, Container, Section, Accordion, EmptyState, Reveal, Photo
  components/home        Homepage sections
  components/forms       LeadForm (contact, demo and quote forms)
  components/mockups     Dashboard and module previews (sample data)
  config/                navigation.ts (menus + page registry), site.ts (contact details), forms.ts (form choices)
  content/               Page content, photos.ts (photo registry) and types.ts
  hooks/                 useTheme, usePageMeta, useInView
  pages/                 Home, products/, industries/, services/, company/, resources/, leads/, legal/, 404, 500
  routes/                router.tsx (pages other than the homepage are lazy-loaded)
  services/              content.ts (route loaders), search.ts + searchIndex.ts (in-browser search), forms.ts
  styles/                index.css (design tokens, light/dark themes)
  test/                  unit tests
```

## Design tokens

Brand colors are defined once in `client/src/styles/index.css` as `--ev-*` variables. Components use semantic
utilities (`bg-bg`, `bg-bg-alt`, `bg-surface`, `text-fg`, `text-fg-muted`, `border-line`, `bg-primary`, `text-link`)
that switch automatically between light and dark themes. Design decisions are recorded in `DESIGN.md`.

## Logo

The official logo is in `client/src/assets/brand/` and is rendered by `client/src/components/common/Logo.tsx`
(header, footer, mobile menu). `erpvalley-logo-original.png` is the file as supplied; the website uses two
web-ready versions made from it (cropped, transparent background): `erpvalley-logo.png` for light backgrounds
and `erpvalley-logo-on-dark.png` (white "ALLEY") for the footer and dark mode. The favicon
(`client/public/favicon.svg`) uses the logo's two-tone "V". If you get an SVG version of the logo, replace the
two PNGs with it for the sharpest result.

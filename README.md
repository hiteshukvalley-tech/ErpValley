# ERPVALLEY

Marketing, lead-generation and customer platform for ERPVALLEY ERP products and IT services.

| App | Stack | Status |
|---|---|---|
| `client/` | React 19, Vite, TypeScript, Tailwind CSS 4, React Router 7, Lucide | Steps 1–6 complete |
| `server/` | Node.js, Express 5, TypeScript, MongoDB Atlas (Mongoose), Zod | Steps 5–6 complete: content API and lead forms |

## Build steps

1. Design system, layout, navigation — done
2. Homepage — done
3. Product, industry and service pages — done
4. Company, resources, legal and search pages — done
5. Backend API: content models, seed, public read API, search; the website reads content from the API — done
6. Lead forms: contact, book a demo, request a quote, newsletter — done (stored in MongoDB; email alerts not set up yet)
7. Accounts and admin panel (case studies, settings, content editing)

## Run locally

```bash
# 1. API (needs a MongoDB Atlas connection string)
cd server
npm install
cp .env.example .env     # then put your Atlas connection string in MONGODB_URI
npm run seed             # copies the website content into MongoDB (needs client/ dependencies installed)
npm run dev              # http://localhost:5301/api

# 2. Website
cd client
npm install
npm run dev              # http://localhost:5300  (/api is proxied to the server; design reference: /design-system)
```

Other commands, in either folder: `npm test`, `npm run build`, `npm run typecheck`. The client also has `npm run lint`
and `npm run preview` (http://localhost:4300).

## API (`server/`)

All responses are JSON. Content uses the same shapes as `client/src/content/types.ts`, with icons as Lucide icon names.

| Endpoint | Description |
|---|---|
| `GET /api/health` | Server and database status (503 when the database is down) |
| `GET /api/settings` | Site name, URL, contact details and social links |
| `GET /api/products`, `/api/products/:slug` | ERP modules, in navigation order |
| `GET /api/industries`, `/api/industries/:slug` | Industry solutions |
| `GET /api/services`, `/api/services/:slug` | Services |
| `GET /api/posts?category=&kind=`, `/api/posts/:slug` | Blog articles and guides, newest first |
| `GET /api/case-studies`, `/api/case-studies/:slug` | Published (client-approved) case studies only |
| `GET /api/search?q=` | Full-text search across products, industries, services and articles |
| `POST /api/leads/contact` | Contact form: name, email, topic, message (+ company, phone) |
| `POST /api/leads/demo` | Book a demo: name, email, company, company size, modules, notes |
| `POST /api/leads/quote` | Request a quote: as demo, plus services, timeline and requirements |
| `POST /api/newsletter` | Newsletter signup (one record per email address) |

Form endpoints need `consent: true`, answer `201` on success and `400` with per-field messages for invalid input.
Leads and subscribers are stored in the `leads` and `subscribers` collections and are never exposed by the public
API; view them in Atlas (Browse Collections) until the admin panel arrives in Step 7. Spam protection: a hidden
honeypot field (bots get a normal response but nothing is stored) and a limit of 10 submissions per IP per 15
minutes. Choice lists (topics, company sizes, timelines) live in `client/src/config/forms.ts` and
`server/src/validation/forms.ts`; a test checks they match. To email the team about new leads, add an email service
in `server/src/services/notify.ts`.

The website loads products, industries, services, articles and case studies from the API through route loaders,
and uses `/api/search` for search. If the API cannot be reached it falls back to the content bundled in
`client/src/content`, so the site keeps working without the server. `VITE_API_URL` sets the API address
(default `/api`; `off` uses only the bundled content). If the API is on another domain, add the website's address
to the server's `CORS_ORIGIN`. Icons travel as Lucide names; a new icon must be added to `client/src/content/icons.ts`.

Security defaults: Helmet headers, CORS limited to `CORS_ORIGIN`, rate limiting on `/api`, validated query
parameters, and errors that never expose internal details. Server tests run against an in-memory MongoDB, so they
do not need Atlas.

`npm run seed` is safe to re-run: it updates content by slug, never deletes, and creates site settings only once.

## Frontend structure

```
client/src/
  components/common      Logo, ThemeProvider, ThemeToggle, PageHero, DetailHero, Steps, CtaBand, …
  components/navigation  Header, MegaMenu, MobileNav, Footer
  components/ui          Button, Card, Badge, Container, Section, Accordion, EmptyState, Reveal
  components/home        Homepage sections
  components/forms       LeadForm (contact, demo and quote forms)
  components/mockups     Dashboard and module previews (sample data)
  config/                navigation.ts (menus + page registry), site.ts (contact details), forms.ts (form choices)
  content/               Page content (products, industries, services, posts, company, legal) + types.ts
  hooks/                 useTheme, usePageMeta, useInView
  layouts/               PublicLayout
  pages/                 Home, products/, industries/, services/, company/, resources/, leads/, legal/, 404, 500
  routes/                router.tsx (pages other than the homepage are lazy-loaded)
  services/              api.ts, content.ts (route loaders: API first, bundled content as fallback), search.ts
  styles/                index.css (design tokens, light/dark themes)
  test/                  unit tests
```

## Server structure

```
server/src/
  app.ts            Express app (middleware, routes, error handling)
  server.ts         Entry point: validate env, connect to MongoDB, listen, graceful shutdown
  config/env.ts     Environment validation (Zod)
  db/               MongoDB connection
  models/           Product, Industry, Service, Post, CaseStudy, SiteSetting, Lead, Subscriber
  routes/           Content, search, forms, settings and health endpoints
  validation/       Form input rules (Zod)
  services/         New-lead notification (logs only; email can be added here)
  seed/             Upsert logic used by the seed script
  scripts/          npm run seed (loads client/src/content)
server/test/        API tests (Vitest + Supertest + in-memory MongoDB)
```

## Design tokens

Brand colors are defined once in `client/src/styles/index.css` as `--ev-*` variables. Components use semantic
utilities (`bg-bg`, `bg-bg-alt`, `bg-surface`, `text-fg`, `text-fg-muted`, `border-line`, `bg-primary`, `text-link`)
that switch automatically between light and dark themes.

## Logo

The official logo is in `client/src/assets/brand/` and is rendered by `client/src/components/common/Logo.tsx`
(header, footer, mobile menu). `erpvalley-logo-original.png` is the file as supplied; the website uses two
web-ready versions made from it (cropped, transparent background): `erpvalley-logo.png` for light backgrounds
and `erpvalley-logo-on-dark.png` (white "ALLEY") for the footer and dark mode. The favicon
(`client/public/favicon.svg`) uses the logo's two-tone "V". If you get an SVG version of the logo, replace the
two PNGs with it for the sharpest result.

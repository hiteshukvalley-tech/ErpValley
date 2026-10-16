# ERPVALLEY design brief

Decisions every change to the website should follow. Update this file when you make a new one.

## Product
- Static B2B marketing and lead-generation site for an ERP platform plus implementation and development services.
- Audience: owners, operations, finance and IT leads at growing businesses, mostly on desktop, often on phones.
- Goal of every page: understand the problem we solve, then book a demo, request a quote or contact us.
- No server, accounts or admin panel. Content is in `client/src/content`; forms go to Web3Forms (`services/forms.ts`).

## Stack
React 19 + Vite + TypeScript, Tailwind CSS 4 (tokens in `styles/index.css`), React Router 7 (lazy routes,
loaders for content), Lucide icons only, Vitest + Testing Library, oxlint. Forms use plain state in
`components/forms/LeadForm.tsx` (no form library). No data-fetching library: there is no API.

## Visual language
- Colors: semantic tokens only (`bg`, `bg-alt`, `surface`, `fg`, `fg-muted`, `line`, `primary`, `link`); brand
  navy/blue for heroes (`bg-hero`) and navy bands. One accent (electric blue). Rose is reserved for "problem"
  icons, emerald/amber/rose for status with a text label.
- Type: Plus Jakarta Sans for headings, Inter for text. Sentence case.
- Radius: `rounded-card` (1rem) for cards, `rounded-3xl` for large feature panels and photos, `rounded-lg` for controls.
- Cards: border + soft shadow (`shadow-card`), lift to `shadow-pop` on hover for links.
- Light and dark themes; every change must look right in both.

## Photography
- Real photos from Unsplash, downloaded (never hotlinked) to `client/public/images/photos/<key>-{800,1600}.webp`,
  3:2 crop, registered in `client/src/content/photos.ts` with descriptive alt text.
- Use `<Photo>` (`components/ui/Photo.tsx`): responsive srcset, lazy by default, `priority` only above the fold,
  `decorative` when nearby text already says the same thing. The container sets the aspect ratio.
- Photos illustrate the *problem* or the *work*, never pose as customers, staff or results. No fake logos.
- Text over photos always sits on a midnight gradient so it keeps contrast.
- Patterns: `ProblemSolution` (product pages), `PhotoCards` (overview grids), `image` prop on `PageHero` /
  `DetailHero` (hero backgrounds), photo tiles in homepage Industries and Challenges.
- To add a photo: download 800 and 1600 px WebP with the same key, add it to `photos.ts`. The photo test fails
  if a file is missing or unused.

## Hover effects
Defined once in `styles/index.css`; don't write one-off hover classes for cards.
- `card-link` on a card that is itself a link: lifts 4px, blue border, stronger shadow, arrow slides.
- `card-hover` on an information card (not clickable): blue border and stronger shadow only. No lift, so it never
  pretends to be a link. Feature panels and large photos use it too.
- No hover on things that are not cards: form containers, the comparison table's scroll box, dashed "coming soon"
  placeholders and warning notices.
- `card-icon` on the icon chip inside either card (turns solid blue); `card-photo` on a photo inside one (zooms 5%).
- `Button` handles its own hover (colour, glow on primary, tint on secondary) and press (scales to 0.98).
- Arrows (`ArrowRight`, `ArrowUpRight`) inside any link or button slide on hover automatically.
- Hover applies only on devices with a mouse; movement is skipped when the visitor prefers reduced motion.

## Header and menus
- Menu triggers: an underline grows from the centre on hover; the open menu is tinted blue; the menu for the
  section the visitor is in keeps its underline (`activeMenuIndex` in `config/navigation.ts`).
- The bar slims from 72 to 64 px with a soft shadow once the page scrolls; a thin brand gradient runs along the top.
- Every mega menu uses the same 3-column grid, ideally 3 rows (9 or 12 items). Menus with several groups split
  the columns by item count (Solutions: 6 goals in 2 columns | 3 "plan and buy" links in 1), with a divider.
- Mega menu panels fade and drop in (180 ms). Items: soft highlight, icon fills blue, title turns blue, arrow slides
  in; the current page is pre-highlighted.
- The mobile drawer is rendered into `<body>` with a portal. Anything `fixed` inside the header would otherwise be
  positioned against the header, because its backdrop blur creates a containing block.

## Card grids: no empty gaps
- A card grid's last row is always full at every width (checked at 1440, 1100, 800 and 640 px).
- Prefer real content to fill it: one more relevant item in `src/content` (a module, a factor, a principle), or a
  useful call-to-action card (e.g. "Industry not listed?", newsletter, guides).
- 2-then-3 column grids use `fillLastRowSm` / `fillLastRowMd` from `utils/grid.ts`, so a lone last card spans the
  row on tablets. A lone card in a 2-column category grid spans full width and shows extra detail (key features).
- Form fields marked `half` come in pairs; add a useful optional field rather than leaving one alone on a row.

## Accessibility rules (verified with axe on every page, light and dark)
- Text contrast at least 4.5:1 (3:1 for 24px+ or 19px bold), including tiny text inside product mockups and
  decorative numbers. Dark-mode `--link` is `#5aa5ff` for this reason; don't switch it back to logo blue.
- Headings never skip a level. If a section has no visible heading, add `<h2 className="sr-only">` and point the
  section's `aria-labelledby` at it.
- No `<aside>` inside `<main>` or the header; use `<div>` for side panels.
- A dropdown panel sits right after its trigger in the DOM, so keyboard users reach it with one Tab.

## Content rules
- No invented customers, statistics, percentages, ratings, certifications or awards (enforced by tests).
- Product previews are labelled "sample data".
- Case studies only when the client approved them.

## Known gotcha
- `Button` always sets `inline-flex`, so `className="hidden sm:inline-flex"` on a Button does not hide it.
  Wrap it in an element that carries the responsive display classes instead.

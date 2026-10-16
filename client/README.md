# ERPVALLEY client

The static public website: React 19, Vite, TypeScript, Tailwind CSS 4 and React Router 7.

```bash
npm install
npm run dev        # http://localhost:5300
npm test           # Vitest + Testing Library
npm run lint       # oxlint
npm run build      # typecheck + production build into dist/
npm run preview    # serve dist/ on http://localhost:4300
```

Forms need `VITE_WEB3FORMS_KEY` in `.env.local` (see `.env.example`). See the [project README](../README.md) for
deployment, forms, photos and structure.

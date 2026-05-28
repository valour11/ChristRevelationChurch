# Christ's Revelation International Church — Ministry Website

Official website of **Christ's Revelation International Church (CRIC)**, an apostolic ministry founded by **Apostle Godwin Bantar**.

Built as a static React SPA — no backend. All forms submit directly to Google Sheets via a Google Apps Script Web App.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Vite 6** + **React 19** + **TypeScript 5.8** |
| Styling | **Tailwind CSS v4** (`@theme` directive in `index.css`) |
| Routing | **React Router v7** (`BrowserRouter`) |
| Animation | **motion v12** (formerly Framer Motion) |
| Icons | **lucide-react** |
| SEO | **react-helmet-async** (via `SEO.tsx` component) |

## Quick Start

```bash
npm install
npm run dev        # Dev server at http://0.0.0.0:3000
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # Type-check only (tsc --noEmit)
npm run clean      # rm -rf dist
```

## Environment Variables

Copy `.env.example` to `.env`:

```env
VITE_WEB_APP_URL="your_google_apps_script_url_here"
GEMINI_API_KEY="your_gemini_api_key_here"
APP_URL="http://localhost:3000"
```

- **`VITE_WEB_APP_URL`** — Google Apps Script Web App URL. All forms POST to this endpoint with `mode: 'no-cors'`. Data goes directly to Google Sheets.
- **`GEMINI_API_KEY`** — Inlined at build time via `vite.config.ts` (uses `loadEnv` with empty prefix + `define`). Available as `process.env.GEMINI_API_KEY`.
- **`APP_URL`** — Used at build time for metadata.

## Pages (9 Routes)

| Route | Page |
|---|---|
| `/` | Home — Hero, Programs, Prayer Watch, Apostle bio, Testimonies, Youth Ministry, Partnership CTA |
| `/about` | About — Church history, Vision/Mission, Core Values |
| `/store` | Store & Media — Product catalog with cart |
| `/school` | School of Ministry (CRISOM) — 16-course curriculum, enrollment modal |
| `/prayer-request` | Prayer Request form |
| `/partnership` | Partnership form |
| `/contact` | Contact form |
| `/new-convert` | New Convert follow-up form |
| `/login` | **Static mockup** — no authentication logic |

## Architecture

### Form Data Flow

All 5 forms (Contact, Prayer Request, Partnership, School, New Convert) share the same pattern:

```ts
const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;

await fetch(WEB_APP_URL, {
  method: 'POST',
  mode: 'no-cors',  // Silently posts to Google Apps Script
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ formType: '...', ...fields })
});
```

There is **no backend API**. No Express routes are used despite Express being in `package.json`.

### Styling Conventions

- **Fonts**: Outfit (`font-display`) for headings, Inter (`font-sans`) for body
- **Brand**: `#28AE4B` green — Tailwind tokens: `brand`, `brand-light`, `brand-dark`
- **Utilities**: `.glass` (backdrop blur), `.card-shadow` (green-tinted shadow) — both defined in `index.css`
- **Animation**: `motion.div` with `initial`/`animate`/`whileInView` + `viewport={{ once: true }}`; `AnimatePresence` for enter/exit
- **No separate component CSS files** — everything uses Tailwind classes

### Path Aliases

`@/` maps to project root — configured in both `vite.config.ts` and `tsconfig.json`.

### Asset Imports

- Images imported as modules from `src/assets/` (`.jpeg`, `.png`, `.jpg`)
- `.docx` files declared as valid modules in `src/vite-env.d.ts` — linked/downloadable as resources

## Dev Notes

- **HMR** is disabled in AI Studio via `DISABLE_HMR=true`. Remove/unset to enable hot reload.
- **No test framework** — no test files, scripts, or dependencies.
- **No linter/formatter** — only `tsc --noEmit` for type checking.
- **SPA routing** — `public/_redirects` sends all routes to `/index.html` (Netlify-style).
- **No CI/CD** — no `.github/` directory. Deployed as an AI Studio applet.

## Deployment

```bash
npm run build
# Outputs static files to dist/
# Deploy as an AI Studio applet (metadata.json declares this)
```

---

*Built with faith and purpose — Revealing Christ Jesus; Revealing His Kingdom.*

# AGENTS.md — Bantar Ministry

## Stack

- **Vite 6** + **React 19** + **TypeScript 5.8** SPA
- **Tailwind CSS v4** (`@theme` directive in `index.css`, no `tailwind.config.js`)
- **React Router v7** (`BrowserRouter` in `App.tsx`)
- **`motion` v12** (formerly Framer Motion) for animation
- **`lucide-react`** for icons
- **`react-helmet-async`** for SEO meta tags (via `src/components/SEO.tsx`)

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on `0.0.0.0:3000` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | `tsc --noEmit` (type-check only — no ESLint/Prettier) |
| `npm run clean` | `rm -rf dist` |

## Architecture

- **No backend.** Express is a listed dependency but has zero imports. All pages are static React components with client-side form POSTs.
- **9 routes**: `/`, `/about`, `/store`, `/school`, `/prayer-request`, `/partnership`, `/contact`, `/new-convert`, `/login`
- **Components**: `Navbar.tsx`, `Footer.tsx`, `SEO.tsx` in `src/components/`
- **Pages**: 9 files in `src/pages/`
- **Entry**: `index.html` → `src/main.tsx` → `App.tsx`
- **AI Studio applet** — `metadata.json` at root declares this
- **SPA redirect**: `public/_redirects` sends all routes to `/index.html` (Netlify-style)
- **Login page** is a static mockup — no authentication logic, form is non-functional

## Forms & Data Flow (Key Quirk)

All forms (Contact, Prayer Request, Partnership, School, New Convert) submit via `fetch` with `mode: 'no-cors'` to a Google Apps Script Web App URL:

```
const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;
```

Set `VITE_WEB_APP_URL` in `.env`. There is no backend API — form data goes directly to Google Sheets via Apps Script.

## Styling Conventions

- **Fonts**: Outfit (`font-display`) for headings, Inter (`font-sans`) for body — imported via Google Fonts in `index.css`
- **Brand color**: `#28AE4B` green — Tailwind tokens: `brand`, `brand-light`, `brand-dark`
- **Utility classes**: `.glass` (backdrop blur), `.card-shadow` (green-tinted shadow) defined in `index.css`
- **All components use Tailwind exclusively** — no separate CSS files
- **Animation pattern**: `motion.div` with `initial`/`animate`/`whileInView` + `viewport={{ once: true }}`; `AnimatePresence` for enter/exit

## Dev Quirks

- **HMR is OFF by default** when `DISABLE_HMR=true` is set (the AI Studio env). Remove/unset the var to enable hot reload. Prevents flickering during agent edits.
- **No test framework.** No test files, scripts, or dependencies.
- **No linter/formatter.** Only `tsc --noEmit` checks types. Formatting is manual.
- **Path alias**: `@/` maps to project root (`./*`) — configured in both `vite.config.ts` and `tsconfig.json`
- **Env vars** are loaded two ways:
  - `VITE_WEB_APP_URL`: standard `import.meta.env.VITE_*` — visible to client code
  - `GEMINI_API_KEY`: inlined at build time via `loadEnv(mode, '.', '')` with empty prefix + `define` in vite.config.ts. NOT a `VITE_` var. Used as `process.env.GEMINI_API_KEY`.
- **`.docx` files** are importable JS modules (declared via `vite-env.d.ts`) — assets like `FOUNDATION CLASS COURSE (1).docx` are linked/downloadable resources
- **Assets**: images imported as modules from `src/assets/*.jpeg` (also `.png`, `.jpg`). Subdirectories: `prayer-img/`, `testimony/`

## Build & Deploy

- `npm run build` outputs to `dist/` (static files only — `index.html` + hashed assets)
- `.env*` files gitignored (except `.env.example`)
- Deployed as an AI Studio applet — env vars injected at runtime by AI Studio
- No CI/CD, no `.github/` directory

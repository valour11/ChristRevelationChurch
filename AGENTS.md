# AGENTS.md — Bantar Ministry

## Stack

- **Vite 6** + **React 19** + **TypeScript 5.8** SPA
- **Tailwind CSS v4** (`@theme` directive in `index.css`, not `tailwind.config.js`)
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

- **No backend.** Express is listed as a dependency but has zero imports in source. All pages are static React components.
- **8 routes**: `/`, `/about`, `/store`, `/school`, `/prayer-request`, `/partnership`, `/contact`, `/login`
- **Components**: `Navbar.tsx`, `Footer.tsx`, `SEO.tsx`
- **Pages**: 8 files in `src/pages/`
- **Images**: imported as JS modules from `src/assets/*.jpeg`
- **Entry**: `index.html` → `src/main.tsx` → `App.tsx`
- **AI Studio applet** — `metadata.json` at root declares this for AI Studio hosting

## Dev Quirks

- **HMR is disabled by default.** Set `DISABLE_HMR=true` env to enable hot reload. This prevents flickering during agent edits in AI Studio.
- **No test framework.** No test files, no test scripts, no test deps.
- **No linter/formatter.** Only `tsc --noEmit` checks types. Formatting is manual.
- **Path alias**: `@/` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`)
- **Env vars** (`GEMINI_API_KEY`, `APP_URL`): loaded via `loadEnv(mode, '.', '')` with *empty prefix* — not the standard `VITE_` prefix. `GEMINI_API_KEY` is inlined as `process.env.GEMINI_API_KEY` at build time.

## Styling Conventions

- **Fonts**: Outfit (`font-display`) for headings, Inter (`font-sans`) for body — imported via Google Fonts in `index.css`
- **Brand color**: `#00A3A3` teal — Tailwind tokens: `brand`, `brand-light`, `brand-dark`
- **Utility classes**: `.glass` (backdrop blur), `.card-shadow` (teal-tinted shadow) defined in `index.css`
- **All components use Tailwind exclusively** — no separate CSS files per component
- **Animation pattern**: `motion.div` with `initial`/`animate`/`whileInView` + `viewport={{ once: true }}`

## Build & Deploy

- `npm run build` outputs to `dist/` (static files only — `index.html` + hashed assets)
- `.env*` files are gitignored (except `.env.example`)
- Deployed as an AI Studio applet — env vars injected at runtime by AI Studio

# Technology Stack

**Analysis Date:** 2026-07-08

## Languages

**Primary:**
- TypeScript 5.x - Application source in `src/app/layout.tsx` and `src/app/page.tsx`
- CSS - Global styling and theme variables in `src/app/globals.css`

**Secondary:**
- JavaScript (ES modules) - Tooling configuration in `eslint.config.mjs` and `postcss.config.mjs`
- Markdown/YAML - Repository guidance and automation content in `README.md` and `.github/`

## Runtime

**Environment:**
- Node.js - Required for `next dev`, `next build`, and `next start`; the repository does not pin a version with `engines` or `.nvmrc`
- Browser runtime - The rendered output of the App Router route in `src/app/`

**Package Manager:**
- npm - Used by the committed lockfile and local setup
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.2.10 - App Router frontend framework rooted at `src/app/`
- React 19.2.4 - Component runtime used by route modules
- React DOM 19.2.4 - DOM renderer for the Next.js application

**Testing:**
- None configured yet - No test runner, coverage tool, or test scripts are committed

**Build/Dev:**
- Tailwind CSS 4.x - Styling foundation imported in `src/app/globals.css`
- `@tailwindcss/postcss` 4.x - PostCSS bridge configured in `postcss.config.mjs`
- TypeScript 5.x - Strict type checking via `tsconfig.json`
- ESLint 9.x with `eslint-config-next` 16.2.10 - Linting via `eslint.config.mjs`
- Turbopack via Next.js defaults - Observed during `next build`

## Key Dependencies

**Critical:**
- `next` 16.2.10 - Routing, rendering, metadata, fonts, and image optimization
- `react` 19.2.4 - Component model for UI composition
- `react-dom` 19.2.4 - Browser rendering runtime
- `tailwindcss` 4.x - Utility CSS system imported globally
- `eslint-config-next` 16.2.10 - Next.js-specific lint rules and best-practice checks

**Infrastructure:**
- `typescript` 5.x - Static typing and editor tooling
- `@tailwindcss/postcss` 4.x - Tailwind PostCSS plugin wiring
- `@types/node` 20.x - Node.js ambient typing for build tooling
- `@types/react` 19.x - React type definitions
- `@types/react-dom` 19.x - React DOM type definitions

## Configuration

**Environment:**
- `.env*` files are ignored by `.gitignore`
- No `process.env` references were found in `src/`, root configs, or committed app code

**Build:**
- `package.json` - Scripts and dependency manifest
- `next.config.ts` - Next.js runtime/build config placeholder
- `tsconfig.json` - Strict TypeScript settings and `@/*` path alias
- `eslint.config.mjs` - Flat ESLint config with workspace-specific ignore rules
- `postcss.config.mjs` - Tailwind v4 PostCSS integration

## Platform Requirements

**Development:**
- Any OS with Node.js and npm
- Internet access may be required for `next/font/google` usage in `src/app/layout.tsx`

**Production:**
- No deployment target is committed yet
- The current app is a standard Next.js App Router project and can be adapted to typical Next.js hosting once deployment decisions are made

---
*Stack analysis: 2026-07-08*
*Update after major dependency changes*

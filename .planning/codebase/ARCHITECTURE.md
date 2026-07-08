# Architecture

**Analysis Date:** 2026-07-08

## Pattern Overview

**Overall:** Next.js App Router frontend starter inside a repository that also carries a large local agent/tooling layer

**Key Characteristics:**
- Single committed application route at `/`
- No server actions, API routes, auth layer, or data layer yet
- Static content rendered through Next.js layout/page modules
- Repository complexity is dominated by `.github/` and `.codex/` operational assets rather than runtime application code

## Layers

**Route / Presentation Layer:**
- Purpose: Define user-visible pages and root HTML shell
- Contains: `src/app/layout.tsx`, `src/app/page.tsx`
- Depends on: Next.js runtime, React, `next/font/google`, `next/image`, and global CSS
- Used by: Browser requests handled by the Next.js App Router

**Styling / Asset Layer:**
- Purpose: Provide global theme tokens, body defaults, and static media
- Contains: `src/app/globals.css`, `src/app/favicon.ico`, `public/*.svg`
- Depends on: Tailwind CSS import and Next.js static asset serving
- Used by: Route components and layout rendering

**Build / Tooling Layer:**
- Purpose: Configure linting, typing, bundling, and package scripts
- Contains: `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`
- Depends on: Node.js, npm, Next.js CLI, ESLint, TypeScript, Tailwind/PostCSS
- Used by: Local development and production builds

**Repository Operations Layer:**
- Purpose: Store agent instructions, skills, prompts, and supporting scripts
- Contains: `.github/`, `.codex/`, and generated planning artifacts under `.planning/`
- Depends on: Local GSD/Codex workflow tooling rather than the app runtime
- Used by: Human/operator workflows and repository automation, not by the browser app itself

## Data Flow

**HTTP Request to `/`:**

1. A user requests the root route handled by Next.js
2. The App Router resolves `src/app/layout.tsx` as the root shell
3. `RootLayout` injects `metadata`, `Geist` font variables, and body classes
4. The App Router renders `src/app/page.tsx` as the page content
5. `next/image` serves local assets from `public/`
6. `src/app/globals.css` applies Tailwind import, theme variables, and base body styles
7. Next.js returns the rendered page to the browser

**State Management:**
- No persistent application state is defined
- No remote data fetching or browser storage is used in the committed route

## Key Abstractions

**Route Module:**
- Purpose: Represent a page or layout in the App Router
- Examples: `src/app/layout.tsx`, `src/app/page.tsx`
- Pattern: Framework-reserved file names with default-exported React components

**Framework Metadata Export:**
- Purpose: Declare document metadata at the route tree root
- Examples: `metadata` in `src/app/layout.tsx`
- Pattern: Named export consumed by Next.js at build/render time

**Theme Token Layer:**
- Purpose: Centralize color and font variables for global styling
- Examples: `:root` variables and `@theme inline` in `src/app/globals.css`
- Pattern: CSS custom properties mapped into Tailwind runtime tokens

## Entry Points

**Package Scripts:**
- Location: `package.json`
- Triggers: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`
- Responsibilities: Start dev server, build production bundle, run server, lint source

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: Every App Router page render
- Responsibilities: Set metadata, font variables, and HTML/body shell

**Root Page:**
- Location: `src/app/page.tsx`
- Triggers: Requests to `/`
- Responsibilities: Render the current landing-page content and CTA links

## Error Handling

**Strategy:** Framework defaults only

**Patterns:**
- No custom error boundary, `error.tsx`, or `not-found.tsx` files are committed
- Build-time failures are currently caught through TypeScript and ESLint rather than runtime guards

## Cross-Cutting Concerns

**Logging:**
- No application logging abstraction is committed

**Validation:**
- TypeScript strict mode is enabled in `tsconfig.json`
- ESLint is configured through `eslint.config.mjs`

**Authentication:**
- No authentication mechanism exists yet

---
*Architecture analysis: 2026-07-08*
*Update when major patterns change*

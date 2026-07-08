# Z00Z Web Design Foundation

**Version:** 2.0.0  
**Date:** 2026-07-08  
**Status:** Canonical web architecture and UI foundation  
**Reference Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4

---

## 📋 Document Overview

🎯 **Purpose:** This document defines the canonical architecture, design-system boundaries, and implementation standards for web projects in the Z00Z website repository.

🔍 **Scope:** These rules apply to:

- Next.js App Router routing and layouts
- Server and Client Component boundaries
- Tailwind-based UI and design-token management
- Static assets and content structure
- Accessibility, performance, and SEO
- Local verification and pentest tooling integration

✅ **Authority:** When web architecture or UI patterns are in question, this file is the source of truth for this repository.

---

## 🏛️ 1. One Source of Truth

**Principle:** Each concern MUST have one primary location and one clear ownership model.

### ✅ Canonical Homes

| Concern | Canonical Home | Notes |
| --- | --- | --- |
| Routing and layouts | `src/app/` | App Router only |
| Shared source code | `src/` | Components, hooks, libs, types |
| Runtime assets | `public/` | Files served directly by the web server |
| Global design tokens | `src/app/globals.css` | Tailwind v4 tokens and CSS variables |
| Developer scripts | `scripts/` | Verification and local automation |
| Security tool payloads | `tools/` | Local pentest/support tooling |
| Generated reports | `reports/` | Machine-generated output only |
| Repo instructions | `.github/` | Guidance, prompts, policies |

### 🚫 Boundary Rules

- `public/` is **not** an application source directory.
- React components, hooks, business logic, and TypeScript utilities MUST NOT live under `public/`.
- CSS intended for the application UI MUST be imported from source files under `src/`, not discovered incidentally under `public/`.
- Generated reports MUST NOT become source dependencies.

### 🚨 Current Local Caveat

Files under `public/assets/svg/*.tsx` are legacy or stub content. They are not valid production source placement. Any SVG component that needs imports, props, or rendering logic belongs under `src/`.

---

## 🧱 2. Platform Baseline

### ✅ Technology Stack

- `Next.js 16`
- `React 19`
- `TypeScript` with `strict` mode
- `Tailwind CSS 4`
- `ESLint 9` with `eslint-config-next`

### ✅ Baseline Expectations

- Use the App Router, not the legacy Pages Router, for new application work.
- Keep source code under `src/`.
- Use `src/app/` as the route root.
- Prefer `next/font` and `next/image` for production UI.
- Keep config lightweight and explicit.
- Prefer the existing `@/*` import alias for shared source imports.
- Use the existing Tailwind v4 CSS-first setup in `src/app/globals.css`; do not introduce `tailwind.config.*` unless a real requirement appears.
- Keep linting on the `eslint` CLI path already wired in `package.json`, not `next lint`.

---

## 🧩 3. Server and Client Component Boundaries

**Principle:** Server Components are the default. Client Components are the exception.

### ✅ Use Server Components For

- Data fetching
- Layout composition
- Static and semi-static content
- Secure server-side decisions
- Heavy rendering that does not require browser APIs

### ✅ Use Client Components For

- `useState`, `useEffect`, and event handlers
- Browser-only APIs
- Interactive forms and widgets
- Animation systems that require client state

### ✅ Composition Pattern

- Prefer **Server parent + Client child**
- Push client boundaries down to the smallest useful leaf
- Keep client bundles narrow and deliberate

### 🚫 Anti-Patterns

- Blanket `'use client'` at route level without need
- Fetching core page data on the client when it can be fetched on the server
- Using `next/dynamic(..., { ssr: false })` inside a Server Component
- Moving secure logic to the client for convenience

---

## 🛣️ 4. Routing, Layouts, and Route Organization

### ✅ Route Conventions

- `page.tsx` for route UI
- `layout.tsx` for shared shells
- `loading.tsx` for route-level loading states
- `error.tsx` for route-level recovery
- `not-found.tsx` for missing-content flows

### ✅ Structure Rules

- Keep route groups in parentheses when you need organization without URL changes.
- Keep private implementation folders prefixed with `_` when a route-adjacent folder should never become a route.
- Co-locate route-specific components when reuse outside the route is unlikely.
- Extract shared UI into stable source folders under `src/`.

### ✅ Local Repository Rule

This repository currently uses `src/app/`, not a top-level `app/` folder. New route work should follow that layout unless there is an explicit migration decision.

---

## 🌐 5. Data Fetching, Caching, and Mutations

### ✅ Fetching Rules

- Fetch on the server by default.
- Call shared modules directly from Server Components instead of calling your own route handlers.
- Keep data-access concerns separated from presentational JSX when the logic grows beyond a trivial query or fetch.

### ✅ Caching Rules

- Prefer stable, cache-friendly rendering by default.
- Opt into dynamic behavior intentionally.
- Document revalidation strategy when adding time-sensitive content.
- Use tag-based or path-based revalidation only when the feature truly mutates cached data.

### ⚠️ Next.js 16 Request-Bound Data

Treat request-bound APIs such as `cookies()`, `headers()`, and `draftMode()` as dynamic inputs. Do not read them accidentally in layouts or shared surfaces unless dynamic rendering is intended.

### ✅ Mutations

- Prefer Server Actions for form-like mutations that belong to the UI flow.
- Validate all mutation input on the server.
- Return typed, predictable results from mutation boundaries.

---

## 🎨 6. Styling System and Design Tokens

**Principle:** Styling should be token-driven, composable, and readable at scale.

### ✅ Tailwind v4 Foundation

- Use `@import "tailwindcss";` in `src/app/globals.css`.
- Define core CSS variables in `:root`.
- Expose semantic tokens via Tailwind v4 `@theme`.
- Prefer semantic names over raw color-value naming when the token is reused in UI.

### ✅ Token Categories

At minimum, keep stable tokens for:

- background and foreground
- muted and accent surfaces
- border and focus states
- typography families
- spacing scale expectations
- radius and shadow rhythm

### ✅ Component Styling Rules

- Prefer utility classes for local component styling.
- Extract repeated patterns into reusable components before utility strings become hard to reason about.
- Keep global CSS for resets, tokens, and true cross-app primitives only.
- Prefer composition over massive one-off class blobs.
- Do not duplicate theme values between CSS tokens and a new Tailwind config when the current CSS-first model already covers the need.

### 🚫 Styling Anti-Patterns

- Writing app UI styles into `public/assets/styles/`
- Duplicating hex values across many components instead of introducing tokens
- Adding global selectors for route-specific concerns
- Hiding semantic problems behind decorative CSS

---

## 🖼️ 7. Asset Strategy

**Principle:** Runtime assets and source assets must stay separate.

### ✅ `public/` Is For

- logos
- photos and illustrations
- downloadable files
- map JSON and similar static datasets
- audio files served directly by the app

### ✅ Source Directories Are For

- SVG React components
- icon wrappers
- animation logic
- typed asset registries
- component-specific styling helpers

### ✅ Local Asset Rules

- `public/assets/` is the main runtime asset surface for the website.
- `scripts/sounds/` may exist as a developer-tool fallback and should not become the main app asset contract.
- Use consistent, URL-safe file naming for runtime assets.
- Prefer `next/image` for rendered raster assets in the app.

---

## ✍️ 8. Typography, Layout, and Visual System

### ✅ Typography

- Load primary fonts through `next/font`.
- Use a purposeful sans and mono pairing.
- Avoid default browser stacks as the final brand expression unless intentionally chosen.

### ✅ Layout

- Design mobile-first, then scale up.
- Use consistent width containers and spacing rhythm.
- Prefer deliberate whitespace and hierarchy over generic centered-template layouts.

### ✅ Motion

- Use motion to clarify hierarchy and state changes.
- Respect reduced-motion preferences.
- Avoid decorative animation that delays comprehension.

---

## ♿ 9. Accessibility and Semantics

**Principle:** Accessibility is part of the default implementation, not a later cleanup pass.

### ✅ Required Practices

- Use semantic HTML first.
- Preserve heading order and landmark structure.
- Provide meaningful alt text for informative images.
- Keep all interactive controls keyboard reachable.
- Preserve visible focus indicators.
- Maintain readable contrast across states.
- Announce async or validation state when needed.

### 🚫 Accessibility Anti-Patterns

- Clickable `div` or `span` without keyboard support
- Placeholder text used as the only label
- Focus states removed for aesthetics
- Color-only status communication

---

## ⚡ 10. Performance and Delivery

### ✅ Default Performance Rules

- Minimize client JavaScript.
- Keep most rendering in Server Components.
- Use `next/image` and `next/font`.
- Add loading states for async route segments.
- Split truly heavy client-only features.

### ✅ Bundle Discipline

- Avoid broad client-side utility imports that pull in unused code.
- Keep large visualization or editor libraries behind isolated client boundaries.
- Revisit abstraction shape if a component forces too much client-side hydration.

### ✅ Delivery Checks

- `npm run lint`
- `npm run build`
- `npm run verify`

These are the minimum local gates for website changes unless a task explicitly adds stronger checks.

---

## 🔒 11. Security Model

### ✅ Security Rules

- Treat every client input as untrusted.
- Validate request payloads on the server.
- Keep secrets on the server only.
- Use `NEXT_PUBLIC_*` only for values that are safe to expose.
- Do not rely on client-side guards for authorization.
- Sanitize any HTML, Markdown, or rich-content pipeline before rendering.

### ✅ Operational Security Surface

- Local pentest entrypoint: `scripts/run_pentest_tools.sh`
- Tool payload location: `tools/penetration/`
- Generated evidence location: `reports/`

If tooling paths change, update scripts, docs, and tests together.

---

## 🧪 12. Testing and Verification

### ✅ Verification Layers

1. **Static quality:** `npm run lint`
2. **Production integrity:** `npm run build`
3. **Repo wrapper check:** `npm run verify`
4. **Security workflow when relevant:** `./scripts/run_pentest_tools.sh`

### ✅ Testing Priorities

- Extract logic from JSX before it becomes difficult to test.
- Add unit tests for parsing, transformation, or decision-heavy modules.
- Add integration or end-to-end coverage for important user flows once those flows exist.
- Prefer deterministic fixtures over brittle UI snapshots.

---

## 📁 13. Directory and Naming Conventions

### ✅ Preferred Growth Layout

```text
src/
  app/
  components/
  lib/
  hooks/
  types/

public/
  assets/

scripts/
  verify.sh
  play_tone.sh
  run_pentest_tools.sh

tools/
  penetration/

reports/
```

This is the preferred structure as the app grows. The current repository may not yet contain every listed folder, and that is acceptable.

### ✅ Naming Rules

- Route folders: `kebab-case`
- React components: `PascalCase`
- Hooks and utilities: `camelCase`
- Static asset files: `kebab-case` or `snake_case`
- Environment variables: `UPPER_SNAKE_CASE`

---

## 🚫 14. Anti-Patterns to Reject

- App logic inside `public/`
- TSX assets stored under runtime asset folders and treated as executable source
- Styling that depends on files being present in `public/assets/styles/` without source imports
- `use client` by default instead of by necessity
- Fetching your own `/api` routes from Server Components
- Route-level client hydration for primarily static pages
- Accessibility fixes deferred until after visual polish

---

## ✅ 15. Implementation Checklist

Before closing a website change, confirm:

- The route structure still follows `src/app/`
- Server and client boundaries are intentional
- Styling uses source-owned tokens and Tailwind patterns
- Runtime assets remain in `public/`
- Source UI code remains in `src/`
- Accessibility and responsive behavior were considered
- `npm run lint` and `npm run build` were run, or any missing verification was called out

---

## 🔑 Canonical References

- `.github/copilot-instructions.md`
- `.github/instructions/nextjs.instructions.md`
- `.github/instructions/nextjs-tailwind.instructions.md`
- `package.json`
- `eslint.config.mjs`
- `tsconfig.json`
- `postcss.config.mjs`
- `next.config.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `scripts/verify.sh`

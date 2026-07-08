---
description: "Operational GitHub Copilot rules for the Z00Z website repository"
applyTo: "**"
---

**Version:** 3.0  
**Last Updated:** 2026-07-08  
**Project:** Z00Z Website - Next.js 16 + React 19 + Tailwind CSS 4

---

## 🎯 Core Principles (@MUST reference)

### 🚫 1. English-Only Policy

**MANDATORY:** All code, comments, documentation, commit messages, and technical content MUST be written exclusively in English.

**Applies to:**
- ✅ Source code and inline comments
- ✅ Documentation, README files, and planning artifacts
- ✅ Error messages, logs, and configuration values
- ✅ Commit messages and pull request descriptions

**Exception:** In the chat terminal, write responses to the user in Russian using Cyrillic.

---

### ⛔ 2. Safe File Operations

**CRITICAL:** NEVER use destructive deletion commands without explicit user confirmation.

**On Linux:**
- ✅ Use `trash-put <path>` when available
- ✅ Use `gio trash <path>` when available
- ❌ NEVER use `rm -rf`
- ❌ NEVER use `rm -r`
- ❌ NEVER use wildcard deletes without confirmation

**Before full file reset or overwrite:** If an existing `txt`, `md`, `json`, `yaml`, `yml`, or `csv` file will be fully replaced, create a sibling `.bak` first.

**This backup rule does not apply to:**
- ✅ Normal in-place edits
- ✅ Small `apply_patch` updates
- ✅ Simple deletions

---

### 🔔 3. User Interaction Signals

**MANDATORY:** At the end of each Copilot cycle, when user interaction is expected, execute:

```bash
./scripts/play_tone.sh
```

---

### ⭐ 4. Canonical Web Sources

**MANDATORY:** Treat the following files as the canonical local guidance for web work in this repository:

- `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md`
- `.github/instructions/nextjs.instructions.md`
- `.github/instructions/nextjs-tailwind.instructions.md`
- `package.json`
- `src/app/globals.css`

If these sources overlap, follow the stricter rule and keep repo-specific conventions above generic advice.

---

### 💯 5. Token Discipline

**MANDATORY:** Keep output compact by default.

**Output policy:**
- Do not repeat the user's request.
- Prefer exact paths, commands, and diffs.
- Keep explanations brief but sufficient.
- For code edits, report changed files and verification.
- Do not paste full files unless requested.
- Do not omit correctness, security, or test-failure information.

**Budgets:**
- Simple answer: `<= 3` lines
- Normal coding answer: `<= 5` bullets
- Long answer only when explicitly requested

---

## ⚙️ Repository Architecture

This file is an operational rulebook. The canonical architecture and design rules belong in `Z00Z_WEB_DESIGN_FOUNDATION.md`.

### 🔑 Local Baseline

- Framework: `Next.js 16` with the `App Router`
- Runtime UI stack: `React 19`, `TypeScript`, `Tailwind CSS 4`
- Source root: `src/`
- Route root: `src/app/`
- Import alias: `@/*` -> `src/*`
- Static runtime assets: `public/`
- Developer helpers: `scripts/`
- Security tooling payloads: `tools/`
- Generated pentest and verification outputs: `reports/`
- Lint entrypoint: `eslint` via `npm run lint`, not `next lint`
- Tailwind setup: CSS-first Tailwind v4 through `src/app/globals.css` and `postcss.config.mjs`

### 🚨 Local Red Flags

- Do not treat `public/` as source-code storage.
- Do not place React components, hooks, or app logic under `public/`.
- Do not import app styling from `public/assets/styles/`; app CSS must live under `src/` and be imported intentionally.
- Files like `public/assets/svg/*.tsx` are legacy placeholders or stubs, not a valid production source location.
- Do not assume a root-level `app/` directory exists; this repo uses `src/app/`.
- Do not add `tailwind.config.*` or broad `next.config.ts` changes without a concrete repository need.

---

## 🧩 Next.js Standards

### ✅ Rendering Model

- Prefer **Server Components by default**.
- Add `'use client'` only for hooks, event handlers, browser APIs, or client-only libraries.
- Split mixed pages into **Server parent + Client child**.
- Do not use `next/dynamic(..., { ssr: false })` inside Server Components.

### ✅ Routing

- Keep routes in `src/app/`.
- Use `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, and `not-found.tsx` intentionally.
- Use route groups for organization when needed.
- Keep route-specific components colocated near their route when that improves clarity.
- Prefer the `@/` alias for cross-`src` imports instead of long relative chains.

### ✅ Data Fetching

- Fetch on the server whenever possible.
- Prefer direct module calls from Server Components over calling your own route handlers.
- Make dynamic rendering intentional; `cookies()`, `headers()`, `draftMode()`, and request-bound state should not be read casually.
- Validate all Server Action and Route Handler inputs.

### ✅ Metadata and SEO

- Define route metadata intentionally.
- Prefer static `metadata` exports for stable routes.
- Use `generateMetadata` only when metadata truly depends on route data.
- Set meaningful `title`, `description`, and canonical sharing fields for public pages.

---

## 🎨 Tailwind and UI Standards

### ✅ Styling System

- Use Tailwind utility classes for component styling.
- Keep design tokens in `src/app/globals.css` using CSS variables and Tailwind v4 `@theme`.
- Prefer semantic tokens such as `--color-background`, `--color-foreground`, `--color-accent`, not scattered hard-coded values.
- Use `next/font` for primary typography.
- Keep global CSS minimal; extract repeated UI patterns into components instead of growing one-off utility chains forever.
- Prefer the Tailwind v4 CSS-first model already present in this repo over introducing config-heavy theme duplication.

### ✅ Design Quality

- Build responsive layouts mobile-first.
- Use semantic HTML before ARIA fallback.
- Preserve visible focus states.
- Maintain accessible contrast and keyboard navigation.
- Avoid generic template aesthetics; prefer a deliberate visual direction.

### 🚫 Styling Anti-Patterns

- Do not keep production React or TypeScript UI code in `public/assets/`.
- Do not add unused demo components or playground files unless explicitly requested.
- Do not scatter one-off CSS files under runtime asset folders and assume the app consumes them.

---

## 🖼️ Asset and Content Rules

### ✅ Runtime Assets

- `public/` is for requestable runtime files only:
  - images
  - logos
  - audio
  - maps
  - static JSON
- Use `public/assets/` for site-served assets.
- Use `next/image` for raster images shown in the app unless there is a concrete reason not to.

### ✅ Source Assets

- Keep source UI code under `src/`.
- SVGs that need props, state, or composition belong under `src/components/`, `src/icons/`, or another source folder.
- `scripts/sounds/` is allowed as a developer-tool fallback for terminal notifications; it is not the main app asset surface.

---

## 🔒 Security and Operational Tooling

### ✅ Security Rules

- Never expose secrets to client components.
- Only `NEXT_PUBLIC_*` variables may be consumed by browser code, and they are public at build time.
- Validate and sanitize all external input.
- Keep privileged operations on the server side.
- Be explicit about third-party script usage and remote asset loading.

### ✅ Pentest Tooling

- Operator entrypoint: `./scripts/run_pentest_tools.sh`
- Tool payload root: `tools/penetration/`
- Reports target: `reports/`

If penetration tooling is changed, keep paths, docs, and output locations aligned.

---

## 🧪 Verification Gate

### ✅ Before Finalizing Work

- Run `npm run lint` for code-quality validation.
- Run `npm run build` for production integrity.
- Run `npm run verify` when repository verification rules are relevant.
- Update docs when structure, workflow, or public behavior changes.
- Mention anything you could not verify.

### 🚫 Avoid These Patterns

- `use client` everywhere
- Fetching your own `/api/*` routes from Server Components
- App styling hidden in runtime asset folders
- Unbounded client-side state for data that belongs on the server
- Silent accessibility regressions
- Large client bundles created by convenience imports

---

## 👍 Usage Notes

### ✅ For Copilot

1. Read this file before editing code or docs.
2. Read `Z00Z_WEB_DESIGN_FOUNDATION.md` before changing routing, styling, layout architecture, assets, or performance-sensitive code.
3. Search for existing local patterns before introducing new structure.
4. Prefer small, focused edits over speculative rewrites.
5. Verify outcomes instead of assuming them.

### 🔔 For Users

- Reference this file with `use .github/copilot-instructions.md;`
- Use `@MUST` anchors for hard rules.
- Treat `Z00Z_WEB_DESIGN_FOUNDATION.md` as the architecture source of truth for website work.

---

## 🔑 Canonical References

- `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md`
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

---

**Maintainers:** Z00Z Website Team  
**License:** Internal Use Only

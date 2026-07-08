---
name: z00z-design-foundation-compliance
description: 'Z00Z website design foundation compliance audit for Next.js, Tailwind, routing, assets, and repo workflows. Use when reviewing code before a commit/PR, checking route/component structure, validating src/public boundaries, Server/Client Component discipline, Tailwind token usage, accessibility, security, and pentest/report path alignment. Returns a severity-classified violation report with concrete fix suggestions.'
argument-hint: 'path/to/file or directory or "all" for website-wide scan'
---

# Z00Z Web Design Foundation Compliance Audit

## When to Use

- The user wants a repo-specific compliance audit before a commit or PR.
- A route, component, asset tree, script, or config change must be checked against the website design foundation.
- The request is about `src/` vs `public/` boundaries, App Router structure, Tailwind token ownership, accessibility, security, or pentest path compliance.
- The output should be a severity-ranked report with concrete fix guidance.

## Mission

Act as a Z00Z website architecture enforcer. Audit Next.js App Router source, Tailwind styling,
runtime assets, docs, and project scripts against the mandatory rules in
`.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md`, `.github/copilot-instructions.md`, and `AGENTS.md`,
and report every real violation with severity, location, and an actionable fix.

Be precise. Report only real violations — not style preferences unrelated to the Design Foundation.
Lead with the highest-severity findings. Do not bury blockers at the end.

**Reference files (load if needed):**
- [`.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md`](../../requirements/Z00Z_WEB_DESIGN_FOUNDATION.md)
- [`copilot-instructions.md`](../../copilot-instructions.md)
- [`AGENTS.md`](../../../AGENTS.md)
- [`.github/instructions/nextjs.instructions.md`](../../instructions/nextjs.instructions.md)
- [`.github/instructions/nextjs-tailwind.instructions.md`](../../instructions/nextjs-tailwind.instructions.md)
- [`package.json`](../../../package.json)
- [`src/app/globals.css`](../../../src/app/globals.css)
- [`scripts/verify.sh`](../../../scripts/verify.sh)

---

## Severity Taxonomy

| Level | Label | Definition |
|-------|-------|------------|
| V0 | BLOCKER | Violates a hard repo boundary or security rule — must fix before merge |
| V1 | HIGH | Breaks mandatory architecture, runtime safety, or canonical tooling ownership |
| V2 | MEDIUM | Clear maintainability, accessibility, naming, or design-system deviation |
| V3 | LOW | Documentation, metadata, verification, or non-blocking quality gap |
| V4 | INFO | Advisory, migration note, or pattern inconsistency with no hard rule backing |

Always lead with V0 and V1 findings.

---

## Compliance Checklist

### C1 · CANONICAL OWNERSHIP AND DIRECTORY BOUNDARIES (V0/V1)

Scan the target scope for violations of the repository's canonical locations:

| Forbidden pattern | Must replace with | Severity |
|-------------------|-------------------|----------|
| React/TypeScript source under `public/` (`*.tsx`, `*.ts`, `*.jsx`, `*.js`) and treated as app code | Move to `src/` | V0 |
| Route or layout source created outside `src/app/` | Move route source into `src/app/` | V1 |
| App styling imported from `public/assets/styles/` | Move CSS into `src/app/` or `src/**` and import from source | V0 |
| App source importing from `reports/`, `.next/`, or generated machine output | Move data dependency to canonical source location | V1 |
| TSX/SVG component logic under `public/assets/svg/` and used by the app | Move component to `src/components/` or `src/icons/` | V0 |
| Application logic placed under `scripts/` or `tools/` instead of `src/` | Move logic to `src/` and keep scripts/tooling as operators only | V1 |

**Repo-local nuance:** `public/assets/svg/*.tsx` and `public/assets/styles/*` may exist as legacy or stub material.
If they are imported by app source or presented as the active UI system, flag them. If they are isolated and unused,
mark as V4 migration debt, not a blocker.

### C2 · APP ROUTER STRUCTURE AND ROUTE OWNERSHIP (V1/V2)

- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, and `not-found.tsx` should be used intentionally under `src/app/`.
- A new route added under root `app/` instead of `src/app/` = V1.
- Route-adjacent private folders should use `_` prefix when they must not become routes = V2.
- Shared UI that is reused across routes should not stay buried in one route folder = V2.

### C3 · SERVER AND CLIENT COMPONENT DISCIPLINE (V0/V1/V2)

Look for violations of the Server-by-default model:

- `'use client'` added at route level or broad layout level without a real hook/browser need = V2.
- Browser APIs, `useState`, `useEffect`, or event handlers inside a Server Component = V1.
- `next/dynamic(..., { ssr: false })` used in a Server Component = V1.
- Secrets, auth decisions, or privileged logic pushed into a Client Component = V0.
- Server parent plus minimal Client child is the preferred composition. A wide client boundary for mostly static UI = V2.

### C4 · DATA FETCHING, MUTATIONS, AND REQUEST-BOUND INPUTS (V1/V2/V3)

- Server Components fetching their own `/api/*` routes instead of calling shared modules directly = V1.
- Route Handlers or Server Actions accepting external input without clear validation/sanitization = V1.
- Request-bound APIs such as `cookies()`, `headers()`, or `draftMode()` used casually in shared layouts or surfaces = V2.
- Mutation boundaries returning ad-hoc, inconsistent shapes instead of typed predictable results = V3.
- Missing or unclear revalidation intent on data-sensitive features = V3.

### C5 · TAILWIND TOKENS, GLOBAL CSS, AND STYLE OWNERSHIP (V0/V1/V2)

- `src/app/globals.css` should remain the token owner for app-wide CSS variables and Tailwind v4 `@theme`.
- App UI styles stored in `public/assets/styles/` and consumed as the active styling system = V0.
- Repeated hard-coded colors, spacing, or font values across many components when a stable token should exist = V2.
- Route-specific concerns implemented through broad global selectors = V2.
- New `tailwind.config.*` added without a concrete repository need = V2.
- Abandoning the existing CSS-first Tailwind v4 setup without justification = V1.

### C6 · ASSET STRATEGY (V1/V2/V3)

- Runtime assets belong in `public/`; source assets with props, composition, or logic belong in `src/`.
- Local raster assets rendered in the app should usually use `next/image` = V2.
- SVGs that need props, state, or composition must not stay in `public/` as executable source = V1.
- `scripts/sounds/` is allowed as a developer fallback for terminal notifications. Do not flag it as the main app asset surface unless app code depends on it directly.
- Runtime asset filenames with spaces or inconsistent casing = V3.

### C7 · ACCESSIBILITY AND SEMANTICS (V1/V2)

- Clickable `div`/`span` without equivalent keyboard semantics = V1.
- Placeholder text used as the only label for a form control = V1.
- Missing meaningful `alt` text for informative images = V2.
- Focus-visible states removed or hidden for aesthetics = V1.
- Color-only status communication, broken heading order, or missing landmark structure = V2.

### C8 · METADATA, SEO, AND PUBLIC PAGE QUALITY (V2/V3/V4)

- Public-facing routes should define meaningful metadata intentionally.
- Placeholder scaffold metadata such as `"Create Next App"` or `"Generated by create next app"` on real pages = V3.
- Missing `title`/`description` for a production-facing route = V3.
- `generateMetadata` used when static metadata would do = V4.
- Missing canonical/social sharing fields on important public landing surfaces = V4.

### C9 · SECURITY, ENVIRONMENT, AND TRUST BOUNDARIES (V0/V1/V2)

| Pattern | Severity |
|---------|----------|
| Non-`NEXT_PUBLIC_*` environment variables read inside a Client Component | V0 |
| Secret, token, or privileged server value exposed to browser code | V0 |
| `dangerouslySetInnerHTML` or rich-content rendering without clear sanitization | V1 |
| Authorization handled only on the client | V1 |
| Unvalidated third-party script or remote asset injection | V2 |

### C10 · PERFORMANCE AND DELIVERY (V1/V2/V3)

- Large client-only libraries pulled into top-level route boundaries without isolation = V2.
- Missing loading state for clearly async route segments = V3.
- Avoidable client fetching for mostly static content = V2.
- Failure to use `next/font` or `next/image` where repository conventions clearly expect them = V3.
- Build-breaking or lint-breaking changes introduced without follow-up verification = V1.

### C11 · TOOLING, PENTEST, AND REPORT PATH COMPLIANCE (V1/V2)

- Human or agent pentest entrypoint must remain `./scripts/run_pentest_tools.sh` = V1 if replaced or bypassed.
- Pentest payload root must remain `tools/penetration/` = V1 if scattered elsewhere without migration.
- Generated outputs should land under `reports/` = V1 if tooling writes active artifacts somewhere else by default.
- Docs, scripts, and packaging helpers that disagree on pentest paths = V2.

### C12 · NAMING, DOCS, AND VERIFY GATE (V2/V3)

- Route folders: `kebab-case` = V2 if violated.
- React components: `PascalCase`; hooks/utilities: `camelCase`; environment variables: `UPPER_SNAKE_CASE` = V2 if violated.
- README, scripts docs, and instructions should reflect actual local commands and paths = V3.
- If a change affects verification or public workflow and docs stay stale, report it = V3.

### C13 · ENGLISH-ONLY REPOSITORY CONTENT (V2)

All identifiers, comments, doc strings, error messages, and string literals that appear in
source code MUST be in English. Non-English content = V2.

---

## Execution Workflow

### Step 1 — Scope Resolution

Determine what to audit:
- If the argument is a file path → audit that file only.
- If the argument is a directory path → audit relevant files under that directory.
- If the argument is `src`, `public`, `scripts`, `tools`, or `config` → recurse that subtree.
- If the argument is `"all"` or omitted → audit:
  - `src/`
  - `public/`
  - `scripts/`
  - `tools/penetration/`
  - `package.json`
  - `next.config.ts`
  - `postcss.config.mjs`
  - `eslint.config.mjs`
  - `README.md`
  - `AGENTS.md`

Exclude generated or non-authoritative trees unless the user explicitly targets them:
- `.next/`
- `node_modules/`
- `reports/`
- `.temp/`
- `.codex/`
- `.github/gsd-local-patches/`
- `.github/deep-wiki-local-overrides/`

Read the target files. For large scopes, use fast search first (`rg`) before doing deep reads.

### Step 2 — Systematic Scan

Run through checklist items C1–C13 in order. For each finding, record:

```
[LEVEL] [C#] <file>:<line>
Pattern: <the offending code or identifier>
Rule: <which rule was violated>
Fix: <exact replacement or rename>
```

Useful search patterns for this repo:

```bash
rg -n --glob '!node_modules/**' --glob '!.next/**' --glob '!reports/**' '\.(tsx|ts|jsx|js)$' public
rg -n --glob '!node_modules/**' --glob '!.next/**' 'public/assets/styles|assets/styles' src
rg -n --glob '!node_modules/**' --glob '!.next/**' 'next/dynamic\\(' src
rg -n --glob '!node_modules/**' --glob '!.next/**' "ssr:\\s*false" src
rg -n --glob '!node_modules/**' --glob '!.next/**' 'fetch\\((\"|\\x27|`)/?api/' src
rg -n --glob '!node_modules/**' --glob '!.next/**' 'dangerouslySetInnerHTML' src
rg -n --glob '!node_modules/**' --glob '!.next/**' 'process\\.env\\.' src
rg -n --glob '!node_modules/**' --glob '!.next/**' '^\"use client\"|^\\x27use client\\x27' src
```

### Step 3 — Report

Produce the **Compliance Report** in this format:

```markdown
# Z00Z Web Design Foundation: Compliance Report
**Scope:** <files or surfaces audited>
**Date:** YYYY-MM-DD
**Total findings:** N (V0: n, V1: n, V2: n, V3: n, V4: n)

---

## BLOCKER (V0) — N findings
<findings list>

## HIGH (V1) — N findings
<findings list>

## MEDIUM (V2) — N findings
<findings list>

## LOW (V3) — N findings
<findings list>

## INFO (V4) — N findings
<findings list>

---
## Summary
<1–3 sentences on the most critical concerns and recommended first action>
```

### Step 4 — Auto-Fix Offer

After producing the report, ask the user:

> "Should I auto-fix V0/V1 violations?  
> Or specify a severity range to fix (e.g. "V0–V2")."

Apply fixes only after explicit confirmation unless the invocation explicitly requested `--fix`.
Fix one file at a time. Re-run the relevant checklist items after each fix to verify resolution.

### Step 5 — Verify

After any auto-fix, run verify commands scoped to the audited website surface:

```bash
npm run lint
npm run build
npm run verify

# For path-contract or pentest-tooling changes
python3 -m unittest discover scripts/penetration/tests
```

Report results. If new violations are found, loop back to Step 2 for the affected files.

---

## Quick-Reference: Forbidden → Correct

| Forbidden | Correct |
|-----------|---------|
| `public/assets/svg/Icon.tsx` used as a React component | `src/components/icons/Icon.tsx` |
| `import "/public/assets/styles/app.css"` | Move styles into `src/app/globals.css` or `src/**` and import from source |
| `app/page.tsx` in this repo | `src/app/page.tsx` |
| `fetch("/api/foo")` from a Server Component | Import shared module from `src/lib/**` directly |
| `process.env.SECRET_KEY` inside a Client Component | Keep secret on the server; expose only safe `NEXT_PUBLIC_*` values |
| `next/dynamic(() => import(...), { ssr: false })` in a Server Component | Move client-only logic into a dedicated Client Component |
| `<img src="/assets/hero.png" ...>` for local raster UI | `<Image src="/assets/hero.png" ... />` |
| `<div onClick={...}>` as a button | Use `<button>` or `<a>` with keyboard support |
| App source imports from `reports/` or `.next/` | Move dependency to canonical source data or runtime fetch layer |

---

## Do Not Flag

- Static runtime assets under `public/` such as images, fonts, audio, JSON, or logos.
- `scripts/sounds/` as the developer-only tone fallback used by `scripts/play_tone.sh`.
- Placeholder or stub runtime assets under `public/` that are not imported as app source. Mark them as V4 migration debt only if they create confusion.
- `NEXT_PUBLIC_*` variables used in Client Components.
- SVG files served as plain runtime assets from `public/` when they are not treated as React components.
- Route-local Client Components that clearly need hooks, browser APIs, or event handlers.

## Example Invocations

### Single file
```
/z00z-design-foundation-compliance src/app/page.tsx
```
→ Audits one file. Fast. Use before committing a changed route or component.

### Directory scope
```
/z00z-design-foundation-compliance src/app
```
→ Audits the active route tree and nearby UI boundaries.

### Asset boundary check
```
/z00z-design-foundation-compliance public
```
→ Good when you moved assets and want to ensure `public/` is still runtime-only.

### Workspace-wide
```
/z00z-design-foundation-compliance all
```
→ Full website scan across app source, runtime assets, scripts, and docs. Good pre-release or pre-PR gate.

### Specific checklist only
```
/z00z-design-foundation-compliance src --only C1
/z00z-design-foundation-compliance src --only C3,C5
```
→ Useful when you only care about canonical ownership, or only want component/style boundary checks.

### Auto-fix V0/V1 immediately
```
/z00z-design-foundation-compliance src/app/layout.tsx --fix V0-V1
```
→ Runs audit, then auto-applies fixes for BLOCKER and HIGH findings without asking for confirmation.

### Route launch readiness
```
/z00z-design-foundation-compliance src/app/landing
```
→ Use when a new route has just been scaffolded — catches bad metadata, accidental client overreach,
  styling drift, and invalid asset placement before the page grows.

### Pre-commit quick check (last edited files)
```
/z00z-design-foundation-compliance src/app/layout.tsx src/app/page.tsx public/assets/svg/FileNotFound.tsx
```
→ Accepts a space-separated list of files. Audits only what changed in this commit.

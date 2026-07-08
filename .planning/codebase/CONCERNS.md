# Codebase Concerns

**Analysis Date:** 2026-07-08

## Tech Debt

**Bootstrap branding and product content:**
- Issue: The committed app still uses create-next-app starter metadata, copy, and illustration assets instead of Z00Z-specific content
- Files: `src/app/layout.tsx`, `src/app/page.tsx`, `README.md`, `public/next.svg`, `public/vercel.svg`
- Why: The repository was just bootstrapped and has not passed through the first product-design phase
- Impact: Project planning can drift because the visible app says nothing about the intended Z00Z website
- Fix approach: Replace starter copy, metadata, and assets in the first real product/branding phase

**App code shares the root with a very large tooling bundle:**
- Issue: `.github/` and `.codex/` contain far more files than the runtime app itself
- Files: `.github/`, `.codex/`, `eslint.config.mjs`, `tsconfig.json`
- Why: This repository doubles as both a website codebase and a local GSD/Codex operations workspace
- Impact: Broad globs, search commands, lint passes, and future automation can accidentally target tooling instead of app code
- Fix approach: Keep explicit ignore/scope rules, and consider separating reusable tooling from the website repo if the app grows

## Known Bugs

**README path instructions are stale for `--src-dir`:**
- Symptoms: `README.md` tells contributors to edit `app/page.tsx`, but the actual route file is `src/app/page.tsx`
- Trigger: Following the bootstrap readme literally
- Workaround: Edit `src/app/page.tsx` instead
- Root cause: The upstream create-next-app readme was not updated after generating the project with `--src-dir`

**Manifest name drift between lockfile and package manifest:**
- Symptoms: `package.json` uses `z00z-website`, while the root package entry in `package-lock.json` still says `nextjs-app-init`
- Trigger: Tooling or audits that compare manifest metadata
- Workaround: Treat `package.json` as the authoritative package name for now
- Root cause: The package name changed after bootstrap without regenerating the lockfile metadata

## Security Considerations

**Environment handling is not formalized yet:**
- Risk: Future integrations could add secrets ad hoc, or expose values accidentally through `NEXT_PUBLIC_*`
- Current mitigation: `.gitignore` excludes `.env*` and `.vercel`
- Recommendations: Add `.env.example` and centralized env validation before the first external integration lands

**Operational directories are easy to touch by mistake:**
- Risk: Scripts or agents aimed at app code may modify `.github/` or `.codex/` unintentionally
- Current mitigation: `eslint.config.mjs` and `tsconfig.json` exclude these directories from app-oriented checks
- Recommendations: Keep future CI and maintenance commands path-scoped to `src/`, `public/`, and root config files unless the task explicitly targets tooling

## Performance Bottlenecks

**No measured runtime bottlenecks yet:**
- Problem: The committed application is currently a single static route, so meaningful performance hotspots are not established
- Measurement: `next build` succeeded locally with the current minimal route
- Cause: Feature surface is still at bootstrap scale
- Improvement path: Reassess once real content, media, and data fetching are introduced

## Fragile Areas

**Root route is one inline page module:**
- Why fragile: `src/app/page.tsx` currently owns all visible page structure, copy, CTAs, and asset references
- Common failures: Merge conflicts, large class-string churn, and hard-to-reuse sections once the landing page grows
- Safe modification: Extract reusable sections/components as soon as the first real design iteration lands
- Test coverage: None

**No active CI definitions remain in `.github/workflows/`:**
- Why fragile: There is no committed automated verification pipeline after the workflow directory was cleared during this session
- Common failures: Regressions in lint/build/config can land unnoticed until someone runs checks manually
- Safe modification: Add app-specific GitHub Actions or another CI path before introducing nontrivial behavior
- Test coverage: No automated app tests exist

## Scaling Limits

**Feature-surface scaling is still pre-foundation:**
- Current capacity: One static route, shared global CSS, and local SVG assets
- Limit: New product features will first require introducing shared directories such as `src/components/`, `src/lib/`, and a test harness
- Symptoms at limit: Repeated UI patterns stay inline, logic accumulates in route files, and verification remains manual
- Scaling path: Establish component, utility, and testing conventions in the earliest implementation phases

## Dependencies at Risk

**Node.js runtime version is unpinned:**
- Risk: The repository has no `engines` field or `.nvmrc`, so contributors may use incompatible Node versions
- Impact: Local dev/build behavior can drift across machines and future CI
- Migration plan: Add `engines.node` to `package.json` and optionally commit `.nvmrc` once deployment/runtime policy is chosen

## Missing Critical Features

**No project-specific application content yet:**
- Problem: The UI is still a generic Next.js starter instead of a Z00Z website
- Current workaround: Treat the current page as a bootstrap shell only
- Blocks: Meaningful product review, UX review, and content planning
- Implementation complexity: Low to Medium

**No automated verification stack for app behavior:**
- Problem: The repo has lint/build scripts, but no test runner, coverage, or active CI workflows
- Current workaround: Run `npm run lint` and `npm run build` manually
- Blocks: Safe refactoring and regression detection once features begin landing
- Implementation complexity: Medium

## Test Coverage Gaps

**Entire App Router surface is untested:**
- What's not tested: `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css` behavior
- Risk: UI regressions, metadata mistakes, and future route breakage can ship unnoticed
- Priority: High
- Difficulty to test: Low to Medium once a test stack is chosen

**Build/config boundary is only manually validated:**
- What's not tested: The interaction of `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and future environment handling
- Risk: Tooling drift may only be discovered during manual setup or deployment
- Priority: Medium
- Difficulty to test: Medium

---
*Concerns audit: 2026-07-08*
*Update as issues are fixed or new ones discovered*

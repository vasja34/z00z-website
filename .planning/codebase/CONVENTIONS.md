# Coding Conventions

**Analysis Date:** 2026-07-08

## Naming Patterns

**Files:**
- Next.js App Router reserved filenames are used in `src/app/` (`layout.tsx`, `page.tsx`, `globals.css`)
- Root config files follow tool-default names (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`)
- Static assets use lowercase names in `public/` (`next.svg`, `vercel.svg`, `window.svg`)

**Functions:**
- PascalCase for React components (`Home`, `RootLayout`)
- No async naming convention is established yet because there are no async functions in app source
- Named framework exports use descriptive nouns (`metadata`)

**Variables:**
- camelCase for local variables (`geistSans`, `geistMono`)
- CSS custom properties use kebab-case (`--background`, `--font-geist-sans`)
- No underscore prefixes or pseudo-private markers observed

**Types:**
- Type-only imports are preferred where applicable (`import type { Metadata } from "next"`)
- Inline prop typing is used for simple structures in `src/app/layout.tsx`
- No custom interfaces, type aliases, or enums are committed yet

## Code Style

**Formatting:**
- No Prettier config is committed
- Current code follows create-next-app defaults: double quotes, semicolons, trailing commas, and multi-line JSX props
- CSS uses one declaration per line with simple block formatting

**Linting:**
- ESLint flat config lives in `eslint.config.mjs`
- Rules extend `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Workspace-only directories are explicitly ignored: `.codex/`, `.github/`, `.planning/`, `.temp/`
- Run: `npm run lint`

## Import Organization

**Order:**
1. Framework/external imports (`next/image`, `next/font/google`)
2. Local imports (`./globals.css`)
3. Type-only imports using `import type`

**Grouping:**
- Small files keep imports compact
- Blank lines are used when switching from external modules to local files
- No custom import-sorting plugin is configured

**Path Aliases:**
- `@/*` maps to `src/*` in `tsconfig.json`
- Current route files still use direct relative imports because the tree is shallow

## Error Handling

**Patterns:**
- No custom runtime error-handling layer exists yet
- The current code relies on framework defaults plus compile-time checks
- Introducing server logic should add explicit boundary handling rather than continuing this implicit pattern

**Error Types:**
- No custom error classes are committed
- No Result-style return objects are used
- No application logging-before-throw pattern is established

## Logging

**Framework:**
- None - No logger abstraction or committed `console` usage in app code

**Patterns:**
- Logging conventions are not established yet
- When server-side behavior appears, add logging at route or service boundaries instead of inside presentation components

## Comments

**When to Comment:**
- App source currently uses almost no comments
- Existing comments appear in config files to explain default ignores or placeholder config areas
- Preserve the current bias toward self-explanatory code and short rationale comments only when needed

**JSDoc/TSDoc:**
- Not used in the current application files

**TODO Comments:**
- No repository-wide TODO format is established in app code

## Function Design

**Size:**
- Current components are small and single-purpose
- Inline JSX is acceptable while the route count is tiny, but larger sections should be extracted once reuse appears

**Parameters:**
- Typed props objects are used for component inputs (`children` in `RootLayout`)
- Destructuring in parameter lists is already in use

**Return Values:**
- Components return JSX directly
- There is no pattern yet for service-layer return values because no services are committed

## Module Design

**Exports:**
- Default exports are used for route components and config objects
- Named exports are used for framework hooks/metadata that Next.js consumes

**Barrel Files:**
- No `index.ts` barrel files exist yet
- New shared modules should avoid introducing barrels until the shared surface is real

---
*Convention analysis: 2026-07-08*
*Update when patterns change*

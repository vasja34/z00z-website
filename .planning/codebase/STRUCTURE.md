# Codebase Structure

**Analysis Date:** 2026-07-08

## Directory Layout

```text
z00z-website/
├── .codex/              # Local Codex runtime assets and mirrored GSD resources
├── .github/             # Repository instructions, skills, scripts, and shared automation assets
│   ├── agents/          # Agent definitions and customization payloads
│   ├── gsd-core/        # GSD runtime resources vendored into the repo
│   ├── instructions/    # Engineering instruction documents
│   ├── scripts/         # Helper scripts for repo automation
│   ├── skills/          # Skill library, including `doublecheck`
│   └── workflows/       # GitHub Actions directory (currently empty)
├── .planning/           # Generated planning and codebase-map artifacts
│   └── codebase/        # Mapping documents created by this workflow
├── public/              # Static assets served directly by Next.js
├── src/                 # Application source
│   └── app/             # Next.js App Router files
├── README.md            # Upstream bootstrap readme
├── eslint.config.mjs    # Flat ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Scripts and dependency manifest
├── postcss.config.mjs   # PostCSS/Tailwind configuration
└── tsconfig.json        # TypeScript compiler configuration
```

## Directory Purposes

**`.codex/`:**
- Purpose: Local Codex runtime, commands, prompts, and GSD payloads used while working in this repository
- Contains: `AGENTS.md`, `agents/`, `commands/`, `gsd-core/`, `skills/`
- Key files: `.codex/AGENTS.md`
- Subdirectories: Runtime support collections rather than application code

**`.github/`:**
- Purpose: Repository-level instruction and automation bundle
- Contains: `agents/`, `instructions/`, `prompts/`, `requirements/`, `scripts/`, `skills/`
- Key files: `.github/copilot-instructions.md`
- Subdirectories: Multiple mirrored GSD resources plus local overrides

**`.planning/`:**
- Purpose: Generated planning state for GSD workflows
- Contains: `codebase/` right now
- Key files: `.planning/codebase/*.md`
- Subdirectories: Expected to grow when `gsd-new-project` creates additional planning artifacts

**`public/`:**
- Purpose: Static assets served by Next.js without route code
- Contains: SVG illustrations and logos
- Key files: `public/next.svg`, `public/vercel.svg`
- Subdirectories: None currently

**`src/app/`:**
- Purpose: App Router entrypoints and global styling
- Contains: `layout.tsx`, `page.tsx`, `globals.css`, `favicon.ico`
- Key files: `src/app/layout.tsx`, `src/app/page.tsx`
- Subdirectories: None currently

## Key File Locations

**Entry Points:**
- `package.json` - Defines the `dev`, `build`, `start`, and `lint` entry commands
- `src/app/layout.tsx` - Root App Router layout
- `src/app/page.tsx` - Root route implementation

**Configuration:**
- `next.config.ts` - Next.js config surface
- `tsconfig.json` - TypeScript settings and path alias
- `eslint.config.mjs` - Lint rules plus workspace ignores
- `postcss.config.mjs` - Tailwind/PostCSS plugin config
- `.gitignore` - Ignore rules for env files, build output, and local tooling

**Core Logic:**
- `src/app/page.tsx` - Current user-facing page content
- `src/app/layout.tsx` - Global layout and metadata
- `src/app/globals.css` - Shared theme variables and base styling

**Testing:**
- No `tests/`, `__tests__/`, `*.test.*`, or E2E directories are committed yet

**Documentation:**
- `README.md` - Bootstrap usage instructions
- `.github/copilot-instructions.md` - Repository operating rules
- `.codex/AGENTS.md` - Local agent guidance file

## Naming Conventions

**Files:**
- Framework-reserved App Router names inside `src/app/` (`layout.tsx`, `page.tsx`, `globals.css`)
- Root config files use tool-default names (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`)
- Static assets use lowercase filenames in `public/`

**Directories:**
- `src/app/<segment>/` for routes and nested layouts
- Dot-prefixed top-level directories for tooling and planning state (`.github/`, `.codex/`, `.planning/`)
- Skill and agent collections grouped by concern under `.github/skills/` and `.github/agents/`

**Special Patterns:**
- `index` barrel files are not used yet
- Hidden operational content lives outside `src/`, so broad globs should be scoped carefully

## Where to Add New Code

**New Feature:**
- Primary code: `src/app/<route-segment>/` for route-specific UI and nested route files
- Tests: No established pattern yet; colocated `*.test.ts(x)` beside source is the least disruptive first addition
- Config if needed: Root config files only when the change affects the entire app

**New Component/Module:**
- Implementation: Create `src/components/` for reusable UI or `src/lib/` for shared helpers once duplication appears
- Types: Keep close to the module at first; introduce `src/types/` only when shared types become common
- Tests: Place beside the new module until a wider convention is established

**New Route/Command:**
- Next route: `src/app/<segment>/page.tsx`, with optional nested `layout.tsx`
- Repository automation: `.github/scripts/` or `.github/skills/` depending whether the change is operational rather than user-facing

**Utilities:**
- Shared helpers: recommended future home is `src/lib/`
- Type definitions: colocate initially, extract later if shared broadly

## Special Directories

**`.codex/`:**
- Purpose: Local runtime cache/config mirror for Codex and GSD
- Source: Generated or installed by local tooling
- Committed: No - `.codex/` is ignored by `.gitignore`

**`.planning/`:**
- Purpose: Generated planning documents for this workspace
- Source: Created by GSD workflows
- Committed: Not ignored currently; intended to be committable when workflow docs are tracked

**`.github/workflows/`:**
- Purpose: Standard location for GitHub Actions workflows
- Source: Human-maintained CI/CD definitions
- Committed: Yes as a directory path, but it currently contains no workflow files

---
*Structure analysis: 2026-07-08*
*Update when directory structure changes*

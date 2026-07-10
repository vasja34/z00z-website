# Phase 1: 001-Docs - Context

**Gathered:** 2026-07-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Plan and execute the rewrite of all current `content/docs/**/*.md` pages so the docs layer becomes a readable synthesis of the Z00Z whitepaper corpus. This phase does not rewrite the whitepapers themselves and does not redesign the docs route architecture; it focuses on page-by-page content transformation, evidence mapping, and reader-first structure.

</domain>

<decisions>
## Implementation Decisions

### Source of truth
- **D-01:** `content/whitepapers` is the main corpus and the canonical technical source for docs rewrites.
- **D-02:** `docs/z00z_website-design.html` defines what each docs page should explain and how the docs IA is shaped.
- **D-03:** Existing `content/docs/**/*.md` content is placeholder/stub material and may be rewritten from scratch.

### Writing standard
- **D-04:** Each docs page should target roughly 5-7 minutes of reading time.
- **D-05:** Docs should be easier to enter than the whitepapers: more readable, more visual, more structured, and more explanatory for newcomers.
- **D-06:** Docs must stay technically honest, avoid overclaiming implementation status, and avoid replacing deep technical detail that belongs in whitepapers.

### Evidence and linking
- **D-07:** Every docs page must include concrete links back to relevant whitepaper sections, not just generic corpus links.
- **D-08:** The docs layer should explain the concept clearly, then point readers to deeper sections for full detail and verification.

### Rendering and page patterns
- **D-09:** Use installed `mdit-plugins` and `markdown-it` capabilities where they improve comprehension, such as callouts, containers, tabs, foldables, footnotes, comparison blocks, and diagrams.
- **D-10:** Progressive disclosure is encouraged; some sections may be collapsed by default when that improves scanability without hiding essential meaning.
- **D-11:** Visual structure must help understanding, not become decorative noise or an obstacle to maintenance.

### Completion gate
- **D-12:** Before phase closeout, run doublecheck on the produced docs against repository sources and whitepapers.
- **D-13:** Run `/.github/prompts/gsd-review-tasks-execution.prompt.md` at least 3 times in YOLO mode during docs execution.
- **D-14:** Continue review/fix loops until 2 consecutive review runs report no significant issues.

### the agent's Discretion
- Page-by-page section naming and composition details
- Which plugin-enhanced patterns fit each page best
- How to group page execution into plan slices while preserving full coverage

</decisions>

<specifics>
## Specific Ideas

- Use foldable sections where a page benefits from a short default reading path and optional deeper detail.
- Prefer visuals that work in Markdown first: structured callouts, compact comparison tables, diagrams, evidence blocks, and explicit "read next" paths.
- Treat docs as the smooth onboarding layer for readers who need to understand Z00Z before diving into the full papers.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Corpus and page intent
- `content/whitepapers/` — Main source corpus for all concept, architecture, and terminology synthesis.
- `docs/z00z_website-design.html` — Defines the docs IA and what each page should cover.
- `.planning/phases/z00z_website-design.html` — Planning copy of the same docs design scaffold used elsewhere in repo planning.

### Current docs source
- `content/docs/` — Current docs tree to audit and rewrite page-by-page.
- `content/docs/**/_meta.yaml` — Section ordering and sidebar grouping that affect docs coverage sequencing.

### Renderer and markdown capabilities
- `src/lib/content/markdown.ts` — Current Markdown parser setup and enabled plugin surface.
- `src/lib/content/html.ts` — HTML rendering constraints relevant to enhanced docs patterns.
- `config/content-pipeline.yaml` — Content-rendering policy and parser-related config.

### Phase and review constraints
- `.github/prompts/gsd-review-tasks-execution.prompt.md` — Mandatory execution review loop prompt.
- `.planning/ROADMAP.md` — Active phase goal, requirements, success criteria, and plan stubs.
- `.planning/REQUIREMENTS.md` — Checkable docs requirements for this phase.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/lib/content/markdown.ts`: already contains the Markdown parser wiring that should inform which enhanced page patterns are realistic.
- `src/lib/content/html.ts`: useful when deciding which docs patterns should stay Markdown-native versus trusted HTML.
- `src/components/docs/DocsShell.tsx`: existing docs shell provides the runtime surface the rewritten pages will live inside.

### Established Patterns
- The repo already renders file-backed docs from `content/docs/`, so the phase should preserve that authoring model.
- `_meta.yaml` files already shape docs structure; planning should respect the existing section tree instead of inventing a parallel IA.

### Integration Points
- Rewritten pages feed the existing docs route under `src/app/docs/[[...slug]]/page.tsx`.
- Search and navigation quality will depend on consistent headings, summaries, and frontmatter in rewritten docs pages.

</code_context>

<deferred>
## Deferred Ideas

- Automated reading-time linting for docs pages.
- A reusable docs authoring standard document for future content contributors.
- Broader route or shell refactors unrelated to content quality.

</deferred>

---

*Phase: 001-Docs*
*Context gathered: 2026-07-09*

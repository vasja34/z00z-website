# Phase 1: 001-Docs - Research

**Date:** 2026-07-09
**Status:** Ready for planning

## Objective

Determine the best planning approach for rewriting the full `content/docs/**/*.md`
tree from the Z00Z whitepaper corpus while preserving source accuracy, good
reader flow, and compatibility with the existing docs renderer.

## Current Repo Facts

### Corpus size

- Docs markdown pages: **89**
- Whitepaper markdown files: **17**
- Docs section `_meta.yaml` files: **10**

### Docs section distribution

- `developers`: 18 pages
- `protocol`: 14 pages
- `network`: 11 pages
- `security`: 9 pages
- `research`: 8 pages
- `legal`: 7 pages
- `support`: 7 pages
- `use-cases`: 7 pages
- `learn`: 6 pages
- root docs index: 1 page
- `_support`: 1 page

### Current docs page pattern

Representative pages such as:

- `content/docs/learn/what-is-z00z.md`
- `content/docs/protocol/architecture.md`
- `content/docs/developers/get-started.md`
- `content/docs/research/whitepapers.md`

already contain a useful **rewrite brief scaffold**:

- frontmatter (`title`, `description`, `toc`)
- route + maturity note block
- `Page Brief`
- `Reader Lenses`
- `Section Lens`
- `Navigation Links`
- `Evidence and scaffold notes`

This means the phase should **not** invent a new page-brief format. It should
upgrade the stub bodies into real docs while keeping the current scaffold where
it helps execution consistency.

## Renderer Capabilities That Matter

From `src/lib/content/markdown.ts` and `config/content-pipeline.yaml`, the
current renderer already supports these planning-relevant patterns:

- alerts / callouts
- tabs
- collapsible blocks
- Mermaid / UML-style diagram embedding
- definition lists
- figures
- footnotes
- task lists
- containers
- table of contents
- anchors
- attribute helpers
- spoiler blocks
- snippet/include features
- KaTeX

### Planning implication

The docs rewrite should stay **Markdown-first** and use enhanced patterns
selectively:

- **Best fits for concepts**: alerts, tabs, collapsibles, Mermaid, comparison tables, footnotes
- **Best fits for builders**: tabs, task lists, code blocks, callouts, definition lists
- **Best fits for research/legal**: evidence blocks, footnotes, compact tables, foldables

### Renderer risk

`markdown.html` is currently `true`, but this phase should still prefer
plugin-native Markdown patterns over raw HTML because:

- plugin-native content is easier to audit and maintain
- raw HTML increases authoring inconsistency
- user explicitly asked for `mdit-plugins` / `markdown-it` aware docs, not
  HTML-heavy docs

## Canonical Planning Constraints

### Source constraints

- `content/whitepapers/` is the source-of-truth corpus
- `docs/z00z_website-design.html` defines what each page should explain
- existing docs markdown is replaceable placeholder content

### Output constraints

- every docs page should feel like a **5-7 minute read**
- docs explain the core idea clearly without replacing deep whitepaper detail
- every page must link back to **concrete source sections**
- docs must remain honest about maturity and implementation status

### Review constraints

- doublecheck required before closeout
- `/.github/prompts/gsd-review-tasks-execution.prompt.md` must run at least 3
  times in YOLO mode during execution
- review/fix loops continue until 2 consecutive runs report no significant
  issues

## Main Planning Risks

### 1. Source-anchor drift

The hardest failure mode is not writing quality prose; it is losing the exact
whitepaper grounding while compressing long papers into shorter docs pages.

**Planning response:**

- require explicit source mapping for every page
- treat evidence links as first-class deliverables, not optional polish
- keep maturity / non-claim wording in scope for all pages

### 2. Reading-length blowup

There are 89 docs pages and some topics map to multiple dense whitepapers.
Without page-level limits, writers will recreate mini-whitepapers inside docs.

**Planning response:**

- require page briefs with target reading length
- split conceptual pages into thesis + bounded subsections + read-next links
- use foldables for optional depth instead of dumping detail into the primary
  flow

### 3. Over-designed Markdown

The renderer supports many features, but using too many on every page will make
docs inconsistent and hard to maintain.

**Planning response:**

- define a small set of default page patterns
- use advanced patterns only where they clearly improve comprehension
- treat Mermaid, tabs, and collapsibles as selective tools, not defaults

### 4. Maturity and claim hygiene

Many pages describe target architecture, partial implementation, or mixed
maturity surfaces. This is especially risky in `protocol`, `network`, `legal`,
and `security`.

**Planning response:**

- keep maturity / public-claim review inside the execution plan
- explicitly audit live vs target wording during review loops

## Recommended Planning Shape

The phase should not be one giant "rewrite docs" blob. It should split into
deliverable slices that still guarantee full page coverage.

### Recommended plan slices

1. **Inventory and source mapping**
   - audit all 89 docs pages
   - map each page to section intent from the scaffold
   - map each page to primary and secondary whitepaper anchors
   - define page families and reusable page recipes

2. **Conceptual foundation pages**
   - rewrite `learn`, `protocol`, `legal`
   - these pages set category boundaries, maturity language, and system model
   - they should be written before builder and operator pages

3. **Operational and builder pages**
   - rewrite `developers`, `network`, `security`, `support`
   - builder/operator docs depend on the conceptual vocabulary being stable

4. **Research and use-case synthesis**
   - rewrite `research` and `use-cases`
   - these rely on the vocabulary and architecture pages being settled enough
     to reference

5. **Final consistency and review loop**
   - navigation sanity
   - evidence link completeness
   - page-length cleanup
   - plugin-pattern consistency
   - mandatory multi-run review and doublecheck

## Recommended Page Families

### Concept / category pages

Best for:

- `learn/*`
- many `protocol/*`
- some `legal/*`

Recommended structure:

1. one-screen thesis
2. why it matters
3. core model / diagram
4. boundaries / non-claims
5. read next
6. evidence links

### Builder / operator pages

Best for:

- `developers/*`
- `network/*`
- `support/*`

Recommended structure:

1. quick answer
2. where this sits in the workspace or system
3. practical commands / flows / surfaces
4. cautions or maturity notes
5. deeper references

### Research / index pages

Best for:

- `research/*`
- some `security/*`

Recommended structure:

1. what this index covers
2. grouped source map
3. reading order / comparison cues
4. status / maturity / authority notes
5. evidence links

### Use-case pages

Best for:

- `use-cases/*`

Recommended structure:

1. problem frame
2. why Z00Z fits
3. bounded flow
4. trust / privacy / settlement limits
5. related protocol pages
6. source anchors

## Whitepaper Mapping Guidance

High-confidence primary mappings:

- `learn/*` -> `Litepaper`, `Main-Whitepaper`, `Corpus-Terminology-Reference`
- `protocol/*` -> `Main-Whitepaper`, `Linked-Liability`, `Smart-Cash`,
  `Proof-of-Useful-Work`, `Post-Quantum-Migration`, `Privacy-Threat-Model`,
  `Cross-Chain-Integration`, `Tokenomics`, `Legal-Architecture`
- `network/*` -> `Main-Whitepaper`, `OnionNet`, `Proof-of-Useful-Work`,
  `Privacy-Threat-Model`
- `developers/*` -> whitepapers plus live repo surfaces under `src/`, not
  whitepapers alone
- `research/*` -> entire corpus, grouped by authority and role
- `security/*` -> `Privacy-Threat-Model`, `Post-Quantum-Migration`,
  `Linked-Liability`, plus repo security-facing docs where available
- `use-cases/*` -> `UseCases`, `Agentic-Offline-Economy`, `Smart-Cash`,
  `Cross-Chain-Integration`
- `legal/*` -> `Legal-Architecture`, claim-boundary and maturity-aware corpus
  references

## Planning Recommendation

The planner should produce **multiple PLAN.md files**, not one monolith.

Minimum expectation:

- one plan for inventory + source mapping
- at least two plans for section-based rewrites
- one plan for final review / doublecheck / review-loop enforcement

Each plan should include explicit page coverage so no docs page is orphaned.

## Ready for Planning

This phase is ready for planning. The planner should optimize for:

- full page coverage
- evidence-link discipline
- reading-length control
- selective plugin use
- honest maturity language
- mandatory review loops before closeout

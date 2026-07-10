# Phase 2: 002-New-Docs - Context

**Gathered:** 2026-07-10
**Status:** Ready for planning review and execution
**Primary sources:** `002-TODO.md`, `002-RESEARCH.md`, current docs runtime, local repo instructions

<domain>
## Phase Boundary

Plan and execute the second-pass rewrite of the Z00Z public docs corpus so each
public page becomes a stronger reader guide: longer, more explanatory,
evidence-linked, explicit about live-vs-target status, and aligned to the
current docs runtime instead of a parallel content system.

This phase covers:

- all routable public `content/docs/**/*.md` pages named in `002-TODO.md`
- all section `_meta.yaml` order contracts named in `002-TODO.md`
- the one `_support` cleanup item named in `002-TODO.md`
- the existing docs loader/runtime surfaces that must change so section-home
  authored body content, TOC behavior, and difficulty-icon rules match the TODO

This phase does **not**:

- replace the docs route architecture
- add a second docs engine, alternate loader, or parallel metadata layer
- move application code under `public/`
- present target architecture as shipped implementation

</domain>

<decisions>
## Implementation Decisions

### Source and authority model

- **D-01:** `002-TODO.md` is normative for Phase 002. Where older planning files
  are weaker or stale, Phase 002 follows `002-TODO.md`.
- **D-02:** `content/whitepapers/*.md` remains the primary authority surface for
  public docs claims, terminology, architecture, legal boundaries, privacy
  posture, governance wording, and PQ language.
- **D-03:** Local repo anchors are mandatory secondary authority for builder,
  runtime, verification, and docs-runtime claims: `package.json`,
  `scripts/verify.sh`, `src/lib/content/*`, `src/app/docs/[[...slug]]/page.tsx`,
  `src/app/[domain]/[[...slug]]/page.tsx`, `config/*.yaml`, and
  `.github/*` instructions/prompts/skills named in `002-TODO.md`.
- **D-04:** `002-RESEARCH.md` is the planning-side authority for current runtime
  constraints, verification gaps, and grouped execution seams.

### Writing and truthfulness standard

- **D-05:** Every routable public docs page in this phase targets the stricter
  `002-TODO.md` word band: normally 1,400-1,900 words, with 1,200-1,500 words
  only for narrow utility/legal pages where longer prose would reduce clarity.
- **D-06:** Every page must explain why the topic matters to the reader, not
  only define a term.
- **D-07:** Every page must distinguish current repository evidence,
  corpus-backed target architecture, and open research. No plan may collapse
  those states into one tense.
- **D-08:** Every public page must end with `## Evidence and Further Reading`.
- **D-09:** Every public page must include a compact `Read Next` path unless the
  page is a narrow legal utility page whose next step is already obvious from
  section navigation.
- **D-10:** Claim hygiene is mandatory against
  `Legal-Architecture.md`, `Privacy-Threat-Model.md`,
  `Post-Quantum-Migration.md`, and `Corpus-Terminology-Reference.md`.

### Renderer and metadata contract

- **D-11:** Reuse the current docs runtime and content loader; do not create a
  parallel docs rendering path.
- **D-12:** Resolve the current section-home rendering conflict inside the
  existing docs routes so authored section-home body content and TOC can coexist
  with landing cards when required by the TODO.
- **D-13:** Normalize the difficulty icon contract from the old
  `mdi:alpha-*-circle-outline` family to the TODO’s
  `mdi:alphabet-*-box-outline` family in existing loader/runtime surfaces.
- **D-14:** Ordinary public docs pages must own their difficulty icons in
  frontmatter; `_meta.yaml page_icons` must not override public page difficulty
  icons as a second authority layer.
- **D-15:** Use the repository Mermaid skills named by the TODO:
  `mermaid-spectrum` for compact flows and `mermaid-c4` for true C4 views.
  Diagrams must teach authority, object flow, lifecycle, or responsibility.

### Planning and coverage model

- **D-16:** The live `002-TODO.md` contains `0` inherited `TASK-NNN` rows, so
  Phase 002 uses planner-owned grouped plan IDs (`002-01` ... `002-10`) rather
  than invented inherited task IDs.
- **D-17:** Every `### \`content/docs/...` block in `002-TODO.md` must appear in
  exactly one `002-*-PLAN.md` coverage contract.
- **D-18:** Every major top-level TODO section must be reflected either here in
  context decisions/canonical refs or in the phase closeout plan:
  `Purpose`, `Global Requirements`, `Difficulty And Icon Contract`,
  `Corpus Source Authority`, `Navigation Order Contract`,
  `Required Deletions And Replacements`, `Required New Documents`,
  `Existing Document Specifications`, `Acceptance Criteria`, and
  `Verification Plan`.
- **D-19:** Current repo verification is insufficient for Phase 002 acceptance.
  The plan set must add a phase-local docs verification surface for word-count,
  source-anchor, `Read Next`, icon-contract, TOC, evidence-section, and claim
  hygiene checks.

### Completion gates

- **D-20:** Every execution-plan `<verify>` block must require inline execution
  of `/.github/prompts/gsd-review-tasks-execution.prompt.md`
  (`/GSD-Review-Tasks-Execution`) at least 3 times in YOLO mode, with fixes
  between passes, and stop only after at least 2 consecutive runs report no
  significant issues.
- **D-21:** Final phase closeout requires a workspace-first one-shot
  `doublecheck` pass over repo-backed implementation and review evidence.

### the agent's Discretion

- Exact section naming inside each page, as long as the TODO meaning is
  preserved
- Which Mermaid form best fits a specific page when the TODO says a diagram is
  needed but does not lock the exact syntax
- Whether a local verification rule is implemented as a standalone script,
  package script, or existing verify-wrapper extension, so long as the current
  codebase is extended rather than duplicated

</decisions>

<phase_lanes>
## Plan Grouping

- **002-01:** Shared runtime contract, nav/meta order, icon normalization,
  section-home behavior, root home, learn family, `_support` cleanup
- **002-02:** Legal family
- **002-03:** Protocol foundations
- **002-04:** Protocol advanced systems
- **002-05:** Developers orientation and core systems
- **002-06:** Developers runtime/reference/testing
- **002-07:** Network family
- **002-08:** Research and use-cases families
- **002-09:** Security and support families
- **002-10:** Full-corpus consistency sweep, docs-specific verification gates,
  review log, doublecheck, roadmap/state sync

</phase_lanes>

<specifics>
## Specific Ideas

- Keep section-home cards, but render authored narrative and TOC on the same
  page when the page body exists and `toc: true`.
- Treat `Read Next` and `Evidence and Further Reading` as first-class recurring
  page patterns instead of optional polish.
- Use existing docs runtime components (`DocLandingCards`, `DocPageToc`,
  `MarkdownEnhancer`, `DocPagePager`) instead of introducing a second docs shell.
- Treat the stale `docs/z00z_website-design.html` reference in older planning
  files as a historical alias; the active design authority is
  `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md` plus the external Z00Z
  design foundation from `/home/vadim/Projects/z00z/.github/requirements/Z00Z_DESIGN_FOUNDATION.md`.

</specifics>

<canonical_refs>
## Canonical References

**Downstream execution and review work MUST read these before implementing or
approving Phase 002.**

### Normative phase sources

- `.planning/phases/002-New-Docs/002-TODO.md`
- `.planning/phases/002-New-Docs/002-RESEARCH.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`

### Whitepaper authority corpus

- `content/whitepapers/Main-Whitepaper.md`
- `content/whitepapers/Uniqueness.md`
- `content/whitepapers/UseCases.md`
- `content/whitepapers/Assets-Rights-Vauchers.md`
- `content/whitepapers/Smart-Cash.md`
- `content/whitepapers/Linked-Liability.md`
- `content/whitepapers/Cross-Chain-Integration.md`
- `content/whitepapers/Privacy-Threat-Model.md`
- `content/whitepapers/OnionNet.md`
- `content/whitepapers/Post-Quantum-Migration.md`
- `content/whitepapers/Tokenomics.md`
- `content/whitepapers/DAO.md`
- `content/whitepapers/Proof-of-Useful-Work.md`
- `content/whitepapers/Agentic-Offline-Economy.md`
- `content/whitepapers/Legal-Architecture.md`
- `content/whitepapers/Corpus-Terminology-Reference.md`

### Existing docs/runtime/code anchors

- `content/docs/`
- `content/docs/**/_meta.yaml`
- `src/app/docs/[[...slug]]/page.tsx`
- `src/app/[domain]/[[...slug]]/page.tsx`
- `src/lib/content/docs.ts`
- `src/lib/content/markdown.ts`
- `src/lib/content/html.ts`
- `src/components/docs/DocLandingCards.tsx`
- `src/components/docs/DocPageToc.tsx`
- `src/components/docs/MarkdownEnhancer.tsx`
- `src/components/ui/Menu.tsx`
- `src/app/api/dev/content-version/route.ts`
- `config/content-pipeline.yaml`
- `config/site.yaml`
- `config/themes.yaml`
- `config/domains.yaml`
- `package.json`
- `scripts/verify.sh`
- `scripts/verify-search-coverage.mjs`

### Review and instruction gates

- `.github/copilot-instructions.md`
- `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md`
- `/home/vadim/Projects/z00z/.github/requirements/Z00Z_DESIGN_FOUNDATION.md`
- `/.github/prompts/gsd-review-tasks-execution.prompt.md`
- `.github/skills/mermaid-spectrum/SKILL.md`
- `.github/skills/mermaid-c4/SKILL.md`
- `.github/skills/doublecheck/SKILL.md`

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `src/lib/content/docs.ts` already owns frontmatter parsing, `_meta.yaml`
  ordering, landing-card generation, TOC extraction, and difficulty-icon
  fallback behavior.
- `src/app/docs/[[...slug]]/page.tsx` and `src/app/[domain]/[[...slug]]/page.tsx`
  already own the section-home rendering path that must be extended, not
  replaced.
- `src/lib/content/markdown.ts` already enables the Markdown/`@mdit/*`/Mermaid
  surface that TODO requires planners to use first.

### Critical Constraints

- Section homes with landing cards currently suppress authored body content and
  TOC through the `showLandingOnly = hasLandingCards` rule.
- Difficulty icon defaults still use the old `mdi:alpha-*-circle-outline`
  family, which conflicts with the TODO’s `mdi:alphabet-*-box-outline`
  contract.
- Current `npm run verify` proves build/search/lint correctness, but not Phase
  002-specific content acceptance.

### Integration Points

- Content work stays in `content/docs/**`.
- Shared runtime adjustments stay in the existing docs loader/routes/components.
- Docs-specific acceptance checks should extend existing verification entrypoints
  instead of creating a separate build system or content pipeline.

</code_context>

<deferred>
## Deferred Ideas

- Replacing the docs route architecture
- Rewriting whitepapers themselves
- New third-party markdown/content packages
- A second docs engine, alternate landing-page renderer, or duplicate metadata
  source

</deferred>

---

*Phase: 002-New-Docs*
*Context gathered: 2026-07-10*

# Roadmap: Z00Z Website Docs Corpus Rewrite

## Overview

This restored roadmap tracks the active docs-rewrite phase for `z00z-website`.
The existing phase workspace is `.planning/phases/001-Docs/`. The goal is to
replace placeholder docs pages with readable, evidence-linked documentation
derived from the main whitepaper corpus and structured by
`docs/z00z_website-design.html`.

## Phases

**Phase Numbering:**
- Integer phases are used for planned work.
- This repository currently restores the active docs phase first.

- [x] **Phase 1: 001-Docs** - Plan and execute the docs corpus rewrite from whitepapers into short, readable, source-linked docs pages.

## Phase Details

### Phase 1: 001-Docs
**Goal**: Rewrite `content/docs/**/*.md` from placeholder stubs into reader-friendly docs pages grounded in `content/whitepapers`, following the page intent and IA defined in `docs/z00z_website-design.html`.
**Depends on**: Nothing (first restored phase)
**Status**: Complete (`001-01` through `001-10` validated; closeout evidence recorded in the phase review log and doublecheck report)
**Requirements**: [DOCS-001, DOCS-002, DOCS-003, DOCS-004, DOCS-005, DOCS-006, DOCS-007, DOCS-008, DOCS-009, DOCS-010, DOCS-011, DOCS-012, DOCS-013, DOCS-014, DOCS-015]
**Success Criteria** (what must be TRUE):
  1. Every docs markdown page has a concrete rewrite brief tied to the matching area in `docs/z00z_website-design.html`.
  2. Each rewritten docs page is a readable 5-7 minute guide that explains the core idea without pretending to replace the whitepaper.
  3. Each docs page links back to concrete whitepaper sections so readers can verify claims and continue into deeper technical detail.
  4. The plan explicitly uses installed `mdit-plugins` and `markdown-it` features where they improve comprehension, structure, or progressive disclosure.
  5. The execution path includes mandatory review and fix loops, including repeated `GSD-Review-Tasks-Execution` runs and final doublecheck before closeout.
**Plans:** 10 plans
**UI hint**: yes
**Execution policy**: After each completed plan, update `ROADMAP.md` and `STATE.md`, then continue immediately to the next incomplete plan in YOLO mode. Every plan-level `<verify>` block must require inline execution of `/.github/prompts/gsd-review-tasks-execution.prompt.md` (`/GSD-Review-Tasks-Execution`) at least 3 times in YOLO mode, with all issues and warnings fixed between passes, and the review loop stops only after at least 2 consecutive runs report no significant issues.
**Closeout evidence**: `.planning/phases/001-Docs/001-review-log.md` and `.planning/phases/001-Docs/001-doublecheck-report.md`

Plans:
- [x] 001-01-PLAN.md — Build the 89-page coverage ledger, source matrix, and renderer/pattern matrix.
- [x] 001-02-PLAN.md — Rewrite `Home`, `Learn`, and `Legal`, including design-vs-tree nav reconciliation.
- [x] 001-03-PLAN.md — Rewrite the current `Protocol` family and remove dead protocol-only nav drift.
- [x] 001-04-PLAN.md — Rewrite foundational `Developers` pages and fix the dead `migration-guides` entry.
- [x] 001-05-PLAN.md — Rewrite advanced `Developers` pages for runtime, API, examples, and verification.
- [x] 001-06-PLAN.md — Rewrite the current `Network` family for operator and runtime clarity.
- [x] 001-07-PLAN.md — Rewrite the current `Security`, `Support`, and `_support` families.
- [x] 001-08-PLAN.md — Rewrite the current `Research` and `Use Cases` families.
- [x] 001-09-PLAN.md — Run the full-corpus consistency sweep and normalize evidence/navigation patterns.
- [x] 001-10-PLAN.md — Run the YOLO review loop, final doublecheck gate, and metadata sync.

## Progress

**Execution Order:**
Phase 1 executes first and owns the current docs rewrite track.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. 001-Docs | 10/10 | Complete (`001-review-log.md` and `001-doublecheck-report.md` recorded) | 001-01, 001-02, 001-03, 001-04, 001-05, 001-06, 001-07, 001-08, 001-09, 001-10 |

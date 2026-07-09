# Requirements: Z00Z Website Docs Corpus Rewrite

**Defined:** 2026-07-09
**Core Value:** Readers can enter the Z00Z ecosystem through short, precise, evidence-linked docs pages without losing a clear path back to the source whitepapers.

## v1 Requirements

### Docs Coverage

- [ ] **DOCS-001**: Every existing `content/docs/**/*.md` page has a rewrite plan aligned to its intended role in `docs/z00z_website-design.html`.
- [ ] **DOCS-002**: Existing placeholder or stub markdown content may be fully replaced where it does not meet the target docs role.
- [ ] **DOCS-003**: The rewrite covers the current docs tree page-by-page rather than only top-level section indexes.

### Readability and Structure

- [ ] **DOCS-004**: Each docs page is designed for roughly 5-7 minutes of reading time.
- [ ] **DOCS-005**: Each page explains the core idea in smoother, more readable language for readers who are new to the topic.
- [ ] **DOCS-006**: Each page remains technically honest and avoids fake simplification or unsupported implementation claims.
- [ ] **DOCS-007**: Each page uses structure, progressive disclosure, or visual markdown patterns where they materially improve comprehension.

### Evidence and Source Traceability

- [ ] **DOCS-008**: Each rewritten page is grounded in `content/whitepapers` as the main corpus.
- [ ] **DOCS-009**: Each page links to concrete source whitepaper sections so readers can verify claims and continue into deeper technical detail.
- [ ] **DOCS-010**: The docs layer acts as a readable synthesis, while deeper technical detail remains in the whitepapers.

### Rendering and UX Constraints

- [ ] **DOCS-011**: The rewrite explicitly accounts for installed `mdit-plugins` and `markdown-it` capabilities when selecting page patterns such as callouts, tabs, containers, collapsibles, footnotes, or diagrams.
- [ ] **DOCS-012**: Docs pages should feel more visual, structured, and user-friendly without becoming decorative noise.

### Review and Completion Gates

- [ ] **DOCS-013**: Before phase closeout, the work must be doublechecked against the repository and source corpus.
- [ ] **DOCS-014**: `/.github/prompts/gsd-review-tasks-execution.prompt.md` must be run at least 3 times in YOLO mode during docs execution.
- [ ] **DOCS-015**: Review/fix cycles continue until at least 2 consecutive review runs report no significant issues.

## v2 Requirements

### Follow-On Enhancements

- **DOCS-016**: Add a reusable docs-writing playbook so future pages follow the same evidence and readability standard.
- **DOCS-017**: Add automated checks for reading-length budgets, evidence-link presence, and required page sections.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Rewriting the whitepapers themselves | The phase summarizes the corpus into docs; the corpus remains the source of truth |
| Adding new app features to support docs visuals | The phase should use existing renderer capabilities first |
| Replacing the docs route architecture | This phase focuses on docs content planning and execution, not route-system refactors |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DOCS-001 | Phase 1 | Pending |
| DOCS-002 | Phase 1 | Pending |
| DOCS-003 | Phase 1 | Pending |
| DOCS-004 | Phase 1 | Pending |
| DOCS-005 | Phase 1 | Pending |
| DOCS-006 | Phase 1 | Pending |
| DOCS-007 | Phase 1 | Pending |
| DOCS-008 | Phase 1 | Pending |
| DOCS-009 | Phase 1 | Pending |
| DOCS-010 | Phase 1 | Pending |
| DOCS-011 | Phase 1 | Pending |
| DOCS-012 | Phase 1 | Pending |
| DOCS-013 | Phase 1 | Pending |
| DOCS-014 | Phase 1 | Pending |
| DOCS-015 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 15 total
- Mapped to phases: 15
- Unmapped: 0

---
*Requirements defined: 2026-07-09*
*Last updated: 2026-07-09 after restoring phase planning context*

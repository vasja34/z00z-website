# 001 Page Pattern Matrix

Date: 2026-07-09
Phase: 001-Docs
Plan: 001-01

This matrix defines the reader-facing writing rhythm and the allowed
`markdown-it` / `mdit-plugins` patterns for each current docs family.

## Global Rules

- Replace scaffold-only headings such as `Page Brief`, `Reader Lenses`,
  `Section Lens`, `Navigation Links`, `Delivery Focus`, and `Evidence and scaffold notes`
  with reader-facing sections.
- Every routable page must end with `## Evidence and Further Reading`.
- Default reading target for routable pages is about 5 to 7 minutes.
- Use enhanced markdown only when it reduces explanation cost or helps scanability.
- Prefer Markdown-native structure over raw HTML-heavy authoring.
- Keep `Maturity:` visible on every routable page.

## Renderer Capability Baseline

- The current renderer enables `alert`, `attrs`, `container`, `dl`, `figure`,
  `footnote`, `include`, `snippet`, `tab`, `tasklist`, `toc`, Mermaid fenced
  blocks, and `markdown-it-collapsible` in `src/lib/content/markdown.ts`.
- `config/content-pipeline.yaml` currently keeps those capabilities enabled for
  the docs pipeline, so later rewrite plans may use them without adding
  dependencies or changing site config.
- `include` and `snippet` are private-power tools. Treat them as `_support` or
  maintenance-only surfaces unless a later plan proves that public use is
  necessary and safe.
- `container` support is currently narrow and warning-oriented. Prefer alerts or
  simple structural Markdown unless a warning container materially improves the
  reading path.
- `[TOC]` is available, but use it only for long hub pages where direct section
  jumps reduce scanning cost; do not add it by default to every page.

## Family Matrix

| Family | Reader stance | Reading band | Default patterns | Selective patterns | Disallowed / avoid | Evidence and maturity rule |
| Home | First-contact orientation for mixed audiences | 700-1200 words | alerts, comparison tables, figures | Mermaid, collapsible, footnotes | tabs overload, decorative task lists, route lists that point to missing sections | End with `## Evidence and Further Reading`; keep category and non-claims visible above the fold |
| Learn | Gentle onboarding for new readers | 700-1400 words | alerts, definition lists, comparison tables | Mermaid, tabs, collapsible, footnotes | dense technical dumps, raw architecture walls | Every page must link back to concrete corpus paths and mark target-vs-current claims clearly |
| Protocol | Conceptual architecture for technical readers | 700-1600 words | alerts, Mermaid, figures, footnotes | tabs, collapsible, comparison tables, definition lists | decorative marketing copy, pseudo-API docs, unsupported live claims | Evidence section is mandatory; keep settlement authority separate from support layers |
| Developers | Builder-facing explanation with repo-local grounding | 700-1600 words | alerts, task lists, tabs, definition lists | Mermaid, figures, collapsible, footnotes | invented commands, absent mono-repo references, ornamental prose | Corpus evidence comes first; repo-local files or commands may appear only when they exist here |
| Network | Operator-facing system flow and role boundaries | 700-1500 words | alerts, figures, role tables | Mermaid, collapsible, tabs, footnotes | language that equates transport or observability with settlement truth | Evidence section must preserve role boundaries and current-vs-target posture |
| Security | Risk-first explanation for mixed technical and operational readers | 700-1400 words | alerts, severity tables, footnotes | collapsible, tabs, figures | blanket guarantees, decorative badges, vague reassurance copy | Every security claim must name the layer, residual risk, and source corpus anchor |
| Research | Corpus navigation and authority labeling | 700-1300 words | tables, alerts, footnotes | collapsible, tabs, figures | flat unprioritized lists, archive treated as active authority | Evidence blocks should point readers deeper into the corpus rather than restate the papers |
| Support | Task-focused help and escalation guidance | 600-1200 words | alerts, decision tables, task lists | collapsible, tabs, definition lists | asking for secrets, prose-heavy essays, mixed support/security flows | Keep safety warnings explicit and route readers to the next correct docs surface |
| Use Cases | Scenario-led explanation with bounded claims | 700-1400 words | figures, comparison tables, alerts | Mermaid, collapsible, tabs, footnotes | promotional tone, unsupported shipped-state language, vague stakeholder stories | Each page must pair scenario value with trust, privacy, and settlement caveats |
| Legal | Public-claims hygiene and steward-boundary explanation | 700-1400 words | alerts, compact tables, footnotes | collapsible, tabs, definition lists | legal theater, absolute compliance claims, hidden disclaimers | Keep non-claims explicit and tie each page to concrete corpus anchors |
| _support | Private include/snippet support content only | minimal private fragment | definition lists, concise containers | snippet/include helpers | routable headings, public page structure, decorative diagrams | Not a public page family; use only as private support content that matches renderer-safe include behavior |

## Pattern Notes

- `alerts`: default for framing risk, maturity, or short reader guidance.
- `tabs`: use when role-based or audience-based splits clearly reduce noise.
- `collapsible`: use for optional depth, caveats, or detail that should not interrupt the main reading path.
- `Mermaid`: use only for actor flow, authority boundaries, or architecture maps that are hard to explain in one paragraph.
- `figures`: use for images or diagram framing where the page benefits from a visual anchor.
- `footnotes`: use for nuanced caveats, term provenance, or bounded exceptions.
- `definition lists`: preferred for terminology, claim boundaries, and operator distinctions.
- `task lists`: only where the page is operational and the checklist improves actionability.
- `containers` and attrs helpers: acceptable for compact reader cues, never for decorative wrappers alone.
- `include` and `snippet`: keep private by default; use only for shared support fragments or carefully bounded maintenance content.
- `TOC`: reserve for longer hub pages and corpus indexes, not for short single-concept pages.

## Authoring Guardrails

- Home, Learn, and Use Cases should bias toward approachability before density.
- Protocol, Developers, Network, and Security should bias toward clarity of boundaries before depth.
- Legal and Research should bias toward authority labeling and evidence traceability before volume.
- `_support` content should remain private, non-routable, and maintenance-friendly.

---
title: "002 TODO: Docs Corpus Alignment Specification"
date_created: 2026-07-10
last_updated: 2026-07-10
owner: "Z00Z Website Team"
status: draft
scope: "content/docs/**/*.md"
---

# 002 TODO: Docs Corpus Alignment Specification

## Purpose

This specification defines the next rewrite pass for `content/docs/**/*.md`.
The goal is to move the docs layer from short corpus summaries into complete,
reader-ready documentation that accurately explains Z00Z as a system, shows its
advantages and potential, and remains traceable to the whitepaper corpus.

The previous pass made the docs tree coherent. This pass must make it strong:
each public document should become a 7-9 minute guide that teaches the concept,
names the boundary conditions, shows why the design matters, and links readers
to the exact corpus sources that justify the page.

## Global Requirements

- Every routable `content/docs/**/*.md` page must target a 7-9 minute read.
  Use 1,400-1,900 words as the normal band. Use 1,200-1,500 words only for
  narrow support or legal utility pages where extra prose would reduce clarity.
- Every page must explain the user-facing value of the topic, not only define
  the term. The reader should understand what Z00Z enables that account chains,
  privacy coins, shielded pools, ordinary rollups, or custodial systems do not.
- Every page must distinguish current repository evidence, corpus-backed target
  architecture, and open research. Never present target architecture as shipped
  implementation.
- Every page must include direct whitepaper source anchors by file and section.
  Generic "read the whitepaper" links are not sufficient.
- Every public page must end with `## Evidence and Further Reading`.
- Every public page must include a compact "read next" path unless the page is
  a legal utility page whose next action is obvious from the section navigation.
- Mermaid diagrams, when required, must be produced with the repository Mermaid
  skills: `.github/skills/mermaid-spectrum/SKILL.md` for compact flows and
  `.github/skills/mermaid-c4/SKILL.md` for true C4 views.
- Diagrams must teach authority, object flow, responsibility, or lifecycle.
  Decorative diagrams are not acceptable.
- Front matter must use the exact field shape below for every required document:

```yaml
---
title: ""
description: ""
difficulty: basic | intermediate | advanced | expert | specialist | unknown
icon: mdi:alphabet-a-box-outline | mdi:alphabet-b-box-outline | mdi:alphabet-c-box-outline | mdi:alphabet-d-box-outline | mdi:alphabet-e-box-outline | carbon:unknown
toc: true
---
```

## Difficulty And Icon Contract

| difficulty | icon | Intended reader |
| --- | --- | --- |
| basic | `mdi:alphabet-a-box-outline` | New reader, public overview, first-contact docs |
| intermediate | `mdi:alphabet-b-box-outline` | Reader who understands the Z00Z category and wants practical structure |
| advanced | `mdi:alphabet-c-box-outline` | Technical or operational reader who can handle system boundaries |
| expert | `mdi:alphabet-d-box-outline` | Security, privacy, cryptography, verification, or deep architecture reader |
| specialist | `mdi:alphabet-e-box-outline` | Legal, tokenomics, API, terminology, or governance reader needing precise boundaries |
| unknown | `carbon:unknown` | Temporary fallback only; every planned public page below avoids this value |

## Corpus Source Authority

Use these local primary sources before inventing new explanation:

- `content/whitepapers/Main-Whitepaper.md`: core system model, wallet-local possession, settlement objects, checkpointing, privacy, roadmap.
- `content/whitepapers/Uniqueness.md`: positioning against privacy-only and account-chain categories.
- `content/whitepapers/UseCases.md`: use-case selection, scenario fit, maturity sequencing.
- `content/whitepapers/Assets-Rights-Vauchers.md`: asset, voucher, right, policy, and action boundary.
- `content/whitepapers/Smart-Cash.md`: bounded programmable cash and state-machine limits.
- `content/whitepapers/Linked-Liability.md`: delayed/offline conflict, liability activation, compensation, and evidence.
- `content/whitepapers/Cross-Chain-Integration.md`: lockers, adapters, external custody, DA, integration packages.
- `content/whitepapers/Privacy-Threat-Model.md`: adversaries, visibility, leakage, wallet UX, metrics, forbidden shortcuts.
- `content/whitepapers/OnionNet.md`: transport privacy, route ownership, lane contracts, and non-authority boundaries.
- `content/whitepapers/Post-Quantum-Migration.md`: legacy cryptography boundary, PQ migration, readiness claims.
- `content/whitepapers/Tokenomics.md`: native asset, fee credits, treasury, bonds, incentives, rollout.
- `content/whitepapers/DAO.md`: governance lanes, treasury safety, AI-assisted review, legal claim boundaries.
- `content/whitepapers/Proof-of-Useful-Work.md`: useful-work programs, evidence discipline, authorization, reward bounds.
- `content/whitepapers/Agentic-Offline-Economy.md`: machine rights, offline agents, capability wallets, sequencing.
- `content/whitepapers/Legal-Architecture.md`: public claims, steward limits, issuer separation, wallet/legal boundaries.
- `content/whitepapers/Corpus-Terminology-Reference.md`: canonical vocabulary and authority map.

External primary sources are optional and must be used only where they clarify
standards-adjacent topics without replacing the Z00Z corpus:

- NIST PQC standards and FIPS approval: <https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved>
- NIST PQC standardization status: <https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization>
- Tor specifications: <https://spec.torproject.org/>
- Tor protocol specification: <https://spec.torproject.org/tor-spec/>
- Tor onion service rendezvous specification: <https://spec.torproject.org/rend-spec/>
- JSON-RPC 2.0 specification: <https://www.jsonrpc.org/specification>
- RFC 8259 JSON: <https://datatracker.ietf.org/doc/html/rfc8259>
- W3C DID Core: <https://www.w3.org/TR/did-core/>
- W3C Verifiable Credentials Data Model 2.0: <https://www.w3.org/TR/vc-data-model-2.0/>
- NIST Cybersecurity Framework: <https://www.nist.gov/cyberframework>

## Navigation Order Contract

The rewrite must update each public section `_meta.yaml` so the left navbar
teaches the docs in a deliberate reading order. Do not sort pages
alphabetically. Do not keep dead entries such as `ecosystem` or `demo` in the
root docs order unless those routes are restored with real content.

Do not use `_meta.yaml` `page_icons` to override document difficulty icons for
ordinary docs pages. Keep section-home icons in `_meta.yaml` where needed, and
let document front matter carry the difficulty icon.

### `content/docs/_meta.yaml`

Rationale: start with reader education, then protocol model, builder path,
operator path, scenarios, risk, research, support, and legal boundary.

```yaml
order:
  - index
  - learn
  - protocol
  - developers
  - network
  - use-cases
  - security
  - research
  - support
  - legal
```

### `content/docs/learn/_meta.yaml`

Rationale: teach the category first, then the private-object model, vocabulary,
maturity discipline, corpus entry, comparisons, and roadmap.

```yaml
order:
  - index
  - what-is-z00z
  - private-objects
  - terminology
  - live-vs-target
  - main-whitepaper
  - comparisons
  - roadmap
```

### `content/docs/protocol/_meta.yaml`

Rationale: move from whole-system architecture to object lifecycle, settlement
authority, wallet and receiver behavior, object families, programmability,
disclosure, privacy, liability, integrations, economics, governance, and
cryptographic migration.

```yaml
order:
  - index
  - architecture
  - object-lifecycle
  - settlement-model
  - checkpoints
  - wallet-local-possession
  - receiver-flow
  - assets-vouchers-rights
  - smart-cash
  - selective-disclosure
  - privacy-threat-model
  - linked-liability
  - cross-chain-rights
  - proof-of-useful-work
  - tokenomics
  - governance
  - post-quantum-migration
```

### `content/docs/developers/_meta.yaml`

Rationale: start with local repo onboarding, then workspace and agent workflow,
then protocol concepts, implementation-facing subsystems, examples, reference,
and verification as the closeout discipline.

```yaml
order:
  - index
  - get-started
  - workspace
  - ai-agent-playbook
  - core
  - storage-hjmt
  - crypto
  - wallet
  - payment-requests
  - rpc
  - rollup-node
  - runtime-services
  - configuration-genesis
  - wasm-wallet
  - simulator
  - examples
  - api-reference
  - verification-tests
```

### `content/docs/network/_meta.yaml`

Rationale: begin with the network mental model, then the publication pipeline,
operator runtime, actor roles, data layers, anchors, transport privacy, and
public status.

```yaml
order:
  - index
  - overview
  - publication-pipeline
  - node-operations
  - aggregators
  - validators
  - watchers
  - data-infrastructure
  - data-availability
  - checkpoint-anchors-zts
  - onionnet
  - status-explorer
```

### `content/docs/use-cases/_meta.yaml`

Rationale: progress from the clearest cash scenario to community and
organizational uses, then external rights, policy-shaped value, and machine or
agent rights as the most advanced scenario.

```yaml
order:
  - index
  - offline-private-cash
  - private-distribution-community-money
  - private-organizational-settlement
  - private-external-asset-rights
  - policy-shaped-money
  - machine-agent-rights
```

### `content/docs/security/_meta.yaml`

Rationale: establish the security model, then threat analysis, privacy budget
and metrics, crypto policy, supply chain, audit evidence, disclosure, and
incident response.

```yaml
order:
  - index
  - overview
  - threat-model
  - privacy-budget
  - privacy-metrics
  - crypto-policy
  - supply-chain
  - audits
  - responsible-disclosure
  - incident-response
```

### `content/docs/research/_meta.yaml`

Rationale: show the authority map first, then corpus index, glossary,
companion papers, focused technical topics, verification research, and archive
last.

```yaml
order:
  - index
  - source-authority-map
  - whitepapers
  - glossary
  - technical-papers
  - hjmt
  - benchmarks
  - verification-orchestrator
  - archive
```

### `content/docs/support/_meta.yaml`

Rationale: start with common answers, then safety-critical wallet recovery,
local troubleshooting, developer support, contact routing, and contribution.

```yaml
order:
  - index
  - faq
  - wallet-recovery-safety
  - troubleshooting
  - developer-support
  - contact
  - contribute
```

### `content/docs/legal/_meta.yaml`

Rationale: begin with the responsibility architecture, then public-claim
hygiene and disclosures, then user-facing privacy and terms, with the detailed
legal companion last.

```yaml
order:
  - index
  - architecture
  - public-claim-boundaries
  - disclosures
  - privacy
  - terms
  - legal-architecture
```

## Required Deletions And Replacements

### `content/docs/_support/another-file.md`

Action: delete or replace with a purpose-named private snippet. The current
filename is placeholder language and should not remain in the docs source.
If a private snippet is still needed, create
`content/docs/_support/evidence-block-template.md` with no public route intent.

## Required New Documents

### `content/docs/learn/private-objects.md`

Action: add.

YAML Front:

```yaml
---
title: "Private Objects"
description: "Reader-first guide to private Z00Z objects, local possession, delayed settlement, and why the object model is the core category difference."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain private objects before cryptography, using asset,
right, voucher, payment request, and evidence objects as examples. Show how a
reader should think about Z00Z as object-local possession plus later settlement,
not as a public account ledger with hidden balances. Include a short table that
contrasts account state, shielded pool state, and Z00Z private object state.

Diagrams: one `mermaid-spectrum` object lifecycle from wallet creation to local
transfer, publication, checkpoint, and evidence readout.

Source links: `Main-Whitepaper.md` sections 2-5, `Uniqueness.md` sections 2-5,
`Assets-Rights-Vauchers.md` sections 3-6, and
`Corpus-Terminology-Reference.md` section 3.

### `content/docs/learn/live-vs-target.md`

Action: add.

YAML Front:

```yaml
---
title: "Live Versus Target Architecture"
description: "Clear maturity guide that separates current repository evidence, corpus-backed target architecture, and open research across the Z00Z docs."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: define maturity labels used across the site. Explain why
Z00Z documents a large architecture while the current website repository proves
only a subset of implementation surfaces. Include examples from protocol,
network, security, developers, and use cases so readers stop confusing a design
goal with a shipped feature.

Diagrams: one `mermaid-spectrum` maturity ladder from repository evidence to
draft spec, target architecture, research, and open questions.

Source links: `Main-Whitepaper.md` section 12, `DAO.md` section 11,
`Post-Quantum-Migration.md` section 13, `Privacy-Threat-Model.md` section 11.

### `content/docs/protocol/object-lifecycle.md`

Action: add.

YAML Front:

```yaml
---
title: "Object Lifecycle"
description: "Lifecycle map for Z00Z assets, rights, vouchers, payment intents, evidence packages, conflict paths, and settlement visibility."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: show how Z00Z objects are created, held locally, moved,
published, challenged, settled, disclosed, archived, or redeemed. This page
should become the bridge between `Private Objects`, `Settlement Model`,
`Assets, Vouchers, And Rights`, and `Linked Liability`.

Diagrams: one `mermaid-c4` container-style view for wallet, publication layer,
checkpoint layer, DA, watcher, validator, and external issuer; one
`mermaid-spectrum` lifecycle state diagram.

Source links: `Main-Whitepaper.md` sections 3-8,
`Assets-Rights-Vauchers.md` sections 3-9, `Linked-Liability.md` sections 3-6,
`Cross-Chain-Integration.md` sections 3-7.

### `content/docs/protocol/selective-disclosure.md`

Action: add.

YAML Front:

```yaml
---
title: "Selective Disclosure"
description: "Explains how Z00Z separates ordinary privacy from scoped disclosure, corporate auditability, regulated wallet modes, and evidence packages."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain disclosure as a scoped, wallet- or service-layer
capability, not as a blanket protocol backdoor. Cover view keys, audit keys,
disclosure packages, corporate archives, regulated wallet modes, and what the
core protocol should never pretend to know.

Diagrams: one `mermaid-spectrum` disclosure path showing private user flow,
optional auditor view, corporate archive, legal request boundary, and core
protocol non-knowledge.

Source links: `Privacy-Threat-Model.md` sections 7-10,
`Legal-Architecture.md` sections 7-9 and 14, `Main-Whitepaper.md` section 6.

### `content/docs/protocol/receiver-flow.md`

Action: add.

YAML Front:

```yaml
---
title: "Receiver Flow"
description: "Reader and builder guide to receiver-native payments, payment requests, local acceptance, refund boundaries, and wallet safety."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain why Z00Z receiver flows matter: the receiver is
not just an account address but a local possession and acceptance boundary. Link
payment requests to wallet safety, vouchers, refunds, and unknown policy
quarantine.

Diagrams: one `mermaid-spectrum` flow from request creation to sender action,
receiver acceptance, local possession, publication, and dispute/refund branch.

Source links: `Main-Whitepaper.md` sections 3-5,
`Assets-Rights-Vauchers.md` section 8, `Smart-Cash.md` sections 4-8.

### `content/docs/network/publication-pipeline.md`

Action: add.

YAML Front:

```yaml
---
title: "Publication Pipeline"
description: "Operator map for private wallet output, public artifacts, data availability, checkpoint anchoring, validation, and watcher evidence."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: connect network pages that currently live as separate
roles. Explain publication, DA, validators, watchers, checkpoint anchors, and
status surfaces as a pipeline with different authority levels. Emphasize that
publication and visibility do not equal settlement truth.

Diagrams: one `mermaid-c4` context diagram and one `mermaid-spectrum` sequence
from wallet publication to DA, validation, checkpoint, watcher alert, and
status explorer display.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Cross-Chain-Integration.md` section 7, `Linked-Liability.md` sections 5-7,
`Privacy-Threat-Model.md` section 8.

### `content/docs/security/privacy-budget.md`

Action: add.

YAML Front:

```yaml
---
title: "Privacy Budget"
description: "Practical guide to leakage, repetition, metadata, disclosure choices, and the limits of privacy claims in Z00Z."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain privacy as a budget that can be spent by user
behavior, wallet UI, network timing, repeated counterparties, disclosure, and
service integration. Include practical examples without implying Z00Z can
protect every behavior automatically.

Diagrams: one `mermaid-spectrum` leakage map across wallet, network, public
artifact, service, and disclosure layers.

Source links: `Privacy-Threat-Model.md` sections 3-10,
`OnionNet.md` sections 5-9, `Legal-Architecture.md` sections 7 and 9.

### `content/docs/research/source-authority-map.md`

Action: add.

YAML Front:

```yaml
---
title: "Source Authority Map"
description: "Research guide that shows which Z00Z paper controls which concept, term, claim, and maturity boundary."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: turn the whitepaper family into an authority map. Show
which paper controls core protocol, rights, cross-chain, privacy, OnionNet,
tokenomics, governance, PoUW, legal, PQ, and use-case claims. Include a
"conflict resolution" rule for future writers.

Diagrams: one `mermaid-spectrum` authority graph from Main Whitepaper to
companion papers and terminology reference.

Source links: `Corpus-Terminology-Reference.md` sections 2, 6, 8, and 9 plus
all whitepaper frontmatter descriptions.

## Existing Document Specifications

### `content/docs/index.md`

Action: expand and partially rewrite.

YAML Front:

```yaml
---
title: "Docs Home"
description: "Public entry point for Z00Z docs, explaining private objects, wallet-local possession, checkpointed settlement, and where each reader should go next."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: open with a precise category sentence for Z00Z, then show
the system in one readable pass: private object, local possession, publication,
checkpoint, evidence, and optional disclosure. Add a role-based navigation
section for reader, builder, operator, researcher, legal reviewer, and support
user. Keep the home page concise but stronger than a route index.

Diagrams: one `mermaid-spectrum` first-screen system map.

Source links: `Main-Whitepaper.md` sections 1-3, `Uniqueness.md` sections 1-5,
`Legal-Architecture.md` sections 17-18.

### `content/docs/learn/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Learn"
description: "Beginner path for understanding Z00Z as private wallet-local objects, bounded rights, and checkpointed settlement evidence."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: serve as the curriculum for new readers. Explain the
reading order, the basic mental model, and the difference between approachable
docs and long-form whitepapers. Add short entries for `Private Objects` and
`Live Versus Target Architecture` once those pages are created.

Diagrams: optional `mermaid-spectrum` learning path.

Source links: `Main-Whitepaper.md` sections 1-2, `Uniqueness.md` sections 2-5,
`Corpus-Terminology-Reference.md` sections 1-3.

### `content/docs/learn/what-is-z00z.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "What Is Z00Z?"
description: "Plain-language explanation of Z00Z as a private object and settlement system rather than a public account chain, privacy coin, or hosted payment network."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: answer the title in one sentence, then unpack it through
objects, possession, settlement, privacy, rights, and evidence. Include "what it
is not" examples: not a hosted wallet, not a universal hidden VM, not an official
DEX, not an anonymous compliance bypass, not a public account chain with private
balances.

Diagrams: one `mermaid-spectrum` object-to-checkpoint flow.

Source links: `Main-Whitepaper.md` sections 1-6, `Uniqueness.md` sections 2-5,
`UseCases.md` sections 2-3.

### `content/docs/learn/main-whitepaper.md`

Action: expand into a guided reading companion.

YAML Front:

```yaml
---
title: "Main Whitepaper"
description: "Guided entry to the Z00Z Main Whitepaper, with section-by-section reading goals and links into companion papers."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain what the main paper controls, what it does not
control, and how to read it with companion papers. Include section-by-section
reader goals, a glossary starter, and a "when to leave the main paper" guide.

Diagrams: optional corpus reading map.

Source links: `Main-Whitepaper.md` all major sections,
`Corpus-Terminology-Reference.md` section 8, `Uniqueness.md` section 10.

### `content/docs/learn/terminology.md`

Action: expand and align to corpus terminology.

YAML Front:

```yaml
---
title: "Terminology"
description: "Beginner glossary for Z00Z terms, abbreviations, object names, role names, and public-claim boundaries."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain terms by concept families instead of alphabet
only: object terms, settlement terms, privacy terms, network terms, governance
terms, legal terms, and maturity terms. Add "do not confuse" pairs such as
asset/right, voucher/right, DA/settlement, privacy/anonymity, watcher/validator.

Diagrams: none required; use definition lists and compact contrast tables.

Source links: `Corpus-Terminology-Reference.md` sections 3-6 and 8,
`Main-Whitepaper.md` appendix A and F.

### `content/docs/learn/roadmap.md`

Action: rewrite around maturity, not promises.

YAML Front:

```yaml
---
title: "Roadmap"
description: "Maturity-aware guide to Z00Z development sequence, evidence gates, protocol priorities, and target architecture boundaries."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain current docs/site state, protocol core target,
privacy/security gates, PQ migration gates, governance/tokenomics gates, and
ecosystem sequencing without dates that are not sourced. Add a "what must be
true before this is live" checklist for major families.

Diagrams: one maturity-gate ladder.

Source links: `Main-Whitepaper.md` section 12, `Post-Quantum-Migration.md`
section 13, `DAO.md` section 11, `Tokenomics.md` section 10.

### `content/docs/learn/comparisons.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Comparisons"
description: "Compares Z00Z with public account chains, privacy coins, shielded pools, rollups, e-cash, and smart-contract systems without marketing shortcuts."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: compare by architecture dimensions: state location,
identity model, settlement authority, privacy boundary, programmability, offline
use, external assets, and legal/service responsibility. Do not frame other
systems as strawmen.

Diagrams: one comparison matrix, no decorative diagram required.

Source links: `Uniqueness.md` sections 2-5 and 9,
`Main-Whitepaper.md` appendix E, `UseCases.md` section 10.

### `content/docs/legal/index.md`

Action: expand as legal navigation hub.

YAML Front:

```yaml
---
title: "Legal"
description: "Legal and public-claims hub for protocol neutrality, steward limits, disclosures, terms, privacy policy, independent services, and risk boundaries."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain that this section is not legal advice and is not
the protocol itself. Organize legal architecture, public claims, terms, privacy,
disclosures, and service responsibility. Add a concise responsibility map.

Diagrams: optional responsibility-layer diagram.

Source links: `Legal-Architecture.md` sections 3-4 and 16-18, `DAO.md`
section 10, `Privacy-Threat-Model.md` section 9.

### `content/docs/legal/architecture.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Legal Architecture"
description: "Explains the Z00Z responsibility firewall between protocol, steward entities, wallets, issuers, service operators, and users."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain technical impossibility, neutrality, issuer
separation, steward limits, no official operation zones, optional compliance
overlays, and safe public language. Make the architecture practical for writers,
builders, and reviewers.

Diagrams: one `mermaid-c4` responsibility boundary map.

Source links: `Legal-Architecture.md` sections 3-4, 7-12, 16-18, appendix A
and B.

### `content/docs/legal/legal-architecture.md`

Action: merge or reposition.

YAML Front:

```yaml
---
title: "Legal Architecture Companion"
description: "Deep companion to the legal architecture paper, focused on claim review, evidence packages, steward boundaries, and document coherence."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: avoid duplicating `architecture.md`. Use this page as
the detailed checklist companion: claim review, document package, periodic
reports, separation proof, legal hardening roadmap, counsel decision points.
If duplication remains after rewrite, delete this route and fold unique content
into `architecture.md` and `public-claim-boundaries.md`.

Diagrams: none required; use matrices and checklists.

Source links: `Legal-Architecture.md` sections 17-20 and appendices A-C,
`DAO.md` appendix E.

### `content/docs/legal/terms.md`

Action: expand as site terms template, not legal architecture.

YAML Front:

```yaml
---
title: "Terms Of Use"
description: "Website and documentation terms that separate site use, educational content, protocol design material, and independent third-party services."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: state scope, no investment advice, no official exchange
or bridge, no custodial service, no guarantee of live implementation, user
responsibility, third-party links, content accuracy, and security reporting
route. Keep this as website terms, not protocol law.

Diagrams: none.

Source links: `Legal-Architecture.md` sections 9, 12, 16-18,
`Main-Whitepaper.md` section 10.

### `content/docs/legal/privacy.md`

Action: expand.

YAML Front:

```yaml
---
title: "Privacy Policy"
description: "Website privacy policy and service-layer data handling, clearly separated from Z00Z protocol privacy and selective disclosure claims."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: distinguish website data, analytics/logs, contact data,
security reports, protocol privacy, wallet data, optional disclosure, and
third-party services. Include a "protocol privacy is not site privacy" warning.

Diagrams: none required.

Source links: `Privacy-Threat-Model.md` sections 3, 7, 9, and 10,
`Legal-Architecture.md` sections 7, 9, and 14.

### `content/docs/legal/disclosures.md`

Action: expand.

YAML Front:

```yaml
---
title: "Disclosures"
description: "Public disclosures for maturity, risk, tokenomics, third-party services, independent issuers, privacy limits, and non-endorsement."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: provide categorized disclosures: maturity, technical risk,
privacy risk, token/economic risk, third-party integration, issuer separation,
governance and treasury, security reviews, and user responsibility. Use direct
language and avoid buried disclaimers.

Diagrams: none; use disclosure table.

Source links: `Legal-Architecture.md` sections 16-18, `Tokenomics.md`
sections 8-10, `DAO.md` section 10, `Privacy-Threat-Model.md` section 6.

### `content/docs/legal/public-claim-boundaries.md`

Action: expand as writer-facing red-line guide.

YAML Front:

```yaml
---
title: "Public Claim Boundaries"
description: "Messaging rules for what Z00Z can safely claim about privacy, maturity, token economics, cross-chain rights, support, and legal posture."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: include safe claim formulas, claims requiring caveats,
forbidden phrases, approval workflow, and examples of corrected wording. This
page must be usable by future content writers before publishing any docs page.

Diagrams: none; use claim matrices.

Source links: `Legal-Architecture.md` section 17 and appendix A-B,
`DAO.md` appendix E, `Privacy-Threat-Model.md` section 6,
`Post-Quantum-Migration.md` section 12.

### `content/docs/protocol/index.md`

Action: expand as protocol map.

YAML Front:

```yaml
---
title: "Protocol"
description: "System-model hub for Z00Z settlement, wallet-local possession, checkpoints, privacy, rights, incentives, governance, and migration posture."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: introduce the protocol as a set of boundaries rather
than a route list. Explain settlement authority, wallet possession, object
model, privacy, external rights, useful work, tokenomics, governance, and
migration posture in one connected narrative.

Diagrams: one `mermaid-c4` high-level protocol context map.

Source links: `Main-Whitepaper.md` sections 2-12, `Corpus-Terminology-Reference.md`
section 8.

### `content/docs/protocol/architecture.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Protocol Architecture"
description: "High-level system map for wallet-local possession, publication, checkpoints, data availability, validation, privacy, and service boundaries."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: show the architecture from user wallet outward. Explain
what each layer owns, what it does not own, how settlement notary logic differs
from DA and explorer visibility, and where target extensions fit.

Diagrams: one `mermaid-c4` system context and one compact `mermaid-spectrum`
authority flow.

Source links: `Main-Whitepaper.md` sections 3-8, `Privacy-Threat-Model.md`
sections 3-4, `Linked-Liability.md` sections 2-3.

### `content/docs/protocol/settlement-model.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Settlement Model"
description: "Checkpoint-bound settlement model for canonical objects, root continuity, replay protection, public evidence, and privacy-preserving finality."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: explain what becomes canonical, when transitions become
authoritative, why replay safety belongs to storage/roots, what evidence proves,
what it does not prove, and why this model helps scale.

Diagrams: one root continuity and checkpoint diagram.

Source links: `Main-Whitepaper.md` sections 3-4 and 8,
`Linked-Liability.md` sections 5-7, `Assets-Rights-Vauchers.md` section 9.

### `content/docs/protocol/wallet-local-possession.md`

Action: expand.

YAML Front:

```yaml
---
title: "Wallet-Local Possession"
description: "Explains why Z00Z possession lives in the wallet before public settlement and how that changes custody, payments, rights, and privacy."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: show possession as a category difference. Cover local
state, backup/recovery risk, receiver acceptance, offline use, selective
disclosure, and what the network can and cannot restore.

Diagrams: wallet-local object map.

Source links: `Main-Whitepaper.md` sections 3 and 5,
`Smart-Cash.md` sections 4-8, `Privacy-Threat-Model.md` section 7.

### `content/docs/protocol/checkpoints.md`

Action: expand.

YAML Front:

```yaml
---
title: "Checkpoints"
description: "Public evidence guide for checkpoint roots, continuity, replay protection, watcher observation, and non-custodial settlement claims."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain checkpoints as narrow public evidence. Cover root
continuity, replay resistance, proof references, DA relationship, anchors, and
why checkpoint visibility does not reveal private object meaning.

Diagrams: checkpoint evidence path.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Linked-Liability.md` sections 5-7, `Privacy-Threat-Model.md` sections 4 and 8.

### `content/docs/protocol/assets-vouchers-rights.md`

Action: expand into the main object-model docs page.

YAML Front:

```yaml
---
title: "Assets, Vouchers, And Rights"
description: "Defines the object boundary between final value, conditional claims, and authority so Z00Z cash, vouchers, and rights stay distinct."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: teach the triad clearly. Explain asset, voucher, right,
why they are not interchangeable, how policy/action boundaries work, and what
wallets must quarantine or refuse.

Diagrams: triad diagram plus optional lifecycle mini-flow.

Source links: `Assets-Rights-Vauchers.md` sections 3-11,
`Smart-Cash.md` section 7, `Main-Whitepaper.md` section 3.

### `content/docs/protocol/smart-cash.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Smart Cash"
description: "Defines Z00Z smart cash as bounded object-local rules and wallet or service-side state machines, not a universal private virtual machine."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain supported state-machine families, proof boundary,
what the chain verifies, unsupported future claims, and why bounded smart cash
is safer than generic hidden programmability.

Diagrams: state-machine boundary diagram.

Source links: `Smart-Cash.md` sections 3-10,
`Assets-Rights-Vauchers.md` section 7, `UseCases.md` section 6.

### `content/docs/protocol/linked-liability.md`

Action: expand.

YAML Front:

```yaml
---
title: "Linked Liability"
description: "Explains how delayed or offline Z00Z execution can stay private in the honest case while becoming attributable under provable conflict."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain normal-case privacy, fraud detection, liability
activation, bonds, compensation, policy boundary, and why liability is not
ordinary surveillance.

Diagrams: honest path versus conflict path.

Source links: `Linked-Liability.md` sections 2-10,
`Legal-Architecture.md` sections 6 and 16, `UseCases.md` sections 4-9.

### `content/docs/protocol/privacy-threat-model.md`

Action: expand while keeping security section links clear.

YAML Front:

```yaml
---
title: "Privacy Threat Model"
description: "Layered privacy model for ingress, internal movement, egress, transport, wallet UX, selective disclosure, metrics, and exculpability."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: provide a readable architecture-level threat model, then
route deeper operational and measurement topics to `security/*`. Cover
adversaries, what each layer can see, leakage, forbidden shortcuts, and safe
privacy claims.

Diagrams: layered adversary visibility map.

Source links: `Privacy-Threat-Model.md` sections 3-10,
`OnionNet.md` sections 8-9, `Legal-Architecture.md` sections 7 and 17.

### `content/docs/protocol/cross-chain-rights.md`

Action: full rewrite.

YAML Front:

```yaml
---
title: "Cross-Chain Rights"
description: "Explains how external assets can be represented as private Z00Z rights without pretending the protocol controls external custody or redemption."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain lockers, external custody, adapters, rights,
redemption, failure handling, liquidity boundaries, issuer responsibility, and
what Z00Z can settle privately.

Diagrams: external asset right flow from external custody to Z00Z right to
redemption.

Source links: `Cross-Chain-Integration.md` sections 3-12,
`Assets-Rights-Vauchers.md` sections 5-6, `Legal-Architecture.md` section 10.

### `content/docs/protocol/tokenomics.md`

Action: expand cautiously.

YAML Front:

```yaml
---
title: "Tokenomics"
description: "Economic boundary for native asset use, fee lanes, fee credits, bonds, treasury compartments, useful-work funding, and optional asset-local economies."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: explain economic roles without promotional investment
language. Cover native asset stack, fees, fee credits, bonds, treasury,
incentive loops, bootstrap problem, governance boundaries, and risk model.

Diagrams: economic responsibility map.

Source links: `Tokenomics.md` sections 2-10, `DAO.md` sections 6 and 10,
`Proof-of-Useful-Work.md` sections 7 and 10.

### `content/docs/protocol/governance.md`

Action: expand.

YAML Front:

```yaml
---
title: "Governance"
description: "Bounded governance model for proposal lanes, treasury rules, AI-assisted review, steward limits, challenges, and non-custodial control."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain governance lanes, treasury compartments, voting
scope, AI limits, challenge windows, legal boundaries, and rollout sequence.
Separate governance from protocol consensus and from service operation.

Diagrams: governance lane diagram.

Source links: `DAO.md` sections 3-12, `Legal-Architecture.md` sections 5-6,
`Tokenomics.md` section 8.

### `content/docs/protocol/proof-of-useful-work.md`

Action: expand.

YAML Front:

```yaml
---
title: "Proof Of Useful Work"
description: "Rule-bound reward model for verified outcomes, evidence review, authorization, challenges, and private payout through Z00Z settlement."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain program modes, work taxonomy, evidence packages,
fact consensus versus value consensus, reward authorization, private payouts,
challenge/slashing, and legal boundary.

Diagrams: work package to reward authorization flow.

Source links: `Proof-of-Useful-Work.md` sections 2-12,
`DAO.md` sections 7-9, `Legal-Architecture.md` section 6.

### `content/docs/protocol/post-quantum-migration.md`

Action: expand and verify external references.

YAML Front:

```yaml
---
title: "Post-Quantum Migration"
description: "Migration guide for current cryptographic boundaries, legacy risk, phased PQ transition, integrity firewall, and evidence gates."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: explain current ECC boundary, PQ threat model, component
risk matrix, migration principles, recommended path, integrity firewall,
confidential amount frontier, and communication guidance. Clearly state what is
not PQ-ready today.

Diagrams: migration lane diagram.

Source links: `Post-Quantum-Migration.md` sections 2-14,
`Privacy-Threat-Model.md` section 11, NIST PQC pages listed above.

### `content/docs/developers/index.md`

Action: expand as current-repo-aware builder hub.

YAML Front:

```yaml
---
title: "Developers"
description: "Builder hub for the Z00Z website docs repository, protocol mental models, local workflows, API boundaries, examples, and verification."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain what developers can do in this repository today
and what belongs to corpus target architecture. Provide routes by task:
understand protocol, edit content, inspect workspace, build locally, verify,
review API concepts, and avoid overclaims.

Diagrams: builder route map.

Source links: `Main-Whitepaper.md` sections 3 and 12,
`Corpus-Terminology-Reference.md` sections 3 and 8, local `package.json`.

### `content/docs/developers/get-started.md`

Action: expand.

YAML Front:

```yaml
---
title: "Get Started"
description: "First-session builder guide for installing, running, editing, validating, and reviewing the Z00Z website docs repository."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: give a complete first work session: prerequisites,
install, run, edit content, understand routes, verify, review, and avoid common
mistakes. Keep commands strictly repo-local.

Diagrams: optional edit-to-verify flow.

Source links: local `package.json`, `scripts/verify.sh`,
`content/docs/developers/workspace.md`, and `Main-Whitepaper.md` section 12.

### `content/docs/developers/ai-agent-playbook.md`

Action: expand into operational AI workflow.

YAML Front:

```yaml
---
title: "AI Agent Playbook"
description: "Local operating rules for AI-assisted work in the Z00Z docs repository, including repo instructions, skills, review loops, and claim hygiene."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: cover instruction priority, `.github/skills`, safe file
operations, English-only artifacts, Mermaid skill usage, doublecheck, GSD review
loops, and content claim hygiene. Do not expose hidden operational details that
do not belong in public docs.

Diagrams: agent work loop diagram.

Source links: `.github/copilot-instructions.md`, `.github/skills/`,
`Legal-Architecture.md` section 17, `Corpus-Terminology-Reference.md` section 9.

### `content/docs/developers/workspace.md`

Action: expand.

YAML Front:

```yaml
---
title: "Workspace"
description: "Structure map for the Z00Z website repository, including routes, content, rendering, configuration, scripts, planning, and verification boundaries."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain repository shape, `src/app`, `src/components`,
`content`, `config`, `public`, `scripts`, `.planning`, `.github`, and how docs
render into routes. Include "where not to put things".

Diagrams: repository structure map.

Source links: local `src/`, `content/`, `config/`, `.github/copilot-instructions.md`,
and `Z00Z_WEB_DESIGN_FOUNDATION.md`.

### `content/docs/developers/core.md`

Action: expand as conceptual API guide.

YAML Front:

```yaml
---
title: "Core Protocol API"
description: "Conceptual developer map for the Z00Z object model, settlement boundaries, state roots, validation responsibilities, and no-account architecture."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: avoid pretending this website repo exposes the full core
API. Explain the conceptual API families a future implementation must expose:
objects, commitments, roots, checkpoints, validation, policy, disclosure, and
evidence.

Diagrams: conceptual API surface diagram.

Source links: `Main-Whitepaper.md` sections 3-4, `Assets-Rights-Vauchers.md`
sections 3-9, `Corpus-Terminology-Reference.md` section 3.

### `content/docs/developers/crypto.md`

Action: expand.

YAML Front:

```yaml
---
title: "Crypto Facade"
description: "Builder guide to Z00Z cryptography boundaries, privacy discipline, domain separation, legacy risk, and post-quantum migration posture."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: explain approved crypto concepts, domain separation,
commitments, proofs, disclosure keys, sensitive data, test-only boundaries, and
PQ migration. Avoid implementation claims not visible in this repo.

Diagrams: cryptographic boundary map.

Source links: `Privacy-Threat-Model.md` sections 3-10,
`Post-Quantum-Migration.md` sections 4-13, `Main-Whitepaper.md` appendix B.

### `content/docs/developers/wallet.md`

Action: expand.

YAML Front:

```yaml
---
title: "Wallet SDK"
description: "Builder mental model for wallet-local possession, receiver flows, backup risk, payment requests, selective disclosure, and no-account UX."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain wallet responsibilities as local state owner,
receiver surface, disclosure controller, backup/recovery risk boundary, and
publication client. Include what a wallet must never ask support or servers to
do.

Diagrams: wallet responsibilities diagram.

Source links: `Main-Whitepaper.md` sections 3, 5, and appendix D,
`Smart-Cash.md` sections 4-8, `Privacy-Threat-Model.md` section 7.

### `content/docs/developers/payment-requests.md`

Action: expand.

YAML Front:

```yaml
---
title: "Payment Requests"
description: "Builder guide to request intent, receiver safety, voucher boundaries, refund semantics, and wallet-local acceptance flows."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: define payment request, receiver card, acceptance,
voucher transfer, refund, quarantine, and conflict handling. Make clear which
parts are conceptual target architecture.

Diagrams: payment request sequence.

Source links: `Smart-Cash.md` sections 4-8,
`Assets-Rights-Vauchers.md` section 8, `Linked-Liability.md` sections 4-6.

### `content/docs/developers/storage-hjmt.md`

Action: expand.

YAML Front:

```yaml
---
title: "Storage And HJMT"
description: "Builder guide to settlement roots, HJMT-style path semantics, proof boundaries, replay protection, and storage authority."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: explain why storage is an authority boundary, how roots
and proofs relate, what belongs in canonical state, what remains wallet/service
state, and why replay protection matters.

Diagrams: root/path/proof diagram.

Source links: `Main-Whitepaper.md` sections 3-4 and 8,
`Assets-Rights-Vauchers.md` section 9, `Linked-Liability.md` sections 5-7.

### `content/docs/developers/rpc.md`

Action: expand.

YAML Front:

```yaml
---
title: "RPC"
description: "Transport-boundary guide for future Z00Z RPC surfaces, request validation, authority limits, wallet privacy, and JSON payload discipline."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain RPC as a transport interface, not settlement
authority. Cover request/response shape, validation, authentication boundary,
privacy-sensitive fields, notifications, and error hygiene.

Diagrams: RPC boundary map.

Source links: `Main-Whitepaper.md` sections 3-4,
`Privacy-Threat-Model.md` sections 7 and 10, JSON-RPC and RFC 8259 external
sources listed above.

### `content/docs/developers/rollup-node.md`

Action: expand.

YAML Front:

```yaml
---
title: "Rollup Node"
description: "Builder guide to rollup-node responsibilities, publication intake, data availability, validation, checkpoints, and current repository limits."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: describe target node responsibilities and separate them
from this repo's current website implementation. Include intake, batch, DA,
validation, root production, checkpoint coordination, monitoring, and failure.

Diagrams: rollup-node pipeline.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Cross-Chain-Integration.md` section 7, `Proof-of-Useful-Work.md` section 4.

### `content/docs/developers/runtime-services.md`

Action: expand.

YAML Front:

```yaml
---
title: "Runtime Services"
description: "Builder guide to service-layer responsibilities around wallets, publication, observation, evidence, privacy, useful work, and support boundaries."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: define service types and responsibilities without making
them authoritative: wallet service, publication service, watcher, status,
support, disclosure, useful-work evaluator, and external integrator.

Diagrams: service responsibility map.

Source links: `Main-Whitepaper.md` sections 8 and 10,
`Privacy-Threat-Model.md` sections 8-10, `Proof-of-Useful-Work.md` sections 4-8.

### `content/docs/developers/simulator.md`

Action: expand.

YAML Front:

```yaml
---
title: "Simulator"
description: "Builder guide to scenario-driven validation for protocol concepts, wallet flows, service roles, use cases, and documentation claims."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: show how simulation should prove flows rather than just
demo UI. Cover scenario inputs, actors, state, failure branches, expected
evidence, privacy checks, and content claim validation.

Diagrams: scenario harness diagram.

Source links: `UseCases.md` sections 2-3 and appendix B,
`Main-Whitepaper.md` section 12, `Privacy-Threat-Model.md` section 10.

### `content/docs/developers/configuration-genesis.md`

Action: expand.

YAML Front:

```yaml
---
title: "Configuration And Genesis"
description: "Builder guide to startup authority, docs-repo configuration, genesis concepts, launch parameters, and maturity-safe configuration claims."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain website configuration versus protocol genesis.
Cover domain config, content pipeline config, future genesis parameters,
allocation/economic constraints, governance gates, and what this repo can prove.

Diagrams: config layer map.

Source links: local `config/`, `Main-Whitepaper.md` section 12,
`Tokenomics.md` sections 4 and 10, `DAO.md` section 11.

### `content/docs/developers/wasm-wallet.md`

Action: expand.

YAML Front:

```yaml
---
title: "WASM Wallet"
description: "Builder guide to browser-wallet constraints, local possession in web environments, key safety, offline behavior, and honest maturity framing."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain what changes in browser environments: storage,
key isolation, recovery, user prompts, network publication, timing leakage,
service-worker/offline constraints, and unsupported claims.

Diagrams: browser wallet trust boundary.

Source links: `Main-Whitepaper.md` sections 3 and 5,
`Privacy-Threat-Model.md` sections 7 and 10, `Post-Quantum-Migration.md`
section 11.

### `content/docs/developers/examples.md`

Action: expand as example strategy.

YAML Front:

```yaml
---
title: "Examples And Tutorials"
description: "Builder guide to scenario-based examples, documentation-first tutorials, current repository surfaces, and future protocol demo boundaries."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: define what counts as a real example, how examples should
separate current repo behavior from target protocol concepts, and how tutorials
should tie each step to corpus claims.

Diagrams: tutorial composition flow.

Source links: `UseCases.md` section 3 and appendix B, `Main-Whitepaper.md`
section 12, local `content/docs`.

### `content/docs/developers/api-reference.md`

Action: expand but do not fake an exhaustive API.

YAML Front:

```yaml
---
title: "API Reference"
description: "Reference map for current docs-repo surfaces, protocol vocabulary, future generated APIs, transport boundaries, and evidence-linked API concepts."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: explain reference layers: current website routes and
content APIs, conceptual protocol API, future generated implementation API, and
external interface expectations. Include a "not yet generated" section.

Diagrams: API reference layer map.

Source links: local `src/lib/content/`, local `src/app/api/`,
`Corpus-Terminology-Reference.md` section 3, `Main-Whitepaper.md` sections 3-4.

### `content/docs/developers/verification-tests.md`

Action: expand.

YAML Front:

```yaml
---
title: "Verification And Tests"
description: "Builder guide to local validation, review loops, content-source checks, maturity claims, security review, and future protocol verification."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: cover local `npm run verify`, lint/build gates, content
coverage checks, source-anchor checks, GSD review loops, doublecheck, security
review, and how future protocol tests differ from website verification.

Diagrams: verification ladder.

Source links: local `scripts/verify.sh`, `.github/prompts/`,
`Privacy-Threat-Model.md` section 10, `Proof-of-Useful-Work.md` section 5.

### `content/docs/network/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Network"
description: "Network hub for Z00Z publication, data availability, validators, watchers, OnionNet, checkpoint anchors, node operations, and status surfaces."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain the network as a role map with strict authority
boundaries. The reader should understand what each actor sees, proves, stores,
or reports.

Diagrams: network role map.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`OnionNet.md` sections 2-3, `Privacy-Threat-Model.md` section 8.

### `content/docs/network/overview.md`

Action: expand.

YAML Front:

```yaml
---
title: "Network Overview"
description: "Operator map for Z00Z publication roles, validation, watcher evidence, checkpoint authority, transport privacy, and public observation."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: provide the first-pass story from wallet output to public
artifact, validation, checkpoint, watcher, and explorer. Keep role boundaries
plain and memorable.

Diagrams: publication-to-checkpoint flow.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`OnionNet.md` section 3, `Privacy-Threat-Model.md` section 8.

### `content/docs/network/aggregators.md`

Action: expand.

YAML Front:

```yaml
---
title: "Aggregators"
description: "Operator guide to aggregation roles, batch discipline, useful-work boundaries, non-custodial posture, and settlement non-authority."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain aggregation without exchange/operator overclaim.
Cover batch preparation, public artifacts, role separation, useful-work
interaction, failure and challenge boundaries.

Diagrams: aggregator role flow.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Proof-of-Useful-Work.md` sections 4-6, `Legal-Architecture.md` section 11.

### `content/docs/network/validators.md`

Action: expand.

YAML Front:

```yaml
---
title: "Validators"
description: "Operator guide to validation boundaries, public-artifact replay, reject decisions, checkpoint-facing correctness, and non-custodial limits."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain what validators check, what they cannot know, how
they interact with checkpoints and DA, and how linked liability changes conflict
handling.

Diagrams: validator verdict scope diagram.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Linked-Liability.md` sections 5-7, `Privacy-Threat-Model.md` section 4.

### `content/docs/network/watchers.md`

Action: expand.

YAML Front:

```yaml
---
title: "Watchers"
description: "Operator guide to observation, alerts, exported evidence, privacy-safe monitoring, and the boundary between visibility and authority."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain watchers as observers, not authorities. Cover
alerts, evidence exports, privacy-safe metrics, failure detection, and public
status handoff.

Diagrams: watcher alert path.

Source links: `Privacy-Threat-Model.md` sections 5, 8, and 10,
`Main-Whitepaper.md` section 8, `Linked-Liability.md` section 5.

### `content/docs/network/data-infrastructure.md`

Action: expand.

YAML Front:

```yaml
---
title: "Data Infrastructure"
description: "Explains public data surfaces, indexing, evidence packages, privacy-safe artifacts, and why data infrastructure does not define settlement truth."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: cover public data, private meaning, indexing, status
views, evidence packages, DA references, archival boundaries, and privacy-safe
display.

Diagrams: data layers and authority labels.

Source links: `Main-Whitepaper.md` section 8,
`Cross-Chain-Integration.md` section 7, `Legal-Architecture.md` section 8.

### `content/docs/network/onionnet.md`

Action: expand with bounded claims.

YAML Front:

```yaml
---
title: "OnionNet"
description: "Privacy-ingress guide for Z00Z route ownership, transport roles, replay discipline, low-load privacy, and transport-layer non-claims."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain OnionNet role inside Z00Z, route construction,
membership, packets, replay, low-load privacy, trade-offs, safety gates, and
why transport privacy is not settlement privacy by itself.

Diagrams: route ownership and double-envelope flow.

Source links: `OnionNet.md` sections 2-12, `Privacy-Threat-Model.md` section 8,
Tor specification links listed above.

### `content/docs/network/data-availability.md`

Action: expand.

YAML Front:

```yaml
---
title: "Data Availability"
description: "Explains the DA support layer for publication, replay, external adapters, evidence retrieval, and the limit between availability and authority."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: teach DA as support infrastructure. Cover availability,
proof retrieval, failure modes, integration packages, and why DA does not
decide ownership or settlement.

Diagrams: DA support boundary diagram.

Source links: `Cross-Chain-Integration.md` section 7,
`Main-Whitepaper.md` section 8, `Linked-Liability.md` section 5.

### `content/docs/network/checkpoint-anchors-zts.md`

Action: expand.

YAML Front:

```yaml
---
title: "Checkpoint Anchors And ZTS"
description: "Anchor-boundary guide for checkpoint references, external evidence, ZTS naming, public verification, and authority limits."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain checkpoint anchors as references to Z00Z
settlement artifacts, not independent settlement systems. Cover anchor purpose,
public verification, explorer integration, external systems, and failure cases.

Diagrams: anchor reference chain.

Source links: `Main-Whitepaper.md` sections 4 and 8,
`Cross-Chain-Integration.md` sections 6-7, `Linked-Liability.md` sections 5-7.

### `content/docs/network/node-operations.md`

Action: expand.

YAML Front:

```yaml
---
title: "Node Operations"
description: "Operator guide to node responsibilities, configuration posture, monitoring, failure handling, verification, and current repository limits."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: describe target node operations while naming current
repo limits. Cover config, startup, health, logs, verification, DA failures,
watcher alerts, incident routing, and non-custodial role boundaries.

Diagrams: node operation loop.

Source links: `Main-Whitepaper.md` sections 8 and 12,
`Proof-of-Useful-Work.md` section 4, `Privacy-Threat-Model.md` section 10.

### `content/docs/network/status-explorer.md`

Action: expand.

YAML Front:

```yaml
---
title: "Status And Explorer"
description: "Public-facing guide to network status, explorer scope, privacy-safe display rules, maturity labels, and authority non-claims."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain what an explorer can show safely: health,
checkpoints, artifacts, status, alerts, and maturity. Explain what it must not
show or imply about private wallet state.

Diagrams: explorer data boundary.

Source links: `Privacy-Threat-Model.md` sections 5 and 8-10,
`Main-Whitepaper.md` section 8, `Legal-Architecture.md` section 17.

### `content/docs/research/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Research"
description: "Research hub for the Z00Z whitepaper corpus, authority order, technical papers, benchmarks, glossary, archive, and verification work."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain research as corpus navigation, not a pile of
links. Route readers by question: system, privacy, rights, cross-chain,
governance, economics, legal, PQ, agents, and verification.

Diagrams: research reading map.

Source links: `Corpus-Terminology-Reference.md` section 8 and all whitepaper
frontmatter descriptions.

### `content/docs/research/whitepapers.md`

Action: expand as corpus index.

YAML Front:

```yaml
---
title: "Whitepapers"
description: "Canonical whitepaper reading order with authority lanes, companion papers, maturity discipline, and direct source links."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: list every whitepaper with purpose, difficulty, when to
read it, what claims it controls, and what docs pages depend on it. Include a
short and long reading path.

Diagrams: optional corpus authority graph.

Source links: every `content/whitepapers/*.md` file.

### `content/docs/research/technical-papers.md`

Action: expand.

YAML Front:

```yaml
---
title: "Technical Papers"
description: "Companion-paper guide for deep Z00Z topics including liability, privacy, cross-chain integration, smart cash, OnionNet, PoUW, and PQ migration."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: group papers by technical question, explain prerequisites,
and identify which docs page should be read before each paper. Avoid flattening
all companion papers into equal authority.

Diagrams: none required; use grouped tables.

Source links: companion whitepapers listed in corpus source authority.

### `content/docs/research/hjmt.md`

Action: expand.

YAML Front:

```yaml
---
title: "HJMT"
description: "Research guide to HJMT-style storage thinking, settlement roots, path proofs, replay protection, and evidence boundaries."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: explain HJMT as a storage and proof concept used to think
about settlement roots. Keep maturity language clear if local implementation
proof is absent.

Diagrams: path proof and root continuity diagram.

Source links: `Main-Whitepaper.md` sections 3-4 and 8,
`Assets-Rights-Vauchers.md` section 9, `Linked-Liability.md` section 7.

### `content/docs/research/benchmarks.md`

Action: expand.

YAML Front:

```yaml
---
title: "Benchmarks"
description: "Research guide to performance questions, benchmark evidence, privacy trade-offs, useful-work evaluation, and claims that need measurement."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain what needs benchmarking: commitments, proofs,
publication, DA retrieval, OnionNet latency, wallet UX, verification, and PoUW
review. Include "no benchmark, no claim" guidance.

Diagrams: benchmark question matrix.

Source links: `Main-Whitepaper.md` appendix C, `Proof-of-Useful-Work.md`
sections 5 and 11, `Privacy-Threat-Model.md` section 10.

### `content/docs/research/verification-orchestrator.md`

Action: expand.

YAML Front:

```yaml
---
title: "Verification Orchestrator"
description: "Verification research lane for protocol correctness, privacy assurance, governance safety, useful-work evidence, and future formal tooling."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: define verification layers: content-source, protocol
invariant, cryptographic, privacy, economic/governance, legal claim, and
runtime. Connect verification to PoUW evidence discipline.

Diagrams: verification layers diagram.

Source links: `Privacy-Threat-Model.md` section 10,
`Proof-of-Useful-Work.md` sections 5-8, `DAO.md` sections 7-9.

### `content/docs/research/archive.md`

Action: expand.

YAML Front:

```yaml
---
title: "Archive"
description: "Archive guide for superseded notes, historical drafts, design inputs, absorbed material, and non-canonical research references."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain archive status, how to cite archived material,
when an archived draft was absorbed into a whitepaper, and how readers should
avoid using old drafts as current authority.

Diagrams: none required.

Source links: `Corpus-Terminology-Reference.md` sections 6 and 9,
`Privacy-Threat-Model.md` appendix B, `Smart-Cash.md` appendix B.

### `content/docs/research/glossary.md`

Action: expand as research-grade glossary.

YAML Front:

```yaml
---
title: "Glossary"
description: "Research glossary for Z00Z terms, abbreviations, corpus authority, aliases, casing rules, and cross-paper usage."
difficulty: specialist
icon: mdi:alphabet-e-box-outline
toc: true
---
```

Content requirements: extend `learn/terminology.md` with authority, variants,
aliases, abbreviations, and citation notes. Include terms that are risky to
misuse in public claims.

Diagrams: none required; use definition lists.

Source links: `Corpus-Terminology-Reference.md` sections 3-9 and appendix A.

### `content/docs/security/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Security"
description: "Security hub for Z00Z threat models, cryptographic posture, privacy metrics, supply chain, audits, disclosure, and incident response."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: make security readable by layer. Route to threat model,
crypto policy, supply chain, responsible disclosure, audits, privacy metrics,
and incident response. Never imply blanket security.

Diagrams: security layer map.

Source links: `Privacy-Threat-Model.md` sections 3-10,
`Post-Quantum-Migration.md` sections 4-13, `Legal-Architecture.md` section 16.

### `content/docs/security/overview.md`

Action: expand.

YAML Front:

```yaml
---
title: "Security Overview"
description: "Layered security map for Z00Z protocol, wallet, network, disclosure, service, governance, and documentation claims."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain layers, owners, failures, residual risks, and
verification evidence. Include a quick "what can fail where" table.

Diagrams: layered threat/responsibility map.

Source links: `Privacy-Threat-Model.md` sections 3-10,
`Legal-Architecture.md` section 16, `DAO.md` section 9.

### `content/docs/security/threat-model.md`

Action: expand.

YAML Front:

```yaml
---
title: "Threat Model"
description: "Threat-model guide for Z00Z adversaries, visibility layers, wallet risk, network metadata, disclosure risk, governance abuse, and residual limits."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: identify adversaries, assets, assumptions, layers,
security goals, non-goals, abuse cases, and open questions. Keep page readable
but deeper than protocol privacy overview.

Diagrams: adversary visibility diagram.

Source links: `Privacy-Threat-Model.md` sections 3-11,
`OnionNet.md` section 8, `DAO.md` section 9.

### `content/docs/security/crypto-policy.md`

Action: expand.

YAML Front:

```yaml
---
title: "Crypto Policy"
description: "Public policy for approved cryptographic surfaces, domain separation, sensitive data handling, vendor isolation, PQ migration, and non-claims."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: state approved and forbidden crypto posture at docs level.
Cover domain separation, no custom crypto, sensitive key handling, PQ migration,
test-only boundaries, external review, and current non-claims.

Diagrams: crypto boundary map.

Source links: `Post-Quantum-Migration.md` sections 4-13,
`Privacy-Threat-Model.md` sections 6-7, NIST PQC sources listed above.

### `content/docs/security/supply-chain.md`

Action: expand.

YAML Front:

```yaml
---
title: "Supply Chain"
description: "Security guide to dependency trust, build integrity, repository boundaries, content provenance, third-party assets, and current verification limits."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: cover repository source trust, dependency review,
runtime assets, generated reports, external links, content provenance, and
future protocol dependency gates.

Diagrams: supply-chain trust boundary.

Source links: local `.github/copilot-instructions.md`,
`Legal-Architecture.md` section 16, NIST CSF source listed above.

### `content/docs/security/responsible-disclosure.md`

Action: expand.

YAML Front:

```yaml
---
title: "Responsible Disclosure"
description: "Disclosure path for security bugs, privacy leaks, docs claim errors, supply-chain issues, wallet-risk reports, and evidence handling."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: define what to report, what not to post publicly, how to
avoid sharing secrets, expected evidence, severity, response boundaries, and
ordinary support separation.

Diagrams: disclosure routing flow.

Source links: `Privacy-Threat-Model.md` sections 6 and 10,
`Legal-Architecture.md` sections 16-18.

### `content/docs/security/audits.md`

Action: expand.

YAML Front:

```yaml
---
title: "Audits And Reviews"
description: "Public index for security audits, review status, verification reports, benchmark notes, residual risks, and missing evidence."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain what counts as audit evidence, what is currently
available, what is missing, how to read review status, and why residual risk
must stay visible.

Diagrams: none; use audit evidence table.

Source links: `Privacy-Threat-Model.md` section 10,
`Legal-Architecture.md` section 17, local `.planning/phases/001-Docs/001-doublecheck-report.md`.

### `content/docs/security/privacy-metrics.md`

Action: expand.

YAML Front:

```yaml
---
title: "Privacy Metrics"
description: "Measurement guide for Z00Z privacy claims, leakage signals, anonymity limits, wallet UX effects, transport metadata, and acceptance criteria."
difficulty: expert
icon: mdi:alphabet-d-box-outline
toc: true
---
```

Content requirements: explain metrics and quality signals: linkability,
distinguishability, timing, route exposure, disclosure risk, wallet behavior,
low-load privacy, and telemetry constraints.

Diagrams: privacy measurement map.

Source links: `Privacy-Threat-Model.md` sections 5 and 10,
`OnionNet.md` sections 7-9, `Legal-Architecture.md` section 7.

### `content/docs/security/incident-response.md`

Action: expand.

YAML Front:

```yaml
---
title: "Incident Response"
description: "Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, support scams, and claim corrections."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: define severity, first actions, owner by layer, public
communication, evidence preservation, no-secret rules, post-incident review,
and content corrections.

Diagrams: incident routing flow.

Source links: `Privacy-Threat-Model.md` sections 6 and 10,
`Legal-Architecture.md` section 16, NIST CSF source listed above.

### `content/docs/support/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Support"
description: "Support hub for FAQ, troubleshooting, wallet recovery safety, developer help, contact routes, contribution paths, and security escalation."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: show safe support routing. Separate wallet safety,
developer help, content correction, security report, contact, and contribution.
Repeat no-secret/no-DM principles.

Diagrams: support decision tree.

Source links: `Main-Whitepaper.md` appendix D,
`Privacy-Threat-Model.md` section 7, `Legal-Architecture.md` section 9.

### `content/docs/support/faq.md`

Action: expand with grouped questions.

YAML Front:

```yaml
---
title: "FAQ"
description: "Common questions about Z00Z category, privacy, settlement, wallets, tokens, use cases, maturity, support, and safety boundaries."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: group FAQ by newcomer, protocol, privacy, wallet, token,
developer, legal, and support questions. Each answer must be short but source
linked. Add "answer depends on maturity" where needed.

Diagrams: none.

Source links: `Main-Whitepaper.md`, `Uniqueness.md`, `UseCases.md`,
`Legal-Architecture.md`, `Privacy-Threat-Model.md`.

### `content/docs/support/troubleshooting.md`

Action: expand.

YAML Front:

```yaml
---
title: "Troubleshooting"
description: "Task-focused guide for local docs build issues, content route problems, rendering anomalies, verification failures, and safe escalation."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: cover local setup, install failures, dev server, route
404s, markdown rendering, Mermaid failures, icon/frontmatter issues, verify
failures, and when to escalate to security.

Diagrams: troubleshooting flowchart.

Source links: local `package.json`, `scripts/verify.sh`, `src/lib/content/`,
`Privacy-Threat-Model.md` section 10.

### `content/docs/support/wallet-recovery-safety.md`

Action: expand.

YAML Front:

```yaml
---
title: "Wallet Recovery Safety"
description: "Safety-critical guide to seed protection, local possession, recovery limits, phishing, support boundaries, and disclosure-safe wallet help."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explicitly state that support cannot restore wallet-local
secrets. Cover backups, phishing, no screenshots/seeds, local possession,
recovery documents, incident escalation, and future wallet UX warnings.

Diagrams: wallet recovery decision tree.

Source links: `Main-Whitepaper.md` appendix D,
`Privacy-Threat-Model.md` section 7, `Legal-Architecture.md` section 9.

### `content/docs/support/developer-support.md`

Action: expand.

YAML Front:

```yaml
---
title: "Developer Support"
description: "Support path for builder questions, repo setup, docs rendering, content source checks, API concept questions, and verification failures."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: route developer issues by type: setup, content, routing,
UI shell, docs concepts, claim sources, security, and contribution. Avoid
duplicating developer docs; link to them.

Diagrams: developer support routing flow.

Source links: `content/docs/developers/*`, local `package.json`,
`Main-Whitepaper.md` section 12.

### `content/docs/support/contact.md`

Action: expand.

YAML Front:

```yaml
---
title: "Contact"
description: "Official contact-routing guide for documentation questions, security reports, legal inquiries, developer support, and contribution coordination."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: define contact categories, verification rules, no-secret
rules, expected evidence, non-response boundaries, and redirects to support or
security.

Diagrams: none; use routing table.

Source links: `Legal-Architecture.md` section 17,
`Privacy-Threat-Model.md` section 7, `support/responsible-disclosure` page.

### `content/docs/support/contribute.md`

Action: expand.

YAML Front:

```yaml
---
title: "Contribute"
description: "Contribution guide for docs, source mapping, examples, reviews, security reports, useful-work-aligned tasks, and claim-safe writing."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain contribution types, setup, writing standards,
source evidence, review loop, useful-work relation, security boundaries, and
what not to contribute through public channels.

Diagrams: contribution flow.

Source links: `Proof-of-Useful-Work.md` sections 3-8,
`DAO.md` sections 7-9, local `.github/skills/`.

### `content/docs/use-cases/index.md`

Action: expand.

YAML Front:

```yaml
---
title: "Use Cases"
description: "Scenario hub for Z00Z private cash, external asset rights, policy-shaped money, organizational settlement, community distribution, and machine-agent rights."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---
```

Content requirements: explain selection framework and route each scenario by
problem, Z00Z fit, trust boundary, privacy caveat, and maturity posture.

Diagrams: use-case selection matrix.

Source links: `UseCases.md` sections 2-12, `Agentic-Offline-Economy.md`
appendix B, `Uniqueness.md` sections 5-8.

### `content/docs/use-cases/offline-private-cash.md`

Action: expand.

YAML Front:

```yaml
---
title: "Offline Private Cash"
description: "Scenario guide for wallet-local private cash, offline transfer limits, delayed reconciliation, checkpoint evidence, and receiver safety."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: tell the offline cash story with practical constraints:
local possession, double-spend risk, linked liability, later settlement, backup
risk, and what the network cannot know during offline time.

Diagrams: offline transfer then reconciliation flow.

Source links: `UseCases.md` section 4, `Main-Whitepaper.md` section 5,
`Linked-Liability.md` sections 4-6.

### `content/docs/use-cases/private-external-asset-rights.md`

Action: expand.

YAML Front:

```yaml
---
title: "Private External Asset Rights"
description: "Scenario guide for privately moving rights over externally custodied assets while keeping custody, issuer, redemption, and bridge trust explicit."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain external asset rights without hiding trust. Cover
lockers, issuers, redemption, internal rights, failure handling, privacy, and
why Z00Z does not become the custodian.

Diagrams: external custody and internal right flow.

Source links: `UseCases.md` section 5, `Cross-Chain-Integration.md` sections
3-8, `Assets-Rights-Vauchers.md` sections 5-6.

### `content/docs/use-cases/policy-shaped-money.md`

Action: expand.

YAML Front:

```yaml
---
title: "Policy-Shaped Money"
description: "Scenario guide for bounded policy, vouchers, rights, smart-cash state machines, receiver safety, and non-VM programmability."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain policy-shaped value as bounded object rules, not
arbitrary programmable money. Cover vouchers, rights, action pools, conditions,
wallet quarantine, refunds, and unsupported claims.

Diagrams: policy and action-pool boundary diagram.

Source links: `UseCases.md` section 6, `Smart-Cash.md` sections 4-10,
`Assets-Rights-Vauchers.md` section 7.

### `content/docs/use-cases/private-organizational-settlement.md`

Action: expand.

YAML Front:

```yaml
---
title: "Private Organizational Settlement"
description: "Scenario guide for private B2B, payroll, supplier, treasury, and corporate-auditable settlement with scoped disclosure."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: cover organizational privacy, selective disclosure,
corporate archives, audit receipts, scheduled payments, and legal boundaries.
Do not claim blanket regulatory compliance.

Diagrams: corporate private settlement with audit overlay.

Source links: `UseCases.md` section 7, `Legal-Architecture.md` sections 7,
8, 13, and 14, `Privacy-Threat-Model.md` section 9.

### `content/docs/use-cases/private-distribution-community-money.md`

Action: expand.

YAML Front:

```yaml
---
title: "Private Distribution And Community Money"
description: "Scenario guide for private aid, community distribution, local economies, voucher-like flows, abuse controls, and non-promotional maturity framing."
difficulty: intermediate
icon: mdi:alphabet-b-box-outline
toc: true
---
```

Content requirements: explain community distribution without utopian language.
Cover privacy, allocation, vouchers, local acceptance, abuse risk, issuer
responsibility, disclosure, and support limits.

Diagrams: distribution lifecycle flow.

Source links: `UseCases.md` section 8, `Smart-Cash.md` sections 7-8,
`Legal-Architecture.md` section 13.

### `content/docs/use-cases/machine-agent-rights.md`

Action: expand.

YAML Front:

```yaml
---
title: "Machine And Agent Rights"
description: "Scenario guide for service, machine, and agent rights using wallet-local capability objects, offline execution, useful work, and bounded authority."
difficulty: advanced
icon: mdi:alphabet-c-box-outline
toc: true
---
```

Content requirements: explain why agents need rights rather than ordinary
wallets, how capability objects work, how useful work and liability boundaries
fit, and where open questions remain.

Diagrams: agent capability wallet diagram.

Source links: `Agentic-Offline-Economy.md` sections 3-8,
`UseCases.md` section 9, `Proof-of-Useful-Work.md` sections 4-8,
`Linked-Liability.md` sections 3-6.

## Acceptance Criteria

- Every public document listed above has the specified YAML front matter.
- Every existing public docs page has either `expand`, `full rewrite`,
  `merge/reposition`, or `delete/replace` disposition.
- Every added document has a clear route, difficulty, icon, source corpus, and
  diagram decision.
- No public page remains below the 7-9 minute target unless the page is a
  deliberately narrow utility page and the exception is documented in review.
- Every page links to concrete whitepaper files and sections.
- Every Mermaid diagram request names `mermaid-spectrum` or `mermaid-c4`.
- Claim hygiene is reviewed against `Legal-Architecture.md`,
  `Privacy-Threat-Model.md`, `Post-Quantum-Migration.md`, and
  `Corpus-Terminology-Reference.md`.
- Run `/.github/prompts/gsd-review-tasks-execution.prompt.md`
  (`/GSD-Review-Tasks-Execution`) at least 3 times in YOLO mode after execution
  begins. Fix all issues and warnings between passes. Stop the review loop only
  after at least 2 consecutive runs show no significant issues in the code or
  content.

## Verification Plan

- Compare required routes against `find content/docs -name '*.md'`.
- Verify no stale `mdi:alpha-*-circle-outline` difficulty icons remain after
  implementation if this specification is accepted.
- Verify all public docs pages contain `toc: true`.
- Verify every public docs page has `## Evidence and Further Reading`.
- Verify every page contains at least one direct `content/whitepapers/*.md`
  source reference or a relative link to the same.
- Verify no page uses unsupported implementation claims without current repo
  evidence.
- Run `npm run verify` after content implementation.
- Run the required `GSD-Review-Tasks-Execution` loop described above.

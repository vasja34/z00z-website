# 001 Design Reconciliation

Date: 2026-07-09
Phase: 001-Docs
Plan: 001-01

This ledger reconciles the current 89-page `content/docs/**/*.md` tree against
the design scaffold in `docs/z00z_website-design.html`.

## Global Reconciliation Notes

- `content/docs/**/*.md` is the execution surface. Current markdown stubs are
  rewrite-from-scratch targets, not protected copy.
- Legacy evidence anchors that still point to `docs/Z00Z-*.md`, `crates/*`,
  `docs/tech-papers/*`, `website/*`, or other non-local paths must be replaced
  during rewrite plans.
- The design route `/learn/litepaper` has no current markdown file. Its reader
  intent must be absorbed into `content/docs/learn/index.md` and
  `content/docs/learn/main-whitepaper.md`.
- The design route `/developers/migration-guides` has no current markdown file.
  Its builder-orientation intent must be absorbed into
  `content/docs/developers/get-started.md` and
  `content/docs/developers/workspace.md`.
- The design route `/protocol/legal-architecture` must not remain as a dead
  protocol route. Its content intent belongs in the legal family, primarily
  `content/docs/legal/architecture.md` and
  `content/docs/legal/legal-architecture.md`.
- The design-only `/ecosystem` subtree is out of scope for the current 89-page
  docs tree. Current pages that mention `/docs/ecosystem` must reroute that
  reader intent into existing families or remove the dead link.
- Execution ownership for the current 10-plan rewrite split is fixed as:
  `001-02` Home/Learn/Legal, `001-03` Protocol, `001-04` foundational
  Developers, `001-05` advanced Developers, `001-06` Network, `001-07`
  Security/Support/_support, `001-08` Research/Use Cases, `001-09`
  full-corpus consistency, and `001-10` review/doublecheck closeout.

## Root

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/index.md | `/` public home entry | 001-02 | Rewrite from scratch | Remove dead `/docs/ecosystem` routing and replace legacy `docs/*` evidence anchors |

## Learn

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/learn/index.md | `/learn` learn hub | 001-02 | Rewrite from scratch | Fold missing `/learn/litepaper` intent into the hub and linked reading order |
| content/docs/learn/what-is-z00z.md | `/learn/what-is-z00z` category entry | 001-02 | Rewrite from scratch | Remove dead link to `/docs/learn/litepaper`; keep category boundary explicit |
| content/docs/learn/main-whitepaper.md | `/learn/main-whitepaper` corpus entry | 001-02 | Rewrite from scratch | Carry deep-dive corpus role and absorb part of litepaper reader flow |
| content/docs/learn/terminology.md | `/learn/terminology` glossary bridge | 001-02 | Rewrite from scratch | Replace legacy `docs/*` evidence with current corpus terminology anchors |
| content/docs/learn/roadmap.md | `/learn/roadmap` maturity path | 001-02 | Rewrite from scratch | Keep target-vs-current posture explicit; no unsupported roadmap promises |
| content/docs/learn/comparisons.md | `/learn/comparisons` category boundary page | 001-02 | Rewrite from scratch | Remove ecosystem detours; compare architecture boundaries, not market slogans |

## Legal

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/legal/index.md | `/legal` legal hub | 001-02 | Rewrite from scratch | Keep legal utility hub in the current tree; remove draft-only checklist sections |
| content/docs/legal/architecture.md | `/legal/architecture` legal architecture explainer | 001-02 | Rewrite from scratch | Primary current-tree landing page for legal-architecture reader intent |
| content/docs/legal/legal-architecture.md | corpus-heavy legal architecture companion | 001-02 | Rewrite from scratch | Absorb former `/protocol/legal-architecture` expectations into the legal family |
| content/docs/legal/terms.md | `/legal/terms` site terms | 001-02 | Rewrite from scratch | Site/legal utility page; no unsupported operational promises |
| content/docs/legal/privacy.md | `/legal/privacy` site privacy policy | 001-02 | Rewrite from scratch | Keep site-layer data handling separate from protocol privacy claims |
| content/docs/legal/disclosures.md | `/legal/disclosures` risk and maturity disclosures | 001-02 | Rewrite from scratch | Replace legacy whitepaper filenames with current corpus references |
| content/docs/legal/public-claim-boundaries.md | `/legal/public-claim-boundaries` messaging guardrails | 001-02 | Rewrite from scratch | Preserve explicit non-claims and remove absent repo evidence paths |

## Protocol

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/protocol/index.md | `/protocol` protocol hub | 001-03 | Rewrite from scratch | Keep only real current-tree routes; no dead `legal-architecture` protocol route |
| content/docs/protocol/architecture.md | `/protocol/architecture` system map | 001-03 | Rewrite from scratch | Remove `crates/*` evidence anchors and keep concept-first flow |
| content/docs/protocol/settlement-model.md | `/protocol/settlement-model` settlement authority explainer | 001-03 | Rewrite from scratch | Preserve settlement truth boundary separate from network/runtime support layers |
| content/docs/protocol/wallet-local-possession.md | `/protocol/wallet-local-possession` custody boundary page | 001-03 | Rewrite from scratch | Keep possession language distinct from publication or custody outsourcing |
| content/docs/protocol/checkpoints.md | `/protocol/checkpoints` public evidence explainer | 001-03 | Rewrite from scratch | Cross-link to network anchors without collapsing authority boundaries |
| content/docs/protocol/assets-vouchers-rights.md | `/protocol/assets-vouchers-rights` object model page | 001-03 | Rewrite from scratch | Normalize spelling and legacy evidence to current corpus paths |
| content/docs/protocol/smart-cash.md | `/protocol/smart-cash` programmable cash companion | 001-03 | Rewrite from scratch | Keep target posture explicit where local implementation proof is absent |
| content/docs/protocol/linked-liability.md | `/protocol/linked-liability` liability framing | 001-03 | Rewrite from scratch | Preserve companion-paper nuance without turning it into a live claim |
| content/docs/protocol/privacy-threat-model.md | `/protocol/privacy-threat-model` privacy boundary explainer | 001-03 | Rewrite from scratch | Route security readers onward without duplicating the full security section |
| content/docs/protocol/cross-chain-rights.md | `/protocol/cross-chain-rights` cross-chain composition | 001-03 | Rewrite from scratch | Mark bridge/external claims as target architecture where needed |
| content/docs/protocol/tokenomics.md | `/protocol/tokenomics` incentive frame | 001-03 | Rewrite from scratch | Keep draft/economic posture explicit and source-bound |
| content/docs/protocol/governance.md | `/protocol/governance` DAO and stewardship page | 001-03 | Rewrite from scratch | Distinguish governance from operational control claims |
| content/docs/protocol/proof-of-useful-work.md | `/protocol/proof-of-useful-work` companion paper route | 001-03 | Rewrite from scratch | Frame as bounded companion concept, not shipped validator behavior |
| content/docs/protocol/post-quantum-migration.md | `/protocol/post-quantum-migration` migration posture | 001-03 | Rewrite from scratch | Preserve migration posture and avoid false present-tense readiness claims |

## Developers

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/developers/index.md | `/developers` builder hub | 001-04 | Rewrite from scratch | Current hub must cover only repo-verifiable builder entrypoints |
| content/docs/developers/get-started.md | `/developers/get-started` local setup entry | 001-04 | Rewrite from scratch | Absorb missing `/developers/migration-guides` orientation into start flow |
| content/docs/developers/ai-agent-playbook.md | `/developers/ai-agent-playbook` AI builder workflow | 001-04 | Rewrite from scratch | Replace generic guidance with local `.github/*` and repo workflow evidence |
| content/docs/developers/workspace.md | `/developers/workspace` repo structure map | 001-04 | Rewrite from scratch | Carry part of migration-guide intent for current-tree orientation |
| content/docs/developers/core.md | `/developers/core` protocol API framing | 001-04 | Rewrite from scratch | Remove absent mono-repo crate evidence paths |
| content/docs/developers/crypto.md | `/developers/crypto` crypto facade explainer | 001-04 | Rewrite from scratch | Keep target-vs-current language explicit and cite current corpus first |
| content/docs/developers/wallet.md | `/developers/wallet` wallet SDK mental model | 001-04 | Rewrite from scratch | Do not imply a full SDK surface beyond current repo evidence |
| content/docs/developers/payment-requests.md | `/developers/payment-requests` intent/request flow | 001-04 | Rewrite from scratch | Tie builder explanation to corpus concepts, not absent implementation modules |
| content/docs/developers/storage-hjmt.md | `/developers/storage-hjmt` storage design page | 001-05 | Rewrite from scratch | Replace stub evidence that points to missing storage crates |
| content/docs/developers/rpc.md | `/developers/rpc` transport boundary page | 001-04 | Rewrite from scratch | Keep transport distinct from settlement authority and absent backend code |
| content/docs/developers/rollup-node.md | `/developers/rollup-node` runtime node surface | 001-05 | Rewrite from scratch | Frame current repo limits explicitly and keep node claims bounded |
| content/docs/developers/runtime-services.md | `/developers/runtime-services` service-layer explainer | 001-05 | Rewrite from scratch | Remove absent service-path evidence and keep maturity visible |
| content/docs/developers/simulator.md | `/developers/simulator` simulation workflow | 001-05 | Rewrite from scratch | Treat simulator as concept-plus-local-surface guidance, not as a full shipped runtime |
| content/docs/developers/configuration-genesis.md | `/developers/configuration-genesis` config/genesis page | 001-05 | Rewrite from scratch | Keep only repo-local config evidence where it exists |
| content/docs/developers/wasm-wallet.md | `/developers/wasm-wallet` WASM wallet surface | 001-05 | Rewrite from scratch | Avoid implying a complete production WASM SDK unless locally evidenced |
| content/docs/developers/examples.md | `/developers/examples` examples strategy | 001-05 | Rewrite from scratch | Use current repo examples and docs boundaries only |
| content/docs/developers/api-reference.md | `/developers/api-reference` API entry page | 001-05 | Rewrite from scratch | Keep page as bounded map, not fabricated full API index |
| content/docs/developers/verification-tests.md | `/developers/verification-tests` verification workflow | 001-05 | Rewrite from scratch | Replace old script references with repo-local validation commands only |

## Network

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/network/index.md | `/network` network hub | 001-06 | Rewrite from scratch | Keep only real current-tree operator routes and remove absent crate evidence |
| content/docs/network/overview.md | `/network/overview` operator map | 001-06 | Rewrite from scratch | Preserve settlement-vs-network boundary from the first screen |
| content/docs/network/aggregators.md | `/network/aggregators` role page | 001-06 | Rewrite from scratch | Keep role-language explicit; no authority inflation |
| content/docs/network/validators.md | `/network/validators` role page | 001-06 | Rewrite from scratch | Separate validation role from final settlement authority |
| content/docs/network/watchers.md | `/network/watchers` observability role page | 001-06 | Rewrite from scratch | Keep observation separate from consensus truth |
| content/docs/network/data-infrastructure.md | `/network/data-infrastructure` public data layer | 001-06 | Rewrite from scratch | Do not imply public data equals settlement truth |
| content/docs/network/onionnet.md | `/network/onionnet` privacy transport explainer | 001-06 | Rewrite from scratch | Preserve layered privacy caveats and bounded transport claims |
| content/docs/network/data-availability.md | `/network/data-availability` DA boundary page | 001-06 | Rewrite from scratch | Keep DA distinct from settlement or rights authority |
| content/docs/network/checkpoint-anchors-zts.md | `/network/checkpoint-anchors-zts` anchor boundary page | 001-06 | Rewrite from scratch | Explicitly subordinate anchors to protocol checkpoints and settlement logic |
| content/docs/network/node-operations.md | `/network/node-operations` runtime operator page | 001-06 | Rewrite from scratch | Replace missing runtime-crate evidence with corpus plus local config evidence only |
| content/docs/network/status-explorer.md | `/network/status-explorer` public status surface | 001-06 | Rewrite from scratch | Avoid exposing public explorer claims as protocol authority |

## Research

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/research/index.md | `/research` research hub | 001-08 | Rewrite from scratch | Current hub should separate active authority from archive material |
| content/docs/research/whitepapers.md | `/research/whitepapers` corpus index | 001-08 | Rewrite from scratch | Replace `docs/Z00Z-*.md` anchors with current `content/whitepapers/*.md` paths |
| content/docs/research/technical-papers.md | `/research/technical-papers` companion paper index | 001-08 | Rewrite from scratch | Keep technical depth grouped, not flattened with canonical papers |
| content/docs/research/hjmt.md | `/research/hjmt` focused research page | 001-08 | Rewrite from scratch | Preserve HJMT-specific depth without implying missing local implementations |
| content/docs/research/benchmarks.md | `/research/benchmarks` performance research page | 001-08 | Rewrite from scratch | Keep benchmark caveats visible and source-grounded |
| content/docs/research/verification-orchestrator.md | `/research/verification-orchestrator` verification method page | 001-08 | Rewrite from scratch | Separate research methodology from live runtime guarantees |
| content/docs/research/archive.md | `/research/archive` historical material index | 001-08 | Rewrite from scratch | Keep archive clearly non-canonical by default |
| content/docs/research/glossary.md | `/research/glossary` reference lexicon | 001-08 | Rewrite from scratch | Cross-link with Learn terminology while preserving research depth |

## Security

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/security/index.md | `/security` security hub | 001-07 | Rewrite from scratch | Remove legacy whitepaper filenames and keep severity-first structure |
| content/docs/security/overview.md | `/security/overview` layered security map | 001-07 | Rewrite from scratch | Keep every claim attached to a layer, owner, and residual risk |
| content/docs/security/threat-model.md | `/security/threat-model` threat-model page | 001-07 | Rewrite from scratch | Preserve direct link to privacy threat model corpus source |
| content/docs/security/crypto-policy.md | `/security/crypto-policy` crypto policy page | 001-07 | Rewrite from scratch | Keep PQ posture and crypto caveats explicit |
| content/docs/security/supply-chain.md | `/security/supply-chain` dependency boundary page | 001-07 | Rewrite from scratch | Replace absent ops evidence with repo-local and corpus-backed notes only |
| content/docs/security/responsible-disclosure.md | `/security/responsible-disclosure` disclosure path | 001-07 | Rewrite from scratch | Distinguish security reporting from ordinary support routing |
| content/docs/security/audits.md | `/security/audits` review status page | 001-07 | Rewrite from scratch | No unsupported audit or assurance badges |
| content/docs/security/privacy-metrics.md | `/security/privacy-metrics` privacy measurement page | 001-07 | Rewrite from scratch | Keep measurement claims scoped and evidence-backed |
| content/docs/security/incident-response.md | `/security/incident-response` incident process page | 001-07 | Rewrite from scratch | Preserve operational caution and bounded response claims |

## Support

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/support/index.md | `/support` support hub | 001-07 | Rewrite from scratch | Remove checklist scaffolding and any dead ecosystem/legal detours |
| content/docs/support/faq.md | `/support/faq` common questions | 001-07 | Rewrite from scratch | Keep answers bounded by current maturity and source corpus |
| content/docs/support/troubleshooting.md | `/support/troubleshooting` issue resolution page | 001-07 | Rewrite from scratch | Use current repo commands only where locally verifiable |
| content/docs/support/wallet-recovery-safety.md | `/support/wallet-recovery-safety` safety-critical page | 001-07 | Rewrite from scratch | Preserve explicit non-secret and no-DM guidance |
| content/docs/support/developer-support.md | `/support/developer-support` builder help route | 001-07 | Rewrite from scratch | Cross-link into developers rather than duplicating deep technical content |
| content/docs/support/contact.md | `/support/contact` official contact routing | 001-07 | Rewrite from scratch | Keep channel verification explicit and bounded |
| content/docs/support/contribute.md | `/support/contribute` contribution route | 001-07 | Rewrite from scratch | Route readers into real repo contribution surfaces only |

## Use Cases

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/use-cases/index.md | `/use-cases` scenario hub | 001-08 | Rewrite from scratch | Remove dead `/docs/ecosystem` next-route expectations from the current tree |
| content/docs/use-cases/offline-private-cash.md | `/use-cases/offline-private-cash` scenario page | 001-08 | Rewrite from scratch | Keep scenario bounded by checkpoint and wallet-possession constraints |
| content/docs/use-cases/private-external-asset-rights.md | `/use-cases/private-external-asset-rights` scenario page | 001-08 | Rewrite from scratch | Separate private rights from external custody and bridge assumptions |
| content/docs/use-cases/policy-shaped-money.md | `/use-cases/policy-shaped-money` scenario page | 001-08 | Rewrite from scratch | Keep policy claims anchored to rights/object semantics, not vague programmability |
| content/docs/use-cases/private-organizational-settlement.md | `/use-cases/private-organizational-settlement` scenario page | 001-08 | Rewrite from scratch | Preserve organizational privacy caveats and settlement boundaries |
| content/docs/use-cases/private-distribution-community-money.md | `/use-cases/private-distribution-community-money` scenario page | 001-08 | Rewrite from scratch | Keep aid/community framing bounded and source-backed |
| content/docs/use-cases/machine-agent-rights.md | `/use-cases/machine-agent-rights` scenario page | 001-08 | Rewrite from scratch | Tie agent-rights framing to explicit rights and useful-work boundaries |

## Private Support Fragment

| Current page | Design route / role | Plan | Disposition | Reconciliation note |
| --- | --- | --- | --- | --- |
| content/docs/_support/another-file.md | private include/snippet helper only | 001-07 | Retain as private support content | No public route; keep aligned with renderer-supported include/snippet behavior only |

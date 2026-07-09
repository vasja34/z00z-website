---
title: "Privacy Threat Model"
description: "Layered privacy model for ingress, internal movement, egress, transport, wallet UX, selective disclosure, and exculpability."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Privacy Threat Model

> [!note]
> **Maturity:** `Live core + target transport and disclosure layers`
>
> **Use this page when:** You want the sharpest answer to what Z00Z privacy protects, where it weakens, and what the protocol must never overclaim.

Privacy in Z00Z is not the claim that nothing is visible. It is the claim that the public layer should expose only the settlement evidence required for replay-safe verification, while the private meaning of ownership, rights, budgets, and local acceptance stays outside a reusable public account graph. That is a strong claim. It is not an unlimited one.

This page keeps the privacy story layered. Z00Z can protect the internal transfer interval better than public-account systems. It does not erase source events, exit events, service logs, transport metadata, or every voluntary disclosure surface around that interval.

## Privacy Dimensions

| Dimension | What Z00Z aims to protect | Where it can still weaken |
| --- | --- | --- |
| Holder graph privacy | No public reusable balance table for ordinary ownership | Source and exit clustering, repeated receive surfaces, service-side records |
| Receiver privacy | Signed receiver material instead of one permanent public account | The payer, wallet operator, or service that sees the receive artifact still learns something |
| Amount confidentiality | Wallet-local decrypted amount meaning rather than transparent public balances | Exact-value ingress or egress, correlated merchant records, voluntary disclosure |
| Timing and flow unlinkability | Delayed publication and batching widen the gap between local action and public evidence | Sparse load, narrow windows, bridge or operator timing correlation |
| Rights and policy confidentiality | The private meaning of vouchers, budgets, or service rights stays local first | Claim or audit workflows may need bounded reveal |
| Exculpability | Honest parties should not be framed by fabricated conflict evidence | Poor dispute design or overbroad reveal can weaken this protection |

The last point matters as much as the first five. A privacy system is weaker than it looks if an honest wallet or agent can be cheaply framed into disclosure or punishment.

## The Pressure Map

Z00Z privacy is easiest to understand as a sequence of boundary crossings:

1. **Ingress:** a public or service-side source event creates an internal right.
2. **Internal movement:** the right moves privately through wallet-local possession and checkpointed settlement.
3. **Egress:** a redemption, merchant acceptance, bridge exit, or corporate workflow narrows privacy again.
4. **Cross-cutting layers:** transport, wallet UX, operator tooling, and selective disclosure affect every phase.

The internal interval is the strongest lane. The public edges are the weakest. That is the honest shape of the model.

## Adversaries And What They Can See

| Adversary | Main observation surface | Safe claim |
| --- | --- | --- |
| Passive settlement observer | Leaves, commitments, roots, deltas, checkpoint timing | Can see public evidence, but not wallet-local ownership meaning or decrypted amounts |
| Service operator, aggregator, or publisher | Admission timing, retries, batches, provider signals | Can correlate workflow timing, but does not become settlement truth |
| Wallet leak or compromised device | Local inventory, memos, receive history, exports | Can destroy privacy at the possession boundary even if the settlement layer stays confidential |
| Bridge, issuer, or redemption counterparty | Deposits, custody flows, reserve routes, redemptions | May correlate entry and exit edges without seeing the full internal transfer graph |
| Network observer | Ingress timing, route metadata, sparse-load behavior | Transport discipline can help, but global or highly collusive observation remains a real limit |
| Conflict or fraud participant | Receipts, conflicting offline use, later fraud evidence | Can trigger bounded reveal if misuse is proven, not default-path transparency |

This table is why the docs should never collapse privacy into one adjective. Different observers see different surfaces and attack different layers.

## The Strongest Lane: Internal Movement

Internal movement is where Z00Z does its best privacy work. Public state carries committed settlement objects, checkpoint evidence, and proof-bearing public artifacts. The wallet keeps the private meaning of ownership and decrypted amount data local. That separation is what makes the protocol meaningfully different from a public account chain.

But internal privacy is still not automatic. Reused receive surfaces, timing clusters, exact-value exits, or thin-wallet behavior can recreate patterns around an otherwise confidential core. The protocol can narrow public evidence. Good wallet and operator behavior is still required to avoid rebuilding linkage from the side.

## Transport, Wallet UX, And Disclosure

Privacy is not only cryptography. It is also interface and operations discipline.

- Transport layers can reduce origin leakage and route visibility, but should not promise universal anonymity.
- Wallets can protect or destroy privacy depending on scan behavior, export defaults, log hygiene, memo handling, and receive-artifact reuse.
- Selective disclosure and audit flows can be legitimate, but only when they remain narrow, explicit, and role-specific.

One useful distinction from the corpus is that **selective disclosure**, **selective audit**, and **selective reveal** are not the same thing. Disclosure is the broad visibility concept. Audit is the enterprise or operator evidence mode. Reveal is the fraud-triggered narrowing used in linked-liability contexts. Keeping them separate prevents privacy language from becoming sloppy.

## Anti-Patterns The Protocol Must Resist

The privacy paper repeatedly warns against shortcuts that make the system look private while quietly rebuilding a visible graph:

- structurally distinct “private modes” that create their own obvious signatures;
- star or collector patterns where many flows clearly converge on one visible sink;
- merge or timing behavior that collapses otherwise separate internal rights;
- operator or wallet logs that become the richest privacy dataset in the stack;
- transport claims that overpromise against global observation.

The protocol can be strong and still admit these limits. In fact, that is the only way to stay strong in public claims.

## What Z00Z Can Safely Say

Z00Z can safely say that it minimizes public observability relative to a public-account chain, keeps ordinary ownership meaning wallet-local, and narrows public state to settlement evidence instead of a user-facing account graph. It should not say that nothing is visible, that transport metadata disappears, or that bridge and redemption edges stop mattering.

That narrower claim is already valuable. It is also more durable because it is backed by the architecture instead of by rhetorical absolutism.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` sections 3 through 10 define the privacy dimensions, adversary classes, layered threat model, wallet requirements, audit and disclosure boundary, and acceptance criteria summarized here.
- `content/whitepapers/Main-Whitepaper.md` sections 5 through 7 explain wallet-local possession, stealth ownership, selective-disclosure direction, and external-asset boundary conditions.
- `content/whitepapers/Linked-Liability.md` sections 2 through 7 explain why exculpability and selective reveal belong inside the privacy model rather than outside it.

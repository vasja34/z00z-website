---
title: "RPC Transport"
description: "Builder guide to transport boundaries, method delivery, and the separation between messaging and settlement truth."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# RPC Transport

> [!warning]
> **Maturity:** `Conceptual transport boundary + local docs evidence`
>
> **Use this page when:** You need to describe how wallet, service, or node-facing methods move between components without confusing delivery with settlement authority.

RPC is one of the easiest places for architecture drift to hide. Once requests and responses start moving between components, builders often let the transport layer absorb too much meaning. A method call begins to look like proof. A successful response begins to look like finality. A service edge begins to look like protocol authority. Z00Z needs a sharper line than that.

The correct mental model is that RPC belongs to the **delivery boundary**, not the settlement boundary. It moves messages, coordinates components, and supports local testing or service integration. It does not decide whether a confidential object was validly settled, whether a checkpoint theorem holds, or whether a wallet-local possession claim should become public truth.

## What Transport Is Responsible For

Builders should expect the transport layer to handle concerns such as:

| Transport concern | Why it belongs here |
| --- | --- |
| Method dispatch and response flow | This is the basic RPC job |
| Local and remote integration wiring | Components still need a message path |
| Testability and environment swaps | A transport seam makes local workflows easier to validate |
| Browser or service adaptation | Delivery needs can differ by environment |

Those are valuable responsibilities. They just are not the same as settlement, replay safety, or protocol truth.

## What Transport Must Not Pretend To Own

| Not a transport responsibility | Why it stays elsewhere |
| --- | --- |
| Wallet-local ownership meaning | That belongs to the wallet boundary |
| Final settlement validity | That belongs to checkpoint-bound public verification |
| Cross-chain trust guarantees | Those depend on attestation and service-layer design, not message dispatch alone |
| Privacy completeness | Transport can leak metadata even when protocol objects stay confidential |

This table is the main reason to keep the page conceptual instead of overfitted to non-local APIs. The boundary is the important part, and it is already well defined by the corpus.

## A Good RPC Description In Z00Z

A good builder-facing RPC description should answer four questions:

1. Which components need to talk to each other?
2. What information is safe to move over the transport boundary?
3. Which checks happen before transport, which during handling, and which only at settlement time?
4. What privacy, retry, and operator assumptions remain outside the protocol truth claim?

If a docs page answers those questions clearly, it is already useful even without a full locally exported method catalog. If it cannot answer them, adding more method names will not fix the problem.

## Why Transport And Privacy Need Separate Language

The privacy threat model is especially relevant here. A system can keep confidential object ownership out of public state and still leak useful information through network topology, service routing, timing, or operator observation. That means an RPC page should never imply that a transport abstraction automatically solves privacy by itself. At best it can preserve layering and reduce accidental coupling. The deeper privacy claim belongs to the protocol model, the wallet boundary, and any transport-hardening layers described elsewhere in the corpus.

## Common RPC Overclaims

| Overclaim | Better wording |
| --- | --- |
| "The RPC response confirms settlement." | "The response confirms service handling or local verification state, not final settlement by itself." |
| "Transport privacy means user privacy." | "Transport is one privacy surface among several and must not be confused with the whole threat model." |
| "A service endpoint defines the protocol." | "A service endpoint can expose a workflow without owning settlement truth." |
| "If a wallet can call it, the system is account-based." | "Wallet interaction does not imply a public account model; Z00Z still centers wallet-local possession and checkpoint evidence." |

These distinctions are not pedantic. They keep transport docs from rewriting the system architecture by accident.

## Current-Repo Value

In the current repository, this page is most useful as a transport-boundary contract:

1. It keeps developer docs from treating method delivery as settlement truth.
2. It keeps wallet and request pages aligned with the broader architecture.
3. It gives future implementation work a stable explanation to target.

That is a real contribution even before a complete local RPC reference exists.

## Read Next

Go back to [Payment Requests And Receiver Intents](/docs/developers/payment-requests) if you need the receive-flow semantics again, or move forward to [Rollup Node](/docs/developers/rollup-node) for the broader operator-facing settlement path.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines the separation between wallet-local possession, package transport, publication, and checkpoint settlement that anchors this page.
- `content/whitepapers/Cross-Chain-Integration.md` reinforces the split between transport or service surfaces and actual settlement authority.
- `content/whitepapers/Privacy-Threat-Model.md` explains why transport metadata and operator visibility must be treated as separate privacy concerns from confidential object settlement.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes settlement evidence, wallet-local possession, and related nouns that transport docs should not blur.

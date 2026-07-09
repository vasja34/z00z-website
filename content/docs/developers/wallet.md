---
title: "Wallet SDK"
description: "Builder mental model for wallet-local possession, receiver flows, and the Z00Z no-account user surface."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Wallet SDK

> [!warning]
> **Maturity:** `Live wallet-side protocol concepts + current docs-repo evidence`
>
> **Use this page when:** You need the Z00Z wallet model before designing receive flows, user UX, or integration boundaries.

The wallet is where Z00Z becomes understandable as a product rather than as an abstract privacy architecture. The chain may settle evidence, but the wallet is where possession, receiver material, package preparation, and object recognition actually make sense to a user. That is why the wallet page should not be written like an account-dashboard tutorial. Z00Z explicitly rejects the idea that a reusable public account table is the natural home for digital cash.

In practical terms, the wallet model is built around **wallet-local possession**. The user controls private material, recognizes spendable objects, prepares transfers, and only later publishes the evidence needed for settlement. That ordering is the opposite of a system in which the public ledger is the first and most informative source of truth about ownership.

## The Wallet Boundary

Builders should picture the wallet as the owner of these responsibilities:

| Responsibility | Why it belongs in the wallet |
| --- | --- |
| Hold receiver material and local ownership knowledge | These are private possession facts, not public settlement records |
| Prepare transfer packages | Package construction starts before public finality |
| Recognize newly spendable objects | Ownership discovery should not require a public balance table |
| Manage receive flows and one-time requests | Receiver-facing coordination should stay narrower than a permanent address model |

That does not mean the wallet is sovereign over settlement. It means the wallet is sovereign over possession until settlement evidence is published and checkpointed.

## Receiver-Native Instead Of Account-Native

The whitepaper corpus keeps returning to one idea: **receiver surfaces are not public account identifiers**.

| Wallet concept | Better mental model |
| --- | --- |
| `ReceiverCard` | A receiver-facing routing and approval input, not a permanent public address |
| `PaymentRequest` | A receive-intent object carrying parameters for a specific handoff |
| Wallet inventory | A private local interpretation of owned objects, not a public balance row |

This matters for product design. If you build wallet copy, flows, or API boundaries as if the user is managing a public account, you will slowly reintroduce the privacy leak that the system is designed to avoid.

## Builder Questions A Wallet Page Should Answer

Before writing wallet code or wallet-facing docs, answer these questions:

1. What stays wallet-local until publication?
2. What becomes public settlement evidence only at the checkpoint boundary?
3. Which receive surface is one-time or scoped, and which vocabulary is dangerously close to an account metaphor?
4. What maturity claim is justified by the repo evidence versus only by the corpus?

These questions help teams keep UX, security copy, and SDK language aligned. Z00Z is not only a different data structure. It is a different way of telling the user what ownership means.

## What This Repo Can Help Wallet Builders Do

Even without a full local wallet implementation, this repo is useful for wallet work:

| Builder task | How this repo helps |
| --- | --- |
| Align UX copy with protocol concepts | Use `content/whitepapers/` and `content/docs/` terminology |
| Review diagrams and flow explanations | Update reader-facing pages and validate them through the docs build |
| Clarify receive-flow maturity | Distinguish live protocol concepts from target service or SDK detail |
| Keep wallet docs consistent with privacy claims | Cross-check against the privacy threat model and smart-cash papers |

This is enough to support real design and documentation work without claiming that a production SDK is already packaged in this tree.

## Common Wallet Misreads

| Misread | Correction |
| --- | --- |
| The wallet is just a friendlier front end for public balances | No, it is the primary home of local possession and object recognition |
| A receive surface should behave like a long-lived account address | No, receiver-native flow is intentionally narrower and more private |
| If a request is portable, it must already be final | No, package portability and settlement finality are distinct |
| Wallet privacy is complete if amounts are hidden | No, graph leakage, service disclosure, and operator visibility still matter |

These corrections are what keep the wallet story from drifting back toward the public-account worldview the protocol is explicitly leaving behind.

## Read Next

Open [Payment Requests And Receiver Intents](/docs/developers/payment-requests) for the request layer built on top of the wallet model, or go back to [Crypto Facade](/docs/developers/crypto) if the main concern is proof and privacy discipline.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines wallet-local possession, `ReceiverCard`, `PaymentRequest`, and the no-account architecture that anchors this page.
- `content/whitepapers/Smart-Cash.md` explains how private object ownership and scoped transfer flows support a cash-like user model.
- `content/whitepapers/Privacy-Threat-Model.md` clarifies why a wallet page must distinguish object privacy from broader metadata, service, and transport leakage.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes the receiver and request vocabulary used throughout this page.

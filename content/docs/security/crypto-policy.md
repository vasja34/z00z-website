---
title: "Crypto Policy"
description: "Public policy for approved cryptographic surfaces, vendor isolation, domain separation, sensitive data handling, and test-only functions."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# Crypto Policy

> [!note]
> **Maturity:** `Live public wording rules + target migration and operator hardening beyond them`
>
> **Use this page when:** You are writing, reviewing, or relying on cryptographic claims about Z00Z and need to know how narrow those claims must stay.

The most important cryptographic statement in the current corpus is not a boast. It is a limit: **Z00Z is not end-to-end post-quantum secure today**. That sentence should remain visible because it protects the rest of the policy from drifting into wishful language.

The stronger defensible claim is more specific. The current design has a PQ-friendly settlement and storage boundary because public truth is already organized around checkpointed roots, typed replay artifacts, canonical encodings, and wallet-local possession rather than a reusable public account ledger. That helps migration. It does not finish it. Authorization, stealth reception, and confidential amount semantics still depend on narrower assumptions that must be named carefully.

## Current Policy In Plain Language

Use this policy as the public rule set for crypto claims:

| Rule | Why it exists |
| --- | --- |
| Prefer exact surface names over slogans | "Stealth reception" and "wallet-local recovery" are clearer than "fully private cryptography" |
| Keep suite identity explicit | Reviewers should know which cryptographic lane a claim belongs to |
| Do not imply a hidden downgrade path | A stronger future lane should not quietly fall back to weaker authorization semantics |
| Separate confidentiality from value-validity | Protecting payload secrecy is not the same as proving confidential amount integrity |
| Do not claim universal PQ safety today | The corpus explicitly rejects that shortcut |
| Do not market optional overlays as if they were base-layer guarantees | Disclosure, audit, or enterprise views remain layered surfaces |

These rules are not only for protocol papers. They also apply to FAQ copy, support answers, wallet labels, roadmap summaries, and contributor docs.

## What Can Be Said Safely Today

The present-tense lane can safely say that Z00Z uses a privacy-first object model in which wallet-local meaning and public settlement evidence are intentionally separated. It can safely say that the cryptographic boundary already includes concrete receiver, authorization, and proof surfaces rather than an undefined "encrypted balance" story. It can also safely say that future migration work should preserve the rights-first model instead of collapsing into transparent accounts.

What it should not say is equally important:

- not "fully post-quantum secure";
- not "every future audit mode is already live";
- not "all legacy risk disappears once one new signature family is added";
- not "privacy survives endpoint compromise or reckless disclosure automatically";
- not "transport privacy and settlement privacy are interchangeable."

## The Two Hard Frontiers

The corpus keeps returning to two hard cryptographic frontiers.

The first frontier is **authorization migration**. If legacy authorization remains valid forever, a future break can become a live theft problem instead of a historical confidentiality problem. That is why the post-quantum paper argues for an integrity firewall, one-way rewrap, explicit suite identity, and an eventual legacy cutoff.

The second frontier is **confidential amount validity**. A system can improve receiver confidentiality or signature resilience and still retain a harder open question around commitments and range-proof assumptions. This matters because "payload privacy" is not enough if value conservation can no longer be trusted. Any future widening of cryptographic claims must keep those two frontiers separate.

## Rules For Contributors In This Repository

This repository is mostly a docs surface, so the most important crypto discipline here is wording discipline.

Contributors should:

- anchor cryptographic claims in `content/whitepapers/` before expanding them into user-facing prose;
- keep maturity notes visible when the design paper is ahead of repo-local implementation evidence;
- avoid turning future migration lanes into present-tense guarantees;
- use the repo verification path for docs changes so broken pages do not silently change the claim surface;
- prefer the conservative legal formulas from the corpus when a phrase sounds too strong.

The local instruction surfaces reinforce the same idea: precise claims beat dramatic claims.

## What This Page Intentionally Leaves Open

This page does not choose a final end-state algorithm suite for every future lane, and it does not pretend that one naming decision closes the operational work. Wallet recovery ergonomics, downgrade resistance, disclosure compatibility, operator tooling, and confidential amount migration all need separate engineering and review. The point of the policy is not to fake closure. The point is to keep current public language from outrunning the evidence.

If a future page needs stronger wording, it should come with stronger proof.

## Evidence and Further Reading

- `content/whitepapers/Post-Quantum-Migration.md` is the primary source for the "not end-to-end PQ secure today" limit, explicit suite identity, one-way rewrap, legacy cutoff, and the confidential amount frontier.
- `content/whitepapers/Main-Whitepaper.md` defines the current wallet-local, stealth-reception, and checkpoint-coupled settlement boundary that this policy describes in present tense.
- `content/whitepapers/Privacy-Threat-Model.md` explains why public wording must distinguish payload confidentiality, public observability, operator exposure, and disclosure scope.
- `content/whitepapers/Legal-Architecture.md` supplies the safe and unsafe claim formulas that keep crypto language conservative across public materials.
- `.github/copilot-instructions.md` and `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md` are the repo-local rule surfaces that require evidence-backed wording and explicit verification before publishing changes here.

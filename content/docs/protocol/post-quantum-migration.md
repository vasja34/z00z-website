---
title: "Post-Quantum Migration"
description: "Migration posture for suite identity, hybrid receive and authorization, one-way rewrap, legacy cutoff, and the harder confidential-amount frontier."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Post-Quantum Migration

> [!warning]
> **Maturity:** `Migration posture`
>
> **Use this page when:** You need the honest PQ answer: what can be claimed today, what cannot, and what migration order best protects live value.

Z00Z is not end-to-end post-quantum secure today. That sentence should stay visible. The more defensible claim is narrower: the protocol has a comparatively good settlement and storage boundary for migration because public truth is already organized around checkpointed roots, typed replay artifacts, canonical encodings, and wallet-local possession rather than around one reusable public account table. That helps migration. It does not finish it.

## The Current Boundary Is Uneven

| Layer | Current posture under a future quantum threat | Why it matters |
| --- | --- | --- |
| Settlement and storage boundary | Relatively stronger | Hash-bound roots, paths, and replay artifacts are easier to migrate than reusable public accounts |
| Receiver and stealth boundary | Weaker | Legacy key agreement threatens historical and future payload confidentiality |
| Authorization boundary | Weaker | Legacy signatures are the most urgent live-value risk if they remain valid forever |
| Confidential amount boundary | Hardest frontier | Commitments and range-proof semantics are not solved by one signature or KEM swap |

This unevenness is exactly why the page treats migration as a staged program instead of one primitive replacement.

## The Integrity Firewall

The most actionable concept in the PQ paper is the integrity firewall. Its job is simple: after a declared cutoff, legacy-only authorization should no longer be enough to move live value. That does **not** retroactively repair every historical ciphertext or prove that old confidential amount machinery is fully PQ-safe. It does prevent a future break of the legacy lane from automatically becoming a future spend-anything lane.

This fits Z00Z well because value is already object-oriented and checkpoint-bound. A migration can consume one live right and create a stronger-suite right without rewriting a global account table.

## Recommended Migration Order

1. **Make suite identity explicit.** Receiver material, outputs, packages, and proofs should carry a visible cryptographic suite identity instead of relying on contextual guesswork.
2. **Protect new receive and authorization flows first.** Hybrid or stronger-lane protection for new outputs gives the best immediate value protection.
3. **Use one-way rewrap.** Legacy outputs should be consumed into stronger-suite outputs rather than oscillating freely between old and new lanes.
4. **Declare a legacy cutoff.** After activation, legacy-only proofs are no longer enough for new valid settlement.
5. **Continue the confidential-amount frontier separately.** This remains the hardest problem and should not be hidden behind easier receiver or signature progress.

That sequence is more important than any one algorithm family in this docs page. It is the architecture of the migration itself.

## What The Firewall Does And Does Not Do

| The firewall does... | The firewall does not... |
| --- | --- |
| Stop broken legacy authorization from moving future live value after cutoff | Retroactively re-encrypt or repair every historical payload |
| Let the protocol define a clearer “old lane” versus “new lane” validity boundary | Prove that old confidential amount proofs are already PQ-safe |
| Fit naturally with object-based rewrap and checkpointed state continuity | Remove every wallet, recovery, or operational migration challenge |

This distinction is important because overclaiming PQ readiness would be one of the most damaging forms of protocol drift in the current corpus.

## Why The Confidential Amount Frontier Stays Separate

Replacing receiver protection or authorization is not the same thing as replacing confidential-amount validity. Amount hiding and amount correctness are a harder frontier. A protocol can protect future authorization sooner than it fully replaces the amount-validity stack, as long as that limit is made explicit. Constrained migration lanes or selected high-assurance families may be justified before a universal PQ confidential-amount path exists.

That is not an evasion. It is an honest sequencing rule.

## What The Protocol Can Safely Say Today

Z00Z can safely say that it has a migration-friendly settlement boundary, that it can version cryptographic suites more cleanly than a public-account system centered on one global state model, and that a one-way rewrap plus legacy cutoff is the right integrity-first migration direction. It should not say that the current system is already fully PQ-safe or that one primitive swap solves the whole stack.

## Evidence and Further Reading

- `content/whitepapers/Post-Quantum-Migration.md` sections 1 through 10 define the current cryptographic boundary, threat model, risk matrix, migration principles, integrity firewall, and confidential-amount frontier summarized here.
- `content/whitepapers/Main-Whitepaper.md` appendix sections on cryptographic boundary and canonical encoding explain why suite identity and checkpoint-bound replay rules matter for migration discipline.
- `content/whitepapers/Privacy-Threat-Model.md` and `content/whitepapers/Linked-Liability.md` help explain why post-quantum migration should preserve the rights-first, selective-reveal, and wallet-local boundaries instead of collapsing toward transparent accounts.

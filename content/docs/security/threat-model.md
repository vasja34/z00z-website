---
title: "Threat Model"
description: "Adversary and failure model across privacy, fraud, wallet behavior, ingress/egress, operators, bridges, and selective disclosure."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Threat Model

> [!note]
> **Maturity:** `Live threat-language baseline with mixed downstream implementation maturity`
>
> **Use this page when:** You need to reason about who can observe, delay, corrupt, steal, leak, or misrepresent value across the Z00Z stack.

Threat models fail when they pretend every attacker has the same power. Z00Z makes a sharper distinction. A public observer does not have the same leverage as a malicious counterparty. An aggregator that can delay publication does not automatically gain settlement authority. A compromised endpoint is not the same as a broken range-proof assumption. A bridge or external issuer can learn some things about entry and exit while still not learning the full internal ownership graph. The point of this page is to keep those differences explicit.

## The Main Threat Boundary

The current Z00Z corpus defends one central boundary: **public settlement evidence should be narrower than private ownership meaning**. That means ordinary public observers should not receive a reusable public account graph or wallet inventory. It does not mean the system erases all observable traces. Timing, publication patterns, request reuse, off-chain services, external custody surfaces, and endpoint compromise can still create leakage or loss.

That is why the threat model has to be multi-layered.

## Adversaries By Layer

| Adversary | What they can usually see or influence | What the architecture aims to prevent | Residual risk that remains |
| --- | --- | --- | --- |
| Public settlement observer | Checkpointed artifacts, commitments, proof bytes, timing, and other public evidence | Reading wallet-local ownership meaning as if it were a public balance table | Correlation from timing, repeated patterns, and later voluntary disclosure |
| Aggregator or publication operator | Admission timing, retry behavior, batch construction, provider outcomes | Converting invalid or incomplete evidence into final settlement truth | Delay, censorship pressure, or metadata correlation before publication |
| Data-availability or archive provider | Blob references, timestamps, fetch outcomes, and publication availability | Becoming a second settlement authority or recovering private meaning by default | Operational correlation and retention outside the base settlement theorem |
| Malicious payer, receiver, or service counterparty | Cards, requests, receipts, logs, and any disclosure material intentionally shared with them | Automatic access to unrelated wallet history or future rights | Workflow-local knowledge can still leak if identifiers are reused carelessly |
| External issuer, locker, or bridge operator | Deposit and redemption edges, reserve events, route status, or proof bundles they control | Treating external-service truth as native protocol truth | Entry and exit correlation, reserve dishonesty, or policy failure remain external risks |
| Malware, endpoint attacker, or insider with device access | Local secrets, backups, screenshots, clipboard data, or decrypted state | Assuming protocol privacy can save a compromised endpoint | Full user loss remains possible when secrets leave the device |
| Future cryptanalytic attacker | Legacy signatures, receiver protection, or confidential amount assumptions | Quietly moving live value after a stronger migration lane exists | Historical confidentiality and old-lane assumptions can retain residual risk |

These rows matter because each one implies different mitigations, different evidence, and different user advice.

## Fail-Closed Threats Versus Operational Threats

Not every failure has the same meaning.

Fail-closed threats are the ones the architecture is supposed to reject outright: malformed untrusted inputs, invalid replay state, unauthorized movement, inconsistent settlement artifacts, or cryptographic material that does not verify under the accepted rules. These are the failures where "the system should refuse the transition" is the right expectation.

Operational threats are different. Publication delay, data-availability outages, weak incident handling, transport-level observation, scam support channels, and poor wallet backup habits do not always create an invalid state transition. They create liveness loss, privacy degradation, or user harm around an otherwise valid core. Confusing those classes leads to bad response plans. A protocol can remain settlement-correct while users still suffer from phishing, reuse, or endpoint compromise.

## The Highest-Risk User Threats

For ordinary readers, the most dangerous threats are usually not the most mathematically exotic ones.

1. Secret leakage through fake support, screenshots, clipboard capture, or remote-access scams.
2. Incorrect belief that "privacy protocol" means someone else can restore funds after key loss.
3. Reuse of receiver material, request identifiers, or disclosure bundles beyond the intended scope.
4. Trusting external issuers, bridges, or service wrappers as if they inherited native protocol guarantees.

These risks stay high because they mix technical misunderstanding with urgent user behavior. That is why [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety), [Responsible Disclosure](/docs/security/responsible-disclosure), and [Incident Response](/docs/security/incident-response) all exist as separate pages.

## The Highest-Risk Builder Threats

For builders and reviewers, the biggest mistakes usually look like scope drift:

- describing transport or service privacy as if it were guaranteed by settlement design alone;
- widening present-tense claims beyond what the repo and corpus can support;
- mixing external issuer trust with native protocol trust;
- treating selective disclosure as fully landed everywhere instead of a partially realized and still-hardening overlay family;
- assuming legacy cryptographic lanes can stay valid forever without an explicit migration firewall.

The whitepapers consistently argue that privacy, disclosure, and compliance posture should be layered. Builder docs and product copy must preserve that separation, or the threat model becomes less true the moment it is simplified.

## When A Problem Becomes A Security Incident

Treat the issue as security-sensitive when any of the following becomes possible:

| Trigger | Why it matters |
| --- | --- |
| Secret material, recovery data, or scoped private evidence may have been exposed | User loss may follow even if no invalid settlement occurred yet |
| A bug can alter authorization, replay safety, or value validity | The core theorem may be affected |
| A service or operator path leaks more information than the docs claim | Privacy language and real exposure have diverged |
| Public disclosure would make exploitation easier before mitigations exist | Reporting discipline becomes part of containment |
| External-service trust is being misrepresented as protocol-native safety | Users may take risks based on the wrong boundary |

At that point, move from ordinary support into the private reporting and incident process.

## What This Threat Model Does Not Claim

This page does not claim that the current repo proves every mitigation is already deployed in production. It also does not claim that every privacy loss is visible on chain or that every operator failure is automatically contained. What it does provide is the vocabulary needed to reason honestly about the system: public evidence is narrow but real, private meaning is local but fragile, operator roles are bounded but not magic, and disclosure surfaces must stay explicit.

That is a stronger and more useful claim than a vague promise that "security is handled."

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the primary source for adversary classes, visibility surfaces, and the wallet-local-versus-public boundary summarized here.
- `content/whitepapers/Main-Whitepaper.md` explains wallet recovery, request validation, operator failure classes, publication risk, and current maturity limits on privacy and disclosure tooling.
- `content/whitepapers/Post-Quantum-Migration.md` defines the future cryptanalytic threat lanes and why legacy authorization risk must not remain open forever.
- `content/whitepapers/Legal-Architecture.md` explains why safe public wording must distinguish protocol truth, service truth, issuer truth, and optional audit overlays.

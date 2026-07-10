---
title: "Terminology"
description: "Beginner glossary for Z00Z terms, abbreviations, object names, role names, and public-claim boundaries."
difficulty: basic
icon: mdi:alphabet-a-box-outline
toc: true
---

# Terminology

> [!note]
> **Use this page when:** You want stable definitions before you read protocol,
> developer, security, or legal pages.

Z00Z becomes confusing fast if you translate every unfamiliar word back into
public-account language. This page exists to stop that drift early. It does not
replace the full terminology reference. It gives you a beginner-friendly
structure for the words you will meet repeatedly, grouped by concept family
instead of by alphabet alone.

The point is not to memorize a glossary for its own sake. The point is to make
later pages readable. If you can keep the difference between object terms,
settlement terms, privacy terms, network terms, governance terms, legal terms,
and maturity terms, you can follow the corpus without constantly flattening it
into the wrong mental model.

## Object Terms

Asset
: A final-value object in the Z00Z model. It represents clean value, not a
public account balance.

Voucher
: A conditional-value object. It can be fully backed and meaningful without
becoming the same thing as final cash.

Right
: An authority object without inherent value. Rights matter because Z00Z is not
only about coins; it also wants to move bounded authority safely.

Payment request
: A receiver-led request surface that lets the receiver define how a payment
should be accepted or constrained.

Evidence object
: The proof-bearing or receipt-like artifact that helps explain why a transition
or state claim should be trusted.

These terms matter together because Z00Z does not tell one story about "money"
and then tack on rights later. The corpus is trying to define a broader object
language in which value, authority, request flows, and evidence can stay
separate when they should stay separate.

## Settlement Terms

Checkpoint
: The validation boundary that turns ordered publication into final, replay-safe
settlement.

Settlement evidence
: The public roots, deltas, proofs, and references that let observers verify a
settled transition.

TxPackage
: A wallet-side package for transfer or claim preparation. It is not final
settlement by itself.

Nullifier
: An anti-replay artifact. It belongs to replay safety, not to a generic idea
of "spentness."

Soft confirmation
: A signal that something entered the path toward settlement without yet
becoming final truth.

These are the terms that keep Z00Z from collapsing into a simple publication
story. The system is interested in when a candidate transition becomes safe,
shared, and final, not only in when it was first sent.

## Privacy Terms

Wallet-local possession
: The rule that ownership material and transfer preparation stay in the wallet
until publication becomes necessary.

Selective disclosure
: A scoped disclosure capability that can reveal information to a defined party
without turning the whole protocol into a surveillance surface.

Privacy budget
: The practical idea that privacy can be spent through behavior, timing,
metadata, repeated counterparties, and disclosure choices.

Leakage
: Any signal that lets observers learn more than the narrow settlement surface
should reveal.

These terms are important because the privacy claim in Z00Z is structural, not
magical. The system does not promise that every action is invisible. It tries to
limit what becomes public by default and warn readers about the ways privacy can
still be weakened by design or behavior.

## Network Terms

Publication
: The act of moving bounded artifacts toward shared validation and settlement.

Validator
: A role that verifies whether candidate artifacts satisfy protocol rules.

Watcher
: A role that observes and reports evidence, inconsistencies, or challenge
surfaces without replacing settlement authority.

Data availability
: The layer that keeps required published data reachable for later validation or
evidence review.

Checkpoint anchor
: The public reference that helps make a checkpoint auditable and replay safe.

These terms matter because the network is not just a blob of "nodes." Different
roles carry different authority and different visibility.

## Governance, Legal, And Maturity Terms

Steward
: A foundation, team, or bounded coordinating body that may maintain work but
must not be confused with the protocol itself.

Issuer
: An external party responsible for asset-backed or rights-backed claims above
the core protocol.

Target architecture
: A corpus-defined intended system shape that should not be described as already
shipped.

Open research
: A lane where important questions remain unsettled or still require validation.

Public-claim boundary
: The rule that words matter. A technically ambitious design still needs safe,
accurate phrasing.

These terms protect readers from a different kind of confusion: not technical
confusion, but responsibility confusion. They stop protocol claims from turning
into operator claims, and roadmap language from turning into present-tense fact.

## How Terminology Maps To Responsibility

Vocabulary is also a responsibility map. When you say "protocol," you should not
quietly mean "wallet company," "issuer," or "operator." When you say "disclosure,"
you should not quietly mean that the core protocol always knows private state.
When you say "asset," you should not quietly mean "any promise made by any
service layer." The legal and architecture papers care about terminology because
bad nouns create bad responsibility claims.

This is why the docs keep separate terms even when a looser product language
might feel easier. Precision lets the reader ask better questions. Who owns the
claim? Who holds the evidence? Who can validate it? Who can challenge it? Who
is merely a service layer above the core? The terminology does real work.

## Do Not Confuse These Pairs

| Do not confuse | Why the distinction matters |
| --- | --- |
| Asset vs right | One carries value; the other carries authority. |
| Voucher vs right | A voucher can encode conditional value; a right grants bounded action or control. |
| Data availability vs settlement | Being publicly reachable is not the same as being final truth. |
| Privacy vs anonymity | Narrow visibility and scoped evidence are not the same as claiming total untraceability. |
| Watcher vs validator | Watchers observe and report; validators decide rule compliance. |
| Publication vs checkpoint | Publication starts a shared path; checkpoint closes it into settlement. |

## How To Read New Terms Safely

When you meet a new term, ask three questions:

1. Is this a protocol term, a service term, or a maturity term?
2. Does it change what the wallet knows, what the network knows, or what the
   public can verify?
3. Is the corpus describing this as live evidence, target architecture, or open
   research?

Those questions will keep you aligned even before you learn the entire
terminology inventory.

## Abbreviation Posture

The corpus allows abbreviations such as `PQ`, `DA`, `TxPackage`, and
`AssetLeaf` because they compress recurring technical meaning. It does not use
abbreviations as a way to hide ambiguity. A good rule for new readers is to use
the full phrase once, then accept the shorter term once the concept is clear.
That keeps docs readable without weakening the architecture.

## Why Beginners Should Not Fear The Glossary

A good glossary is not academic overhead. It is a speed tool. Once the key terms
stop shifting under your feet, the rest of the docs become easier to read and
argue about. Precision at the vocabulary layer saves time later in protocol,
developer, security, and legal discussions.

That is why this page stays close to everyday reading needs. It is meant to make
later pages easier to trust, not harder to enter.
The glossary is there to lower friction, not to raise it.
Clear words are one of the cheapest forms of technical leverage.
They keep readers aligned before deeper disagreement starts.
That alignment compounds across the corpus.

## Read Next

- Read [Live Versus Target Architecture](/docs/learn/live-vs-target) if you now
  want the maturity labels that go with this vocabulary.
- Read [Main Whitepaper](/docs/learn/main-whitepaper) if you want to see these
  terms in the main thesis document.
- Jump into [Protocol](/docs/protocol) once the nouns on this page feel stable.

## Evidence and Further Reading

- `content/whitepapers/Corpus-Terminology-Reference.md` sections 3 through 6 and
  section 8 are the primary authority for the term families, abbreviations, and
  cross-paper ownership model used here.
- `content/whitepapers/Main-Whitepaper.md` appendix A and sections 3 through 6
  show how object, settlement, privacy, and disclosure terms behave in the core
  protocol thesis.
- `content/whitepapers/Uniqueness.md` sections 4 and 5 show why naming precision
  changes the public category claim instead of acting as mere glossary polish.

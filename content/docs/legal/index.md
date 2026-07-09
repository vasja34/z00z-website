---
title: "Legal"
description: "Legal and public-claims hub for protocol neutrality, disclosures, terms, privacy policy, claim boundaries, and independent service responsibilities."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Legal

> [!warning]
> **Maturity:** `Drafted legal architecture + site legal target`
>
> **Reading rule:** This section explains the legal and communications boundary the corpus supports. It is not legal advice, and it should not be used to imply that every site policy, issuer flow, or service overlay is already finalized.

The Legal section exists because the Z00Z corpus treats legal posture as part of architecture, not as a marketing afterthought. The whitepapers repeatedly separate the protocol itself from the people and services that may build around it. That separation matters for communications, diligence, wallet design, token disclosures, issuer boundaries, and site policy language. If the project says the wrong thing about control, custody, compliance, or guarantees, the technical architecture will not save the narrative.

## The Boundary This Section Protects

| Layer | What belongs there | What must stay out |
| --- | --- | --- |
| Protocol | Private objects, checkpointed settlement, replay-safe evidence, and neutral validation rules. | Hosted custody, official listings, public balance surveillance, or discretionary operating promises. |
| Steward or foundation | Documentation, maintenance, limited governance process, and boundary-setting policy. | Acting like an exchange, redemption desk, asset sponsor, or universal compliance oracle. |
| Site policy | Terms, privacy disclosures, claim hygiene, and warnings about what readers should not infer. | Statements that turn architecture papers into legal guarantees or production certifications. |
| Third-party services | Wallet UX, issuers, bridges, compliance overlays, auditors, or local operators. | Silent redefinition of protocol guarantees or implicit endorsement by the docs. |

This table is the reason the Legal section sits beside Learn, Protocol, and Developers instead of behind them. Readers should know early where the architecture stops and where independent actors begin.

## What You Will Find Here

| Page | What it does |
| --- | --- |
| [Legal Architecture](/docs/legal/architecture) | Explains the neutral-protocol thesis, steward limits, and the "do-not-operate" boundary in plain language. |
| [Legal Architecture Companion](/docs/legal/legal-architecture) | Connects the architecture paper to diligence questions, protocol semantics, and current-tree reader expectations. |
| [Terms Of Use](/docs/legal/terms) | States the minimum posture the public site should preserve around informational use, self-custody, and non-endorsement. |
| [Privacy Policy](/docs/legal/privacy) | Separates website or service-layer data handling from protocol privacy claims. |
| [Disclosures](/docs/legal/disclosures) | Normalizes the maturity, risk, token, issuer, and third-party-service disclaimers public pages should carry. |
| [Public Claim Boundaries](/docs/legal/public-claim-boundaries) | Gives the red-line rules for what Z00Z can and cannot safely claim in docs, decks, and partner materials. |

## How To Read The Legal Pages Safely

These pages are written for clarity, not for theater. They do not try to simulate a full jurisdiction-specific legal package inside a docs site. Instead, they provide the architectural and communications constraints that any later counsel-reviewed documents should preserve. That is why you will see explicit maturity labels, non-claim language, and repeated reminders that protocol behavior and service behavior are not the same thing.

The safest way to use this section is to combine it with the technical corpus:

- use the legal architecture pages when you need the control, stewardship, or service boundary;
- use Learn and Protocol when you need to confirm what the architecture actually claims;
- use this section before publishing a new public statement, not after the statement is already live.

## What This Section Does Not Do

This section does not tell a reader that Z00Z is licensed, approved, or compliant everywhere. It does not convert target architecture into present-tense guarantees. It does not make operational promises about third-party assets, stablecoins, bridges, or wallet services that the repo cannot prove. It keeps the narrative smaller than the temptation to oversell it, which is exactly what the corpus asks public docs to do.

## Evidence and Further Reading

- `content/whitepapers/Legal-Architecture.md` sections 3 through 5 and section 17 define the protocol minimalism covenant, stewardship boundary, and safe public-claim formulas that shape this hub.
- `content/whitepapers/Main-Whitepaper.md` sections 10 and 11 describe the protocol-versus-service boundary and the native-asset/ecosystem posture that the legal pages must preserve.
- `content/whitepapers/Privacy-Threat-Model.md` section 9 helps separate protocol privacy posture from disclosure and audit layers above the core.

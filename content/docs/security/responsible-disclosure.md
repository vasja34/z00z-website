---
title: "Responsible Disclosure"
description: "How to report vulnerabilities, privacy failures, wallet issues, fraud vectors, supply-chain findings, and critical operational incidents."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Responsible Disclosure

> [!warning]
> **Maturity:** `Live disclosure discipline, but not a fully proven public reward or response program`
>
> **Use this page when:** You found a security, privacy, fraud, or supply-chain issue and need to report it without making things worse.

Responsible disclosure is not just a courtesy rule. In a privacy-focused system, careless reporting can increase harm before anyone has reproduced the issue. Publicly posting a wallet secret, a live exploit path, or a replayable proof artifact can turn an ordinary bug report into an active incident. This page exists to prevent that outcome.

## What Belongs In This Flow

Use the security disclosure path for findings such as:

- secret or recovery-material exposure;
- privacy-boundary failures that reveal more than the docs claim;
- authorization, replay, or value-validity bugs;
- supply-chain or build-tooling issues that could compromise published outputs;
- support scams, impersonation campaigns, or disclosure channels that ask users for forbidden data;
- fraud-trigger or external-service issues when public detail would help attackers before mitigation.

Do **not** use public issue threads for those cases.

## What To Avoid Immediately

Before sending anything, stop and avoid these common mistakes:

| Do not do this | Why it is dangerous |
| --- | --- |
| Post exploit steps in a public issue or chat | It can convert a limited bug into a wider incident |
| Paste seed phrases, recovery bundles, private keys, or raw wallet exports | Reviewers should never need them to validate ordinary reports |
| Send secrets to social DMs, moderators, or unofficial helpers | Private messaging is the easiest place for impersonation and data theft |
| Promise an impact level before reproducing the issue | Wrong severity language can create panic or false assurance |

If you already exposed sensitive material publicly, treat that as part of the incident and say so immediately.

## What A Good Report Should Include

A useful report does not need to be long. It needs to be reproducible and scoped.

At minimum, include:

1. the affected page, workflow, or subsystem;
2. the observed behavior;
3. the expected behavior;
4. the smallest reproduction path you know;
5. whether the issue affects confidentiality, authorization, value validity, liveness, or trust framing;
6. whether private user data or secrets were involved.

For docs and site issues in this repository, it is often enough to name the page path, the exact command run, and the visible result. For protocol-design or privacy-boundary issues, cite the relevant `content/whitepapers/` passage that appears to conflict with the observed behavior.

## Current Channel Discipline

This repository can prove the process rules more clearly than it can prove a staffed private inbox. That means the safe channel discipline must stay conservative:

- use public issue tracking only for non-sensitive docs, build, or content bugs;
- use [Support](/docs/support) for ordinary troubleshooting;
- use a project-controlled private route for security-sensitive findings whenever that route is explicitly published in live project materials;
- if no private security channel is currently published, request a secure route **without including the exploit details** in the public request.

That last rule is important. The absence of a public inbox is not permission to publish the exploit payload in the open.

## Severity Framing

Use severity language that matches what is actually at risk:

| Severity hint | Typical impact |
| --- | --- |
| Critical | Live theft, key compromise, forged authorization, or broadly weaponizable secret exposure |
| High | Significant privacy failure, replay bypass, major trust-boundary misrepresentation, or operator path that can cause serious user harm |
| Medium | Important but more bounded leakage, verification bypass in a narrower lane, or attack path requiring meaningful preconditions |
| Low | Hardening issue, minor docs-security drift, or defense-in-depth weakness without immediate exploit value |

If you are unsure, describe the facts first and let the triage process adjust the label.

## What This Page Does Not Promise

This repo snapshot does not prove a reward program, a bounty schedule, legal safe-harbor text, or a fixed response-time SLA. It also does not prove that every disclosure lane is staffed around the clock. What it does provide is the non-negotiable behavioral baseline: protect users first, keep exploit detail out of public threads, route ordinary support and sensitive security separately, and avoid sending secrets to anyone.

That is a real and useful contract even before a larger disclosure program is formalized.

## Related Pages

Open [Incident Response](/docs/security/incident-response) if the issue is already active or public. Open [Audits And Reviews](/docs/security/audits) if you want to understand what kind of evidence a future disclosure resolution should publish. Open [Contact](/docs/support/contact) only for non-sensitive routing questions; it is not a substitute for secure reporting.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the main source for why privacy failures, metadata leakage, and service-side disclosure surfaces need careful reporting boundaries.
- `content/whitepapers/Legal-Architecture.md` defines the steward-versus-service boundary, safe public wording, and the warning against implying hidden universal control or recovery powers.
- `content/whitepapers/Proof-of-Useful-Work.md` reinforces the broader project rule that evidence should be structured, challengeable, and narrower than social trust theater.
- `content/whitepapers/Main-Whitepaper.md` explains the wallet-local and checkpoint-bound boundaries that help determine whether an issue is ordinary support, security-sensitive disclosure, or a broader incident.

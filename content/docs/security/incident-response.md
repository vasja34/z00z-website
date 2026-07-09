---
title: "Incident Response"
description: "Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, and support scams."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Incident Response

> [!warning]
> **Maturity:** `Live incident-language baseline with broader operational closure still target work`
>
> **Use this page when:** A security, privacy, operator, or support-scam event may already be active and you need the safest next step.

Incident response is where overclaiming becomes most dangerous. In a calm moment, vague language only confuses readers. During an active incident, it can cause real harm: users may post secrets publicly, operators may report speculation as fact, and maintainers may imply a level of control or recovery power that the system does not actually have.

This page defines the conservative response model for the current docs surface. It does not claim that every future operator workflow, automation loop, or enterprise escalation lane is already live. It defines what can be said and done safely when something goes wrong.

## Severity Model

Use the smallest severity class that still captures the risk.

| Severity | Typical examples | Default priority |
| --- | --- | --- |
| Critical | Live theft path, exposed recovery secrets, forged authorization, or broadly exploitable integrity failure | Immediate containment and private coordination |
| High | Significant privacy degradation, reproducible replay or validation bypass, trusted-channel impersonation, or operator surface causing serious user harm | Urgent triage with user-protection messaging |
| Medium | Bounded leakage, denial-of-service risk, workflow confusion that could become harmful, or important but precondition-heavy flaws | Investigate promptly and narrow blast radius |
| Low | Hardening issue, minor docs-security drift, or low-probability misuse path with meaningful prerequisites | Queue, track, and fold into normal review work |

Severity is about consequence and exploitability, not about how dramatic the wording sounds.

## Ownership By Layer

Different incidents belong to different owners.

| Incident type | Primary owner | Why |
| --- | --- | --- |
| Docs or support-channel misinformation | Documentation and support maintainers | The public trust surface is the thing that failed |
| Wallet secret leakage or recovery confusion | User first, then wallet/support guidance | The protocol cannot reverse private key loss automatically |
| Privacy-boundary failure | Security and protocol reviewers | The visibility contract may have drifted |
| Operator publication or availability failure | Operators and incident coordinators | Liveness and observation surfaces need evidence and status discipline |
| External issuer, bridge, or custody failure | The external service operator first | Those duties remain outside native protocol guarantees |

This ownership map prevents one of the worst incident-response habits: assuming every serious problem must have the same responder or the same remediation path.

## First Actions For Users

If you suspect active user harm, the safest initial actions are simple:

1. stop sharing additional information;
2. do not send seed phrases, recovery bundles, or private exports to anyone;
3. preserve the smallest useful evidence set, such as screenshots of the public error, page URL, and the exact step that triggered it;
4. move security-sensitive reporting into the responsible-disclosure path;
5. treat social DMs, urgency pressure, and requests for remote access as hostile until independently verified.

These actions matter because many incidents in privacy systems involve confusion and impersonation before they involve protocol breakage.

## First Actions For Maintainers And Reviewers

Maintainers should default to evidence control and scope control:

- separate confirmed facts from hypotheses;
- decide whether the problem is public-safe to discuss;
- remove or correct misleading public copy quickly if the docs themselves widened the risk;
- preserve reproduction steps privately when public detail would increase exploitability;
- say which layer failed, not just that "there is an incident."

The legal corpus strongly supports this discipline. Public statements should remain factual, role-bounded, and free of implied hidden control powers.

## Communication Discipline

Incident communication should answer four questions in order:

1. What happened?
2. Which users or systems might be affected?
3. What should those readers do right now?
4. What is still unknown?

Anything beyond that should wait for evidence. This is especially important for privacy incidents. A message that promises "funds are safe" or "privacy is unaffected" before the right layer has been checked can become its own trust failure later.

## What This Repository Can Prove Today

The current repo can prove:

- the wording rules for how incidents should be described;
- the public docs paths where users will look for guidance;
- the repo-local verification flow for correcting misleading content quickly;
- the separation between support routing and security-sensitive disclosure.

The current repo does **not** prove:

- a fully staffed operations center;
- automatic reorg or publication repair for every operator lane;
- a universal recovery mechanism for lost user secrets;
- a single published channel that already covers every future incident class.

That is why this page emphasizes disciplined communication and user-protective behavior over heroic promises.

## After The Immediate Response

When the immediate risk is under control, the follow-up should include:

- what was confirmed;
- what changed in docs, tooling, or process;
- what remains a residual risk;
- whether the issue belongs in [Audits And Reviews](/docs/security/audits), [Privacy Metrics](/docs/security/privacy-metrics), or both.

An incident is only truly closed when the public explanation becomes more precise than it was before the incident.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` explains why timing, disclosure, transport, and service-layer failures can create real privacy incidents without changing the narrow settlement theorem.
- `content/whitepapers/Main-Whitepaper.md` distinguishes fail-closed settlement behavior from operator, availability, and recovery surfaces that remain narrower or less mature.
- `content/whitepapers/Legal-Architecture.md` provides the public-claim rules that incident communications should follow so they do not imply custody, hidden control, or stronger operational authority than exists.
- `content/docs/security/responsible-disclosure.md` and `content/docs/support/wallet-recovery-safety.md` provide the adjacent user and reporter actions that help keep incidents from widening.

---
title: "FAQ"
description: "Common questions about Z00Z category, privacy, settlement, wallets, tokens, use cases, and maturity."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# FAQ

> [!note]
> **Maturity:** `Live support FAQ grounded in the current repo and whitepaper corpus`
>
> **Use this page when:** You want short answers before going deeper into the docs or opening an issue.

## What is Z00Z in one sentence?

Z00Z is best described as a **privacy-preserving settlement protocol** with wallet-local ownership meaning, narrow public settlement evidence, and optional disclosure paths layered above that core. That is intentionally narrower than calling it a full service stack, an exchange, or a universal wallet platform.

## Is this repository the full protocol implementation?

No. This repository is a docs and site workspace. It proves the public documentation surface, the whitepaper corpus, the build and verification flow for the site, and the current wording of reader-facing claims. It does not by itself prove that every runtime subsystem discussed in the papers is already shipped here as local code.

## Does privacy mean no one can see anything?

No. The safe claim is limited public observability, not total invisibility. Public observers can still see checkpointed artifacts and timing surfaces. Operators and external services may still see workflow-specific information. The intended boundary is that private ownership meaning stays wallet-local where possible and disclosure stays scoped rather than universal.

## Is there an official wallet with managed recovery?

That is not the right mental model. The legal corpus prefers language such as **reference wallet** or **reference implementation** because it preserves the software-versus-service boundary. The current support posture should not imply hosted custody, staff-controlled recovery, or a hidden universal restore switch.

## If I lose my seed or backup, can the protocol restore my funds?

No. The current architecture treats recovery as wallet-side and operational, not as a protocol-side clawback power. If private recovery material is lost, the protocol does not magically reconstruct it from a public account table. That is why the safety rule against sharing or losing backups is so strict.

## How do I know whether a feature is live or still target architecture?

Read the page's visible `Maturity:` note and then check the evidence section. In this repo, mature wording should be tied either to repo-local files or to explicit `content/whitepapers/` citations. If the language sounds broader than the evidence, treat it cautiously and compare it with the security or developer pages.

## Where should I start if a local docs command fails?

Use [Troubleshooting](/docs/support/troubleshooting). The live repo commands are the ones defined in `package.json` and explained in `README.md`. For most contributor problems, the shortest reliable path is `npm ci`, then `npm run lint`, then `npm run verify`.

## Where should security bugs or privacy leaks be reported?

Do not post sensitive exploit details in ordinary public support threads. Use the security flow documented under [/docs/security](/docs/security), especially [Responsible Disclosure](/docs/security/responsible-disclosure). Public issues are for non-sensitive docs and repo problems, not for live exploit writeups or secret material.

## Does Z00Z endorse third-party issuers, bridges, or services?

Not by default. The legal architecture is explicit that third-party assets, overlays, issuers, and regulated services keep their own responsibilities. A docs mention, integration possibility, or ecosystem narrative does not magically turn an external service into a native protocol guarantee.

## Are audits already complete for every major surface?

That would be too broad a claim. The safer question is: which surface was reviewed, against what evidence, and with what residual risk left open? Use [Audits And Reviews](/docs/security/audits) to interpret current and future review claims without collapsing them into one reassuring label.

## Is Z00Z already end-to-end post-quantum secure?

No. The post-quantum paper is explicit that Z00Z is not end-to-end post-quantum secure today. What can be said more safely is that the system has a PQ-friendly settlement and storage boundary that makes migration more plausible, while authorization and confidential amount protection remain narrower and harder frontiers.

## Can I contribute without touching protocol code?

Yes. This repo already supports useful contributions in docs, navigation, search coverage, claim discipline, source alignment, and workflow correctness. A careful rewrite that removes overclaiming or improves safe user routing is meaningful protocol-adjacent work because it changes what readers believe the system can actually do.

## Where do I go next?

Go to [Troubleshooting](/docs/support/troubleshooting) for concrete command help, [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety) for secret-handling rules, [Developer Support](/docs/support/developer-support) for builder questions, or [/docs/security](/docs/security) if the issue may be sensitive.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines wallet-local possession, recovery limits, operator boundaries, and the current maturity line between live and target surfaces.
- `content/whitepapers/Privacy-Threat-Model.md` is the main source for limited public observability, observer-specific risk, and scoped disclosure language.
- `content/whitepapers/Post-Quantum-Migration.md` explains why the correct cryptographic claim today is narrower than "fully PQ secure."
- `content/whitepapers/Legal-Architecture.md` provides the safe public-claim formulas for self-custody, reference implementations, optional disclosure, and external-service responsibility.

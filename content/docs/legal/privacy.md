---
title: "Privacy Policy"
description: "Website privacy policy and service-layer data handling, distinct from protocol privacy claims."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# Privacy Policy

> [!warning]
> **Maturity:** `Site legal target`
>
> **Reading rule:** This page is about website and service-layer data handling. It must not be confused with the protocol-level privacy thesis described elsewhere in the corpus.

One of the easiest ways to overclaim privacy is to blur two different layers: the protocol's settlement privacy model and the ordinary data surface of a public website or support tool. The Z00Z corpus is clear that those are not the same thing. A protocol can minimize what becomes public settlement evidence while a website still collects logs, contact details, or support metadata. This page exists to keep those layers separate.

## What This Page Covers

This page should cover the data surface created by the site and any directly attached services such as contact forms, support channels, mailing tools, or analytics features. It should not imply that protocol-level privacy automatically hides website activity, nor should it imply that website operators can reconstruct private protocol settlement history from normal site data.

## Typical Site-Layer Data Categories

| Data category | Why it might exist | What the page should say |
| --- | --- | --- |
| Technical logs | Availability, abuse prevention, or security monitoring. | Keep the purpose narrow and avoid pretending logs do not exist if they do. |
| Direct user submissions | Contact forms, support requests, partnership outreach, or bug reports. | State that the user is intentionally providing the data and explain how it is handled. |
| Optional analytics or product telemetry | Understanding whether the docs experience works. | Only mention tools that are actually enabled, and avoid vague privacy-friendly branding in place of specifics. |
| Third-party embeds or service integrations | Forms, media, search, or community tooling. | Make it clear that these surfaces can create their own data relationship with the user. |

The safest rule is that the page should only promise what the actual deployment can prove. If a feature is not enabled, the page should not invent it. If a feature is enabled, the page should not hide it behind abstract wording.

## What Protocol Privacy Does Not Mean Here

Z00Z's protocol thesis focuses on wallet-local possession, narrow public evidence, replay-safe checkpoints, and selective disclosure boundaries. None of that means a website visitor leaves no ordinary web trace. A user who fills out a contact form, opens a support thread, or interacts with a hosted search tool is creating a different relationship than a user who reads a whitepaper offline.

That distinction protects both accuracy and trust. It lets the project say strong things about the protocol architecture without turning those statements into impossible promises about every site or service surface.

## User Expectations The Page Should Preserve

Readers should be able to tell:

- which site interactions are passive reading and which are active data submission;
- whether any third-party service can see their activity;
- where site policy ends and protocol privacy discussion begins;
- where to go when they need a service-specific or jurisdiction-specific privacy answer.

The page should also avoid absolute phrases such as "no one can ever see" or "complete anonymity." The legal and privacy papers both reject that style of language because it collapses architecture, operation, and disclosure into one slogan.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` sections 3, 4, 7, and 9 explain the protocol privacy scope, anti-patterns, wallet guidance, and selective disclosure boundary that this page must not overstate.
- `content/whitepapers/Legal-Architecture.md` sections 7, 8, 9, and 17 distinguish protocol privacy from service-layer retention, audit, and public-claim duties.
- `content/whitepapers/Main-Whitepaper.md` sections 5 and 6 define the wallet-local and selective-disclosure posture that belongs to the protocol layer, not to generic site operation.

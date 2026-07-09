---
title: "Wallet Recovery And Safety"
description: "User-facing wallet safety, backups, restore, seed phrase handling, phishing warnings, and support boundaries."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Wallet Recovery And Safety

> [!warning]
> **Maturity:** `Live safety boundary with broader wallet operations still dependent on the actual wallet implementation used`
>
> **Use this page when:** You are backing up, restoring, migrating, or asking for help with a wallet and need the non-negotiable safety rules first.

Wallet recovery is the highest-risk support topic because users are under stress precisely when attackers become most convincing. A recovery page must therefore be stricter than a normal help page. The first goal is not convenience. The first goal is to stop users from giving away the one piece of information that no honest support path should ever need.

## Non-Negotiable Rules

These rules are absolute:

- never share a seed phrase, private key, wallet export, recovery bundle, or full decrypted backup;
- never enter recovery material into a page, form, or chat window you reached through a DM;
- never install remote-access tools for "wallet help";
- never assume someone from the project can restore control without your backup material.

If any support interaction asks for those things, treat it as hostile until proven otherwise.

## What Recovery Means In Z00Z

The architecture described in the corpus is self-custodial. That means the wallet, not a public account table, is the place where private ownership meaning and recovery state live. The whitepapers explicitly warn against implying a hidden universal recovery switch. In practical terms, that means recovery depends on the user's own backup, derivation state, and secret material. The protocol does not recreate lost private control just because it stores public settlement evidence.

That is why recovery language has to stay honest. A privacy-preserving wallet can reduce public exposure and still leave users fully responsible for the safety of their own secret material.

## Safe Recovery Checklist

Before restoring, importing, or migrating a wallet, stop and verify:

| Check | Why it matters |
| --- | --- |
| You are using a trusted wallet build or reference path | Fake restore tools are common attack surfaces |
| You know exactly which backup or seed you are using | Mixing old, partial, or copied material creates avoidable confusion |
| The recovery step is happening on a device you trust | Endpoint compromise defeats protocol-level privacy claims |
| You have not posted screenshots or copied secrets into chat tools | Many leaks happen before the restore even starts |
| You know which support path you will use if something fails | Panic causes users to widen disclosure too quickly |

If any of those checks fails, pause before continuing.

## What Support Can And Cannot Ask For

Legitimate support may ask for:

- wallet app version;
- operating system or device type;
- the exact public-facing error text;
- whether the problem happened during backup, restore, or normal use;
- whether the issue affects one device or several.

Legitimate support should **not** ask for:

- seed phrases or recovery words;
- private keys;
- full wallet export files;
- screenshots showing the secret itself;
- raw clipboard dumps;
- remote control of your device just to "verify" ownership.

That distinction is the most important practical defense most users have.

## When To Stop And Escalate

Stop normal support and switch to the security path if:

- someone asks you for secret recovery material;
- a fake or unofficial channel claims guaranteed recovery;
- you suspect your seed or backup has already been exposed;
- the restore flow reveals more information than expected;
- a support request is pressuring you to bypass the normal safety rules.

At that point, treat the problem as an incident, not merely as a usability issue.

## What This Repo Can Prove

This repository can prove the safety rules and the wording boundary. It can cite the corpus that says wallet recovery is wallet-side, that public settlement is not the same as private ownership meaning, and that no official material should imply a hidden rescue backdoor. It cannot prove the full behavior of every wallet implementation a user might encounter elsewhere. That is why the advice here focuses on universally safe behavior rather than on pretending this repo is a live wallet helpdesk.

## The Most Important Recovery Truth

The project is safer when users understand one uncomfortable fact early: **privacy does not remove the need for careful backup hygiene, and self-custody does not come with guaranteed staff recovery**. Once that fact is accepted, the rest of the support model becomes much clearer. Good support helps users preserve control. Bad support teaches them to surrender it.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` explains wallet-local possession, recovery state, and why private ownership cannot be reconstructed from a public balance table.
- `content/whitepapers/Privacy-Threat-Model.md` describes how endpoint compromise, disclosure reuse, and support-channel mistakes can create privacy loss even when the base protocol boundary remains narrower.
- `content/whitepapers/Smart-Cash.md` reinforces the wallet-local and bounded-rights framing that makes self-custodial recovery discipline essential.
- `content/whitepapers/Legal-Architecture.md` explicitly rejects hosted or recovery-custodial posture and warns against implying a hidden universal recovery switch.

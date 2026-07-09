---
title: "Developers"
description: "Builder hub for the Z00Z docs repo, whitepaper corpus, contributor workflows, and implementation boundaries."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Developers

> [!note]
> **Maturity:** `Live docs site + whitepaper-grounded builder map`
>
> **Use this page when:** You need to understand what this repository can prove directly, what it only describes conceptually, and where to start as a contributor or integrator.

The most important fact about the Z00Z developer docs is also the easiest one to miss: **this repository is a documentation and delivery surface, not the full protocol runtime**. That is not a limitation to hide. It is the boundary that makes the rest of the builder guidance credible. You can verify the docs pipeline, the navigation model, the whitepaper corpus, the contributor workflows, and the content rendering stack here. You should not pretend that every runtime crate, wallet service, node process, or transport adapter already lives in this tree just because the broader protocol design describes them.

This section is therefore written as a builder hub, not as a fake monorepo index. It helps three kinds of readers. First, contributors who need to change the docs site itself can find the repo structure, verification commands, and authoring rules that are live now. Second, protocol and wallet builders can use these pages as a whitepaper-grounded vocabulary map before they touch implementation work elsewhere. Third, AI coding agents can understand which local artifacts are authoritative in this repo and which claims must stay explicitly conceptual.

## What This Repository Can Prove

Use the current tree as evidence for these questions:

| Question | Where to verify it here |
| --- | --- |
| How the docs site is routed and rendered | `src/app/`, `src/lib/content/markdown.ts`, `content/docs/` |
| Which whitepapers define the current protocol vocabulary | `content/whitepapers/` |
| Which verification commands are part of the normal site workflow | `package.json`, `scripts/verify.sh` |
| Which contributor and agent rules are active in this repo | `.github/copilot-instructions.md`, `.github/skills/`, `.github/prompts/` |
| Which documentation pages are live in the navigation tree | `content/docs/**/_meta.yaml` |

Use the whitepaper corpus as evidence for these questions:

| Question | Why the answer is conceptual here |
| --- | --- |
| What `AssetLeaf`, `TxPackage`, checkpoints, and wallet-local possession mean | Those are protocol concepts described in the corpus, not runtime APIs exported by this repo |
| How payment requests, rights, vouchers, or smart cash should behave | The design is documented here, but the full service surface is not implemented in this tree |
| How operator roles, bridges, or full runtime services compose | The target architecture exists in the papers, while this repo mainly exposes the explanatory surface |

That distinction keeps the docs honest. A contributor can still do valuable work here: tighten protocol language, improve diagrams, align pages with the source corpus, and verify that the docs product itself builds and navigates correctly.

## Recommended Reading Order

Start with the page that matches the question you actually have:

1. [Get Started](/docs/developers/get-started) if you need the local command path for this repo.
2. [AI Agent Playbook](/docs/developers/ai-agent-playbook) if you are using an assistant-driven workflow and need the local safety rules first.
3. [Rust Workspace](/docs/developers/workspace) if you need the repo structure and content pipeline boundaries.
4. [Core Protocol API](/docs/developers/core) if you need the protocol object vocabulary before implementation work.
5. [Crypto Facade](/docs/developers/crypto), [Wallet SDK](/docs/developers/wallet), [Payment Requests And Receiver Intents](/docs/developers/payment-requests), and [RPC Transport](/docs/developers/rpc) if you are mapping a specific subsystem.

The later pages in this developer family do not all describe live code in this repository. They instead stabilize terminology and integration expectations so that future implementation work does not drift away from the protocol papers.

## Builder Tasks This Hub Supports

| Task | Best page to open first | What you can validate locally |
| --- | --- | --- |
| Fix docs copy, links, or page structure | [Get Started](/docs/developers/get-started) | Lint, search coverage, and build |
| Change Markdown behavior or authoring patterns | [Rust Workspace](/docs/developers/workspace) | `src/lib/content/markdown.ts` and current content files |
| Clarify protocol object language | [Core Protocol API](/docs/developers/core) | Whitepaper alignment and docs navigation |
| Review privacy or cryptography wording | [Crypto Facade](/docs/developers/crypto) | Corpus citations and local instruction surfaces |
| Design wallet or request UX copy | [Wallet SDK](/docs/developers/wallet) and [Payment Requests And Receiver Intents](/docs/developers/payment-requests) | Current docs pages, diagrams, and terminology |
| Explain transport boundaries without overclaiming runtime status | [RPC Transport](/docs/developers/rpc) | Whitepaper and docs-site evidence |

This is why the developer section is useful even before every downstream runtime page is complete. It gives contributors a stable map of what can be asserted now.

## Repo-Local Surfaces Worth Knowing

The local structure matters because Z00Z documentation work is not just prose editing.

| Surface | Why builders use it |
| --- | --- |
| `content/docs/` | Human-facing documentation source files |
| `content/whitepapers/` | Canonical protocol corpus for terms, boundaries, and maturity framing |
| `src/app/` | Next.js App Router entry points for the site |
| `src/lib/content/markdown.ts` | Markdown rendering pipeline, including Mermaid support and content plugins |
| `config/` | Project-level configuration that shapes the site |
| `public/` | Runtime-served assets |
| `scripts/verify.sh` | The repo's bundled verification sequence |
| `.github/` | Prompts, skills, agent rules, and workflow instructions used during docs work |

If you remember only one operating rule, remember this one: **local paths justify local claims, and the whitepaper corpus justifies conceptual claims**. When a statement belongs to neither category, it probably needs to be rewritten or removed.

## When To Escalate Beyond This Repo

You should step outside this repository only when the task itself demands implementation evidence that is not present here. For example, if you need a production wallet API signature, a concrete node transport contract, or proof that an operator pipeline already exists in running code, this docs repo cannot honestly provide that. In those cases the correct move is not to invent detail. The correct move is to keep the page explicit about maturity and cite the whitepaper design language that exists today.

That approach is not less technical. It is more disciplined. Z00Z is building a privacy-first system where terminology, authority boundaries, and public-claim discipline matter as much as code samples. A contributor who keeps those boundaries sharp is doing protocol work, not just editing copy.

## Read Next

Go to [Get Started](/docs/developers/get-started) for the local command path, or jump to [Core Protocol API](/docs/developers/core) if you already know the repo workflow and need the protocol object model first.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` sections 1, 2, 3, and 10 define the protocol thesis, wallet-local possession boundary, settlement-notary model, and protocol-versus-service separation used across this developer hub.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the naming authority for `AssetLeaf`, `TxPackage`, `PaymentRequest`, `ReceiverCard`, settlement evidence, and related terms referenced throughout this section.
- `package.json` and `scripts/verify.sh` define the current repo verification surface that builder pages may describe as live.
- `src/lib/content/markdown.ts` and `content/docs/` show that this repository is a real docs product with its own rendering, content, and verification boundaries.

---
title: "Payment Requests And Receiver Intents"
description: "Builder guide to receiver cards, payment requests, validation posture, and request-scoped handoff flows."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Payment Requests And Receiver Intents

> [!warning]
> **Maturity:** `Live protocol request vocabulary + target integration detail`
>
> **Use this page when:** You need to design or document receive flows without turning Z00Z requests into account-style payment addresses.

Payment requests are where many builders are tempted to flatten Z00Z back into familiar patterns. A merchant wants a QR flow, an app wants a shareable request, or a wallet wants a "receive" button, and the easiest habit is to imagine a stable public address plus an amount. Z00Z takes a narrower path. The request layer is supposed to preserve a receiver-native, privacy-aware handoff model instead of recreating a reusable public account surface.

That is why this page focuses on intent and boundary first. In Z00Z, a payment request is not ownership itself. It is a scoped object that helps a sender and receiver coordinate a transfer without turning the receiver into a public balance identity.

## Receiver Card Versus Payment Request

The two most important objects are related but not identical:

| Object | What it does | What it is not |
| --- | --- | --- |
| `ReceiverCard` | Supplies receiver-facing routing and approval input for a receive flow | A permanent public account address |
| `PaymentRequest` | Packages receive intent, parameters, and handoff context for a specific transfer scenario | Final settlement proof or settled ownership |

Keeping those objects distinct matters because it shapes validation, UI, and replay expectations. A request can be checked, displayed, rejected, expired, or scoped without being confused for the final public record of value.

## A Builder-Friendly Flow

The corpus implies a disciplined request flow:

1. The receiver prepares request material suitable for a specific handoff.
2. The sender interprets the request, constructs a compatible package, and preserves the wallet-side privacy model.
3. The receiver validates the request context and later recognizes the incoming object locally.
4. Public settlement evidence appears only when publication and checkpointing happen.

This sequence is why request docs should talk about **coordination** and **validation posture**, not just "send funds to this destination." The request helps align the parties before final settlement exists.

## Validation Questions That Matter

When you design request handling, the first questions should be these:

| Question | Why it matters |
| --- | --- |
| Is the request scoped enough to avoid behaving like a reusable account identifier? | Prevents privacy drift |
| What part of the request can be validated locally before publication? | Keeps wallet-side checks useful and explicit |
| What warnings should the UI surface about trust and context? | A request can be well-formed without guaranteeing business honesty |
| What expires, what can be replayed, and what must be bound to later settlement evidence? | Prevents handoff convenience from weakening replay safety |

These questions are more important than whether the request arrives as a QR code, a deep link, or an API payload. Transport can vary. The semantic contract should not.

## Why Linked Liability Still Matters Here

Request flows are not only about privacy and convenience. They also shape accountability. A scoped receive intent can later interact with dispute, liability, or fraud logic without forcing the protocol to publish a public account graph. That is one reason the broader Z00Z corpus links payment semantics to concepts such as linked liability and bounded reveal paths. Builders should keep that in mind when they write validation or recovery copy. A request should feel light to the user, but it still lives inside a disciplined settlement system.

## What Not To Assume

Avoid these shortcuts when documenting or implementing request flows:

| Shortcut | Why it breaks the model |
| --- | --- |
| Treat the request as the user's public identity | Z00Z aims for scoped receiver coordination, not permanent exposure |
| Treat validation as equivalent to settlement | A valid request can still be pre-final and wallet-side |
| Treat transport as the trust boundary | Trust, replay, and finality are broader than message delivery |
| Treat every request as interchangeable with every asset or right family | Different object families can impose different policies and semantics |

A request layer that ignores those limits may still be ergonomic, but it will stop being distinctly Z00Z.

## Current-Repo Usefulness

This repository helps with request-flow work in three concrete ways:

1. It gives you the canonical vocabulary and maturity framing in `content/whitepapers/`.
2. It gives you reader-facing pages where the request model must stay consistent across docs.
3. It lets you verify that diagrams, explanations, and navigation still build cleanly through the docs product.

That is enough to improve the request experience honestly, even without claiming a complete local integration stack.

## Read Next

Continue to [RPC Transport](/docs/developers/rpc) if you need the message-delivery boundary next, or return to [Wallet SDK](/docs/developers/wallet) if the bigger question is still the wallet-side possession model.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines `ReceiverCard`, `PaymentRequest`, wallet-local possession, and the pre-checkpoint handoff model used on this page.
- `content/whitepapers/Smart-Cash.md` explains why cash-like receive flows depend on private object handling rather than a public account ledger.
- `content/whitepapers/Linked-Liability.md` gives context for why receive flows, validation posture, and bounded accountability should stay compatible.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes the request, receiver, and settlement nouns referenced here.

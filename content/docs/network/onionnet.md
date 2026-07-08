---
title: "OnionNet"
description: "Anonymous ingress target: deterministic active-set, client-owned route construction, replay durability, and runtime-bound handoff."
toc: true
---
# OnionNet
> [!warning]
> **Docs route:** `/docs/network/onionnet`
>
> **Target site route:** `/network/onionnet`
>
> **Maturity:** `Reserved boundary`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Anonymous ingress target: deterministic active-set, client-owned route construction, replay durability, and runtime-bound handoff.

When
: Used when discussing network privacy, ingress metadata, route ownership, or transport anonymity.

Where
: Network and Security.

Who
: Network engineers, privacy researchers, wallet SDK authors, and reviewers.

Why
: Z00Z state privacy and transport anonymity are separate; the site must not overclaim production OnionNet.

How
: Mark crate as placeholder, then document target modules: config, identity, bootstrap, transport, link crypto, packet, route, session, bridge, edge, relay, exit, telemetry.

## Reader Lenses

::: tabs

@tab:active Purpose
Anonymous ingress target: deterministic active-set, client-owned route construction, replay durability, and runtime-bound handoff.

@tab Audience
Primary readers: Network engineers, privacy researchers, wallet SDK authors, and reviewers.

@tab Delivery
Mark crate as placeholder, then document target modules: config, identity, bootstrap, transport, link crypto, packet, route, session, bridge, edge, relay, exit, telemetry.

:::

## Section Lens

Source
: runtime service crates, rollup-node surfaces, OnionNet paper, multi-DA paper, watcher code, and telemetry docs.

Message
: operator roles, publication layers, observation data, and settlement authority are separate layers.

UX
: an operator-oriented control-plane guide with status cards, failure-state tables, and links to support runbooks.

Include
: role diagrams, health signals, config surfaces, provider lifecycle, alert semantics, and privacy-safe explorer rules.

Avoid
: implying observability equals consensus truth or exposing wallet/private meaning through explorer labels.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Network](/docs/network) | Parent hub and primary context for this page. |
| [Data Infrastructure](/docs/network/data-infrastructure) | Previous page in the same section order. |
| [Data Availability](/docs/network/data-availability) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-OnionNet-Whitepaper.md, crates/z00z_networks/onionnet/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++

---
goal: "Z00Z Website phased implementation plan"
version: "1.0"
date_created: "2026-07-08"
last_updated: "2026-07-08"
owner: "Z00Z Website"
status: "Planned"
tags:
  - architecture
  - nextjs
  - content
  - multi-domain
  - vercel
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This plan decomposes `docs/Z00Z_Website-Spec.md` into executable implementation phases for `z00z-website`. The target product is a single Next.js App Router application that serves multiple Z00Z public domains through one shared shell, one domain registry, one content pipeline, one curated theme system, and one Vercel deployment model.

This plan treats `docs/z00z_website-design.html` as the current docs information-architecture scaffold and reference map. It is source evidence for navigation/content planning, not a production template to copy wholesale.

## 1. Requirements & Constraints

- **REQ-001**: The application shall use `src/app/` as the only App Router source root.
- **REQ-002**: The application shall provide one shared shell for `docs`, `wiki`, `explorer`, `network`, `tools`, `aggregators`, `validators`, `watchers`, and `wallet`.
- **REQ-003**: The application shall preserve editor-owned content under `content/`.
- **REQ-004**: The application shall preserve human-editable configuration under `config/`.
- **REQ-005**: Standard `.md` and trusted `.html` pages shall render without adding new route files.
- **REQ-006**: `_meta.yaml` files shall control folder labels, ordering, collapsed state, icons, visibility, and optional landing-page behavior.
- **REQ-007**: Explicit `page.tsx` app routes shall render inside the shared shell and take precedence over file-backed content on collisions.
- **REQ-008**: The domain switcher shall expose all initial domains, keep the current domain visible, preserve equivalent paths when possible, and fall back to domain home paths.
- **REQ-009**: The left navigation shall be collapsible on desktop and drawer-based on tablet and mobile.
- **REQ-010**: The right rail shall render table-of-contents content only where the domain, page, and viewport support it.
- **REQ-011**: The search entry point shall be available from every domain and default to current-domain scope.
- **REQ-012**: The theme system shall use curated presets from YAML and shall not expose the entire upstream daisyUI catalog.
- **REQ-013**: Theme selection shall persist across reloads and domain switches.
- **REQ-014**: The content renderer shall be `mdit-plugins` first, with `markdown-it` as the parser engine and fallback plugin ecosystem.
- **REQ-015**: Config validation shall fail fast with file path, offending key, and human-readable error text.
- **REQ-016**: Public pages shall define intentional metadata derived from frontmatter, domain config, and site config.
- **REQ-017**: Vercel Preview deployments shall be used as release gates before Production deployment.
- **REQ-018**: Optional `.mdx` support shall remain disabled until a controlled component map and engineer-owned page policy are implemented.
- **SEC-001**: Raw HTML embedded inside Markdown shall be disabled by default until a reviewed sanitization strategy exists.
- **SEC-002**: Trusted `.html` pages shall remove scripts and inline event handlers by default.
- **SEC-003**: `include` and `snippet` features shall be confined to approved content roots and shall reject path traversal.
- **SEC-004**: No secret shall be exposed through `NEXT_PUBLIC_*`; only intentionally public values may use that prefix.
- **SEC-005**: Search snippets shall escape or sanitize matched content before returning it to the browser.
- **CON-001**: Repository artifacts, code, comments, and technical docs shall be written in English.
- **CON-002**: React and TypeScript source shall not be placed under `public/`.
- **CON-003**: Existing Ecme-derived assets under `public/assets/` and `.temp/website_2025-09-30/` are migration/reference material, not canonical production source.
- **CON-004**: Server Components are the default for routes, layouts, content rendering, metadata, and file-backed data access.
- **CON-005**: Client Components are allowed only for browser APIs, interactive state, focus management, drawers, menus, search modal UI, and theme persistence.
- **CON-006**: The initial implementation shall use path prefixes in local development, such as `/docs`, `/wiki`, and `/explorer`.
- **CON-007**: Production subdomain routing shall use current Next.js App Router `proxy.ts` conventions when host-based routing is implemented.
- **CON-008**: Routine content maintenance shall not require TypeScript edits.
- **CON-009**: Search vendor selection and analytics vendor selection are out of scope for the initial version; the implementation may add internal search and instrumentation decision points, but shall not commit to an external vendor without a separate decision.
- **CON-010**: Ecme-derived React components, hooks, utilities, and primitives adopted for production shall be migrated into canonical TypeScript source under `src/`; long-lived Ecme references shall live outside runtime app source.
- **GUD-001**: Prefer vertical slices that produce a working user-visible surface over horizontal implementation that cannot be used until late.
- **GUD-002**: Keep public claims grounded in repository source material, especially the Z00Z corpus and scaffold evidence.
- **GUD-003**: Keep the UI dense, technical, calm, and Z00Z-branded; avoid generic dashboard-template styling.
- **GUD-004**: Use `npm run verify` as the normal local validation gate.
- **GUD-005**: Use Vercel Preview URLs for stakeholder review and Production only after validation passes.

## 2. Current Baseline

| Area | Current state | Gap |
|------|---------------|-----|
| Next.js | `next@16.2.10`, App Router under `src/app/` | Multi-domain route group and host routing are not implemented |
| Root route | `src/app/page.tsx` redirects `/` to `/docs` | Root strategy must become explicit product behavior |
| Docs route | `src/app/docs/[[...slug]]/page.tsx` renders file-backed docs | Route is hardcoded to docs only |
| Docs layout | `src/app/docs/layout.tsx` uses `DocsShell` | Shell is docs-specific and not domain-generic |
| Config | `config/site.yaml`, `domains.yaml`, `themes.yaml`, `content-pipeline.yaml` exist | Schemas are narrow and only accept `docs` |
| Content | `content/docs/` has demo Markdown and HTML pages | Other domains do not have content roots |
| Parser | `src/lib/content/markdown.ts` supports many `mdit` plugins | Raw Markdown HTML is currently enabled; include/snippet path policy needs hardening |
| HTML rendering | `src/lib/content/html.ts` strips scripts and inline handlers, supports Shadow DOM style isolation | Sanitization policy needs explicit tests and stronger reporting |
| Theme | `ThemeRuntime` and `ThemeSwitcher` persist daisyUI themes | `z00z-dark` custom preset is not implemented |
| Navigation | Folder tree generation exists for docs | `_meta.yaml` contract is partial; icons, collapsed state, visibility, and domain modes are missing |
| Search | No active search route exists in `src/app/api/search` | Search must be rebuilt from `.temp` concept with stronger typing and sanitization |
| Tests | No test runner is configured beyond lint/build | Unit, integration, E2E, accessibility, and security checks need phased setup |
| Deployment | No Vercel project config is committed | Vercel project, env strategy, preview gates, domain mapping, and monitoring need definition |

## 3. Implementation Principles

- **IMP-001**: Implement the product as one platform with domain-specific configuration, not as nine disconnected apps.
- **IMP-002**: Generalize current docs code only after preserving the existing `/docs` demo route behavior.
- **IMP-003**: Use `docs/z00z_website-design.html` to seed `content/docs/` information architecture and page briefs.
- **IMP-004**: Keep shell source under `src/components/shell/`, navigation source under `src/components/navigation/`, config loading under `src/lib/config/`, domain logic under `src/lib/domains/`, content logic under `src/lib/content/`, search logic under `src/lib/search/`, and theme logic under `src/lib/theme/` or `src/components/theme/`.
- **IMP-005**: Use typed YAML schemas through `zod` and `yaml`; never let unvalidated YAML drive routing or rendering.
- **IMP-006**: Prefer server-rendered static content and generated metadata; use Route Handlers only where the browser needs dynamic querying or Vercel runtime behavior.
- **IMP-007**: Treat Vercel Preview deployment as a validation environment with separate environment variables from Production.

## 4. Phase Roadmap

### Phase 0: Baseline Hardening and Planning Sync

- **GOAL-000**: Establish a reliable baseline before broad architectural changes.
- **Depends on**: None.
- **Primary outcome**: Current docs demo remains buildable and documented as the starting point.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0001 | Run `npm run verify` and record failures in `.planning/STATE.md` or the active phase note before changing architecture. | | |
| TASK-0002 | Update `.planning/codebase/*.md` to reflect current `src/`, `content/`, and `config/` state if codebase maps are used by later GSD phases. | | |
| TASK-0003 | Add `docs/Z00Z_Website-Spec.md`, `docs/z00z_website-design.html`, `.temp/website_2025-09-30/USAGE.md`, and `.temp/website_2025-09-30/public/configs/navigation.config.yaml` to the phase context index. | | |
| TASK-0004 | Define a short implementation glossary in `.planning/STATE.md` for `Domain`, `DomainConfig`, `ContentRoot`, `Shell`, `ParserProfile`, `ThemePreset`, and `RouteStrategy`. | | |

**Implementation scheme**

1. Preserve the existing docs demo as the smoke-test surface.
2. Treat build failures as blockers before generalizing routes.
3. Record current gaps explicitly so later phases do not rediscover the same issues.

**Acceptance gate**

- `npm run lint` passes.
- `npm run build` passes or has a documented blocker with exact error text.
- Existing `/docs` route behavior is unchanged.

### Phase 1: Domain Registry and Config Foundation

- **GOAL-001**: Replace the docs-only config model with a typed multi-domain registry.
- **Depends on**: Phase 0.
- **Primary outcome**: All declared domains are represented in validated YAML and TypeScript types.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0101 | Replace `DocsDomainConfig` in `src/lib/config/site.ts` with `DomainId`, `DomainMode`, `RouteStrategy`, `CanvasVariant`, and `DomainConfig` schemas matching `docs/Z00Z_Website-Spec.md` Section 9.5. | | |
| TASK-0102 | Expand `config/domains.yaml` to include `docs`, `wiki`, `explorer`, `network`, `tools`, `aggregators`, `validators`, `watchers`, and `wallet`. | | |
| TASK-0103 | Add `hostnames`, `mode`, `content_root`, `default_theme`, `allowed_themes`, `default_canvas`, `show_toc`, and `route_strategy` fields to each domain. | | |
| TASK-0104 | Add `getDomains()`, `getDomainById(id)`, `getDomainByPath(pathname)`, `getDomainByHost(hostname)`, and `getDefaultDomain()` in `src/lib/domains/registry.ts`. | | |
| TASK-0105 | Validate `default_theme` and `allowed_themes` against `config/themes.yaml` during registry load. | | |
| TASK-0106 | Update `config/site.yaml` with production-safe brand metadata, canonical base URL placeholders, and metadata defaults. | | |

**Implementation scheme**

1. Keep `src/lib/config/site.ts` responsible for low-level YAML parsing and clear validation errors.
2. Move domain-specific lookup behavior into `src/lib/domains/registry.ts`.
3. Keep YAML key names snake_case and convert only at TypeScript boundaries when needed.
4. Define all nine domains immediately, even if content/app surfaces are added gradually.

**Acceptance gate**

- Invalid `config/domains.yaml` produces a build-time error that names the file and key path.
- `getDomains()` returns exactly nine domains.
- `/docs` still resolves through the existing docs content root.
- A test fixture can resolve `docs.z00z.io` to `docs` and local `/docs/...` to `docs`.

### Phase 2: Shared Shell Refactor

- **GOAL-002**: Convert `DocsShell` into a domain-aware shared shell without losing current docs behavior.
- **Depends on**: Phase 1.
- **Primary outcome**: One shell supports domain switcher, theme switcher, desktop sidebar, mobile drawer, content canvas, and optional right rail.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0201 | Create `src/components/shell/AppShell.tsx` as the shared shell server wrapper. | | |
| TASK-0202 | Create narrow client islands: `src/components/shell/DomainSwitcher.tsx`, `src/components/navigation/SidebarController.tsx`, `src/components/navigation/MobileNavDrawer.tsx`, and `src/components/search/SearchLauncher.tsx`. | | |
| TASK-0203 | Move navigation rendering from `src/components/docs/DocsShell.tsx` into `src/components/navigation/NavigationTree.tsx`. | | |
| TASK-0204 | Keep collapse persistence under a domain-neutral key, such as `z00z-shell-sidebar-collapsed`. | | |
| TASK-0205 | Replace text-only menu buttons with accessible icon or icon-plus-label controls where the active UI library supports them. | | |
| TASK-0206 | Implement `content`, `wide`, and `app` canvas variants from domain config. | | |
| TASK-0207 | Add semantic landmarks: `header`, named `nav`, `main`, optional `aside`, and `article` for content pages. | | |
| TASK-0208 | If Ecme primitives are adopted, migrate them into `src/components/ui/` or `src/components/ecme/` as TypeScript before use. | | |
| TASK-0209 | Keep any long-lived Ecme reference snapshots under `docs/references/ecme/` or `vendor/ecme-reference/`, not in active app source or `public/`. | | |

**Implementation scheme**

1. Start from current `DocsShell` behavior because it already proves collapsible navigation and theme switching.
2. Lift shell data into server components and keep only stateful controls as client components.
3. Keep visual direction close to the scaffold: dark header, dense technical nav, high-contrast content surface, compact controls.
4. Use `docs/z00z_website-design.html` for information density and hierarchy ideas, not for CSS copy-paste.

**Acceptance gate**

- `/docs` renders inside `AppShell`.
- Desktop sidebar collapse persists across navigation.
- Mobile drawer opens and closes without layout overlap.
- Header always shows current domain, domain switcher, search launcher, and theme control.
- Keyboard focus states are visible for shell controls.

### Phase 3: Folder-Driven Navigation and IA

- **GOAL-003**: Implement a domain-generic navigation builder based on `content/<domain>/` and `_meta.yaml`.
- **Depends on**: Phase 1 and Phase 2.
- **Primary outcome**: Content folders drive sidebar hierarchy across content-first and hybrid domains.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0301 | Replace docs-specific `src/lib/content/docs.ts` navigation logic with `src/lib/content/navigation.ts`. | | |
| TASK-0302 | Define `FolderMetaSchema` with `title`, `sidebar_label`, `icon`, `collapsed`, `order`, `hide_in_nav`, and `landing_page`. | | |
| TASK-0303 | Define `PageFrontmatterSchema` with the fields in `docs/Z00Z_Website-Spec.md` Section 6.3. | | |
| TASK-0304 | Add group-only folder support where folders without index pages appear as non-clickable or section-like labels. | | |
| TASK-0305 | Add explicit collision handling where `src/app` routes win over file-backed content. | | |
| TASK-0306 | Seed `content/docs/` from `docs/z00z_website-design.html` sections: `learn`, `protocol`, `developers`, `network`, `use-cases`, `ecosystem`, `security`, `research`, `support`, and `legal`. | | |
| TASK-0307 | Add initial `content/wiki/`, `content/network/`, `content/tools/`, `content/aggregators/`, `content/validators/`, `content/watchers/`, and `content/wallet/` roots with `_meta.yaml` and index pages. | | |

**Implementation scheme**

1. Generalize path operations so every domain receives its own `contentRoot`.
2. Generate nav records with stable IDs, labels, href, icon, children, collapsed default, and visibility.
3. Build docs IA from the HTML scaffold by converting page briefs into Markdown frontmatter and starter body outlines.
4. Keep scaffold maturity/evidence fields as frontmatter or page callouts so Z00Z claims remain traceable.

**Acceptance gate**

- Adding `content/wiki/research/test.md` creates `/wiki/research/test` without a route file.
- `_meta.yaml` order changes sidebar order without TypeScript edits.
- Hidden pages render directly by URL but do not appear in navigation.
- Group folders can appear in the sidebar without placeholder pages.

### Phase 4: Content Renderer Hardening

- **GOAL-004**: Turn the current Markdown and HTML demo renderers into production-grade content rendering.
- **Depends on**: Phase 3.
- **Primary outcome**: Markdown and trusted HTML render through a controlled, validated, testable pipeline.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0401 | Move domain-agnostic page loading into `src/lib/content/pages.ts` with `loadContentPage(domain, slug)`. | | |
| TASK-0402 | Set `config/content-pipeline.yaml` default `markdown.html` to `false`. | | |
| TASK-0403 | Add an explicit `trusted_html` page kind for standalone `.html` files. | | |
| TASK-0404 | Add include/snippet path guards that reject resolved paths outside the active domain content root. | | |
| TASK-0405 | Add HTML policy validation for `html.allow_scripts`, `html.allow_inline_event_handlers`, and unsafe embeds; strip scripts and inline handlers by default and report removed constructs in development. | | |
| TASK-0406 | Add heading anchor and TOC extraction for Markdown and sanitized HTML when supported. | | |
| TASK-0407 | Keep Shadow DOM rendering for full HTML pages with local styles, and document when a page should use Shadow DOM versus normalized HTML. | | |
| TASK-0408 | Add Mermaid rendering as a progressive client island only when a page contains Mermaid blocks. | | |
| TASK-0409 | Add parser support or explicit backlog entries for GitHub Flavored Markdown behavior, code block titles, and line highlighting. | | |
| TASK-0410 | Keep `.mdx` disabled until `src/mdx-components.tsx` or an equivalent controlled component map exists and the allowed component list is reviewed. | | |

**Implementation scheme**

1. Treat Markdown as structured content with no raw execution surface by default.
2. Treat `.html` files as trusted repository content with a defensive renderer.
3. Keep parser plugin enablement in YAML and instantiate plugins from typed config.
4. Add tests for every trust-boundary rule before enabling additional plugin features.

**Acceptance gate**

- Markdown raw `<script>` content does not execute.
- Standalone `.html` script tags and inline handlers are removed.
- Include/snippet traversal such as `../../package.json` is rejected.
- Code highlighting still works for Markdown and HTML.
- Existing demo pages still render.

### Phase 5: Multi-Domain Routing and Host Mapping

- **GOAL-005**: Implement path-prefix routing for local development and prepare production subdomain routing for Vercel.
- **Depends on**: Phase 1, Phase 2, Phase 3, and Phase 4.
- **Primary outcome**: All domains route through one shared catch-all path while app-first routes remain explicit.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0501 | Create `src/app/(domains)/layout.tsx` to own the shared shell. | | |
| TASK-0502 | Create `src/app/(domains)/[domain]/[[...slug]]/page.tsx` for configured content-backed domains. | | |
| TASK-0503 | Move current `src/app/docs/[[...slug]]/page.tsx` behavior into the generic domain page, then replace or remove the old docs-only route after parity is verified. | | |
| TASK-0504 | Implement `generateStaticParams()` across content-backed domains. | | |
| TASK-0505 | Implement `generateMetadata()` using page frontmatter, domain metadata, and site defaults. | | |
| TASK-0506 | Add `src/proxy.ts` for production host-to-domain rewrites once Vercel hostnames are known. | | |
| TASK-0507 | Keep local development path prefixes operational even after host-based routing is added. | | |
| TASK-0508 | Add path-equivalence logic for domain switching; if no equivalent path exists, route to target domain `home_path`. | | |

**Implementation scheme**

1. Path prefixes are the first routing contract because they are easiest to test locally.
2. `proxy.ts` is added as a production routing layer, not as a substitute for explicit path routing.
3. Explicit app routes such as `/explorer/block/[height]` stay in `src/app/(domains)/explorer/...`.
4. Domain resolution should be pure and unit-testable: pathname in, host in, domain out.

**Acceptance gate**

- `/docs`, `/wiki`, `/network`, and `/tools` render through the same domain route.
- `/explorer` can render an app-first landing route inside the shell.
- Host mapping tests cover `docs.<host>`, `wiki.<host>`, and unknown hosts.
- Switching from a docs-only path to `explorer` falls back to `/explorer`.

### Phase 6: Theme System and Z00Z Visual Foundation

- **GOAL-006**: Implement curated theme presets, including a custom `z00z-dark`, across shell and content.
- **Depends on**: Phase 2.
- **Primary outcome**: Theme behavior is consistent, persisted, accessible, and Z00Z-branded.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0601 | Expand `config/themes.yaml` with `source`, `extends`, `default_for`, and semantic token fields. | | |
| TASK-0602 | Add `z00z-dark` to Tailwind/daisyUI theme registration and source CSS token mapping. | | |
| TASK-0603 | Move theme adapters into `src/lib/theme/` and keep browser persistence in `src/components/theme/`. | | |
| TASK-0604 | Add per-domain default theme resolution that respects user override. | | |
| TASK-0605 | Style parser UI elements: tabs, callouts, collapsibles, code blocks, links, figures, and tables for all curated presets. | | |
| TASK-0606 | Add contrast checks to the visual QA phase for `light`, `nord`, `night`, `dim`, `abyss`, and `z00z-dark`. | | |

**Implementation scheme**

1. Keep curated theme IDs stable because content and domains can reference them.
2. Use `data-theme` as the theme contract.
3. Keep source tokens in CSS/config, not under `public/`.
4. Avoid letting the scaffold beige palette dominate the production shell; preserve its density and technical structure while applying Z00Z token decisions.

**Acceptance gate**

- Theme picker exposes only configured themes.
- `z00z-dark` appears and applies.
- User-selected theme survives reload and domain switch.
- Domain default themes apply when no user override exists.

### Phase 7: Search and Discovery

- **GOAL-007**: Build first-class search across content-backed domains and prepare app-domain entity search.
- **Depends on**: Phase 3 and Phase 4.
- **Primary outcome**: Header search opens from every domain and returns scoped, sanitized results.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0701 | Create `src/lib/search/indexContent.ts` to index titles, descriptions, headings, frontmatter keywords, and sanitized body text. | | |
| TASK-0702 | Create `src/lib/search/snippets.ts` with escaped snippet generation based on the `.temp` search concept. | | |
| TASK-0703 | Create `src/app/api/search/route.ts` with `GET ?query=&domain=&scope=` parameters validated by `zod`. | | |
| TASK-0704 | Create `src/components/search/SearchDialog.tsx` as a keyboard-accessible client island opened by header search. | | |
| TASK-0705 | Add current-domain default scope and global-scope toggle. | | |
| TASK-0706 | Add result grouping by domain and content/app result type. | | |
| TASK-0707 | Add placeholder adapter interfaces for `explorer` entity search, without requiring backend APIs in v1. | | |

**Implementation scheme**

1. Start with build-time or request-time filesystem indexing for content domains.
2. Keep snippets escaped and never return raw unsanitized HTML from search.
3. Use app-domain adapters later for explorer block/account/transaction search.
4. Keep the search route server-side and cacheable where possible; avoid large client search bundles until scale requires a local index.

**Acceptance gate**

- `Ctrl+K` or the header search button opens search.
- Searching a docs heading returns a result scoped to docs by default.
- Switching to global scope includes wiki/network/tools content when present.
- Search snippets cannot inject HTML.

### Phase 8: Docs Content Migration From Scaffold

- **GOAL-008**: Convert the docs scaffold into structured `content/docs/` source that can drive the public docs domain.
- **Depends on**: Phase 3 and Phase 4.
- **Primary outcome**: The docs domain contains a complete navigable skeleton based on the scaffold sections and page briefs.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0801 | Convert each top-level scaffold section in `docs/z00z_website-design.html` into a folder under `content/docs/`. | | |
| TASK-0802 | Convert each scaffold page brief into a Markdown file with frontmatter fields: `title`, `description`, `order`, `sidebar_label`, `icon`, `layout`, `toc`, `draft`, `hide_in_nav`, `search`, `theme`, `keywords`, `maturity`, and `evidence`. | | |
| TASK-0803 | Create `_meta.yaml` files for all scaffold sections with `title`, `order`, and `collapsed` values. | | |
| TASK-0804 | Keep page body outlines structured as `What`, `When`, `Where`, `Who`, `Why`, `How`, `Evidence`, and `Implementation Notes`. | | |
| TASK-0805 | Mark pages as draft unless source evidence has been migrated and reviewed. | | |
| TASK-0806 | Add cross-links from docs pages into future `wiki`, `network`, `wallet`, and `research` domains only where target pages exist or are intentionally stubbed. | | |

**Implementation scheme**

1. Extract scaffold data mechanically, then review manually for wording and maturity.
2. Avoid overclaiming live product capability; preserve maturity labels from the scaffold.
3. Keep content pages source-backed, not marketing-only.
4. Prioritize `Learn`, `Developers`, `Protocol`, and `Security` as first visible docs areas.

**Acceptance gate**

- Sidebar shows the scaffold section hierarchy.
- Every migrated page has frontmatter and source evidence.
- Draft pages are excluded from public nav if draft filtering is enabled.
- Search can find migrated page titles and evidence terms.

### Phase 9: Representative App-First Routes

- **GOAL-009**: Prove that app-first and hybrid routes can share the shell without pretending backend systems exist.
- **Depends on**: Phase 2 and Phase 5.
- **Primary outcome**: Explorer, network, wallet, and operator domains have representative app pages with clear data-boundary placeholders.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-0901 | Add `src/app/(domains)/explorer/page.tsx` as an explorer home with search entry, latest-block placeholder, and explicit data-source status. | | |
| TASK-0902 | Add `src/app/(domains)/explorer/block/[height]/page.tsx` and `src/app/(domains)/explorer/account/[address]/page.tsx` using typed params and placeholder data adapters. | | |
| TASK-0903 | Add `src/app/(domains)/network/status/page.tsx` as a status dashboard skeleton with static demo data clearly labeled as demo. | | |
| TASK-0904 | Add `src/app/(domains)/wallet/page.tsx` as a wallet support/product entry page without implementing wallet auth or business logic. | | |
| TASK-0905 | Add `src/lib/app-data/` adapter interfaces for future explorer/network data sources. | | |
| TASK-0906 | Ensure dynamic app routes are excluded from the sidebar unless explicitly configured. | | |

**Implementation scheme**

1. App pages prove layout and routing only in early phases.
2. Keep demo data visibly labeled and isolated under `src/lib/app-data/demo/`.
3. Do not add auth or wallet business logic in this website phase.
4. Use `app` canvas for explorer and wallet, `wide` canvas for network/operator pages.

**Acceptance gate**

- `/explorer`, `/explorer/block/1`, `/explorer/account/demo`, `/network/status`, and `/wallet` render inside the shared shell.
- App routes define metadata.
- No dynamic route appears in the sidebar by default.
- Demo data cannot be confused with live network truth.

### Phase 10: Accessibility, Responsive Behavior, and Visual QA

- **GOAL-010**: Make the shared shell usable across desktop, tablet, and mobile with keyboard and screen-reader support.
- **Depends on**: Phase 2, Phase 6, Phase 7, and Phase 9.
- **Primary outcome**: The site passes practical accessibility and responsive acceptance checks.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-1001 | Add Playwright or an equivalent E2E test runner for route and viewport checks. | | |
| TASK-1002 | Add tests for keyboard navigation through domain switcher, theme switcher, search dialog, desktop sidebar, and mobile drawer. | | |
| TASK-1003 | Add focus trap behavior to the mobile drawer and search dialog. | | |
| TASK-1004 | Add screenshot checks for desktop, tablet, and mobile shell layouts. | | |
| TASK-1005 | Add color contrast checks for curated themes. | | |
| TASK-1006 | Validate that long labels in sidebar, switcher, and search results wrap or truncate without overlapping controls. | | |

**Implementation scheme**

1. Test the shell as a product surface, not just as isolated components.
2. Prioritize keyboard and focus behavior because the shell contains global controls.
3. Use representative content with long labels from scaffold pages to catch overflow early.
4. Keep mobile drawer behavior deterministic and testable.

**Acceptance gate**

- Desktop and mobile screenshots show no text overlap.
- Keyboard traversal reaches all global controls.
- Mobile drawer traps focus while open and restores focus after closing.
- Curated theme contrast issues are either fixed or documented with exact tokens.

### Phase 11: Security and Content Trust Review

- **GOAL-011**: Validate content trust boundaries before publishing broad authoring capability.
- **Depends on**: Phase 4, Phase 7, and Phase 8.
- **Primary outcome**: Parser, HTML, search, and asset boundaries have explicit tests and review notes.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-1101 | Add unit tests for script stripping, inline handler stripping, unsafe embed rejection, and local style isolation. | | |
| TASK-1102 | Add path traversal tests for Markdown include and snippet plugins. | | |
| TASK-1103 | Add search snippet injection tests. | | |
| TASK-1104 | Add a documented allowlist for remote embeds if embeds remain enabled. | | |
| TASK-1105 | Add an asset policy note that runtime assets belong under `public/` and React/TypeScript source belongs under `src/`. | | |
| TASK-1106 | Add a pre-release review checklist for claims, maturity labels, legal pages, security pages, and wallet support pages. | | |

**Implementation scheme**

1. Keep `content/` trusted as repository-owned, but still defensive.
2. Treat any future externally sourced content as untrusted until a separate sanitization plan exists.
3. Keep search output escaped even when source content is trusted.
4. Make policy failures loud in development and build logs.

**Acceptance gate**

- Security tests pass.
- Content pipeline config defaults are safe.
- No production React/TypeScript source exists under `public/`.
- No search endpoint returns unsanitized matched HTML.

### Phase 12: Test Automation and CI

- **GOAL-012**: Build a complete verification path for local work and deploy gating.
- **Depends on**: Phase 1 through Phase 11 as features land.
- **Primary outcome**: `npm run verify` becomes a meaningful release gate.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-1201 | Add `npm run typecheck` if Next.js build is not enough for fast type validation. | | |
| TASK-1202 | Add unit tests for config schemas, domain resolution, navigation generation, page resolution, parser policy, and search indexing. | | |
| TASK-1203 | Add integration tests for Markdown render, HTML render, metadata generation, and route collision behavior. | | |
| TASK-1204 | Add E2E tests for domain switching, theme switching, sidebar collapse, mobile drawer, search invocation, and representative docs/explorer routes. | | |
| TASK-1205 | Update `scripts/verify.sh` to run lint, typecheck, unit tests, E2E smoke tests where feasible, and build. | | |
| TASK-1206 | Add `.github/workflows/verify.yml` for pull request and main branch validation if GitHub CI is used. | | |

**Implementation scheme**

1. Keep unit tests close to pure logic first.
2. Use E2E tests only for shell and route behavior that unit tests cannot prove.
3. Keep CI parity with Vercel by running `npm ci` and `npm run verify`.
4. Treat `next build` as mandatory because static generation and config loading failures often surface only at build time.

**Acceptance gate**

- `npm run verify` passes locally.
- CI runs the same validation before merge.
- Build failures show actionable config or source error messages.

### Phase 13: Vercel Deployment and Release Operations

- **GOAL-013**: Deploy the multi-domain Next.js app to Vercel with Preview and Production gates.
- **Depends on**: Phase 5, Phase 10, Phase 11, and Phase 12.
- **Primary outcome**: Vercel Preview deployments validate every change before Production, and domain mapping is planned for all public domains.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-1301 | Create the Vercel project connected to the repository and set the framework preset to Next.js. | | |
| TASK-1302 | Configure Vercel install/build commands: `npm ci` and `npm run build` unless project requirements change. | | |
| TASK-1303 | Configure environment variables separately for Development, Preview, and Production. | | |
| TASK-1304 | Add only public client values with `NEXT_PUBLIC_*`; keep secrets server-only. | | |
| TASK-1305 | Configure Preview deployment review workflow for pull requests or non-production branches. | | |
| TASK-1306 | Configure Production deployment only from the chosen production branch after `npm run verify` passes. | | |
| TASK-1307 | Add custom domains for `docs`, `wiki`, `explorer`, `network`, `tools`, `aggregators`, `validators`, `watchers`, and `wallet` hostnames. | | |
| TASK-1308 | Enable host-based routing through `src/proxy.ts` after DNS and Vercel domains are attached. | | |
| TASK-1309 | Add `robots.txt`, `sitemap.xml`, canonical URL generation, and Open Graph metadata before public indexing. | | |
| TASK-1310 | Add an analytics and error-reporting decision gate before public launch; do not enable a vendor by default because analytics vendor selection is outside the initial spec scope. | | |
| TASK-1311 | Add rollback procedure: redeploy last known-good Production deployment from Vercel dashboard or CLI. | | |

**Implementation scheme**

1. Use Preview deployments as the normal review surface.
2. Keep Production deployment branch-controlled.
3. Keep hostnames in `config/domains.yaml` and let `src/proxy.ts` map request host to the right domain path.
4. Keep path-prefix routing available for local dev and emergency debugging.
5. Do not add backend secrets until an app route actually needs them.

**Acceptance gate**

- Vercel Preview deployment builds successfully.
- Preview URL renders `/docs`, `/wiki`, `/explorer`, `/network/status`, and `/wallet`.
- Production env has no missing runtime variables.
- Custom domain smoke tests pass after DNS propagation.
- Rollback instructions are documented in `docs/deployment/vercel.md`.

## 5. Specification Coverage and Cross-Links

| Spec area | Coverage in this plan | Required cross-links | Status |
|-----------|-----------------------|----------------------|--------|
| Purpose and scope | Phases 1-13 cover shared shell, domain registry, content authoring, themes, routing, search, testing, and deployment | `docs/Z00Z_Website-Spec.md` -> `.planning/impl_phases.md` | Covered |
| Domain list and modes | Phase 1 expands `config/domains.yaml` and `DomainConfig` for all nine domains | `config/domains.yaml` -> `src/lib/domains/registry.ts` -> `src/app/(domains)/...` | Covered |
| Visual direction | Phase 2 and Phase 6 define shell and theme implementation | `docs/assets/z00z-shell-*.svg` and `docs/z00z_website-design.html` -> shell components | Covered |
| Folder-driven IA | Phase 3 and Phase 8 define content tree, `_meta.yaml`, scaffold migration, group folders, and ordering | `docs/z00z_website-design.html` -> `content/docs/**` -> `content/**/_meta.yaml` | Covered |
| Content authoring | Phase 3, Phase 4, and Phase 8 define Markdown, HTML, frontmatter, parser config, and editor safety | `content/**` -> `config/content-pipeline.yaml` -> `src/lib/content/**` | Covered |
| Content trust | Phase 4 and Phase 11 define Markdown HTML defaults, HTML policy, include/snippet boundaries, and tests | `config/content-pipeline.yaml` -> `src/lib/content/markdown.ts` and `src/lib/content/html.ts` -> security tests | Covered |
| Shared shell | Phase 2 and Phase 5 define shared layout, domain switcher, navigation, right rail, and app/content canvas variants | `src/components/shell/**` -> `src/app/(domains)/layout.tsx` | Covered |
| Search | Phase 7 defines internal content search and app-domain adapters; vendor search remains out of scope | `config/search.yaml` -> `src/lib/search/**` -> `src/app/api/search/route.ts` | Covered |
| Theme system | Phase 6 defines curated presets, `z00z-dark`, semantic tokens, persistence, and contrast checks | `config/themes.yaml` -> `src/lib/theme/**` -> `src/components/theme/**` -> `src/app/globals.css` | Covered |
| Technical architecture | Phases 1, 2, 4, 5, 9, and 12 cover route root, TypeScript-first source, server/client boundaries, host routing, metadata, config validation, and tests | `src/app/**` -> `src/lib/**` -> `scripts/verify.sh` | Covered |
| Ecme strategy | Phase 2 now covers Ecme primitive adoption and canonical placement | `.temp/website_2025-09-30/**` -> `src/components/ui/` or `src/components/ecme/` -> normalized source | Covered |
| Annotated mockups | Phase 2, Phase 6, and Phase 10 use mockups as shell, theme, content model, responsive, and visual QA references | `docs/assets/*.svg` -> shell/theme QA notes | Covered |
| Acceptance criteria AC-001 through AC-018 | Phases 1-12 map every acceptance criterion into implementation and test gates | Spec AC IDs -> phase gates and tests below | Covered |
| Test automation strategy | Phase 10, Phase 11, and Phase 12 cover unit, integration, E2E, accessibility, security, and build validation | `scripts/verify.sh` -> CI -> Vercel Preview | Covered |
| Dependencies and integrations | Phases 4, 5, 6, 7, 8, and 13 reference internal and external dependencies from the spec | Spec `EXT-*` and `INF-*` -> Related Specifications section | Covered |
| Edge cases | Phases 3, 4, 5, 7, 9, 10, and 11 cover switching fallbacks, group folders, collisions, invalid YAML, MDX limits, scoped HTML, snippets, and search ranking | Edge cases -> tests and acceptance gates | Covered |
| Validation criteria | Phase gates and Vercel release checklist provide validation criteria through production readiness | Phase gates -> `npm run verify` -> Preview smoke -> Production | Covered |
| Recommended next implementation slice | Slices A-D preserve the spec's recommended next slice while extending it through deployment | Spec Section 18 -> Slices A-D | Covered |

**Cross-link policy for future artifacts**

- Every migrated docs page from `docs/z00z_website-design.html` shall include `evidence` frontmatter linking to its source files.
- Every phase execution note shall link back to the phase in `.planning/impl_phases.md`.
- Every implementation PR or phase summary shall link to the spec section or AC IDs it satisfies.
- `docs/deployment/vercel.md` shall link back to Phase 13 and to the Vercel release checklist.
- Search, parser, domain registry, theme, and routing test files shall reference the relevant phase IDs in test descriptions or file headers when practical.

## 6. Phase Gate Matrix

| Phase | Inputs | Outputs | Artifacts | Gate |
|-------|--------|---------|-----------|------|
| Phase 0 | `docs/Z00Z_Website-Spec.md`, current `src/`, `content/`, `config/`, `.planning/codebase/*.md` | Updated baseline understanding and recorded blockers | `.planning/STATE.md`, updated codebase-map notes if needed | `npm run verify` passes or exact blocker is recorded |
| Phase 1 | Spec Sections 3, 6.7, 9.5; current `config/*.yaml`; current `src/lib/config/site.ts` | Multi-domain config schema and domain registry | `config/domains.yaml`, `config/site.yaml`, `src/lib/config/**`, `src/lib/domains/registry.ts` | All nine domains validate and resolve by path/host |
| Phase 2 | Phase 1 registry; current `DocsShell`; shell mockups; Ecme reference material | Shared domain-aware shell with client islands | `src/components/shell/**`, `src/components/navigation/**`, `src/components/ui/**` or `src/components/ecme/**`, `src/app/(domains)/layout.tsx` | `/docs` renders in the shared shell and shell controls are accessible |
| Phase 3 | Phase 1 registry; Phase 2 shell; spec Sections 5 and 6; scaffold IA | Domain-generic navigation and content roots | `src/lib/content/navigation.ts`, `content/**/_meta.yaml`, initial domain content roots | New content file creates a route and `_meta.yaml` changes nav without TypeScript |
| Phase 4 | Phase 3 navigation; current Markdown/HTML renderer; parser policy config | Hardened content renderer with trust boundaries | `src/lib/content/pages.ts`, `src/lib/content/markdown.ts`, `src/lib/content/html.ts`, `config/content-pipeline.yaml` | Markdown/HTML security tests pass and demo pages still render |
| Phase 5 | Phases 1-4; host mapping requirements; Next.js `proxy.ts` convention | Multi-domain path routing and production host routing preparation | `src/app/(domains)/[domain]/[[...slug]]/page.tsx`, `src/proxy.ts`, route helpers | Path-prefix routes work and host-mapping tests pass |
| Phase 6 | Phase 2 shell; spec Section 8; current theme runtime | Curated theme system with `z00z-dark` and per-domain defaults | `config/themes.yaml`, `src/lib/theme/**`, `src/components/theme/**`, `src/app/globals.css` | Theme picker exposes only curated themes and persistence works |
| Phase 7 | Phase 3 content graph; Phase 4 sanitized content; `.temp` search example | Internal scoped search and search UI | `config/search.yaml`, `src/lib/search/**`, `src/app/api/search/route.ts`, `src/components/search/**` | Search opens globally, defaults to current domain, and snippets are escaped |
| Phase 8 | `docs/z00z_website-design.html`; Phase 3 content model; Phase 4 renderer | Docs IA skeleton migrated into content | `content/docs/**`, `content/docs/**/_meta.yaml`, frontmatter evidence links | Scaffold hierarchy renders in sidebar and migrated pages are searchable |
| Phase 9 | Phase 5 routing; app-first domain modes; placeholder data policy | Representative app-first routes | `src/app/(domains)/explorer/**`, `src/app/(domains)/network/status/page.tsx`, `src/app/(domains)/wallet/page.tsx`, `src/lib/app-data/**` | App routes render in shell and demo data is clearly labeled |
| Phase 10 | Phases 2, 6, 7, 9; mockups; representative long labels | Responsive, accessible, visually checked shell | E2E tests, screenshot baselines, accessibility reports | Desktop/mobile screenshots pass and keyboard/focus behavior works |
| Phase 11 | Phases 4, 7, 8; content trust policy; parser/search code | Security review coverage for content and search | Security tests, embed allowlist if needed, content trust checklist | Script stripping, traversal rejection, and snippet escaping tests pass |
| Phase 12 | Feature phases as implemented; current `scripts/verify.sh` | Complete local and CI verification path | `scripts/verify.sh`, test suites, `.github/workflows/verify.yml` if CI is enabled | `npm run verify` runs the agreed validation stack |
| Phase 13 | Phase 5 routes; Phase 10 QA; Phase 11 security; Phase 12 verification | Vercel Preview and Production deployment path | Vercel project settings, custom domains, `docs/deployment/vercel.md`, deployment smoke notes | Preview smoke passes before Production deploy |

## 7. Dependency Graph

| Phase | Direct dependencies | Blocks |
|-------|---------------------|--------|
| Phase 0 | None | All phases |
| Phase 1 | Phase 0 | Phase 2, Phase 3, Phase 5, Phase 6 |
| Phase 2 | Phase 1 | Phase 5, Phase 7, Phase 9, Phase 10 |
| Phase 3 | Phase 1, Phase 2 | Phase 4, Phase 5, Phase 7, Phase 8 |
| Phase 4 | Phase 3 | Phase 7, Phase 8, Phase 11 |
| Phase 5 | Phase 1, Phase 2, Phase 3, Phase 4 | Phase 9, Phase 13 |
| Phase 6 | Phase 2 | Phase 10 |
| Phase 7 | Phase 3, Phase 4 | Phase 10, Phase 11 |
| Phase 8 | Phase 3, Phase 4 | Phase 10, Phase 13 |
| Phase 9 | Phase 2, Phase 5 | Phase 10, Phase 13 |
| Phase 10 | Phase 2, Phase 6, Phase 7, Phase 9 | Phase 13 |
| Phase 11 | Phase 4, Phase 7, Phase 8 | Phase 13 |
| Phase 12 | Feature phases as they land | Phase 13 |
| Phase 13 | Phase 5, Phase 10, Phase 11, Phase 12 | Production launch |

## 8. Recommended Execution Slices

### Slice A: Working Multi-Domain Content Shell

- Phases: 0, 1, 2, 3, 4, 5.
- Result: `/docs` and `/wiki` render through one shell and one generic content route.
- Why first: This proves the architectural core before broad content migration.

### Slice B: Docs Scaffold Migration

- Phases: 8 plus targeted Phase 7 search tasks.
- Result: The docs domain has real Z00Z IA from `docs/z00z_website-design.html`.
- Why second: It converts existing scaffold value into maintainable content.

### Slice C: Product-Ready Shell

- Phases: 6, 7, 10, 11.
- Result: Theme, search, responsive behavior, accessibility, and trust boundaries are ready for public review.
- Why third: It turns the architecture into a usable site.

### Slice D: App-First Proof and Deployment

- Phases: 9, 12, 13.
- Result: Representative app routes and Vercel deployment are validated.
- Why fourth: It proves the mixed docs/app model and prepares launch.

## 9. Files

- **FILE-001**: `docs/Z00Z_Website-Spec.md` is the product specification.
- **FILE-002**: `docs/z00z_website-design.html` is the docs IA scaffold and source evidence map.
- **FILE-003**: `.planning/impl_phases.md` is this implementation plan.
- **FILE-004**: `config/site.yaml` stores site-level brand and metadata defaults.
- **FILE-005**: `config/domains.yaml` stores the domain registry.
- **FILE-006**: `config/themes.yaml` stores curated theme presets.
- **FILE-007**: `config/search.yaml` shall store search scope, weights, shortcuts, and result caps.
- **FILE-008**: `config/content-pipeline.yaml` stores parser and HTML policy flags.
- **FILE-009**: `content/**/_meta.yaml` stores local navigation metadata.
- **FILE-010**: `content/docs/**` stores docs-domain pages.
- **FILE-011**: `content/wiki/**`, `content/network/**`, `content/tools/**`, `content/aggregators/**`, `content/validators/**`, `content/watchers/**`, and `content/wallet/**` shall store content-backed domain pages.
- **FILE-012**: `src/app/(domains)/layout.tsx` shall own the shared shell route group.
- **FILE-013**: `src/app/(domains)/[domain]/[[...slug]]/page.tsx` shall own generic content-backed routes.
- **FILE-014**: `src/app/(domains)/explorer/**/page.tsx` shall own explicit explorer app routes.
- **FILE-015**: `src/proxy.ts` shall own production host-based rewrites when enabled.
- **FILE-016**: `src/lib/config/**` shall own YAML parsing and schemas.
- **FILE-017**: `src/lib/domains/**` shall own domain resolution.
- **FILE-018**: `src/lib/content/**` shall own content discovery, parsing, rendering, navigation, and metadata helpers.
- **FILE-019**: `src/lib/search/**` shall own content indexing and snippets.
- **FILE-020**: `src/components/shell/**` shall own shared shell components.
- **FILE-021**: `src/components/navigation/**` shall own sidebar and navigation components.
- **FILE-022**: `src/components/search/**` shall own search UI.
- **FILE-023**: `src/components/theme/**` and `src/lib/theme/**` shall own theme UI and theme state.
- **FILE-024**: `scripts/verify.sh` shall own local verification orchestration.
- **FILE-025**: `.github/workflows/verify.yml` shall own CI verification if GitHub CI is enabled.
- **FILE-026**: `docs/deployment/vercel.md` shall own Vercel deployment and rollback procedure.

## 10. Testing

- **TEST-001**: Config schema unit tests for valid and invalid `site.yaml`, `domains.yaml`, `themes.yaml`, `search.yaml`, and `content-pipeline.yaml`.
- **TEST-002**: Domain resolver unit tests for pathname, hostname, and fallback behavior.
- **TEST-003**: Navigation builder unit tests for folder ordering, group folders, hidden pages, collapsed folders, and landing pages.
- **TEST-004**: Page resolver tests for Markdown, HTML, index pages, nested pages, missing pages, and explicit-route collision behavior.
- **TEST-005**: Markdown rendering tests for anchors, TOC, callouts, tabs, code blocks, Mermaid blocks, includes, snippets, and disabled raw HTML.
- **TEST-006**: HTML rendering tests for script removal, inline event removal, local styles, Shadow DOM output, and code highlighting.
- **TEST-007**: Search tests for indexing, scoped search, snippet escaping, result grouping, and empty results.
- **TEST-008**: Theme tests for persistence, default resolution, allowed themes, and invalid theme config.
- **TEST-009**: E2E tests for `/docs`, `/wiki`, `/explorer`, `/network/status`, `/wallet`, domain switching, sidebar collapse, mobile drawer, theme switching, and search launch.
- **TEST-010**: Accessibility tests for landmarks, accessible names, focus trap behavior, visible focus states, and keyboard navigation.
- **TEST-011**: Build tests through `npm run build` to verify static params, metadata generation, and config loading.
- **TEST-012**: Vercel Preview smoke tests for deployed URLs, environment variables, host routing, and custom domain behavior.

## 11. Risks & Assumptions

- **RISK-001**: Generalizing the docs route too early can break the only working content slice. Mitigation: preserve `/docs` behavior through parity tests before route migration.
- **RISK-002**: Enabling raw Markdown HTML can create unsafe execution paths. Mitigation: default `markdown.html` to `false` and add tests.
- **RISK-003**: Include/snippet plugins can read outside content roots if not guarded. Mitigation: resolve real paths and reject paths outside the active content root.
- **RISK-004**: The scaffold contains many pages and can create content volume before architecture is stable. Mitigation: migrate only frontmatter and outlines first, then fill copy by priority.
- **RISK-005**: Host-based routing can obscure local debugging. Mitigation: keep path-prefix routing permanently available.
- **RISK-006**: Custom themes can pass visual review but fail contrast. Mitigation: include contrast checks before public launch.
- **RISK-007**: Search snippets can become an XSS vector. Mitigation: escape all snippets and treat rendered highlights as data, not HTML.
- **RISK-008**: App-first routes can imply live explorer/network data before backends exist. Mitigation: label demo data clearly and isolate adapters.
- **RISK-009**: Vercel Preview and Production may accidentally share sensitive external resources. Mitigation: separate env vars and external services by environment.
- **RISK-010**: Subdomain DNS and certificate readiness may lag code readiness. Mitigation: launch first on path prefixes or Vercel preview domains if needed.
- **ASSUMPTION-001**: The first production-ready domain is `docs`.
- **ASSUMPTION-002**: `docs/z00z_website-design.html` remains the authoritative docs IA scaffold until replaced by structured `content/docs/`.
- **ASSUMPTION-003**: Vercel is the target hosting platform for this application.
- **ASSUMPTION-004**: The first deployment does not require explorer backend APIs, wallet auth, CMS, or database-backed editing.
- **ASSUMPTION-005**: Preview deployments are acceptable for stakeholder review before Production.

## 12. Vercel Release Checklist

| Gate | Required action | Evidence |
|------|-----------------|----------|
| Local verification | Run `npm run verify` | Terminal output or CI log |
| Preview build | Vercel Preview deployment succeeds | Preview URL |
| Preview smoke | Check `/docs`, `/wiki`, `/explorer`, `/network/status`, `/wallet` | Smoke test notes |
| Config safety | Confirm env vars are split by Development, Preview, Production | Vercel project settings |
| SEO readiness | Confirm metadata, canonical URLs, `robots.txt`, and `sitemap.xml` | Source files and deployed output |
| Domain readiness | Attach custom domains and validate DNS/certificates | Vercel Domains dashboard |
| Host routing | Enable and test `src/proxy.ts` host rewrites | Route smoke tests |
| Monitoring | Complete analytics and error-reporting decision gate | Decision record and implementation evidence |
| Rollback | Document redeploy procedure | `docs/deployment/vercel.md` |
| Production deploy | Promote or deploy from production branch | Production URL |

## 13. Related Specifications / Further Reading

- `docs/Z00Z_Website-Spec.md`
- `docs/z00z_website-design.html`
- `.temp/website_2025-09-30/USAGE.md`
- `.temp/website_2025-09-30/public/configs/navigation.config.yaml`
- `.temp/website_2025-09-30/src/app/api/search/route.ts`
- `.temp/website_2025-09-30/src/app/(protected-pages)/(docs)/[...slug]/page.tsx`
- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [Next.js `proxy.ts` file convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
- [Next.js multi-tenant guide](https://nextjs.org/docs/app/guides/multi-tenant)
- [Vercel environments documentation](https://vercel.com/docs/deployments/environments)
- [Vercel environment variables documentation](https://vercel.com/docs/environment-variables)
- [Vercel system environment variables documentation](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Markdown It Plugins documentation](https://mdit-plugins.github.io/)
- [daisyUI themes documentation](https://daisyui.com/docs/themes/)
- [Doka HTML guide](https://doka.guide/html/)

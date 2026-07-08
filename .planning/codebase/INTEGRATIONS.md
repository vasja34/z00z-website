# External Integrations

**Analysis Date:** 2026-07-08

## APIs & External Services

**Payment Processing:**
- None - No payment SDKs, API clients, or checkout routes are committed

**Email/SMS:**
- None - No mailer, notification, or SMS provider integration found

**External APIs:**
- Google Fonts via `next/font/google` - `Geist` and `Geist_Mono` are loaded in `src/app/layout.tsx`
  - Integration method: Next.js built-in font loader
  - Auth: None
  - Rate limits: Not defined in repository code

## Data Storage

**Databases:**
- None - No ORM, SQL client, document database client, or data access layer is committed

**File Storage:**
- Local static assets only - `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, and `public/window.svg`
  - SDK/Client: None
  - Auth: None
  - Buckets: Not applicable

**Caching:**
- No application-level cache integration - No Redis, in-memory cache service, or cache client found

## Authentication & Identity

**Auth Provider:**
- None - No auth middleware, provider SDK, login route, or session code exists

**OAuth Integrations:**
- None

## Monitoring & Observability

**Error Tracking:**
- None - No Sentry, Rollbar, or equivalent SDK present

**Analytics:**
- None - No analytics SDK or event pipeline found

**Logs:**
- No committed logging integration - The current frontend code does not define an app logger

## CI/CD & Deployment

**Hosting:**
- No active hosting configuration is committed
  - Deployment: Not defined in code
  - Environment vars: Not defined in repository config

**CI Pipeline:**
- No current GitHub Actions workflows - `.github/workflows/` exists but contains no files after user cleanup during this mapping pass
  - Workflows: None committed
  - Secrets: None referenced by active workflow files

## Environment Configuration

**Development:**
- Required env vars: None detected in committed application code
- Secrets location: `.env*` is gitignored by `.gitignore`, but no env schema file such as `.env.example` is present
- Mock/stub services: None needed for the current static page

**Staging:**
- Environment-specific behavior is not defined

**Production:**
- Secrets management is not defined
- Failover/redundancy is not defined

## Webhooks & Callbacks

**Incoming:**
- None - No `api/` routes or webhook handlers are committed

**Outgoing:**
- None - No outbound webhook or callback client code found

---
*Integration audit: 2026-07-08*
*Update when adding/removing external services*

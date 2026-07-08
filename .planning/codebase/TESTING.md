# Testing Patterns

**Analysis Date:** 2026-07-08

## Test Framework

**Runner:**
- Frontend app: no JavaScript test runner is configured in `package.json`
- Pentest suite: Python `unittest` tests live under `tools/penetration/tests/`
- No dedicated JS test config file (`vitest.config.*`, `jest.config.*`, `playwright.config.*`) is present

**Assertion Library:**
- None committed
- There are no current matcher utilities because there are no test files

**Run Commands:**
```bash
npm run lint    # Current static verification path
npm run build   # Current production-build verification path
npm run verify  # Project wrapper: lint + build
npm run dev     # Manual browser verification during development
python3 -m unittest discover -s tools/penetration/tests
```

## Test File Organization

**Location:**
- Website app: no `*.test.*`, `*.spec.*`, `__tests__/`, `e2e/`, or `playwright/` directories exist yet
- Pentest workflow: `tools/penetration/tests/`

**Naming:**
- Python pentest tests use `test_*.py`
- Frontend test naming is not established yet

**Structure:**
```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css

tools/
  penetration/
    tests/
      test_scope_validation.py
      test_local_runner_integration.py
      ...
```

## Test Structure

**Suite Organization:**
- Python pentest coverage uses `unittest.TestCase` classes grouped by workflow surface
- Frontend app suites are not established yet

**Patterns:**
- Current frontend verification is manual plus compile/lint gates
- Pentest tests use fixture trees under `tools/penetration/tests/fixtures/`
- The app itself still has no browser or component-test baseline

## Mocking

**Framework:**
- Pentest tests use Python standard-library `unittest`
- No JS mocking framework is committed

**Patterns:**
- Pentest tests create temporary directories and fake tool binaries for integration coverage
- No frontend module-mocking strategy exists

**What to Mock:**
- Pentest tests mock external scanners and tool payloads rather than calling live binaries
- Frontend mocking is not established

**What NOT to Mock:**
- Scope-validation and report-builder contracts should keep exercising the real local scripts
- Frontend guidance is not established

## Fixtures and Factories

**Test Data:**
- Pentest fixtures are committed under `tools/penetration/tests/fixtures/`
- No frontend fixtures or factories are present

**Location:**
- Pentest fixtures: `tools/penetration/tests/fixtures/`
- Frontend fixtures: not established

## Coverage

**Requirements:**
- No enforced frontend coverage target
- No repository-wide coverage report is configured

**Configuration:**
- None

**View Coverage:**
```bash
# Not available yet - no coverage command is configured
```

## Test Types

**Unit Tests:**
- Present for the pentest workflow under `tools/penetration/tests/`
- Not present yet for the Next.js app

**Integration Tests:**
- Present for pentest runners, validators, and report generation
- Not present yet for the website UI

**E2E Tests:**
- Not present for the website UI
- Pentest workflow has no browser E2E suite; it relies on script-level integration tests

## Common Patterns

**Async Testing:**
- No frontend async test pattern is established

**Error Testing:**
- Pentest tests assert fail-closed behavior for invalid scope, missing tools, and packaging contracts
- No frontend error-test pattern is established

**Snapshot Testing:**
- Not used

**Current Practical Baseline:**
- `npm run lint` confirms lint-rule compliance
- `npm run build` confirms the App Router route, TypeScript config, and production bundle compile successfully
- `npm run verify` wraps the current verification path in one command
- `python3 -m unittest discover -s tools/penetration/tests` covers the imported pentest suite
- Browser checks must currently be performed manually through `npm run dev`

---
*Testing analysis: 2026-07-08*
*Update when test patterns change*

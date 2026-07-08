import { fixupConfigRules } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...fixupConfigRules(nextVitals),
  ...fixupConfigRules(nextTs),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Workspace-specific directories that should not be linted as app source:
    ".codex/**",
    ".github/**",
    ".planning/**",
    ".temp/**",
    "reports/**",
    "tools/**",
    "scripts/legacy/**",
    "public/assets/svg/**",
  ]),
]);

export default eslintConfig;

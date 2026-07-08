"use client";

import type { CodeThemeOption } from "@/lib/config/site";

export const THEME_STORAGE_KEY = "z00z-demo-theme";
export const CODE_THEME_STORAGE_KEY = "z00z-demo-code-theme";
export const THEME_EVENT_NAME = "z00z:theme-change";
export const CODE_THEME_EVENT_NAME = "z00z:code-theme-change";

const DARK_THEMES = new Set(["workbench", "dockyard"]);
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
const CODE_THEME_STYLE_PROPERTIES = [
  ["--docs-code-bg", "background"],
  ["--docs-code-border", "border"],
  ["--docs-code-fg", "foreground"],
  ["--docs-code-muted", "comment"],
  ["--docs-code-keyword", "keyword"],
  ["--docs-code-string", "string"],
  ["--docs-code-number", "number"],
  ["--docs-code-title", "title"],
] as const;

export function isDarkTheme(theme: string): boolean {
  return DARK_THEMES.has(theme);
}

function persistSelection(key: string, value: string): void {
  window.localStorage.setItem(key, value);
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}

export function isThemeApplied(theme: string): boolean {
  const root = document.documentElement;

  return (
    root.getAttribute("data-theme") === theme &&
    root.style.colorScheme === (isDarkTheme(theme) ? "dark" : "light")
  );
}

export function applyTheme(theme: string): void {
  const root = document.documentElement;

  persistSelection(THEME_STORAGE_KEY, theme);

  if (isThemeApplied(theme)) {
    return;
  }

  root.setAttribute("data-theme", theme);
  root.style.colorScheme = isDarkTheme(theme) ? "dark" : "light";
  window.dispatchEvent(new CustomEvent(THEME_EVENT_NAME, { detail: { theme } }));
}

export function resolveAllowedTheme(
  defaultTheme: string,
  allowedThemes: readonly string[],
): string {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (stored && allowedThemes.includes(stored)) {
    return stored;
  }

  if (allowedThemes.includes(defaultTheme)) {
    return defaultTheme;
  }

  return allowedThemes[0] ?? defaultTheme;
}

export function isCodeThemeApplied(theme: CodeThemeOption): boolean {
  const root = document.documentElement;

  return (
    root.getAttribute("data-code-theme") === theme.id &&
    CODE_THEME_STYLE_PROPERTIES.every(([styleProperty, themeProperty]) => {
      return root.style.getPropertyValue(styleProperty) === theme[themeProperty];
    })
  );
}

export function applyCodeTheme(theme: CodeThemeOption): void {
  const root = document.documentElement;

  persistSelection(CODE_THEME_STORAGE_KEY, theme.id);

  if (isCodeThemeApplied(theme)) {
    return;
  }

  root.setAttribute("data-code-theme", theme.id);
  root.style.setProperty("--docs-code-bg", theme.background);
  root.style.setProperty("--docs-code-border", theme.border);
  root.style.setProperty("--docs-code-fg", theme.foreground);
  root.style.setProperty("--docs-code-muted", theme.comment);
  root.style.setProperty("--docs-code-keyword", theme.keyword);
  root.style.setProperty("--docs-code-string", theme.string);
  root.style.setProperty("--docs-code-number", theme.number);
  root.style.setProperty("--docs-code-title", theme.title);

  window.dispatchEvent(new CustomEvent(CODE_THEME_EVENT_NAME, { detail: { theme: theme.id } }));
}

export function resolveInitialTheme(defaultTheme: string): string {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored || defaultTheme;
}

export function resolveInitialCodeTheme(defaultTheme: string): string {
  const stored = window.localStorage.getItem(CODE_THEME_STORAGE_KEY);
  return stored || defaultTheme;
}

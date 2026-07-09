"use client";

import { useSyncExternalStore } from "react";

import { CODE_THEME_STORAGE_KEY, THEME_STORAGE_KEY } from "@/components/theme/themeStorage";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/components/ui/Dropdown";
import {
  applyCodeTheme,
  applyTheme,
  CODE_THEME_EVENT_NAME,
  resolveInitialCodeTheme,
  resolveAllowedTheme,
  THEME_EVENT_NAME,
} from "@/components/theme/themeClient";
import type { CodeThemeOption, ThemeOption } from "@/lib/config/site";

type ThemeSwitcherProps = {
  defaultTheme: string;
  themes: ThemeOption[];
};

type CodeThemeSwitcherProps = {
  codeThemeMode: "adaptive" | "selectable";
  codeThemes: CodeThemeOption[];
  defaultCodeTheme: string;
};

function resolveAvailableCodeTheme(
  codeThemes: CodeThemeOption[],
  preferredThemeId: string,
  fallbackThemeId: string,
): string {
  return (
    codeThemes.find((theme) => theme.id === preferredThemeId)?.id ??
    codeThemes.find((theme) => theme.id === fallbackThemeId)?.id ??
    codeThemes[0]?.id ??
    fallbackThemeId
  );
}

function subscribeToThemeStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleThemeChange = () => {
    onStoreChange();
  };
  const handleStorageChange = (event: StorageEvent) => {
    if (!event.key || event.key === THEME_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(THEME_EVENT_NAME, handleThemeChange as EventListener);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(THEME_EVENT_NAME, handleThemeChange as EventListener);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function subscribeToCodeThemeStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleCodeThemeChange = () => {
    onStoreChange();
  };
  const handleStorageChange = (event: StorageEvent) => {
    if (!event.key || event.key === CODE_THEME_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(CODE_THEME_EVENT_NAME, handleCodeThemeChange as EventListener);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(CODE_THEME_EVENT_NAME, handleCodeThemeChange as EventListener);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function PaletteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2.5a7.5 7.5 0 1 0 0 15h1.2a2.3 2.3 0 0 0 0-4.6h-.7a1.4 1.4 0 0 1 0-2.8H12a4.5 4.5 0 0 0 0-9z" />
      <circle cx="6.2" cy="9.2" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="5.7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12.6" cy="5.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 5-4 5 4 5" />
      <path d="m13 5 4 5-4 5" />
      <path d="M11.5 3 8.5 17" />
    </svg>
  );
}

function ThemePreview({ themeId }: { themeId: string }) {
  return (
    <div
      data-theme={themeId}
      className="grid grid-cols-4 gap-1 rounded-md border border-base-300/70 bg-base-100 p-1.5"
    >
      <span className="h-6 rounded-sm bg-primary" title="Primary" />
      <span className="h-6 rounded-sm bg-secondary" title="Secondary" />
      <span className="h-6 rounded-sm bg-accent" title="Accent" />
      <span className="h-6 rounded-sm bg-neutral" title="Neutral" />
    </div>
  );
}

function CodeThemePreview({ theme }: { theme: CodeThemeOption }) {
  return (
    <div
      className="rounded-md border px-2.5 py-2 font-mono text-[0.68rem] leading-4"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.border,
        color: theme.foreground,
      }}
    >
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.comment }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.keyword }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.string }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.number }} />
      </div>

      <div className="mt-2" style={{ color: theme.comment }}>
        {"// z00z preview"}
      </div>
      <div className="mt-1">
        <span style={{ color: theme.keyword }}>const</span>{" "}
        <span style={{ color: theme.title }}>theme</span> ={" "}
        <span style={{ color: theme.string }}>&quot;demo&quot;</span>
      </div>
      <div className="mt-1">
        <span style={{ color: theme.keyword }}>let</span>{" "}
        <span style={{ color: theme.title }}>epoch</span> ={" "}
        <span style={{ color: theme.number }}>42</span>
      </div>
    </div>
  );
}

export function ThemeSwitcher({ defaultTheme, themes }: ThemeSwitcherProps) {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeStore,
    () =>
      resolveAllowedTheme(
        defaultTheme,
        themes.map((theme) => theme.id),
      ),
    () => defaultTheme,
  );

  const activeThemeLabel = themes.find((theme) => theme.id === activeTheme)?.label ?? activeTheme;

  return (
    <Dropdown align="end">
      <DropdownTrigger
        showChevron={false}
        className="inline-flex h-9 items-center gap-2 rounded-md border border-base-300 bg-base-100 px-3 text-sm font-medium text-base-content transition hover:bg-base-200"
      >
        <PaletteIcon />
        <span className="hidden lg:inline">{activeThemeLabel}</span>
      </DropdownTrigger>

      <DropdownContent className="w-[22rem] rounded-lg">
        <div className="border-b border-base-300 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/50">Color Themes</p>
        </div>

        <div className="grid gap-2 p-3 sm:grid-cols-2">
          {themes.map((theme) => {
            const isActive = theme.id === activeTheme;

            return (
              <button
                key={theme.id}
                type="button"
                className={[
                  "rounded-md border px-3 py-3 text-left transition",
                  isActive
                    ? "border-primary bg-primary/8 text-primary"
                    : "border-base-300 bg-base-100 hover:border-base-content/20 hover:bg-base-200/70",
                ].join(" ")}
                onClick={() => {
                  applyTheme(theme.id);
                }}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{theme.label}</span>
                  {isActive && (
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Active</span>
                  )}
                </div>
                <ThemePreview themeId={theme.id} />
              </button>
            );
          })}
        </div>
      </DropdownContent>
    </Dropdown>
  );
}

export function CodeThemeSwitcher({
  codeThemeMode,
  codeThemes,
  defaultCodeTheme,
}: CodeThemeSwitcherProps) {
  const activeCodeTheme = useSyncExternalStore(
    subscribeToCodeThemeStore,
    () =>
      resolveAvailableCodeTheme(
        codeThemes,
        resolveInitialCodeTheme(defaultCodeTheme),
        defaultCodeTheme,
      ),
    () => resolveAvailableCodeTheme(codeThemes, defaultCodeTheme, defaultCodeTheme),
  );

  if (codeThemeMode !== "selectable" || codeThemes.length === 0) {
    return null;
  }

  const activeCodeThemeLabel =
    codeThemes.find((theme) => theme.id === activeCodeTheme)?.label ?? activeCodeTheme;
  const lightCodeThemes = codeThemes.filter((theme) => theme.mode === "light");
  const darkCodeThemes = codeThemes.filter((theme) => theme.mode === "dark");

  const renderCodeThemeButton = (theme: CodeThemeOption) => {
    const isActive = theme.id === activeCodeTheme;

    return (
      <button
        key={theme.id}
        type="button"
        className={[
          "rounded-md border px-3 py-3 text-left transition",
          isActive
            ? "border-primary bg-primary/8 text-primary"
            : "border-base-300 bg-base-100 hover:border-base-content/20 hover:bg-base-200/70",
        ].join(" ")}
        onClick={() => {
          applyCodeTheme(theme);
        }}
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">{theme.label}</span>
          {isActive && (
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Active</span>
          )}
        </div>
        <CodeThemePreview theme={theme} />
      </button>
    );
  };

  return (
    <Dropdown align="end">
      <DropdownTrigger
        showChevron={false}
        className="inline-flex h-9 items-center gap-2 rounded-md border border-base-300 bg-base-100 px-3 text-sm font-medium text-base-content transition hover:bg-base-200"
      >
        <CodeIcon />
        <span className="hidden lg:inline">{activeCodeThemeLabel}</span>
      </DropdownTrigger>

      <DropdownContent className="w-[22rem] rounded-lg">
        <div className="border-b border-base-300 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/50">
            Code Highlighting
          </p>
        </div>

        <div className="flex max-h-[min(36rem,calc(100vh-7rem))] flex-col gap-2 overflow-y-auto p-3">
          <div className="grid gap-2 sm:grid-cols-2">{lightCodeThemes.map(renderCodeThemeButton)}</div>
          <div className="grid gap-2 sm:grid-cols-2">{darkCodeThemes.map(renderCodeThemeButton)}</div>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}

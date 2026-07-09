"use client";

import { useSyncExternalStore } from "react";

import {
  applyCodeTheme,
  applyTheme,
  CODE_THEME_EVENT_NAME,
  resolveAllowedTheme,
  resolveInitialCodeTheme,
  THEME_EVENT_NAME,
} from "@/components/theme/themeClient";
import { CODE_THEME_STORAGE_KEY, THEME_STORAGE_KEY } from "@/components/theme/themeStorage";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/components/ui/Dropdown";
import type { CodeThemeOption, ThemeOption } from "@/lib/config/site";

type DocsSetupMenuProps = {
  codeThemeMode: "adaptive" | "selectable";
  codeThemes: CodeThemeOption[];
  defaultCodeTheme: string;
  defaultTheme: string;
  onToggleNavIcons: () => void;
  showNavIcons: boolean;
  themes: ThemeOption[];
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

function SetupGearIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.1rem] w-[1.1rem]"
      fill="currentColor"
    >
      <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
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

function SectionHeading({ title }: { title: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/50">{title}</p>
  );
}

export function DocsSetupMenu({
  codeThemeMode,
  codeThemes,
  defaultCodeTheme,
  defaultTheme,
  onToggleNavIcons,
  showNavIcons,
  themes,
}: DocsSetupMenuProps) {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeStore,
    () =>
      resolveAllowedTheme(
        defaultTheme,
        themes.map((theme) => theme.id),
      ),
    () => defaultTheme,
  );

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

  const lightCodeThemes = codeThemes.filter((theme) => theme.mode === "light");
  const darkCodeThemes = codeThemes.filter((theme) => theme.mode === "dark");

  return (
    <Dropdown align="end">
      <DropdownTrigger
        showChevron={false}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content transition hover:bg-base-200"
      >
        <SetupGearIcon />
        <span className="sr-only">Open setup menu</span>
      </DropdownTrigger>

      <DropdownContent className="w-[min(30rem,calc(100vw-1.5rem))] max-h-[min(40rem,calc(100vh-6rem))] overflow-y-auto rounded-lg">
        <div className="border-b border-base-300 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/50">Setup</p>
        </div>

        <div className="space-y-5 p-3">
          <section className="space-y-3">
            <SectionHeading title="Color Themes" />

            <div className="grid gap-2 sm:grid-cols-2">
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
          </section>

          {codeThemeMode === "selectable" && codeThemes.length > 0 ? (
            <section className="space-y-3 border-t border-base-300 pt-5">
              <SectionHeading title="Code Highlighting" />

              {lightCodeThemes.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-base-content/45">Light</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {lightCodeThemes.map((theme) => {
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
                    })}
                  </div>
                </div>
              ) : null}

              {darkCodeThemes.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-base-content/45">Dark</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {darkCodeThemes.map((theme) => {
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
                    })}
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <section className="space-y-3 border-t border-base-300 pt-5">
            <SectionHeading title="Interface" />

            <button
              type="button"
              className={[
                "flex w-full items-center justify-between gap-3 rounded-md border px-4 py-3 text-left transition",
                showNavIcons
                  ? "border-primary bg-primary/8 text-primary"
                  : "border-base-300 bg-base-100 text-base-content/78 hover:border-base-content/20 hover:bg-base-200/70 hover:text-base-content",
              ].join(" ")}
              onClick={onToggleNavIcons}
            >
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Navigation Icons</span>
                <span className="mt-1 block text-xs leading-5 text-base-content/55">
                  {showNavIcons
                    ? "Document and section icons are visible in the left navigation."
                    : "Document and section icons are hidden in the left navigation."}
                </span>
              </span>
              <span
                className={[
                  "shrink-0 rounded-md px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
                  showNavIcons ? "bg-primary/14 text-primary" : "bg-base-200 text-base-content/55",
                ].join(" ")}
              >
                {showNavIcons ? "On" : "Off"}
              </span>
            </button>
          </section>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}

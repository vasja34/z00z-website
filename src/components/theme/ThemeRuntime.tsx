"use client";

import { useEffect, useLayoutEffect } from "react";

import {
  applyCodeTheme,
  applyTheme,
  isCodeThemeApplied,
  isThemeApplied,
  resolveAllowedTheme,
  resolveInitialCodeTheme,
} from "@/components/theme/themeClient";
import type { CodeThemeOption } from "@/lib/config/site";

type ThemeRuntimeProps = {
  allowedThemes: string[];
  defaultTheme: string;
  defaultCodeTheme: string;
  codeThemeMode: "adaptive" | "selectable";
  codeThemes: CodeThemeOption[];
};

export function ThemeRuntime({
  allowedThemes,
  defaultTheme,
  defaultCodeTheme,
  codeThemeMode,
  codeThemes,
}: ThemeRuntimeProps) {
  useLayoutEffect(() => {
    const nextTheme = resolveAllowedTheme(defaultTheme, allowedThemes);

    if (!isThemeApplied(nextTheme)) {
      applyTheme(nextTheme);
    }

    if (codeThemeMode === "selectable") {
      const storedCodeTheme = resolveInitialCodeTheme(defaultCodeTheme);
      const nextCodeTheme =
        codeThemes.find((theme) => theme.id === storedCodeTheme) ??
        codeThemes.find((theme) => theme.id === defaultCodeTheme) ??
        codeThemes[0];

      if (nextCodeTheme && !isCodeThemeApplied(nextCodeTheme)) {
        applyCodeTheme(nextCodeTheme);
      }
    }
  }, [allowedThemes, codeThemeMode, codeThemes, defaultCodeTheme, defaultTheme]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const themeTrigger = target?.closest<HTMLElement>("[data-theme-select]");
      const nextTheme = themeTrigger?.dataset.themeSelect;

      if (nextTheme) {
        applyTheme(nextTheme);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

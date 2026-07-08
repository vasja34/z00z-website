import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Open_Sans, Source_Code_Pro } from "next/font/google";

import { ThemeRuntime } from "@/components/theme/ThemeRuntime";
import { getCodeThemeOptions, getContentPipelineConfig, getSiteConfig, getThemeOptions } from "@/lib/config/site";

import "katex/dist/katex.min.css";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const site = getSiteConfig();
const contentPipeline = getContentPipelineConfig();
const codeThemes = getCodeThemeOptions();
const themes = getThemeOptions();
const defaultCodeTheme =
  codeThemes.find((theme) => theme.id === site.default_code_theme) ?? codeThemes[0];

const defaultCodeThemeStyle: CSSProperties | undefined =
  contentPipeline.code.theme_mode === "selectable" && defaultCodeTheme
    ? ({
        "--docs-code-bg": defaultCodeTheme.background,
        "--docs-code-border": defaultCodeTheme.border,
        "--docs-code-fg": defaultCodeTheme.foreground,
        "--docs-code-muted": defaultCodeTheme.comment,
        "--docs-code-keyword": defaultCodeTheme.keyword,
        "--docs-code-string": defaultCodeTheme.string,
        "--docs-code-number": defaultCodeTheme.number,
        "--docs-code-title": defaultCodeTheme.title,
      } as CSSProperties)
    : undefined;

const themeBootstrapCodeThemes = codeThemes.map((theme) => ({
  background: theme.background,
  border: theme.border,
  comment: theme.comment,
  foreground: theme.foreground,
  id: theme.id,
  keyword: theme.keyword,
  number: theme.number,
  string: theme.string,
  title: theme.title,
}));

const themeBootstrapScript = `
(() => {
  try {
    const root = document.documentElement;
    const allowedThemes = ${JSON.stringify(themes.map((theme) => theme.id))};
    const darkThemes = ["workbench", "dockyard"];
    const defaultTheme = ${JSON.stringify(site.default_theme)};
    const defaultCodeTheme = ${JSON.stringify(site.default_code_theme)};
    const codeThemeMode = ${JSON.stringify(contentPipeline.code.theme_mode)};
    const codeThemes = ${JSON.stringify(themeBootstrapCodeThemes)};
    const themeStorageKey = "z00z-demo-theme";
    const codeThemeStorageKey = "z00z-demo-code-theme";

    const storedTheme = window.localStorage.getItem(themeStorageKey);
    const nextTheme =
      storedTheme && allowedThemes.includes(storedTheme)
        ? storedTheme
        : (allowedThemes.includes(defaultTheme) ? defaultTheme : (allowedThemes[0] || defaultTheme));

    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = darkThemes.includes(nextTheme) ? "dark" : "light";

    if (codeThemeMode === "selectable") {
      const storedCodeTheme = window.localStorage.getItem(codeThemeStorageKey);
      const nextCodeTheme =
        codeThemes.find((theme) => theme.id === storedCodeTheme) ||
        codeThemes.find((theme) => theme.id === defaultCodeTheme) ||
        codeThemes[0];

      if (nextCodeTheme) {
        root.setAttribute("data-code-theme", nextCodeTheme.id);
        root.style.setProperty("--docs-code-bg", nextCodeTheme.background);
        root.style.setProperty("--docs-code-border", nextCodeTheme.border);
        root.style.setProperty("--docs-code-fg", nextCodeTheme.foreground);
        root.style.setProperty("--docs-code-muted", nextCodeTheme.comment);
        root.style.setProperty("--docs-code-keyword", nextCodeTheme.keyword);
        root.style.setProperty("--docs-code-string", nextCodeTheme.string);
        root.style.setProperty("--docs-code-number", nextCodeTheme.number);
        root.style.setProperty("--docs-code-title", nextCodeTheme.title);
      }
    }
  } catch {
    // Ignore storage access failures and keep server defaults.
  }
})();
`;

export const metadata: Metadata = {
  title: site.brand_name,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={site.default_theme}
      data-code-theme={defaultCodeTheme?.id}
      suppressHydrationWarning
      className={`${openSans.variable} ${sourceCodePro.variable} h-full antialiased`}
      style={defaultCodeThemeStyle}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="min-h-full bg-base-100 text-base-content">
        <ThemeRuntime
          allowedThemes={themes.map((theme) => theme.id)}
          defaultTheme={site.default_theme}
          defaultCodeTheme={site.default_code_theme}
          codeThemeMode={contentPipeline.code.theme_mode}
          codeThemes={codeThemes}
        />
        {children}
      </body>
    </html>
  );
}

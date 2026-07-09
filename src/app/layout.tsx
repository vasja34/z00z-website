import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Geist, IBM_Plex_Mono, Open_Sans, Source_Code_Pro } from "next/font/google";
import { cookies } from "next/headers";

import { CODE_THEME_STORAGE_KEY, THEME_STORAGE_KEY } from "@/components/theme/themeStorage";
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

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const site = getSiteConfig();
const contentPipeline = getContentPipelineConfig();
const codeThemes = getCodeThemeOptions();
const themes = getThemeOptions();
const defaultCodeTheme =
  codeThemes.find((theme) => theme.id === site.default_code_theme) ?? codeThemes[0];

function isDarkTheme(themeId: string): boolean {
  return themeId === "workbench" || themeId === "dockyard";
}

function buildCodeThemeStyle(theme: (typeof codeThemes)[number] | undefined): CSSProperties | undefined {
  return contentPipeline.code.theme_mode === "selectable" && theme
    ? ({
        "--docs-code-bg": theme.background,
        "--docs-code-border": theme.border,
        "--docs-code-fg": theme.foreground,
        "--docs-code-muted": theme.comment,
        "--docs-code-keyword": theme.keyword,
        "--docs-code-string": theme.string,
        "--docs-code-number": theme.number,
        "--docs-code-title": theme.title,
      } as CSSProperties)
    : undefined;
}

export const metadata: Metadata = {
  title: site.brand_name,
  description: site.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get(THEME_STORAGE_KEY)?.value;
  const storedCodeTheme = cookieStore.get(CODE_THEME_STORAGE_KEY)?.value;
  const initialTheme =
    themes.find((theme) => theme.id === storedTheme)?.id ??
    site.default_theme;
  const initialCodeTheme =
    codeThemes.find((theme) => theme.id === storedCodeTheme) ??
    defaultCodeTheme;
  const htmlStyle = {
    ...buildCodeThemeStyle(initialCodeTheme),
    colorScheme: isDarkTheme(initialTheme) ? "dark" : "light",
  } satisfies CSSProperties;

  return (
    <html
      lang="en"
      data-theme={initialTheme}
      data-code-theme={initialCodeTheme?.id}
      suppressHydrationWarning
      className={`${openSans.variable} ${sourceCodePro.variable} ${ibmPlexMono.variable} ${geistSans.variable} h-full antialiased`}
      style={htmlStyle}
    >
      <body className="min-h-full bg-base-100 text-base-content">
        <ThemeRuntime
          allowedThemes={themes.map((theme) => theme.id)}
          defaultTheme={initialTheme}
          defaultCodeTheme={initialCodeTheme?.id ?? site.default_code_theme}
          codeThemeMode={contentPipeline.code.theme_mode}
          codeThemes={codeThemes}
        />
        {children}
      </body>
    </html>
  );
}

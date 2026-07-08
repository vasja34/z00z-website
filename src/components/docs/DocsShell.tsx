"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { DocsSearch } from "@/components/docs/DocsSearch";
import { DomainSwitcher } from "@/components/docs/DomainSwitcher";
import { CodeThemeSwitcher, ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { Drawer } from "@/components/ui/Drawer";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/components/ui/Dropdown";
import { Menu, MenuCollapse, MenuItem } from "@/components/ui/Menu";
import type { DocNavItem, DocsSearchItem } from "@/lib/content/docs";
import type { CodeThemeOption, DomainConfig, ThemeOption } from "@/lib/config/site";

type DocsShellProps = {
  brandName: string;
  children: React.ReactNode;
  codeThemeMode: "adaptive" | "selectable";
  codeThemes: CodeThemeOption[];
  currentDomain: DomainConfig;
  defaultCodeTheme: string;
  defaultTheme: string;
  domains: DomainConfig[];
  navItems: DocNavItem[];
  searchItems: DocsSearchItem[];
  themes: ThemeOption[];
};

const NAV_OPEN_STORAGE_KEY = "z00z-docs-nav-open";
const NAV_ICON_STORAGE_KEY = "z00z-docs-nav-icons";

function MenuBarsIcon() {
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
      <path d="M3.5 5.5h13" />
      <path d="M3.5 10h10" />
      <path d="M3.5 14.5h7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5C5.649.5.5 5.649.5 12A11.5 11.5 0 0 0 8.36 22.06c.575.105.785-.25.785-.555 0-.275-.01-1-.015-1.96-3.18.69-3.85-1.53-3.85-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.695.08-.695 1.15.08 1.755 1.18 1.755 1.18 1.02 1.75 2.675 1.245 3.325.95.105-.74.4-1.245.725-1.53-2.54-.29-5.215-1.27-5.215-5.655 0-1.25.445-2.27 1.175-3.07-.12-.29-.51-1.455.11-3.035 0 0 .96-.305 3.145 1.175A10.95 10.95 0 0 1 12 6.03c.975.005 1.96.13 2.88.38 2.185-1.48 3.145-1.175 3.145-1.175.62 1.58.23 2.745.115 3.035.73.8 1.175 1.82 1.175 3.07 0 4.395-2.68 5.36-5.23 5.645.41.355.775 1.055.775 2.125 0 1.535-.015 2.775-.015 3.15 0 .31.205.665.79.55A11.502 11.502 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5Z" />
    </svg>
  );
}

function SettingsIcon() {
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
      <path d="M3.5 5.5h5" />
      <path d="M12.5 5.5h4" />
      <path d="M9.2 5.5a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0Z" />
      <path d="M3.5 10h9" />
      <path d="M15 10h1.5" />
      <path d="M15 10a1.7 1.7 0 1 0-3.4 0A1.7 1.7 0 0 0 15 10Z" />
      <path d="M3.5 14.5h2.5" />
      <path d="M9 14.5h7.5" />
      <path d="M9.2 14.5a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0Z" />
    </svg>
  );
}

function markerFromTitle(title: string): string {
  return title
    .split(" ")
    .map((token) => token[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function isNavItemActive(item: DocNavItem, pathname: string): boolean {
  return item.href === pathname || item.children.some((child) => isNavItemActive(child, pathname));
}

function NavigationSettings({
  onToggleNavIcons,
  showNavIcons,
}: {
  onToggleNavIcons: () => void;
  showNavIcons: boolean;
}) {
  return (
    <Dropdown align="end">
      <DropdownTrigger
        showChevron={false}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content transition hover:bg-base-200"
      >
        <SettingsIcon />
      </DropdownTrigger>

      <DropdownContent className="w-[20rem] rounded-lg">
        <div className="border-b border-base-300 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/50">Interface</p>
        </div>

        <div className="p-3">
          <DropdownItem
            active={showNavIcons}
            description={
              showNavIcons
                ? "Icons are visible in the left navigation."
                : "Icons are hidden in the left navigation."
            }
            onSelect={onToggleNavIcons}
          >
            <span className="flex items-center justify-between gap-3">
              <span>Navigation Icons</span>
              <span
                className={[
                  "rounded-md px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
                  showNavIcons ? "bg-primary/14 text-primary" : "bg-base-200 text-base-content/55",
                ].join(" ")}
              >
                {showNavIcons ? "On" : "Off"}
              </span>
            </span>
          </DropdownItem>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}

function NavigationList({
  items,
  collapsed,
  onToggleSection,
  onNavigate,
  depth = 0,
  openSections,
  pathname,
  showNavIcons,
}: {
  items: DocNavItem[];
  collapsed: boolean;
  onToggleSection: (href: string) => void;
  onNavigate?: () => void;
  depth?: number;
  openSections: string[];
  pathname: string;
  showNavIcons: boolean;
}) {
  const content = items.map((item) => {
    const active = isNavItemActive(item, pathname);
    const open = openSections.includes(item.href);
    const marker = markerFromTitle(item.title);

    if (item.children.length > 0) {
      return (
        <MenuCollapse
          key={item.href}
          active={active}
          compact={collapsed}
          href={item.href}
          icon={showNavIcons ? item.icon : undefined}
          marker={marker}
          onToggle={() => onToggleSection(item.href)}
          onNavigate={onNavigate}
          open={open}
          title={item.title}
        >
          <NavigationList
            items={item.children}
            collapsed={false}
            depth={depth + 1}
            onToggleSection={onToggleSection}
            onNavigate={onNavigate}
            openSections={openSections}
            pathname={pathname}
            showNavIcons={showNavIcons}
          />
        </MenuCollapse>
      );
    }

    return (
      <MenuItem
        key={item.href}
        active={active}
        compact={collapsed}
        href={item.href}
        icon={showNavIcons ? item.icon : undefined}
        marker={marker}
        onNavigate={onNavigate}
        title={item.title}
      />
    );
  });

  if (depth === 0) {
    return <Menu label="Documentation navigation">{content}</Menu>;
  }

  return <>{content}</>;
}

export function DocsShell({
  brandName,
  children,
  codeThemeMode,
  codeThemes,
  currentDomain,
  defaultCodeTheme,
  defaultTheme,
  domains,
  navItems,
  searchItems,
  themes,
}: DocsShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavIcons, setShowNavIcons] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(NAV_ICON_STORAGE_KEY) === "true";
  });
  const [openSections, setOpenSections] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = window.localStorage.getItem(NAV_OPEN_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
    } catch {
      return [];
    }
  });

  const toggleSection = (href: string) => {
    setOpenSections((current) => {
      const next = current.includes(href) ? current.filter((item) => item !== href) : [...current, href];
      window.localStorage.setItem(NAV_OPEN_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const toggleNavIcons = () => {
    setShowNavIcons((current) => {
      const next = !current;
      window.localStorage.setItem(NAV_ICON_STORAGE_KEY, String(next));
      return next;
    });
  };

  const desktopSidebarWidth = "22rem";
  const brandTextClassName =
    "min-w-0 overflow-hidden whitespace-nowrap [font-family:var(--font-open-sans)] text-[26px] font-bold leading-7 tracking-normal text-base-content";

  const headerControls = (
    <>
      <DocsSearch items={searchItems} />
      <ThemeSwitcher
        defaultTheme={defaultTheme}
        themes={themes}
      />
      <CodeThemeSwitcher
        codeThemeMode={codeThemeMode}
        codeThemes={codeThemes}
        defaultCodeTheme={defaultCodeTheme}
      />
      <NavigationSettings onToggleNavIcons={toggleNavIcons} showNavIcons={showNavIcons} />
      <button
        type="button"
        aria-label="Project repository coming soon"
        title="Project repository coming soon"
        disabled
        className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content/45 transition disabled:opacity-100"
      >
        <GitHubIcon />
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:hidden">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content transition hover:bg-base-200 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <MenuBarsIcon />
          </button>

          <Link href="/docs" aria-label="Open docs home" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/assets/logo/ZUZ-Labs-small.jpg"
              alt="Z00Z Labs"
              width={34}
              height={34}
              className="rounded-md object-cover ring-1 ring-base-300/80"
              priority
            />
            <h1 className={`truncate ${brandTextClassName}`}>
              {brandName}
            </h1>
          </Link>

          <div className="hidden md:block">
            <DomainSwitcher currentDomainId={currentDomain.id} domains={domains} />
          </div>

          <div className="ml-auto flex items-center gap-2">{headerControls}</div>
        </div>

        <div
          className="mx-auto hidden h-14 max-w-[1600px] items-center lg:grid"
          style={{ gridTemplateColumns: `${desktopSidebarWidth} minmax(0, 1fr) auto` }}
        >
          <div className="flex h-full items-center border-r border-base-300 px-4">
            <Link href="/docs" aria-label="Open docs home" className="flex min-w-0 items-center gap-3">
              <Image
                src="/assets/logo/ZUZ-Labs-small.jpg"
                alt="Z00Z Labs"
                width={36}
                height={36}
                className="shrink-0 rounded-md object-cover ring-1 ring-base-300/80"
                priority
              />
              <h1 className={brandTextClassName}>{brandName}</h1>
            </Link>
          </div>

          <div className="min-w-0 px-4">
            <DomainSwitcher currentDomainId={currentDomain.id} domains={domains} />
          </div>

          <div className="flex items-center justify-end gap-2 px-4 sm:px-6">
            {headerControls}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <aside className="hidden w-[22rem] shrink-0 border-r border-base-300 bg-base-100 lg:sticky lg:top-14 lg:flex lg:h-[calc(100vh-3.5rem)]">
          <div className="h-full w-full overflow-y-auto px-3 py-4">
            <NavigationList
              items={navItems}
              collapsed={false}
              onToggleSection={toggleSection}
              openSections={openSections}
              pathname={pathname}
              showNavIcons={showNavIcons}
            />
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>

      <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="space-y-4">
          <div className="md:hidden">
            <DomainSwitcher currentDomainId={currentDomain.id} domains={domains} />
          </div>

          <div>
            <NavigationList
              items={navItems}
              collapsed={false}
              onToggleSection={toggleSection}
              onNavigate={() => setMobileOpen(false)}
              openSections={openSections}
              pathname={pathname}
              showNavIcons={showNavIcons}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

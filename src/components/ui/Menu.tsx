"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";

import { jumpToPageTop } from "@/components/docs/instantHashNavigation";
import { NavIcon } from "@/components/ui/NavIcon";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function MarkerChip({ icon, marker }: { icon?: string; marker: string }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-base-300 bg-base-100 font-mono text-[0.72rem] font-bold tracking-[0.18em]">
      {icon ? <NavIcon icon={icon} className="h-5 w-5" /> : marker}
    </span>
  );
}

function MenuLinkCard({
  active,
  compact,
  description,
  href,
  icon,
  marker,
  onNavigate,
  title,
}: {
  active: boolean;
  compact: boolean;
  description?: string;
  href: string;
  icon?: string;
  marker: string;
  onNavigate?: () => void;
  title: string;
}) {
  const router = useRouter();
  const isUnmodifiedPrimaryClick = (event: MouseEvent<HTMLAnchorElement>) =>
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const currentPathname = typeof window === "undefined" ? "" : window.location.pathname;
    const targetPathname =
      typeof window === "undefined" ? "" : new URL(href, window.location.origin).pathname;
    const isSamePageNavigation = currentPathname === targetPathname;

    if (!isUnmodifiedPrimaryClick(event)) {
      onNavigate?.();
      return;
    }

    onNavigate?.();
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.blur();

    if (isSamePageNavigation) {
      jumpToPageTop(targetPathname);
      return;
    }

    jumpToPageTop(currentPathname);
    router.push(href, { scroll: false });
  };

  return (
    <Link
      href={href}
      scroll={false}
      className={[
        "group flex gap-3 rounded-md px-2 py-1.5 transition",
        description ? "items-start" : "items-center",
        active
          ? "bg-primary/8 text-primary"
          : "text-base-content/72 hover:bg-base-200/80 hover:text-base-content",
        compact ? "justify-center px-0 py-0 hover:bg-transparent" : "",
      ].join(" ")}
      title={title}
      onClick={handleClick}
    >
      {compact && <MarkerChip icon={icon} marker={marker} />}
      {!compact && (
        <>
          {icon && (
            <span className="shrink-0 self-center text-current">
              <NavIcon icon={icon} className="h-[1.05rem] w-[1.05rem]" />
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="menu-link-title block break-words whitespace-normal text-[0.98rem] font-semibold leading-5">{title}</span>
            {description && (
              <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-base-content/45">
                {description}
              </span>
            )}
          </span>
        </>
      )}
    </Link>
  );
}

export function Menu({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <nav className={className} aria-label={label}>
      <ul className="space-y-0.5">{children}</ul>
    </nav>
  );
}

export function MenuItem({
  active = false,
  compact = false,
  description,
  href,
  icon,
  marker,
  onNavigate,
  title,
}: {
  active?: boolean;
  compact?: boolean;
  description?: string;
  href: string;
  icon?: string;
  marker: string;
  onNavigate?: () => void;
  title: string;
}) {
  return (
    <li>
      <MenuLinkCard
        active={active}
        compact={compact}
        description={description}
        href={href}
        icon={icon}
        marker={marker}
        onNavigate={onNavigate}
        title={title}
      />
    </li>
  );
}

export function MenuCollapse({
  active = false,
  children,
  compact = false,
  description,
  href,
  icon,
  marker,
  onToggle,
  onNavigate,
  open = false,
  title,
}: {
  active?: boolean;
  children: ReactNode;
  compact?: boolean;
  description?: string;
  href: string;
  icon?: string;
  marker: string;
  onToggle: () => void;
  onNavigate?: () => void;
  open?: boolean;
  title: string;
}) {
  const expanded = open;

  if (compact) {
    return (
      <MenuItem active={active} compact href={href} icon={icon} marker={marker} onNavigate={onNavigate} title={title} />
    );
  }

  return (
    <li className="space-y-1">
      <button
        type="button"
        aria-expanded={expanded}
        aria-label={expanded ? `Collapse ${title}` : `Expand ${title}`}
        className={[
          "flex w-full select-none gap-3 rounded-md px-2 py-1.5 text-left transition",
          description ? "items-start" : "items-center",
          active
            ? "bg-primary/8 text-primary"
            : "text-base-content/72 hover:bg-base-200/80 hover:text-base-content",
        ].join(" ")}
        onClick={onToggle}
      >
        {icon && (
          <span className="pointer-events-none shrink-0 self-center text-current">
            <NavIcon icon={icon} className="h-[1.05rem] w-[1.05rem]" />
          </span>
        )}
        <span className="pointer-events-none min-w-0 flex-1">
          <span className="menu-link-title block break-words whitespace-normal text-[0.98rem] font-semibold leading-5">{title}</span>
          {description && (
            <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-base-content/45">
              {description}
            </span>
          )}
        </span>
        <span
          className={[
            "pointer-events-none inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm transition",
            active ? "text-primary" : "text-base-content/45",
          ].join(" ")}
        >
          <ChevronIcon open={expanded} />
        </span>
      </button>

      {expanded && (
        <ul className="ml-3 space-y-0.5 border-l border-base-300 pl-3 [&_.menu-link-title]:origin-center [&_.menu-link-title]:text-[0.95rem] [&_.menu-link-title]:font-medium [&_.menu-link-title]:[transform:scaleY(1.006)]">
          {children}
        </ul>
      )}
    </li>
  );
}

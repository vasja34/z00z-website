"use client";

import Link from "next/link";
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type DropdownAlign = "start" | "end";

type DropdownContextValue = {
  align: DropdownAlign;
  close: () => void;
  contentId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  triggerId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext(): DropdownContextValue {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("Dropdown components must be rendered inside <Dropdown>.");
  }

  return context;
}

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

export function Dropdown({
  align = "end",
  children,
  className = "",
}: {
  align?: DropdownAlign;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <DropdownContext.Provider
      value={{
        align,
        close: () => setOpen(false),
        contentId: `${id}-content`,
        open,
        setOpen,
        triggerId: `${id}-trigger`,
        triggerRef,
      }}
    >
      <div ref={rootRef} className={`relative ${className}`.trim()}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({
  children,
  className = "",
  showChevron = true,
}: {
  children: ReactNode;
  className?: string;
  showChevron?: boolean;
}) {
  const { contentId, open, setOpen, triggerId, triggerRef } = useDropdownContext();

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type="button"
      aria-controls={contentId}
      aria-expanded={open}
      aria-haspopup="dialog"
      className={className}
      onClick={() => setOpen((current) => !current)}
    >
      <span className="min-w-0">{children}</span>
      {showChevron && <ChevronIcon open={open} />}
    </button>
  );
}

export function DropdownContent({
  children,
  className = "",
  role = "dialog",
}: {
  children: ReactNode;
  className?: string;
  role?: "dialog" | "menu" | "listbox";
}) {
  const { align, contentId, open, triggerId } = useDropdownContext();

  if (!open) {
    return null;
  }

  return (
    <div
      id={contentId}
      role={role}
      aria-labelledby={triggerId}
      className={[
        "absolute top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-lg border border-base-300/90 bg-base-100 shadow-xl",
        align === "end" ? "right-0" : "left-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function DropdownItem({
  active = false,
  children,
  className = "",
  description,
  disabled = false,
  href,
  onSelect,
}: {
  active?: boolean;
  children: ReactNode;
  className?: string;
  description?: string;
  disabled?: boolean;
  href?: string;
  onSelect?: () => void;
}) {
  const { close } = useDropdownContext();
  const itemClass = [
    "block w-full rounded-md border px-4 py-3 text-left transition",
    active
      ? "border-primary/40 bg-primary/10 text-primary"
      : "border-transparent text-base-content/78 hover:border-base-300 hover:bg-base-200/70 hover:text-base-content",
    disabled ? "cursor-not-allowed opacity-55 hover:border-transparent hover:bg-transparent" : "",
    className,
  ].join(" ");

  const content = (
    <>
      <span className="block text-sm font-semibold">{children}</span>
      {description && <span className="mt-1 block text-xs leading-5 text-base-content/55">{description}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={itemClass}
        onClick={() => {
          onSelect?.();
          close();
        }}
      >
        {content}
      </Link>
    );
  }

  if (disabled) {
    return (
      <span aria-disabled="true" className={itemClass}>
        {content}
      </span>
    );
  }

  return (
    <button
      type="button"
      className={itemClass}
      onClick={() => {
        onSelect?.();
        close();
      }}
    >
      {content}
    </button>
  );
}

"use client";

import { useEffect, type ReactNode } from "react";

function CloseIcon() {
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
      <path d="m5 5 10 10" />
      <path d="M15 5 5 15" />
    </svg>
  );
}

export function Drawer({
  children,
  className = "",
  onOpenChange,
  open,
  side = "left",
  title,
}: {
  children: ReactNode;
  className?: string;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  side?: "left" | "right";
  title?: string;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close drawer"
        className="absolute inset-0 bg-base-content/25 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Drawer"}
        className={[
          "absolute top-0 h-full w-full max-w-sm border-base-300 bg-base-100 p-4 shadow-2xl",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          className,
        ].join(" ")}
      >
        <div className="mb-3 flex items-center justify-end gap-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content transition hover:bg-base-200"
            aria-label="Close drawer"
            onClick={() => onOpenChange(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)]">{children}</div>
      </section>
    </div>
  );
}

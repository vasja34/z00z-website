"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/components/ui/Dropdown";
import { NavIcon } from "@/components/ui/NavIcon";
import type { DomainConfig } from "@/lib/config/site";

function resolveDomainHref(
  pathname: string,
  currentDomain: DomainConfig,
  targetDomain: DomainConfig,
): string {
  if (targetDomain.id === currentDomain.id) {
    return pathname;
  }

  return targetDomain.home_path;
}

export function DomainSwitcher({
  currentDomainId,
  domains,
}: {
  currentDomainId: string;
  domains: DomainConfig[];
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const currentDomain = domains.find((domain) => domain.id === currentDomainId) ?? domains[0];
  const filteredDomains = domains.filter((domain) => {
    const haystack = `${domain.id} ${domain.label} ${domain.description}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  return (
    <Dropdown align="start">
      <DropdownTrigger className="flex h-9 items-center gap-2 rounded-md border border-base-300 bg-base-100 px-3 text-left text-sm font-medium text-base-content transition hover:bg-base-200">
        <span className="flex min-w-0 items-center gap-2">
          <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-base-content/70">
            <NavIcon icon={currentDomain.icon} className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1 truncate leading-none">{currentDomain.label}</span>
        </span>
      </DropdownTrigger>

      <DropdownContent className="w-[21rem] rounded-lg">
        <div className="border-b border-base-300/70 p-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-base-content/45">
            Switch Domain
          </p>
          <label className="mt-3 block">
            <span className="sr-only">Filter domains</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter domains"
              className="input input-bordered h-10 w-full rounded-md border-base-300 bg-base-100"
            />
          </label>
        </div>

        <div className="max-h-[24rem] space-y-2 overflow-y-auto p-3">
          {filteredDomains.length > 0 ? (
            filteredDomains.map((domain) => {
              const isCurrent = domain.id === currentDomain.id;
              const isActive = domain.status === "active";

              return (
                <div key={domain.id} className="space-y-2">
                  <DropdownItem
                    active={isCurrent}
                    description={domain.description}
                    disabled={!isActive}
                    href={isActive ? resolveDomainHref(pathname, currentDomain, domain) : undefined}
                    onSelect={() => setQuery("")}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-base-300 bg-base-100 text-base-content/72">
                          <NavIcon icon={domain.icon} className="h-[1.05rem] w-[1.05rem]" />
                        </span>
                        <span className="truncate">{domain.label}</span>
                      </span>
                      {(isCurrent || !isActive) && (
                        <span
                          className={[
                            "rounded-md px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
                            isCurrent ? "bg-primary/14 text-primary" : "bg-base-200 text-base-content/55",
                          ].join(" ")}
                        >
                          {isCurrent ? "Current" : "Planned"}
                        </span>
                      )}
                    </span>
                  </DropdownItem>
                </div>
              );
            })
          ) : (
            <div className="rounded-md border border-dashed border-base-300 p-4 text-sm text-base-content/55">
              No domains matched the current filter.
            </div>
          )}
        </div>
      </DropdownContent>
    </Dropdown>
  );
}

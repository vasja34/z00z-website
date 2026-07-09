"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const POLL_MS = 1500;
const REFRESH_COOLDOWN_MS = 800;
const VERSION_ROUTE = "/api/dev/content-version";

type VersionPayload = {
  version: string;
};

export function DocsDevRefresh() {
  const router = useRouter();
  const versionRef = useRef<string | null>(null);
  const isPendingRef = useRef(false);
  const isRefreshingRef = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    let isStopped = false;
    let cooldownTimerId: number | null = null;

    const releaseRefreshLock = () => {
      isRefreshingRef.current = false;
      cooldownTimerId = null;
    };

    const checkVersion = async () => {
      if (isStopped || isPendingRef.current || isRefreshingRef.current) {
        return;
      }

      isPendingRef.current = true;

      try {
        const response = await fetch(VERSION_ROUTE, { cache: "no-store" });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as VersionPayload;

        if (!payload.version || isStopped) {
          return;
        }

        if (versionRef.current === null) {
          versionRef.current = payload.version;
          return;
        }

        if (versionRef.current !== payload.version) {
          versionRef.current = payload.version;
          isRefreshingRef.current = true;
          router.refresh();
          cooldownTimerId = window.setTimeout(releaseRefreshLock, REFRESH_COOLDOWN_MS);
        }
      } catch {
        return;
      } finally {
        isPendingRef.current = false;
      }
    };

    const handleFocus = () => {
      void checkVersion();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkVersion();
      }
    };

    void checkVersion();
    const intervalId = window.setInterval(() => {
      void checkVersion();
    }, POLL_MS);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isStopped = true;
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (cooldownTimerId !== null) {
        window.clearTimeout(cooldownTimerId);
      }
    };
  }, [router]);

  return null;
}

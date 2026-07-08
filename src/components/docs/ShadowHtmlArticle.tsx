"use client";

import { useEffect, useRef } from "react";

type ShadowHtmlArticleProps = {
  html: string;
};

export function ShadowHtmlArticle({ html }: ShadowHtmlArticleProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = html;
  }, [html]);

  return <div ref={hostRef} className="shadow-doc-host" />;
}

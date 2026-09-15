"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function pushEvent(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    pushEvent({
      event: "virtual_page_view",
      page_path: pathname,
    });

    if (pathname === "/ai-transformation") {
      pushEvent({ event: "workshop_page_view" });
    }

    if (pathname === "/book") {
      pushEvent({ event: "booking_page_view" });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const cta = target?.closest<HTMLElement>("[data-cta]");

      if (!cta) return;

      const href = cta instanceof HTMLAnchorElement ? cta.getAttribute("href") : null;
      const ctaName = cta.dataset.cta || "unknown";

      pushEvent({
        event: "cta_click",
        cta_name: ctaName,
        cta_href: href,
        page_path: window.location.pathname,
      });

      if (href === "/book" || href?.endsWith("/book")) {
        pushEvent({
          event: "booking_started",
          cta_name: ctaName,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

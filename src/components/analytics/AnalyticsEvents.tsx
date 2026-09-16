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

    if (pathname === "/book/confirmed") {
      pushEvent({
        event: "booking_completed",
        page_path: pathname,
        conversion_type: "ai_opportunity_call",
      });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a");
      const trackedElement = target?.closest<HTMLElement>("[data-cta]");
      const href = anchor?.getAttribute("href") || null;
      const ctaName = trackedElement?.dataset.cta || href || "unknown";

      const isBooking = href === "/book" || href?.endsWith("/book");
      const isCalendarBooking = trackedElement?.dataset.cta === "calendar-booking";
      const isWorkshop = href === "/ai-transformation" || href?.endsWith("/ai-transformation");
      const isExplicitCta = Boolean(trackedElement);

      if (!isBooking && !isWorkshop && !isExplicitCta) return;

      pushEvent({
        event: "cta_click",
        cta_name: ctaName,
        cta_href: href,
        page_path: window.location.pathname,
      });

      if (isWorkshop) {
        pushEvent({
          event: "workshop_interest",
          cta_name: ctaName,
          page_path: window.location.pathname,
        });
      }

      if (isBooking || isCalendarBooking) {
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

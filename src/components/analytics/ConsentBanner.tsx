"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const consentKey = "archangel_consent_v1";

function updateConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    analytics_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_updated",
    consent_choice: choice,
  });
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(consentKey) as ConsentChoice | null;

    if (stored === "granted" || stored === "denied") {
      updateConsent(stored);
      return;
    }

    setVisible(true);
  }, []);

  function choose(choice: ConsentChoice) {
    window.localStorage.setItem(consentKey, choice);
    updateConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-[1.4rem] border border-[#d7d7d1] bg-[#f8f8f4]/98 p-4 md:p-5 shadow-[0_24px_80px_rgba(20,20,18,0.18)] backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <p className="text-sm leading-relaxed text-[#65655f] md:flex-1">
          Archangel uses limited analytics and advertising measurement to understand site performance. Read our{" "}
          <Link href="/privacy" className="text-[#11110f] underline underline-offset-4">
            privacy notice
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-full border border-[#cfcfc9] px-4 py-2.5 text-sm text-[#4f4f4a] hover:border-[#9f9f98] transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-[#11110f] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#292927] transition-colors"
            style={{ color: "#f8f8f4", WebkitTextFillColor: "#f8f8f4" }}
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

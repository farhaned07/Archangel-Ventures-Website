"use client";

import { useEffect } from "react";

/* Motion is an enhancement only: content remains visible if JS is unavailable,
   IntersectionObserver is unsupported, or reduced motion is preferred. */
export function ExperienceMotion() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll<HTMLElement>(".ex-home .ex-reveal");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("ex-in-view");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * .9) return;
      element.classList.add("ex-waiting");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}

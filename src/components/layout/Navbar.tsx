"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { bookingHref } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#deded8]/85 bg-[#f6f6f2]/88 backdrop-blur-xl">
        <div className="page-shell h-[64px] md:h-[72px] flex items-center justify-between">
          <Link href="/" aria-label="Archangel home" className="shrink-0">
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.34em] text-[#11110f] uppercase leading-none">ΛRCHΛNGEL</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto mr-8 lg:mr-10 text-sm text-[#5f5f59]">
            <Link href="/#workshop" className="hover:text-[#11110f] transition-colors">Workshop</Link>
            <Link href="/#how" className="hover:text-[#11110f] transition-colors">Approach</Link>
            <Link href="/#examples" className="hover:text-[#11110f] transition-colors">Use cases</Link>
            <Link href="/work" className="hover:text-[#11110f] transition-colors">Company</Link>
          </div>

          <a
            href={bookingHref}
            data-cta="nav-opportunity-call"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#11110f] px-4 py-2.5 text-sm font-medium hover:bg-[#272724] transition-colors"
            style={{ color: "#f8f8f4", WebkitTextFillColor: "#f8f8f4" }}
          >
            Book a call <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#f8f8f4", stroke: "#f8f8f4" }} />
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden w-10 h-10 rounded-full border border-[#d7d7d1] flex items-center justify-center text-[#11110f] bg-white/50"
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="fixed inset-0 z-40 bg-[#f6f6f2] pt-[88px] md:hidden">
          <div className="page-shell flex flex-col min-h-[calc(100dvh-88px)]">
            <div className="border-t border-[#deded8]">
              <MobileLink href="/#workshop" onClick={() => setOpen(false)}>Workshop</MobileLink>
              <MobileLink href="/#how" onClick={() => setOpen(false)}>Approach</MobileLink>
              <MobileLink href="/#examples" onClick={() => setOpen(false)}>Use cases</MobileLink>
              <MobileLink href="/work" onClick={() => setOpen(false)}>Company</MobileLink>
            </div>

            <div className="mt-auto pb-[calc(2rem+env(safe-area-inset-bottom))]">
              <a
                href={bookingHref}
                onClick={() => setOpen(false)}
                data-cta="mobile-nav-opportunity-call"
                className="button-primary w-full"
              >
                Book a 15 minute call <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-[#888882] mt-4 text-center">Bangkok · BOI promoted · Strategy + implementation</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center justify-between py-6 border-b border-[#deded8] text-2xl tracking-[-0.035em] font-medium">
      {children}
      <ArrowUpRight className="w-4 h-4 text-[#898983]" />
    </Link>
  );
}

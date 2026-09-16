"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { bookingHref } from "@/lib/site";

const links = [
  { href: "/ai-transformation-partner-thailand", label: "What we do" },
  { href: "/work", label: "Our work" },
  { href: "/ai-transformation", label: "Workshop" },
  { href: "/farhan-sabbir", label: "Leadership" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open) {
      d.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        d.close();
        document.body.style.overflow = before;
      };
    }
    d.close();
  }, [open]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <>
      <header
        className={`site-header ${pathname === "/" ? "header-on-dark" : ""}`}
      >
        <nav className="page-shell nav-inner" aria-label="Main navigation">
          <Link href="/" aria-label="Archangel home" className="wordmark">
            ΛRCHΛNGEL
          </Link>
          <div className="desktop-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href={bookingHref}
            className="nav-call"
            data-cta="nav-opportunity-call"
          >
            Let’s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={trigger}
            type="button"
            className="menu-toggle"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={23} />
          </button>
        </nav>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Navigation"
        onCancel={close}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-nav-top">
          <Link href="/" className="wordmark" onClick={close}>
            ΛRCHΛNGEL
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close navigation"
            onClick={close}
          >
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={close}>
              <span>0{i + 1}</span>
              {l.label}
              <ArrowUpRight size={23} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <Link
          href={bookingHref}
          className="button-primary"
          data-cta="mobile-nav-opportunity-call"
          onClick={close}
        >
          Book an AI Opportunity Call
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <p>
          Archangel Company Limited
          <br />
          Bangkok · Thailand BOI promoted
        </p>
      </dialog>
    </>
  );
}

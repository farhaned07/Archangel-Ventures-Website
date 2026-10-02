"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { bookingHref } from "@/lib/site";

const links = [
  { href: "/services", label: "Capabilities" },
  { href: "/ai-transformation", label: "AI transformation" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
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
      <header className="site-header">
        <nav className="page-shell nav-inner" aria-label="Main navigation">
          <BrandMark className="wordmark nav-wordmark" />

          <div className="desktop-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={bookingHref}
            className="nav-call"
            data-cta="nav-project-call"
          >
            Start a conversation
            <ArrowUpRight size={15} aria-hidden="true" />
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
            <Menu size={25} strokeWidth={1.3} />
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
          <BrandMark className="wordmark" />
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close navigation"
            onClick={close}
          >
            <X size={24} strokeWidth={1.3} />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={close}>
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <Link
          href={bookingHref}
          className="button-primary"
          data-cta="mobile-nav-project-call"
          onClick={close}
        >
          Start a conversation
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <p>
          Archangel Company Limited
          <br />
          AI Transformation · Bangkok, Thailand
        </p>
      </dialog>
    </>
  );
}

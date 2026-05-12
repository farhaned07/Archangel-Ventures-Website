"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#222]">
                <div className="flex items-center justify-between px-6 py-4 md:px-8 max-w-[1400px] mx-auto">
                    <Link href="/" className="text-lg font-bold tracking-[0.18em] text-white uppercase">
                        Archangel
                    </Link>

                    <div className="hidden md:flex items-center gap-12">
                        <NavLink href="#thesis">01 Thesis</NavLink>
                        <NavLink href="#focus">02 Focus</NavLink>
                        <NavLink href="#companies">03 Companies</NavLink>
                        <NavLink href="#approach">04 Approach</NavLink>
                        <NavLink href="#structure">05 Structure</NavLink>
                    </div>

                    <Link
                        href="#contact"
                        className="hidden md:inline-flex text-sm font-medium text-white border border-[#333] px-6 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                        Contact
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-8">
                        <MobileNavLink href="#thesis" onClick={closeMenu}>01 / Thesis</MobileNavLink>
                        <MobileNavLink href="#focus" onClick={closeMenu}>02 / Focus</MobileNavLink>
                        <MobileNavLink href="#companies" onClick={closeMenu}>03 / Companies</MobileNavLink>
                        <MobileNavLink href="#approach" onClick={closeMenu}>04 / Approach</MobileNavLink>
                        <MobileNavLink href="#structure" onClick={closeMenu}>05 / Structure</MobileNavLink>

                        <Link
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-8 text-xl font-medium text-white border-b border-white/20 pb-4 inline-block"
                        >
                            Contact →
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-xs font-mono uppercase tracking-widest text-[#888] hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-2xl font-light text-[#E5E5E5] border-b border-[#222] pb-6 block"
        >
            {children}
        </Link>
    );
}

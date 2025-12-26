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
                    {/* Brand - Text Only, No Logo Mark */}
                    <Link href="/" className="text-lg font-bold tracking-tight text-white uppercase">
                        Archangel
                    </Link>

                    {/* Desktop Navigation - Mono, Spaced */}
                    <div className="hidden md:flex items-center gap-12">
                        <NavLink href="#identity">01 Identity</NavLink>
                        <NavLink href="#focus">02 Focus</NavLink>
                        <NavLink href="#portfolio">03 Portfolio</NavLink>
                        <NavLink href="#operations">04 Operations</NavLink>
                    </div>

                    {/* Desktop Contact - Minimal Text Link */}
                    <Link
                        href="#signal"
                        className="hidden md:inline-flex text-sm font-medium text-white border border-[#333] px-6 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                        Contact
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Sharp, Black */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-8">
                        <MobileNavLink href="#identity" onClick={closeMenu}>01 / Identity</MobileNavLink>
                        <MobileNavLink href="#focus" onClick={closeMenu}>02 / Focus</MobileNavLink>
                        <MobileNavLink href="#portfolio" onClick={closeMenu}>03 / Portfolio</MobileNavLink>
                        <MobileNavLink href="#operations" onClick={closeMenu}>04 / Operations</MobileNavLink>

                        <Link
                            href="#signal"
                            onClick={closeMenu}
                            className="mt-8 text-xl font-medium text-white border-b border-white/20 pb-4 inline-block"
                        >
                            Contact Signal →
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

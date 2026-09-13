"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/96 backdrop-blur-md border-b border-[#202226]">
                <div className="flex items-stretch justify-between max-w-[1500px] mx-auto border-l border-r border-[#202226]">
                    <Link
                        href="/"
                        aria-label="Archangel home"
                        className="flex items-center px-5 md:px-6 min-h-[60px] md:min-h-[64px] border-r border-[#202226]"
                    >
                        <span className="text-[12px] md:text-[13px] font-medium tracking-[0.34em] text-[#ecece8] uppercase leading-none">ΛRCHΛNGEL</span>
                    </Link>

                    <div className="hidden md:flex items-stretch ml-auto">
                        <NavLink href="/#sprint" index="01">Sprint</NavLink>
                        <NavLink href="/#how" index="02">System</NavLink>
                        <NavLink href="/#examples" index="03">Workflows</NavLink>
                        <NavLink href="/work" index="04">Record</NavLink>
                    </div>

                    <Link
                        href="/#contact"
                        className="hidden md:flex items-center gap-5 px-6 lg:px-7 border-l border-[#202226] text-[10px] font-mono uppercase tracking-[0.14em] text-[#0a0a0a] bg-[#e8e8e4] hover:bg-white transition-colors"
                    >
                        Initiate <span>↗</span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#e8e8e4] px-5 border-l border-[#202226]"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X strokeWidth={1.3} size={20} /> : <Menu strokeWidth={1.3} size={20} />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#050505] pt-24 px-5 md:hidden technical-grid">
                    <div className="border border-[#24262a] bg-[#060606]">
                        <MobileNavLink href="/#sprint" index="01" onClick={closeMenu}>AI Workflow Sprint</MobileNavLink>
                        <MobileNavLink href="/#how" index="02" onClick={closeMenu}>System architecture</MobileNavLink>
                        <MobileNavLink href="/#examples" index="03" onClick={closeMenu}>Candidate workflows</MobileNavLink>
                        <MobileNavLink href="/work" index="04" onClick={closeMenu}>Company record</MobileNavLink>
                    </div>

                    <Link
                        href="/#contact"
                        onClick={closeMenu}
                        className="mt-5 flex items-center justify-between bg-[#e8e8e4] text-[#070707] px-5 py-4 text-xs font-mono uppercase tracking-[0.12em]"
                    >
                        Bring a workflow <span>↗</span>
                    </Link>
                </div>
            )}
        </>
    );
}

function NavLink({ href, children, index }: { href: string; children: React.ReactNode; index: string }) {
    return (
        <Link
            href={href}
            className="group min-w-[112px] lg:min-w-[128px] flex flex-col justify-center px-4 lg:px-5 border-l border-[#202226] hover:bg-[#0a0a0a] transition-colors"
        >
            <span className="font-mono text-[8px] tracking-[0.14em] text-[#4c5055] mb-1">{index}</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#898d92] group-hover:text-[#e7e7e3] transition-colors">{children}</span>
        </Link>
    );
}

function MobileNavLink({ href, children, index, onClick }: { href: string; children: React.ReactNode; index: string; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="grid grid-cols-[42px_1fr_auto] items-center px-5 py-6 border-b last:border-b-0 border-[#24262a] text-[#d8d8d4]"
        >
            <span className="font-mono text-[9px] text-[#4e5257]">{index}</span>
            <span className="text-lg font-light">{children}</span>
            <span className="text-[#55595e]">↗</span>
        </Link>
    );
}

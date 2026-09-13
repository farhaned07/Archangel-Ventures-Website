import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-[#222]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 border-b border-[#222] pb-10 md:pb-12">
                    <div>
                        <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-4">Archangel</span>
                        <p className="text-[#E5E5E5] text-lg md:text-xl max-w-md leading-relaxed">
                            Applied AI for expensive manual business processes.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-3">
                        <Link href="/work" className="text-[#888] text-sm hover:text-white transition-colors">Work</Link>
                        <a href="mailto:build@archangel.ventures?subject=AI%20Workflow%20Sprint" className="text-white text-sm hover:text-[#AAA] transition-colors">
                            build@archangel.ventures
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#444]">
                        Bangkok, Thailand · BOI promoted
                    </p>
                    <p className="text-xs text-[#444] font-mono">
                        © 2026 Archangel Company Limited
                    </p>
                </div>
            </div>
        </footer>
    );
}

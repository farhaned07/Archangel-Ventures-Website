export function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-[#222]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-12 md:py-20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 border-b border-[#222] pb-10 md:pb-14">
                    <div>
                        <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-4">Contact</span>
                        <a
                            href="mailto:build@archangel.ventures"
                            className="text-[#E5E5E5] text-lg md:text-xl hover:text-white transition-colors"
                        >
                            build@archangel.ventures
                        </a>
                    </div>

                    <div className="md:text-right max-w-sm">
                        <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-4">Archangel</span>
                        <p className="text-[#888] text-sm md:text-base leading-relaxed">
                            Founder-led holding company building AI companies for emerging-market realities.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#333]">
                        Thailand · Bangladesh · Southeast Asia
                    </p>
                    <p className="text-xs text-[#444] font-mono">
                        © 2026 Archangel
                    </p>
                </div>
            </div>
        </footer>
    );
}

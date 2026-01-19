export function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-[#222]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 md:py-32 flex flex-col justify-between min-h-[50vh]">

                {/* Top Grid: Links & Meta */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-3">
                        <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-6">Connect</span>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-[#E5E5E5] hover:text-white transition-colors">Twitter / X</a>
                            <a href="#" className="text-[#E5E5E5] hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="text-[#E5E5E5] hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <span className="text-xs font-mono text-[#666] uppercase tracking-widest block mb-6">Location</span>
                        <p className="text-[#E5E5E5]">Thailand-based.</p>
                        <p className="text-[#888]">Scaling globally.</p>
                    </div>

                    <div className="md:col-span-6 text-right md:text-right">
                        <p className="text-[#666] text-sm md:text-base max-w-md ml-auto">
                            Founder-led holding company for institutional infrastructure.<br />
                            Health • AI • Public Systems
                        </p>
                    </div>
                </div>

                {/* Bottom: Wordmark & Copyright */}
                <div className="flex flex-col md:flex-row items-end justify-between border-t border-[#222] pt-8">
                    <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-[#111] select-none pointer-events-none mb-4 md:mb-0">
                        ARCHANGEL
                    </h1>
                    <div className="text-xs text-[#444] font-mono">
                        © 2025 Archangel Ventures. Built to endure.
                    </div>
                </div>
            </div>
        </footer>
    );
}

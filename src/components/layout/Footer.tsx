import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-[#202226]">
            <div className="max-w-[1500px] mx-auto border-l border-r border-[#202226]">
                <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#202226]">
                    <div className="md:col-span-7 p-6 md:p-8 lg:p-10 md:border-r border-[#202226]">
                        <div className="flex items-center justify-between text-mono-label mb-10">
                            <span>Archangel / AI Transformation Partner</span>
                            <span className="text-[#494d52]">AG / TH</span>
                        </div>
                        <p className="text-[#dededa] text-xl md:text-2xl max-w-xl leading-snug">
                            Find where AI creates measurable value. Implement what works.
                        </p>
                    </div>

                    <div className="md:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-12">
                        <div className="grid grid-cols-2 gap-8 text-sm">
                            <div>
                                <span className="text-mono-label block mb-4">Start</span>
                                <Link href="/ai-transformation" className="text-[#8b8f94] hover:text-white transition-colors">AI transformation workshop</Link>
                            </div>
                            <div>
                                <span className="text-mono-label block mb-4">Contact</span>
                                <a href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call" className="text-[#d8d8d4] hover:text-white transition-colors break-all">
                                    build@archangel.ventures
                                </a>
                            </div>
                        </div>
                        <div className="text-mono-label flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#b9bbb7]" />
                            <span>Bangkok / Operational</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-[9px] font-mono uppercase tracking-[0.14em] text-[#4e5257]">
                    <div className="p-4 border-b sm:border-r md:border-b-0 border-[#202226]">Bangkok, Thailand</div>
                    <div className="p-4 border-b md:border-r md:border-b-0 border-[#202226]">BOI promoted</div>
                    <div className="p-4 border-b sm:border-r sm:border-b-0 border-[#202226]">Software + digital platform</div>
                    <div className="p-4">© 2026 Archangel Co., Ltd.</div>
                </div>
            </div>
        </footer>
    );
}

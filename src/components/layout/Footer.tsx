import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#11110f] text-[#f5f5f0]">
      <div className="page-shell py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.34em] uppercase">ΛRCHΛNGEL</span>
            <p className="display-medium max-w-3xl mt-10">Make AI useful at work.</p>
            <p className="text-[#aaa9a2] text-sm md:text-base max-w-xl mt-6 leading-relaxed">
              Strategy and implementation for management teams that want measurable operating value from AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-[#74746e] mb-4">Explore</p>
              <div className="space-y-3">
                <Link href="/ai-transformation-partner-thailand" className="block hover:text-white transition-colors">AI transformation Thailand</Link>
                <Link href="/ai-transformation" className="block hover:text-white transition-colors">AI workshop</Link>
                <Link href="/work" className="block hover:text-white transition-colors">Company</Link>
                <Link href="/privacy" className="block hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
            <div>
              <p className="text-[#74746e] mb-4">Contact</p>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors break-all">
                {site.email} <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
              <p className="mt-4 text-[#777771] leading-relaxed">{site.location}<br />Thailand BOI promoted</p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-6 border-t border-[#2d2d2a] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-[#777771]">
          <span>{site.legalName} · Bangkok · Thailand BOI promoted</span>
          <span>© 2026 {site.name}</span>
        </div>
      </div>
    </footer>
  );
}

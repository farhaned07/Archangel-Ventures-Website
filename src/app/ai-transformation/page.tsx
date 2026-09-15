import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DecisionPackArtwork, OperatingMapArtwork } from "@/components/ui/EditorialArtwork";
import { CompactAudience, CompactCommercialPath, WorkshopOutputExplorer } from "@/components/ui/InteractiveExperience";
import { emailHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation Workshop Thailand | Archangel",
  description:
    "A fixed fee AI transformation workshop for management teams in Bangkok. Identify the highest value AI opportunities, estimate ROI, and leave with a practical 30 day implementation plan.",
};

export default function AITransformationPage() {
  return (
    <main className="pt-[64px] md:pt-[72px] pb-20 md:pb-0 overflow-hidden">
      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 xl:gap-20 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-7 md:mb-9">
              <span className="pill">Management workshop</span>
              <span className="pill">Bangkok · on site</span>
            </div>

            <h1 className="display-hero max-w-4xl">
              Find the AI moves
              <span className="block text-[#777771]">worth funding.</span>
            </h1>

            <p className="mt-7 md:mt-9 text-lg md:text-xl leading-relaxed text-[#666660] max-w-xl">
              Map the work. Rank the opportunities. Decide what deserves investment.
            </p>

            <div className="mt-8 md:mt-10 flex items-end gap-5 border-t border-[#deded8] pt-7 max-w-xl">
              <div>
                <span className="text-sm text-[#777771] block mb-2">Fixed fee</span>
                <span className="text-5xl md:text-6xl tracking-[-0.06em] font-medium">{site.workshopPrice}</span>
              </div>
              <span className="text-sm text-[#777771] pb-1">credited toward implementation</span>
            </div>

            <a href={emailHref} className="button-primary mt-8 w-full sm:w-auto" data-cta="opportunity-call">
              Book a 15 minute call <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:-mr-10 xl:-mr-20">
            <OperatingMapArtwork priority />
          </div>
        </div>
      </section>

      <WorkshopOutputExplorer />

      <section className="page-shell section-space">
        <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_1.42fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-[#85857f]">The output</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">Open it the next morning.</h2>
            <p className="mt-5 text-base md:text-lg text-[#74746e] max-w-md">A practical decision pack built from your own workflows and constraints.</p>
          </div>
          <DecisionPackArtwork />
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell py-18 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_1.42fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow text-[#7a7a74]">In the room</p>
              <h2 className="mt-5 text-[2.7rem] sm:text-[3.5rem] lg:text-[4.2rem] leading-[0.96] tracking-[-0.055em] font-medium">The people who own the work.</h2>
            </div>
            <CompactAudience />
          </div>
        </div>
      </section>

      <section className="page-shell py-18 md:py-28">
        <div className="max-w-5xl mb-8 md:mb-10">
          <p className="eyebrow text-[#85857f]">Commercial path</p>
          <h2 className="mt-5 text-[2.5rem] sm:text-[3.3rem] lg:text-[4rem] leading-[0.97] tracking-[-0.05em] font-medium">Prove before you scale.</h2>
        </div>
        <CompactCommercialPath price={site.workshopPrice} />
        <p className="mt-5 text-sm text-[#777771]">If Archangel implements one of the selected projects, the workshop fee is credited toward implementation.</p>
      </section>

      <section className="page-shell pb-16 md:pb-32">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#11110f] text-[#f7f7f2] px-6 py-11 md:p-14 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-end">
            <div>
              <p className="eyebrow text-[#8f8f88]">Start here</p>
              <h2 className="mt-5 max-w-4xl text-[2.65rem] sm:text-[3.5rem] lg:text-[4.9rem] leading-[0.97] tracking-[-0.055em] font-medium">Where is work losing money?</h2>
            </div>
            <a href={emailHref} className="button-light" data-cta="opportunity-call">
              Book the call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="fixed md:hidden left-0 right-0 bottom-0 z-40 border-t border-[#deded8] bg-[#f6f6f2]/94 backdrop-blur-xl px-3 py-3 safe-bottom">
        <a href={emailHref} className="button-primary w-full" data-cta="mobile-opportunity-call">
          <span>Book a 15 minute call</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
}

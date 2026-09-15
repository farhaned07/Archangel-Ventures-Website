import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DecisionPackArtwork, OperatingMapArtwork } from "@/components/ui/EditorialArtwork";
import { WorkshopOutputExplorer } from "@/components/ui/InteractiveExperience";
import { ClosingSequence } from "@/components/ui/ClosingSequence";
import { bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation Workshop Thailand | Archangel",
  description:
    "A fixed fee AI transformation workshop for management teams in Bangkok. Identify the highest value AI opportunities, estimate ROI, and leave with a practical 30 day implementation plan.",
};

const fit = [
  "AI is already being used, but business impact is unclear.",
  "Manual work is consuming time across finance, operations, sales or reporting.",
  "Management wants to know what is worth funding before starting a larger AI programme.",
];

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
              Map the work. Rank 3–5 opportunities. Decide what deserves investment.
            </p>

            <div className="mt-8 md:mt-10 border-t border-[#deded8] pt-7 max-w-xl">
              <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
                <div>
                  <span className="text-sm text-[#777771] block mb-2">Fixed fee</span>
                  <span className="text-5xl md:text-6xl tracking-[-0.06em] font-medium">{site.workshopPrice}</span>
                </div>
                <span className="text-sm text-[#777771] pb-1">credited toward implementation</span>
              </div>
            </div>

            <Link href={bookingHref} className="button-primary mt-8 w-full sm:w-auto" data-cta="opportunity-call">
              Book a 15 minute call <ArrowRight className="w-4 h-4" />
            </Link>
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
            <p className="eyebrow text-[#85857f]">What you leave with</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">Open it the next morning.</h2>
            <p className="mt-5 text-base md:text-lg text-[#74746e] max-w-md">A practical decision pack built from your own workflows and constraints.</p>
          </div>
          <DecisionPackArtwork />
        </div>

        <div className="mt-14 md:mt-20 border-t border-[#d7d7d1] pt-8 md:pt-10">
          <p className="eyebrow text-[#85857f]">Good fit</p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-3">
            {fit.map((item, index) => (
              <div key={item} className="rounded-[1.6rem] bg-white border border-[#deded8] p-5 md:p-6 min-h-[165px] flex flex-col justify-between">
                <span className="text-xs text-[#9a9a94]">0{index + 1}</span>
                <p className="text-base md:text-lg tracking-[-0.025em] leading-snug text-[#333330]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingSequence compact />

      <div className="fixed md:hidden left-0 right-0 bottom-0 z-40 border-t border-[#deded8] bg-[#f6f6f2]/94 backdrop-blur-xl px-3 py-3 safe-bottom">
        <Link href={bookingHref} className="button-primary w-full" data-cta="mobile-opportunity-call">
          <span>Book a 15 minute call</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}

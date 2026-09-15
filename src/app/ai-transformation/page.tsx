import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { DecisionPackArtwork, OperatingMapArtwork } from "@/components/ui/EditorialArtwork";
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-7 md:mb-9">
              <span className="pill">Management workshop</span>
              <span className="pill">Bangkok · on site</span>
            </div>

            <h1 className="display-hero max-w-4xl">
              Find the AI moves
              <span className="block text-[#777771]">worth funding.</span>
            </h1>

            <p className="mt-7 md:mt-9 text-lg md:text-xl leading-relaxed text-[#666660] max-w-2xl">
              One focused management session to identify where AI can create measurable value in your business, what should be implemented first, and what should wait.
            </p>

            <div className="mt-8 md:mt-10 flex items-end gap-5 border-t border-[#deded8] pt-7 max-w-xl">
              <div>
                <span className="text-sm text-[#777771] block mb-2">Fixed fee</span>
                <span className="text-5xl md:text-6xl tracking-[-0.06em] font-medium">{site.workshopPrice}</span>
              </div>
              <span className="text-sm text-[#777771] pb-1">Workshop fee credited toward implementation</span>
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

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-18 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-[#8f8f88]">What you buy</p>
              <h2 className="display-large mt-5 max-w-3xl">Management clarity, not AI education.</h2>
              <p className="text-[#aaa9a2] mt-7 text-lg leading-relaxed max-w-xl">
                The workshop is designed to end with decisions: where the business case is strongest, what the first implementation should be, and what is not worth building yet.
              </p>
            </div>

            <div className="border-t border-[#343431]">
              <Deliverable number="01" title="Workflow map" text="See where time, cost and manual effort are being lost." />
              <Deliverable number="02" title="3 to 5 priorities" text="Rank the AI opportunities worth management attention." />
              <Deliverable number="03" title="ROI analysis" text="Compare potential business value, readiness and implementation effort." />
              <Deliverable number="04" title="30 day action plan" text="Choose what should happen first and what should wait." />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-[#85857f]">The output</p>
            <h2 className="display-large mt-5">Something management can use the next morning.</h2>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#686862] max-w-xl">
              Your decision pack is built from your actual workflows, priorities and operating constraints. No fabricated benchmark numbers. No generic AI roadmap.
            </p>
          </div>
          <DecisionPackArtwork />
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell section-space">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#7a7a74]">Who should be in the room</p>
            <h2 className="display-large mt-5">The people who own the work and the economics.</h2>
          </div>

          <div className="mt-12 md:mt-16 border-t border-[#d2d2cc]">
            <AudienceRow title="Management" text="CEO, COO, CFO, GM or business unit leader who can decide what is worth funding." />
            <AudienceRow title="Process owner" text="The person responsible for the workflow being discussed: finance, operations, sales, customer service or reporting." />
            <AudienceRow title="Technology" text="IT or digital leadership where data access, security, governance or systems architecture will materially affect implementation." />
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-32">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-white border border-[#deded8] p-6 md:p-10 lg:p-14 shadow-[0_24px_80px_rgba(20,20,18,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-20 items-end">
            <div>
              <p className="eyebrow text-[#85857f]">Commercial rule</p>
              <h2 className="display-medium mt-5">If the case is strong, the workshop becomes the first step of implementation.</h2>
              <p className="mt-6 text-lg text-[#6d6d67] leading-relaxed max-w-2xl">
                If Archangel implements one of the selected projects, the {site.workshopPrice} workshop fee is credited toward implementation.
              </p>
            </div>
            <div className="space-y-3">
              <Step number="01" text="15 minute qualification call" />
              <Step number="02" text={`${site.workshopPrice} management workshop`} />
              <Step number="03" text="Implementation only if the economics justify it" />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-32">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#11110f] text-[#f7f7f2] px-6 py-11 md:p-14 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-end">
            <div>
              <p className="eyebrow text-[#8f8f88]">Start here</p>
              <h2 className="mt-5 max-w-4xl text-[2.65rem] sm:text-[3.5rem] lg:text-[4.9rem] leading-[0.97] tracking-[-0.055em] font-medium">Where is your business losing time?</h2>
              <p className="text-[#aaa9a2] mt-6 text-base md:text-lg max-w-2xl">The first call is 15 minutes. We use it to decide whether the workshop is the right next step.</p>
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

function Deliverable({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="grid grid-cols-[48px_1fr] md:grid-cols-[60px_0.75fr_1fr] gap-4 md:gap-8 py-6 md:py-8 border-b border-[#343431] items-start">
      <span className="text-xs text-[#777771] pt-1">{number}</span>
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-[#8f8f88]" />
        <h3 className="text-lg md:text-xl font-medium">{title}</h3>
      </div>
      <p className="col-start-2 md:col-start-auto text-[#9f9f98] leading-relaxed">{text}</p>
    </div>
  );
}

function AudienceRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[0.55fr_1.45fr] gap-3 md:gap-12 py-7 md:py-9 border-b border-[#d2d2cc]">
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{title}</h3>
      <p className="text-[#6e6e68] leading-relaxed max-w-3xl">{text}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-[#f0f0eb] px-4 py-4 md:px-5">
      <span className="w-8 h-8 rounded-full bg-[#11110f] text-white flex items-center justify-center text-xs font-semibold shrink-0">{number}</span>
      <span className="text-sm md:text-base font-medium text-[#2b2b28]">{text}</span>
    </div>
  );
}

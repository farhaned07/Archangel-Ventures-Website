"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OperatingMapArtwork } from "@/components/ui/EditorialArtwork";
import { WorkflowSimulator } from "@/components/ui/InteractiveExperience";
import { TransformationWorkbench } from "@/components/ui/ProductExperiences";
import { WorkshopReveal } from "@/components/ui/WorkshopReveal";
import { ClosingSequence } from "@/components/ui/ClosingSequence";
import { bookingHref, site } from "@/lib/site";

export default function Home() {
  return (
    <main className="pt-[64px] md:pt-[72px] overflow-hidden">
      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 xl:gap-20 items-center">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 mb-7 md:mb-9">
                <span className="pill">Bangkok based</span>
                <span className="pill">BOI promoted</span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="display-hero max-w-[850px]">
                Make AI useful
                <span className="block text-[#777771]">at work.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 md:mt-9 text-lg md:text-xl leading-relaxed text-[#666660] max-w-xl">
                Find the expensive work. Redesign it. Build what proves value.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
                  Start with the workshop <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={bookingHref} className="button-secondary w-full sm:w-auto" data-cta="opportunity-call">
                  Talk to Archangel <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} variant="fade">
            <div className="lg:-mr-10 xl:-mr-20">
              <OperatingMapArtwork priority />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-20 md:py-28 lg:py-32">
          <p className="eyebrow text-[#777771] mb-7">The gap</p>
          <Reveal>
            <h2 className="text-[3.2rem] sm:text-[4.8rem] lg:text-[7rem] leading-[0.9] tracking-[-0.07em] font-medium max-w-6xl">
              AI is everywhere.
              <span className="block text-[#74746e]">Value is not.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-9 md:mt-12 max-w-2xl text-lg md:text-2xl leading-relaxed tracking-[-0.025em] text-[#a2a29b]">
              Most companies do not need more AI tools. They need to know where AI is actually worth using.
            </p>
          </Reveal>
        </div>
      </section>

      <TransformationWorkbench />

      <WorkshopReveal price={site.workshopPrice} />

      <WorkflowSimulator />

      <ClosingSequence />
    </main>
  );
}

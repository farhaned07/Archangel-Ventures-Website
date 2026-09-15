"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { OperatingMapArtwork } from "@/components/ui/EditorialArtwork";
import { WorkflowSimulator } from "@/components/ui/InteractiveExperience";
import { TransformationWorkbench, HannaProductDemo } from "@/components/ui/ProductExperiences";
import { WorkshopReveal } from "@/components/ui/WorkshopReveal";
import { emailHref, site } from "@/lib/site";

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
                <a href={emailHref} className="button-secondary w-full sm:w-auto" data-cta="opportunity-call">
                  Talk to Archangel <ArrowUpRight className="w-4 h-4" />
                </a>
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
        </div>
      </section>

      <TransformationWorkbench />

      <WorkshopReveal price={site.workshopPrice} />

      <WorkflowSimulator />

      <HannaProductDemo />

      <section className="bg-white border-y border-[#e1e1db]">
        <div className="page-shell py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="eyebrow text-[#85857f]">Archangel</p>
              <h2 className="mt-5 text-[2.5rem] sm:text-[3.4rem] lg:text-[4.1rem] leading-[0.96] tracking-[-0.055em] font-medium max-w-3xl">Strategy + implementation, under one team.</h2>
            </div>
            <div className="flex flex-wrap gap-2 max-w-lg lg:justify-end">
              <span className="pill bg-[#f6f6f2]">Thailand BOI promoted</span>
              <span className="pill bg-[#f6f6f2]">Founder led</span>
              <span className="pill bg-[#f6f6f2]">Applied AI</span>
              <Link href="/work" className="pill bg-[#11110f] !text-white !border-[#11110f]">Company <ArrowUpRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-28 lg:py-32">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#11110f] text-[#f7f7f2] px-6 py-11 md:p-14 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-end">
            <div>
              <p className="eyebrow text-[#8f8f88]">Start a conversation</p>
              <h2 className="mt-5 max-w-4xl text-[2.65rem] sm:text-[3.5rem] lg:text-[4.9rem] leading-[0.97] tracking-[-0.055em] font-medium">Where is your business losing time?</h2>
            </div>
            <a href={emailHref} className="button-light" data-cta="opportunity-call">
              Book the call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

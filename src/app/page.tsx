"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowSimulator } from "@/components/ui/InteractiveExperience";
import { TransformationWorkbench } from "@/components/ui/ProductExperiences";
import { WorkshopReveal } from "@/components/ui/WorkshopReveal";
import { ClosingSequence } from "@/components/ui/ClosingSequence";
import { bookingHref, site } from "@/lib/site";

export default function Home() {
  return (
    <main className="pt-[64px] md:pt-[72px] overflow-hidden">
      <section className="page-shell pt-14 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-8 md:mb-10">
              <Link href="/ai-transformation-partner-thailand" className="pill">
                AI Transformation Partner · Thailand
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-[4rem] sm:text-[5.8rem] lg:text-[7.9rem] leading-[0.88] tracking-[-0.075em] font-medium max-w-[1180px]">
              Make AI useful
              <span className="block text-[#777771]">at work.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 md:mt-10 text-lg md:text-2xl leading-relaxed tracking-[-0.02em] text-[#666660] max-w-2xl">
              Find the expensive work. Redesign it. Build what proves value.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 md:mt-11 flex flex-col sm:flex-row gap-3">
              <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
                Start with the workshop <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={bookingHref} className="button-secondary w-full sm:w-auto" data-cta="opportunity-call">
                Talk to Archangel <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-14 md:mt-20 border-y border-[#deded8] grid grid-cols-1 sm:grid-cols-3">
              <TrustItem icon={<ShieldCheck className="w-4 h-4" />} label="Thailand BOI promoted" detail="Software & digital platform" />
              <TrustItem icon={<Building2 className="w-4 h-4" />} label="Archangel Company Limited" detail="Strategy + implementation" />
              <TrustItem icon={<MapPin className="w-4 h-4" />} label="Bangkok, Thailand" detail="Founder led" />
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

function TrustItem({ icon, label, detail }: { icon: React.ReactNode; label: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 py-5 sm:px-5 first:pl-0 border-b sm:border-b-0 sm:border-r border-[#deded8] last:border-0">
      <span className="mt-0.5 text-[#11110f]">{icon}</span>
      <div>
        <p className="text-sm font-medium text-[#242421]">{label}</p>
        <p className="mt-1 text-xs text-[#85857f]">{detail}</p>
      </div>
    </div>
  );
}

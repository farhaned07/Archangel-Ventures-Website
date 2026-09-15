"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ValueMap, WorkshopOutputPreview } from "@/components/ui/TransformationVisuals";

const opportunityAreas = [
  ["Finance", "Invoices, approvals, reconciliation, reporting"],
  ["Operations", "Handoffs, repetitive decisions, status chasing"],
  ["Sales", "Research, proposals, CRM administration, follow up"],
  ["Customer", "Enquiries, triage, knowledge retrieval, escalation"],
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-[61px] md:pt-[65px]">
      <section className="w-full border-b border-[#202226] technical-grid scanline">
        <div className="container-grid">
          <div className="flex items-center justify-between py-3.5 md:py-4 border-b border-[#202226] text-mono-label">
            <span>AG / AI Transformation Partner</span>
            <span className="hidden sm:block">Bangkok · Thailand</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-14 items-center py-10 md:py-16 lg:py-20">
            <div className="lg:col-span-7 xl:col-span-7 relative z-10">
              <Reveal>
                <div className="flex items-center gap-3 mb-5 md:mb-7">
                  <span className="signal-dot" />
                  <span className="text-mono-label">BOI promoted · Strategy + implementation</span>
                </div>
              </Reveal>

              <Reveal delay={0.04}>
                <h1 className="text-hero text-[#F1F1ED] max-w-[900px]">
                  Make AI useful
                  <span className="block text-[#777b80]">inside your business.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-[#92969b] leading-relaxed max-w-xl">
                  We find expensive workflows, identify where AI creates measurable value, then implement what is worth building.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/ai-transformation"
                    className="group inline-flex items-center justify-between gap-6 bg-[#e9e7df] text-[#070707] px-5 py-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.11em] hover:bg-white transition-colors w-full sm:w-auto sm:min-w-[260px]"
                  >
                    Start with the workshop <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                    className="inline-flex items-center justify-between gap-6 border border-[#383a3e] text-[#c2c3bf] px-5 py-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.11em] hover:border-[#777b80] hover:text-white transition-colors w-full sm:w-auto sm:min-w-[230px]"
                  >
                    15 minute call <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 xl:col-span-5">
              <Reveal delay={0.08} variant="fade">
                <ValueMap />
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#202226]">
            <StatCell label="Entry offer" value="Management workshop" />
            <StatCell label="Fixed fee" value="฿45,000" accent />
            <StatCell label="Delivery" value="Bangkok · on site" />
            <StatCell label="Company" value="BOI promoted" />
          </div>
        </div>
      </section>

      <section id="how" className="w-full border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="What Archangel does" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mt-10 md:mt-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-display text-[#efefeb] max-w-xl">We begin with the work.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-[#85898e] text-[15px] md:text-lg max-w-lg leading-relaxed mt-5 md:mt-7">
                  Not with a model, chatbot or AI roadmap. We start with the processes costing the business time, money and attention.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ActionCard number="01" title="Find value" text="Map expensive work and rank the best AI opportunities." />
              <ActionCard number="02" title="Simplify" text="Remove bad process before automating anything." />
              <ActionCard number="03" title="Implement" text="Build the useful system inside the real workflow." />
              <ActionCard number="04" title="Measure" text="Compare results against the current operating baseline." accent />
            </div>
          </div>
        </div>
      </section>

      <section id="workshop" className="w-full border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="The entry offer" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 md:mt-16 items-start">
            <div className="lg:col-span-6 surface-card-amber technical-corner p-5 md:p-8 lg:p-10">
              <div className="flex items-center justify-between text-mono-label mb-8">
                <span>AI Transformation Workshop</span>
                <span className="signal-text">AG-01</span>
              </div>

              <h2 className="text-display text-[#f0f0ec] max-w-2xl">Find where AI can actually save your business money.</h2>

              <div className="flex items-end justify-between gap-4 mt-9 pt-7 border-t border-[rgba(214,161,92,0.22)]">
                <div>
                  <span className="text-mono-label block mb-2">Fixed fee</span>
                  <p className="metric-number text-[#f0efe9]">฿45,000</p>
                </div>
                <span className="text-mono-label text-right">Bangkok<br />On site</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                <CheckLine text="Workflow audit" />
                <CheckLine text="3 to 5 priorities" />
                <CheckLine text="ROI estimate" />
                <CheckLine text="30 day action plan" />
              </div>

              <Link
                href="/ai-transformation"
                className="mt-8 inline-flex items-center justify-between gap-6 bg-[#e9e7df] text-[#070707] px-5 py-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.11em] hover:bg-white transition-colors w-full"
              >
                See exactly what you get <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <WorkshopOutputPreview />
              <p className="text-[#6f7378] text-xs md:text-sm leading-relaxed mt-4 max-w-xl">
                The workshop is designed to produce management decisions, not AI education. If Archangel implements one of the selected projects, the workshop fee is credited toward implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Where value usually hides" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 md:mt-16">
            <div className="lg:col-span-4">
              <h2 className="text-display text-[#eeeeea]">Look inside operating work.</h2>
              <p className="text-[#777b80] mt-5 leading-relaxed max-w-sm text-sm md:text-base">
                The strongest first projects are repetitive, document heavy, rules heavy or dependent on manual handoffs.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opportunityAreas.map(([title, text], index) => (
                <OpportunityCard key={title} number={`0${index + 1}`} title={title} text={text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="engagement" className="w-full border-b border-[#202226] bg-[#080808]">
        <div className="container-grid section-pad">
          <SectionHead index="04" label="Commercial path" />
          <div className="mt-10 md:mt-16">
            <h2 className="text-display text-[#eeeeea] max-w-3xl mb-8 md:mb-12">Start small. Prove value. Expand from evidence.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <PathCard number="01" label="Start" title="Workshop" text="Identify and rank the first opportunities worth funding." />
              <PathCard number="02" label="Build" title="Implementation" text="Deploy the selected workflow with the team that owns it." accent />
              <PathCard number="03" label="Expand" title="Transformation partner" text="Scale successful systems across functions with value tracking." />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="05" label="Why Archangel" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mt-10 md:mt-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-display text-[#eeeeea] max-w-3xl">Strategy and implementation under one accountable team.</h2>
              <p className="text-[#85898e] text-[15px] md:text-lg leading-relaxed max-w-2xl mt-6">
                Archangel Company Limited is a Thailand BOI promoted software and digital platform company based in Bangkok. We work close to management and operating teams, then build what the business can actually use.
              </p>
              <Link href="/work" className="inline-flex items-center gap-3 mt-8 text-[10px] md:text-xs font-mono uppercase tracking-[0.12em] text-[#d8d9d5] border-b border-[#45484d] pb-2 hover:border-[#d8d9d5] transition-colors">
                Company record <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <TrustCard label="Base" value="Bangkok" />
              <TrustCard label="Status" value="BOI promoted" accent />
              <TrustCard label="Mode" value="Founder led" />
              <TrustCard label="Focus" value="Applied AI" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full technical-grid bg-[#050505]">
        <div className="container-grid py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="signal-dot" />
                <span className="text-mono-label">15 minute qualification</span>
              </div>
              <h2 className="text-display text-[#f0f0ec] max-w-4xl">Tell us where work is costing your business time or money.</h2>
            </div>
            <div className="lg:col-span-4">
              <a
                href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                className="inline-flex items-center justify-between gap-6 bg-[#e9e7df] text-[#070707] px-5 py-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.11em] hover:bg-white transition-colors w-full"
              >
                Book opportunity call <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[#686c71] text-xs mt-4">No AI presentation. We use the call to decide if there is a real business case to explore.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHead({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <span className="font-mono text-[9px] tracking-[0.18em] signal-text">{index}</span>
      <div className="h-px bg-[#34373b] flex-1" />
      <span className="text-mono-label text-right">{label}</span>
    </div>
  );
}

function StatCell({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`border-r border-b border-[#202226] min-h-[88px] md:min-h-28 p-3.5 md:p-5 flex flex-col justify-between ${accent ? "bg-[rgba(214,161,92,0.055)]" : "bg-[#060606]/80"}`}>
      <span className="text-mono-label">{label}</span>
      <span className={`${accent ? "signal-text" : "text-[#d9d9d5]"} text-sm md:text-base`}>{value}</span>
    </div>
  );
}

function ActionCard({ number, title, text, accent = false }: { number: string; title: string; text: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-5 md:p-6 min-h-[170px] flex flex-col justify-between`}>
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><span className={accent ? "signal-text" : "text-[#4f5358]"}>AG</span></div>
      <div>
        <h3 className="text-xl text-[#e8e7e1] mb-2">{title}</h3>
        <p className="text-[#777b80] text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 border-t border-[#2c2f33] pt-3 text-sm text-[#c5c5bf]">
      <Check className="w-3.5 h-3.5 signal-text" />
      <span>{text}</span>
    </div>
  );
}

function OpportunityCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="surface-card p-5 md:p-6 min-h-[150px] flex flex-col justify-between">
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><span>WORKFLOW</span></div>
      <div>
        <h3 className="text-xl text-[#e4e4de]">{title}</h3>
        <p className="text-[#6f7378] text-sm mt-2 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function PathCard({ number, label, title, text, accent = false }: { number: string; label: string; title: string; text: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-5 md:p-7 min-h-[200px] flex flex-col justify-between`}>
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><span className={accent ? "signal-text" : ""}>{label}</span></div>
      <div>
        <h3 className="text-xl md:text-2xl text-[#e8e7e1] mb-3">{title}</h3>
        <p className="text-[#74787d] text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function TrustCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} min-h-[120px] p-4 md:p-5 flex flex-col justify-between`}>
      <span className="text-mono-label">{label}</span>
      <span className={`${accent ? "signal-text" : "text-[#dfded8]"} text-base md:text-lg`}>{value}</span>
    </div>
  );
}

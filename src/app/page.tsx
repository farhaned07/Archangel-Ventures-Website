"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SystemDiagram } from "@/components/ui/SystemDiagram";

const opportunityAreas = [
  ["01", "Finance + accounts payable", "Documents, approvals, reconciliation, reporting"],
  ["02", "Operations", "Manual handoffs, status chasing, repetitive decisions"],
  ["03", "Sales operations", "Research, proposals, CRM administration, follow up"],
  ["04", "Customer operations", "Enquiries, triage, knowledge retrieval, escalation"],
  ["05", "Management reporting", "Data consolidation, recurring analysis, decision support"],
  ["06", "Document workflows", "Extraction, classification, review, routing, audit trails"],
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-[61px] md:pt-[65px]">
      <section className="w-full min-h-[calc(100vh-61px)] md:min-h-[calc(100vh-65px)] border-b border-[#202226] technical-grid scanline">
        <div className="container-grid min-h-[inherit] flex flex-col">
          <div className="flex items-center justify-between py-4 border-b border-[#202226] text-mono-label">
            <span>AG / AI Transformation Partner</span>
            <span className="hidden sm:block">Bangkok · Thailand / 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 items-center py-12 md:py-16 lg:py-8">
            <div className="lg:col-span-6 xl:col-span-7 relative z-10 lg:pr-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8d9d5]" />
                  <span className="text-mono-label">BOI promoted · Bangkok based</span>
                </div>
              </Reveal>

              <Reveal delay={0.04}>
                <h1 className="text-hero text-[#F1F1ED] max-w-[940px]">
                  Your AI Transformation Partner.
                  <span className="block text-[#777b80] mt-3">Make AI useful at work.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.09}>
                <p className="mt-7 md:mt-9 text-base md:text-lg text-[#92969b] leading-relaxed max-w-2xl">
                  We work inside the business to find expensive workflows, redesign them with AI, implement what works, and measure the result.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/ai-transformation"
                    className="group inline-flex items-center justify-between gap-8 border border-[#d7d8d4] bg-[#e8e8e4] text-[#060606] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.12em] hover:bg-white transition-colors min-w-[250px]"
                  >
                    Start with the workshop <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                    className="inline-flex items-center justify-between gap-8 border border-[#34373b] text-[#b9bbb8] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.12em] hover:border-[#696d72] hover:text-white transition-colors min-w-[250px]"
                  >
                    Book a 15 minute call <span className="text-[#555a60]">↗</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 xl:col-span-5 mt-8 lg:mt-0 lg:-ml-6">
              <Reveal delay={0.07} variant="fade">
                <SystemDiagram />
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#202226] mb-0">
            <SpecCell label="Entry offer" value="Management workshop" code="01" />
            <SpecCell label="Fixed fee" value="฿45,000" code="THB" />
            <SpecCell label="Delivery" value="Bangkok · on site" code="BKK" />
            <SpecCell label="Company" value="BOI promoted" code="8.1" />
          </div>
        </div>
      </section>

      <section id="how" className="w-full border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="How transformation starts" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-display text-[#efefeb] max-w-2xl">
                  We begin with the work.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="text-[#85898e] text-base md:text-lg max-w-lg leading-relaxed mt-7">
                  AI is not the project. The project is removing cost, delay, repetitive work and decision friction from an operating process.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 technical-corner border border-[#25272b] bg-[#080808]">
              <ArchitectureRow number="01" title="Find value" label="DISCOVER" text="Map the work, identify expensive friction, and rank where AI can create measurable value." />
              <ArchitectureRow number="02" title="Design the change" label="SIMPLIFY" text="Remove unnecessary steps first, then define the smallest useful AI intervention." />
              <ArchitectureRow number="03" title="Implement" label="DEPLOY" text="Build inside the real workflow with the team that owns the outcome." />
              <ArchitectureRow number="04" title="Measure + expand" label="SCALE" text="Compare the result against the baseline, then expand only where the economics justify it." last />
            </div>
          </div>
        </div>
      </section>

      <section id="workshop" className="w-full border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="Start here / Management workshop" />

          <div className="mt-14 md:mt-20 border border-[#292b30] bg-[#070707] technical-corner">
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#292b30]">
              <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 lg:border-r border-[#292b30]">
                <span className="text-mono-label block mb-5">ARCHANGEL / AI TRANSFORMATION WORKSHOP</span>
                <h2 className="text-display text-[#f0f0ec] max-w-3xl">
                  Find where AI can actually save your business money.
                </h2>
                <p className="text-[#85898e] mt-6 max-w-2xl leading-relaxed">
                  A focused management session for companies that want a practical starting point, not another general AI presentation.
                </p>
              </div>
              <div className="lg:col-span-4 p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
                <div className="text-mono-label flex justify-between"><span>Fixed fee</span><span>AG-01</span></div>
                <div>
                  <p className="text-5xl md:text-6xl tracking-[-0.05em] text-[#eeeeea]">฿45,000</p>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#676b70] mt-4">Bangkok · on site</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 lg:border-r border-[#292b30]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  <Deliverable number="01" title="Workflow audit" text="Map the work creating the most cost, delay and repetitive effort." />
                  <Deliverable number="02" title="Opportunity ranking" text="Prioritise the 3 to 5 AI opportunities worth management attention." />
                  <Deliverable number="03" title="ROI estimate" text="Estimate time saved, operating impact, implementation effort and business value." />
                  <Deliverable number="04" title="30 day action plan" text="Leave with a clear sequence for what to implement first and why." />
                </div>
              </div>
              <div className="lg:col-span-5 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-10 bg-[#090909]">
                <div>
                  <span className="text-mono-label">Commercial rule</span>
                  <p className="text-xl md:text-2xl text-[#e4e4e0] leading-snug mt-5 max-w-md">
                    If Archangel implements one of the selected projects, the workshop fee is credited toward implementation.
                  </p>
                </div>
                <Link href="/ai-transformation" className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.12em] text-[#d8d9d5] border-b border-[#55595e] pb-2 self-start hover:border-white transition-colors">
                  Open workshop details <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Where we look first" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-display text-[#eeeeea]">Start where work is expensive and repetitive.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-[#777b80] mt-6 leading-relaxed max-w-md">
                  The best opportunities usually sit inside core operating workflows, not innovation teams.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8 border-t border-[#2a2c30]">
              {opportunityAreas.map(([number, title, detail]) => (
                <WorkflowRow key={number} number={number} title={title} detail={detail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="engagement" className="w-full border-b border-[#202226] bg-[#070707]">
        <div className="container-grid section-pad">
          <SectionHead index="04" label="Commercial path" />

          <Reveal>
            <h2 className="text-display text-[#eeeeea] max-w-4xl mt-14 md:mt-20 mb-12">
              Start small. Prove value. Expand from evidence.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#26282c]">
            <PathPanel number="01" title="Workshop" text="Management team identifies and ranks the highest value AI opportunities." />
            <PathPanel number="02" title="Implementation" text="Archangel builds the selected workflow with the operating team and measures the result." border />
            <PathPanel number="03" title="Transformation partner" text="Successful systems expand across functions with ongoing delivery, governance and value tracking." />
          </div>
        </div>
      </section>

      <section id="why" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="05" label="Archangel / Company" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-14 md:mt-20">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-display text-[#eeeeea] max-w-3xl">Strategy and implementation under one accountable team.</h2>
              </Reveal>
              <div className="text-[#85898e] text-base md:text-lg leading-relaxed max-w-2xl space-y-6 mt-8">
                <Reveal delay={0.05}>
                  <p>Archangel Company Limited is a Thailand BOI promoted software and digital platform company based in Bangkok.</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>We work close to management and operating teams. The objective is not more AI activity. It is measurable change in how the business works.</p>
                </Reveal>
              </div>
              <Reveal delay={0.14}>
                <Link href="/work" className="inline-flex items-center gap-3 mt-10 text-xs font-mono uppercase tracking-[0.12em] text-[#d8d9d5] border-b border-[#45484d] pb-2 hover:border-[#d8d9d5] transition-colors">
                  Open company record <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-5 border border-[#25272b] technical-corner p-6 md:p-8 bg-[#080808]">
              <div className="flex items-center justify-between pb-5 border-b border-[#25272b] text-mono-label">
                <span>Company record</span><span>TH / 2026</span>
              </div>
              <DataRow label="Entity" value="Archangel Company Limited" />
              <DataRow label="Base" value="Bangkok, Thailand" />
              <DataRow label="Status" value="BOI promoted" />
              <DataRow label="Category" value="Software + Digital Platform" />
              <DataRow label="Focus" value="AI transformation" last />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full technical-grid bg-[#050505]">
        <div className="container-grid py-24 md:py-36">
          <div className="flex items-center justify-between border-b border-[#2a2c30] pb-5 mb-12 text-mono-label">
            <span>06 / Start</span><span>15 minute qualification</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-display text-[#f0f0ec] max-w-5xl">
                Tell us where work is costing your business time or money.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[#7c8085] text-sm leading-relaxed mb-7 lg:ml-auto max-w-sm">
                We use the first call to decide whether the management workshop is the right next step.
              </p>
              <a
                href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.08em] text-[#ecece8] border-b border-[#777b80] pb-2 hover:border-white transition-colors"
              >
                Book the opportunity call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHead({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-5 md:gap-8">
      <span className="font-mono text-[10px] tracking-[0.18em] text-[#b5b7b4]">{index}</span>
      <div className="h-px bg-[#34373b] flex-1" />
      <span className="text-mono-label text-right">{label}</span>
    </div>
  );
}

function SpecCell({ label, value, code }: { label: string; value: string; code: string }) {
  return (
    <div className="border-r border-b border-[#202226] min-h-28 p-4 md:p-5 flex flex-col justify-between bg-[#060606]/75">
      <div className="flex justify-between text-mono-label"><span>{label}</span><span className="text-[#45494e]">{code}</span></div>
      <span className="text-[#d9d9d5] text-sm md:text-base">{value}</span>
    </div>
  );
}

function ArchitectureRow({ number, title, label, text, last = false }: { number: string; title: string; label: string; text: string; last?: boolean }) {
  return (
    <div className={`grid grid-cols-12 gap-4 md:gap-8 p-5 md:p-7 ${last ? "" : "border-b border-[#25272b]"}`}>
      <div className="col-span-2 md:col-span-1 font-mono text-[10px] text-[#555a60] pt-1">{number}</div>
      <div className="col-span-10 md:col-span-3">
        <span className="text-mono-label block mb-2">{label}</span>
        <h3 className="text-[#e6e6e2] text-lg">{title}</h3>
      </div>
      <p className="col-span-12 md:col-span-8 text-[#777b80] text-sm leading-relaxed md:pl-4">{text}</p>
    </div>
  );
}

function Deliverable({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="border-t border-[#2c2f33] pt-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#dededa] text-sm">{title}</span>
        <span className="font-mono text-[9px] text-[#555a60]">{number}</span>
      </div>
      <p className="text-[#74787d] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function WorkflowRow({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <div className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-6 md:py-8 border-b border-[#2a2c30] hover:bg-[#090909] transition-colors px-2 md:px-4">
      <span className="col-span-2 md:col-span-1 font-mono text-[10px] text-[#555a60]">{number}</span>
      <h3 className="col-span-10 md:col-span-5 text-[#dededa] text-base md:text-lg">{title}</h3>
      <span className="col-span-10 col-start-3 md:col-span-5 md:col-start-auto text-[#666a6f] text-xs md:text-sm font-mono">{detail}</span>
      <span className="hidden md:block md:col-span-1 text-right text-[#4d5156] group-hover:text-[#c3c5c2] transition-colors">↗</span>
    </div>
  );
}

function PathPanel({ number, title, text, border = false }: { number: string; title: string; text: string; border?: boolean }) {
  return (
    <div className={`p-6 md:p-8 lg:p-10 ${border ? "md:border-l md:border-r border-[#26282c]" : ""}`}>
      <div className="flex items-center justify-between text-mono-label mb-12"><span>{number}</span><span className="text-[#4b4f54]">AG</span></div>
      <h3 className="text-xl text-[#e6e6e2] mb-4">{title}</h3>
      <p className="text-[#74787d] leading-relaxed text-sm">{text}</p>
    </div>
  );
}

function DataRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`grid grid-cols-[110px_1fr] gap-4 py-4 ${last ? "" : "border-b border-[#222428]"}`}>
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#55595e]">{label}</span>
      <span className="text-[#a4a7a4] text-sm">{value}</span>
    </div>
  );
}

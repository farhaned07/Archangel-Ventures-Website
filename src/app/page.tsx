"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SystemDiagram } from "@/components/ui/SystemDiagram";

const workflowExamples = [
  ["01", "Invoice + document processing", "Documents in / structured actions out"],
  ["02", "Management reporting", "Manual consolidation / recurring reporting"],
  ["03", "Reconciliation + data entry", "Cross-system matching / repetitive input"],
  ["04", "Customer enquiries", "High-volume requests / repeatable decisions"],
  ["05", "Quotation + proposal generation", "Inputs / rules / document assembly"],
  ["06", "Approvals + operational handoffs", "Queues / routing / status visibility"],
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-[61px] md:pt-[65px]">
      <section className="w-full min-h-[calc(100vh-61px)] md:min-h-[calc(100vh-65px)] border-b border-[#202226] technical-grid scanline">
        <div className="container-grid min-h-[inherit] flex flex-col">
          <div className="flex items-center justify-between py-4 border-b border-[#202226] text-mono-label">
            <span>AG / Applied Intelligence Systems</span>
            <span className="hidden sm:block">Bangkok · TH / System Ref. 01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 items-center py-12 md:py-16 lg:py-8">
            <div className="lg:col-span-6 xl:col-span-7 relative z-10 lg:pr-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8d9d5]" />
                  <span className="text-mono-label">BOI promoted applied AI company</span>
                </div>
              </Reveal>

              <Reveal delay={0.04}>
                <h1 className="text-hero text-[#F1F1ED] max-w-[900px]">
                  Give us one painful business process.
                  <span className="block text-[#777b80] mt-3">We make it faster with AI.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.09}>
                <p className="mt-7 md:mt-9 text-base md:text-lg text-[#92969b] leading-relaxed max-w-xl">
                  Archangel finds expensive manual work, builds the automation, and proves the result against the way your team works today.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:build@archangel.ventures?subject=AI%20Workflow%20Sprint"
                    className="group inline-flex items-center justify-between gap-8 border border-[#d7d8d4] bg-[#e8e8e4] text-[#060606] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.12em] hover:bg-white transition-colors min-w-[220px]"
                  >
                    Bring us a workflow <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#sprint"
                    className="inline-flex items-center justify-between gap-8 border border-[#34373b] text-[#b9bbb8] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.12em] hover:border-[#696d72] hover:text-white transition-colors min-w-[220px]"
                  >
                    View sprint spec <span className="text-[#555a60]">↘</span>
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
            <SpecCell label="Engagement" value="10 working days" code="T+10" />
            <SpecCell label="Fixed fee" value="฿45,000" code="THB" />
            <SpecCell label="Scope" value="One workflow" code="01" />
            <SpecCell label="Company" value="BOI promoted" code="8.1" />
          </div>
        </div>
      </section>

      <section id="how" className="w-full border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="System architecture" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-display text-[#efefeb] max-w-2xl">
                  We begin with the work, not the technology.
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="text-[#85898e] text-base md:text-lg max-w-lg leading-relaxed mt-7">
                  The objective is not to add AI. The objective is to remove time, delay, errors and unnecessary manual effort from a real operating process.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 technical-corner border border-[#25272b] bg-[#080808]">
              <ArchitectureRow number="01" title="Map" label="INPUT" text="Observe the real workflow, including the exceptions, handoffs and manual fixes the SOP misses." />
              <ArchitectureRow number="02" title="Simplify" label="LOGIC" text="Remove unnecessary steps before automating anything. Automation should not preserve a bad process." />
              <ArchitectureRow number="03" title="Build" label="SYSTEM" text="Create the smallest reliable AI system that can perform useful work inside the process." />
              <ArchitectureRow number="04" title="Prove" label="OUTPUT" text="Run the new workflow against the old one and measure time, quality, delay and operating cost." last />
            </div>
          </div>
        </div>
      </section>

      <section id="sprint" className="w-full border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="Deployment / Start here" />

          <div className="mt-14 md:mt-20 border border-[#292b30] bg-[#070707] technical-corner">
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#292b30]">
              <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 lg:border-r border-[#292b30]">
                <span className="text-mono-label block mb-5">ARCHANGEL / AI WORKFLOW SPRINT</span>
                <h2 className="text-display text-[#f0f0ec] max-w-3xl">
                  One workflow.<br />Ten working days.<br />A working result.
                </h2>
              </div>
              <div className="lg:col-span-4 p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[260px]">
                <div className="text-mono-label flex justify-between"><span>Commercial</span><span>AG-01</span></div>
                <div>
                  <p className="text-5xl md:text-6xl tracking-[-0.05em] text-[#eeeeea]">฿45,000</p>
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#676b70] mt-4">50% start / 50% delivery</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 lg:border-r border-[#292b30]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  <Deliverable number="01" title="Current state" text="Workflow mapped as it actually operates." />
                  <Deliverable number="02" title="Baseline" text="Time, people, delays and errors quantified." />
                  <Deliverable number="03" title="Working system" text="AI automation built for the selected process." />
                  <Deliverable number="04" title="Proof" text="Before and after comparison with ROI." />
                </div>
              </div>
              <div className="lg:col-span-5 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-12 bg-[#090909]">
                <div>
                  <span className="text-mono-label">Operating principle</span>
                  <p className="text-xl md:text-2xl text-[#e4e4e0] leading-snug mt-5 max-w-md">
                    Do not approve a transformation programme before one workflow proves the economics.
                  </p>
                </div>
                <p className="text-[#777b80] text-sm leading-relaxed max-w-md">
                  Start with one process. If the economics are good, we expand. If they are not, we stop there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Candidate workflows" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-display text-[#eeeeea]">Look for work your team repeats every week.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-[#777b80] mt-6 leading-relaxed max-w-md">
                  Good candidates are repetitive, document heavy, rules heavy, or move information between systems by hand.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8 border-t border-[#2a2c30]">
              {workflowExamples.map(([number, title, detail]) => (
                <WorkflowRow key={number} number={number} title={title} detail={detail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fit" className="w-full border-b border-[#202226] bg-[#070707]">
        <div className="container-grid section-pad">
          <SectionHead index="04" label="Operating fit" />

          <Reveal>
            <h2 className="text-display text-[#eeeeea] max-w-4xl mt-14 md:mt-20 mb-12">
              Built for operating companies, not innovation theatre.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#26282c]">
            <FitPanel
              code="FIT / 01"
              title="Good first system"
              items={["Finance and back office teams", "Operations with manual handoffs", "Growing businesses adding headcount to cope", "Teams already exploring AI, RPA or automation"]}
            />
            <FitPanel
              code="FILTER / 02"
              title="Not a good first system"
              items={["A vague request to add AI", "A company wide platform before one use case works", "A demo with no process owner", "Automation with no measurable business outcome"]}
              right
            />
          </div>
        </div>
      </section>

      <section id="why" className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="05" label="Archangel / Company" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-14 md:mt-20">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-display text-[#eeeeea] max-w-3xl">Applied AI, close to the business.</h2>
              </Reveal>
              <div className="text-[#85898e] text-base md:text-lg leading-relaxed max-w-2xl space-y-6 mt-8">
                <Reveal delay={0.05}>
                  <p>Archangel Company Limited is a Thailand BOI promoted software and digital platform company. We design and build applied AI systems around real operating workflows.</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>Our work spans healthcare AI, automation and operational intelligence. We are founder led and implementation first: useful systems in production, not more slides about AI.</p>
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
              <DataRow label="Focus" value="Applied AI systems" last />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full technical-grid bg-[#050505]">
        <div className="container-grid py-24 md:py-36">
          <div className="flex items-center justify-between border-b border-[#2a2c30] pb-5 mb-12 text-mono-label">
            <span>06 / Initiate</span><span>System entry point</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-display text-[#f0f0ec] max-w-5xl">
                Bring us one process your team should not be doing by hand.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[#7c8085] text-sm leading-relaxed mb-7 lg:ml-auto max-w-sm">
                We will tell you whether it is a good candidate for the 10 working day sprint.
              </p>
              <a
                href="mailto:build@archangel.ventures?subject=AI%20Workflow%20Sprint"
                className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.08em] text-[#ecece8] border-b border-[#777b80] pb-2 hover:border-white transition-colors"
              >
                build@archangel.ventures <ArrowUpRight className="w-4 h-4" />
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

function FitPanel({ code, title, items, right = false }: { code: string; title: string; items: string[]; right?: boolean }) {
  return (
    <div className={`p-6 md:p-9 lg:p-10 ${right ? "md:border-l border-[#26282c]" : ""}`}>
      <div className="flex items-center justify-between text-mono-label mb-10">
        <span>{code}</span><span className="text-[#464a4f]">{right ? "−" : "+"}</span>
      </div>
      <h3 className="text-2xl text-[#e8e8e4] mb-9">{title}</h3>
      <div>
        {items.map((item, index) => (
          <div key={item} className="grid grid-cols-[32px_1fr] gap-3 py-4 border-t border-[#25272b] text-sm text-[#7c8085]">
            <span className="font-mono text-[9px] text-[#4b4f54] pt-0.5">0{index + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
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

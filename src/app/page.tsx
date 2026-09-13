"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const workflowExamples = [
  "Invoice and document processing",
  "Management reporting",
  "Reconciliation and data entry",
  "Customer enquiries",
  "Quotation and proposal generation",
  "Approvals and operational handoffs",
];

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-20 md:pt-24">
      <section className="w-full min-h-[86vh] flex flex-col justify-between border-b border-[#222]">
        <div className="container-grid flex-1 flex flex-col justify-center py-20 md:py-28">
          <Reveal>
            <span className="text-mono-label block mb-6">Applied AI · Bangkok, Thailand</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-hero text-white max-w-6xl">
              Give us one painful business process.
              <span className="text-[#888] block mt-2">We make it faster with AI.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-lg md:text-xl text-[#999] leading-relaxed max-w-2xl">
              Archangel finds expensive manual work inside your business, builds the automation, and proves the result against the way your team works today.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:build@archangel.ventures?subject=AI%20Workflow%20Sprint"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-[#DADADA] transition-colors"
              >
                Bring us a workflow <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sprint"
                className="inline-flex items-center justify-center border border-[#333] text-white px-6 py-3.5 text-sm hover:border-[#666] transition-colors"
              >
                See the fixed-fee sprint
              </a>
            </div>
          </Reveal>
        </div>

        <div className="w-full border-t border-[#222]">
          <div className="container-grid grid grid-cols-2 md:grid-cols-4 gap-0">
            <Stat label="Engagement" value="10 working days" />
            <Stat label="Fixed fee" value="฿45,000" />
            <Stat label="Scope" value="One workflow" />
            <Stat label="Company" value="BOI promoted" last />
          </div>
        </div>
      </section>

      <section id="how" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">01 / What we do</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white max-w-4xl mb-16">
                We begin with the work, not the technology.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#222]">
              <ProcessStep number="01" title="Understand" text="We sit with the people doing the work and map the real process, including the messy parts that SOPs miss." />
              <ProcessStep number="02" title="Build" text="We simplify what should be simplified, then build the smallest reliable AI automation that can do useful work." />
              <ProcessStep number="03" title="Prove" text="We compare the new workflow against the old one using time, effort, delay, quality and operating cost." last />
            </div>
          </div>
        </div>
      </section>

      <section id="sprint" className="w-full border-b border-[#222] bg-[#090909]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">02 / Start here</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8 border-b border-[#333] pb-10 mb-12">
                <div>
                  <p className="text-[#888] text-sm mb-4">ARCHANGEL AI WORKFLOW SPRINT</p>
                  <h2 className="text-display text-white max-w-3xl">
                    One workflow. Ten working days. A working result.
                  </h2>
                </div>
                <div className="xl:text-right shrink-0">
                  <p className="text-4xl md:text-5xl text-white tracking-tight">฿45,000</p>
                  <p className="text-sm text-[#777] mt-2">฿22,500 to start · ฿22,500 on delivery</p>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <Reveal delay={0.08}>
                <div>
                  <h3 className="text-xl text-white mb-6">What you get</h3>
                  <div className="space-y-4">
                    <Deliverable text="Current workflow mapped" />
                    <Deliverable text="Baseline for time, people, delay and errors" />
                    <Deliverable text="Working AI automation for the selected process" />
                    <Deliverable text="Before-and-after comparison" />
                    <Deliverable text="ROI and scale recommendation" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="border border-[#2A2A2A] p-7 md:p-9">
                  <span className="text-mono-label block mb-5">The point</span>
                  <p className="text-xl md:text-2xl text-white leading-snug mb-6">
                    You do not need to approve an AI transformation programme to find out whether AI can remove real work.
                  </p>
                  <p className="text-[#888] leading-relaxed">
                    Start with one process. If the economics are good, we expand. If they are not, we stop there.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">03 / Good candidates</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white max-w-4xl mb-6">
                Look for work your team repeats every week.
              </h2>
              <p className="text-[#888] text-lg max-w-2xl mb-14 leading-relaxed">
                The best first workflow is repetitive, rules-heavy, document-heavy, or requires people to move information between systems by hand.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#222]">
              {workflowExamples.map((item, index) => (
                <Reveal key={item} delay={0.04 * index}>
                  <div className="min-h-28 border-r border-b border-[#222] p-6 md:p-8 flex items-center justify-between gap-6">
                    <span className="text-[#E5E5E5] text-lg">{item}</span>
                    <span className="font-mono text-xs text-[#444]">0{index + 1}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fit" className="w-full border-b border-[#222] bg-[#050505]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">04 / Fit</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white max-w-4xl mb-14">
                Built for operating companies, not innovation theatre.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222] border border-[#222]">
              <FitCard title="Good fit" items={["Finance and back-office teams", "Operations with manual handoffs", "Growing businesses adding headcount to cope", "Teams already exploring AI, RPA or automation"]} />
              <FitCard title="Not a good first project" items={["A vague request to ‘add AI’", "A company-wide platform before one use case works", "A demo with no process owner", "Automation with no measurable business outcome"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">05 / Archangel</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white max-w-4xl mb-12">
                Applied AI, close to the business.
              </h2>
            </Reveal>
            <div className="text-[#999] text-lg leading-relaxed max-w-3xl space-y-6">
              <Reveal delay={0.06}>
                <p>
                  Archangel Company Limited is a Thailand BOI promoted software and digital platform company. We design and build applied AI systems around real operating workflows.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Our work spans healthcare AI, automation and operational intelligence. We are founder-led and implementation-first: the objective is useful systems in production, not more slides about AI.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.18}>
              <Link href="/work" className="inline-flex items-center gap-2 mt-10 text-white border-b border-[#555] pb-1 hover:border-white transition-colors">
                See our work and company history <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full min-h-[65vh] flex items-center bg-white text-black py-24">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#666]">06 / Next step</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-display max-w-4xl mb-8">
              Bring us one process your team should not be doing by hand.
            </h2>
            <p className="text-[#555] text-lg max-w-2xl mb-10 leading-relaxed">
              We will tell you whether it is a good candidate for the 10-day sprint. No transformation programme required.
            </p>
            <a
              href="mailto:build@archangel.ventures?subject=AI%20Workflow%20Sprint"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium border-b border-black pb-2"
            >
              build@archangel.ventures <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`p-5 md:p-7 border-b md:border-b-0 ${last ? "" : "border-r border-[#222]"}`}>
      <span className="text-mono-label block mb-2">{label}</span>
      <span className="text-white text-sm md:text-base">{value}</span>
    </div>
  );
}

function ProcessStep({ number, title, text, last = false }: { number: string; title: string; text: string; last?: boolean }) {
  return (
    <div className={`py-8 md:p-8 md:first:pl-0 ${last ? "" : "md:border-r border-[#222]"}`}>
      <span className="font-mono text-xs text-[#555] block mb-8">{number}</span>
      <h3 className="text-xl text-white mb-4">{title}</h3>
      <p className="text-[#777] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Deliverable({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-[#D5D5D5]">
      <Check className="w-4 h-4 mt-1 text-[#888] shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function FitCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#050505] p-7 md:p-9">
      <h3 className="text-white text-xl mb-7">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-[#888] leading-relaxed">
            <span className="text-[#444]">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

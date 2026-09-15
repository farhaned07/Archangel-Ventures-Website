import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ValueMap, WorkshopOutputPreview } from "@/components/ui/TransformationVisuals";

export const metadata: Metadata = {
  title: "AI Transformation Thailand | ฿45,000 Management Workshop | Archangel",
  description:
    "A fixed fee AI transformation workshop for management teams in Bangkok. Identify the highest value AI opportunities, estimate ROI, and leave with a practical 30 day implementation plan.",
};

const deliverables = [
  ["01", "Workflow audit", "See where time, cost and manual effort are being lost."],
  ["02", "Priority map", "Rank the 3 to 5 AI opportunities worth management attention."],
  ["03", "ROI estimate", "Compare business value, readiness and implementation effort."],
  ["04", "30 day plan", "Choose what should be implemented first and what should wait."],
];

export default function AITransformationPage() {
  return (
    <main className="min-h-screen w-full pt-[61px] md:pt-[65px] bg-[#050505] pb-20 md:pb-0">
      <section className="technical-grid border-b border-[#202226]">
        <div className="container-grid py-10 md:py-16 lg:py-20">
          <div className="flex items-center justify-between pb-3.5 md:pb-4 border-b border-[#25272b] text-mono-label">
            <span>AI Transformation / Bangkok</span>
            <span className="hidden sm:block signal-text">Fixed fee entry engagement</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-9 md:pt-14 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="signal-dot" />
                <span className="text-mono-label">For management teams</span>
              </div>

              <h1 className="text-hero text-[#f1f1ed] max-w-4xl">
                Find the AI moves
                <span className="block text-[#777b80]">worth funding.</span>
              </h1>

              <p className="mt-6 md:mt-8 text-[15px] md:text-lg text-[#8d9196] leading-relaxed max-w-2xl">
                One focused management workshop to identify where AI can create measurable value in your business and what to implement first.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7 md:mt-9 max-w-xl">
                <HeroFact label="Fixed fee" value="฿45,000" accent />
                <HeroFact label="Delivery" value="Bangkok · on site" />
                <HeroFact label="Output" value="3 to 5 priorities" />
                <HeroFact label="Plan" value="30 days" />
              </div>

              <a
                href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                className="mt-7 md:mt-9 group inline-flex items-center justify-between gap-6 bg-[#e9e7df] text-[#070707] px-5 py-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.11em] hover:bg-white transition-colors w-full sm:w-auto sm:min-w-[310px]"
              >
                Book a 15 minute opportunity call <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <ValueMap />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="What you buy" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 md:mt-16 items-start">
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map(([number, title, text], index) => (
                <DeliverableCard key={number} number={number} title={title} text={text} accent={index === 1} />
              ))}
            </div>
            <div className="lg:col-span-6">
              <WorkshopOutputPreview />
              <p className="text-[#6f7378] text-xs md:text-sm leading-relaxed mt-4 max-w-xl">
                This is a sample structure, not a fabricated client result. Your workshop output is built from your actual workflows, priorities and operating constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="The session" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 md:mt-16">
            <div className="lg:col-span-4">
              <h2 className="text-display text-[#eeeeea]">Bring the work. Not a slide deck.</h2>
              <p className="text-[#777b80] mt-5 leading-relaxed text-sm md:text-base max-w-sm">
                The conversation starts with the business: cost pressure, growth constraints, recurring manual work and where teams already use AI informally.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <SessionCard number="01" label="Map" title="Where does work hurt?" text="Identify expensive, repetitive and slow workflows." />
              <SessionCard number="02" label="Rank" title="What is worth funding?" text="Compare value, readiness, risk and implementation effort." accent />
              <SessionCard number="03" label="Decide" title="What happens next?" text="Leave with a first implementation sequence and 30 day plan." />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Who this is for" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 md:mt-16">
            <FitCard title="AI is already happening" text="Teams use ChatGPT, Copilot or other tools, but management cannot see the operating value." />
            <FitCard title="Manual work is expensive" text="Finance, operations, sales or reporting teams spend too much time moving information by hand." accent />
            <FitCard title="Management wants a real start" text="You want a practical first move before approving a larger AI programme." />
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#080808]">
        <div className="container-grid section-pad">
          <SectionHead index="04" label="Commercial rule" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 md:mt-16 items-stretch">
            <div className="lg:col-span-7 surface-card-amber technical-corner p-5 md:p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-mono-label signal-text">Reduce the first decision</span>
                <h2 className="text-display text-[#efeee8] mt-5 max-w-2xl">Do not approve a transformation programme before the economics are visible.</h2>
              </div>
              <p className="text-[#888b8f] mt-8 max-w-xl leading-relaxed text-sm md:text-base">
                If Archangel implements one of the projects selected in the workshop, the ฿45,000 workshop fee is credited toward implementation.
              </p>
            </div>

            <div className="lg:col-span-5 surface-card p-5 md:p-8 flex flex-col justify-between min-h-[280px]">
              <div className="flex items-center justify-between text-mono-label"><span>Engagement</span><span>AG / 01</span></div>
              <div className="space-y-4 mt-8">
                <CommercialLine number="01" text="15 minute qualification call" />
                <CommercialLine number="02" text="฿45,000 management workshop" />
                <CommercialLine number="03" text="Implementation only if the case is strong" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-grid bg-[#050505]">
        <div className="container-grid py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="signal-dot" />
                <span className="text-mono-label">Start here</span>
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
              <p className="text-[#686c71] text-xs mt-4">Bangkok based · BOI promoted · Strategy + implementation</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed md:hidden left-0 right-0 bottom-0 z-40 border-t border-[#34363a] bg-[#090909]/96 backdrop-blur-md p-3">
        <a
          href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
          className="flex items-center justify-between bg-[#e9e7df] text-[#070707] px-4 py-3.5"
        >
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.1em] block opacity-60">Workshop · ฿45,000</span>
            <span className="text-sm font-medium">Book 15 minute call</span>
          </div>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
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

function HeroFact({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-3.5 md:p-4 min-h-[82px] flex flex-col justify-between`}>
      <span className="text-mono-label">{label}</span>
      <span className={`${accent ? "signal-text" : "text-[#d8d7d1]"} text-sm md:text-base`}>{value}</span>
    </div>
  );
}

function DeliverableCard({ number, title, text, accent = false }: { number: string; title: string; text: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-5 md:p-6 min-h-[170px] flex flex-col justify-between`}>
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><Check className={`w-3.5 h-3.5 ${accent ? "signal-text" : "text-[#62666b]"}`} /></div>
      <div>
        <h3 className="text-xl text-[#e8e7e1]">{title}</h3>
        <p className="text-[#74787d] text-sm leading-relaxed mt-2">{text}</p>
      </div>
    </div>
  );
}

function SessionCard({ number, label, title, text, accent = false }: { number: string; label: string; title: string; text: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-5 md:p-6 min-h-[220px] flex flex-col justify-between`}>
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><span className={accent ? "signal-text" : ""}>{label}</span></div>
      <div>
        <h3 className="text-xl text-[#e8e7e1] leading-snug">{title}</h3>
        <p className="text-[#74787d] text-sm leading-relaxed mt-3">{text}</p>
      </div>
    </div>
  );
}

function FitCard({ title, text, accent = false }: { title: string; text: string; accent?: boolean }) {
  return (
    <div className={`${accent ? "surface-card-amber" : "surface-card"} p-5 md:p-7 min-h-[190px] flex flex-col justify-between`}>
      <span className={`w-2 h-2 rounded-full ${accent ? "bg-[#d6a15c]" : "bg-[#5d6166]"}`} />
      <div>
        <h3 className="text-xl text-[#e8e7e1]">{title}</h3>
        <p className="text-[#74787d] text-sm leading-relaxed mt-3">{text}</p>
      </div>
    </div>
  );
}

function CommercialLine({ number, text }: { number: string; text: string }) {
  return (
    <div className="grid grid-cols-[36px_1fr] gap-3 border-t border-[#282a2e] pt-4">
      <span className="text-[9px] font-mono signal-text">{number}</span>
      <span className="text-sm text-[#c4c4be]">{text}</span>
    </div>
  );
}

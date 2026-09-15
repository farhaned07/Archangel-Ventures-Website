import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Transformation Thailand | Management Workshop | Archangel",
  description:
    "A fixed fee AI transformation workshop for management teams in Bangkok. Identify the 3 to 5 workflows where AI can create measurable business value, estimate ROI, and leave with a 30 day implementation plan.",
};

const deliverables = [
  ["01", "Workflow audit", "Map the work creating the most cost, delay and repetitive effort."],
  ["02", "Opportunity ranking", "Identify the 3 to 5 AI opportunities worth management attention."],
  ["03", "ROI estimate", "Estimate business value, implementation effort, time saved and operating impact."],
  ["04", "30 day action plan", "Leave with a practical sequence for what to implement first and why."],
];

const goodFit = [
  "You already use ChatGPT, Copilot or other AI tools but the business impact is unclear.",
  "You have manual finance, operations, sales or reporting workflows that consume significant staff time.",
  "Management wants practical AI opportunities before committing to a larger transformation programme.",
  "You want one accountable partner that can move from strategy into implementation.",
];

export default function AITransformationPage() {
  return (
    <main className="min-h-screen w-full pt-[61px] md:pt-[65px] bg-[#050505]">
      <section className="technical-grid border-b border-[#202226]">
        <div className="container-grid py-16 md:py-24 lg:py-28">
          <div className="flex items-center justify-between pb-5 border-b border-[#25272b] text-mono-label">
            <span>AI Transformation / Bangkok</span>
            <span>Fixed fee entry engagement</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 md:pt-20 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d8d9d5]" />
                <span className="text-mono-label">For management teams</span>
              </div>
              <h1 className="text-hero text-[#f1f1ed] max-w-5xl">
                Find where AI can actually save your business money.
              </h1>
              <p className="mt-8 text-base md:text-xl text-[#8d9196] leading-relaxed max-w-3xl">
                In one focused management session, Archangel maps expensive workflows, identifies the highest value AI opportunities, estimates the economics, and gives you a clear implementation plan.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call"
                  className="group inline-flex items-center justify-between gap-8 bg-[#e8e8e4] text-[#060606] px-5 py-3.5 text-xs font-mono uppercase tracking-[0.12em] hover:bg-white transition-colors min-w-[280px]"
                >
                  Book a 15 minute opportunity call <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 border border-[#2a2c30] bg-[#080808] technical-corner p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-mono-label">
                <span>Management workshop</span><span>AG-01</span>
              </div>
              <div>
                <p className="text-5xl md:text-6xl text-[#eeeeea] tracking-[-0.05em]">฿45,000</p>
                <div className="mt-6 space-y-2 text-sm text-[#7f8388]">
                  <p>Bangkok · on site</p>
                  <p>Focused management session</p>
                  <p>Workshop fee credited toward implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="What you leave with" />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-14 md:mt-20 border-t border-l border-[#26282c]">
            {deliverables.map(([number, title, text]) => (
              <Deliverable key={number} number={number} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="How the session works" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-5">
              <h2 className="text-display text-[#eeeeea] max-w-2xl">
                Bring the work. We find the value.
              </h2>
              <p className="text-[#7c8085] mt-7 leading-relaxed max-w-lg">
                This is not a general AI training session. We work from your actual operating processes and management priorities.
              </p>
            </div>
            <div className="lg:col-span-7 border border-[#26282c] bg-[#080808] technical-corner">
              <Step number="01" title="Management context" text="Clarify business priorities, cost pressure, growth constraints and where teams are already experimenting with AI." />
              <Step number="02" title="Workflow mapping" text="Identify the work that is repetitive, document heavy, rules heavy, slow or dependent on manual handoffs." />
              <Step number="03" title="Value ranking" text="Compare opportunities by business impact, implementation difficulty, data readiness and time to value." />
              <Step number="04" title="Decision plan" text="Choose what should be implemented first, what should wait, and what is not worth building." last />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Good fit" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-4">
              <h2 className="text-display text-[#eeeeea]">This is for operating companies.</h2>
              <p className="text-[#777b80] mt-6 leading-relaxed max-w-md">
                Especially companies that know AI matters but do not yet have a clear, economically justified implementation sequence.
              </p>
            </div>
            <div className="lg:col-span-8 border-t border-[#2a2c30]">
              {goodFit.map((item, index) => (
                <div key={item} className="grid grid-cols-[48px_1fr] gap-5 py-6 md:py-7 border-b border-[#2a2c30]">
                  <span className="font-mono text-[10px] text-[#555a60] pt-1">0{index + 1}</span>
                  <p className="text-[#b7b9b6] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#202226] bg-[#070707]">
        <div className="container-grid section-pad">
          <SectionHead index="04" label="What happens next" />
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#26282c] mt-14 md:mt-20">
            <Path number="01" title="Workshop" text="Agree the priority workflows and establish the commercial case." />
            <Path number="02" title="Implementation" text="If there is a strong case, Archangel builds the selected system with the operating team." border />
            <Path number="03" title="Scale" text="Expand only after the first implementation produces enough evidence to justify it." />
          </div>
          <p className="text-[#85898e] mt-8 max-w-3xl leading-relaxed">
            If Archangel implements one of the selected projects, the ฿45,000 workshop fee is credited toward implementation.
          </p>
        </div>
      </section>

      <section className="technical-grid bg-[#050505]">
        <div className="container-grid py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <span className="text-mono-label block mb-6">Start / 15 minute qualification</span>
              <h2 className="text-display text-[#f0f0ec] max-w-5xl">
                Tell us where work is costing your business time or money.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-[#7c8085] text-sm leading-relaxed mb-7 lg:ml-auto max-w-sm">
                We use the first call to determine whether this workshop is the right next step for your company.
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

function Deliverable({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="min-h-[190px] border-r border-b border-[#26282c] p-6 md:p-8 lg:p-10 flex flex-col justify-between gap-8 bg-[#070707]">
      <div className="flex items-center justify-between text-mono-label"><span>{number}</span><span>OUTPUT</span></div>
      <div>
        <h3 className="text-xl text-[#e4e4e0] mb-3">{title}</h3>
        <p className="text-[#74787d] text-sm leading-relaxed max-w-lg">{text}</p>
      </div>
    </div>
  );
}

function Step({ number, title, text, last = false }: { number: string; title: string; text: string; last?: boolean }) {
  return (
    <div className={`grid grid-cols-12 gap-4 md:gap-8 p-5 md:p-7 ${last ? "" : "border-b border-[#25272b]"}`}>
      <span className="col-span-2 md:col-span-1 font-mono text-[10px] text-[#555a60] pt-1">{number}</span>
      <h3 className="col-span-10 md:col-span-3 text-[#e6e6e2] text-lg">{title}</h3>
      <p className="col-span-12 md:col-span-8 text-[#777b80] text-sm leading-relaxed md:pl-4">{text}</p>
    </div>
  );
}

function Path({ number, title, text, border = false }: { number: string; title: string; text: string; border?: boolean }) {
  return (
    <div className={`p-6 md:p-8 lg:p-10 ${border ? "md:border-l md:border-r border-[#26282c]" : ""}`}>
      <div className="flex items-center justify-between text-mono-label mb-12"><span>{number}</span><span className="text-[#4b4f54]">AG</span></div>
      <h3 className="text-xl text-[#e6e6e2] mb-4">{title}</h3>
      <p className="text-[#74787d] leading-relaxed text-sm">{text}</p>
    </div>
  );
}

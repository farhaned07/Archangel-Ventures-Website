"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TransformationCanvas, WorkshopPreview, WorkflowStory } from "@/components/ui/PremiumVisuals";

export default function Home() {
  return (
    <main className="pt-[64px] md:pt-[72px] overflow-hidden">
      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 xl:gap-20 items-center">
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
              <p className="mt-7 md:mt-9 text-lg md:text-xl leading-relaxed text-[#666660] max-w-2xl">
                Archangel works with management teams to find where AI can create measurable value, implement the right systems, and make them work inside the business.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
                  Start with the workshop <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call" className="button-secondary w-full sm:w-auto">
                  Talk to Archangel <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 md:mt-12 pt-5 border-t border-[#deded8] flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#85857f]">
                <span>Strategy + implementation</span>
                <span>Founder led</span>
                <span>Thailand</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} variant="fade">
            <div className="lg:-mr-10 xl:-mr-20">
              <TransformationCanvas />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-20 md:py-32 lg:py-36">
          <div className="max-w-5xl">
            <p className="eyebrow text-[#8e8e87] mb-8">The problem</p>
            <Reveal>
              <h2 className="display-large">
                AI is everywhere.
                <span className="block text-[#85857e]">Business value isn&apos;t.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 md:mt-10 text-lg md:text-2xl leading-relaxed text-[#aaa9a2] max-w-3xl">
                Most companies do not need more AI tools. They need to know which parts of the business are worth changing, what to build, and whether the economics justify it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="how" className="page-shell section-space">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-[#85857f]">How we work</p>
            <h2 className="display-medium mt-5">We begin with the work.</h2>
            <p className="text-[#686862] text-base md:text-lg leading-relaxed mt-6 max-w-md">
              Not with a model, chatbot or transformation deck. We start with the workflows consuming time, money and management attention.
            </p>
          </div>

          <div className="border-t border-[#d9d9d3]">
            <ProcessRow number="01" title="Find the value" text="Map operating friction and identify where AI could materially improve the economics." />
            <ProcessRow number="02" title="Simplify first" text="Remove unnecessary process before automating anything." />
            <ProcessRow number="03" title="Implement" text="Build the useful system inside the real workflow with the team that owns it." />
            <ProcessRow number="04" title="Measure" text="Compare the result against the current operating baseline and expand only when the evidence is strong." />
          </div>
        </div>
      </section>

      <section id="workshop" className="bg-[#ecece6]">
        <div className="page-shell section-space">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow text-[#777771]">Start here</p>
              <h2 className="display-large mt-5">One room. One afternoon. One decision.</h2>
              <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#666660] max-w-xl">
                The AI Transformation Workshop gives management a clear view of where AI is worth funding and what should happen next.
              </p>

              <div className="mt-8 md:mt-10 flex items-end gap-5 border-t border-[#d2d2cc] pt-7">
                <div>
                  <span className="text-sm text-[#777771] block mb-2">Fixed fee</span>
                  <span className="text-5xl md:text-6xl tracking-[-0.06em] font-medium">฿45,000</span>
                </div>
                <span className="text-sm text-[#777771] pb-1">Bangkok · on site</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                <OfferLine text="Workflow map" />
                <OfferLine text="3 to 5 priorities" />
                <OfferLine text="ROI analysis" />
                <OfferLine text="30 day action plan" />
              </div>

              <Link href="/ai-transformation" className="button-primary mt-9">
                See the workshop <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <WorkshopPreview />
          </div>
        </div>
      </section>

      <section id="examples" className="page-shell section-space">
        <div className="max-w-4xl">
          <p className="eyebrow text-[#85857f]">Where value usually hides</p>
          <h2 className="display-large mt-5">Look inside operating work.</h2>
          <p className="mt-6 text-lg md:text-xl text-[#6c6c66] leading-relaxed max-w-2xl">
            The best first AI projects are usually repetitive, document heavy, rules heavy or dependent on manual handoffs.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <WorkflowStory title="Finance" steps={["Invoice arrives", "Extract", "Validate", "Route", "Exception"]} />
          <WorkflowStory title="Customer operations" steps={["Request", "Understand", "Retrieve", "Respond", "Escalate"]} />
          <WorkflowStory title="Management reporting" steps={["Sources", "Consolidate", "Analyse", "Brief"]} />
          <WorkflowStory title="Sales operations" steps={["Research", "Draft", "CRM", "Follow up"]} />
        </div>
      </section>

      <section className="bg-white border-y border-[#e1e1db]">
        <div className="page-shell section-space">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow text-[#85857f]">Archangel</p>
              <h2 className="display-large mt-5 max-w-4xl">Strategy is useless if nobody builds it.</h2>
              <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#686862] max-w-2xl">
                Archangel Company Limited is a Bangkok based, BOI promoted software and AI company. We work directly with management and operating teams from identifying the opportunity through implementation.
              </p>
              <Link href="/work" className="inline-flex items-center gap-2 mt-8 font-medium border-b border-[#bdbdb7] pb-1 hover:border-[#11110f] transition-colors">
                About the company <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-[2rem] bg-[#f0f0eb] p-6 md:p-8 lg:p-10">
              <div className="flex items-center justify-between pb-6 border-b border-[#d7d7d1]">
                <span className="text-sm text-[#74746e]">Company</span>
                <span className="pill bg-white">Thailand</span>
              </div>
              <CompanyFact label="Entity" value="Archangel Company Limited" />
              <CompanyFact label="Status" value="BOI promoted" />
              <CompanyFact label="Focus" value="Applied AI transformation" />
              <CompanyFact label="Operating model" value="Founder led" last />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-32 lg:py-36">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#11110f] text-[#f7f7f2] px-6 py-12 md:p-14 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="eyebrow text-[#8f8f88]">Start a conversation</p>
              <h2 className="display-large mt-5 max-w-4xl">Where is your business wasting time?</h2>
              <p className="text-[#aaa9a2] mt-6 text-base md:text-lg max-w-2xl">The first call is 15 minutes. We use it to decide whether there is a real business case worth exploring.</p>
            </div>
            <a href="mailto:build@archangel.ventures?subject=15%20minute%20AI%20Opportunity%20Call" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f6f6f2] text-[#11110f] px-6 py-4 font-semibold whitespace-nowrap hover:bg-white transition-colors">
              Book the call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProcessRow({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="grid grid-cols-[48px_1fr] md:grid-cols-[72px_0.65fr_1.1fr] gap-4 md:gap-8 py-7 md:py-9 border-b border-[#d9d9d3] items-start">
      <span className="text-xs text-[#8c8c86] pt-1">{number}</span>
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{title}</h3>
      <p className="col-start-2 md:col-start-auto text-[#71716b] leading-relaxed max-w-xl">{text}</p>
    </div>
  );
}

function OfferLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm md:text-base text-[#4f4f4a]">
      <span className="w-5 h-5 rounded-full border border-[#c8c8c2] flex items-center justify-center bg-white/60">
        <Check className="w-3 h-3" />
      </span>
      {text}
    </div>
  );
}

function CompanyFact({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`py-5 md:py-6 grid grid-cols-[0.85fr_1.15fr] gap-5 ${last ? "" : "border-b border-[#d7d7d1]"}`}>
      <span className="text-sm text-[#85857f]">{label}</span>
      <span className="text-sm md:text-base font-medium text-right">{value}</span>
    </div>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-24">

      {/* 01 HERO SECTION */}
      <section className="w-full min-h-[90vh] flex flex-col justify-between border-b border-[#222]">
        <div className="container-grid flex-1 flex flex-col justify-center">
          <Reveal>
            <h1 className="text-display md:text-hero uppercase tracking-tighter leading-[0.9] text-white max-w-6xl">
              AI companies <br />
              <span className="text-[#888]">for emerging-market realities.</span>
            </h1>
          </Reveal>
        </div>

        <div className="w-full border-t border-[#222]">
          <div className="container-grid grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="p-6 md:p-8 border-r border-[#222] border-b md:border-b-0">
              <Reveal delay={0.2}>
                <span className="text-mono-label block mb-2">Context</span>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">
                  A founder-led holding company building and owning AI-native companies from inside the markets they serve.
                </p>
              </Reveal>
            </div>
            <div className="p-6 md:p-8 border-r border-[#222] border-b md:border-b-0">
              <Reveal delay={0.3}>
                <span className="text-mono-label block mb-2">Structure</span>
                <span className="text-2xl font-medium text-white block">Hanna + Onnesha</span>
                <span className="text-xs text-[#888]">First companies</span>
              </Reveal>
            </div>
            <div className="p-6 md:p-8 border-r border-[#222] border-b md:border-b-0">
              <Reveal delay={0.4}>
                <span className="text-mono-label block mb-2">Geography</span>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">
                  Thailand · Bangladesh · Southeast Asia
                </p>
              </Reveal>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between items-start md:items-end">
              <Reveal delay={0.5}>
                <span className="text-mono-label block mb-2">Established</span>
                <span className="text-xl text-[#E5E5E5]">2023</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 THESIS */}
      <section id="thesis" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">01 / Thesis</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="text-display text-white mb-12 max-w-4xl">
                The next important AI companies will not only come from Silicon Valley.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-[#888] text-lg leading-relaxed max-w-2xl space-y-6">
                <p>
                  Emerging markets are not smaller versions of advanced markets. They have different healthcare systems, languages, workflows, institutions, constraints, and trust gaps.
                </p>
                <p>
                  Archangel builds from inside these realities.
                </p>
                <p>
                  We create and own AI-native companies around problems where local context matters deeply — starting with care intelligence in Thailand and AI work infrastructure for Bangladesh and Southeast Asia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 FOCUS */}
      <section id="focus" className="w-full border-b border-[#222]">
        <div className="w-full border-b border-[#222] py-6">
          <div className="container-grid">
            <Reveal>
              <span className="text-mono-label">02 / Focus</span>
            </Reveal>
          </div>
        </div>
        <div className="container-grid grid grid-cols-1 md:grid-cols-3">
          <div className="border-r border-[#222] border-b md:border-b-0 p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.1}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">001</span>
                <h3 className="text-2xl font-medium text-white mb-6">Care <br /> Intelligence</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  Healthcare teams need better visibility between clinical visits.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  We build systems that help care teams monitor patients, identify risk earlier, and move from manual follow-up to exception-driven care.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Healthcare</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Risk Visibility</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Patient Follow-up</span>
              </div>
            </Reveal>
          </div>

          <div className="border-r border-[#222] border-b md:border-b-0 p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.2}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">002</span>
                <h3 className="text-2xl font-medium text-white mb-6">AI Work <br /> Infrastructure</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  Emerging markets need tools that help people build, automate, and operate faster with AI.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  We build AI work systems designed around local talent, business workflows, and regional constraints.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">AI Workers</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Automation</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Productivity</span>
              </div>
            </Reveal>
          </div>

          <div className="p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.3}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">003</span>
                <h3 className="text-2xl font-medium text-white mb-6">Institutional <br /> Systems</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  Some of the largest opportunities are hidden inside institutions.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  We look for systems where AI can improve coordination, escalation, decision-making, and operational intelligence.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Operations</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Infrastructure</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Decision Systems</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 COMPANIES */}
      <section id="companies" className="w-full border-b border-[#222] bg-[#050505]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 pt-24 pb-12">
          <div className="md:col-span-3">
            <Reveal>
              <span className="text-mono-label">03 / Companies</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-4xl text-white mb-16">First companies.</h2>
            </Reveal>

            <div className="grid grid-cols-12 pb-4 border-b border-[#222] text-xs font-mono text-[#666] uppercase tracking-wider">
              <div className="col-span-5 md:col-span-4">Company</div>
              <div className="col-span-5 md:col-span-4">Category</div>
              <div className="hidden md:block md:col-span-3">Region</div>
              <div className="col-span-2 md:col-span-1 text-right">Link</div>
            </div>

            <Reveal delay={0.1}>
              <Link href="https://www.hanna.care" target="_blank" className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-pointer">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium group-hover:text-[#6F829A] transition-colors mb-2">Hanna</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Care intelligence for healthcare teams in Thailand. Hanna helps care teams monitor patients between visits, identify risk earlier, and move from manual follow-up to exception-driven care.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  Care Intelligence
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  Thailand
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#444] group-hover:text-white" />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="https://www.onnesha.fun" target="_blank" className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-pointer">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium group-hover:text-[#6F829A] transition-colors mb-2">Onnesha AI</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    AI work infrastructure for Bangladesh and Southeast Asia. Onnesha helps people and businesses build, automate, and operate faster with AI.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  AI Work Infrastructure
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  Bangladesh / Southeast Asia
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#444] group-hover:text-white" />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-default">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium mb-2">Future Companies</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    New companies will be built where intelligence, infrastructure, capital, and trust create long-term strategic opportunity.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  Incubation
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  Emerging Markets
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#222]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 APPROACH */}
      <section id="approach" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">04 / Approach</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="text-display text-white mb-16 max-w-4xl">
                We do not collect ideas. We build operating companies.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Reveal delay={0.15}>
                <h3 className="text-xl text-white font-medium mb-4">Founder-led</h3>
                <p className="text-[#888] leading-relaxed">
                  Archangel is built around direct founder involvement. We design, build, test, and operate close to the market.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <h3 className="text-xl text-white font-medium mb-4">Company-first</h3>
                <p className="text-[#888] leading-relaxed">
                  We do not build demos for attention. We build companies around real market gaps, durable demand, and institutional trust.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <h3 className="text-xl text-white font-medium mb-4">Context-native</h3>
                <p className="text-[#888] leading-relaxed">
                  We start from local systems, not imported assumptions. Language, regulation, culture, distribution, and trust shape the product from day one.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 06 STRUCTURE */}
      <section id="structure" className="w-full border-b border-[#222] bg-[#0A0A0A]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">05 / Structure</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="text-display text-white mb-12 max-w-4xl">
                A holding company for intelligence, infrastructure, capital, and private access.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-[#888] text-lg leading-relaxed max-w-2xl space-y-6">
                <p>
                  Archangel’s first public focus is AI company building.
                </p>
                <p>
                  The longer-term structure is broader: to build and own companies across the systems that shape how people receive care, work, move, invest, and access trusted networks.
                </p>
                <p>
                  AI is the first wedge. The holding company is the architecture.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 CONTEXT */}
      <section id="context" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">06 / Context</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-white leading-tight max-w-4xl">
                Emerging markets do not need copied AI. They need contextual AI.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 text-[#888] leading-relaxed max-w-2xl space-y-6">
                <p>
                  Most global AI products are built for advanced markets first and localized later.
                </p>
                <p>
                  But countries like Thailand and Bangladesh have different healthcare workflows, institutional structures, trust systems, languages, and cost pressures.
                </p>
                <p>
                  The opportunity is not to copy what exists elsewhere. The opportunity is to build from inside the market.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 CONTACT */}
      <section id="contact" className="w-full md:min-h-[60vh] flex flex-col justify-center py-24 bg-[#050505]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">07 / Contact</span>
            </Reveal>
          </div>
          <div className="md:col-span-9 flex flex-col justify-between h-full">
            <div className="mb-24">
              <Reveal delay={0.1}>
                <h2 className="text-display text-white mb-8">
                  Build with Archangel.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[#888] max-w-xl text-lg">
                  For healthcare pilots, AI infrastructure partnerships, investment conversations, media inquiries, and strategic collaboration.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <a href="mailto:build@archangel.ventures" className="text-3xl md:text-5xl text-white font-medium hover:text-[#6F829A] transition-colors border-b border-[#333] pb-2 self-start">
                build@archangel.ventures
              </a>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}

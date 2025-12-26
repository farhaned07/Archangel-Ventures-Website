"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col pt-24">

      {/* 01 HERO SECTION */}
      <section className="w-full min-h-[90vh] flex flex-col justify-between section-border-b">
        <div className="container-grid flex-1 flex flex-col justify-center">
          <Reveal>
            <h1 className="text-display md:text-hero uppercase tracking-tighter leading-[0.9] text-white">
              Architecting <br />
              <span className="text-[#888]">The Future.</span>
            </h1>
          </Reveal>
        </div>

        {/* Hero Bottom Grid */}
        <div className="w-full border-t border-[#222]">
          <div className="container-grid grid grid-cols-1 md:grid-cols-4 gap-0">
            <div className="p-6 md:p-8 border-r border-[#222] border-b md:border-b-0">
              <Reveal delay={0.2}>
                <span className="text-mono-label block mb-2">Context</span>
                <p className="text-sm text-[#E5E5E5] leading-relaxed">
                  A founder-led holding company.<br />
                  Creating and owning infrastructure businesses designed for institutional adoption.
                </p>
              </Reveal>
            </div>
            <div className="hidden md:block p-8 border-r border-[#222]">
              {/* Spacer */}
            </div>
            <div className="p-6 md:p-8 border-r border-[#222] border-b md:border-b-0 flex flex-col justify-between">
              <Reveal delay={0.3}>
                <span className="text-mono-label block mb-2">Structure</span>
                <div>
                  <span className="text-3xl font-medium text-white block">3+</span>
                  <span className="text-xs text-[#888]">Companies</span>
                </div>
              </Reveal>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between items-start md:items-end">
              <Reveal delay={0.4}>
                <span className="text-mono-label block mb-2">Established</span>
                <span className="text-xl text-[#E5E5E5]">2023</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 IDENTITY (was Manifesto) */}
      <section id="identity" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">01 / Identity</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <h2 className="text-display text-white mb-12 max-w-4xl">
                We do not flip assets. We compound operational capability.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#888] text-lg leading-relaxed max-w-2xl mb-8">
                Archangel creates and owns infrastructure businesses designed for institutional adoption.
                Each company is built from first principles and operated directly by the founding team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 FOCUS (High Density) */}
      <section id="focus" className="w-full border-b border-[#222]">
        <div className="w-full border-b border-[#222] py-6">
          <div className="container-grid">
            <Reveal>
              <span className="text-mono-label">02 / Focus</span>
            </Reveal>
          </div>
        </div>
        <div className="container-grid grid grid-cols-1 md:grid-cols-3">
          {/* FOCUS 1 */}
          <div className="border-r border-[#222] border-b md:border-b-0 p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.1}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">001</span>
                <h3 className="text-2xl font-medium text-white mb-6">Healthcare & <br /> Insurance</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  Healthcare systems that need earlier engagement and better routing.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  Insurance and administrative systems that need prevention, not remediation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Triage</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Routing</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Prevention</span>
              </div>
            </Reveal>
          </div>

          {/* FOCUS 2 */}
          <div className="border-r border-[#222] border-b md:border-b-0 p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.2}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">002</span>
                <h3 className="text-2xl font-medium text-white mb-6">Institutional <br /> Artificial Intelligence</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  AI infrastructure that institutions can deploy, govern, and trust.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  Not consumer tools. Foundational models that operate within sovereign boundaries.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Sovereign</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Audit</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Governance</span>
              </div>
            </Reveal>
          </div>

          {/* FOCUS 3 */}
          <div className="p-8 md:p-12 h-full min-h-[450px] flex flex-col justify-between hover:bg-[#0A0A0A] transition-colors">
            <Reveal delay={0.3}>
              <div>
                <span className="text-mono-label text-[#444] block mb-8">003</span>
                <h3 className="text-2xl font-medium text-white mb-6">Public <br /> Systems</h3>
                <p className="text-[#888] leading-relaxed mb-6">
                  Public-sector systems that must operate reliably at national scale.
                </p>
                <p className="text-[#666] text-sm leading-relaxed">
                  Reliability, accountability, and escalation for critical citizen services.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Scale</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Reliability</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555] border border-[#222] px-2 py-1">Escalation</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 PORTFOLIO (was Works) */}
      <section id="portfolio" className="w-full border-b border-[#222] bg-[#050505]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 pt-24 pb-12">
          <div className="md:col-span-3">
            <Reveal>
              <span className="text-mono-label">03 / Portfolio</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-4xl text-white mb-16">Companies</h2>
            </Reveal>

            {/* Table Header */}
            <div className="grid grid-cols-12 pb-4 border-b border-[#222] text-xs font-mono text-[#666] uppercase tracking-wider">
              <div className="col-span-5 md:col-span-4">Venture</div>
              <div className="col-span-5 md:col-span-4">Category</div>
              <div className="hidden md:block md:col-span-3">Region</div>
              <div className="col-span-2 md:col-span-1 text-right">Link</div>
            </div>

            {/* Row 1 - Hanna */}
            <Reveal delay={0.1}>
              <Link href="https://www.hanna.care" target="_blank" className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-pointer">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium group-hover:text-blue-600 transition-colors mb-2">Hanna</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Early-intervention platform for healthcare systems. Enables institutions to identify, route, and resolve health events before escalation.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  Healthcare Infrastructure
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  Thailand
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#444] group-hover:text-white" />
                </div>
              </Link>
            </Reveal>

            {/* Row 2 - Onnesha */}
            <Reveal delay={0.2}>
              <Link href="https://www.onnesha.fun" target="_blank" className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-pointer">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium group-hover:text-blue-600 transition-colors mb-2">Onnesha AI</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Foundational AI infrastructure institutions can own and operate. Sovereignty. Auditability. Control.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  Institutional AI Infrastructure
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  South Asia
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#444] group-hover:text-white" />
                </div>
              </Link>
            </Reveal>

            {/* Row 3 */}
            <Reveal delay={0.3}>
              <div className="group grid grid-cols-12 py-8 border-b border-[#222] items-start hover:bg-[#0A0A0A] transition-colors cursor-default">
                <div className="col-span-12 md:col-span-5 pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl text-white font-medium group-hover:text-blue-600 transition-colors mb-2">Additional Ventures</h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Infrastructure companies aligned with our thesis. Not all public. We move deliberately.
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3 text-[#E5E5E5] text-sm">
                  Incubation
                </div>
                <div className="col-span-4 md:col-span-3 text-[#888] text-sm">
                  Global
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <ArrowUpRight className="w-5 h-5 ml-auto text-[#444] group-hover:text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 OPERATIONS */}
      <section id="operations" className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">04 / Operations</span>
            </Reveal>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Reveal delay={0.1}>
                <h3 className="text-xl text-white font-medium mb-4">Founder-Led</h3>
                <p className="text-[#888] leading-relaxed">
                  Decisions made by builders, not committees. We move without permission loops. We operate what we build.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.2}>
                <h3 className="text-xl text-white font-medium mb-4">Infrastructure-First</h3>
                <p className="text-[#888] leading-relaxed">
                  We build systems, not products. Coordination layers, not interfaces. We optimize for durability and operability, not exits.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 06 CONTEXT (Why Now) */}
      <section id="context" className="w-full border-b border-[#222] bg-[#0A0A0A]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">05 / Context</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-white leading-tight max-w-4xl">
                Infrastructure decisions made in the next few years will shape South Asia for decades.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 text-[#888] leading-relaxed max-w-2xl space-y-6">
                <p>
                  Standards will lock. Vendors will entrench. Systems will harden.
                </p>
                <p>
                  If this infrastructure is not built by people who understand the context and can operate independently, it will be built by people who do not.
                  Institutions will be left dependent on systems they cannot change.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 SIGNAL */}
      <section id="signal" className="w-full md:min-h-[60vh] flex flex-col justify-center py-24 bg-[#050505]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <Reveal>
              <span className="text-mono-label">06 / Signal</span>
            </Reveal>
          </div>
          <div className="md:col-span-9 flex flex-col justify-between h-full">
            <div className="mb-24">
              <Reveal delay={0.1}>
                <h2 className="text-display text-white mb-8">
                  Let's build something <br /> that lasts.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[#888] max-w-xl text-lg">
                  We are open to collaboration with founders, institutions, and partners working on hard, necessary problems.
                  We care less about pitch decks and more about clarity of thought and execution ability.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <a href="mailto:build@archangel.ventures" className="text-3xl md:text-5xl text-white font-medium hover:text-blue-600 transition-colors border-b border-[#333] pb-2 self-start">
                build@archangel.ventures
              </a>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}

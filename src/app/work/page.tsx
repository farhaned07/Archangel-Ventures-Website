import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function WorkPage() {
  return (
    <main className="min-h-screen w-full pt-[61px] md:pt-[65px]">
      <section className="w-full border-b border-[#202226] technical-grid">
        <div className="container-grid py-16 md:py-24">
          <div className="flex items-center justify-between pb-5 border-b border-[#26282c] mb-12 text-mono-label">
            <span>AG / Company record</span>
            <span>Archive Ref. 04</span>
          </div>

          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.12em] text-[#6d7176] hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to system
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.03}>
                <span className="text-mono-label block mb-6">Work / Company history</span>
                <h1 className="text-hero text-[#f0f0ec] max-w-5xl">
                  We build applied AI systems from inside the markets they serve.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.09}>
                <p className="text-[#81858a] text-base leading-relaxed max-w-md lg:ml-auto">
                  Archangel began as a founder led company builder focused on emerging market problems where workflow, language, regulation and trust materially change the system.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[#202226] bg-[#060606]">
        <div className="container-grid section-pad">
          <SectionHead index="01" label="Selected systems" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-display text-[#eeeeea]">Company building.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-[#777b80] mt-6 leading-relaxed max-w-md">
                  Products and operating systems built around healthcare, work infrastructure and enterprise AI.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 border-t border-[#2a2c30]">
              <WorkRow name="Hanna" code="HNA-01" category="Healthcare AI" region="Thailand" description="AI systems for clinical documentation, care planning and care intelligence in Thailand." href="https://www.hanna.care" />
              <WorkRow name="Onnesha AI" code="ONN-02" category="AI Work Infrastructure" region="Bangladesh / Southeast Asia" description="Experiments and products around AI native work, automation and local market AI infrastructure." href="https://www.onnesha.fun" />
              <WorkRow name="Archangel Applied AI" code="AGA-03" category="Enterprise AI" region="Thailand" description="Workflow transformation for finance, operations and back office teams. We identify expensive manual work, build the automation and measure the result." />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[#202226] technical-grid">
        <div className="container-grid section-pad">
          <SectionHead index="02" label="Operating thesis" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-14 md:mt-20">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-display text-[#eeeeea] max-w-4xl">
                  Emerging markets are not smaller versions of advanced markets.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 border border-[#26282c] bg-[#080808] technical-corner p-6 md:p-8">
              <Reveal delay={0.05}>
                <div className="text-[#7f8388] leading-relaxed space-y-6">
                  <p>They have different healthcare systems, languages, workflows, institutions, constraints and trust gaps. Useful AI has to understand those realities rather than simply localize a product built elsewhere.</p>
                  <p>Thailand and Bangladesh have been our starting markets, with Southeast Asia as the broader operating context.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[#202226] bg-[#050505]">
        <div className="container-grid section-pad">
          <SectionHead index="03" label="Operating method" />
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#26282c] mt-14 md:mt-20">
            <Principle number="01" title="Founder led" text="Direct involvement in product, implementation and customer work keeps the company close to operating reality." />
            <Principle number="02" title="Implementation first" text="We prefer working systems over innovation theatre. The work should change how a team operates." border />
            <Principle number="03" title="Context native" text="Language, regulation, culture, distribution and institutional constraints shape the system from day one." />
          </div>
        </div>
      </section>

      <section className="w-full technical-grid">
        <div className="container-grid py-24 md:py-32">
          <SectionHead index="04" label="Current focus" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 md:mt-20 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-display text-[#eeeeea] max-w-4xl">
                Today, the fastest way to work with Archangel is one business workflow at a time.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/#sprint" className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.12em] text-[#d8d9d5] border-b border-[#55595e] pb-2 hover:border-white transition-colors">
                Open sprint spec <ArrowUpRight className="w-4 h-4" />
              </Link>
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

function WorkRow({ name, code, category, region, description, href }: { name: string; code: string; category: string; region: string; description: string; href?: string }) {
  const content = (
    <div className="group grid grid-cols-12 gap-y-5 gap-x-5 md:gap-x-8 py-7 md:py-9 border-b border-[#2a2c30] items-start hover:bg-[#090909] px-2 md:px-4 transition-colors">
      <div className="col-span-2 md:col-span-1 font-mono text-[9px] text-[#50545a] pt-1">{code}</div>
      <div className="col-span-10 md:col-span-4">
        <h3 className="text-xl text-[#e3e3df] mb-2 group-hover:text-white transition-colors">{name}</h3>
        <p className="text-[#72767b] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="col-span-5 col-start-3 md:col-span-3 md:col-start-auto text-[#aaaDAA] text-sm">{category}</div>
      <div className="col-span-5 md:col-span-3 text-[#666a6f] text-sm">{region}</div>
      <div className="col-span-2 md:col-span-1 text-right">
        {href ? <ArrowUpRight className="w-4 h-4 ml-auto text-[#4e5257] group-hover:text-white transition-colors" /> : null}
      </div>
    </div>
  );

  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a> : content;
}

function Principle({ number, title, text, border = false }: { number: string; title: string; text: string; border?: boolean }) {
  return (
    <div className={`p-6 md:p-8 lg:p-10 ${border ? "md:border-l md:border-r border-[#26282c]" : ""}`}>
      <div className="flex items-center justify-between text-mono-label mb-12"><span>{number}</span><span className="text-[#4b4f54]">AG</span></div>
      <h3 className="text-xl text-[#e6e6e2] mb-4">{title}</h3>
      <p className="text-[#74787d] leading-relaxed text-sm">{text}</p>
    </div>
  );
}

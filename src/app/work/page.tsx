import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#777771] hover:text-[#11110f] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archangel
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-end mt-12 md:mt-16">
          <div>
            <p className="eyebrow text-[#85857f]">Company</p>
            <h1 className="display-hero mt-5 max-w-5xl">Built close to the work.</h1>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-[#696963] max-w-xl lg:ml-auto">
            Archangel is a Bangkok based, BOI promoted software and AI company focused on applied systems that change how real operating teams work.
          </p>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-[#8f8f88]">Selected systems</p>
              <h2 className="display-medium mt-5">Products and operating systems built from inside the markets they serve.</h2>
            </div>
            <div className="border-t border-[#343431]">
              <WorkRow name="Hanna" category="Healthcare AI" region="Thailand" description="Clinical documentation and multilingual care planning built around real healthcare workflows." href="https://www.hanna.care" />
              <WorkRow name="Archangel Applied AI" category="Enterprise transformation" region="Thailand" description="AI systems for finance, operations and management workflows where measurable operating value matters." />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-[#85857f]">Operating thesis</p>
            <h2 className="display-large mt-5">Context changes the system.</h2>
          </div>
          <div className="text-lg md:text-xl leading-relaxed text-[#686862] space-y-6 max-w-2xl">
            <p>Useful AI is not just a model placed on top of a process. Language, regulation, workflow, trust, data and institutional constraints shape whether a system works.</p>
            <p>Thailand and Bangladesh have been Archangel&apos;s starting markets, with Southeast Asia as the broader operating context.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell section-space">
          <p className="eyebrow text-[#7a7a74]">How we operate</p>
          <div className="mt-10 md:mt-14 border-t border-[#d2d2cc]">
            <Principle title="Founder led" text="Direct involvement in product, implementation and customer work keeps the company close to operating reality." />
            <Principle title="Implementation first" text="We prefer working systems over innovation theatre. The work should change how a team actually operates." />
            <Principle title="Context native" text="Language, regulation, culture, distribution and institutional constraints shape the system from day one." />
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-32">
        <div className="rounded-[2rem] md:rounded-[2.5rem] bg-white border border-[#deded8] p-6 md:p-10 lg:p-14 shadow-[0_24px_80px_rgba(20,20,18,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-20 items-end">
            <div>
              <p className="eyebrow text-[#85857f]">Current focus</p>
              <h2 className="display-medium mt-5">Today, the fastest way to work with Archangel is through one management problem at a time.</h2>
            </div>
            <div>
              <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
                AI Transformation Workshop <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-[#777771] mt-4">฿45,000 · Bangkok · On site</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkRow({ name, category, region, description, href }: { name: string; category: string; region: string; description: string; href?: string }) {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1.25fr] gap-4 md:gap-10 py-7 md:py-9 border-b border-[#343431] group">
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{name}</h3>
          {href ? <ArrowUpRight className="w-4 h-4 text-[#777771] group-hover:text-white transition-colors" /> : null}
        </div>
        <p className="text-sm text-[#888881] mt-2">{category} · {region}</p>
      </div>
      <p className="text-[#aaa9a2] leading-relaxed max-w-2xl">{description}</p>
    </div>
  );

  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a> : content;
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-3 md:gap-12 py-7 md:py-9 border-b border-[#d2d2cc]">
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{title}</h3>
      <p className="text-[#6e6e68] leading-relaxed max-w-3xl">{text}</p>
    </div>
  );
}

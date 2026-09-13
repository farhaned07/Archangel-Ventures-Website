import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function WorkPage() {
  return (
    <main className="min-h-screen w-full pt-24">
      <section className="w-full border-b border-[#222]">
        <div className="container-grid py-20 md:py-28">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#777] hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Archangel
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="text-mono-label block mb-6">Work / Company history</span>
            <h1 className="text-hero text-white max-w-5xl">
              We build applied AI systems from inside the markets they serve.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[#888] text-lg md:text-xl leading-relaxed max-w-3xl mt-8">
              Archangel began as a founder-led company builder focused on emerging-market problems where local workflows, language, regulation and trust matter. That work now informs our applied AI transformation practice for operating businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">01 / Companies</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white mb-14">Selected company building.</h2>
            </Reveal>
            <div className="border-t border-[#222]">
              <WorkRow
                name="Hanna"
                category="Healthcare AI"
                region="Thailand"
                description="AI systems for clinical documentation, care planning and care intelligence in Thailand."
                href="https://www.hanna.care"
              />
              <WorkRow
                name="Onnesha AI"
                category="AI Work Infrastructure"
                region="Bangladesh / Southeast Asia"
                description="Experiments and products around AI-native work, automation and local-market AI infrastructure."
                href="https://www.onnesha.fun"
              />
              <WorkRow
                name="Archangel Applied AI"
                category="Enterprise AI"
                region="Thailand"
                description="Workflow transformation for finance, operations and back-office teams. We identify expensive manual work, build the automation and measure the result."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[#222] bg-[#090909]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">02 / Thesis</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="text-display text-white max-w-4xl mb-12">
                Emerging markets are not smaller versions of advanced markets.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="text-[#888] text-lg leading-relaxed max-w-3xl space-y-6">
                <p>
                  They have different healthcare systems, languages, workflows, institutions, constraints and trust gaps. Useful AI has to understand those realities rather than merely localize a product built elsewhere.
                </p>
                <p>
                  Archangel builds from inside these systems. Thailand and Bangladesh have been our starting markets, with Southeast Asia as the broader operating context.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[#222]">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 section-pad">
          <div className="md:col-span-3 mb-10 md:mb-0">
            <Reveal><span className="text-mono-label">03 / How we work</span></Reveal>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              <Principle title="Founder-led" text="Direct involvement in product, implementation and customer work keeps the company close to operating reality." />
              <Principle title="Implementation-first" text="We prefer working systems over innovation theatre. The work should change how a team operates." />
              <Principle title="Context-native" text="Language, regulation, culture, distribution and institutional constraints shape the system from day one." />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#050505] py-24">
        <div className="container-grid grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="text-mono-label">04 / Current focus</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-display text-white max-w-4xl mb-8">
              Today, the fastest way to work with Archangel is one business workflow at a time.
            </h2>
            <Link href="/#sprint" className="inline-flex items-center gap-2 text-white border-b border-[#555] pb-1 hover:border-white transition-colors">
              See the AI Workflow Sprint <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkRow({ name, category, region, description, href }: { name: string; category: string; region: string; description: string; href?: string }) {
  const content = (
    <div className="grid grid-cols-12 py-8 border-b border-[#222] items-start gap-y-4 group">
      <div className="col-span-12 md:col-span-5 md:pr-10">
        <h3 className="text-xl text-white font-medium mb-2 group-hover:text-[#AAA] transition-colors">{name}</h3>
        <p className="text-[#777] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="col-span-6 md:col-span-3 text-[#D0D0D0] text-sm">{category}</div>
      <div className="col-span-5 md:col-span-3 text-[#777] text-sm">{region}</div>
      <div className="col-span-1 text-right">
        {href ? <ArrowUpRight className="w-4 h-4 ml-auto text-[#555] group-hover:text-white" /> : null}
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a>
  ) : content;
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <Reveal>
      <h3 className="text-xl text-white mb-4">{title}</h3>
      <p className="text-[#777] leading-relaxed">{text}</p>
    </Reveal>
  );
}

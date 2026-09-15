import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "15 minute call",
    text: "Show us where work is slow, manual or expensive.",
  },
  {
    number: "02",
    title: "AI workshop",
    text: "Map the work. Rank 3–5 opportunities. Decide what is worth funding.",
    highlight: true,
  },
  {
    number: "03",
    title: "Build if proven",
    text: "If the business case is strong, Archangel implements the first system.",
  },
] as const;

export function ClosingSequence({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-[#11110f] text-[#f7f7f2] overflow-hidden">
      <div className={`page-shell ${compact ? "py-16 md:py-22" : "py-20 md:py-28 lg:py-32"}`}>
        <div className="max-w-5xl">
          <p className="eyebrow text-[#81817b]">Start small</p>
          <h2 className={`${compact ? "text-[2.8rem] sm:text-[4rem] lg:text-[5rem]" : "text-[3rem] sm:text-[4.6rem] lg:text-[6.3rem]"} mt-5 leading-[0.93] tracking-[-0.065em] font-medium`}>
            One problem. One decision.
            <span className="block text-[#73736d]">Then build what proves value.</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[1.8rem] md:rounded-[2.2rem] min-h-[230px] md:min-h-[270px] p-6 md:p-8 flex flex-col justify-between border ${
                step.highlight
                  ? "bg-[#f4f3ef] text-[#11110f] border-[#f4f3ef]"
                  : "bg-[#171715] text-[#f4f3ef] border-[#30302d]"
              }`}
            >
              <span className={`text-xs ${step.highlight ? "text-[#777771]" : "text-[#696963]"}`}>{step.number}</span>
              <div>
                <h3 className="text-2xl md:text-3xl tracking-[-0.045em] font-medium">{step.title}</h3>
                <p className={`mt-4 text-sm md:text-base leading-relaxed ${step.highlight ? "text-[#696963]" : "text-[#92928c]"}`}>{step.text}</p>
                {step.highlight ? <p className="mt-6 text-sm font-medium">{site.workshopPrice} · Bangkok · on site</p> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-[#30302d] pt-9 md:pt-11">
          <div>
            <p className="text-xl md:text-2xl tracking-[-0.035em] font-medium">No transformation programme to begin.</p>
            <p className="mt-2 text-[#85857f]">Start with one expensive piece of work.</p>
          </div>
          <Link href="/book" className="button-light w-full sm:w-auto">
            Book a 15 minute call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-7 text-xs text-[#686862]">Archangel Company Limited · Bangkok · Thailand BOI promoted software company</p>
      </div>
    </section>
  );
}

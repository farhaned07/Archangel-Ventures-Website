"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CircleDollarSign, FileSearch, Gauge, Layers3 } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  {
    key: "map",
    title: "Workflow map",
    eyebrow: "01",
    note: "See where time, cost and handoffs accumulate.",
    Icon: FileSearch,
    pos: "lg:left-[8%] lg:top-[18%]",
    rotate: -5,
  },
  {
    key: "priorities",
    title: "3–5 priorities",
    eyebrow: "02",
    note: "Rank what deserves management attention.",
    Icon: Layers3,
    pos: "lg:right-[7%] lg:top-[12%]",
    rotate: 4,
  },
  {
    key: "roi",
    title: "ROI lens",
    eyebrow: "03",
    note: "Test the economics before implementation.",
    Icon: CircleDollarSign,
    pos: "lg:left-[12%] lg:bottom-[10%]",
    rotate: 4,
  },
  {
    key: "move",
    title: "First move",
    eyebrow: "04",
    note: "Leave with a controlled 30 day action.",
    Icon: Gauge,
    pos: "lg:right-[11%] lg:bottom-[13%]",
    rotate: -4,
  },
] as const;

export function WorkshopReveal({ price }: { price: string }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % cards.length), 3500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="workshop" className="bg-[#ecece6] overflow-hidden">
      <div className="page-shell py-20 md:py-28 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-10 md:mb-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#777771]">AI Transformation Workshop</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[4rem] lg:text-[5.2rem] leading-[0.94] tracking-[-0.06em] font-medium">
              From messy work to one funded move.
            </h2>
          </div>
          <div className="flex items-center gap-3 md:pb-2">
            <span className="pill bg-white">{price}</span>
            <span className="pill bg-white">Bangkok · on site</span>
          </div>
        </div>

        <div className="relative min-h-[720px] lg:min-h-[760px] rounded-[2rem] md:rounded-[2.8rem] border border-[#d6d6d0] bg-[#f8f8f4] overflow-hidden shadow-[0_30px_100px_rgba(20,20,18,0.08)]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-x-[8%] top-[22%] h-px bg-[#e3e3dd]" />
            <div className="absolute inset-x-[8%] top-1/2 h-px bg-[#e3e3dd]" />
            <div className="absolute inset-x-[8%] bottom-[22%] h-px bg-[#e3e3dd]" />
            <div className="absolute inset-y-[8%] left-[24%] w-px bg-[#e3e3dd]" />
            <div className="absolute inset-y-[8%] left-1/2 w-px bg-[#e3e3dd]" />
            <div className="absolute inset-y-[8%] right-[24%] w-px bg-[#e3e3dd]" />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-[#e2e2dc] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[330px] h-[330px] rounded-full border border-[#e8e8e2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="absolute inset-x-5 top-5 md:inset-x-8 md:top-8 flex items-center justify-between z-20">
            <span className="text-xs text-[#777771]">Workshop decision system</span>
            <span className="text-xs text-[#aaa9a3]">Select an output</span>
          </div>

          <div className="relative min-h-[720px] lg:min-h-[760px] px-5 pt-20 pb-6 md:p-10 lg:p-12">
            <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 z-10 w-[230px] h-[230px] md:w-[280px] md:h-[280px] rounded-full bg-[#11110f] text-white shadow-[0_28px_80px_rgba(17,17,15,0.22)] flex flex-col items-center justify-center text-center p-8">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#81817b]">Your business</span>
              <span className="mt-4 text-3xl md:text-4xl leading-[0.98] tracking-[-0.05em] font-medium">Work worth changing</span>
              <span className="mt-5 text-xs text-[#8f8f89]">value × readiness</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-[300px] lg:mt-0 lg:block">
              {cards.map((card, index) => {
                const selected = active === index;
                const Icon = card.Icon;
                return (
                  <motion.button
                    key={card.key}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`relative lg:absolute ${card.pos} z-10 text-left rounded-[1.5rem] md:rounded-[1.8rem] border p-4 md:p-6 w-full lg:w-[260px] xl:w-[285px] min-h-[170px] md:min-h-[190px] transition-colors ${
                      selected
                        ? "bg-white border-[#bcbcb5] shadow-[0_22px_60px_rgba(20,20,18,0.12)]"
                        : "bg-[#f2f2ed]/90 border-[#dcdcd6] hover:border-[#c7c7c0]"
                    }`}
                    initial={false}
                    animate={{
                      rotate: selected ? 0 : card.rotate,
                      scale: selected ? 1.04 : 1,
                      y: selected ? -4 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[10px] text-[#a0a09a]">{card.eyebrow}</span>
                      <Icon className={`w-4 h-4 ${selected ? "text-[#11110f]" : "text-[#8f8f89]"}`} />
                    </div>
                    <h3 className="mt-8 text-xl md:text-2xl tracking-[-0.035em] font-medium">{card.title}</h3>
                    <AnimatePresence mode="wait">
                      {selected ? (
                        <motion.p
                          key={card.key}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-3 text-xs md:text-sm leading-relaxed text-[#777771]"
                        >
                          {card.note}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            <div className="absolute left-1/2 bottom-7 md:bottom-10 -translate-x-1/2 z-20">
              <Link href="/ai-transformation" className="button-primary whitespace-nowrap">
                Explore the workshop <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

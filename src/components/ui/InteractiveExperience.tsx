"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, CircleDollarSign, FileSearch, Gauge, Layers3 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const transformationStages = [
  { number: "01", title: "Find", label: "Locate the expensive work", note: "Time, cost, handoffs, delay." },
  { number: "02", title: "Simplify", label: "Remove what should not exist", note: "Fix the process before the model." },
  { number: "03", title: "Build", label: "Put AI inside the workflow", note: "Useful system. Real operating context." },
  { number: "04", title: "Measure", label: "Prove the economics", note: "Baseline → result → scale." },
] as const;

export function TransformationSequence() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % transformationStages.length), 3200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const current = transformationStages[active];

  return (
    <section className="page-shell section-space" aria-label="Archangel transformation method">
      <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_1.38fr] gap-8 lg:gap-16 items-center">
        <div className="max-w-xl">
          <p className="eyebrow text-[#85857f]">How it moves</p>
          <h2 className="mt-5 text-[2.7rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[0.96] tracking-[-0.055em] font-medium">From friction to proof.</h2>
          <p className="mt-5 text-base md:text-lg text-[#74746e]">Four moves. No transformation theatre.</p>
        </div>

        <div className="relative rounded-[2rem] md:rounded-[2.6rem] border border-[#d9d9d3] bg-[#fbfbf8] min-h-[440px] md:min-h-[560px] overflow-hidden shadow-[0_28px_80px_rgba(20,20,18,0.07)]">
          <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-[#d8d8d2]" />
            <motion.div
              className="absolute top-[calc(50%-5px)] h-[10px] rounded-full bg-[#11110f]"
              initial={false}
              animate={{ left: `${12 + active * 23}%`, width: active === 3 ? "10%" : "14%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            />
            <div className="absolute inset-y-[12%] left-1/2 w-px bg-[#ecece6]" />
            <div className="absolute inset-x-[8%] top-[23%] h-px bg-[#eeeeea]" />
            <div className="absolute inset-x-[8%] bottom-[23%] h-px bg-[#eeeeea]" />
          </div>

          <div className="relative h-full min-h-[440px] md:min-h-[560px] flex flex-col justify-between p-5 md:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-[#777771]">Archangel transformation loop</span>
              <span className="pill bg-white">Interactive</span>
            </div>

            <div className="py-12 md:py-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-sm text-[#85857f]">{current.number} / 04</p>
                  <h3 className="mt-4 text-[3.5rem] sm:text-[4.8rem] md:text-[6rem] leading-[0.9] tracking-[-0.07em] font-medium">{current.title}</h3>
                  <p className="mt-6 text-xl md:text-2xl tracking-[-0.03em] text-[#333330]">{current.label}</p>
                  <p className="mt-2 text-sm md:text-base text-[#85857f]">{current.note}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {transformationStages.map((stage, index) => (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`text-left rounded-2xl px-3 py-3 md:p-4 border transition-all ${active === index ? "bg-[#11110f] text-white border-[#11110f]" : "bg-white/75 text-[#6f6f69] border-[#dfdfd9] hover:border-[#bdbdb6]"}`}
                  aria-pressed={active === index}
                >
                  <span className={`block text-[10px] mb-2 ${active === index ? "text-[#8f8f89]" : "text-[#aaa9a3]"}`}>{stage.number}</span>
                  <span className="block text-xs md:text-sm font-medium">{stage.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const workflows = {
  Finance: {
    intro: "Invoice approval",
    before: ["Inbox", "PDF", "Excel", "Email chase", "ERP"],
    after: ["Capture", "Extract", "Validate", "Route", "Exception"],
    outcome: "One controlled flow",
  },
  Customer: {
    intro: "Service requests",
    before: ["Inbox", "Chat", "Search", "Copy", "Escalate"],
    after: ["Understand", "Retrieve", "Draft", "Respond", "Escalate"],
    outcome: "Faster response, human control",
  },
  Reporting: {
    intro: "Management reporting",
    before: ["Files", "Sheets", "Copy", "Reconcile", "Slides"],
    after: ["Collect", "Normalize", "Analyse", "Flag", "Brief"],
    outcome: "Decision ready reporting",
  },
  Sales: {
    intro: "Sales operations",
    before: ["Research", "Tabs", "Draft", "CRM", "Follow up"],
    after: ["Research", "Prepare", "Record", "Prompt", "Review"],
    outcome: "More selling, less admin",
  },
} as const;

type WorkflowKey = keyof typeof workflows;

export function WorkflowSimulator() {
  const [active, setActive] = useState<WorkflowKey>("Finance");
  const data = workflows[active];

  return (
    <section id="examples" className="bg-[#11110f] text-[#f7f7f2] overflow-hidden">
      <div className="page-shell py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-[#81817b]">Try a workflow</p>
            <h2 className="mt-5 text-[2.7rem] sm:text-[3.8rem] lg:text-[5rem] leading-[0.95] tracking-[-0.06em] font-medium max-w-4xl">See the work change.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(workflows) as WorkflowKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`rounded-full px-4 py-2 text-sm border transition-colors ${active === key ? "bg-[#f5f5f0] text-[#11110f] border-[#f5f5f0]" : "border-[#343431] text-[#a4a49d] hover:text-white hover:border-[#5a5a55]"}`}
                aria-pressed={active === key}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] md:rounded-[2.7rem] border border-[#2d2d2a] bg-[#151513] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_1.58fr]">
            <div className="p-6 md:p-9 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#2d2d2a]">
              <p className="text-xs text-[#73736d]">Selected workflow</p>
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  <h3 className="mt-5 text-3xl md:text-4xl tracking-[-0.045em] font-medium">{data.intro}</h3>
                  <p className="mt-5 text-[#85857f]">{data.outcome}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-5 md:p-8 lg:p-10">
              <div className="grid grid-cols-[76px_1fr] md:grid-cols-[110px_1fr] gap-4 items-center">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#686862]">Before</span>
                <AnimatePresence mode="wait">
                  <motion.div key={`${active}-before`} className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {data.before.map((step, index) => (
                      <motion.span
                        key={step}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="rounded-full border border-[#343431] bg-[#1b1b19] px-3 py-2 text-xs md:text-sm text-[#8e8e87]"
                      >
                        {step}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="my-8 md:my-10 h-px bg-[#2d2d2a] relative">
                <motion.div key={active} className="absolute left-0 top-[-1px] h-[3px] bg-[#f5f5f0] rounded-full" initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ duration: 0.8, ease: "easeOut" }} />
              </div>

              <div className="grid grid-cols-[76px_1fr] md:grid-cols-[110px_1fr] gap-4 items-center">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#9b9b95]">With AI</span>
                <AnimatePresence mode="wait">
                  <motion.div key={`${active}-after`} className="flex flex-wrap items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {data.after.map((step, index) => (
                      <div className="contents" key={step}>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.07 }}
                          className={`rounded-full px-3 py-2 text-xs md:text-sm ${index === data.after.length - 1 ? "bg-[#f5f5f0] text-[#11110f]" : "border border-[#4a4a45] text-[#d0d0ca]"}`}
                        >
                          {step}
                        </motion.span>
                        {index < data.after.length - 1 ? <ArrowRight className="w-3.5 h-3.5 text-[#565651]" /> : null}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const outputs = [
  { key: "map", label: "Workflow map", icon: FileSearch, stat: "Where friction lives", caption: "See the work before deciding what to automate." },
  { key: "priorities", label: "3–5 priorities", icon: Layers3, stat: "What deserves attention", caption: "Rank opportunities by value and readiness." },
  { key: "roi", label: "ROI lens", icon: CircleDollarSign, stat: "What the economics say", caption: "Estimate impact before funding implementation." },
  { key: "plan", label: "30 day plan", icon: Gauge, stat: "What happens next", caption: "Turn the strongest case into a controlled first move." },
] as const;

export function WorkshopOutputExplorer() {
  const [active, setActive] = useState(0);
  const output = outputs[active];
  const Icon = output.icon;
  const positions = useMemo(() => ["18%", "39%", "61%", "82%"], []);

  return (
    <section className="bg-[#11110f] text-[#f7f7f2] overflow-hidden">
      <div className="page-shell py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mb-10 md:mb-14">
          <p className="eyebrow text-[#81817b]">What you leave with</p>
          <h2 className="mt-5 text-[2.8rem] sm:text-[4rem] lg:text-[5.2rem] leading-[0.94] tracking-[-0.06em] font-medium">A decision, not a deck.</h2>
        </div>

        <div className="rounded-[2rem] md:rounded-[2.8rem] border border-[#30302d] bg-[#161614] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] min-h-[560px] lg:min-h-[620px]">
            <div className="p-5 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#30302d] flex flex-col">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {outputs.map((item, index) => {
                  const ItemIcon = item.icon;
                  const selected = active === index;
                  return (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setActive(index)}
                      className={`group rounded-2xl p-4 md:p-5 text-left border transition-all ${selected ? "bg-[#f4f4ef] text-[#11110f] border-[#f4f4ef]" : "border-[#32322f] text-[#a3a39c] hover:border-[#50504b]"}`}
                      aria-pressed={selected}
                    >
                      <ItemIcon className={`w-4 h-4 mb-5 ${selected ? "text-[#11110f]" : "text-[#676761]"}`} />
                      <span className="block text-sm md:text-base font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-auto pt-8 text-xs text-[#686862] hidden lg:block">Select an output to inspect the workshop logic.</p>
            </div>

            <div className="relative min-h-[500px] p-6 md:p-10 lg:p-12 overflow-hidden">
              <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute left-[8%] right-[8%] top-[22%] h-px bg-[#282825]" />
                <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-[#282825]" />
                <div className="absolute left-[8%] right-[8%] bottom-[22%] h-px bg-[#282825]" />
                <div className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-[#282825]" />
              </div>

              <motion.div
                className="absolute top-[10%] bottom-[10%] w-px bg-[#f4f4ef]/60"
                initial={false}
                animate={{ left: positions[active] }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                aria-hidden="true"
              />

              <div className="relative h-full min-h-[440px] flex flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[#71716b]">Workshop decision pack</span>
                  <span className="text-xs text-[#71716b]">0{active + 1} / 04</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={output.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-[#393936] bg-[#1d1d1a] flex items-center justify-center mb-7">
                      <Icon className="w-6 h-6 text-[#d7d7d0]" />
                    </div>
                    <p className="text-[#8e8e87] text-sm mb-3">{output.label}</p>
                    <h3 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.06em] font-medium">{output.stat}</h3>
                    <p className="mt-6 text-base md:text-lg text-[#94948e] max-w-xl">{output.caption}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-4 gap-2">
                  {outputs.map((item, index) => (
                    <div key={item.key} className={`h-1 rounded-full ${index <= active ? "bg-[#f4f4ef]" : "bg-[#32322f]"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompactAudience() {
  const people = ["Management", "Process owner", "Technology"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {people.map((person, index) => (
        <div key={person} className="rounded-[1.5rem] border border-[#d8d8d2] bg-white/65 p-5 md:p-6 min-h-[150px] flex flex-col justify-between">
          <span className="w-8 h-8 rounded-full bg-[#11110f] text-white text-xs flex items-center justify-center">0{index + 1}</span>
          <div>
            <p className="font-medium text-lg">{person}</p>
            <p className="text-xs text-[#85857f] mt-1">In the room</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompactCommercialPath({ price }: { price: string }) {
  const items = ["15 min call", `${price} workshop`, "Implement if proven"];
  return (
    <div className="flex flex-col md:flex-row gap-2 md:items-center">
      {items.map((item, index) => (
        <div className="contents" key={item}>
          <div className="flex-1 rounded-2xl border border-[#d9d9d3] bg-white px-5 py-5 flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#11110f] text-white text-[10px] flex items-center justify-center shrink-0">0{index + 1}</span>
            <span className="text-sm md:text-base font-medium">{item}</span>
            {index === items.length - 1 ? <Check className="ml-auto w-4 h-4 text-[#777771]" /> : null}
          </div>
          {index < items.length - 1 ? <ArrowRight className="hidden md:block w-4 h-4 text-[#aaa9a3] shrink-0" /> : null}
        </div>
      ))}
    </div>
  );
}

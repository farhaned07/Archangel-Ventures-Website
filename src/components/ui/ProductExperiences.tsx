"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, AudioWaveform, Check, FileText, Languages, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const methodStages = [
  {
    key: "find",
    number: "01",
    title: "Find",
    eyebrow: "Map the work",
    note: "Expose delay, duplicate handling and manual handoffs.",
    nodes: [
      { id: "inbox", label: "Inbox", x: 70, y: 165, tone: "light" },
      { id: "pdf", label: "PDF", x: 240, y: 90, tone: "light" },
      { id: "excel", label: "Excel", x: 240, y: 240, tone: "light" },
      { id: "approval", label: "Email approval", x: 430, y: 165, tone: "dark" },
      { id: "erp", label: "ERP", x: 620, y: 165, tone: "light" },
    ],
    edges: [["inbox", "pdf"], ["inbox", "excel"], ["pdf", "approval"], ["excel", "approval"], ["approval", "erp"]],
    callouts: [
      { x: 340, y: 55, label: "duplicate entry" },
      { x: 465, y: 265, label: "approval delay" },
    ],
  },
  {
    key: "simplify",
    number: "02",
    title: "Simplify",
    eyebrow: "Remove waste",
    note: "Collapse the steps that should not exist before adding AI.",
    nodes: [
      { id: "inbox", label: "Inbox", x: 95, y: 165, tone: "light" },
      { id: "capture", label: "Capture", x: 285, y: 165, tone: "dark" },
      { id: "approval", label: "Approval", x: 475, y: 165, tone: "light" },
      { id: "erp", label: "ERP", x: 665, y: 165, tone: "light" },
    ],
    edges: [["inbox", "capture"], ["capture", "approval"], ["approval", "erp"]],
    callouts: [
      { x: 280, y: 65, label: "2 steps removed" },
    ],
  },
  {
    key: "build",
    number: "03",
    title: "Build",
    eyebrow: "Insert intelligence",
    note: "Put AI inside the operating flow with human control where it matters.",
    nodes: [
      { id: "inbox", label: "Inbox", x: 65, y: 165, tone: "light" },
      { id: "capture", label: "Capture", x: 215, y: 165, tone: "light" },
      { id: "ai", label: "AI validate", x: 385, y: 165, tone: "dark" },
      { id: "exception", label: "Exception", x: 550, y: 90, tone: "light" },
      { id: "erp", label: "ERP", x: 690, y: 165, tone: "light" },
    ],
    edges: [["inbox", "capture"], ["capture", "ai"], ["ai", "erp"], ["ai", "exception"], ["exception", "erp"]],
    callouts: [
      { x: 385, y: 275, label: "human review only when needed" },
    ],
  },
  {
    key: "measure",
    number: "04",
    title: "Measure",
    eyebrow: "Prove the economics",
    note: "Compare the new operating pattern against the baseline before scaling.",
    nodes: [
      { id: "baseline", label: "Baseline", x: 120, y: 165, tone: "light" },
      { id: "system", label: "Live workflow", x: 365, y: 165, tone: "dark" },
      { id: "decision", label: "Scale / stop", x: 625, y: 165, tone: "light" },
    ],
    edges: [["baseline", "system"], ["system", "decision"]],
    callouts: [
      { x: 245, y: 72, label: "cycle time ↓" },
      { x: 500, y: 260, label: "manual touch ↓" },
      { x: 610, y: 72, label: "exceptions visible" },
    ],
  },
] as const;

type MethodStage = (typeof methodStages)[number];

type Node = MethodStage["nodes"][number];

function getNode(stage: MethodStage, id: string): Node | undefined {
  return stage.nodes.find((node) => node.id === id);
}

export function TransformationWorkbench() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = methodStages[active];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % methodStages.length), 5200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="how" className="page-shell section-space" aria-label="Archangel transformation method">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9 md:mb-12">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#85857f]">How it works</p>
          <h2 className="mt-5 text-[2.8rem] sm:text-[4rem] lg:text-[5rem] leading-[0.94] tracking-[-0.06em] font-medium">Watch the workflow change.</h2>
        </div>
        <p className="text-sm md:text-base text-[#777771] max-w-sm lg:text-right">The process changes first. The technology follows.</p>
      </div>

      <div className="rounded-[2rem] md:rounded-[2.75rem] border border-[#d9d9d3] bg-[#fbfbf8] overflow-hidden shadow-[0_30px_90px_rgba(20,20,18,0.07)]">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
          <div className="border-b lg:border-b-0 lg:border-r border-[#deded8] p-4 md:p-5 lg:p-6">
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
              {methodStages.map((item, index) => {
                const selected = active === index;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`min-h-[82px] lg:min-h-[96px] rounded-2xl border p-3 md:p-4 text-left transition-colors ${selected ? "bg-[#11110f] border-[#11110f] text-white" : "bg-white/70 border-[#dfdfd9] text-[#696963] hover:border-[#bdbdb6]"}`}
                  >
                    <span className={`block text-[10px] mb-3 ${selected ? "text-[#85857f]" : "text-[#aaa9a3]"}`}>{item.number}</span>
                    <span className="block text-xs md:text-sm font-medium">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[500px] md:min-h-[610px] p-5 md:p-8 lg:p-10 overflow-hidden">
            <div className="flex items-start justify-between gap-5 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div key={stage.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8d8d87]">{stage.eyebrow}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl tracking-[-0.04em] font-medium">{stage.note}</h3>
                </motion.div>
              </AnimatePresence>
              <span className="pill bg-white hidden sm:inline-flex">Interactive</span>
            </div>

            <div className="mt-8 md:mt-10 relative rounded-[1.6rem] border border-[#e1e1db] bg-white min-h-[350px] md:min-h-[430px] overflow-hidden">
              <svg viewBox="0 0 800 330" className="absolute inset-0 w-full h-full" aria-label={`${stage.title} workflow diagram`} role="img">
                <defs>
                  <marker id="arrow-neutral" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#b8b8b1" />
                  </marker>
                </defs>

                {stage.edges.map(([from, to]) => {
                  const fromNode = getNode(stage, from);
                  const toNode = getNode(stage, to);
                  if (!fromNode || !toNode) return null;
                  const dx = toNode.x - fromNode.x;
                  const dy = toNode.y - fromNode.y;
                  const length = Math.sqrt(dx * dx + dy * dy) || 1;
                  const ux = dx / length;
                  const uy = dy / length;
                  const startX = fromNode.x + ux * 66;
                  const startY = fromNode.y + uy * 27;
                  const endX = toNode.x - ux * 72;
                  const endY = toNode.y - uy * 27;
                  return (
                    <motion.line
                      key={`${from}-${to}-${stage.key}`}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#c9c9c2"
                      strokeWidth="2"
                      markerEnd="url(#arrow-neutral)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.55 }}
                    />
                  );
                })}

                <AnimatePresence mode="popLayout">
                  {stage.nodes.map((node) => (
                    <motion.g
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1, x: node.x - 65, y: node.y - 26 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 170, damping: 22 }}
                    >
                      <rect width="130" height="52" rx="18" fill={node.tone === "dark" ? "#11110f" : "#f7f7f3"} stroke={node.tone === "dark" ? "#11110f" : "#d6d6d0"} />
                      <text x="65" y="31" textAnchor="middle" fontSize="14" fontWeight="600" fill={node.tone === "dark" ? "#f7f7f2" : "#333330"}>{node.label}</text>
                    </motion.g>
                  ))}
                </AnimatePresence>

                <AnimatePresence mode="popLayout">
                  {stage.callouts.map((callout) => (
                    <motion.g key={`${stage.key}-${callout.label}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: reduceMotion ? 0 : 0.18 }}>
                      <rect x={callout.x - 68} y={callout.y - 15} width="136" height="30" rx="15" fill="#f0f0eb" stroke="#d8d8d1" />
                      <text x={callout.x} y={callout.y + 4} textAnchor="middle" fontSize="11" fill="#777771">{callout.label}</text>
                    </motion.g>
                  ))}
                </AnimatePresence>
              </svg>

              <div className="absolute left-4 bottom-4 right-4 flex justify-between gap-3 text-[10px] md:text-xs text-[#9b9b95]">
                <span>Operating workflow</span>
                <span>{stage.number} / 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const hannaStages = [
  { key: "listen", label: "Listen", icon: AudioWaveform },
  { key: "structure", label: "Structure", icon: FileText },
  { key: "care", label: "Care plan", icon: Languages },
] as const;

type HannaStage = (typeof hannaStages)[number]["key"];

export function HannaProductDemo() {
  const [active, setActive] = useState<HannaStage>("listen");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const order: HannaStage[] = ["listen", "structure", "care"];
    const timer = window.setInterval(() => {
      setActive((value) => order[(order.indexOf(value) + 1) % order.length]);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="page-shell section-space">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9 md:mb-12">
        <div>
          <p className="eyebrow text-[#85857f]">Built, not presented</p>
          <h2 className="mt-5 text-[2.8rem] sm:text-[4rem] lg:text-[5rem] leading-[0.94] tracking-[-0.06em] font-medium">Hanna.</h2>
        </div>
        <div className="max-w-md lg:text-right">
          <p className="text-sm md:text-base text-[#777771]">One consultation becomes structured documentation and a patient ready care plan.</p>
          <a href="https://www.hanna.care" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-medium border-b border-[#bdbdb7] pb-1 hover:border-[#11110f] transition-colors">
            View Hanna <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border border-[#252522] bg-[#11110f] text-[#f5f5f0] shadow-[0_32px_100px_rgba(20,20,18,0.14)]">
        <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] min-h-[620px]">
          <div className="p-4 md:p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-[#2d2d2a] bg-[#141412]">
            <div className="flex lg:block items-center justify-between gap-3 mb-4 lg:mb-8">
              <div>
                <p className="text-xs text-[#767670]">Hanna</p>
                <p className="text-sm text-[#b4b4ad] mt-1">Live consult</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2f413a] bg-[#16251f] px-3 py-1.5 text-[10px] text-[#8fd5b8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A8C66]" /> Active
              </span>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
              {hannaStages.map((item, index) => {
                const selected = active === item.key;
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(item.key)}
                    aria-pressed={selected}
                    className={`rounded-2xl border p-3 md:p-4 text-left min-h-[86px] lg:min-h-[104px] transition-colors ${selected ? "bg-[#f4f3ef] border-[#f4f3ef] text-[#11110f]" : "border-[#30302d] bg-[#191917] text-[#9b9b95] hover:border-[#4b4b46]"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-[10px] ${selected ? "text-[#777771]" : "text-[#65655f]"}`}>0{index + 1}</span>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="block mt-5 text-xs md:text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative bg-[#f4f3ef] text-[#11110f] p-4 md:p-7 lg:p-9 min-w-0">
            <div className="flex items-center justify-between gap-4 pb-4 md:pb-6 border-b border-[#d9d9d3]">
              <div>
                <p className="text-xs text-[#7d7d77]">Consultation</p>
                <p className="text-sm md:text-base font-medium mt-1">Dr. Ananda · Room 04</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#777771]">
                <span>07:42</span>
                <span className="hidden sm:inline">· English / ไทย</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {active === "listen" ? <ListenSurface reduceMotion={Boolean(reduceMotion)} /> : null}
              {active === "structure" ? <StructureSurface /> : null}
              {active === "care" ? <CarePlanSurface /> : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SurfaceFrame({ children, stage }: { children: React.ReactNode; stage: string }) {
  return (
    <motion.div key={stage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="pt-5 md:pt-7 min-h-[500px]">
      {children}
    </motion.div>
  );
}

function ListenSurface({ reduceMotion }: { reduceMotion: boolean }) {
  const bars = useMemo(() => [22, 38, 52, 31, 64, 46, 72, 42, 58, 28, 67, 48, 76, 36, 54, 26, 62, 45, 69, 34, 57, 29, 63, 41], []);
  return (
    <SurfaceFrame stage="listen">
      <div className="rounded-[1.8rem] border border-[#d8d8d2] bg-white p-5 md:p-8 min-h-[420px] flex flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#888882]">Listening</p>
            <h3 className="mt-2 text-2xl md:text-3xl tracking-[-0.04em] font-medium">Consult naturally.</h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6f2] px-3 py-2 text-xs text-[#1A8C66]">
            <span className="w-2 h-2 rounded-full bg-[#1A8C66]" /> Recording
          </span>
        </div>

        <div className="py-8 md:py-12">
          <div className="h-32 md:h-40 flex items-center justify-center gap-[4px] md:gap-[6px] overflow-hidden" aria-label="Live consultation waveform">
            {bars.map((height, index) => (
              <motion.span
                key={index}
                className="w-[3px] md:w-[4px] rounded-full bg-[#1A8C66]"
                style={{ height }}
                animate={reduceMotion ? undefined : { height: [height, Math.max(18, height * 0.48), height * 1.08, height] }}
                transition={{ duration: 1.25 + (index % 4) * 0.18, repeat: Infinity, ease: "easeInOut", delay: index * 0.025 }}
              />
            ))}
          </div>
          <div className="mt-4 text-center text-xs text-[#92928c]">No templates. No typing during the consult.</div>
        </div>

        <div className="space-y-3">
          <TranscriptLine speaker="Doctor" text="When did the pain start?" />
          <TranscriptLine speaker="Patient" text="About three days ago, mostly after meals." muted />
        </div>
      </div>
    </SurfaceFrame>
  );
}

function TranscriptLine({ speaker, text, muted = false }: { speaker: string; text: string; muted?: boolean }) {
  return (
    <div className={`rounded-2xl px-4 py-3 border ${muted ? "border-[#e2e2dc] bg-[#f7f7f3]" : "border-[#d8d8d2] bg-white"}`}>
      <span className="text-[10px] uppercase tracking-[0.12em] text-[#9a9a94]">{speaker}</span>
      <p className="mt-1 text-sm text-[#444440]">{text}</p>
    </div>
  );
}

function StructureSurface() {
  return (
    <SurfaceFrame stage="structure">
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-3 md:gap-4 min-h-[420px]">
        <div className="rounded-[1.8rem] border border-[#d8d8d2] bg-white p-5 md:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#888882]">Structured note</p>
              <h3 className="mt-2 text-2xl tracking-[-0.04em] font-medium">SOAP ready for review.</h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#1A8C66]" />
          </div>
          <div className="mt-7 space-y-5">
            <NoteBlock label="S · Subjective" text="Three day history of post meal epigastric pain. No vomiting. No fever reported." />
            <NoteBlock label="O · Objective" text="Patient alert, speaking comfortably. Vitals to be confirmed before sign off." />
            <NoteBlock label="A · Assessment" text="Dyspepsia. Differential requires clinician review." />
            <NoteBlock label="P · Plan" text="Medication and follow up plan pending doctor confirmation." />
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-[#d8d8d2] bg-[#eef3ef] p-5 md:p-6 flex flex-col">
          <p className="text-xs text-[#6f7d75]">Medication gate</p>
          <h4 className="mt-3 text-xl tracking-[-0.03em] font-medium">Doctor confirms before anything reaches the patient.</h4>
          <div className="mt-auto pt-8 space-y-3">
            <div className="rounded-2xl bg-white border border-[#d6ded8] p-4">
              <p className="text-xs text-[#78837c]">Proposed</p>
              <p className="mt-1 font-medium">Omeprazole 20 mg</p>
              <p className="text-sm text-[#6f6f69] mt-1">Once daily · 14 days</p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="flex-1 rounded-full bg-[#1A8C66] text-white py-3 text-sm font-medium">Confirm</button>
              <button type="button" className="rounded-full border border-[#cfd8d2] bg-white px-4 py-3 text-sm">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </SurfaceFrame>
  );
}

function NoteBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-[#e5e5df] pt-4 first:border-t-0 first:pt-0">
      <p className="text-xs font-medium text-[#686862]">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-[#555550]">{text}</p>
    </div>
  );
}

function CarePlanSurface() {
  return (
    <SurfaceFrame stage="care">
      <div className="rounded-[1.8rem] border border-[#d8d8d2] bg-white overflow-hidden min-h-[420px]">
        <div className="p-5 md:p-7 border-b border-[#e2e2dc] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-[#888882]">Patient care plan</p>
            <h3 className="mt-2 text-2xl tracking-[-0.04em] font-medium">Clear enough to take home.</h3>
          </div>
          <div className="inline-flex rounded-full bg-[#f1f1ec] p-1 self-start">
            <button type="button" className="rounded-full bg-white px-3 py-2 text-xs font-medium shadow-sm">English</button>
            <button type="button" className="rounded-full px-3 py-2 text-xs text-[#7a7a74]">ไทย</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-5 md:p-7 md:border-r border-[#e2e2dc]">
            <p className="text-xs uppercase tracking-[0.12em] text-[#1A8C66]">Today</p>
            <h4 className="mt-3 text-xl font-medium">What we discussed</h4>
            <p className="mt-3 text-sm leading-relaxed text-[#62625d]">Your symptoms are consistent with indigestion. Your doctor has reviewed the note and treatment plan.</p>
            <div className="mt-6 rounded-2xl bg-[#eef6f2] border border-[#d9ebe2] p-4">
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#1A8C66] mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Omeprazole 20 mg</p>
                  <p className="text-sm text-[#66716a] mt-1">Take once daily before breakfast for 14 days.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:p-7">
            <p className="text-xs uppercase tracking-[0.12em] text-[#777771]">Next</p>
            <h4 className="mt-3 text-xl font-medium">What to watch for</h4>
            <div className="mt-5 space-y-3 text-sm text-[#5f5f59]">
              <CareLine text="Return if symptoms are not improving within 7 days." />
              <CareLine text="Seek urgent care for severe pain, vomiting blood or black stool." />
              <CareLine text="Bring this plan to your next appointment." />
            </div>
            <button type="button" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#11110f] text-white px-4 py-3 text-sm font-medium">
              Print care plan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </SurfaceFrame>
  );
}

function CareLine({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start border-t border-[#ecece7] pt-3 first:border-t-0 first:pt-0">
      <span className="w-5 h-5 rounded-full border border-[#cfcfc9] flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3" /></span>
      <span>{text}</span>
    </div>
  );
}

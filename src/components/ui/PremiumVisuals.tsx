export function TransformationCanvas() {
  const flows = [
    ["Finance operations", "Invoice approval", "High value"],
    ["Management", "Recurring reporting", "Ready"],
    ["Customer operations", "Request triage", "High value"],
  ];

  return (
    <div className="visual-shell visual-glow p-3 sm:p-4 md:p-5 lg:p-6">
      <div className="rounded-[1.35rem] border border-[#deded8] bg-[#fbfbf8] overflow-hidden shadow-[0_20px_55px_rgba(20,20,18,0.06)]">
        <div className="h-12 md:h-14 px-4 md:px-5 flex items-center justify-between border-b border-[#e2e2dc] bg-white/75">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d7d7d1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e3e3dd]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ecece7]" />
          </div>
          <span className="text-[10px] md:text-xs text-[#777771]">Archangel · Opportunity map</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.72fr_1.28fr] min-h-[430px] md:min-h-[520px]">
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#e2e2dc] bg-[#f4f4ef]">
            <p className="eyebrow text-[#777771]">Business areas</p>
            <div className="mt-8 space-y-5">
              {flows.map(([area, process, status], index) => (
                <div key={area} className="workflow-line flex gap-3.5 items-start">
                  <span className="dot mt-1" />
                  <div>
                    <p className="text-sm md:text-[15px] font-medium text-[#1a1a18]">{area}</p>
                    <p className="text-xs md:text-sm text-[#7a7a74] mt-1">{process}</p>
                    <span className="inline-flex mt-2 rounded-full border border-[#d3d3cd] px-2 py-1 text-[10px] text-[#686862] bg-white/70">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-7 bg-[#fbfbf8] relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-[#777771]">Priority view</p>
                <p className="text-lg md:text-xl font-medium tracking-[-0.02em] mt-2">Value × readiness</p>
              </div>
              <span className="pill hidden sm:inline-flex">Management view</span>
            </div>

            <div className="mt-8 md:mt-10 relative aspect-[1.05/0.85] border-l border-b border-[#cfcfc9]">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
                <div className="border-r border-b border-[#e8e8e2]" />
                <div className="border-b border-[#e8e8e2] bg-white/35" />
                <div className="border-r border-[#e8e8e2]" />
                <div className="bg-[#f0f0eb]" />
              </div>

              <PlotPoint left="68%" top="24%" label="Invoice approval" number="01" />
              <PlotPoint left="54%" top="42%" label="Reporting" number="02" />
              <PlotPoint left="76%" top="60%" label="Customer triage" number="03" />
              <PlotPoint left="34%" top="70%" label="CRM admin" number="04" muted />

              <span className="absolute left-3 top-3 text-[10px] text-[#888882]">Business value ↑</span>
              <span className="absolute right-3 bottom-3 text-[10px] text-[#888882]">Readiness →</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-5">
              <MiniMetric label="Priorities" value="3–5" />
              <MiniMetric label="Lens" value="ROI" />
              <MiniMetric label="Plan" value="30D" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlotPoint({ left, top, label, number, muted = false }: { left: string; top: string; label: string; number: string; muted?: boolean }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
      <div className="flex items-center gap-2">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold ${muted ? "bg-[#dadad4] text-[#666660]" : "bg-[#11110f] text-white"}`}>{number}</span>
        <span className="hidden sm:inline-flex whitespace-nowrap rounded-full border border-[#d8d8d2] bg-[#fbfbf8]/95 px-2.5 py-1.5 text-[10px] md:text-xs text-[#585853] shadow-sm">{label}</span>
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#e0e0da] bg-white/60 p-3">
      <span className="text-[9px] uppercase tracking-[0.09em] text-[#8a8a84] block">{label}</span>
      <span className="text-sm font-medium text-[#20201d] mt-1 block">{value}</span>
    </div>
  );
}

export function WorkshopPreview() {
  return (
    <div className="visual-shell p-3 sm:p-4 md:p-5">
      <div className="rounded-[1.35rem] overflow-hidden border border-[#dcdcd6] bg-[#fbfbf8] shadow-[0_24px_70px_rgba(20,20,18,0.07)]">
        <div className="p-5 md:p-7 border-b border-[#e2e2dc] bg-white/70 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-[#82827c]">AI Transformation Workshop</p>
            <p className="text-xl md:text-2xl font-medium tracking-[-0.035em] mt-2">Decision pack</p>
          </div>
          <span className="pill">Sample structure</span>
        </div>

        <div className="p-5 md:p-7">
          <div className="rounded-2xl bg-[#11110f] text-[#f7f7f2] p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#aaa9a2]">Priority 01</span>
                <h3 className="text-2xl md:text-3xl tracking-[-0.045em] font-medium mt-3">Invoice intake + approval</h3>
                <p className="text-sm text-[#a9a9a2] mt-2">Finance operations</p>
              </div>
              <span className="text-4xl md:text-5xl tracking-[-0.06em] text-[#d6d6cf]">01</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <PreviewCell label="Current friction" value="Manual handoffs" />
            <PreviewCell label="Business lens" value="Time + cost" />
            <PreviewCell label="Readiness" value="Medium / high" />
            <PreviewCell label="Recommended move" value="30 day pilot" />
          </div>

          <div className="mt-3 rounded-2xl border border-[#deded8] bg-white p-4 md:p-5">
            <div className="flex items-center justify-between text-xs text-[#73736d]">
              <span>Decision sequence</span>
              <span>Map → Prove → Scale</span>
            </div>
            <div className="h-1.5 mt-4 rounded-full bg-[#ecece7] overflow-hidden">
              <div className="h-full w-[68%] rounded-full bg-[#11110f]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-h-[94px] rounded-2xl border border-[#e0e0da] bg-white p-4 flex flex-col justify-between">
      <span className="text-[10px] uppercase tracking-[0.08em] text-[#898983]">{label}</span>
      <span className="text-sm md:text-[15px] font-medium text-[#242421]">{value}</span>
    </div>
  );
}

export function WorkflowStory({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="py-7 md:py-9 border-t border-[#deded8] grid grid-cols-1 md:grid-cols-[0.75fr_1.25fr] gap-5 md:gap-10 items-center">
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{title}</h3>
      <div className="flex flex-wrap items-center gap-2 md:justify-end">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <span className={`rounded-full px-3 py-2 text-xs md:text-sm ${index === steps.length - 1 ? "bg-[#11110f] text-white" : "border border-[#d7d7d1] bg-white/55 text-[#555550]"}`}>{step}</span>
            {index < steps.length - 1 ? <span className="text-[#aaa9a3]">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ValueMap() {
  const items = [
    { label: "Finance", x: "68%", y: "24%", score: "01" },
    { label: "Reporting", x: "48%", y: "38%", score: "02" },
    { label: "Customer ops", x: "74%", y: "54%", score: "03" },
    { label: "Sales ops", x: "38%", y: "64%", score: "04" },
  ];

  return (
    <div className="surface-card-amber technical-corner p-4 md:p-6 lg:p-7 w-full">
      <div className="flex items-center justify-between pb-4 border-b border-[#2a2c30] text-mono-label">
        <span>AI opportunity map</span>
        <span className="signal-text">Priority / value</span>
      </div>

      <div className="relative aspect-[1.15/1] mt-5 border-l border-b border-[#34373b] bg-[#080808]/80 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
          <div className="border-r border-b border-[#1e2023]" />
          <div className="border-b border-[#1e2023] bg-[rgba(214,161,92,0.025)]" />
          <div className="border-r border-[#1e2023]" />
          <div className="bg-[rgba(214,161,92,0.05)]" />
        </div>
        <span className="absolute top-3 right-3 text-[8px] font-mono tracking-[0.12em] uppercase signal-text">High value</span>
        <span className="absolute bottom-3 left-3 text-[8px] font-mono tracking-[0.12em] uppercase text-[#555a60]">Lower priority</span>

        {items.map((item) => (
          <div
            key={item.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: item.x, top: item.y }}
          >
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border border-[rgba(214,161,92,0.5)] bg-[#10100f] flex items-center justify-center font-mono text-[8px] signal-text shadow-[0_0_0_5px_rgba(214,161,92,0.04)]">
                {item.score}
              </span>
              <span className="whitespace-nowrap text-[10px] md:text-xs text-[#c9c8c2] bg-[#090909]/90 px-2 py-1 border border-[#26282c]">
                {item.label}
              </span>
            </div>
          </div>
        ))}

        <div className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[8px] font-mono uppercase tracking-[0.12em] text-[#555a60]">Business value</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase tracking-[0.12em] text-[#555a60]">Implementation readiness →</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <MiniMetric label="Rank" value="3–5" />
        <MiniMetric label="Lens" value="ROI" />
        <MiniMetric label="Output" value="30D" />
      </div>
    </div>
  );
}

export function WorkshopOutputPreview() {
  return (
    <div className="surface-card technical-corner overflow-hidden">
      <div className="flex items-center justify-between px-4 md:px-5 py-4 border-b border-[#282a2e] text-mono-label">
        <span>Example workshop output</span>
        <span className="signal-text">Decision pack</span>
      </div>

      <div className="p-4 md:p-5 space-y-3">
        <div className="surface-card-amber p-4">
          <div className="flex items-center justify-between text-mono-label mb-5">
            <span>Priority 01</span>
            <span>High value / ready</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
            <div>
              <p className="text-[#efeee8] text-lg md:text-xl">Invoice intake + approval</p>
              <p className="text-[#6f7378] text-xs mt-2">Finance operations</p>
            </div>
            <span className="metric-number signal-text">01</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <OutputTile label="Current friction" value="Manual" />
          <OutputTile label="Value lens" value="Time + cost" />
          <OutputTile label="Readiness" value="Medium / high" />
          <OutputTile label="Next move" value="30 day pilot" />
        </div>

        <div className="border border-[#282a2e] p-4 bg-[#080808]">
          <div className="flex items-center justify-between text-mono-label mb-3">
            <span>Decision sequence</span>
            <span>01 → 03</span>
          </div>
          <div className="h-1.5 bg-[#171819] overflow-hidden">
            <div className="h-full w-[72%] bg-[#d6a15c]" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3 text-[9px] font-mono uppercase tracking-[0.08em] text-[#666a6f]">
            <span>Map</span><span>Prove</span><span className="text-right">Scale</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#282a2e] p-3 bg-[#080808]">
      <span className="text-[8px] font-mono uppercase tracking-[0.12em] text-[#555a60] block">{label}</span>
      <span className="text-sm text-[#d8d7d1] mt-1 block">{value}</span>
    </div>
  );
}

function OutputTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#282a2e] p-3 md:p-4 bg-[#080808] min-h-[88px] flex flex-col justify-between">
      <span className="text-[8px] font-mono uppercase tracking-[0.12em] text-[#555a60]">{label}</span>
      <span className="text-sm text-[#d8d7d1]">{value}</span>
    </div>
  );
}

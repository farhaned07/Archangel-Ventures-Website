import { ArrowUpRight } from "lucide-react";

export function CompanySystems() {
  return (
    <section className="bg-[#11110f] text-[#f5f5f0]">
      <div className="page-shell py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mb-12 md:mb-16">
          <p className="eyebrow text-[#81817b]">Built systems</p>
          <h2 className="mt-5 text-[3rem] sm:text-[4.4rem] lg:text-[5.8rem] leading-[0.93] tracking-[-0.065em] font-medium">Products built close to the work.</h2>
        </div>

        <div className="space-y-4 md:space-y-5">
          <SystemPanel
            name="Hanna"
            category="Healthcare AI · Thailand"
            description="Clinical documentation and multilingual care planning built around the consultation, not around a form."
            href="https://www.hanna.care"
            visual={<HannaVisual />}
          />
          <SystemPanel
            name="Onnesha"
            category="AI native media system"
            description="A research to production system designed to turn structured ideas into repeatable media output."
            visual={<OnneshaVisual />}
          />
          <SystemPanel
            name="Archangel Applied AI"
            category="Enterprise transformation · Thailand"
            description="Workflow systems for finance, operations and management where the business case has to be measurable."
            visual={<AppliedAIVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function SystemPanel({ name, category, description, href, visual }: { name: string; category: string; description: string; href?: string; visual: React.ReactNode }) {
  const body = (
    <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_1.42fr] rounded-[2rem] md:rounded-[2.7rem] overflow-hidden border border-[#30302d] bg-[#161614] min-h-[520px] lg:min-h-[590px]">
      <div className="p-6 md:p-9 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#30302d]">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs text-[#777771]">{category}</p>
          {href ? <ArrowUpRight className="w-4 h-4 text-[#777771]" /> : null}
        </div>
        <div>
          <h3 className="text-[3rem] md:text-[4.5rem] leading-[0.92] tracking-[-0.065em] font-medium">{name}</h3>
          <p className="mt-6 max-w-md text-[#96968f] text-base md:text-lg leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="p-4 md:p-7 lg:p-9 bg-[#f4f3ef] text-[#11110f] min-w-0">{visual}</div>
    </div>
  );

  return href ? <a href={href} target="_blank" rel="noreferrer" className="block group">{body}</a> : body;
}

function HannaVisual() {
  return (
    <div className="h-full min-h-[420px] rounded-[1.6rem] border border-[#d8d8d2] bg-white p-5 md:p-7 flex flex-col">
      <div className="flex items-center justify-between gap-3 pb-5 border-b border-[#e0e0da]">
        <div><p className="text-xs text-[#888882]">Hanna</p><p className="mt-1 font-medium">Consultation</p></div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6f2] px-3 py-2 text-xs text-[#1A8C66]"><span className="w-2 h-2 rounded-full bg-[#1A8C66]" />Listening</span>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch py-5">
        {[
          ["01", "Listen", "Doctor speaks naturally"],
          ["02", "Structure", "SOAP note appears"],
          ["03", "Care plan", "Patient ready output"],
        ].map(([number, title, text], index) => (
          <div key={title} className={`rounded-2xl border p-4 md:p-5 flex flex-col justify-between ${index === 2 ? "bg-[#11110f] text-white border-[#11110f]" : "bg-[#f8f8f5] border-[#deded8]"}`}>
            <span className={`text-[10px] ${index === 2 ? "text-[#85857f]" : "text-[#999993]"}`}>{number}</span>
            <div><p className="font-medium">{title}</p><p className={`mt-2 text-xs leading-relaxed ${index === 2 ? "text-[#9a9a94]" : "text-[#777771]"}`}>{text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnneshaVisual() {
  const stages = ["Research", "Script", "Render", "Publish"];
  return (
    <div className="h-full min-h-[420px] rounded-[1.6rem] bg-[#11110f] text-white p-5 md:p-7 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 opacity-40" aria-hidden="true"><div className="absolute left-1/3 inset-y-0 w-px bg-[#33332f]" /><div className="absolute right-1/3 inset-y-0 w-px bg-[#33332f]" /><div className="absolute inset-x-0 top-1/2 h-px bg-[#33332f]" /></div>
      <div className="relative flex items-center justify-between"><span className="text-xs text-[#777771]">Onnesha production loop</span><span className="text-xs text-[#777771]">AI native</span></div>
      <div className="relative flex-1 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {stages.map((stage, index) => (
            <div key={stage} className={`rounded-2xl border p-4 md:p-5 min-h-[150px] flex flex-col justify-between ${index === 2 ? "bg-[#f4f3ef] text-[#11110f] border-[#f4f3ef]" : "bg-[#181816] border-[#343431]"}`}>
              <span className={`text-[10px] ${index === 2 ? "text-[#777771]" : "text-[#676761]"}`}>0{index + 1}</span>
              <p className="font-medium">{stage}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative text-xs text-[#777771]">One system from idea to repeatable output.</div>
    </div>
  );
}

function AppliedAIVisual() {
  return (
    <div className="h-full min-h-[420px] rounded-[1.6rem] border border-[#d8d8d2] bg-white p-5 md:p-7 flex flex-col">
      <div className="flex items-center justify-between pb-5 border-b border-[#e0e0da]"><span className="text-xs text-[#888882]">Operating map</span><span className="text-xs text-[#888882]">value × readiness</span></div>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 py-5">
        {["Finance", "Operations", "Sales", "Reporting", "Customer", "Documents"].map((item, index) => (
          <div key={item} className={`rounded-2xl border p-4 flex flex-col justify-between min-h-[120px] ${index === 0 || index === 3 ? "bg-[#11110f] text-white border-[#11110f]" : "bg-[#f7f7f3] border-[#deded8]"}`}>
            <span className={`text-[10px] ${index === 0 || index === 3 ? "text-[#777771]" : "text-[#9a9a94]"}`}>0{index + 1}</span>
            <span className="text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#888882]">Prioritize the work before choosing the technology.</p>
    </div>
  );
}

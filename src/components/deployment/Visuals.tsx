import { ArrowUpRight, Check, CheckCheck, FileText, GitBranch, Layers3, LockKeyhole, ScanLine, ShieldCheck } from "lucide-react";

/** Original artwork and fictional UI studies — no customer systems or clinical outcomes are implied. */
import { SignalField, ArchitectureArtwork } from "./CinematicArt";
import { MobileSignal } from "./MobileArt";

export function FieldImage({ compact = false }: {compact?:boolean}) { return <div className="am4-adaptive-field"><div className="am4-desktop-art"><SignalField compact={compact}/></div><div className="am4-mobile-art"><MobileSignal/></div></div>; }
export { ArchitectureArtwork as SystemImage };

export function HannaPreview() {
  return (
    <div className="adv-product-ui adv-hanna-ui av3-demo" aria-label="Fictional Hanna design study illustrating a clinician-reviewed consultation and care-plan workspace, using sample content">
      <div className="adv-ui-toolbar">
        <strong>hanna<span>.</span></strong>
        <span className="av3-ui-top-title">Consultation workspace</span>
        <small><LockKeyhole size={12}/> ILLUSTRATIVE DATA</small>
      </div>
      <div className="adv-hanna-workspace av3-hanna-workspace">
        <div className="adv-ui-sidebar av3-sidebar">
          <span>h.</span><i className="selected"/><i/><i/><i/>
        </div>
        <div className="adv-hanna-primary">
          <div className="adv-ui-title av3-demo-header">
            <div><small>ENCOUNTER 014 / FICTIONAL EXAMPLE</small><h3>Consultation review<span className="av3-demo-dot">.</span></h3></div>
            <span className="av3-review-status">Awaiting clinician approval</span>
          </div>
          <div className="av3-clinical-breadcrumb">
            <span>01 / Capture</span><span className="active">02 / Structure</span><span>03 / Review</span><span>04 / Share</span>
          </div>
          <div className="adv-hanna-cards av3-hanna-cards">
            <div className="adv-hanna-card av3-clinical-card">
              <small><ScanLine size={14}/> CONSULTATION SIGNAL</small>
              <div className="av3-audio-card">
                <div className="av3-waveform">{Array.from({length:39},(_,i)=><i key={i} style={{height:(19+Math.abs(Math.sin(i*1.53)*Math.cos(i*.14))*66)+"%"}}/>)}</div>
                <div className="av3-audio-time"><span>00:00</span><span>SAMPLE INPUT</span><span>03:24</span></div>
              </div>
              <div className="av3-clinical-list"><span>TRANSCRIPT STRUCTURE</span>
                <p><Check size={12}/> Patient concerns identified</p>
                <p><Check size={12}/> Follow-up instructions extracted</p>
                <p><Check size={12}/> Uncertainty flagged for review</p>
              </div>
            </div>
            <div className="adv-hanna-card av3-clinical-card av3-care-card">
              <small><FileText size={14}/> GENERATED DRAFT</small>
              <div className="av3-note-head"><span>Clinical note</span><b>REVIEW REQUIRED</b></div>
              <div className="av3-note-section"><strong>Summary</strong><p>Example visit note assembled from the sample consultation.</p></div>
              <div className="av3-note-section"><strong>Care instructions</strong><p>Plain-language plan prepared for clinician verification.</p></div>
              <div className="av3-note-approval"><ShieldCheck size={15}/> Nothing shared without approval</div>
            </div>
          </div>
          <div className="adv-ui-foot"><span>VOICE → DOCUMENTATION → CLINICIAN REVIEW</span><span>CONCEPT / NOT PATIENT DATA</span></div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowPreview() {
  const items=[
    { id:"01", label:"Document received", detail:"Source captured", state:"complete" },
    { id:"02", label:"Data extracted", detail:"Schema and rules checked", state:"complete" },
    { id:"03", label:"Exception routed", detail:"Operator confirmation needed", state:"review" },
    { id:"04", label:"System handoff", detail:"Waiting for approval", state:"pending" },
  ];
  return (
    <div className="adv-product-ui adv-flow-ui av3-demo" aria-label="Fictional operational workflow showing a document exception routed through validation, human review and controlled handoff">
      <div className="adv-ui-toolbar">
        <strong className="adv-ui-company"><Layers3 size={14}/> ARCHANGEL / OPERATIONS</strong>
        <span className="av3-ui-top-title">Engineering / system study</span>
        <small><GitBranch size={12}/> SAMPLE WORKFLOW</small>
      </div>
      <div className="adv-flow-body av3-flow-body">
        <div className="adv-ui-title av3-demo-header"><div><small>WORKFLOW 004 / STUDY</small><h3>Exception review<span className="av3-demo-dot">.</span></h3></div><span className="av3-review-status">Human approval</span></div>
        <div className="av3-operation-overview">
          <div><small>INTAKE</small><strong>Structured</strong><span><CheckCheck size={13}/> Rule matched</span></div>
          <div><small>ROUTING</small><strong>Escalated</strong><span><GitBranch size={13}/> Review path</span></div>
          <div><small>HANDOFF</small><strong>Protected</strong><span><ShieldCheck size={13}/> Hold applied</span></div>
        </div>
        <div className="av3-operation-panel">
          <div className="av3-operation-top"><span>EVENT TRACE</span><span>ONE FICTIONAL WORKFLOW</span></div>
          <div className="av3-operation-trace">
            {items.map((item,i)=><div className={"av3-trace-row "+item.state} key={item.id}>
              <span className="av3-trace-connector"><b>{i<2?<Check size={12}/>:item.id}</b></span>
              <div><strong>{item.label}</strong><small>{item.detail}</small></div>
              <span className="av3-trace-status">{item.state==="complete"?"Complete":item.state==="review"?"Review":"On hold"}</span>
            </div>)}
          </div>
        </div>
        <div className="adv-ui-foot"><span>INTEGRATIONS · EVALUATIONS · HUMAN CONTROL</span><span>ILLUSTRATIVE <ArrowUpRight size={13}/></span></div>
      </div>
    </div>
  );
}

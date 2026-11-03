import { ArrowUpRight, Check, FileText, GitBranch, LockKeyhole, ScanLine } from "lucide-react";

/** Original visual artwork for Archangel; none of these panels represent client deployments. */
export { SignalField as FieldImage, ArchitectureArtwork as SystemImage } from "./CinematicArt";

export function HannaPreview() {
  return (
    <div className="adv-product-ui adv-hanna-ui" aria-label="Fictional interface study of Hanna's clinician-reviewed care planning concept">
      <div className="adv-ui-toolbar"><strong>hanna<span>.</span></strong><span>Clinical workspace / concept</span><small><LockKeyhole size={12}/> SAMPLE DATA</small></div>
      <div className="adv-hanna-workspace">
        <div className="adv-ui-sidebar"><span>h.</span><i/><i/><i/></div>
        <div className="adv-hanna-primary">
          <div className="adv-ui-title"><div><small>CONSULTATION / EXAMPLE</small><h3>Care summary</h3></div><span>Awaiting clinician review</span></div>
          <div className="adv-hanna-cards">
            <div className="adv-hanna-card"><small><ScanLine size={14}/> CONSULTATION AUDIO</small>
              <div className="adv-audio-bars">{Array.from({length:31},(_,i)=><i key={i} style={{height:String(16+Math.abs(Math.sin(i*1.6)*Math.cos(i*.17))*70)+"%"}}/>)}</div>
              <div className="adv-line-skeleton"><i/><i/><i/></div><p>Structured conversation</p>
            </div>
            <div className="adv-hanna-card"><small><FileText size={14}/> CLINICAL CARE PLAN</small>
              <div className="adv-preview-block"><strong>Summary</strong><i/><i/><i/></div>
              <div className="adv-preview-block"><strong>Next steps</strong><i/><i/></div><p>Human approval required</p>
            </div>
          </div>
          <div className="adv-ui-foot"><span>VOICE → NOTE → CLINICIAN → PATIENT</span><span>ILLUSTRATION ONLY</span></div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowPreview() {
  const items=[["01","Document intake","Ready"],["02","Extract and validate","Checked"],["03","Human approval","Review"],["04","System handoff","Queued"]];
  return (
    <div className="adv-product-ui adv-flow-ui" aria-label="Illustrative workflow system with human review and operational checks">
      <div className="adv-ui-toolbar"><strong className="adv-ui-company">ARCHANGEL / FLOW</strong><span>Operations study</span><small><GitBranch size={12}/> SAMPLE WORKFLOW</small></div>
      <div className="adv-flow-body">
        <div className="adv-ui-title"><div><small>WORKFLOW / 004</small><h3>Exception review</h3></div><span>Operator control</span></div>
        <div className="adv-flow-metrics"><div><small>INPUT</small><strong>Document</strong></div><div><small>RULES</small><strong>Checked</strong></div><div><small>DECISION</small><strong>Review</strong></div></div>
        <div className="adv-flow-items">{items.map((item,i)=><div className="adv-flow-item" key={item[0]}><span className={i===2?"pending":""}>{i<2?<Check size={12}/>:item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></div>)}</div>
        <div className="adv-ui-foot"><span>ILLUSTRATIVE / NO CUSTOMER DATA</span><ArrowUpRight size={15}/></div>
      </div>
    </div>
  );
}

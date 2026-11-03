import { ArrowUpRight, Check, FileText, GitBranch, LockKeyhole, ScanLine } from "lucide-react";

/** Original visual artwork for Archangel; none of these panels represent client deployments. */
export function FieldImage({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={"adv-field" + (compact ? " adv-field-compact" : "")}>
      <svg viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Original abstract illustration of connected, concentric deployment pathways">
        <defs>
          <linearGradient id="adv-field-base" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#153F50"/><stop offset=".25" stopColor="#307C82"/><stop offset=".65" stopColor="#8BB7A5"/><stop offset="1" stopColor="#DBDEC6"/>
          </linearGradient>
          <radialGradient id="adv-field-light" cx=".58" cy=".49" r=".66">
            <stop stopColor="#E7F2DE" stopOpacity=".45"/><stop offset="1" stopColor="#A1C1AA" stopOpacity="0"/>
          </radialGradient>
          <pattern id="adv-field-dots" width="23" height="23" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r=".75" fill="#F4F7F0" opacity=".38"/>
          </pattern>
        </defs>
        <rect width="1440" height="690" fill="url(#adv-field-base)"/>
        <rect width="1440" height="690" fill="url(#adv-field-light)"/>
        <rect width="1440" height="690" fill="url(#adv-field-dots)" opacity=".48"/>
        <g stroke="#F6F8EB" strokeOpacity=".47" fill="none" strokeWidth="1">
          <circle cx="720" cy="350" r="100"/><circle cx="720" cy="350" r="185"/>
          <circle cx="720" cy="350" r="280"/><circle cx="720" cy="350" r="390"/><circle cx="720" cy="350" r="510"/>
          <path d="M0 350h1440M720 0v690"/>
          <path d="M80 660C350 310 500 250 720 350C1030 505 1180 430 1440 90" strokeDasharray="2 7"/>
          <path d="M0 130C340 560 615 580 720 350C870 70 1070 70 1440 530" strokeDasharray="2 7"/>
          <ellipse cx="720" cy="350" rx="600" ry="225" transform="rotate(-27 720 350)" strokeOpacity=".65"/>
        </g>
        <g stroke="#F9FBEC" strokeOpacity=".72" strokeWidth="1">
          <path d="M720 350L995 350M720 350L540 140M720 350L495 525M720 350L995 530"/>
          <path d="M1007 350h88v-34M535 133h-98v-27M483 529h-112v36"/>
        </g>
        <g fill="#F7F9EF">
          <circle cx="720" cy="350" r="9"/>
          <circle cx="720" cy="350" r="26" fill="none" stroke="#F7F9EF" strokeOpacity=".8"/>
          <circle cx="995" cy="350" r="5"/><circle cx="540" cy="140" r="5"/>
          <circle cx="495" cy="525" r="5"/><circle cx="995" cy="530" r="5"/>
        </g>
        <g fill="#F7F9EF" fontFamily="Arial,sans-serif" fontSize="10" letterSpacing="3" opacity=".85">
          <text x="1108" y="315">DEPLOY</text><text x="315" y="105">DISCOVER</text>
          <text x="278" y="570">INTEGRATE</text><text x="1010" y="550">EVALUATE</text>
        </g>
        <g stroke="#F4F8EA" strokeOpacity=".48">
          <path d="M32 32h22M32 32v22M1408 32h-22M1408 32v22"/>
          <path d="M32 658h22M32 658v-22M1408 658h-22M1408 658v-22"/>
        </g>
      </svg>
      <div className="adv-field-labels" aria-hidden="true"><span>ARCHANGEL / DEPLOYMENT FIELD</span><span>THE TECHNOLOGY FOLLOWS THE PROBLEM <b>✳</b></span></div>
      <figcaption className="adv-sr">Abstract illustration, not a live or customer deployment.</figcaption>
    </figure>
  );
}

export function SystemImage() {
  return (
    <figure className="adv-system-image">
      <svg viewBox="0 0 670 660" role="img" xmlns="http://www.w3.org/2000/svg" aria-label="Original orchestration diagram with pathways between data, AI models, human review and applications">
        <defs>
          <linearGradient id="adv-system-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#173E4C"/><stop offset=".55" stopColor="#367D82"/><stop offset="1" stopColor="#ACCBB7"/>
          </linearGradient>
          <pattern id="adv-sys-grid" width="31" height="31" patternUnits="userSpaceOnUse"><path d="M31 0H0V31" stroke="#FCFFF3" strokeOpacity=".12"/></pattern>
        </defs>
        <rect width="670" height="660" fill="url(#adv-system-gradient)"/><rect width="670" height="660" fill="url(#adv-sys-grid)"/>
        <g stroke="#F7FBEA" strokeOpacity=".45" fill="none">
          <circle cx="336" cy="322" r="100"/><circle cx="336" cy="322" r="189"/><circle cx="336" cy="322" r="277"/>
          <ellipse cx="336" cy="322" rx="350" ry="155" transform="rotate(-34 336 322)" strokeDasharray="3 6"/>
          <ellipse cx="336" cy="322" rx="342" ry="147" transform="rotate(41 336 322)" strokeDasharray="3 6"/>
          <path d="M336 0v660M0 322h670" strokeDasharray="2 7"/>
          <path d="M336 322L105 195M336 322L568 186M336 322L517 532M336 322L144 520"/>
        </g>
        <circle cx="336" cy="322" r="90" fill="#153D47" fillOpacity=".7" stroke="#F2F8ED"/>
        <circle cx="336" cy="322" r="47" fill="#F2F6E8"/>
        <path d="M310 322h52m-26-26v52" stroke="#3C7B7F" strokeWidth="2"/>
        <circle cx="336" cy="322" r="10" fill="#3C7B7F"/>
        <g fill="#F7FBEA"><circle cx="105" cy="195" r="5"/><circle cx="568" cy="186" r="5"/><circle cx="517" cy="532" r="5"/><circle cx="144" cy="520" r="5"/></g>
        <g stroke="#ECF4E6" strokeOpacity=".65" fill="#173E4C" fillOpacity=".6">
          <rect x="25" y="105" width="187" height="50" rx="2"/><rect x="462" y="97" width="183" height="50" rx="2"/>
          <rect x="442" y="557" width="201" height="50" rx="2"/><rect x="22" y="549" width="194" height="50" rx="2"/>
        </g>
        <g fill="#F8F9E8" fontFamily="Arial,sans-serif" fontSize="11" letterSpacing="1.5">
          <text x="43" y="136">DATA &amp; TOOLS</text><text x="482" y="128">MODEL CHOICE</text>
          <text x="460" y="587">APPLICATIONS</text><text x="40" y="579">HUMAN REVIEW</text>
          <text x="260" y="440" fontSize="10" letterSpacing="2.5">DELIVERY LAYER</text>
        </g>
      </svg>
      <figcaption className="adv-sr">Conceptual illustration of model-independent architecture; not a client system.</figcaption>
    </figure>
  );
}

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

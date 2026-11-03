import type { ReactNode } from "react";

/**
 * Archangel original, deterministic vector artwork.
 * Uses local SVG and CSS only: no external imagery, scripts or animation libraries.
 * All illustrations are conceptual, not customer deployment screenshots.
 */

const orbitLines = Array.from({ length: 32 }, (_, i) => {
  const y0 = 70 + i * 19;
  const lift = 270 - i * 10;
  return "M -120 " + y0 + " C 310 " + (y0 - lift) + ", 680 " + (y0 + lift * 0.8) + ", 1560 " + (y0 - 110);
});

const luminousLines = Array.from({ length: 18 }, (_, i) => {
  const y = 170 + i * 14;
  return "M -60 " + (y + i * 6) + " C 390 " + (y - 350) + ", 640 " + (y + 360) + ", 1500 " + (y - 80);
});

function VisualFrame({ children, compact, className = "" }: { children: ReactNode; compact?: boolean; className?: string }) {
  return (
    <figure className={["av3-artwork", className, compact ? "av3-artwork-compact" : ""].join(" ")}>
      {children}
      <figcaption className="adv-sr">Original Archangel design illustration, not a client system or a verified deployment.</figcaption>
    </figure>
  );
}

export function SignalField({ compact = false }: { compact?: boolean }) {
  return (
    <VisualFrame compact={compact} className="av3-signal">
      <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Original atmospheric AI deployment illustration with luminous flowing connections, structured paths and a central signal">
        <defs>
          <linearGradient id="av3-bg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#071f2b"/>
            <stop offset=".34" stopColor="#195462"/>
            <stop offset=".68" stopColor="#468f8c"/>
            <stop offset="1" stopColor="#b1c8b2"/>
          </linearGradient>
          <radialGradient id="av3-halo" cx=".54" cy=".46" r=".48">
            <stop stopColor="#eaf9e2" stopOpacity=".65"/>
            <stop offset=".38" stopColor="#b4e6d1" stopOpacity=".25"/>
            <stop offset="1" stopColor="#bedbba" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="av3-thread" x1="0" y1="0" x2="1" y2=".85">
            <stop stopColor="#c8e9dc" stopOpacity="0"/>
            <stop offset=".22" stopColor="#d4f4dc" stopOpacity=".26"/>
            <stop offset=".55" stopColor="#efffe4" stopOpacity=".82"/>
            <stop offset=".82" stopColor="#9bdcd7" stopOpacity=".40"/>
            <stop offset="1" stopColor="#f3f7da" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="av3-stream" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ccece2" stopOpacity=".03"/>
            <stop offset=".4" stopColor="#edffe7" stopOpacity=".92"/>
            <stop offset="1" stopColor="#a5e1d7" stopOpacity=".07"/>
          </linearGradient>
          <radialGradient id="av3-core">
            <stop stopColor="#f9ffed"/><stop offset=".22" stopColor="#daf3de"/>
            <stop offset=".60" stopColor="#88cbbb" stopOpacity=".25"/><stop offset="1" stopColor="#5e9c98" stopOpacity="0"/>
          </radialGradient>
          <pattern id="av3-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".75" fill="#ecf7e9" opacity=".27"/>
          </pattern>
          <filter id="av3-blur"><feGaussianBlur stdDeviation="17"/></filter>
        </defs>
        <rect width="1440" height="700" fill="url(#av3-bg)"/>
        <rect width="1440" height="700" fill="url(#av3-halo)"/>
        <rect width="1440" height="700" fill="url(#av3-dots)"/>
        <path d="M0 584C311 244 490 225 730 342S1157 480 1440 143V700H0Z" fill="#b6d6c4" opacity=".12"/>
        <path d="M0 600C351 153 578 217 790 338S1132 518 1440 55" stroke="#f0f8e6" strokeOpacity=".25" strokeWidth="2" fill="none"/>
        <g fill="none">
          {orbitLines.map((d, i) => <path key={i} d={d} stroke="url(#av3-thread)" opacity={i % 3 === 0 ? .80 : .54} strokeWidth={i % 7 === 0 ? 1.4 : .55}/>)}
        </g>
        <g fill="none" filter="url(#av3-blur)" opacity=".46">
          <path d="M-80 540C343 150 540 225 730 340S1130 540 1520 90" stroke="#e9ffe0" strokeWidth="22"/>
          <path d="M-80 630C343 240 540 315 730 430S1130 630 1520 180" stroke="#68cbd0" strokeWidth="25"/>
        </g>
        <g fill="none">
          {luminousLines.map((d, i) => <path key={i} d={d} stroke="url(#av3-stream)" strokeWidth={i % 4 === 0 ? 1.35 : .7} opacity={i % 2 ? .65 : .95}/>)}
        </g>
        <g stroke="#eef9e7" strokeOpacity=".24" fill="none">
          <circle cx="744" cy="356" r="115"/><circle cx="744" cy="356" r="229"/><circle cx="744" cy="356" r="365"/>
          <ellipse cx="744" cy="356" rx="420" ry="139" transform="rotate(-27 744 356)" strokeDasharray="3 8"/>
          <path d="M744 0v700M0 356h1440" strokeDasharray="3 9"/>
        </g>
        <circle cx="744" cy="356" r="77" fill="url(#av3-core)" opacity=".87" className="av3-breath"/>
        <circle cx="744" cy="356" r="21" stroke="#efffe7" fill="none" strokeOpacity=".94" strokeWidth="1.2"/>
        <circle cx="744" cy="356" r="5" fill="#fffde9"/>
        <g stroke="#f0fce8" strokeWidth="1" strokeOpacity=".78" fill="none">
          <path d="M744 356L393 185L273 185M744 356L1081 245L1222 245M744 356L1045 532L1215 532M744 356L427 541L250 541"/>
        </g>
        <g fill="#fffef0">
          <circle cx="393" cy="185" r="3"/><circle cx="1081" cy="245" r="3"/>
          <circle cx="1045" cy="532" r="3"/><circle cx="427" cy="541" r="3"/>
        </g>
        <g fontFamily="Arial,sans-serif" fontWeight="500" letterSpacing="2.5" fontSize="11" fill="#f2fbe7">
          <text x="260" y="173">DISCOVER</text><text x="1233" y="249">DESIGN</text>
          <text x="1223" y="536">DEPLOY</text><text x="158" y="546">EVALUATE</text>
        </g>
        <g fill="none" stroke="#fffce6" strokeOpacity=".57">
          <path d="M29 29h21M29 29v21M1411 29h-21M1411 29v21M29 671h21M29 671v-21M1411 671h-21M1411 671v-21"/>
        </g>
      </svg>
      <div className="av3-signal-label" aria-hidden="true">
        <span><i/> ARCHANGEL / DEPLOYMENT SYSTEMS</span>
        <span>DESIGNED TO OPERATE IN THE REAL WORLD <b>↗</b></span>
      </div>
    </VisualFrame>
  );
}

const routeNodes = [
  { x: 164, y: 185, number: "01", title: "ENTERPRISE DATA", detail: "Systems & context" },
  { x: 661, y: 175, number: "02", title: "MODEL SELECTION", detail: "Fit & evaluation" },
  { x: 167, y: 588, number: "03", title: "HUMAN REVIEW", detail: "Controls & decisions" },
  { x: 669, y: 570, number: "04", title: "PRODUCTION", detail: "Monitoring & iteration" },
];

export function ArchitectureArtwork() {
  return (
    <VisualFrame className="av3-architecture">
      <svg viewBox="0 0 840 760" role="img" aria-label="Technical visual showing the model-agnostic deployment layer linked to enterprise data, model selection, human review and production systems">
        <defs>
          <linearGradient id="av3-a-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0e2a35"/><stop offset=".6" stopColor="#285f66"/><stop offset="1" stopColor="#8eb5a8"/></linearGradient>
          <linearGradient id="av3-a-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ecfff1" stopOpacity=".27"/><stop offset="1" stopColor="#d8f0e5" stopOpacity=".035"/></linearGradient>
          <radialGradient id="av3-a-light"><stop stopColor="#e2ffe2" stopOpacity=".68"/><stop offset="1" stopColor="#d3ffe6" stopOpacity="0"/></radialGradient>
          <pattern id="av3-a-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" stroke="#ecfff1" strokeOpacity=".085" strokeWidth=".65"/></pattern>
          <filter id="av3-a-shadow"><feGaussianBlur stdDeviation="19"/></filter>
        </defs>
        <rect width="840" height="760" fill="url(#av3-a-bg)"/>
        <rect width="840" height="760" fill="url(#av3-a-grid)"/>
        <circle cx="417" cy="366" r="240" fill="url(#av3-a-light)" opacity=".34"/>
        <g transform="translate(415 360)" stroke="#effaeb" fill="none">
          <circle r="90" strokeOpacity=".46"/><circle r="165" strokeOpacity=".29"/><circle r="255" strokeOpacity=".19"/>
          <ellipse rx="305" ry="120" transform="rotate(-33)" strokeDasharray="4 8" strokeOpacity=".4"/>
          <ellipse rx="280" ry="118" transform="rotate(39)" strokeDasharray="4 8" strokeOpacity=".4"/>
          <path d="M0 -335V333M-391 0H392" strokeOpacity=".17" strokeDasharray="2 9"/>
        </g>
        <g fill="none" stroke="#eafbea" strokeWidth="1.4" strokeOpacity=".70">
          <path d="M415 360L164 185M415 360L661 175M415 360L167 588M415 360L669 570"/>
        </g>
        <g stroke="#f9ffeb" strokeWidth="1" strokeOpacity=".75">
          <path d="M164 185V133h-92M661 175V122h112M167 588v54h-89M669 570v81h101"/>
        </g>
        <g>
          <circle cx="415" cy="360" r="102" fill="#114652" stroke="#a7e6d6" strokeOpacity=".85"/>
          <circle cx="415" cy="360" r="73" fill="#1c646a" stroke="#d1f8db" strokeOpacity=".4"/>
          <circle cx="415" cy="360" r="43" fill="#dff8e4"/>
          <circle cx="415" cy="360" r="9" fill="#267277"/>
          <g fill="none" stroke="#367d7b" strokeWidth="2"><path d="M393 360h44M415 338v44"/></g>
        </g>
        <g fontFamily="Arial,sans-serif" fontWeight="500" textAnchor="middle" fill="#f9fff0">
          <text x="415" y="490" fontSize="12" letterSpacing="3">ARCHANGEL / FDE</text>
          <text x="415" y="512" fontSize="9.5" letterSpacing="2" opacity=".7">BUILD • INTEGRATE • OPERATE</text>
        </g>
        {routeNodes.map((node,i)=>(
          <g key={node.number}>
            <circle cx={node.x} cy={node.y} r="9" fill="#f6ffec" stroke="#386b70" strokeWidth="3" className={i%2===0?"av3-node-pulse":""}/>
            <rect x={i%2===0?35:615} y={i<2?50:665} width="191" height="65" rx="2" fill="url(#av3-a-glass)" stroke="#d3f6e3" strokeOpacity=".47"/>
            <text x={i%2===0?49:630} y={i<2?72:687} fontSize="10" fontFamily="Arial,sans-serif" letterSpacing="1.5" fill="#e7f9e9">{node.number+" / "+node.title}</text>
            <text x={i%2===0?49:630} y={i<2?98:713} fontSize="11" fontFamily="Arial,sans-serif" fill="#e7f9e9" opacity=".78">{node.detail}</text>
          </g>
        ))}
        <g fill="none" stroke="#f9ffec" strokeOpacity=".42">
          <path d="M25 25h18M25 25v18M815 25h-18M815 25v18M25 735h18M25 735v-18M815 735h-18M815 735v-18"/>
        </g>
      </svg>
    </VisualFrame>
  );
}

/** Small architected visual rather than stock illustration, for numbered delivery steps. */
export function ProcessGlyph({ phase }: { phase: 1 | 2 | 3 | 4 }) {
  const arcs = [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]][phase];
  return (
    <svg viewBox="0 0 152 112" role="img" aria-label={"Original schematic illustration for delivery phase " + phase} className="av3-process-glyph">
      <g fill="none" stroke="#a5cbc0" strokeOpacity=".5">
        <circle cx="74" cy="56" r="24"/><circle cx="74" cy="56" r="42"/>
        <path d="M3 56h145M74 0v112" strokeDasharray="2 6"/>
      </g>
      <g fill="none" stroke="#f0fff0" strokeWidth="2.8">
        {arcs.map(i=><path key={i} d={["M74 14A42 42 0 0 1 116 56","M116 56A42 42 0 0 1 74 98","M74 98A42 42 0 0 1 32 56","M32 56A42 42 0 0 1 74 14"][i]}/>)}
      </g>
      <circle cx="74" cy="56" r="7" fill="#effded"/>
      <g fill="#effded"><circle cx="74" cy="14" r="3"/><circle cx="116" cy="56" r="3"/><circle cx="74" cy="98" r="3"/><circle cx="32" cy="56" r="3"/></g>
    </svg>
  );
}


/** Distinct artwork for the Services page: a deployment pipeline, not a repeat of the hero field. */
export function CapabilityAtlas() {
  const waypoints = [
    { x: 235, y: 300, number: "01", name: "UNDERSTAND", sub: "WORKFLOW" },
    { x: 535, y: 240, number: "02", name: "ENGINEER", sub: "SYSTEM" },
    { x: 825, y: 293, number: "03", name: "EVALUATE", sub: "OUTCOME" },
    { x: 1155, y: 232, number: "04", name: "OPERATE", sub: "IN CONTEXT" },
  ];
  return (
    <VisualFrame className="av3-capability-art">
      <svg viewBox="0 0 1440 500" role="img" aria-label="Original engineering lifecycle artwork showing four connected stages: understand, engineer, evaluate and operate">
        <defs>
          <linearGradient id="av3-cap-bg" x1="0" y1="0" x2="1" y2=".8">
            <stop stopColor="#12323d"/><stop offset=".54" stopColor="#377c82"/><stop offset="1" stopColor="#a3c7b0"/>
          </linearGradient>
          <radialGradient id="av3-cap-bloom"><stop stopColor="#eafcdf" stopOpacity=".5"/><stop offset="1" stopColor="#eafcdf" stopOpacity="0"/></radialGradient>
          <pattern id="av3-cap-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="#f4faec" strokeOpacity=".085"/>
          </pattern>
        </defs>
        <rect width="1440" height="500" fill="url(#av3-cap-bg)"/><rect width="1440" height="500" fill="url(#av3-cap-grid)"/>
        {waypoints.map((p,i)=><g key={p.number}>
          <circle cx={p.x} cy={p.y} r="176" fill="url(#av3-cap-bloom)" opacity={i%2===0?".6":".34"}/>
          <circle cx={p.x} cy={p.y} r="74" fill="none" stroke="#e9fff0" strokeOpacity=".44"/>
          <circle cx={p.x} cy={p.y} r="111" fill="none" stroke="#e9fff0" strokeOpacity=".22" strokeDasharray="3 8"/>
          <circle cx={p.x} cy={p.y} r="39" fill="#dbf4e5" fillOpacity=".17" stroke="#f3fff1" strokeOpacity=".65"/>
          <circle cx={p.x} cy={p.y} r="8" fill="#f3fff1"/>
          <path d={"M"+p.x+" "+(p.y-18)+"v-9m0 45v9m-18-18h-9m45 0h9"} stroke="#ecffee" strokeOpacity=".7"/>
          <g fontFamily="Arial,sans-serif" fill="#f7fff0">
            <text x={p.x} y={p.y+127} fontSize="11" letterSpacing="2" textAnchor="middle">{p.number+" / "+p.name}</text>
            <text x={p.x} y={p.y+143} fontSize="10" letterSpacing="2" opacity=".75" textAnchor="middle">{p.sub}</text>
          </g>
        </g>)}
        <path d="M-35 305C148 305 170 300 235 300S440 240 535 240S715 293 825 293S1035 232 1155 232S1330 280 1470 130" stroke="#f5ffe8" strokeWidth="1.8" fill="none" opacity=".86"/>
        <path d="M-35 319C148 319 170 314 235 314S440 254 535 254S715 307 825 307S1035 246 1155 246S1330 294 1470 144" stroke="#f5ffe8" strokeWidth=".7" strokeDasharray="3 6" fill="none" opacity=".45"/>
        <g stroke="#f4ffe9" strokeOpacity=".5" fill="none">
          <path d="M24 24h22M24 24v22M1416 24h-22M1416 24v22M24 476h22M24 476v-22M1416 476h-22M1416 476v-22"/>
          <path d="M0 45H1440M0 452H1440" strokeDasharray="2 10"/>
        </g>
        <g fontFamily="Arial,sans-serif" fill="#ecf9eb" fontSize="10" letterSpacing="2" opacity=".85">
          <text x="40" y="39">ARCHANGEL / DELIVERY CYCLE</text>
          <text x="1182" y="463">MODELS ARE A COMPONENT, NOT THE RESULT</text>
        </g>
      </svg>
    </VisualFrame>
  );
}

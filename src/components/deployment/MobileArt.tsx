import type { ReactNode } from "react";

/** Mobile-first, original architectural illustration. All data labels are conceptual. */
export function MobileSignal() {
  return (
    <figure className="am4-mobile-signal">
      <svg viewBox="0 0 390 450" role="img" aria-label="Abstract AI deployment artwork showing flowing connections between four stages of delivery">
        <defs>
          <linearGradient id="am4Gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#092632"/><stop offset=".48" stopColor="#256776"/><stop offset="1" stopColor="#b0d1bb"/></linearGradient>
          <radialGradient id="am4Glow"><stop stopColor="#eaffdf" stopOpacity=".9"/><stop offset=".28" stopColor="#b4e8d7" stopOpacity=".3"/><stop offset="1" stopColor="#73bac1" stopOpacity="0"/></radialGradient>
          <pattern id="am4grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" stroke="#f6fff3" strokeOpacity=".12"/></pattern>
        </defs>
        <rect width="390" height="450" fill="url(#am4Gradient)"/><rect width="390" height="450" fill="url(#am4grid)"/>
        <g stroke="#efffeb" strokeOpacity=".34" fill="none">
          {[62,104,157,221].map(r=><circle key={r} cx="195" cy="212" r={r}/>)}
          <path d="M195 0V450M0 212H390" strokeDasharray="2 7"/>
          {Array.from({length:17},(_,i)=><path key={i} d={"M -20 "+(74+i*18)+" C 100 "+(10+i*8)+", 240 "+(200+i*4)+", 420 "+(80+i*18)} opacity={i%2?'.33':'.7'}/>)}
        </g>
        <circle cx="195" cy="212" r="88" fill="url(#am4Glow)"/>
        <circle cx="195" cy="212" r="24" stroke="#efffeb" strokeOpacity=".9" fill="none"/><circle cx="195" cy="212" r="5" fill="#faffed"/>
        <g stroke="#f9ffee" strokeOpacity=".67" fill="none">
          <path d="M195 212L93 112H37M195 212L302 123H357M195 212L90 326H32M195 212L299 332H358"/>
        </g>
        <g fill="#faffec"><circle cx="93" cy="112" r="3"/><circle cx="302" cy="123" r="3"/><circle cx="90" cy="326" r="3"/><circle cx="299" cy="332" r="3"/></g>
        <g fill="#f5fff2" fontSize="9.5" fontFamily="Arial,sans-serif" letterSpacing="1.45">
          <text x="21" y="99">DISCOVER</text><text x="288" y="110">DESIGN</text><text x="15" y="351">EVALUATE</text><text x="287" y="357">DEPLOY</text>
          <text x="18" y="420" fontSize="8" opacity=".72">ARCHANGEL / FDE SYSTEMS</text><text x="307" y="420" fontSize="8" opacity=".72">001—004</text>
        </g>
      </svg>
      <figcaption className="adv-sr">Illustrative original artwork about the deployment lifecycle; not a live system.</figcaption>
    </figure>
  );
}

export function MobileAtlas(){
  return <figure className="am4-mobile-atlas">
    <svg viewBox="0 0 390 440" role="img" aria-label="Four distinct engineering phases: understand, engineer, evaluate, operate">
      <defs><linearGradient id="am4atlas" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0d3440"/><stop offset=".55" stopColor="#2d737b"/><stop offset="1" stopColor="#a7cbb6"/></linearGradient>
      <pattern id="am4atlasgrid" width="19" height="19" patternUnits="userSpaceOnUse"><path d="M19 0H0V19" stroke="#fff" strokeOpacity=".09"/></pattern></defs>
      <rect width="390" height="440" fill="url(#am4atlas)"/><rect width="390" height="440" fill="url(#am4atlasgrid)"/>
      <path d="M93 95C220 105 205 146 290 172S169 265 93 295S226 360 295 350" stroke="#e5ffea" strokeWidth="1.5" opacity=".6" fill="none"/>
      {[{x:93,y:95,n:'01',t:'UNDERSTAND'},{x:290,y:172,n:'02',t:'ENGINEER'},{x:93,y:295,n:'03',t:'EVALUATE'},{x:295,y:350,n:'04',t:'OPERATE'}].map(p=><g key={p.n}>
        <circle cx={p.x} cy={p.y} r="44" fill="#b5e8d5" fillOpacity=".12" stroke="#f0ffec" strokeOpacity=".53"/>
        <circle cx={p.x} cy={p.y} r="29" fill="none" stroke="#f0ffec" strokeOpacity=".4"/>
        <circle cx={p.x} cy={p.y} r="6" fill="#f7ffe9"/>
        <text x={p.x} y={p.y-57} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" letterSpacing="2.2" fill="#f6fff0">{p.n+" / "+p.t}</text>
      </g>)}
    </svg>
    <figcaption className="adv-sr">Concept diagram; not a live deployment.</figcaption>
  </figure>;
}

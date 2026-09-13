export function SystemDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square max-w-[680px] mx-auto ${className}`} aria-hidden="true">
      <svg viewBox="0 0 680 680" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="edgeFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5F5F2" stopOpacity="0.92" />
            <stop offset="1" stopColor="#7D8288" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="panelFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.035" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.005" />
          </linearGradient>
          <filter id="grain" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" seed="8" result="noise" />
            <feComposite in="noise" in2="SourceGraphic" operator="in" result="masked" />
            <feBlend in="SourceGraphic" in2="masked" mode="screen" />
          </filter>
        </defs>

        <g opacity="0.18" stroke="#8A8F95" strokeWidth="1">
          <path d="M46 122H634" />
          <path d="M46 558H634" />
          <path d="M120 48V632" />
          <path d="M560 48V632" />
          <circle cx="120" cy="122" r="3" fill="#8A8F95" stroke="none" />
          <circle cx="560" cy="122" r="3" fill="#8A8F95" stroke="none" />
          <circle cx="120" cy="558" r="3" fill="#8A8F95" stroke="none" />
          <circle cx="560" cy="558" r="3" fill="#8A8F95" stroke="none" />
        </g>

        <g stroke="url(#edgeFade)" strokeWidth="1.15">
          <path d="M178 204L340 126L502 204L340 282L178 204Z" fill="url(#panelFill)" />
          <path d="M178 204V257L340 335L502 257V204" opacity="0.55" />

          <path d="M162 296L340 210L518 296L340 382L162 296Z" fill="url(#panelFill)" />
          <path d="M162 296V349L340 435L518 349V296" opacity="0.55" />

          <path d="M145 392L340 298L535 392L340 486L145 392Z" fill="url(#panelFill)" />
          <path d="M145 392V448L340 542L535 448V392" opacity="0.7" />
        </g>

        <g stroke="#A9ADB2" strokeOpacity="0.38" strokeWidth="1" strokeDasharray="5 7">
          <path d="M340 128V542" />
          <path d="M178 204L145 392" />
          <path d="M502 204L535 392" />
        </g>

        <g>
          <circle cx="340" cy="204" r="37" stroke="#E9E9E5" strokeOpacity="0.8" />
          <circle cx="340" cy="204" r="17" stroke="#E9E9E5" strokeOpacity="0.42" />
          <circle cx="340" cy="204" r="4" fill="#F2F2EE" />
          <path d="M298 204H250" stroke="#CACCC8" strokeOpacity="0.48" />
          <path d="M382 204H430" stroke="#CACCC8" strokeOpacity="0.48" />
        </g>

        <g stroke="#E6E6E2" strokeOpacity="0.64" strokeWidth="1">
          <path d="M272 325H408" />
          <path d="M278 339H402" opacity="0.45" />
          <path d="M291 353H389" opacity="0.25" />
          <circle cx="245" cy="325" r="8" />
          <circle cx="435" cy="325" r="8" />
        </g>

        <g>
          <circle cx="340" cy="392" r="68" stroke="#EFEFEB" strokeOpacity="0.72" />
          <circle cx="340" cy="392" r="48" stroke="#EFEFEB" strokeOpacity="0.28" />
          <path d="M340 324V460M272 392H408" stroke="#D9DBD6" strokeOpacity="0.32" />
          <circle cx="340" cy="392" r="12" fill="#0A0A0A" stroke="#F0F0EC" strokeOpacity="0.9" />
        </g>

        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" letterSpacing="1.4" fill="#A8AAA7">
          <text x="76" y="188">INPUT / 01</text>
          <text x="535" y="188">STRUCTURE</text>
          <text x="70" y="314">LOGIC / 02</text>
          <text x="538" y="314">AUTOMATE</text>
          <text x="66" y="421">OUTPUT / 03</text>
          <text x="542" y="421">MEASURE</text>
        </g>

        <g stroke="#777C82" strokeOpacity="0.5" strokeWidth="1">
          <path d="M137 184H177" />
          <path d="M503 184H542" />
          <path d="M137 310H162" />
          <path d="M518 310H542" />
          <path d="M137 417H145" />
          <path d="M535 417H542" />
        </g>

        <g filter="url(#grain)">
          <circle cx="554" cy="510" r="37" fill="#9CA2A8" fillOpacity="0.14" stroke="#D0D2CF" strokeOpacity="0.48" />
          <circle cx="554" cy="510" r="4" fill="#E8E8E4" />
        </g>

        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill="#62666B" fontSize="8" letterSpacing="1.1">
          <text x="122" y="86">ARCHANGEL / WORKFLOW SYSTEM</text>
          <text x="122" y="100">REF: AG-AI-01 / BANGKOK</text>
          <text x="468" y="586">SYSTEM STATUS / READY</text>
        </g>
      </svg>

      <div className="absolute left-[8%] bottom-[6%] technical-note hidden sm:block">
        <span>Process architecture</span>
        <span>01 / Map</span>
        <span>02 / Build</span>
        <span>03 / Prove</span>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowUpRight, Check, CircleDot, Command, Layers3, MoveUpRight, Play, RotateCcw } from "lucide-react";

type Mode = "operations" | "product" | "platform";

const modes: { id: Mode; label: string; index: string }[] = [
  { id: "operations", label: "Operations", index: "01" },
  { id: "product", label: "Product", index: "02" },
  { id: "platform", label: "Digital", index: "03" },
];

export function BuildLab({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<Mode>("operations");
  const [reviewed, setReviewed] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={`build-lab ${compact ? "build-lab-compact" : ""}`} aria-label="Interactive examples of Archangel's engineering capabilities">
      <div className="lab-frame-top">
        <div className="lab-lights" aria-hidden="true"><i /><i /><i /></div>
        <span>ARCHANGEL / BUILD STUDIO</span>
        <span className="lab-frame-right"><CircleDot size={10} /> INTERACTIVE STUDY</span>
      </div>
      <div className="lab-switch" role="tablist" aria-label="Explore technology capabilities">
        {modes.map((m) => (
          <button
            key={m.id} type="button" role="tab"
            id={`lab-tab-${m.id}`}
            aria-selected={mode === m.id}
            aria-controls="lab-content"
            onClick={() => setMode(m.id)}
          ><span>{m.index}</span>{m.label}</button>
        ))}
      </div>
      <div className="lab-screen" id="lab-content" role="tabpanel" aria-labelledby={`lab-tab-${mode}`}>
        {mode === "operations" && (
          <div className="lab-operations">
            <div className="lab-app-nav">
              <div className="lab-app-mark"><Layers3 size={15} /> flow / desk</div>
              <span>Sample workspace <span className="lab-green-dot" /></span>
            </div>
            <div className="lab-app-body">
              <p className="lab-eyebrow">WORKFLOW / 003</p>
              <div className="lab-app-heading"><h3>Review queue<span className="lab-app-period">.</span></h3><span>Tuesday, 09:41</span></div>
              <p className="lab-intro">An example of how people and automation work together.</p>
              <div className="lab-stats"><div><span>Incoming</span><strong>08</strong></div><div><span>Ready</span><strong>{reviewed ? "07" : "06"}</strong></div><div><span>Needs review</span><strong>{reviewed ? "01" : "02"}</strong></div></div>
              <div className="lab-record">
                <div className="lab-record-icon">{reviewed ? <Check size={17} /> : <Command size={17} />}</div>
                <div className="lab-record-detail"><strong>Supplier request / 0284</strong><span>{reviewed ? "Approved by operator · sample" : "Amount differs from original document"}</span></div>
                <span className={`lab-record-tag ${reviewed ? "is-done" : ""}`}>{reviewed ? "Reviewed" : "Exception"}</span>
              </div>
              <button className="lab-action" type="button" onClick={() => setReviewed(!reviewed)}>
                {reviewed ? <RotateCcw size={15} /> : <Check size={15} />}
                {reviewed ? "Reset sample" : "Approve sample"}
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        )}
        {mode === "product" && (
          <div className="lab-product">
            <div className="lab-product-top"><span className="lab-product-symbol">◎</span><span>form / study</span><span>PRODUCT CONCEPT</span></div>
            <div className="lab-product-body">
              <div className="lab-product-sidebar"><span>⌁</span><span>▦</span><span>◷</span><span>⚙</span></div>
              <div className="lab-product-main">
                <p className="lab-eyebrow">A BETTER WAY TO WORK</p>
                <h3>Good morning,<br /><em>Alex.</em></h3>
                <p className="lab-product-sub">Your work, in one clear place.</p>
                <div className="lab-product-task"><span className={`lab-checkbox ${taskDone ? "is-done" : ""}`}>{taskDone && <Check size={14} />}</span><div><strong>Review the next release</strong><small>{taskDone ? "Completed just now" : "Product / Today"}</small></div><button type="button" onClick={() => setTaskDone(!taskDone)}>{taskDone ? "Undo" : "Complete"}</button></div>
                <div className="lab-product-bars"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        )}
        {mode === "platform" && (
          <div className={`lab-platform ${theme === "dark" ? "lab-platform-dark" : ""}`}>
            <div className="lab-platform-top"><strong>FORMA®</strong><span>Objects for living</span><button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change theme <MoveUpRight size={13} /></button></div>
            <div className="lab-platform-visual"><div className="lab-object"><i /><i /><i /></div><span>FORM / 001</span></div>
            <div className="lab-platform-foot"><div><span>THE COLLECTION — 01</span><h3>Made to<br /><em>be kept.</em></h3></div><span className="lab-platform-round"><ArrowUpRight size={22} /></span></div>
          </div>
        )}
      </div>
      <div className="lab-frame-bottom"><span><Play size={10} fill="currentColor" /> DEMONSTRATION WITH SAMPLE CONTENT</span><span>01 — 03</span></div>
    </div>
  );
}

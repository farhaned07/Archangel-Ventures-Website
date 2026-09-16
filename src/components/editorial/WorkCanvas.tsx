"use client";

import { useState } from "react";
import { SectionLabel } from "./Elements";

const stages = [
  {
    name: "Find",
    title: "We begin with the work.",
    copy: "Follow the documents, decisions and handoffs. Establish what the current process costs before choosing any technology.",
    result: "A visible baseline",
    labels: ["Inbox", "Documents", "Re-entry", "Approval", "Reporting"],
  },
  {
    name: "Simplify",
    title: "Simplify before build.",
    copy: "Remove duplicate handling. Define who decides, what information they need and where exceptions go.",
    result: "A clearer process",
    labels: ["Intake", "Information", "Decision", "Owner", "Outcome"],
  },
  {
    name: "Build",
    title: "Build what proves value.",
    copy: "Connect the useful steps. Add AI where it earns its place, with human review, permissions and a clear path for exceptions.",
    result: "A working system",
    labels: ["Capture", "Extract", "Validate", "Review", "Deliver"],
  },
  {
    name: "Measure",
    title: "Measure what changes.",
    copy: "Compare the result with the baseline. Track time, cost, quality and adoption. Use that evidence to decide what to improve or scale.",
    result: "Evidence for the next move",
    labels: ["Baseline", "Time", "Quality", "Adoption", "Result"],
  },
];
const positions = [
  [80, 180],
  [240, 310],
  [360, 120],
  [510, 280],
  [710, 160],
];

export function WorkCanvas() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <section className="method-section" id="how">
      <div className="page-shell">
        <div className="method-intro">
          <div>
            <SectionLabel number="01">The Archangel method</SectionLabel>
            <h2>
              AI is everywhere.
              <br />
              <span>Value is not.</span>
            </h2>
          </div>
          <p>
            More tools do not automatically make a better business. The value
            comes from changing how the work gets done.
          </p>
        </div>
        <div className="method-stage">
          <div
            className="method-controls"
            role="tablist"
            aria-label="Transformation stages"
          >
            {stages.map((s, i) => (
              <button
                key={s.name}
                id={`method-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls="method-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowRight") next = (i + 1) % 4;
                  else if (e.key === "ArrowLeft") next = (i + 3) % 4;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = 3;
                  else return;
                  e.preventDefault();
                  setActive(next);
                  document.getElementById(`method-tab-${next}`)?.focus();
                }}
              >
                <span>0{i + 1}</span>
                {s.name}
              </button>
            ))}
          </div>
          <div
            id="method-panel"
            role="tabpanel"
            aria-labelledby={`method-tab-${active}`}
            tabIndex={0}
            className="method-panel"
          >
            <div className="method-description">
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
              <div className="method-result">
                <span>Output</span>
                {stage.result}
              </div>
            </div>
            <div className="process-visual">
              <svg
                viewBox="0 0 800 430"
                role="img"
                aria-label={`${stage.name}: ${stage.labels.join(" to ")}. ${stage.result}.`}
              >
                <defs>
                  <pattern
                    id="process-dots"
                    width="28"
                    height="28"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1" cy="1" r="1" fill="#414746" />
                  </pattern>
                </defs>
                <rect
                  width="800"
                  height="430"
                  fill="url(#process-dots)"
                  opacity=".5"
                />
                <g className={`process-paths stage-${active}`}>
                  {[0, 1, 2, 3].map((i) => {
                    const start =
                      active === 0 ? positions[i] : [80 + i * 160, 215];
                    const end =
                      active === 0 ? positions[i + 1] : [240 + i * 160, 215];
                    return (
                      <path
                        key={i}
                        d={`M${start[0]},${start[1]} C${start[0] + 85},${active === 0 ? start[1] - 100 : 215} ${end[0] - 85},${active === 0 ? end[1] + 100 : 215} ${end[0]},${end[1]}`}
                        fill="none"
                        stroke={active >= 2 ? "#c6d6cb" : "#727b76"}
                        strokeWidth={active >= 2 ? 2 : 1.5}
                        strokeDasharray={active === 0 ? "5 7" : undefined}
                      />
                    );
                  })}
                  {active === 0 && (
                    <path
                      d="M80 180 Q420 420 710 160 M240 310 Q270 20 510 280"
                      fill="none"
                      stroke="#606660"
                      strokeDasharray="3 8"
                    />
                  )}
                </g>
                {stage.labels.map((label, i) => {
                  const [x, y] =
                    active === 0 ? positions[i] : [80 + i * 160, 215];
                  return (
                    <g
                      key={i}
                      className="process-node"
                      style={{ transform: `translate(${x}px,${y}px)` }}
                    >
                      <circle
                        r="28"
                        fill="#141a17"
                        stroke={i === 4 ? "#d5dfd8" : "#7b847e"}
                      />
                      <text
                        y="5"
                        textAnchor="middle"
                        fill="#f5f6f4"
                        fontSize="14"
                        fontFamily="inherit"
                      >
                        0{i + 1}
                      </text>
                      <text
                        y="58"
                        textAnchor="middle"
                        fill="#d1d7d2"
                        fontSize="16"
                        fontFamily="inherit"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
                <text
                  x="35"
                  y="395"
                  fill="#adb6ae"
                  fontSize="13"
                  fontFamily="inherit"
                >
                  {active === 0 ? "FRAGMENTED WORK" : "A CONTROLLED FLOW"}
                </text>
              </svg>
              <p className="visual-caption">
                Illustrative workflow · the process is designed around your
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, ChevronDown, FileText, Globe2, Mic, ShieldCheck } from "lucide-react";

const currentFlow = [
  { title: "Inbox", meta: "14 requests", status: "queue" },
  { title: "Manual copy", meta: "CRM → sheet", status: "friction" },
  { title: "Manager review", meta: "2.4h wait", status: "friction" },
  { title: "Re-entry", meta: "ERP", status: "friction" },
  { title: "Invoice", meta: "ready", status: "queue" },
];

const redesignedFlow = [
  { title: "Capture", meta: "email + portal", status: "good" },
  { title: "Interpret", meta: "extract + validate", status: "good" },
  { title: "Human review", meta: "exceptions only", status: "review" },
  { title: "System handoff", meta: "ERP + CRM", status: "good" },
];

export function TransformationWorkbench() {
  const [mode, setMode] = useState<"current" | "redesigned">("redesigned");
  const flow = mode === "current" ? currentFlow : redesignedFlow;

  return (
    <div className="artifact-shell artifact-workbench">
      <div className="artifact-frame-head">
        <span>OPERATING MODEL / WORKBENCH</span>
        <div className="artifact-segment" role="tablist" aria-label="Operating model view">
          <button
            type="button"
            className={mode === "current" ? "active" : ""}
            aria-selected={mode === "current"}
            onClick={() => setMode("current")}
          >
            Current
          </button>
          <button
            type="button"
            className={mode === "redesigned" ? "active" : ""}
            aria-selected={mode === "redesigned"}
            onClick={() => setMode("redesigned")}
          >
            Redesigned
          </button>
        </div>
      </div>

      <div className="artifact-workbench-body">
        <div className="artifact-workbench-meta">
          <div>
            <span>WORKFLOW</span>
            <strong>Order → cash</strong>
          </div>
          <div>
            <span>OWNER</span>
            <strong>Operations</strong>
          </div>
          <div>
            <span>STATUS</span>
            <strong>{mode === "current" ? "Fragmented" : "Controlled"}</strong>
          </div>
        </div>

        <div className={`artifact-flow ${mode === "current" ? "is-current" : "is-redesigned"}`}>
          {flow.map((node, index) => (
            <div className="artifact-flow-step" key={node.title}>
              <div className={`artifact-flow-node status-${node.status}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <strong>{node.title}</strong>
              <small>{node.meta}</small>
              {index < flow.length - 1 && <i className="artifact-flow-link" />}
            </div>
          ))}
        </div>

        <div className="artifact-workbench-bottom">
          <div>
            <span>HANDOFFS</span>
            <strong>{mode === "current" ? "9" : "4"}</strong>
          </div>
          <div>
            <span>MANUAL TOUCHES</span>
            <strong>{mode === "current" ? "7" : "2"}</strong>
          </div>
          <div>
            <span>EXCEPTION ROUTE</span>
            <strong>{mode === "current" ? "Unclear" : "Visible"}</strong>
          </div>
          <div>
            <span>MEASUREMENT</span>
            <strong>{mode === "current" ? "None" : "Baseline attached"}</strong>
          </div>
        </div>
      </div>

      <div className="artifact-caption">
        Illustrative operating model · demonstrates the type of workflow redesign Archangel builds around
      </div>
    </div>
  );
}

export function HannaProductSurface() {
  const [recording, setRecording] = useState(false);
  const [language, setLanguage] = useState("English");

  const bars = useMemo(
    () => Array.from({ length: 42 }, (_, i) => 8 + Math.abs(Math.sin(i * 1.31) * Math.cos(i * 0.37)) * 30),
    []
  );

  return (
    <div className="artifact-shell artifact-product">
      <div className="artifact-frame-head">
        <span>OWN PRODUCT / HANNA / IN DEVELOPMENT</span>
        <span className="artifact-product-state"><i /> PRODUCT BUILD</span>
      </div>

      <div className="artifact-product-app">
        <aside className="artifact-product-sidebar">
          <div className="artifact-product-mark">h.</div>
          <button className="active" type="button"><Mic size={15} /></button>
          <button type="button"><FileText size={15} /></button>
          <button type="button"><Globe2 size={15} /></button>
          <button type="button"><ShieldCheck size={15} /></button>
        </aside>

        <div className="artifact-product-main">
          <div className="artifact-product-top">
            <div>
              <span>CONSULTATION / 0027</span>
              <h3>Patient conversation</h3>
            </div>
            <button className="artifact-language" type="button" onClick={() => setLanguage(language === "English" ? "ไทย" : "English")}>
              {language}
              <ChevronDown size={13} />
            </button>
          </div>

          <div className={`artifact-recorder ${recording ? "is-recording" : ""}`}>
            <button
              type="button"
              className="artifact-record-button"
              onClick={() => setRecording(!recording)}
              aria-label={recording ? "Stop sample recording" : "Start sample recording"}
            >
              <span />
            </button>

            <div className="artifact-wave">
              {bars.map((height, index) => (
                <i key={index} style={{ height: `${recording ? height : Math.max(4, height * .24)}px` }} />
              ))}
            </div>

            <div className="artifact-record-meta">
              <strong>{recording ? "Listening…" : "Ready"}</strong>
              <span>{recording ? "00:18" : "Tap to start"}</span>
            </div>
          </div>

          <div className="artifact-clinical-grid">
            <section>
              <div className="artifact-card-head">
                <span>CLINICAL NOTE</span>
                <span>Draft</span>
              </div>
              <div className="artifact-note-lines">
                <strong>Assessment</strong>
                <p>Persistent cough for 4 days. No shortness of breath reported.</p>
                <strong>Plan</strong>
                <p>Supportive treatment. Review if symptoms worsen or persist.</p>
              </div>
            </section>

            <section>
              <div className="artifact-card-head">
                <span>PATIENT CARE PLAN</span>
                <span>{language}</span>
              </div>
              <div className="artifact-care-list">
                <div><Check size={13} /><span>Medication instructions prepared</span></div>
                <div><Check size={13} /><span>Warning signs translated</span></div>
                <div><Check size={13} /><span>Follow-up guidance included</span></div>
              </div>
              <button type="button" className="artifact-review">
                Clinician review
                <ArrowRight size={14} />
              </button>
            </section>
          </div>
        </div>
      </div>

      <div className="artifact-caption">
        Product interface study · sample content only · clinician review before patient use
      </div>
    </div>
  );
}

const stackRows = [
  ["INPUTS", ["Email", "Documents", "CRM", "ERP", "Portal"]],
  ["ORCHESTRATION", ["Capture", "Validation", "Business rules", "Routing"]],
  ["INTELLIGENCE", ["Extraction", "Classification", "Generation", "Decision support"]],
  ["CONTROL", ["Identity", "Human review", "Audit trail", "Permissions"]],
  ["OUTPUTS", ["System update", "Approved action", "Report", "Customer response"]],
];

export function SystemArchitectureMap() {
  return (
    <div className="artifact-shell artifact-architecture">
      <div className="artifact-frame-head">
        <span>SYSTEM ARCHITECTURE / REFERENCE MODEL</span>
        <span>VENDOR-NEUTRAL</span>
      </div>

      <div className="artifact-architecture-body">
        <div className="artifact-architecture-rail">
          <span>01</span>
          <i />
          <span>05</span>
        </div>

        <div className="artifact-stack">
          {stackRows.map(([label, items], rowIndex) => (
            <div className="artifact-stack-row" key={label as string}>
              <span className="artifact-stack-label">{label}</span>
              <div className="artifact-stack-items">
                {(items as string[]).map((item, index) => (
                  <div className={`artifact-stack-chip row-${rowIndex}`} key={item}>
                    <span>{item}</span>
                    {(rowIndex === 1 || rowIndex === 2) && index === 1 && <i className="artifact-pulse-dot" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="artifact-architecture-meta">
          <div>
            <span>DESIGN PRINCIPLE</span>
            <strong>Human judgement stays explicit.</strong>
          </div>
          <div>
            <span>SECURITY</span>
            <strong>Controls live across the system, not at the edge.</strong>
          </div>
          <div>
            <span>MODEL</span>
            <strong>Replaceable component, not the operating system.</strong>
          </div>
        </aside>
      </div>

      <div className="artifact-caption">
        Reference architecture · actual implementation depends on data, security and system constraints
      </div>
    </div>
  );
}

export function DeliveryTrace() {
  const stages = [
    ["DISCOVERY", "Workflow mapped", "Complete"],
    ["BUILD", "Integration + interface", "Active"],
    ["TEST", "Exceptions + review", "Queued"],
    ["DEPLOY", "Controlled release", "Queued"],
  ];

  return (
    <div className="artifact-shell artifact-delivery">
      <div className="artifact-frame-head">
        <span>DELIVERY TRACE / PROJECT CONTROL</span>
        <span className="artifact-product-state"><i /> ACTIVE</span>
      </div>

      <div className="artifact-delivery-body">
        <div className="artifact-delivery-top">
          <div>
            <span>PROJECT</span>
            <strong>Operations / AI-assisted intake</strong>
          </div>
          <div>
            <span>ENVIRONMENT</span>
            <strong>Staging</strong>
          </div>
          <div>
            <span>RISK STATE</span>
            <strong>Controlled</strong>
          </div>
        </div>

        <div className="artifact-delivery-track">
          {stages.map(([name, detail, status], index) => (
            <div className={`artifact-delivery-step status-${status.toLowerCase()}`} key={name}>
              <div className="artifact-delivery-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <span>{name}</span>
                <strong>{detail}</strong>
              </div>
              <small>{status}</small>
            </div>
          ))}
        </div>

        <div className="artifact-delivery-log">
          <span>14:08:22</span><strong>validation.rule.customer_id</strong><em>passed</em>
          <span>14:08:23</span><strong>review.queue.exception_004</strong><em>created</em>
          <span>14:08:26</span><strong>audit.event</strong><em>written</em>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, CheckCheck, FileText, RotateCcw, ShieldCheck } from "lucide-react";

type Step = 0 | 1 | 2;

const steps = [
  { label: "Incoming", meta: "Document received" },
  { label: "Review", meta: "Check flagged" },
  { label: "Ready", meta: "Human confirmed" },
] as const;

export function WorkflowDemo() {
  const [step, setStep] = useState<Step>(0);

  function advance() {
    setStep((current) => (current === 0 ? 1 : current === 1 ? 2 : 0));
  }

  return (
    <div className="ex-workflow" aria-label="Interactive illustration of a human-reviewed document workflow">
      <div className="ex-workflow-rail">
        <div className="ex-workflow-brand"><span className="ex-workflow-mark">A<span>／</span></span><span>WORKFLOW STUDY<br /><small>ARCHANGEL / 001</small></span></div>
        <div className="ex-workflow-rail-caption">A useful system does more than generate an answer. It makes the next decision clear.</div>
        <div className="ex-workflow-steps" aria-label="Sample workflow stages">
          {steps.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`ex-workflow-step ${step === index ? "is-current" : ""} ${step > index ? "is-complete" : ""}`}
              onClick={() => setStep(index as Step)}
              aria-current={step === index ? "step" : undefined}
            >
              <span className="ex-workflow-step-no">{step > index ? <Check size={14} /> : `0${index + 1}`}</span>
              <span><strong>{item.label}</strong><small>{item.meta}</small></span>
              {step === index ? <ArrowRight size={15} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
        <span className="ex-workflow-side-note">SIMULATED INTERFACE · NO LIVE AI OR EXTERNAL DATA</span>
      </div>

      <div className="ex-workflow-main">
        <div className="ex-workflow-toolbar"><span><span className="ex-workflow-pulse" /> OPERATIONS / DOCUMENT REVIEW</span><span>DEMO · 01 / 03</span></div>
        <div className="ex-workflow-content" aria-live="polite" aria-atomic="true">
          <div className="ex-workflow-intro">
            <p className="ex-eyebrow">{step === 0 ? "01 / INCOMING" : step === 1 ? "02 / HUMAN REVIEW" : "03 / READY FOR HANDOFF"}</p>
            <h3>{step === 0 ? "A document comes in." : step === 1 ? "The exception is clear." : "A decision, ready to use."}</h3>
            <p>{step === 0 ? "Start with a supplier invoice. See how the sample workflow flags a mismatch before anything moves forward." : step === 1 ? "The sample check has flagged a difference. A person reviews it before the record is prepared." : "The sample record is marked as reviewed. In a real implementation, this is where an agreed system handoff could happen."}</p>
          </div>

          <div className="ex-document" key={step}>
            <div className="ex-document-heading">
              <span className="ex-document-icon"><FileText size={19} strokeWidth={1.65} /></span>
              <span><strong>Supplier invoice</strong><small>INV–0284 · Sample data</small></span>
              <span className={`ex-document-status ${step === 2 ? "is-ready" : ""}`}>{step === 0 ? "RECEIVED" : step === 1 ? "NEEDS REVIEW" : "REVIEWED"}</span>
            </div>
            <div className="ex-document-line"><span>Vendor</span><strong>Northline Supply Co.</strong></div>
            <div className="ex-document-line"><span>Invoice total</span><strong>฿24,800</strong></div>
            <div className="ex-document-line"><span>Purchase order</span><strong>฿24,500</strong></div>
            <div className={`ex-document-result ${step === 2 ? "is-ready" : ""}`}>
              <span className="ex-document-result-icon">{step === 2 ? <CheckCheck size={18} /> : step === 1 ? <ShieldCheck size={18} /> : <ArrowDownRight size={18} />}</span>
              <span><strong>{step === 0 ? "Run the sample check" : step === 1 ? "฿300 difference found" : "Human review recorded"}</strong><small>{step === 0 ? "Nothing is approved automatically." : step === 1 ? "Confirmation is required to proceed." : "Illustrative result — no actual record sent."}</small></span>
            </div>
          </div>
        </div>
        <div className="ex-workflow-actions">
          <span>{step === 0 ? "01 / SEE THE CHECK" : step === 1 ? "02 / KEEP A PERSON IN CONTROL" : "03 / SEE THE COMPLETE LOOP"}</span>
          <button type="button" onClick={advance} className="ex-workflow-next">
            {step === 0 ? "Run sample check" : step === 1 ? "Confirm sample" : "Run it again"}
            {step === 2 ? <RotateCcw size={17} /> : <ArrowRight size={17} />}
          </button>
        </div>
      </div>
    </div>
  );
}

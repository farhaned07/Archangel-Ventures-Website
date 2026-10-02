import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import { SystemArchitectureMap, TransformationWorkbench } from "@/components/technology/TechnologyArtifacts";

export const metadata: Metadata = {
  title: "AI Transformation | ARCHANGEL",
  description:
    "Archangel redesigns expensive operational work, builds AI-enabled systems around it, and measures the resulting business impact.",
  alternates: { canonical: "/ai-transformation" },
};

const process = [
  ["01", "Find the expensive work", "Choose a process with enough cost, delay, manual effort, errors or operational friction to justify intervention."],
  ["02", "Establish the baseline", "Measure the current process before changing it. Time, throughput, accuracy, cost, quality or another agreed operating metric."],
  ["03", "Redesign the operation", "Define what the system should do, what people should decide, where exceptions go and how controls remain visible."],
  ["04", "Build the system", "Engineer the AI-enabled workflow, integration or application and put it in front of the people who actually use it."],
  ["05", "Measure the result", "Compare the new process against the baseline and decide whether it should be improved, expanded or stopped."],
];

const suitable = [
  ["Documents", "High-volume review, extraction, classification, checking and routing."],
  ["Knowledge work", "Research, drafting, synthesis and decision support around controlled information."],
  ["Operations", "Repetitive handoffs, approvals, reconciliations and exception management."],
  ["Customer work", "Service, intake, qualification and response processes where context matters."],
];

export default function AITransformationPage() {
  return (
    <main id="main-content" className="aa-inner">
      <section className="aa-inner-hero">
        <div className="page-shell aa-inner-hero-grid">
          <div className="aa-inner-hero-copy">
            <div className="aa-section-kicker">AI TRANSFORMATION / ARCHANGEL</div>
            <h1>
              Make AI
              <br />
              <span>useful at work.</span>
            </h1>
            <p className="aa-inner-hero-deck">
              We start with costly work, not AI theatre. Redesign the process,
              build the system, then measure whether the business is actually better.
            </p>
            <div className="aa-inner-hero-actions">
              <Link href={bookingHref} className="aa-button aa-button-dark">
                Discuss a process
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="aa-inner-material aa-suede">
            <div className="aa-micro">TRANSFORMATION MODEL / 01</div>
            <div>
              <h2>Work → system → evidence.</h2>
              <p>
                The objective is not employee AI adoption. The objective is a
                better operating result that can be observed and defended.
              </p>
            </div>
            <div className="aa-inner-material-foot">
              <span>NO INVENTED ROI</span>
              <span>HUMAN CONTROL</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="tech-evidence">
        <div className="page-shell">
          <header className="tech-evidence-head">
            <div className="aa-section-kicker">OPERATING MODEL / INTERACTIVE STUDY</div>
            <h2>
              Redesign the work
              <br />
              <span>before automating it.</span>
            </h2>
          </header>
          <TransformationWorkbench />
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-dark">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">THE METHOD / 01—05</div>
            <h2>
              Change the work.
              <br />
              <span>Then add the intelligence.</span>
            </h2>
          </header>

          <div className="aa-process-track">
            {process.map(([number, title, copy]) => (
              <article className="aa-process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">WHERE IT FITS</div>
            <h2>
              Look for work with
              <br />
              <span>real economic weight.</span>
            </h2>
          </header>

          <div className="aa-index-list">
            {suitable.map(([title, copy], index) => (
              <article className="aa-index-item" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>USE CASE</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-stone">
        <div className="page-shell aa-two-col">
          <h2>
            Start with one
            <br />
            <span>bounded problem.</span>
          </h2>
          <div className="aa-two-col-copy">
            <h3>First conversation</h3>
            <p>
              Fifteen minutes to understand the process, its owner, the business
              consequence and whether there is a credible implementation path.
            </p>
            <h3>Discovery and implementation</h3>
            <p>
              If there is a fit, we scope the required discovery and first working
              milestone around the actual complexity. We do not publish a one-size-fits-all
              implementation price for materially different operating problems.
            </p>
            <h3>Production</h3>
            <p>
              Security, integrations, permissions, training, infrastructure and ongoing
              support are defined against the production environment before commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-dark-visual">
        <div className="page-shell">
          <header className="tech-dark-visual-head">
            <div className="aa-section-kicker">REFERENCE ARCHITECTURE</div>
            <h2>
              AI sits inside
              <br />
              <span>a controlled system.</span>
            </h2>
          </header>
          <SystemArchitectureMap />
        </div>
      </section>

      <section className="aa-cta aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">START WITH THE WORK</div>
          <h2>
            Show us what costs
            <br />
            <span>too much to operate.</span>
          </h2>
          <div className="aa-cta-row">
            <p>
              Bring the process owner and a clear description of the work. We will
              establish whether there is a serious transformation opportunity.
            </p>
            <Link href={bookingHref} className="aa-button aa-button-dark">
              Book a 15-minute call
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

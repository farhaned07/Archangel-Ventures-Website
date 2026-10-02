import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | ARCHANGEL",
  description:
    "Selected Archangel product work, technical studies and live digital systems. Clearly labelled by what exists today.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="aa-inner">
      <section className="aa-inner-hero">
        <div className="page-shell aa-inner-hero-grid">
          <div className="aa-inner-hero-copy">
            <div className="aa-section-kicker">WORK / ARCHANGEL</div>
            <h1>
              Evidence over
              <br />
              <span>technology theatre.</span>
            </h1>
            <p className="aa-inner-hero-deck">
              We show what exists and label it accurately: own products, internal
              engineering studies and live digital work.
            </p>
          </div>

          <aside className="aa-inner-material aa-suede">
            <div className="aa-micro">SELECTED WORK / 01—03</div>
            <div>
              <h2>Proof should be inspectable.</h2>
              <p>
                We do not turn concepts into fictional client outcomes. The
                distinction between product, study and deployment stays visible.
              </p>
            </div>
            <div className="aa-inner-material-foot">
              <span>PRODUCT</span>
              <span>SYSTEM</span>
              <span>DIGITAL</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell">
          <div className="aa-work-grid">
            <article className="aa-work-copy">
              <div className="aa-micro">01 / OWN PRODUCT / HEALTHCARE AI</div>
              <h3>Hanna.</h3>
              <p>
                An Archangel product in development exploring how a patient
                conversation can become a structured clinical note and a
                multilingual care plan, with clinician review retained.
              </p>
              <div className="aa-inner-hero-actions">
                <a
                  href="https://www.hanna.care"
                  target="_blank"
                  rel="noreferrer"
                  className="aa-button aa-button-light"
                >
                  Explore Hanna
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <small>
                Own product in development. Not presented as a completed hospital
                deployment or validated clinical outcome.
              </small>
            </article>

            <div className="aa-work-visual aa-suede">
              <div className="aa-micro">CLINICAL INFORMATION FLOW / STUDY</div>
              <div className="aa-work-visual-grid">
                <div><span>01</span><strong>Conversation</strong></div>
                <div><span>02</span><strong>Structured note</strong></div>
                <div><span>03</span><strong>Clinician review</strong></div>
                <div><span>04</span><strong>Patient care plan</strong></div>
              </div>
              <div className="aa-inner-material-foot">
                <span>VOICE → STRUCTURE → REVIEW</span>
                <span>ARCHANGEL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-dark">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">02 / INTERNAL ENGINEERING STUDY</div>
            <h2>
              The handoff is
              <br />
              <span>where systems fail.</span>
            </h2>
          </header>

          <div className="aa-process-track">
            <article className="aa-process-step">
              <span>01</span>
              <h3>Capture</h3>
              <p>Bring documents, events or requests into a controlled intake.</p>
            </article>
            <article className="aa-process-step">
              <span>02</span>
              <h3>Interpret</h3>
              <p>Structure information, apply rules and identify uncertainty.</p>
            </article>
            <article className="aa-process-step">
              <span>03</span>
              <h3>Review</h3>
              <p>Route judgement, exceptions and approvals to the right person.</p>
            </article>
            <article className="aa-process-step">
              <span>04</span>
              <h3>Connect</h3>
              <p>Pass approved output into the system that owns the next action.</p>
            </article>
          </div>

          <p style={{ maxWidth: 680, marginTop: "2rem", color: "#aaa7a0", lineHeight: 1.65 }}>
            This is an internal architecture study demonstrating Archangel's
            approach to controlled workflow design. It is not presented as a
            deployed customer case study.
          </p>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell aa-two-col">
          <div>
            <div className="aa-section-kicker">03 / LIVE DIGITAL SYSTEM</div>
            <h2 style={{ marginTop: "2rem" }}>
              The website
              <br />
              <span>is part of the proof.</span>
            </h2>
          </div>
          <div className="aa-two-col-copy">
            <p>
              Archangel's website is a live example of our information design,
              interface engineering, responsive implementation, search
              architecture and production delivery.
            </p>
            <p>
              It is intentionally restrained: typography, structure, material
              texture and technical information carry the identity rather than
              decorative "AI" effects.
            </p>
            <Link href="/services" className="aa-button aa-button-light">
              Explore capabilities
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="aa-cta aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">YOUR WORK / NEXT</div>
          <h2>
            The next proof
            <br />
            <span>should be yours.</span>
          </h2>
          <div className="aa-cta-row">
            <p>
              Bring a real operating problem or system that needs to exist. We
              will define the smallest useful piece of evidence to build first.
            </p>
            <Link href={bookingHref} className="aa-button aa-button-dark">
              Start a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

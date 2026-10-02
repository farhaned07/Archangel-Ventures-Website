import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import {
  DeliveryTrace,
  HannaProductSurface,
  SystemArchitectureMap,
  TransformationWorkbench,
} from "@/components/technology/TechnologyArtifacts";

export const metadata: Metadata = {
  title: "ARCHANGEL | AI Transformation — Bangkok",
  description:
    "Make AI useful at work. Archangel redesigns expensive operational work, builds AI-enabled systems, and measures business impact.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ARCHANGEL — Make AI useful at work.",
    description:
      "AI transformation and technology systems for serious organisations. Bangkok, Thailand.",
    url: "/",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ARCHANGEL — AI Transformation",
      },
    ],
  },
};

const capabilities = [
  {
    number: "01",
    title: "AI transformation",
    copy:
      "Redesign operational work around AI, automation and human judgement — then build the system that makes the new process real.",
    href: "/ai-transformation",
  },
  {
    number: "02",
    title: "Enterprise systems",
    copy:
      "Custom software, internal tools, integrations and decision systems built around the organisation rather than a generic product template.",
    href: "/services",
  },
  {
    number: "03",
    title: "Digital infrastructure",
    copy:
      "Platforms, portals and interfaces engineered for institutional use where information architecture, reliability and credibility carry real weight.",
    href: "/services",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="tech-home">
      <section className="tech-hero">
        <div className="page-shell tech-hero-shell">
          <div className="tech-hero-main">
            <div className="tech-hero-copy">
              <div className="tech-kicker">AI TRANSFORMATION / BANGKOK</div>

              <h1>
                Make AI
                <span>useful at work.</span>
              </h1>

              <p>
                Archangel works with organisations to identify expensive work,
                redesign how it operates, build AI-enabled systems, and measure
                the resulting business impact.
              </p>

              <div className="tech-hero-actions">
                <Link href={bookingHref} className="tech-button-primary">
                  Start a conversation
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/work" className="tech-button-secondary">
                  See what we build
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="tech-hero-system" aria-label="Archangel AI operating system illustration">
              <div className="tech-console-head">
                <span>ARCHANGEL / OPERATING MODEL</span>
                <span className="tech-live"><i /> SYSTEM ACTIVE</span>
              </div>

              <div className="tech-console-body">
                <aside className="tech-console-nav" aria-hidden="true">
                  <span>System</span>
                  <ul>
                    <li className="active">Workflow</li>
                    <li>Inputs</li>
                    <li>Rules</li>
                    <li>Review</li>
                    <li>Outputs</li>
                    <li>Measurement</li>
                  </ul>
                </aside>

                <div className="tech-console-stage">
                  <div className="tech-stage-title">
                    <h2>Claims processing</h2>
                    <span>ILLUSTRATIVE SYSTEM MODEL</span>
                  </div>

                  <div className="tech-flow">
                    <div className="tech-node">
                      <div className="tech-node-ring" />
                      <strong>Capture</strong>
                      <small>Documents + events</small>
                    </div>
                    <div className="tech-node">
                      <div className="tech-node-ring" />
                      <strong>Interpret</strong>
                      <small>Structure + classify</small>
                    </div>
                    <div className="tech-node">
                      <div className="tech-node-ring" />
                      <strong>Review</strong>
                      <small>Rules + exceptions</small>
                    </div>
                    <div className="tech-node">
                      <div className="tech-node-ring" />
                      <strong>Act</strong>
                      <small>Approved handoff</small>
                    </div>
                  </div>

                  <div className="tech-metrics">
                    <div className="tech-metric">
                      <span>Human review</span>
                      <strong>Required at exceptions</strong>
                    </div>
                    <div className="tech-metric">
                      <span>System state</span>
                      <strong>Controlled</strong>
                    </div>
                    <div className="tech-metric">
                      <span>Measurement</span>
                      <strong>Baseline → outcome</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tech-console-foot">
                <span>Technology follows the operating problem.</span>
                <span>AA / SYSTEM 01</span>
              </div>
            </div>
          </div>

          <div className="tech-hero-strip">
            <div><span>01</span><strong>Identify</strong></div>
            <div><span>02</span><strong>Redesign</strong></div>
            <div><span>03</span><strong>Build</strong></div>
            <div><span>04</span><strong>Measure</strong></div>
          </div>
        </div>
      </section>

      <section className="tech-evidence">
        <div className="page-shell">
          <header className="tech-evidence-head">
            <div className="aa-section-kicker">OPERATING CHANGE / NOT AI THEATRE</div>
            <h2>
              See the work
              <br />
              <span>before and after.</span>
            </h2>
          </header>

          <TransformationWorkbench />
        </div>
      </section>

      <section className="tech-dark-visual">
        <div className="page-shell">
          <header className="tech-dark-visual-head">
            <div className="aa-section-kicker">PRODUCT PROOF / BUILT BY ARCHANGEL</div>
            <h2>
              We build products,
              <br />
              <span>not presentation slides.</span>
            </h2>
          </header>

          <div className="tech-evidence-grid">
            <div className="tech-evidence-copy">
              <div className="aa-section-kicker">HANNA / HEALTHCARE AI</div>
              <h3>
                Conversation in.
                <br />
                <span>Useful care out.</span>
              </h3>
              <p>
                Hanna is an Archangel product in development. It explores how a
                consultation can become structured clinical documentation and a
                multilingual patient care plan while keeping clinician review
                explicit.
              </p>
              <a
                href="https://www.hanna.care"
                target="_blank"
                rel="noreferrer"
                className="aa-button aa-button-dark"
              >
                Explore Hanna
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <HannaProductSurface />
          </div>
        </div>
      </section>

      <section className="tech-evidence">
        <div className="page-shell">
          <header className="tech-evidence-head">
            <div className="aa-section-kicker">SYSTEM DESIGN / CONTROLLED BY DEFAULT</div>
            <h2>
              The model is one component.
              <br />
              <span>The system is the real product.</span>
            </h2>
          </header>

          <SystemArchitectureMap />
        </div>
      </section>

      <section className="tech-capabilities">
        <div className="page-shell">
          <header className="tech-capabilities-head">
            <div className="aa-section-kicker">WHAT ARCHANGEL BUILDS</div>
            <h2>
              Serious technology
              <br />
              <span>for serious operations.</span>
            </h2>
          </header>

          <div className="tech-capability-list">
            {capabilities.map((item) => (
              <article className="tech-capability" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={item.href}>
                  Explore
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-evidence">
        <div className="page-shell">
          <header className="tech-evidence-head">
            <div className="aa-section-kicker">DELIVERY / BUILD TRACE</div>
            <h2>
              Serious systems need
              <br />
              <span>visible delivery control.</span>
            </h2>
          </header>

          <div className="tech-evidence-grid">
            <DeliveryTrace />

            <div className="tech-evidence-copy">
              <div className="aa-section-kicker">ENGINEERING DISCIPLINE</div>
              <h3>
                Build.
                <br />
                <span>Test. Control. Deploy.</span>
              </h3>
              <p>
                We treat AI implementation as software delivery: defined
                environments, visible exceptions, audit events, human review,
                measurable acceptance criteria and a controlled path to
                production.
              </p>
              <Link href="/ai-transformation" className="aa-button aa-button-dark">
                See the implementation model
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-proof">
        <div className="page-shell tech-proof-grid">
          <div className="tech-proof-copy">
            <div className="aa-section-kicker">MEASURE WHAT CHANGED</div>
            <h2>
              Useful AI has
              <br />
              <span>an operating result.</span>
            </h2>
            <p>
              Every implementation begins with a baseline. We decide what matters
              before the build: time, cost, accuracy, throughput, quality or
              another agreed business metric. The system then has something real
              to prove.
            </p>
          </div>

          <div className="tech-proof-panel">
            <div className="tech-console-head" style={{ padding: 0 }}>
              <span>MEASUREMENT FRAMEWORK</span>
              <span>ILLUSTRATIVE</span>
            </div>

            <div className="tech-proof-bars">
              <div className="tech-proof-bar">
                <span>Cycle time</span>
                <div className="tech-proof-track"><i /></div>
                <strong>↓</strong>
              </div>
              <div className="tech-proof-bar">
                <span>Manual work</span>
                <div className="tech-proof-track"><i /></div>
                <strong>↓</strong>
              </div>
              <div className="tech-proof-bar">
                <span>Exceptions</span>
                <div className="tech-proof-track"><i /></div>
                <strong>↓</strong>
              </div>
              <div className="tech-proof-bar">
                <span>Throughput</span>
                <div className="tech-proof-track"><i /></div>
                <strong>↑</strong>
              </div>
            </div>

            <div className="tech-console-foot" style={{ padding: 0 }}>
              <span>BASELINE → SYSTEM → EVIDENCE</span>
              <span>NO INVENTED ROI</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-close aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">ARCHANGEL / BANGKOK</div>
          <h2>
            Bring us the
            <br />
            <span>expensive work.</span>
          </h2>

          <div className="tech-close-row">
            <p>
              Start with the process that costs too much time, money or attention.
              We will determine whether technology can materially change it.
            </p>
            <Link href={bookingHref} className="aa-button aa-button-dark">
              Book a 15-minute call
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

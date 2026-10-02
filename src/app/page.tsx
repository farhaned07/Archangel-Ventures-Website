import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "ARCHANGEL | AI Transformation — Bangkok",
  description:
    "Make AI useful at work. Archangel redesigns expensive operational work, builds AI-enabled systems, and measures the resulting business impact.",
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
  ["01", "AI transformation", "Redesign expensive work, then build the intelligence layer around the new operating model."],
  ["02", "Systems engineering", "Custom software, internal tools, integrations and workflow systems built for production."],
  ["03", "Digital infrastructure", "Institutional platforms, portals and interfaces where reliability and clarity matter."],
];

const systemLayers = [
  ["04", "Interface", "Operators / customers / decision makers"],
  ["03", "Intelligence", "Models / agents / deterministic rules"],
  ["02", "Knowledge", "Documents / data / business context"],
  ["01", "Infrastructure", "APIs / security / observability"],
];

export default function Home() {
  return (
    <main id="main-content" className="aa-tech-home">
      <section className="aa-tech-hero">
        <div className="page-shell aa-tech-hero-shell">
          <div className="aa-tech-hero-copy">
            <div className="aa-tech-kicker">
              <span>ARCHANGEL</span>
              <span>AI TRANSFORMATION</span>
              <span>BANGKOK / THAILAND</span>
            </div>

            <div className="aa-tech-copy-main">
              <p className="aa-tech-overline">AI TRANSFORMATION / TECHNOLOGY SYSTEMS</p>
              <h1>Make AI useful<br />at work.</h1>
              <p className="aa-tech-deck">
                We identify expensive work, redesign how it operates, build
                AI-enabled systems, and measure the resulting business impact.
              </p>

              <div className="aa-tech-actions">
                <Link href={bookingHref} className="aa-tech-primary">
                  Start a conversation
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/work" className="aa-tech-secondary">
                  Explore our work
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="aa-tech-hero-foot">
              <span>ARCHANGEL COMPANY LIMITED</span>
              <span>THAILAND BOI PROMOTED</span>
            </div>
          </div>

          <div className="aa-tech-console" aria-label="Archangel AI operating system illustration">
            <div className="aa-console-top">
              <div>
                <span className="aa-console-dot" />
                <span>ARCHANGEL SYSTEM / LIVE MODEL</span>
              </div>
              <span>AA-OPS / 01</span>
            </div>

            <div className="aa-console-grid">
              <div className="aa-console-sidebar">
                <span className="is-active">Overview</span>
                <span>Workflows</span>
                <span>Agents</span>
                <span>Knowledge</span>
                <span>Controls</span>
                <span>Telemetry</span>
              </div>

              <div className="aa-console-main">
                <div className="aa-console-heading">
                  <div>
                    <span>OPERATING SYSTEM</span>
                    <strong>AP / document operations</strong>
                  </div>
                  <span className="aa-console-status">SYSTEM ONLINE</span>
                </div>

                <div className="aa-console-flow">
                  <div className="aa-flow-node">
                    <span>01</span>
                    <strong>Intake</strong>
                    <small>Docs + events</small>
                  </div>
                  <i />
                  <div className="aa-flow-node">
                    <span>02</span>
                    <strong>Interpret</strong>
                    <small>Extract + reason</small>
                  </div>
                  <i />
                  <div className="aa-flow-node is-human">
                    <span>03</span>
                    <strong>Review</strong>
                    <small>Human control</small>
                  </div>
                  <i />
                  <div className="aa-flow-node">
                    <span>04</span>
                    <strong>Execute</strong>
                    <small>System handoff</small>
                  </div>
                </div>

                <div className="aa-console-metrics">
                  <div>
                    <span>WORK ITEMS</span>
                    <strong>1,284</strong>
                    <small>illustrative</small>
                  </div>
                  <div>
                    <span>AUTO-ROUTED</span>
                    <strong>71%</strong>
                    <small>illustrative</small>
                  </div>
                  <div>
                    <span>HUMAN REVIEW</span>
                    <strong>29%</strong>
                    <small>illustrative</small>
                  </div>
                </div>

                <div className="aa-console-chart">
                  <div className="aa-chart-head">
                    <span>PROCESS TELEMETRY</span>
                    <span>LAST 8 CYCLES</span>
                  </div>
                  <div className="aa-chart-bars" aria-hidden="true">
                    {[41,56,48,68,62,79,73,88].map((height,index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="aa-console-bottom">
              <span>ILLUSTRATIVE INTERFACE / NOT CLIENT DATA</span>
              <span>SECURITY · CONTROL · OBSERVABILITY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-tech-thesis">
        <div className="page-shell aa-tech-thesis-grid">
          <div className="aa-tech-section-label">THE THESIS / 01</div>
          <h2>
            AI is not the product.
            <br />
            <span>The operating system is.</span>
          </h2>
          <p>
            The value appears when models, software, data, controls and human
            judgement become one working system. Archangel designs and builds
            that system around the economics of the work.
          </p>
        </div>
      </section>

      <section className="aa-tech-stack">
        <div className="page-shell">
          <div className="aa-tech-section-head">
            <div className="aa-tech-section-label">SYSTEM ARCHITECTURE / 02</div>
            <h2>From infrastructure<br /><span>to the operator.</span></h2>
          </div>

          <div className="aa-stack-visual">
            {systemLayers.map(([index,title,copy]) => (
              <div className="aa-stack-layer" key={index}>
                <span>{index}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
                <div className="aa-stack-signal"><i /><i /><i /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-tech-capabilities">
        <div className="page-shell">
          <div className="aa-tech-section-head">
            <div className="aa-tech-section-label">CAPABILITIES / 03</div>
            <h2>Technology that carries<br /><span>operational weight.</span></h2>
          </div>

          <div className="aa-tech-cap-list">
            {capabilities.map(([index,title,copy]) => (
              <Link href={index === "01" ? "/ai-transformation" : "/services"} className="aa-tech-cap" key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-tech-evidence">
        <div className="page-shell aa-tech-evidence-grid">
          <div className="aa-tech-evidence-copy">
            <div className="aa-tech-section-label">EVIDENCE / 04</div>
            <h2>Measure what<br /><span>changed.</span></h2>
            <p>
              Every serious implementation starts with a baseline. We measure
              cycle time, cost, throughput, accuracy, quality or another agreed
              operating metric after the system is in use.
            </p>
            <Link href="/ai-transformation" className="aa-tech-secondary is-light">
              See the transformation model
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="aa-evidence-panel">
            <div className="aa-evidence-panel-head">
              <span>MEASUREMENT MODEL</span>
              <span>AA / IMPACT</span>
            </div>
            <div className="aa-evidence-radar">
              <div className="aa-radar-ring r1" />
              <div className="aa-radar-ring r2" />
              <div className="aa-radar-ring r3" />
              <div className="aa-radar-axis x" />
              <div className="aa-radar-axis y" />
              <div className="aa-radar-pulse" />
              <span className="aa-radar-label l1">TIME</span>
              <span className="aa-radar-label l2">QUALITY</span>
              <span className="aa-radar-label l3">COST</span>
              <span className="aa-radar-label l4">THROUGHPUT</span>
            </div>
            <div className="aa-evidence-panel-foot">
              <span>BASELINE</span>
              <span>IMPLEMENTATION</span>
              <span>EVIDENCE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-tech-close aa-suede">
        <div className="page-shell aa-tech-close-grid">
          <div className="aa-tech-section-label">ARCHANGEL / BANGKOK</div>
          <h2>Bring us the<br /><span>expensive work.</span></h2>
          <div>
            <p>
              Start with the operation that costs too much time, money or
              attention. We will establish whether technology can materially change it.
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

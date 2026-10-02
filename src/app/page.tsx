import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "ARCHANGEL | AI Transformation — Bangkok",
  description:
    "Make AI useful at work. Archangel identifies expensive work, redesigns how it operates, builds AI-enabled systems, and measures business impact.",
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

const method = [
  {
    index: "01",
    title: "Identify",
    copy: "Find the work that is expensive, repetitive, slow, error-prone or structurally difficult to scale. Establish the current baseline before proposing technology.",
    result: "EXPENSIVE WORK",
  },
  {
    index: "02",
    title: "Redesign",
    copy: "Change the operating model around the work. Decide what software should do, what people should decide, and where controls need to remain visible.",
    result: "NEW OPERATING MODEL",
  },
  {
    index: "03",
    title: "Build",
    copy: "Engineer the AI-enabled workflow, product or platform. Integrate the systems, test real exceptions and put the work in front of the people who use it.",
    result: "WORKING SYSTEM",
  },
  {
    index: "04",
    title: "Measure",
    copy: "Compare the result against the baseline. Measure time, quality, throughput, cost or other agreed business outcomes and decide what should scale.",
    result: "BUSINESS IMPACT",
  },
];

const engagements = [
  {
    number: "01",
    title: "AI transformation",
    copy: "For organisations with costly operational work that can be redesigned and augmented with AI.",
    href: "/ai-transformation",
    cta: "Explore AI transformation",
  },
  {
    number: "02",
    title: "Technology systems",
    copy: "Custom software, internal tools, intelligent workflows and digital platforms built around a real operating need.",
    href: "/services",
    cta: "Explore capabilities",
  },
  {
    number: "03",
    title: "Public-sector delivery",
    copy: "Software-heavy systems and digital infrastructure for institutional and government environments in Thailand.",
    href: "/company",
    cta: "About Archangel",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="aa-new-home">
      <section className="aa-new-hero">
        <div className="page-shell aa-new-hero-inner">
          <div className="aa-new-hero-copy">
            <div className="aa-new-hero-kicker">
              ARCHANGEL / AI TRANSFORMATION / BANGKOK
            </div>

            <h1>
              Make AI
              <span>useful at work.</span>
            </h1>

            <div className="aa-new-hero-bottom">
              <p>
                We identify expensive work, redesign how it operates, build
                AI-enabled systems, and measure the resulting business impact.
              </p>
              <Link href={bookingHref} className="aa-button aa-button-dark">
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="aa-hero-material aa-suede" aria-label="Archangel transformation model">
            <div className="aa-material-top">
              <span>Transformation model</span>
              <span>AA / 01</span>
            </div>

            <div className="aa-system-map">
              <div className="aa-system-node">
                <span>01</span>
                <strong>Work</strong>
                <small>Find cost + friction</small>
              </div>
              <div className="aa-system-node">
                <span>02</span>
                <strong>Operating model</strong>
                <small>Redesign the flow</small>
              </div>
              <div className="aa-system-node">
                <span>03</span>
                <strong>System</strong>
                <small>Build + integrate</small>
              </div>
              <div className="aa-system-node">
                <span>04</span>
                <strong>Impact</strong>
                <small>Measure what changed</small>
              </div>
            </div>

            <div className="aa-material-foot">
              <span>Technology follows the operating problem.</span>
              <ArrowDownRight size={15} aria-hidden="true" />
            </div>
          </aside>
        </div>
      </section>

      <section className="aa-statement">
        <div className="page-shell aa-statement-grid">
          <div className="aa-section-kicker">THE POSITION</div>
          <blockquote>
            AI adoption is easy.
            <br />
            <span>Operational change is not.</span>
          </blockquote>
          <p className="aa-statement-note">
            Archangel works at the point where technology meets the real operating
            system of a business: people, approvals, information, software,
            exceptions, controls and measurable commercial outcomes.
          </p>
        </div>
      </section>

      <section className="aa-method">
        <div className="page-shell">
          <header className="aa-section-head">
            <div className="aa-section-kicker">HOW WE WORK / 01—04</div>
            <h2>
              From expensive work
              <br />
              <span>to a working system.</span>
            </h2>
          </header>

          <div className="aa-method-list">
            {method.map((item) => (
              <article className="aa-method-row" key={item.index}>
                <span className="aa-method-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span>{item.result}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-institutional">
        <div className="aa-institutional-photo" role="img" aria-label="Bangkok architecture" />
        <div className="aa-institutional-copy">
          <div>
            <div className="aa-section-kicker">BUILT FOR SERIOUS ENVIRONMENTS</div>
            <h2>
              Technology for
              <br />
              <span>institutions.</span>
            </h2>
            <p className="aa-brand-lead">
              We are building Archangel to work where reliability, governance,
              judgement and implementation matter more than technology theatre.
            </p>
          </div>

          <div className="aa-sector-list">
            <div>Corporations</div>
            <div>Government</div>
            <div>Healthcare</div>
            <div>Enterprise operations</div>
          </div>
        </div>
      </section>

      <section className="aa-engagement">
        <div className="page-shell">
          <header className="aa-section-head">
            <div className="aa-section-kicker">CAPABILITIES</div>
            <h2>
              What Archangel
              <br />
              <span>is built to do.</span>
            </h2>
          </header>

          <div className="aa-engagement-grid">
            {engagements.map((item) => (
              <article className="aa-engagement-card" key={item.number}>
                <span>{item.number} / 03</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={item.href}>
                  {item.cta}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-proof">
        <div className="page-shell aa-proof-grid">
          <div className="aa-proof-copy">
            <div className="aa-section-kicker">MEASURE THE CHANGE</div>
            <h2>Useful AI has a business result.</h2>
            <p>
              Every serious implementation should begin with a baseline and end
              with evidence. We define what matters before we build: time,
              throughput, accuracy, cost, quality or another agreed operating
              metric.
            </p>
            <Link href="/ai-transformation" className="aa-button" style={{ marginTop: "2rem" }}>
              See the implementation model
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="aa-proof-diagram">
            <div className="aa-proof-diagram-head">
              <span>Illustrative measurement language</span>
              <span>AA / DATA 01</span>
            </div>

            <div className="aa-proof-lines" aria-label="Illustrative business measurements">
              <div className="aa-proof-line"><span>Cycle time</span><i /><strong>↓</strong></div>
              <div className="aa-proof-line"><span>Manual work</span><i /><strong>↓</strong></div>
              <div className="aa-proof-line"><span>Exceptions</span><i /><strong>↓</strong></div>
              <div className="aa-proof-line"><span>Throughput</span><i /><strong>↑</strong></div>
            </div>

            <div className="aa-proof-diagram-foot">
              <span>Baseline → implementation → evidence</span>
              <span>No invented ROI.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aa-close aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">ARCHANGEL / BANGKOK</div>
          <h2>
            Bring us the
            <br />
            <span>expensive work.</span>
          </h2>

          <div className="aa-close-row">
            <p>
              Start with the process that costs too much time, money or attention.
              We will establish whether technology can materially change it.
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

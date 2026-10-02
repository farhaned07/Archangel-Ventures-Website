import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import { DeliveryTrace, SystemArchitectureMap } from "@/components/technology/TechnologyArtifacts";

export const metadata: Metadata = {
  title: "Capabilities | ARCHANGEL",
  description:
    "AI transformation, custom technology systems and digital infrastructure for organisations that need serious implementation.",
  alternates: { canonical: "/services" },
};

const capabilities = [
  {
    number: "01",
    title: "AI transformation",
    copy:
      "Redesign expensive operational work and build AI-enabled systems around the new operating model. Human judgement stays visible where it matters.",
    href: "/ai-transformation",
    cta: "AI transformation",
  },
  {
    number: "02",
    title: "Technology systems",
    copy:
      "Custom software, internal tools, workflow systems, integrations and digital platforms built for a specific operating need rather than a generic feature list.",
    href: "/book",
    cta: "Discuss a system",
  },
  {
    number: "03",
    title: "Digital infrastructure",
    copy:
      "Web platforms, portals and institutional digital experiences where information architecture, reliability, performance and credibility all matter.",
    href: "/book",
    cta: "Discuss a platform",
  },
];

const build = [
  ["Operational workflows", "AI-assisted or automated systems around real business processes."],
  ["Internal software", "Purpose-built tools for teams, approvals, information and decision flows."],
  ["System integration", "Connect fragmented software, data and handoffs into one controlled process."],
  ["Customer platforms", "Portals, applications and digital services with serious front-end engineering."],
  ["Prototypes & pilots", "Make the proposed operating model tangible before a larger commitment."],
  ["Production delivery", "Security, deployment, testing, handover and support scoped around the environment."],
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="aa-inner">
      <section className="aa-inner-hero">
        <div className="page-shell aa-inner-hero-grid">
          <div className="aa-inner-hero-copy">
            <div className="aa-section-kicker">CAPABILITIES / ARCHANGEL</div>
            <h1>
              Build what the
              <br />
              <span>operation needs.</span>
            </h1>
            <p className="aa-inner-hero-deck">
              We combine AI, software engineering and product design to change
              how serious work actually gets done.
            </p>
          </div>

          <aside className="aa-inner-material aa-suede">
            <div className="aa-micro">CAPABILITY SYSTEM / 01</div>
            <div>
              <h2>Technology follows the problem.</h2>
              <p>
                We do not begin with a model, framework or feature list. We begin
                with the operating constraint and build the system that removes it.
              </p>
            </div>
            <div className="aa-inner-material-foot">
              <span>AI / SOFTWARE / DIGITAL</span>
              <span>BANGKOK</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">THREE DISCIPLINES</div>
            <h2>
              One technology partner.
              <br />
              <span>Three ways to engage.</span>
            </h2>
          </header>

          <div className="aa-index-list">
            {capabilities.map((item) => (
              <article className="aa-index-item" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link href={item.href}>
                  {item.cta}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-dark">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">WHAT WE BUILD</div>
            <h2>
              Systems people
              <br />
              <span>can actually use.</span>
            </h2>
          </header>

          <div className="aa-index-list">
            {build.map(([title, copy], index) => (
              <article className="aa-index-item" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>ARCHANGEL</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-dark-visual">
        <div className="page-shell">
          <header className="tech-dark-visual-head">
            <div className="aa-section-kicker">SYSTEMS / NOT FEATURE LISTS</div>
            <h2>
              What we build
              <br />
              <span>has an operating shape.</span>
            </h2>
          </header>
          <SystemArchitectureMap />
          <div className="tech-artifact-full">
            <DeliveryTrace />
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-stone">
        <div className="page-shell aa-two-col">
          <h2>
            The right first
            <br />
            <span>milestone matters.</span>
          </h2>
          <div className="aa-two-col-copy">
            <p>
              Large technology programmes fail when the first commitment is too
              broad. We prefer a bounded first milestone that proves the operating
              model, the technical path and the value of continuing.
            </p>
            <p>
              That may be a prototype, a workflow pilot, a scoped integration or a
              working release. The form depends on the risk you need to remove.
            </p>
            <Link href={bookingHref} className="aa-button aa-button-dark">
              Start a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="aa-cta aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">NEXT / ARCHANGEL</div>
          <h2>
            Bring us the part
            <br />
            <span>that should work better.</span>
          </h2>
          <div className="aa-cta-row">
            <p>
              We will determine whether the answer is AI, software, integration,
              process redesign — or a simpler intervention.
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

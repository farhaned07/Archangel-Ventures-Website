import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company | ARCHANGEL",
  description:
    "Archangel Company Limited is a Bangkok-based, Thailand-registered and BOI-promoted AI transformation and technology company.",
  alternates: { canonical: "/company" },
};

const facts = [
  ["Legal name", "Archangel Company Limited"],
  ["Base", "Bangkok, Thailand"],
  ["Registration", site.companyRegistrationNumber],
  ["Founded", "2023"],
  ["Status", "Thailand BOI promoted"],
  ["Focus", "AI transformation"],
  ["Delivery", "Technology systems"],
  ["Operating model", "Founder-led"],
];

export default function CompanyPage() {
  return (
    <main id="main-content" className="aa-inner">
      <section className="aa-inner-hero">
        <div className="page-shell aa-inner-hero-grid">
          <div className="aa-inner-hero-copy">
            <div className="aa-section-kicker">COMPANY / BANGKOK</div>
            <h1>
              A technology
              <br />
              <span>institution in the making.</span>
            </h1>
            <p className="aa-inner-hero-deck">
              Archangel Company Limited is a Bangkok-based AI transformation and
              technology company built for serious operational work.
            </p>
          </div>

          <aside className="aa-inner-material aa-suede">
            <div className="aa-micro">ARCHANGEL / COMPANY 01</div>
            <div>
              <h2>Independent. Technical. Accountable.</h2>
              <p>
                We combine founder-level involvement with hands-on engineering.
                The company is designed to stay close to the work rather than
                separate strategy from implementation.
              </p>
            </div>
            <div className="aa-inner-material-foot">
              <span>BANGKOK / THAILAND</span>
              <span>EST. 2023</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell aa-two-col">
          <h2>
            Strategy without
            <br />
            <span>delivery is theatre.</span>
          </h2>
          <div className="aa-two-col-copy">
            <p>
              Archangel exists to close the gap between ambitious technology
              programmes and the operational reality of making them work.
            </p>
            <p>
              We work from the problem outward: understand the business system,
              define the operating change, engineer the technology, then measure
              the result. That keeps the work commercially grounded.
            </p>
            <p>
              Our direction is intentionally institutional: corporations,
              healthcare, government and enterprise environments where
              reliability, governance and implementation matter.
            </p>
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-stone">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">COMPANY FACTS</div>
            <h2>
              Registered in Thailand.
              <br />
              <span>Operating from Bangkok.</span>
            </h2>
          </header>

          <div className="aa-facts">
            {facts.map(([label, value]) => (
              <div className="aa-fact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="aa-inner-hero-actions" style={{ marginTop: "2rem" }}>
            <a
              href={site.businessRegistryUrl}
              target="_blank"
              rel="noreferrer"
              className="aa-button aa-button-light"
            >
              Public company record
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={site.companyLinkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="aa-button aa-button-light"
            >
              LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="aa-inner-section aa-inner-section-dark">
        <div className="page-shell">
          <header className="aa-inner-header">
            <div className="aa-section-kicker">WHAT WE ARE BUILDING</div>
            <h2>
              A company capable of
              <br />
              <span>carrying serious work.</span>
            </h2>
          </header>

          <div className="aa-index-list">
            <article className="aa-index-item">
              <span>01</span>
              <h3>AI transformation</h3>
              <p>
                Redesign operational work, build the enabling systems and measure
                business impact rather than stopping at adoption.
              </p>
              <Link href="/ai-transformation">
                Explore
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
            <article className="aa-index-item">
              <span>02</span>
              <h3>Technology delivery</h3>
              <p>
                Software, workflow systems, integrations and digital
                infrastructure from a clear first milestone through production.
              </p>
              <Link href="/services">
                Capabilities
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </article>
            <article className="aa-index-item">
              <span>03</span>
              <h3>Institutional capacity</h3>
              <p>
                Build the processes, people, technical assets and delivery
                discipline required to work with larger organisations over time.
              </p>
              <span>LONG TERM</span>
            </article>
          </div>
        </div>
      </section>

      <section className="aa-cta aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">WORK WITH ARCHANGEL</div>
          <h2>
            Bring us a problem
            <br />
            <span>worth solving properly.</span>
          </h2>
          <div className="aa-cta-row">
            <p>
              If the work carries real operational weight, start with a short
              conversation about the process, constraints and business consequence.
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

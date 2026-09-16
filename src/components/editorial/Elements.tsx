import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref, site } from "@/lib/site";

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function Closing({
  title = "Where is work costing you more than it should?",
}: {
  title?: string;
}) {
  return (
    <section className="closing">
      <div className="page-shell closing-grid">
        <div>
          <SectionLabel number="↗">Start a conversation</SectionLabel>
          <h2>{title}</h2>
        </div>
        <div className="closing-action">
          <p>
            Bring one workflow. In 15 minutes, we’ll explore whether there is a
            useful next step.
          </p>
          <Link
            href={bookingHref}
            className="button-primary"
            data-cta="closing-opportunity-call"
          >
            Book an AI Opportunity Call
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WorkshopSummary() {
  return (
    <section className="workshop-section" id="workshop">
      <div className="page-shell workshop-grid">
        <div>
          <SectionLabel number="03">The first engagement</SectionLabel>
          <h2>
            A clear decision.
            <br />
            <span className="muted">Before a bigger investment.</span>
          </h2>
          <p className="section-copy">
            The AI Transformation Workshop brings management, process owners and
            technology into one room. We leave with the work worth changing and
            a plan to begin.
          </p>
          <TextLink href="/ai-transformation">Inside the workshop</TextLink>
        </div>
        <div className="workshop-sheet">
          <div className="sheet-top">
            <span>AI Transformation Workshop</span>
            <span>Bangkok · on site</span>
          </div>
          <p className="workshop-price">{site.workshopPrice}</p>
          <p className="sheet-note">
            Fixed fee · credited toward implementation
          </p>
          <ol className="deliverables">
            {[
              "A map of the current workflow",
              "3–5 ranked AI opportunities",
              "An estimate of value and effort",
              "A practical 30 day action plan",
            ].map((x, i) => (
              <li key={x}>
                <span>0{i + 1}</span>
                {x}
              </li>
            ))}
          </ol>
          <Link
            href={bookingHref}
            className="sheet-link"
            data-cta="workshop-opportunity-call"
          >
            Discuss your workshop
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HannaFlow() {
  return (
    <figure className="hanna-flow">
      <div className="hanna-top">
        <span className="hanna-name">
          hanna<span>.</span>
        </span>
        <span>From consultation to care</span>
      </div>
      <div className="voice-signal" aria-hidden="true">
        {Array.from({ length: 55 }, (_, i) => (
          <i
            key={i}
            style={{
              height: `${8 + Math.abs(Math.sin(i * 1.73) * Math.cos(i * 0.18)) * 74}px`,
            }}
          />
        ))}
      </div>
      <div className="hanna-flow-line">
        <span>Consultation</span>
        <ArrowRight size={18} aria-hidden="true" />
        <span>Clinical note</span>
        <ArrowRight size={18} aria-hidden="true" />
        <span>Care plan</span>
      </div>
      <div className="hanna-output">
        <span>Doctor review</span>
        <span>Medication confirmation</span>
        <span>Patient’s language</span>
      </div>
      <figcaption>
        Product workflow illustration · clinical review before patient use
      </figcaption>
    </figure>
  );
}

export function FeaturedWork() {
  return (
    <section className="featured-work page-shell" id="examples">
      <div className="section-heading">
        <div>
          <SectionLabel number="02">Applied intelligence</SectionLabel>
          <h2>
            The work behind
            <br />
            the thinking.
          </h2>
        </div>
        <TextLink href="/work">Explore our work</TextLink>
      </div>
      <div className="hanna-feature">
        <div className="project-copy">
          <span className="project-category">Healthcare AI / Thailand</span>
          <h3>Hanna</h3>
          <p>
            Turn the patient conversation into clinical documentation and a care
            plan they can understand.
          </p>
          <p className="project-detail">
            Voice, structured information and multilingual output, built around
            the consultation.
          </p>
          <a
            href="https://www.hanna.care"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Explore Hanna
            <ArrowUpRight size={17} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <HannaFlow />
      </div>
      <div className="work-index">
        <Link href="/work#enterprise">
          <span>01 / Enterprise operations</span>
          <strong>From invoice to decision.</strong>
          <span>
            Delivery framework
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </Link>
        <Link href="/work#onnesha">
          <span>02 / AI native systems</span>
          <strong>From research to production.</strong>
          <span>
            Onnesha
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Closing, SectionLabel } from "@/components/editorial/Elements";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation Workshop Bangkok | Archangel",
  description:
    "A ฿45,000 on-site AI transformation workshop for management teams in Bangkok. Identify 3–5 high-value workflows, estimate ROI, and leave with a practical 30-day action plan.",
  alternates: {
    canonical: "/ai-transformation",
  },
  openGraph: {
    title: "AI Transformation Workshop Bangkok | Archangel",
    description:
      "Find 3–5 AI opportunities worth funding. Fixed fee, on-site in Bangkok, with a practical decision pack and 30-day action plan.",
    url: "/ai-transformation",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel AI Transformation Workshop Bangkok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Transformation Workshop Bangkok | Archangel",
    description:
      "Find 3–5 AI opportunities worth funding. Fixed fee, on-site in Bangkok.",
    images: ["/opengraph-image"],
  },
};

const outputs = [
  [
    "Workflow map",
    "How the work moves today, where it slows down, and which handoffs add cost.",
  ],
  [
    "3–5 ranked opportunities",
    "A shortlist ordered by business value, data readiness and implementation effort.",
  ],
  [
    "Value estimate",
    "The baseline, assumptions, likely costs and measures needed to judge the investment.",
  ],
  [
    "30 day action plan",
    "A first scope, accountable owner, dependencies and a practical way to test the result.",
  ],
];
const workshopSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl("/ai-transformation")}#workshop`,
  name: "AI Transformation Workshop",
  serviceType: "Management workshop",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "City", name: "Bangkok" },
  offers: {
    "@type": "Offer",
    price: "45000",
    priceCurrency: "THB",
    url: absoluteUrl("/ai-transformation"),
  },
};
export default function AITransformationPage() {
  return (
    <main id="main-content" className="interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopSchema) }}
      />
      <section className="page-hero page-shell split-hero">
        <div>
          <SectionLabel number="01">AI Transformation Workshop</SectionLabel>
          <h1>
            Know what
            <br />
            is worth
            <br />
            <span className="muted">building.</span>
          </h1>
          <p className="hero-deck">
            A working session for management teams. Your workflows, your
            constraints, one clear investment decision.
          </p>
          <div className="hero-actions">
            <Link
              href={bookingHref}
              className="button-primary"
              data-cta="workshop-hero-call"
            >
              Discuss your workshop
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="workshop-sheet">
          <div className="sheet-top">
            <span>Management workshop</span>
            <span>Bangkok · on site</span>
          </div>
          <p className="workshop-price">{site.workshopPrice}</p>
          <p className="sheet-note">
            Fixed fee · credited toward implementation
          </p>
          <ol className="deliverables">
            <li>
              <span>01</span>Walk through the actual work
            </li>
            <li>
              <span>02</span>Identify what needs to change
            </li>
            <li>
              <span>03</span>Rank the strongest opportunities
            </li>
            <li>
              <span>04</span>Agree the first move
            </li>
          </ol>
          <p className="sheet-note">
            Scope and scheduling agreed on the opportunity call.
          </p>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="02">The output</SectionLabel>
            <h2>
              A decision pack.
              <br />
              <span className="muted">Built from your business.</span>
            </h2>
          </div>
          <ol className="editorial-list">
            {outputs.map(([title, copy], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="03">In the room</SectionLabel>
          <h2>The people who can change the work.</h2>
        </div>
        <div className="prose">
          <h3>Management, process owners and technology.</h3>
          <p>
            Bring someone who owns the business result, someone who does the
            work, and someone who understands the systems. We work through real
            examples together.
          </p>
          <h3>Start with a workflow you already know.</h3>
          <p>
            Invoice handling. Reporting. Customer requests. Documentation. The
            useful starting point is work with visible friction and enough
            volume to matter.
          </p>
          <p>
            We agree the workshop scope and what to prepare on the first call.
            Use representative or redacted examples where appropriate.
          </p>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">Before you book</SectionLabel>
          <h2>A few practical answers.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Is this an AI training session?</summary>
            <p>
              The focus is a business decision: which work should change, why it
              is worth changing, and how to begin. Relevant AI concepts are
              explained in the context of your work.
            </p>
          </details>
          <details>
            <summary>Does the fee include implementation?</summary>
            <p>
              The ฿45,000 covers the workshop and decision pack. Implementation
              is scoped separately. The workshop fee is credited toward
              implementation.
            </p>
          </details>
          <details>
            <summary>Do we have to commit to a build?</summary>
            <p>
              No. The decision pack helps you decide whether the business case
              justifies implementation. The workshop is a standalone engagement.
            </p>
          </details>
          <details>
            <summary>How do we arrange it?</summary>
            <p>
              Start with a 15 minute AI Opportunity Call. We discuss the
              workflow, confirm the fit and agree the scope and schedule.
            </p>
          </details>
        </div>
      </section>
      <Closing title="Bring the work. Leave with a direction." />
    </main>
  );
}

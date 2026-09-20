import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, bookingHref, site } from "@/lib/site";
import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";

export const metadata: Metadata = {
  title: "AI Transformation Partner Bangkok | Archangel Company Limited",
  description:
    "Archangel is a Bangkok-based AI transformation partner helping management teams identify high-value workflows, redesign processes, implement AI systems and measure business results.",
  alternates: {
    canonical: "/ai-transformation-partner-bangkok",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Transformation Partner Bangkok | Archangel",
    description:
      "Founder-led AI implementation, from a free fit call to a scoped 30-day pilot and measurable production rollout in Bangkok.",
    url: "/ai-transformation-partner-bangkok",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel — AI Transformation Partner Bangkok",
      },
    ],
  },
};

const pageUrl = absoluteUrl("/ai-transformation-partner-bangkok");

const localSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#local-business`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      image: absoluteUrl("/opengraph-image"),
      email: site.email,
      telephone: site.phone,
      hasMap: site.googleBusinessProfileUrl,
      description:
        "Bangkok-based AI transformation partner providing workflow redesign, AI implementation and transformation services for management teams in Thailand.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        addressLocality: "Bangkok",
        postalCode: site.postalCode,
        addressCountry: site.countryCode,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Bangkok",
        },
        {
          "@type": "Country",
          name: "Thailand",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": `${site.url}/#farhan-sabbir`,
        name: "Farhan Sabbir",
        url: absoluteUrl("/farhan-sabbir"),
      },
      sameAs: [
        site.companyLinkedinUrl,
        site.businessRegistryUrl,
        site.googleBusinessProfileUrl,
      ],
      knowsAbout: [
        "AI transformation",
        "Workflow redesign",
        "Business process automation",
        "Enterprise AI",
        "Healthcare AI",
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI Transformation Partner Bangkok",
      serviceType: "AI transformation strategy and implementation",
      url: pageUrl,
      provider: {
        "@id": `${pageUrl}#local-business`,
      },
      areaServed: {
        "@type": "City",
        name: "Bangkok",
      },
      description:
        "AI transformation strategy, workflow redesign, implementation and measurement for management teams in Bangkok.",
    },
  ],
};

const workflows = [
  [
    "Finance & operations",
    "Approvals, invoice handling, reporting, reconciliation and repetitive coordination work.",
  ],
  [
    "Commercial & service",
    "Customer requests, document workflows, internal knowledge, follow-up and service operations.",
  ],
  [
    "Healthcare",
    "Clinical documentation, multilingual communication and workflows that require careful human review.",
  ],
];

export default function AITransformationPartnerBangkokPage() {
  return (
    <main id="main-content" className="interior aa-studio-interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <section className="page-hero page-shell">
        <SectionLabel number="01">AI transformation partner / Bangkok</SectionLabel>
        <h1>
          AI transformation
          <br />
          <span className="muted">close to the work.</span>
        </h1>
        <p className="hero-deck">
          Archangel Company Limited is a Bangkok-based AI transformation
          partner. We work with management teams to identify expensive work,
          redesign the workflow, implement a working AI system and measure the
          result. Start with one bounded paid pilot.
        </p>
        <div className="hero-actions">
          <TextLink href={bookingHref}>Discuss an implementation</TextLink>
          <TextLink href="/ai-transformation">
            Explore the 30-day implementation pilot
          </TextLink>
        </div>
      </section>

      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="02">Why local matters</SectionLabel>
            <h2>
              Strategy is easier
              <br />
              <span className="muted">when you can see the workflow.</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              AI transformation usually fails in the details: approvals,
              exceptions, handoffs, permissions and the way people actually
              complete the work.
            </p>
            <p>
              Being based in Bangkok makes it easier for us to work directly
              with the people who own the process, understand the operating
              constraints and keep implementation connected to the business
              case.
            </p>
            <p>
              We do not begin with a model or a tool. We begin with one workflow
              where time, cost, quality or revenue can be measured.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="03">Where we start</SectionLabel>
          <h2>
            One workflow.
            <br />
            One baseline.
          </h2>
        </div>
        <ol className="editorial-list">
          {workflows.map(([title, copy], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">Engagement</SectionLabel>
          <h2>
            From diagnosis
            <br />
            to a working system.
          </h2>
        </div>
        <ol className="editorial-list">
          {[
            [
              "Find",
              "Map the current process, quantify the friction and identify the work worth changing.",
            ],
            [
              "Redesign",
              "Simplify the process and define where AI, automation and human judgment belong.",
            ],
            [
              "Implement",
              "Build or integrate the system around the real data, permissions and operating environment.",
            ],
            [
              "Measure",
              "Compare the new workflow against the baseline and decide what should scale.",
            ],
          ].map(([title, copy], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="05">Bangkok presence</SectionLabel>
            <h2>
              Wireless Road.
              <br />
              <span className="muted">Central Bangkok.</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              Archangel Company Limited is registered at 57 Witthayu Road,
              Lumphini, Pathum Wan, Bangkok 10330, Thailand.
            </p>
            <p>
              Meetings are arranged by appointment. Founder & Executive Director
              Farhan Sabbir leads strategy, implementation and client work.
            </p>
            <TextLink href="/company">About Archangel Company Limited</TextLink>
            <div style={{ marginTop: 18 }}>
              <a
                href={site.googleBusinessProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                View Archangel on Google
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="06">Related</SectionLabel>
          <h2>
            Go deeper.
          </h2>
        </div>
        <div className="prose">
          <p>
            Read the broader{" "}
            <Link href="/ai-transformation-partner-thailand">
              AI Transformation Partner Thailand
            </Link>{" "}
            page or our guide to{" "}
            <Link href="/insights/what-is-an-ai-transformation-partner">
              what an AI transformation partner should actually do
            </Link>.
          </p>
        </div>
      </section>

      <Closing title="Start with the workflow worth changing." />
    </main>
  );
}

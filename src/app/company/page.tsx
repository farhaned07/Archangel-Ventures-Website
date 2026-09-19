import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";
import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";

export const metadata: Metadata = {
  title: "Archangel Company Limited Thailand | Software & AI Company Bangkok",
  description:
    "Archangel Company Limited is a Bangkok-based, Thailand-registered and BOI-promoted software and AI company led by founder Farhan Sabbir.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "Archangel Company Limited | Bangkok, Thailand",
    description:
      "Thailand-registered software and AI company focused on AI transformation, applied AI systems and workflow implementation.",
    url: "/company",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
  },
};

const companyPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/company")}#about`,
  url: absoluteUrl("/company"),
  name: "Archangel Company Limited | Bangkok, Thailand",
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    legalName: site.legalName,
    url: site.url,
    foundingDate: "2023-10-05",
    disambiguatingDescription:
      "Thailand-registered software and AI company based in Bangkok.",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Thailand DBD company registration",
      value: site.companyRegistrationNumber,
    },
    sameAs: [site.companyLinkedinUrl, site.businessRegistryUrl],
    founder: {
      "@type": "Person",
      "@id": `${site.url}/#farhan-sabbir`,
      name: "Farhan Sabbir",
      url: absoluteUrl("/farhan-sabbir"),
      sameAs: [site.linkedinUrl, site.githubUrl],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "57 Wireless Road, Lumphini, Pathum Wan",
      addressLocality: "Bangkok",
      postalCode: "10330",
      addressCountry: "TH",
    },
  },
};

export default function CompanyPage() {
  return (
    <main id="main-content" className="interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyPageSchema) }}
      />
      <section className="page-hero page-shell">
        <SectionLabel number="01">Company / Thailand</SectionLabel>
        <h1>
          Archangel
          <br />
          <span className="muted">Company Limited.</span>
        </h1>
        <p className="hero-deck">
          A Bangkok-based software and AI company focused on turning expensive,
          repetitive work into measurable operating improvement.
        </p>
        <div className="hero-actions">
          <TextLink href="/ai-transformation-partner-thailand">
            AI transformation in Thailand
          </TextLink>
          <a
            href={site.businessRegistryUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Public company record
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="02">Identity</SectionLabel>
            <h2>
              One company.
              <br />
              <span className="muted">One public identity.</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              Archangel Company Limited is the Thailand company behind this
              website and the work led by Founder & Executive Director Farhan
              Sabbir.
            </p>
            <p>
              The company is registered in Thailand and operates from Bangkok.
              Its current focus is AI transformation, applied AI systems and
              workflow implementation.
            </p>
            <TextLink href="/farhan-sabbir">Meet Farhan Sabbir</TextLink>
          </div>
        </div>
      </section>

      <section className="company-section page-shell">
        <SectionLabel number="03">Company facts</SectionLabel>
        <dl className="company-facts">
          <div>
            <dt>Legal name</dt>
            <dd>Archangel Company Limited</dd>
          </div>
          <div>
            <dt>Thai registration</dt>
            <dd>{site.companyRegistrationNumber}</dd>
          </div>
          <div>
            <dt>Registered</dt>
            <dd>5 October 2023</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Bangkok, Thailand</dd>
          </div>
          <div>
            <dt>Founder</dt>
            <dd>
              <Link href="/farhan-sabbir">
                Farhan Sabbir
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </dd>
          </div>
          <div>
            <dt>Primary work</dt>
            <dd>AI transformation & applied AI systems</dd>
          </div>
        </dl>
      </section>

      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">What we do</SectionLabel>
          <h2>
            Find the work.
            <br />
            Build the change.
          </h2>
        </div>
        <div className="prose">
          <h3>AI transformation</h3>
          <p>
            We work with management teams to identify high-value workflows,
            redesign the process, implement the right system and measure the
            operating result.
          </p>
          <h3>Applied AI systems</h3>
          <p>
            Our work includes workflow automation, enterprise AI systems and
            healthcare documentation and communication products.
          </p>
          <TextLink href="/work">Explore our work</TextLink>
        </div>
      </section>

      <Closing title="Make AI useful at work." />
    </main>
  );
}

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
      "Bangkok-based software and AI implementation company building working systems for business operations.",
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
    sameAs: [
      site.companyLinkedinUrl,
      site.businessRegistryUrl,
      site.googleBusinessProfileUrl,
    ],
    hasMap: site.googleBusinessProfileUrl,
    founder: {
      "@type": "Person",
      "@id": `${site.url}/#farhan-sabbir`,
      name: "Farhan Sabbir",
      url: absoluteUrl("/farhan-sabbir"),
      sameAs: [site.linkedinUrl, site.githubUrl],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: "Bangkok",
      postalCode: site.postalCode,
      addressCountry: site.countryCode,
    },
  },
};

export default function CompanyPage() {
  return (
    <main id="main-content" className="interior aa-studio-interior">
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
          A Bangkok-based technology and AI implementation company. We design
          and build intelligent workflows, software products and digital experiences.
        </p>
        <div className="hero-actions">
          <TextLink href="/services">
            Explore our capabilities
          </TextLink>
          <a
            href={site.googleBusinessProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Google Business Profile
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
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
              Its work spans AI implementation, software product engineering,
              digital platforms and workflow automation.
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
            <dd>AI implementation, product engineering & digital platforms</dd>
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
          <h3>AI implementation</h3>
          <p>
            We work with process owners to scope one valuable workflow,
            build a working AI system and measure the operating result.
            Begin with a free fit call or a scoped 30-day pilot.
          </p>
          <h3>Software products and digital experiences</h3>
          <p>
            We design prototypes, custom software, customer-facing applications,
            and digital platforms alongside our applied AI work.
          </p>
          <TextLink href="/work">Explore our work</TextLink>
        </div>
      </section>

      <Closing title="Tell us what you need built." />
    </main>
  );
}

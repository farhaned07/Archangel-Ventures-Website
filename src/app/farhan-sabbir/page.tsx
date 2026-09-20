import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Farhan Sabbir | AI Transformation Partner in Thailand",
  description:
    "Farhan Sabbir is an AI Transformation Partner in Thailand and Founder & Executive Director of Archangel Company Limited, a Bangkok-based, Thailand BOI-promoted software and AI company.",
  alternates: {
    canonical: "/farhan-sabbir",
  },
  openGraph: {
    title: "Farhan Sabbir | AI Transformation Partner in Thailand",
    description:
      "Founder & Executive Director of Archangel Company Limited. Founder-led AI implementation and workflow automation in Thailand.",
    url: "/farhan-sabbir",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Sabbir | AI Transformation Partner in Thailand",
    description:
      "Founder & Executive Director of Archangel Company Limited. AI implementation from a defined business problem to a working system.",
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/farhan-sabbir")}#profile`,
  url: absoluteUrl("/farhan-sabbir"),
  name: "Farhan Sabbir | AI Transformation Partner in Thailand",
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#farhan-sabbir`,
    name: "Farhan Sabbir",
    jobTitle: "Founder & Executive Director",
    description:
      "AI Implementation Partner in Thailand and Founder & Executive Director of Archangel Company Limited.",
    disambiguatingDescription:
      "Bangkok-based founder leading AI transformation and applied AI work through Archangel Company Limited in Thailand.",
    url: absoluteUrl("/farhan-sabbir"),
    sameAs: [site.linkedinUrl, site.githubUrl],
    worksFor: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      url: site.url,
    },
    knowsAbout: [
      "AI transformation",
      "Applied AI",
      "Business process automation",
      "AI workflow implementation",
      "Healthcare AI",
    ],
    homeLocation: {
      "@type": "Place",
      name: "Bangkok, Thailand",
    },
  },
};

import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";
export default function FarhanSabbirPage() {
  return (
    <main id="main-content" className="interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <section className="page-hero page-shell">
        <Link href="/work" className="route-breadcrumb">
          Company / Leadership
        </Link>
        <SectionLabel number="01">Founder & Executive Director</SectionLabel>
        <h1>Farhan Sabbir.</h1>
        <p className="hero-deck">
          AI Transformation & Implementation Partner in Thailand.
          <br />
          Founder & Executive Director of Archangel Company Limited.
        </p>
        <div className="hero-actions">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Connect on LinkedIn
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            GitHub
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell">
          <p className="profile-quote">
            The work matters more than the AI pitch. Find the bottleneck,
            build the system and measure what changes.
          </p>
          <cite>Our starting point · Archangel</cite>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="02">Responsibility</SectionLabel>
          <h2>
            From the first question
            <br />
            to the working system.
          </h2>
        </div>
        <div className="prose">
          <p>
            Farhan leads Archangel across product, implementation and client
            work. His focus is taking an operating problem through system design,
            implementation and a measurable result.
          </p>
          <p>
            That work includes healthcare documentation and multilingual care
            planning through Hanna, enterprise workflow design and AI native
            systems.
          </p>
          <p>
            Based in Bangkok, he works through Archangel Company Limited, a
            Thailand BOI promoted software and AI company.
          </p>
          <TextLink href="/work">Explore Archangel’s work</TextLink>
        </div>
      </section>
      <Closing title="Let’s look at the work." />
    </main>
  );
}

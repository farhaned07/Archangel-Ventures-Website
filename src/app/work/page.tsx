import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Closing,
  HannaFlow,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archangel Company Limited | AI Company in Bangkok, Thailand",
  description:
    "Archangel Company Limited is a Bangkok-based, Thailand BOI-promoted software and AI company focused on AI transformation, applied AI systems and workflow implementation.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Archangel Company Limited | AI Company in Bangkok, Thailand",
    description:
      "Thailand BOI-promoted software and AI company building applied systems and AI transformation close to the work.",
    url: "/work",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel Company Limited — AI company in Bangkok, Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archangel Company Limited | AI Company in Bangkok, Thailand",
    description:
      "Thailand BOI-promoted software and AI company focused on transformation and applied AI systems.",
    images: ["/opengraph-image"],
  },
};

const companyPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/work")}#about`,
  url: absoluteUrl("/work"),
  name: "Archangel Company Limited",
  description:
    "Official company page for Archangel Company Limited, a Bangkok-based, Thailand BOI-promoted software and AI company.",
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    sameAs: [site.companyLinkedinUrl],
    founder: {
      "@type": "Person",
      "@id": `${site.url}/#farhan-sabbir`,
      name: "Farhan Sabbir",
      url: absoluteUrl("/farhan-sabbir"),
    },
  },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyPageSchema) }}
      />
      <section className="page-hero page-shell">
        <SectionLabel number="01">Archangel Company Limited</SectionLabel>
        <h1>
          Thinking is only
          <br />
          <span className="muted">half the work.</span>
        </h1>
        <p className="hero-deck">
          We build applied AI around real operating problems. Healthcare,
          enterprise operations and AI native systems inform how we design and
          deliver.
        </p>
      </section>
      <section className="page-shell featured-work">
        <div className="hanna-feature">
          <div className="project-copy">
            <span className="project-category">01 / Healthcare AI</span>
            <h2>Hanna</h2>
            <p style={{ marginTop: 24 }}>
              From the patient conversation to a care plan they can understand.
            </p>
            <p className="project-detail">
              Clinical documentation and multilingual care planning built around
              the consultation. Doctor review stays part of the workflow.
            </p>
            <a
              href="https://www.hanna.care"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Visit Hanna
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <HannaFlow />
        </div>
      </section>
      <section className="dark-section" id="enterprise">
        <div className="page-shell">
          <SectionLabel number="02">
            Enterprise operations / delivery framework
          </SectionLabel>
          <div className="company-statement">
            <h2>
              Built for the steps
              <br />
              between systems.
            </h2>
            <div className="prose">
              <p>
                Archangel’s Enterprise AI Transformation Framework connects
                discovery, architecture, implementation and operation. The AP
                Accelerator blueprint applies that method to invoice handling.
              </p>
              <p>
                Approval rules, exceptions, audit trails, ERP handoff and
                training are part of the design from the beginning.
              </p>
            </div>
          </div>
          <div className="enterprise-flow">
            {[
              "Invoice intake",
              "AI extraction",
              "Validation",
              "Human approval",
              "ERP handoff",
            ].map((x, i) => (
              <span
                key={x}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {i > 0 && <ArrowRight size={18} aria-hidden="true" />}
                {x}
              </span>
            ))}
          </div>
          <p
            className="visual-caption"
            style={{ textAlign: "left", padding: "20px 0 0" }}
          >
            AP Accelerator blueprint · Microsoft 365 + ERP · delivery
            architecture
          </p>
        </div>
      </section>
      <section className="page-shell section-grid" id="onnesha">
        <div>
          <SectionLabel number="03">AI native media / Onnesha</SectionLabel>
          <h2>
            A system behind
            <br />
            the output.
          </h2>
        </div>
        <div className="prose">
          <p>
            Onnesha explores how research, scripting and production can work as
            a repeatable media system. The emphasis is on the quality of the
            source, the structure of the process and review of the final output.
          </p>
          <div className="enterprise-flow">
            <span>Research</span>
            <ArrowRight size={18} />
            <span>Script</span>
            <ArrowRight size={18} />
            <span>Produce</span>
            <ArrowRight size={18} />
            <span>Review</span>
          </div>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">The company</SectionLabel>
          <h2>
            Bangkok based.
            <br />
            Founder led.
          </h2>
        </div>
        <div className="prose">
          <p>
            Archangel Company Limited is a Thailand BOI promoted software and AI
            company. Our work combines product development, workflow redesign
            and AI implementation.
          </p>
          <p>
            Farhan Sabbir, Founder & Executive Director, leads product,
            implementation and client work. Strategy stays connected to the
            people responsible for building it.
          </p>
          <TextLink href="/farhan-sabbir">Meet Farhan Sabbir</TextLink>
          <div style={{ marginTop: 24 }}>
            <TextLink href="/ai-transformation-partner-thailand">
              AI transformation in Thailand
            </TextLink>
          </div>
        </div>
      </section>
      <Closing />
    </main>
  );
}

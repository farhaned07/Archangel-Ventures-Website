import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation Partner in Thailand & Bangkok | Archangel",
  description:
    "Archangel is a Bangkok-based AI transformation partner helping management teams in Thailand find high-value AI opportunities, redesign workflows, implement working systems and measure business results.",
  alternates: {
    canonical: "/ai-transformation-partner-thailand",
    languages: {
      "en-TH": "/ai-transformation-partner-thailand",
      "th-TH": "/th/ai-transformation-partner-thailand",
      "x-default": "/ai-transformation-partner-thailand",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Transformation Partner in Thailand & Bangkok | Archangel",
    description:
      "From a defined business problem to a working AI system: free fit call, scoped 30-day paid pilot and measured deployment.",
    url: "/ai-transformation-partner-thailand",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel — AI Transformation Partner in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Transformation Partner in Thailand & Bangkok | Archangel",
    description:
      "Find the work worth changing, implement the right AI systems and measure the result.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    question: "What does an AI transformation partner do?",
    answer:
      "An AI transformation partner works with management teams to identify where AI can create measurable value, simplify the underlying workflow, implement the right systems and track the operating result.",
  },
  {
    question: "Does Archangel only provide AI strategy?",
    answer:
      "No. Archangel combines strategy and implementation. We start with the work, prioritize the highest-value opportunities, then build and deploy systems when the business case is strong enough.",
  },
  {
    question: "How is an AI transformation partner different from an AI consultant or agency?",
    answer:
      "A consultant may stop at recommendations and an agency may begin with a build request. A transformation partner connects business diagnosis, workflow redesign, implementation, adoption and measurement in one engagement.",
  },
  {
    question: "How does the 30-day AI implementation pilot work?",
    answer:
      "We scope one business workflow, agree baseline and acceptance criteria, build a working system in an approved environment and evaluate results with real users. Production rollout is quoted separately.",
  },
  {
    question: "Where does Archangel work?",
    answer:
      "Archangel Company Limited is based in Bangkok and works with organizations in Thailand. The company is Thailand BOI promoted for software and digital platform development.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${absoluteUrl("/ai-transformation-partner-thailand")}#service`,
      name: "AI Transformation Partner Thailand",
      serviceType: "AI transformation strategy and implementation",
      url: absoluteUrl("/ai-transformation-partner-thailand"),
      description:
        "AI transformation strategy, workflow redesign, implementation and measurement for management teams in Thailand.",
      inLanguage: "en",
      areaServed: {
        "@type": "Country",
        name: "Thailand",
      },
      provider: {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        url: site.url,
      },
      offers: {
        "@type": "Offer",
        name: "30-day AI implementation pilot",
        price: "150000",
        priceCurrency: "THB",
        url: absoluteUrl("/ai-transformation"),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl("/ai-transformation-partner-thailand")}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";
const areas = [
  [
    "Finance & operations",
    "Invoice intake, approvals, reconciliation and management reporting.",
  ],
  [
    "Customer & commercial",
    "Service requests, document handling, internal knowledge and sales follow-up.",
  ],
  [
    "Healthcare",
    "Clinical documentation and patient communication across languages.",
  ],
];
export default function AITransformationPartnerThailandPage() {
  return (
    <main id="main-content" className="interior aa-studio-interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="page-hero page-shell">
        <SectionLabel number="01">
          AI transformation partner / Bangkok · Thailand
        </SectionLabel>
        <h1>
          From AI ambition
          <br />
          <span className="muted">to operating value.</span>
        </h1>
        <p className="hero-deck">
          Archangel is an AI transformation partner in Bangkok, Thailand.
          We work with management teams to turn expensive workflows into working
          AI systems. Start with a free fit call, a scoped paid pilot and
          measurable results before committing to a full rollout.
        </p>
        <div className="hero-actions">
          <Link href="/ai-transformation" className="button-primary">
            Explore the 30-day pilot
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <TextLink href={bookingHref}>Discuss an implementation</TextLink>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="02">One connected engagement</SectionLabel>
            <h2>
              Business judgment.
              <br />
              Engineering.
              <br />
              <span className="muted">Same table.</span>
            </h2>
          </div>
          <ol className="editorial-list">
            {[
              [
                "Find the expensive work",
                "Walk through the process with its owners. Understand volume, time, cost and the decisions that matter.",
              ],
              [
                "Simplify before build",
                "Remove avoidable steps. Define the future workflow, the rules and where human judgment belongs.",
              ],
              [
                "Build what proves value",
                "Scope and implement a working system around the real data, permissions and operating environment.",
              ],
              [
                "Measure what changes",
                "Compare the result against the baseline. Review quality and adoption alongside time and cost.",
              ],
            ].map(([a, b], i) => (
              <li key={a}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="03">Where we begin</SectionLabel>
          <h2>
            The work already
            <br />
            on your desk.
          </h2>
          <p className="section-copy">
            For CEOs, CFOs, COOs and transformation leaders who need to choose
            what is worth changing.
          </p>
        </div>
        <ol className="editorial-list">
          {areas.map(([a, b], i) => (
            <li key={a}>
              <span>0{i + 1}</span>
              <div>
                <h3>{a}</h3>
                <p>{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="04">Why a transformation partner</SectionLabel>
          <h2>
            Advice and build
            <br />
            <span className="muted">should stay connected.</span>
          </h2>
        </div>
        <div className="prose">
          <h3>Not strategy that stops at a deck.</h3>
          <p>
            An AI consultant can be useful when your internal team already owns
            implementation. Archangel is designed for management teams that want
            the same partner involved in deciding what should change and making
            the change work.
          </p>
          <h3>Not a build request looking for a problem.</h3>
          <p>
            A development agency is useful when the scope is already clear. We
            begin earlier: with the workflow, the baseline and the business
            result. The right answer may be a custom system, an existing tool,
            a simpler process, or no AI at all.
          </p>
          <TextLink href="/insights/what-is-an-ai-transformation-partner">
            What an AI transformation partner should do
          </TextLink>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="05">What we are accountable for</SectionLabel>
            <h2>
              One line from
              <br />
              <span className="muted">problem to result.</span>
            </h2>
          </div>
          <ol className="editorial-list">
            {[
              [
                "Business case",
                "Define the baseline, the value at stake and the operating measure before a build is funded.",
              ],
              [
                "Workflow design",
                "Map the current process, remove unnecessary work and define where human judgment stays.",
              ],
              [
                "Implementation",
                "Build or integrate the system around real data, permissions, controls and operating constraints.",
              ],
              [
                "Adoption & measurement",
                "Train the people using it, observe the workflow in practice and compare the result with the baseline.",
              ],
            ].map(([a, b], i) => (
              <li key={a}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="06">Implementation discipline</SectionLabel>
          <h2>
            Designed to work
            <br />
            inside the business.
          </h2>
        </div>
        <div className="prose">
          <h3>Human control where it matters.</h3>
          <p>
            Review points, permissions and exception handling are designed with
            the workflow. We establish how outputs will be checked and who
            remains accountable for decisions.
          </p>
          <h3>Clear ownership after launch.</h3>
          <p>
            Implementation includes the operating instructions, testing,
            training and measurement needed to use the system. Support and
            further development are defined in the delivery scope.
          </p>
          <TextLink href="/work">See the work and delivery framework</TextLink>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell section-grid">
          <div>
            <SectionLabel number="07">Bangkok, Thailand</SectionLabel>
            <h2>
              Close to the
              <br />
              operating reality.
            </h2>
          </div>
          <div className="prose">
            <p>
              Archangel Company Limited is based in Bangkok and Thailand BOI
              promoted for software and digital platform development. Founder &
              Executive Director Farhan Sabbir leads strategy and
              implementation.
            </p>
            <p lang="th">
              เราเริ่มจากงานจริงขององค์กร เลือกจุดที่ AI สร้างผลลัพธ์ได้ชัดเจน
              แล้วออกแบบและพัฒนาระบบให้เหมาะกับการทำงาน
            </p>
            <TextLink href="/ai-transformation-partner-bangkok">
              AI transformation partner in Bangkok
            </TextLink>
            <div style={{ marginTop: 18 }}>
              <TextLink href="/work">About Archangel</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="08">Questions</SectionLabel>
          <h2>Before we begin.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <Closing />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, site } from "@/lib/site";
import {
  Closing,
  SectionLabel,
  TextLink,
} from "@/components/editorial/Elements";

export const metadata: Metadata = {
  title: "What Is an AI Transformation Partner? A Practical Guide | Archangel",
  description:
    "An AI transformation partner connects strategy, workflow redesign, implementation and measurement. A practical guide for management teams evaluating AI partners.",
  alternates: {
    canonical: "/insights/what-is-an-ai-transformation-partner",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "What Is an AI Transformation Partner?",
    description:
      "What the role should own, how it differs from consulting or an AI agency, and what management teams should expect before they hire one.",
    url: "/insights/what-is-an-ai-transformation-partner",
    type: "article",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "What Is an AI Transformation Partner? — Archangel",
      },
    ],
  },
};

const articleUrl = absoluteUrl("/insights/what-is-an-ai-transformation-partner");

const faqs = [
  {
    question: "What is an AI transformation partner?",
    answer:
      "An AI transformation partner works across strategy and implementation. The role is to identify where AI can change business performance, redesign the workflow, implement the right system, support adoption and measure the result.",
  },
  {
    question: "How is an AI transformation partner different from an AI consultant?",
    answer:
      "A consultant may stop at analysis and recommendations. A transformation partner remains accountable through implementation, adoption and measurement, so the strategy and the working system stay connected.",
  },
  {
    question: "How is an AI transformation partner different from an AI agency?",
    answer:
      "An AI agency often begins with a build request. A transformation partner should begin with the operating problem, decide whether AI is appropriate, redesign the workflow and only then determine what should be built or bought.",
  },
  {
    question: "What should an AI transformation partner measure?",
    answer:
      "The measures depend on the workflow, but useful baselines include cycle time, cost per case, error or rework rate, throughput, service quality, adoption and revenue or margin where the workflow directly affects them.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: "What Is an AI Transformation Partner? A Practical Guide",
      description:
        "A practical guide to the role of an AI transformation partner, how it differs from consulting or an AI agency, and what management teams should expect.",
      datePublished: "2026-09-20",
      dateModified: "2026-09-20",
      mainEntityOfPage: articleUrl,
      author: {
        "@type": "Person",
        "@id": `${site.url}/#farhan-sabbir`,
        name: "Farhan Sabbir",
        url: absoluteUrl("/farhan-sabbir"),
      },
      publisher: {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        url: site.url,
      },
      about: [
        "AI transformation partner",
        "AI consulting",
        "AI implementation",
        "Workflow redesign",
        "Enterprise AI",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
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

export default function AITransformationPartnerGuide() {
  return (
    <main id="main-content" className="interior aa-studio-interior">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <header className="page-hero page-shell">
          <SectionLabel number="01">Guide / AI transformation</SectionLabel>
          <h1>
            What is an AI
            <br />
            <span className="muted">transformation partner?</span>
          </h1>
          <p className="hero-deck">
            A useful partner should do more than recommend tools or build an
            isolated automation. The job is to connect business judgment,
            workflow redesign, implementation and measurable operating results.
          </p>
          <div className="article-byline">
            <Link href="/farhan-sabbir">By Farhan Sabbir</Link>
            <time dateTime="2026-09-20">20 September 2026</time>
            <span>Archangel Company Limited</span>
          </div>
        </header>

        <div className="page-shell article-layout">
          <nav className="article-sidebar" aria-label="Article contents">
            <a href="#definition">Definition</a>
            <a href="#ownership">What the partner owns</a>
            <a href="#difference">Consultant vs agency vs partner</a>
            <a href="#selection">How to choose</a>
            <a href="#thailand">Thailand</a>
            <a href="#questions">Questions</a>
          </nav>

          <div className="article-body">
            <h2 id="definition">The short definition.</h2>
            <p>
              An AI transformation partner helps a management team decide where
              AI can materially improve the business, redesign the underlying
              work, implement the right system and measure whether the change
              actually produced value.
            </p>
            <p>
              That definition matters because buying AI software is not the same
              as changing how a company operates. A team can have access to the
              best models available and still move information through the same
              slow approvals, duplicate data entry and manual handoffs.
            </p>
            <p>
              The transformation happens when the workflow changes. AI is one
              component of that new operating design.
            </p>

            <h2 id="ownership">What should an AI transformation partner own?</h2>
            <p>
              The strongest engagement has one connected line from the business
              problem to the production system. In practice, that means four
              responsibilities.
            </p>
            <ol className="editorial-list">
              {[
                [
                  "Find",
                  "Identify workflows with enough cost, delay, error, volume or commercial importance to justify change.",
                ],
                [
                  "Redesign",
                  "Remove unnecessary work, define the future process and decide where human judgment must remain.",
                ],
                [
                  "Implement",
                  "Build, integrate or configure the system around real data, permissions, controls and operating constraints.",
                ],
                [
                  "Measure",
                  "Compare the new process with the baseline and decide whether the result justifies wider deployment.",
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
            <p>
              If those responsibilities are split between unrelated advisers,
              developers and internal owners, important assumptions can get lost
              between strategy and implementation. A transformation partner is
              most useful when that gap is deliberately kept small.
            </p>

            <h2 id="difference">
              AI consultant, AI agency or AI transformation partner?
            </h2>
            <p>
              The labels overlap, but the operating model is different.
            </p>
            <h3>AI consultant</h3>
            <p>
              Usually strongest at diagnosis, strategy, governance and
              recommendations. This can be the right fit when the organization
              already has capable internal product and engineering teams.
            </p>
            <h3>AI agency or development firm</h3>
            <p>
              Usually strongest when the scope is already known and the main
              requirement is to design and build a system. The risk is beginning
              with a requested solution before validating whether the workflow
              itself should change.
            </p>
            <h3>AI transformation partner</h3>
            <p>
              Should connect both sides: business diagnosis and implementation.
              The partner helps decide what is worth changing, then stays close
              enough to the build and rollout to remain accountable for the
              result.
            </p>

            <h2 id="selection">How should a management team choose one?</h2>
            <p>
              Start with the questions the partner asks. A serious first
              conversation should quickly move beyond models and tools.
            </p>
            <ol className="editorial-list">
              {[
                [
                  "Business case",
                  "Can they identify the baseline, economics and operating measure before proposing a build?",
                ],
                [
                  "Workflow depth",
                  "Do they understand how the work moves through people, systems, approvals and exceptions?",
                ],
                [
                  "Implementation",
                  "Can the same team that recommends the change also make it work in production?",
                ],
                [
                  "Controls",
                  "Can they explain permissions, review points, failure handling and where humans remain accountable?",
                ],
                [
                  "Measurement",
                  "Will the project be judged against a real baseline rather than a demo or feature checklist?",
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

            <h2>What should be measured?</h2>
            <p>
              The metric should follow the workflow. Common examples include
              cycle time, cost per case, rework rate, throughput, response time,
              conversion, service quality and adoption. For commercially
              important workflows, revenue or margin may also be appropriate.
            </p>
            <p>
              The important point is to establish the baseline first. Without a
              baseline, a faster-looking system can still fail to create a
              meaningful business improvement.
            </p>

            <h2 id="thailand">Choosing an AI transformation partner in Thailand.</h2>
            <p>
              Local operating context matters when implementation touches Thai
              teams, local systems, customer communication, internal approvals
              or multilingual workflows. The partner should be able to work with
              the people doing the job, not only present a remote strategy.
            </p>
            <p>
              Archangel Company Limited is based in Bangkok and works with
              management teams in Thailand across AI transformation, workflow
              implementation and applied AI systems.
            </p>
            <p>
              Our starting point is deliberately narrow: find one workflow where
              the economics are visible, establish the baseline, and decide what
              is worth changing before committing to a larger transformation.
            </p>
            <p>
              See our{" "}
              <Link href="/ai-transformation-partner-thailand">
                AI transformation partner work in Thailand
              </Link>{" "}
              or the{" "}
              <Link href="/ai-transformation">
                AI implementation and 30-day pilot in Bangkok
              </Link>.
            </p>

            <h2 id="questions">Common questions.</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

            <p>
              For Thailand-specific context, read{" "}
              <Link href="/insights/ai-transformation-thailand-2026">
                AI Transformation in Thailand 2026: The Execution Gap
              </Link>.
            </p>
          </div>
        </div>
      </article>
      <Closing title="Start with the work worth changing." />
    </main>
  );
}

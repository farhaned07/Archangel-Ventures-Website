import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation in Thailand 2026: The Execution Gap | Archangel",
  description:
    "Thailand is adopting AI quickly, but most organizations are still struggling to scale it into measurable business value. What management teams should do next.",
  alternates: {
    canonical: "/insights/ai-transformation-thailand-2026",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Transformation in Thailand 2026: The Execution Gap",
    description:
      "Why Thailand's AI challenge has shifted from adoption to workflow redesign, implementation and measurable business value.",
    url: "/insights/ai-transformation-thailand-2026",
    type: "article",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Transformation in Thailand 2026 — Archangel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Transformation in Thailand 2026: The Execution Gap",
    description:
      "Thailand does not have an AI adoption problem. It has an execution problem.",
    images: ["/opengraph-image"],
  },
};

const articleUrl = absoluteUrl("/insights/ai-transformation-thailand-2026");

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${articleUrl}#article`,
  headline: "AI Transformation in Thailand 2026: The Execution Gap",
  description:
    "An analysis of Thailand's AI transformation gap and what management teams should do to move from pilots to measurable business value.",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
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
    "AI transformation in Thailand",
    "Enterprise AI",
    "Workflow redesign",
    "AI implementation",
  ],
};

const sources = [
  {
    name: "Deloitte Thailand Digital Transformation Survey 2026",
    href: "https://www.deloitte.com/southeast-asia/en/services/consulting/perspectives/digital-transformation-survey.html",
  },
  {
    name: "Microsoft Work Trend Index 2026 — Thailand",
    href: "https://news.microsoft.com/source/asia/2026/08/04/microsoft-unveils-2026-ai-work-trends-for-thailand/",
  },
  {
    name: "PwC 29th Global CEO Survey — Thailand",
    href: "https://www.pwc.com/th/en/ceosurvey/ceo-survey-2026-en.html",
  },
];

export default function AITransformationThailandInsight() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        <header className="page-shell pt-14 md:pt-24 lg:pt-30 pb-16 md:pb-24">
          <div className="max-w-5xl">
            <p className="eyebrow text-[#85857f]">Archangel Intelligence · September 2026</p>
            <h1 className="mt-6 text-[3.5rem] sm:text-[5rem] lg:text-[6.6rem] leading-[0.9] tracking-[-0.07em] font-medium">
              Thailand does not have an AI adoption problem.
              <span className="block text-[#777771]">It has an execution problem.</span>
            </h1>
            <p className="mt-8 md:mt-10 text-lg md:text-2xl leading-relaxed tracking-[-0.02em] text-[#666660] max-w-3xl">
              AI transformation in Thailand has reached a new phase. Employees are using AI. Companies are funding pilots. The harder question is whether any of it is changing the economics of the business.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#85857f]">
              <span>By Farhan Sabbir</span>
              <span>Founder & Executive Director, Archangel Company Limited</span>
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </header>

        <section className="bg-[#11110f] text-[#f5f5f0]">
          <div className="page-shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Stat value="61%" label="of Thai organizations are implementing AI" source="Deloitte, 2026" />
              <Stat value="19%" label="have scaled AI across the enterprise" source="Deloitte, 2026" />
              <Stat value="18%" label="of Thai CEOs report both higher revenue and lower costs from AI" source="PwC, 2026" />
            </div>
          </div>
        </section>

        <section className="page-shell py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.025em] text-[#444440]">
              The numbers point in the same direction. Thailand is moving quickly into AI, but adoption is running ahead of operating-model change.
            </p>

            <h2 className="mt-16 text-[2.6rem] md:text-[3.6rem] leading-[0.98] tracking-[-0.05em] font-medium">
              The market has moved from “Should we use AI?” to “Where is the value?”
            </h2>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#666660]">
              Deloitte reports that 61% of Thai organizations are now implementing AI, yet only 19% have scaled it across the enterprise. Half report cost reduction, while only 9% report new revenue from AI. Deloitte also found that 40% struggle to identify high-value AI use cases and 38% are constrained by data readiness and security.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#666660]">
              That is an execution gap. Buying another AI tool does not close it. The work itself has to be examined: where time disappears, where decisions slow down, where information is re-entered, where approvals accumulate, and where a model can materially change the unit economics.
            </p>

            <h2 className="mt-16 text-[2.6rem] md:text-[3.6rem] leading-[0.98] tracking-[-0.05em] font-medium">
              Thailand's workforce is ahead of many organizations.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#666660]">
              Microsoft's 2026 Work Trend Index identifies 32% of Thai workers as “Frontier Professionals,” double the global average reported in the study. But Microsoft also describes a transformation paradox: 85% of Thai AI users fear falling behind, while 60% say it feels safer to focus on current goals than redesign work around AI.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#666660]">
              In practical terms, individual AI usage can rise while the company itself barely changes. Employees become faster at the old workflow. The workflow remains old.
            </p>

            <h2 className="mt-16 text-[2.6rem] md:text-[3.6rem] leading-[0.98] tracking-[-0.05em] font-medium">
              The winning sequence is not tool → rollout. It is work → value → system.
            </h2>
            <div className="mt-8 space-y-3">
              <Step number="01" title="Find" copy="Locate expensive, repetitive, delayed or decision-heavy work. Put a number on the problem before proposing AI." />
              <Step number="02" title="Simplify" copy="Remove unnecessary steps. Automating a bad process produces a faster bad process." />
              <Step number="03" title="Build" copy="Implement the smallest system capable of proving the business case in the real workflow." />
              <Step number="04" title="Measure" copy="Track time, cost, cycle time, quality, risk or revenue. If the metric does not move, the transformation has not happened." />
            </div>

            <h2 className="mt-16 text-[2.6rem] md:text-[3.6rem] leading-[0.98] tracking-[-0.05em] font-medium">
              Where management teams should look first.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#666660]">
              The best first AI transformation project is rarely the most futuristic one. It is usually a workflow management already knows is expensive: finance operations, reporting, procurement, document processing, customer operations, internal knowledge, sales follow-up or another process with visible friction and enough volume to matter.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#666660]">
              PwC's Thailand CEO survey reinforces the point. Only 18% of Thai CEOs reported the combination everyone actually wants from AI: increased revenue and reduced cost. The objective should therefore be commercial evidence, not AI activity.
            </p>

            <div className="mt-16 rounded-[1.8rem] border border-[#deded8] bg-white p-7 md:p-9">
              <p className="eyebrow text-[#85857f]">Archangel's position</p>
              <p className="mt-5 text-xl md:text-2xl leading-relaxed tracking-[-0.025em] text-[#444440]">
                AI transformation should begin with the work. Find the expensive part. Simplify it. Build only what can prove value. Measure what changed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/ai-transformation-partner-thailand" className="button-secondary w-full sm:w-auto">
                  AI Transformation Partner Thailand <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
                  Explore the ฿45,000 workshop
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[#deded8]">
              <p className="eyebrow text-[#85857f]">Sources</p>
              <div className="mt-5 space-y-3">
                {sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 text-sm md:text-base text-[#555550] hover:text-[#11110f] transition-colors"
                  >
                    <span>{source.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecece6]">
          <div className="page-shell py-16 md:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
              <div>
                <p className="eyebrow text-[#7a7a74]">AI transformation in Thailand</p>
                <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[0.95] tracking-[-0.055em] font-medium max-w-4xl">
                  Start with one expensive piece of work.
                </h2>
              </div>
              <Link href={bookingHref} className="button-primary w-full sm:w-auto" data-cta="insight-opportunity-call">
                Book a 15 minute call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

function Stat({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="rounded-[1.6rem] border border-[#2d2d2a] p-6 md:p-7 min-h-[210px] flex flex-col justify-between">
      <p className="text-[3rem] md:text-[4rem] leading-none tracking-[-0.06em] font-medium">{value}</p>
      <div>
        <p className="text-sm md:text-base leading-relaxed text-[#d0d0c8]">{label}</p>
        <p className="mt-2 text-xs text-[#777771]">{source}</p>
      </div>
    </div>
  );
}

function Step({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-4 rounded-[1.4rem] border border-[#deded8] bg-white p-5 md:p-6">
      <span className="text-xs text-[#9a9a94] pt-1">{number}</span>
      <div>
        <h3 className="text-xl font-medium tracking-[-0.03em]">{title}</h3>
        <p className="mt-2 text-sm md:text-base leading-relaxed text-[#777771]">{copy}</p>
      </div>
    </div>
  );
}

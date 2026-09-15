import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Transformation Partner Thailand | Archangel",
  description:
    "Archangel is a Bangkok-based AI transformation partner helping management teams in Thailand find high-value AI opportunities, redesign workflows, implement working systems and measure business results.",
  alternates: {
    canonical: "/ai-transformation-partner-thailand",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Transformation Partner Thailand | Archangel",
    description:
      "Strategy and implementation for management teams in Thailand that want measurable business value from AI.",
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
    title: "AI Transformation Partner Thailand | Archangel",
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
    question: "Who is the AI Transformation Workshop for?",
    answer:
      "The workshop is designed for management teams that know AI matters but need a practical way to decide where to start, what to fund and what business result to measure.",
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
        name: "AI Transformation Workshop",
        price: "45000",
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

const workAreas = [
  ["Find", "Map expensive, repetitive or decision-heavy work and identify where AI is actually worth using."],
  ["Simplify", "Remove unnecessary steps before adding automation, agents or models."],
  ["Build", "Implement the smallest working system that can prove the business case."],
  ["Measure", "Track time saved, cost reduced, cycle time, quality or revenue impact."],
];

const useCases = [
  "Finance operations and reporting",
  "Procurement and document workflows",
  "Customer operations and support",
  "Internal knowledge and decision support",
  "Sales operations and follow-up",
  "Healthcare and multilingual workflows",
];

export default function AITransformationPartnerThailandPage() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="page-shell pt-14 md:pt-24 lg:pt-30 pb-16 md:pb-24">
        <div className="max-w-6xl">
          <p className="eyebrow text-[#85857f]">AI Transformation Partner · Thailand</p>
          <h1 className="mt-6 text-[3.8rem] sm:text-[5.6rem] lg:text-[7.4rem] leading-[0.89] tracking-[-0.072em] font-medium max-w-[1180px]">
            AI transformation
            <span className="block text-[#777771]">that reaches the work.</span>
          </h1>
          <p className="mt-8 md:mt-10 text-lg md:text-2xl leading-relaxed tracking-[-0.02em] text-[#666660] max-w-3xl">
            Archangel Company Limited is a Bangkok-based AI transformation partner for management teams in Thailand. We find the work worth changing, simplify it, build the right system and measure what changed.
          </p>
          <div className="mt-9 md:mt-11 flex flex-col sm:flex-row gap-3">
            <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
              Start with the ฿45,000 workshop <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={bookingHref} className="button-secondary w-full sm:w-auto" data-cta="partner-page-opportunity-call">
              Book a 15 minute call
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              ["Based", "Bangkok, Thailand"],
              ["Company", "Archangel Company Limited"],
              ["Status", "Thailand BOI promoted"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.6rem] border border-[#2d2d2a] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
                <span className="text-xs text-[#777771]">{label}</span>
                <p className="text-xl tracking-[-0.03em]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-[#85857f]">How we work</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">
              Find. Simplify. Build. Measure.
            </h2>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#777771] max-w-xl">
              AI transformation should start with an operating problem, not a tool. The sequence keeps investment tied to work that management can see and measure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {workAreas.map(([title, copy], index) => (
              <div key={title} className="rounded-[1.6rem] border border-[#deded8] bg-white p-6 min-h-[210px] flex flex-col justify-between">
                <span className="text-xs text-[#9a9a94]">0{index + 1}</span>
                <div>
                  <h3 className="text-xl tracking-[-0.03em] font-medium">{title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[#777771]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-[#7a7a74]">Where AI can earn its place</p>
              <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">
                Start where work is expensive.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-[#d6d6cf] pb-5">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <p className="text-base md:text-lg text-[#555550]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-[#85857f]">For organizations in Thailand</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">
              Built in Bangkok. Close to the operating reality.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.025em] text-[#555550]">
              Archangel works with CEOs, COOs, CFOs and business leaders who need a practical answer to one question: where will AI create enough value to justify changing the work?
            </p>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#777771]">
              สำหรับองค์กรในประเทศไทย เราเริ่มจากกระบวนการทำงานจริง เลือกจุดที่ AI สร้างผลลัพธ์ทางธุรกิจได้ชัดเจน แล้วค่อยออกแบบและลงมือทำระบบที่เหมาะกับองค์กร
            </p>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#777771]">
              The first engagement is a management workshop in Bangkok. It produces a workflow map, 3–5 ranked AI opportunities, an ROI lens and a practical first move. If implementation makes sense, the workshop fee is credited toward the build.
            </p>
            <Link href="/ai-transformation" className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-[#b9b9b2] pb-1">
              Explore the AI Transformation Workshop <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-[#777771]">Questions</p>
              <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">
                AI transformation in Thailand.
              </h2>
            </div>
            <div className="divide-y divide-[#2d2d2a]">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-7 first:pt-0">
                  <h3 className="text-lg md:text-xl font-medium tracking-[-0.025em]">{faq.question}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[#a2a29b] max-w-2xl">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
          <div>
            <p className="eyebrow text-[#85857f]">Start small</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[0.95] tracking-[-0.055em] font-medium max-w-4xl">
              One problem. One decision. Then build what proves value.
            </h2>
          </div>
          <Link href={bookingHref} className="button-primary w-full sm:w-auto" data-cta="partner-page-bottom-call">
            Book a 15 minute call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

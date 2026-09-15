import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CompanySystems } from "@/components/ui/CompanySystems";
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
    <main className="pt-[64px] md:pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyPageSchema) }}
      />

      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#777771] hover:text-[#11110f] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archangel
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-end mt-12 md:mt-16">
          <div>
            <p className="eyebrow text-[#85857f]">Archangel Company Limited</p>
            <h1 className="display-hero mt-5 max-w-5xl">Built close to the work.</h1>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-[#696963] max-w-xl lg:ml-auto">
            Archangel Company Limited is a Bangkok-based, Thailand BOI-promoted software and AI company. We work on AI transformation and applied AI systems where workflow, language and operating context matter.
          </p>
        </div>
      </section>

      <CompanySystems />

      <section className="page-shell py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-[#85857f]">Founder led</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] leading-[0.96] tracking-[-0.055em] font-medium">Strategy and implementation stay under one team.</h2>
          </div>
          <div className="lg:pt-3 max-w-2xl">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.025em] text-[#555550]">Farhan Sabbir leads Archangel across product, implementation and client work.</p>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-[#777771]">AI Transformation Partner in Thailand and Founder & Executive Director of Archangel Company Limited.</p>
            <Link href="/farhan-sabbir" className="mt-7 inline-flex items-center gap-2 text-sm font-medium border-b border-[#b9b9b2] pb-1">
              Farhan Sabbir <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
            <div>
              <p className="eyebrow text-[#7a7a74]">Work with Archangel</p>
              <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[0.95] tracking-[-0.055em] font-medium max-w-4xl">Start with one expensive piece of work.</h2>
              <Link href="/ai-transformation-partner-thailand" className="mt-7 inline-flex items-center gap-2 text-sm font-medium border-b border-[#b9b9b2] pb-1">
                AI Transformation Partner in Thailand <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <Link href="/ai-transformation" className="button-primary w-full sm:w-auto">
              AI Transformation Workshop <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

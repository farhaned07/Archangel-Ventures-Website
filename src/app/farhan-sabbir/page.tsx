import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

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
      "Founder & Executive Director of Archangel Company Limited. AI transformation, applied AI systems and workflow implementation in Thailand.",
    url: "/farhan-sabbir",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Sabbir | AI Transformation Partner in Thailand",
    description:
      "Founder & Executive Director of Archangel Company Limited. AI transformation and applied AI systems in Thailand.",
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
      "AI Transformation Partner in Thailand and Founder & Executive Director of Archangel Company Limited.",
    url: absoluteUrl("/farhan-sabbir"),
    sameAs: [site.linkedinUrl],
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

export default function FarhanSabbirPage() {
  return (
    <main className="pt-[64px] md:pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <section className="page-shell pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#777771] hover:text-[#11110f] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Company
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-end mt-12 md:mt-16">
          <div>
            <p className="eyebrow text-[#85857f]">Founder & Executive Director</p>
            <h1 className="display-hero mt-5 max-w-5xl">Farhan Sabbir.</h1>
          </div>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-xl md:text-2xl leading-relaxed tracking-[-0.025em] text-[#555550]">
              AI Transformation Partner in Thailand.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#777771]">
              I help management teams find where AI can create measurable business value, then build the systems that make it work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] text-[#f5f5f0]">
        <div className="page-shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-[1.6rem] border border-[#2d2d2a] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <span className="text-xs text-[#777771]">Company</span>
              <p className="text-xl tracking-[-0.03em]">Archangel Company Limited</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#2d2d2a] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <span className="text-xs text-[#777771]">Based</span>
              <p className="text-xl tracking-[-0.03em]">Bangkok, Thailand</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#2d2d2a] p-6 md:p-7 min-h-[170px] flex flex-col justify-between">
              <span className="text-xs text-[#777771]">Company status</span>
              <p className="text-xl tracking-[-0.03em]">Thailand BOI promoted</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-[#85857f]">What I work on</p>
            <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[0.96] tracking-[-0.055em] font-medium">
              Make AI useful at work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["AI transformation", "Find expensive workflows and rank where AI is worth funding."],
              ["Applied AI systems", "Build working software around real operating constraints."],
              ["Workflow redesign", "Simplify the process before adding automation or models."],
              ["Implementation", "Move from strategy to deployed systems with measurable outcomes."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.6rem] border border-[#deded8] bg-white p-6 min-h-[190px] flex flex-col justify-between">
                <h3 className="text-xl tracking-[-0.03em] font-medium">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-[#777771]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecece6]">
        <div className="page-shell py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
            <div>
              <p className="eyebrow text-[#7a7a74]">Connect</p>
              <h2 className="mt-5 text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[0.95] tracking-[-0.055em] font-medium max-w-4xl">
                Start with one expensive piece of work.
              </h2>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium border-b border-[#a7a7a0] pb-1"
              >
                LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <Link href={bookingHref} className="button-primary w-full sm:w-auto" data-cta="founder-opportunity-call">
              Book a 15 minute call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

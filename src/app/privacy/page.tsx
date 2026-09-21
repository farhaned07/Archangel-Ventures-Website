import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice | Archangel",
  description:
    "How Archangel Company Limited handles website analytics, advertising measurement and contact information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="pt-[64px] md:pt-[72px] bg-[#f6f6f2]">
      <section className="page-shell py-12 md:py-20 lg:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#777771] hover:text-[#11110f] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archangel
        </Link>

        <div className="mt-10 md:mt-14 max-w-3xl">
          <p className="eyebrow text-[#85857f]">Privacy</p>
          <h1 className="mt-5 text-[3rem] sm:text-[4.5rem] lg:text-[5.4rem] leading-[0.94] tracking-[-0.06em] font-medium">
            Privacy notice.
          </h1>
          <p className="mt-7 text-lg text-[#696963] leading-relaxed">
            This notice explains how {site.legalName} handles information collected through this website and our booking process.
          </p>
        </div>

        <div className="mt-14 md:mt-20 max-w-3xl border-t border-[#d9d9d3]">
          <PrivacySection title="Information we may collect">
            We may receive information you choose to provide when you contact us or book a meeting, such as your name, business email, company and meeting details. We may also collect limited website usage information such as page visits, referral source and interactions with key calls to action.
          </PrivacySection>

          <PrivacySection title="Analytics and advertising measurement">
            When enabled and where consent is required, Archangel may use Google Analytics, Google Tag Manager and Google Ads measurement tools to understand website performance, attribute enquiries and improve advertising. Consent choices are used to control analytics and advertising storage where applicable.
          </PrivacySection>

          <PrivacySection title="How we use information">
            We use information to respond to enquiries, schedule meetings, assess whether our services are relevant, improve the website, measure marketing performance and operate the business. We do not sell personal information to advertisers.
          </PrivacySection>

          <PrivacySection title="Service providers">
            We may use service providers such as Google and Vercel to host the website, provide scheduling, analytics or advertising measurement. Their handling of information is subject to their own terms and privacy practices.
          </PrivacySection>

          <PrivacySection title="Retention and security">
            We keep information only for as long as reasonably necessary for business, legal and operational purposes and use reasonable technical and organisational measures to protect it.
          </PrivacySection>

          <PrivacySection title="Your choices">
            You can decline optional analytics and advertising measurement through the website consent controls. You may also contact us to ask about personal information we hold or request a correction or deletion where applicable.
          </PrivacySection>

          <PrivacySection title="Contact">
            For privacy questions, contact us at{" "}
            <a className="underline underline-offset-4 text-[#11110f]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </PrivacySection>

          <p className="py-8 text-xs text-[#8a8a84]">Last updated 15 September 2026.</p>
        </div>
      </section>
    </main>
  );
}

function PrivacySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8 md:py-10 border-b border-[#d9d9d3]">
      <h2 className="text-xl md:text-2xl tracking-[-0.035em] font-medium">{title}</h2>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-[#6d6d67]">{children}</p>
    </section>
  );
}

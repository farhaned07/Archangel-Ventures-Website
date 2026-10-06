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
    <main id="main-content" className="privacy-page">
      <section className="privacy-inner page-shell">
        <Link href="/" className="privacy-back">
          <ArrowLeft className="privacy-back-icon" /> Back to Archangel
        </Link>

        <div className="privacy-heading">
          <p className="eyebrow privacy-eyebrow">Privacy</p>
          <h1 className="privacy-title">
            Privacy notice.
          </h1>
          <p className="privacy-lead">
            This notice explains how {site.legalName} handles information collected through this website and our booking process.
          </p>
        </div>

        <div className="privacy-body">
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
            <a className="privacy-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </PrivacySection>

          <p className="privacy-updated">Last updated 15 September 2026.</p>
        </div>
      </section>
    </main>
  );
}

function PrivacySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="privacy-section">
      <h2 className="privacy-section-title">{title}</h2>
      <p className="privacy-section-copy">{children}</p>
    </section>
  );
}

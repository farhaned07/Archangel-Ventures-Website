import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Closing, SectionLabel } from "@/components/editorial/Elements";
import { absoluteUrl, bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Implementation Services & 30-Day Pilot | Archangel Thailand",
  description: "Archangel builds working AI systems for business operations. Start with a free fit call, a scoped 30-day implementation pilot from ฿150,000, or a full enterprise implementation.",
  alternates: { canonical: "/ai-transformation" },
  openGraph: {
    title: "AI Implementation & 30-Day Pilot | Archangel",
    description: "From a real workflow to a working AI system. Founder-led delivery, measurable acceptance criteria, and a practical path to production.",
    url: "/ai-transformation", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel AI implementation in Thailand" }],
  },
};
const steps = [
  ["Free fit call", "15 minutes to understand the process, its owner, the expected value, system access and decision timetable. If a pilot is not viable, we say so."],
  ["Scope and baseline", "Agree one workflow, representative data, decision owner, risk boundary, success metrics, delivery responsibilities and a written statement of work."],
  ["30-day paid pilot", "Build and test one bounded AI workflow with real users in an approved environment. Demonstrate the outcome, exceptions and limitations against the baseline."],
  ["Production and support", "After a successful pilot, agree separately on security, integration, rollout, training, monitoring and ongoing support. No automatic obligation to expand."],
];
const offering = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl("/ai-transformation")}#service`,
  name: "AI implementation and automation",
  serviceType: "AI workflow implementation and enterprise integration",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "Thailand" },
  offers: [
    { "@type": "Offer", name: "30-day AI implementation pilot", price: "150000", priceCurrency: "THB", url: absoluteUrl("/ai-transformation"), description: "Indicative starting fee. Final price depends on agreed scope, access and delivery requirements." },
    { "@type": "Offer", name: "Enterprise AI implementation", price: "400000", priceCurrency: "THB", url: absoluteUrl("/ai-transformation"), description: "Indicative starting fee; scoped and quoted separately." }
  ],
};
export default function AITransformationPage() {
  return (
    <main id="main-content" className="interior">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offering) }} />
      <section className="page-hero page-shell split-hero">
        <div>
          <SectionLabel number="01">AI implementation / Bangkok · Thailand</SectionLabel>
          <h1>From a real problem.<br /><span className="muted">To a working system.</span></h1>
          <p className="hero-deck">You bring an operational problem and someone who owns it. We redesign the workflow, build the AI system, test it with your team and measure what changes.</p>
          <div className="hero-actions">
            <Link href={bookingHref} className="button-primary" data-cta="implementation-hero-call">
              Discuss your implementation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="workshop-sheet">
          <div className="sheet-top"><span>First delivery engagement</span><span>One workflow · 30 days</span></div>
          <p className="workshop-price">From ฿150,000</p>
          <p className="sheet-note">Paid implementation pilot · scope confirmed before work begins</p>
          <ol className="deliverables">
            <li><span>01</span> A measured baseline and acceptance criteria</li>
            <li><span>02</span> A working AI-assisted workflow</li>
            <li><span>03</span> Human review, testing and exception handling</li>
            <li><span>04</span> Results and a production go/no-go decision</li>
          </ol>
          <p className="sheet-note">One bounded use case. Major integrations, licences, infrastructure and full production rollout are quoted separately.</p>
        </div>
      </section>
      <section className="dark-section">
        <div className="page-shell section-grid">
          <div><SectionLabel number="02">The engagement</SectionLabel><h2>We build.<br /><span className="muted">You see what changes.</span></h2></div>
          <ol className="editorial-list">
            {steps.map(([title,copy],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div><SectionLabel number="03">Ways to engage</SectionLabel><h2>Start small.<br /><span className="muted">Scale what works.</span></h2></div>
        <div className="prose">
          <h3>Free initial assessment</h3><p>A 15-minute fit call. We establish whether there is a defined business problem, an accountable owner, accessible systems and a sensible next step. In-depth discovery is scoped separately.</p>
          <h3>30-day implementation pilot · from ฿150,000</h3><p>One agreed workflow, one measurable outcome, a working system tested with your team and a clear decision on rollout. Timeline begins after scope, permissions and representative data are ready.</p>
          <h3>Enterprise implementation · from ฿400,000</h3><p>Production integrations, access control, deployment, training and adoption. Final pricing and schedule depend on the systems, data and operational risk involved.</p>
          <h3>Ongoing operation · scoped monthly</h3><p>Monitoring, support and optimization after deployment. We agree support hours, responsibilities, infrastructure and third-party costs in writing. No support retainer is presumed.</p>
          <p>Prices are indicative starting fees in THB, excluding applicable taxes and third-party costs. Each engagement requires an agreed statement of work.</p>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div><SectionLabel number="04">Fit</SectionLabel><h2>Bring the process owner.<br /><span className="muted">Not a slide deck.</span></h2></div>
        <div className="prose"><p>We work best with teams that already have a workflow worth changing, a decision-maker, a real data sample and the ability to test the result. We measure time, accuracy, throughput, quality or cost against the current process; savings are not promised before the baseline is known.</p><p>Not every process needs AI. We recommend simpler automation when it can solve the problem more reliably.</p></div>
      </section>
      <Closing title="Tell us what needs to work better." />
    </main>
  );
}

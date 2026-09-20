import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CornerDownRight, MoveUpRight } from "lucide-react";
import { BuildLab } from "@/components/editorial/BuildLab";
import { HannaFlow } from "@/components/editorial/Elements";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archangel | Technology & AI Implementation Partner in Bangkok",
  description: "Archangel is a founder-led technology and AI implementation partner. We design and build software products, intelligent workflows, and digital platforms from prototype to production.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — Ideas into working technology.",
    description: "Product engineering, AI automation and digital platforms. Designed and built by a founder-led team in Bangkok.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel — Technology and AI implementation" }],
  },
};

const capabilities = [
  { index: "01", name: "AI & automation", short: "Make complex work feel simple.", copy: "AI agents, document intelligence, operational workflows, and integrations that belong inside the business—not in another dashboard.", href: "/ai-transformation", tags: ["INTELLIGENT WORKFLOWS", "SYSTEM INTEGRATION"] },
  { index: "02", name: "Product engineering", short: "From first sketch to first user.", copy: "Rapid prototypes, customer-facing apps, and custom software built around a clear use case, with a path to a real production system.", href: "/services#product-engineering", tags: ["PROTOTYPES & MVPS", "CUSTOM SOFTWARE"] },
  { index: "03", name: "Digital experiences", short: "An experience worth remembering.", copy: "High-quality websites, customer portals, and digital platforms where product thinking, brand, engineering and performance meet.", href: "/services#digital-experiences", tags: ["WEBSITES & PLATFORMS", "INTERFACE ENGINEERING"] },
];

export default function Home() {
  return (
    <main id="main-content" className="aa-home">
      <section className="aa-hero">
        <div className="aa-hero-glow" aria-hidden="true" />
        <div className="page-shell aa-hero-inner">
          <div className="aa-hero-topline">
            <span><i className="aa-status-dot" /> AN INDEPENDENT TECHNOLOGY STUDIO</span>
            <span>BANGKOK, THAILAND / WORKING EVERYWHERE</span>
          </div>
          <div className="aa-hero-grid">
            <div className="aa-hero-copy">
              <p className="aa-overline">FROM THE FIRST QUESTION TO THE FINISHED BUILD.</p>
              <h1>Ideas into<br /><em>working</em><br />technology<span className="aa-accent-dot">.</span></h1>
              <p className="aa-hero-description">We design and build AI systems, software products and digital experiences that solve real business problems. One partner from prototype to production.</p>
              <div className="aa-hero-actions">
                <Link href={bookingHref} className="aa-pill aa-pill-lime" data-cta="hero-start-project">Discuss your project <ArrowUpRight size={18} /></Link>
                <Link href="/work" className="aa-hero-sub-link">Explore the work <ArrowRight size={17} /></Link>
              </div>
              <div className="aa-hero-signature"><span className="aa-signature-icon">✳</span><p>Founder-led. Hands-on engineering.<br />Built to be used, not just presented.</p></div>
            </div>
            <div className="aa-hero-art">
              <div className="aa-art-label"><span>STUDIO / 001</span><span>EXPLORE WHAT WE BUILD <CornerDownRight size={14} /></span></div>
              <BuildLab compact />
              <p className="aa-art-note">Three interactive studies. Sample content, real interface behaviour. <span>Not client case studies.</span></p>
            </div>
          </div>
          <div className="aa-hero-bottom"><span>ARCHANGEL COMPANY LIMITED · THAILAND BOI PROMOTED</span><a href="#capabilities">SCROLL TO EXPLORE <ArrowDown size={15} /></a><span>01 / DESIGN + ENGINEERING</span></div>
        </div>
      </section>

      <section className="aa-manifesto page-shell" aria-label="Our approach">
        <div className="aa-mini-index"><span>THE PRINCIPLE</span><span>01 — 04</span></div>
        <p>Good technology does not end at <span>a clever idea.</span> It lives in the details, survives real use and makes something meaningfully better.</p>
        <div className="aa-manifesto-foot"><span>THINK CLEARLY. DESIGN CAREFULLY. BUILD PROPERLY.</span><Link href="/company">Meet Archangel <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="aa-capabilities" id="capabilities">
        <div className="page-shell">
          <div className="aa-section-heading"><div><span className="aa-kicker">WHAT WE DO / THREE DISCIPLINES</span><h2>Built for what<br /><em>comes next.</em></h2></div><p>From operational systems to new digital products, we choose the right technology for the problem—not the other way around.</p></div>
          <div className="aa-capability-list">
            {capabilities.map((item) => <Link href={item.href} className="aa-capability" key={item.index}>
              <div className="aa-capability-number">{item.index} / 03</div>
              <div className="aa-capability-main"><h3>{item.name}</h3><p>{item.short}</p><div className="aa-capability-tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div>
              <p className="aa-capability-copy">{item.copy}</p>
              <span className="aa-capability-arrow" aria-hidden="true"><ArrowUpRight size={25} /></span>
            </Link>)}
          </div>
          <div className="aa-capabilities-footer"><span>ONE TEAM. THE RIGHT DISCIPLINE FOR THE JOB.</span><Link href="/services">See all capabilities <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="aa-work-section" id="selected-work">
        <div className="page-shell">
          <div className="aa-section-heading aa-work-heading"><div><span className="aa-kicker">IN THE STUDIO / SELECTED WORK</span><h2>Less talking.<br /><em>More showing.</em></h2></div><Link href="/work" className="aa-text-link">View the studio portfolio <ArrowUpRight size={17} /></Link></div>
          <div className="aa-hanna-feature">
            <div className="aa-hanna-copy">
              <div className="aa-feature-top"><span>01 / OWN PRODUCT · HEALTHCARE</span><span>IN DEVELOPMENT</span></div>
              <div className="aa-feature-middle"><span className="aa-feature-symbol">h.</span><h3>Hanna</h3><p>From a patient conversation to a clinical note and a care plan they can understand.</p><p className="aa-hanna-detail">A product study in voice AI, structured documentation, multilingual output and clinician review.</p><a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore Hanna <ArrowUpRight size={17} /></a></div>
              <div className="aa-feature-bottom">PRODUCT DEVELOPMENT / ARCHANGEL STUDIO <span>↗</span></div>
            </div>
            <div className="aa-hanna-visual"><HannaFlow /><span className="aa-visual-caption">ILLUSTRATIVE PRODUCT WORKFLOW · NOT A CLIENT DEPLOYMENT</span></div>
          </div>
          <div className="aa-work-split">
            <div className="aa-work-brief"><span className="aa-work-card-tag">02 / ENGINEERING STUDY</span><div className="aa-work-wire" aria-hidden="true"><i /><i /><i /><i /><b>CAPTURE</b><b>CHECK</b><b>REVIEW</b><b>CONNECT</b></div><div><h3>Systems that connect<br />the work.</h3><p>An internal architecture blueprint for document-led operations, approval rules, exception handling and system handoff.</p><Link href="/work#enterprise">Explore the approach <MoveUpRight size={17} /></Link></div></div>
            <div className="aa-work-web"><span className="aa-work-card-tag">03 / LIVE DIGITAL EXPERIENCE</span><div className="aa-web-study" aria-hidden="true"><span>ARCHANGEL / DIGITAL</span><strong>Built with<br /><em>intention.</em></strong><span>DESIGN · ENGINEERING · PERFORMANCE</span></div><div><h3>Experience, engineered.</h3><p>This very site is a public example of our interface design and implementation approach.</p><Link href="/work#digital">See the build <MoveUpRight size={17} /></Link></div></div>
          </div>
          <p className="aa-work-honesty">Studio work and internal studies are identified as such. We do not present concepts as client results.</p>
        </div>
      </section>

      <section className="aa-process">
        <div className="page-shell aa-process-layout">
          <div className="aa-process-intro"><span className="aa-kicker">HOW WE WORK</span><h2>Close to the<br /><em>problem.</em><br />Responsible<br />for the build.</h2><p>We stay involved from the first operating question to the working system. No strategy handoff to a team that was not in the room.</p><Link href="/farhan-sabbir">Meet the founder <ArrowUpRight size={16} /></Link></div>
          <div className="aa-process-steps">
            {[["01","Understand","Clarify the business problem, owner, users, current workflow and what a worthwhile result looks like."],["02","Prototype","Make the important decisions visible early. Test the experience, data and technical assumptions before scaling the build."],["03","Build & integrate","Engineer the system, connect it to the right tools, handle exceptions, and test it in the environment where people work."],["04","Launch & improve","Deploy with a clear handover, monitor the actual experience, and refine against agreed success measures."]].map(([n,title,copy])=><div className="aa-process-step" key={n}><span>{n} / 04</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={18} /></div>)}
          </div>
        </div>
      </section>

      <section className="aa-start">
        <div className="page-shell aa-start-layout"><div><span className="aa-kicker">THE NEXT PROJECT STARTS HERE</span><h2>What do you<br />need <em>built?</em></h2></div><div className="aa-start-right"><p>An operational bottleneck. A product you want to test. A digital experience that needs to be better. Tell us what you are trying to make happen.</p><Link href={bookingHref} className="aa-pill aa-pill-lime" data-cta="closing-start-project">Start a conversation <ArrowUpRight size={19} /></Link><span>15-MINUTE INITIAL CALL · NO OBLIGATION</span></div></div>
      </section>
    </main>
  );
}

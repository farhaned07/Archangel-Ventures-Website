import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { BuildLab } from "@/components/editorial/BuildLab";
import { HannaFlow } from "@/components/editorial/Elements";
import { bookingHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work & Studio Portfolio | Archangel Technology & AI",
  description: "Explore Archangel's own products, technical studies and live digital experiences. Product engineering, AI implementation and software design in Bangkok.",
  alternates: { canonical: "/work" },
  openGraph: { title:"Work & Studio Portfolio | Archangel", description:"Own products, live digital work and engineering studies. Clearly labeled, built by Archangel.", url:"/work", type:"website", locale:"en_TH", siteName:"Archangel" }
};

export default function WorkPage() {
  return (
    <main id="main-content" className="aa-home aa-portfolio">
      <section className="aa-portfolio-hero">
        <div className="page-shell">
          <div className="aa-portfolio-top"><span>ARCHANGEL / SELECTED WORK</span><span>INDEPENDENT TECHNOLOGY STUDIO · BANGKOK</span></div>
          <div className="aa-portfolio-hero-row"><h1>Proof is<br /><em>in the build.</em></h1><p>Our own products, working design studies and live digital work. We show you what exists—and make the distinction between a concept and a deployed system clear.</p></div>
          <div className="aa-portfolio-hero-foot"><span>PRODUCT / AI / DIGITAL</span><span>01 — 03</span></div>
        </div>
      </section>
      <section className="aa-portfolio-project page-shell">
        <div className="aa-portfolio-project-head"><span>01 / OWN PRODUCT</span><span>HEALTHCARE AI · IN DEVELOPMENT</span></div>
        <div className="aa-portfolio-project-grid">
          <div className="aa-portfolio-copy"><span className="aa-portfolio-eyebrow">VOICE → INFORMATION → PATIENT UNDERSTANDING</span><h2>Hanna<span>.</span></h2><p className="aa-portfolio-lead">The conversation should not end in paperwork.</p><p>Hanna explores how a clinical conversation can become structured notes and a multilingual care plan, with the clinician retaining review and confirmation.</p><div className="aa-portfolio-chips"><span>VOICE AI</span><span>CLINICIAN REVIEW</span><span>MULTILINGUAL OUTPUT</span></div><a href="https://www.hanna.care" rel="noreferrer" target="_blank">Explore Hanna <ExternalLink size={16} /></a><small>Archangel's own product in development. This is not presented as a completed hospital deployment or validated clinical outcome.</small></div>
          <div className="aa-portfolio-hanna"><HannaFlow /><span>PRODUCT WORKFLOW ILLUSTRATION / NOT PATIENT DATA</span></div>
        </div>
      </section>
      <section className="aa-portfolio-project aa-portfolio-project-dark" id="enterprise">
        <div className="page-shell">
          <div className="aa-portfolio-project-head"><span>02 / INTERNAL ENGINEERING STUDY</span><span>BUSINESS SYSTEMS · ARCHITECTURE BLUEPRINT</span></div>
          <div className="aa-portfolio-enterprise"><div><span className="aa-kicker">ENGINEERING FOR REAL OPERATIONS</span><h2>Between the<br />systems<span>.</span></h2><p>Business processes fail in the handoffs. This internal architecture study shows the shape of a document-led workflow: capture information, check it against business rules, route exceptions to people and prepare a controlled handoff.</p><Link href="/ai-transformation">Our AI implementation approach <ArrowUpRight size={17} /></Link><small>An internal blueprint—not a deployed customer system or measured client case study.</small></div><div className="aa-enterprise-visual"><div className="aa-enterprise-visual-head"><span>FLOW / ARCHITECTURE</span><span>STUDY 002</span></div><div className="aa-enterprise-nodes">{[["01","Intake","Documents & events"],["02","Interpret","Structure & validate"],["03","Review","Rules & exceptions"],["04","Connect","Approved system handoff"]].map(([n,t,d])=><div key={n}><span>{n}</span><strong>{t}</strong><small>{d}</small></div>)}</div><div className="aa-enterprise-visual-foot">HUMAN REVIEW WHERE JUDGMENT MATTERS <span>↗</span></div></div></div>
        </div>
      </section>
      <section className="aa-portfolio-project page-shell" id="digital">
        <div className="aa-portfolio-project-head"><span>03 / LIVE DIGITAL EXPERIENCE</span><span>DESIGN + FRONT-END ENGINEERING · THIS WEBSITE</span></div>
        <div className="aa-portfolio-digital"><div><span className="aa-kicker">A PUBLIC, WORKING EXAMPLE</span><h2>Made to<br /><em>feel different.</em></h2><p>This Archangel website is an example of our responsive interface engineering, interaction design and content architecture. Explore the interactive studio below, then try the site on your own device.</p><Link href="/services#digital-experiences">Explore digital experiences <ArrowUpRight size={17} /></Link></div><BuildLab /></div>
      </section>
      <section className="aa-portfolio-contact"><div className="page-shell"><span className="aa-kicker">YOUR PROJECT / NEXT</span><h2>What should<br />we build <em>together?</em></h2><Link href={bookingHref} className="aa-pill aa-pill-lime">Start a conversation <ArrowUpRight size={18} /></Link></div></section>
    </main>
  );
}

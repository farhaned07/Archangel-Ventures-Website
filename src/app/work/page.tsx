import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import { HannaPreview, WorkflowPreview } from "@/components/deployment/Visuals";

export const metadata: Metadata = {
  title: "Engineering Work & Demonstrations | Archangel",
  description: "Explore Archangel's original AI product development, technical workflow studies and deployed web engineering. Product and illustrative work are clearly distinguished from client results.",
  alternates: { canonical: "/work" },
};

export default function WorkPage(){
  return <main id="main-content" className="adv-site adv-work-page">
    <section className="adv-work-hero">
      <div className="adv-shell">
        <span className="adv-eyebrow">ARCHANGEL / SELECTED WORK</span>
        <h1>Ideas are easy.<br/><em>The build is the proof.</em></h1>
        <p>Our own products and engineering studies, shown as they are. We clearly label what is in development, what is illustrative and what can be used today.</p>
      </div>
    </section>
    <section className="adv-work-stack">
      <div className="adv-shell">
        <div className="adv-feature adv-feature-hanna">
          <div className="adv-feature-content"><span className="adv-kicker">01 / OWN PRODUCT · IN DEVELOPMENT</span><h3>Hanna</h3><p>A clinical AI product exploring how a conversation can become usable documentation and a clear care plan. Clinician review is a key design requirement.</p><a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore Hanna <ArrowUpRight size={17}/></a><small>Original product under development. UI uses example content. No completed hospital deployments are claimed.</small></div>
          <div className="adv-feature-screen"><HannaPreview/></div>
        </div>
        <div className="adv-feature adv-feature-ops" id="enterprise">
          <div className="adv-feature-screen"><WorkflowPreview/></div>
          <div className="adv-feature-content"><span className="adv-kicker">02 / INTERNAL ARCHITECTURE STUDY</span><h3>From intake<br/>to decision.</h3><p>A sample operations system that joins document intake, validation, exception review and controlled system handoff. Built to explain our engineering approach.</p><Link href="/services#ai-automation">See workflow engineering <ArrowUpRight size={17}/></Link><small>Technical study, not a verified client case study or production performance claim.</small></div>
        </div>
        <p className="adv-work-note">This portfolio intentionally does not invent customer names, production statistics or partner endorsements. We can discuss relevant engineering decisions, system architecture and scope directly.</p>
      </div>
    </section>
    <section className="adv-work-third" id="digital">
      <div className="adv-shell adv-work-third-inner"><div><span className="adv-marker">03 / LIVE WEB ENGINEERING</span><h2>You're using<br/>one of our builds.</h2></div><div><p>This website is a live example of Archangel's interface engineering, design systems and responsive front-end work. The code, interaction and delivery are all part of the work.</p><Link className="adv-underline-link" href="/services#product-engineering">Explore product engineering <ArrowUpRight size={18}/></Link></div></div>
    </section>
    <section className="adv-contact"><div className="adv-shell adv-contact-wrap"><span className="adv-marker">NEXT / YOUR PROBLEM</span><h2>What should<br/><em>work better?</em></h2><div className="adv-contact-row"><p>Talk directly with Archangel about the workflow, product or systems problem you need to solve.</p><Link href={bookingHref} className="adv-button adv-button-white" data-cta="adv-work-contact">Discuss a deployment <ArrowRight size={18}/></Link></div></div></section>
  </main>;
}

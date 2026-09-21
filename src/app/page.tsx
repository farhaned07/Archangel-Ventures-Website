import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { WorkflowDemo } from "@/components/editorial/WorkflowDemo";
import { ExperienceMotion } from "@/components/editorial/ExperienceMotion";
import { HannaFlow } from "@/components/editorial/Elements";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Make AI Useful at Work | Archangel Technology & AI Partner",
  description: "Make AI useful at work. Archangel builds practical AI systems, software products and digital experiences, from a clear first milestone to a working release.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — Make AI useful at work.",
    description: "AI systems, custom software and digital experiences. Founder-led design and engineering in Bangkok.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel — Make AI useful at work" }],
  },
};

const capabilities = [
  { index:"01", title:"AI & automation", deck:"Make time for the work that matters.", copy:"Design and implement AI-assisted workflows, document processing and connected systems. Keep a person in control where decisions matter.", href:"/ai-transformation", micro:"WORKFLOWS / INTEGRATIONS" },
  { index:"02", title:"Product engineering", deck:"Move from idea to first real users.", copy:"Turn a business need into a working prototype, internal tool or customer-facing product. Test the important assumptions before scaling up.", href:"/services#product-engineering", micro:"PROTOTYPES / CUSTOM SOFTWARE" },
  { index:"03", title:"Digital experiences", deck:"Make every interaction count.", copy:"Build distinctive websites, portals and digital platforms that look considered, respond beautifully and work on every screen.", href:"/services#digital-experiences", micro:"DESIGN / DEVELOPMENT" },
] as const;

const milestones = [
  { number:"01", title:"Find the real problem", text:"Understand the users, existing workflow, constraints and what a useful result would look like." },
  { number:"02", title:"Make the first thing", text:"Agree a clear milestone. Make the interface, assumptions or technical approach tangible early." },
  { number:"03", title:"Build for real use", text:"Engineer the agreed scope, connect the necessary systems and test the details that matter." },
  { number:"04", title:"Deliver & improve", text:"Launch or hand over the working system, document what was built and define the next step together." },
] as const;

export default function Home() {
  return (
    <main id="main-content" className="aa-home aa-landing ex-home">
      <ExperienceMotion />

      <section className="ex-hero" aria-labelledby="ex-hero-heading">
        <div className="page-shell">
          <div className="ex-topline">
            <span><span className="ex-marker" aria-hidden="true" /> ARCHANGEL / INDEPENDENT TECHNOLOGY STUDIO</span>
            <span>BANGKOK, THAILAND · WORKING EVERYWHERE</span>
          </div>

          <div className="ex-hero-intro">
            <div>
              <p className="ex-index">FOUNDER-LED / DESIGN · ENGINEERING · IMPLEMENTATION</p>
              <h1 id="ex-hero-heading">Make AI<br /><em>useful</em> at work<span className="ex-period">.</span></h1>
            </div>
            <div className="ex-hero-aside">
              <p>Less manual work. Better tools. Ideas that make it into the world.</p>
              <p>We design and build AI systems, software products and digital experiences that people can actually use.</p>
              <div className="ex-hero-actions">
                <Link href={bookingHref} className="ex-button ex-button-light" data-cta="hero-start-project">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
                <Link href="#capabilities" className="ex-link ex-link-on-dark">What we build <ArrowDown size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>

          <div className="ex-demo-intro">
            <div><span className="ex-demo-index">A WORKING IDEA / 001</span><h2>See the thinking.<br /><em>Try the interaction.</em></h2></div>
            <p>From an incoming document to a reviewed decision. Explore a simulated workflow built around people, not just AI.</p>
          </div>
          <WorkflowDemo />
          <div className="ex-hero-foot">
            <span>ARCHANGEL COMPANY LIMITED · THAILAND BOI PROMOTED</span>
            <span>BUILT TO BE USED, NOT JUST PRESENTED.</span>
          </div>
        </div>
      </section>

      <section className="ex-bridge ex-reveal" aria-label="Why clients come to Archangel">
        <div className="page-shell ex-bridge-layout">
          <p className="ex-eyebrow">THE STARTING POINT <span>↗</span></p>
          <div>
            <h2>A better way of working starts with <em>a real problem.</em></h2>
            <p>Bring us a workflow that slows your team down, a product that needs to exist, or a digital experience that should do more. We work directly with you from the first scope to a working release.</p>
          </div>
        </div>
      </section>

      <section className="ex-capabilities" id="capabilities" aria-labelledby="ex-services-heading">
        <div className="page-shell">
          <div className="ex-section-intro ex-reveal">
            <p className="ex-eyebrow">01 / WHAT WE BUILD</p>
            <h2 id="ex-services-heading">The right technology.<br /><em>For the job.</em></h2>
          </div>
          <div className="ex-service-list">
            {capabilities.map((item) => (
              <Link href={item.href} className="ex-service ex-reveal" key={item.index}>
                <span className="ex-service-index">{item.index} / 03</span>
                <div className="ex-service-main"><h3>{item.title}</h3><p>{item.deck}</p></div>
                <div className="ex-service-detail"><p>{item.copy}</p><span>{item.micro}</span></div>
                <span className="ex-service-arrow" aria-hidden="true"><ArrowUpRight size={25} /></span>
              </Link>
            ))}
          </div>
          <div className="ex-services-footer"><span>ONE PARTNER. THE RIGHT DISCIPLINE FOR THE PROBLEM.</span><Link href="/services" className="ex-link">Explore our capabilities <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="ex-studio" id="selected-work" aria-labelledby="ex-studio-heading">
        <div className="page-shell">
          <div className="ex-studio-heading ex-reveal">
            <span className="ex-eyebrow">02 / INSIDE THE STUDIO</span>
            <div><h2 id="ex-studio-heading">A product<br /><em>taking shape.</em></h2><p>Our own product in development. An inside look at how we approach interaction, information and engineering—not a claimed client result.</p></div>
          </div>
          <div className="ex-hanna ex-reveal">
            <div className="ex-hanna-info">
              <div className="ex-hanna-top"><span>01 / HEALTHCARE · OWN PRODUCT</span><span>IN DEVELOPMENT</span></div>
              <div className="ex-hanna-content">
                <span className="ex-hanna-mark">h.</span>
                <h3>Hanna</h3>
                <p>From a patient conversation to a clinical note and a care plan they can understand.</p>
                <span>Exploring voice AI, structured documentation, multilingual output and clinician review.</span>
                <a href="https://www.hanna.care" target="_blank" rel="noreferrer" className="ex-hanna-link">Explore Hanna <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
              </div>
              <div className="ex-hanna-bottom">PRODUCT DEVELOPMENT / ARCHANGEL STUDIO <span>↗</span></div>
            </div>
            <div className="ex-hanna-product"><span className="ex-hanna-product-label">PRODUCT STUDY / CONVERSATION → CARE</span><HannaFlow /><small>Illustrative workflow. Not a deployed client system.</small></div>
          </div>
        </div>
      </section>

      <section className="ex-work-index" aria-label="Other work and engineering studies">
        <div className="page-shell">
          <div className="ex-work-index-head"><span className="ex-eyebrow">ALSO IN THE STUDIO</span><Link href="/work" className="ex-link">See all work <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <Link href="/work#enterprise" className="ex-work-line ex-reveal">
            <span>02 / INTERNAL STUDY</span><h3>Operations, made legible.</h3><p>An architectural study of document intake, checks, human approval and system handoff.</p><MoveUpRight size={23} aria-hidden="true" />
          </Link>
          <Link href="/work#digital" className="ex-work-line ex-reveal">
            <span>03 / LIVE BUILD</span><h3>A digital experience, built.</h3><p>This site demonstrates our approach to interface design and responsive implementation.</p><MoveUpRight size={23} aria-hidden="true" />
          </Link>
          <p className="ex-work-disclosure">Studio products, internal studies and live work are identified as such; no concepts are represented as client outcomes.</p>
        </div>
      </section>

      <section className="ex-delivery" aria-labelledby="ex-delivery-heading">
        <div className="page-shell ex-delivery-layout">
          <div className="ex-delivery-copy ex-reveal">
            <span className="ex-eyebrow">03 / HOW WE WORK</span>
            <h2 id="ex-delivery-heading">A clear brief.<br /><em>A working build.</em></h2>
            <p>Founder-led means the people defining the problem stay close to the work. A clear first milestone, something tangible to review, and a real deliverable.</p>
            <Link href="/farhan-sabbir" className="ex-link">Meet the founder <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <ol className="ex-timeline">
            {milestones.map((item) => (
              <li className="ex-timeline-step ex-reveal" key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ex-cta" aria-labelledby="ex-cta-heading">
        <div className="page-shell ex-cta-layout ex-reveal">
          <div><span className="ex-eyebrow">04 / LET'S TALK</span><h2 id="ex-cta-heading">What do you<br />need <em>built?</em></h2></div>
          <div className="ex-cta-side"><p>Tell us what is not working—or what should exist. In a 15-minute initial call, we’ll establish fit and identify a sensible first milestone.</p><Link href={bookingHref} className="ex-button ex-button-light" data-cta="closing-start-project">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link><span>15-MINUTE INITIAL CALL · NO OBLIGATION</span></div>
        </div>
      </section>
    </main>
  );
}

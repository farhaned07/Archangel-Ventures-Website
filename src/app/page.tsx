import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CornerDownRight, MoveUpRight } from "lucide-react";
import { BuildLab } from "@/components/editorial/BuildLab";
import { HannaFlow } from "@/components/editorial/Elements";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Make AI Useful at Work | Archangel Technology & AI Partner",
  description: "Make AI useful at work. Archangel designs and builds AI systems, software products and digital experiences, from a clear first milestone to a working release.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — Make AI useful at work.",
    description: "AI systems, software products and digital experiences. Founder-led engineering from first scope to working release in Bangkok.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel — Technology and AI implementation" }],
  },
};

const capabilities = [
  { index: "01", name: "AI & automation", short: "Take repetitive work off your team’s plate.", copy: "Build an AI-assisted document review, connect disconnected tools or automate a high-volume workflow—with human approval where it matters.", href: "/ai-transformation", tags: ["INTELLIGENT WORKFLOWS", "SYSTEM INTEGRATION"] },
  { index: "02", name: "Product engineering", short: "Put your product idea in users’ hands.", copy: "Commission a testable prototype, MVP, customer-facing application or custom internal tool—and define the next release from what users actually need.", href: "/services#product-engineering", tags: ["PROTOTYPES & MVPS", "CUSTOM SOFTWARE"] },
  { index: "03", name: "Digital experiences", short: "Make your digital presence do its job.", copy: "Build a distinctive business website, customer portal or digital platform that is clear to use, responsive and engineered for your real objectives.", href: "/services#digital-experiences", tags: ["WEBSITES & PLATFORMS", "INTERFACE ENGINEERING"] },
];

export default function Home() {
  return (
    <main id="main-content" className="aa-home aa-landing">
      <section className="aa-hero">
        <div className="aa-hero-glow" aria-hidden="true" />
        <div className="page-shell aa-hero-inner">
          <div className="aa-hero-topline">
            <span><i className="aa-status-dot" /> AN INDEPENDENT TECHNOLOGY STUDIO</span>
            <span>BANGKOK, THAILAND / WORKING EVERYWHERE</span>
          </div>
          <div className="aa-hero-grid">
            <div className="aa-hero-copy">
              <p className="aa-overline">FOUNDER-LED DESIGN + ENGINEERING</p>
              <h1>Make AI<br /><em>useful</em><br />at work<span className="aa-accent-dot">.</span></h1>
              <p className="aa-hero-description">We turn expensive workflows and promising product ideas into technology people can use. AI systems, custom software and digital experiences—from first prototype to working release.</p>
              <div className="aa-hero-actions">
                <Link href={bookingHref} className="aa-pill aa-pill-lime" data-cta="hero-start-project">Tell us what you need built <ArrowUpRight size={18} /></Link>
                <Link href="/work" className="aa-hero-sub-link">Explore the work <ArrowRight size={17} /></Link>
              </div>
              <div className="aa-hero-signature"><span className="aa-signature-icon">✳</span><p>You work directly with the people designing<br />and building your system.</p></div>
            </div>
            <div className="aa-hero-art">
              <div className="aa-art-label"><span>STUDIO / 001</span><span>EXPLORE WHAT WE BUILD <CornerDownRight size={14} /></span></div>
              <BuildLab compact />
              <p className="aa-art-note">Try three small interface studies using sample content. <span>These illustrate interaction design, not client deployments.</span></p>
            </div>
          </div>
          <div className="aa-hero-bottom"><span>ARCHANGEL COMPANY LIMITED · THAILAND BOI PROMOTED</span><a href="#capabilities">SCROLL TO EXPLORE <ArrowDown size={15} /></a><span>01 / DESIGN + ENGINEERING</span></div>
        </div>
      </section>

      <section className="aa-manifesto page-shell" aria-label="Our approach">
        <div className="aa-mini-index"><span>WHEN TO BRING US IN</span><span>01 — 04</span></div>
        <p>A workflow eats up your team’s time. A product needs its first users. A digital experience needs to work harder. <span>We get close to the problem, then build what is needed.</span></p>
        <div className="aa-manifesto-foot"><span>ONE PARTNER / FROM THE FIRST SCOPE TO THE WORKING BUILD</span><Link href="/company">Who you will work with <ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="aa-capabilities" id="capabilities">
        <div className="page-shell">
          <div className="aa-section-heading"><div><span className="aa-kicker">WHAT WE DO / THREE DISCIPLINES</span><h2>Three ways<br /><em>we can help.</em></h2></div><p>Bring us an operational bottleneck, a product idea or a digital experience that needs to perform. We scope and build the right solution.</p></div>
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
          <div className="aa-section-heading aa-work-heading"><div><span className="aa-kicker">A LOOK INSIDE / WHAT EXISTS TODAY</span><h2>Inside the<br /><em>studio.</em></h2></div><div className="aa-work-heading-aside"><p>Our own product, an internal engineering blueprint and a live digital experience. Each is labelled for what it actually demonstrates.</p><Link href="/work" className="aa-text-link">Explore the portfolio <ArrowUpRight size={17} /></Link></div></div>
          <div className="aa-hanna-feature">
            <div className="aa-hanna-copy">
              <div className="aa-feature-top"><span>01 / OWN PRODUCT · HEALTHCARE</span><span>IN DEVELOPMENT</span></div>
              <div className="aa-feature-middle"><span className="aa-feature-symbol">h.</span><h3>Hanna</h3><p>From a patient conversation to a clinical note and a care plan they can understand.</p><p className="aa-hanna-detail">Our own product in development, exploring voice AI, structured clinical notes, multilingual care plans and clinician review.</p><a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore Hanna <ArrowUpRight size={17} /></a></div>
              <div className="aa-feature-bottom">PRODUCT DEVELOPMENT / ARCHANGEL STUDIO <span>↗</span></div>
            </div>
            <div className="aa-hanna-visual"><HannaFlow /><span className="aa-visual-caption">ILLUSTRATIVE PRODUCT WORKFLOW · NOT A CLIENT DEPLOYMENT</span></div>
          </div>
          <div className="aa-work-split">
            <div className="aa-work-brief"><span className="aa-work-card-tag">02 / ENGINEERING STUDY</span><div className="aa-work-wire" aria-hidden="true"><i /><i /><i /><i /><b>CAPTURE</b><b>CHECK</b><b>REVIEW</b><b>CONNECT</b></div><div><h3>Systems that connect<br />the work.</h3><p>An internal design study showing how document intake, validation, human approval and system handoff could fit together.</p><Link href="/work#enterprise">Explore the approach <MoveUpRight size={17} /></Link></div></div>
            <div className="aa-work-web"><span className="aa-work-card-tag">03 / LIVE DIGITAL EXPERIENCE</span><div className="aa-web-study" aria-hidden="true"><span>ARCHANGEL / DIGITAL</span><strong>Built with<br /><em>intention.</em></strong><span>DESIGN · ENGINEERING · PERFORMANCE</span></div><div><h3>Experience, engineered.</h3><p>This website is a live example of our responsive interface design, interaction engineering and digital delivery.</p><Link href="/work#digital">See the build <MoveUpRight size={17} /></Link></div></div>
          </div>
          <p className="aa-work-honesty">These examples demonstrate product thinking, interface engineering and workflow design. They are not presented as verified client outcomes.</p>
        </div>
      </section>

      <section className="aa-process">
        <div className="page-shell aa-process-layout">
          <div className="aa-process-intro"><span className="aa-kicker">HOW A PROJECT MOVES</span><h2>A clear brief.<br /><em>A working build.</em></h2><p>We agree on the first useful milestone, show the work as it takes shape and stay involved through delivery. The steps depend on your project—not a fixed package.</p><Link href="/farhan-sabbir">Meet the founder <ArrowUpRight size={16} /></Link></div>
          <div className="aa-process-steps">
            {[["01","Define the first milestone","Agree who the system is for, what it needs to do, the constraints, and what counts as a successful first release."],["02","Make it tangible","Review a prototype, interface direction or technical proof before committing to a larger build, where the project calls for one."],["03","Engineer and test","Build the agreed scope, connect the necessary systems, test real workflows and make limitations visible."],["04","Deliver and improve","Launch or hand over what was built, with documentation and an agreed plan for support or the next release."]].map(([n,title,copy])=><div className="aa-process-step" key={n}><span>{n} / 04</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={18} /></div>)}
          </div>
        </div>
      </section>

      <section className="aa-start">
        <div className="page-shell aa-start-layout"><div><span className="aa-kicker">START WITH ONE USEFUL CONVERSATION</span><h2>What do you<br />need <em>built?</em></h2></div><div className="aa-start-right"><p>Tell us the problem, the users and the outcome you need. In a 15-minute call, we’ll establish fit and identify a sensible first milestone.</p><Link href={bookingHref} className="aa-pill aa-pill-lime" data-cta="closing-start-project">Discuss your project <ArrowUpRight size={19} /></Link><span>15-MINUTE INITIAL CALL · SCOPE AND NEXT STEP AGREED SEPARATELY</span></div></div>
      </section>
    </main>
  );
}

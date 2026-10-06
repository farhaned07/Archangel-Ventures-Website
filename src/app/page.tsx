import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CornerDownRight, MoveUpRight } from "lucide-react";
import { BuildLab } from "@/components/editorial/BuildLab";
import { HannaFlow } from "@/components/editorial/Elements";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archangel — Make AI useful at work",
  description: "We build AI that takes repetitive work off your team. Bangkok-based, founder-led.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — Make AI useful at work",
    description: "We build AI that takes repetitive work off your team. Bangkok-based, founder-led.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel — Make AI useful at work" }],
  },
};

const capabilities = [
  {
    index: "01",
    name: "AI that takes work off your team",
    short: "Documents, approvals, repeat tasks.",
    copy: "We automate the boring part and keep a person in charge of decisions.",
    href: "/ai-transformation",
    tags: ["AI WORKFLOWS", "AUTOMATION"],
  },
  {
    index: "02",
    name: "Software your team will use",
    short: "Internal tools, prototypes and first versions of products.",
    copy: "We turn a useful idea into software people can actually test, use and improve.",
    href: "/services#product-engineering",
    tags: ["PROTOTYPES & MVPS", "CUSTOM SOFTWARE"],
  },
  {
    index: "03",
    name: "Websites that are clear and fast",
    short: "A site that explains what you do and makes it easy to get in touch.",
    copy: "Clear content, thoughtful interaction and a fast experience across the devices your customers use.",
    href: "/services#digital-experiences",
    tags: ["WEBSITES", "DIGITAL EXPERIENCES"],
  },
];

export default function Home() {
  return (
    <main id="main-content" className="aa-home aa-landing">
      <section className="aa-hero">
        <div className="aa-hero-glow" aria-hidden="true" />
        <div className="page-shell aa-hero-inner">
          <div className="aa-hero-topline">
            <span><i className="aa-status-dot" /> AI FOR REAL WORK · BANGKOK</span>
            <span>WORKING ACROSS THAILAND AND BEYOND</span>
          </div>

          <div className="aa-hero-grid">
            <div className="aa-hero-copy">
              <p className="aa-overline">ARCHANGEL · AI IMPLEMENTATION</p>
              <h1>Make AI<br /><em>useful</em><br />at work<span className="aa-accent-dot">.</span></h1>
              <p className="aa-hero-description">
                Archangel builds AI that takes slow, repetitive work off your team.
                Tell us what gets in the way. We find the useful first step, build it,
                and put it into the work.
              </p>
              <div className="aa-hero-actions">
                <Link href={site.calendarBookingUrl} target="_blank" rel="noreferrer" className="aa-pill aa-pill-lime" data-cta="calendar-booking">
                  Book a free 15-minute call <ArrowUpRight size={18} />
                </Link>
                <Link href="/work" className="aa-hero-sub-link">See examples <ArrowRight size={17} /></Link>
              </div>
              <div className="aa-hero-signature">
                <span className="aa-signature-icon">✳</span>
                <p>You work directly with the people designing<br />and building your system.</p>
              </div>
            </div>

            <div className="aa-hero-art">
              <div className="aa-art-label"><span>STUDIO / 001</span><span>TRY A SMALL SAMPLE <CornerDownRight size={14} /></span></div>
              <BuildLab compact />
              <p className="aa-art-note">Three small interface studies using sample content. <span>They illustrate interaction design, not client deployments.</span></p>
            </div>
          </div>

          <div className="aa-hero-bottom">
            <span>ARCHANGEL COMPANY LIMITED · THAILAND BOI PROMOTED</span>
            <a href="#capabilities">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
            <span>01 / AI FOR REAL WORK</span>
          </div>
        </div>
      </section>

      <section className="aa-manifesto page-shell" aria-label="Our approach">
        <div className="aa-mini-index"><span>WHAT ARCHANGEL IS</span><span>01 — 04</span></div>
        <p>
          <strong>We build AI for real work.</strong> Documents, approvals, repeat tasks and
          useful software—not AI for its own sake. <span>Understand the work. Build the right thing. Deploy it.</span>
        </p>
        <div className="aa-manifesto-foot">
          <span>FOUNDER-LED / DIRECT ACCESS TO THE BUILD TEAM</span>
          <Link href="/company">About Archangel <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="aa-capabilities" id="capabilities">
        <div className="page-shell">
          <div className="aa-section-heading">
            <div><span className="aa-kicker">WHAT WE DO / THREE SERVICES</span><h2>AI first.<br /><em>Software when needed.</em></h2></div>
            <p>Start with the work that needs fixing. We build the AI, software or website that makes the outcome better.</p>
          </div>

          <div className="aa-capability-list">
            {capabilities.map((item) => (
              <Link href={item.href} className="aa-capability" key={item.index}>
                <div className="aa-capability-number">{item.index} / 03</div>
                <div className="aa-capability-main">
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <div className="aa-capability-tags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <p className="aa-capability-copy">{item.copy}</p>
                <span className="aa-capability-arrow" aria-hidden="true"><ArrowUpRight size={25} /></span>
              </Link>
            ))}
          </div>

          <div className="aa-capabilities-footer">
            <span>ONE TEAM / THE RIGHT SOLUTION FOR THE JOB</span>
            <Link href="/services">See services <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="aa-work-section" id="selected-work">
        <div className="page-shell">
          <div className="aa-section-heading aa-work-heading">
            <div><span className="aa-kicker">EXAMPLES / CLEARLY LABELLED</span><h2>See how<br /><em>we build.</em></h2></div>
            <div className="aa-work-heading-aside">
              <p>These are examples of our own work and design studies. We label them clearly rather than presenting them as client results.</p>
              <Link href="/work" className="aa-text-link">See all examples <ArrowUpRight size={17} /></Link>
            </div>
          </div>

          <div className="aa-hanna-feature">
            <div className="aa-hanna-copy">
              <div className="aa-feature-top"><span>01 / OWN PRODUCT · HEALTHCARE</span><span>IN DEVELOPMENT</span></div>
              <div className="aa-feature-middle">
                <span className="aa-feature-symbol">h.</span>
                <h3>Hanna</h3>
                <p>Our own product in development. It helps a doctor turn a consultation into a clear note and a care plan the patient can read.</p>
                <p className="aa-hanna-detail">A clinician always reviews the output. Hanna is not yet used for patient care.</p>
                <a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore Hanna <ArrowUpRight size={17} /></a>
              </div>
              <div className="aa-feature-bottom">OWN PRODUCT / ARCHANGEL STUDIO <span>↗</span></div>
            </div>
            <div className="aa-hanna-visual"><HannaFlow /><span className="aa-visual-caption">ILLUSTRATIVE PRODUCT WORKFLOW · NOT A CLIENT DEPLOYMENT</span></div>
          </div>

          <div className="aa-work-split">
            <div className="aa-work-brief">
              <span className="aa-work-card-tag">02 / SAMPLE WORKFLOW</span>
              <div className="aa-work-wire" aria-hidden="true"><i /><i /><i /><i /><b>CAPTURE</b><b>CHECK</b><b>REVIEW</b><b>CONNECT</b></div>
              <div>
                <h3>AI and people<br />sharing the work.</h3>
                <p>A sample showing how document intake, validation, human approval and system handoff could fit together. Not a client project.</p>
                <Link href="/work#enterprise">Explore the approach <MoveUpRight size={17} /></Link>
              </div>
            </div>

            <div className="aa-work-web">
              <span className="aa-work-card-tag">03 / OUR WEBSITE</span>
              <div className="aa-web-study" aria-hidden="true"><span>ARCHANGEL / DIGITAL</span><strong>Clear.<br /><em>Fast.</em></strong><span>DESIGN · ENGINEERING · PERFORMANCE</span></div>
              <div>
                <h3>This site is our own work.</h3>
                <p>Click around and see how we build: clear content, responsive interfaces and a fast experience.</p>
                <Link href="/work#digital">See the build <MoveUpRight size={17} /></Link>
              </div>
            </div>
          </div>

          <p className="aa-work-honesty">Examples demonstrate product thinking, interface engineering and workflow design. They are not presented as verified client outcomes.</p>
        </div>
      </section>

      <section className="aa-process">
        <div className="page-shell aa-process-layout">
          <div className="aa-process-intro">
            <span className="aa-kicker">HOW WE WORK</span>
            <h2>Understand.<br /><em>Build. Deploy.</em></h2>
            <p>We learn how the work really runs, build a useful version early, and put it into your team’s hands with clear limits and support.</p>
            <Link href="/farhan-sabbir">Meet the founder <ArrowUpRight size={16} /></Link>
          </div>

          <div className="aa-process-steps">
            {[
              ["01", "Understand", "Learn how the work really runs and agree on one useful first goal."],
              ["02", "Build", "Create a working version early, not a slide deck. Test it against the real workflow."],
              ["03", "Deploy", "Put it in your team’s hands, connect the necessary systems and make limitations visible."],
              ["04", "Improve", "Use what happens in practice to fix, extend or stop the next piece of work."],
            ].map(([n, title, copy]) => (
              <div className="aa-process-step" key={n}>
                <span>{n} / 04</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-start">
        <div className="page-shell aa-start-layout">
          <div><span className="aa-kicker">START WITH ONE USEFUL CONVERSATION</span><h2>What slows<br />your team <em>down?</em></h2></div>
          <div className="aa-start-right">
            <p>Tell us in 15 minutes. We’ll tell you honestly if we can help and what a sensible first step looks like.</p>
            <Link href={site.calendarBookingUrl} target="_blank" rel="noreferrer" className="aa-pill aa-pill-lime" data-cta="calendar-booking">Book a free call <ArrowUpRight size={19} /></Link>
            <span>15-MINUTE INITIAL CALL · NO COMMITMENT</span>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref, site } from "@/lib/site";

import "./deployment.css";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineering | Archangel Thailand",
  description: "Archangel embeds hands-on engineers with your team to design, evaluate, integrate and deploy production AI. OpenAI, Claude, Gemini or open models—the right technology for the work.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — Forward Deployed AI Engineering",
    description: "Embedded engineers. Production AI. No single-model agenda. Based in Bangkok, working across Thailand and beyond.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel — Forward Deployed AI Engineering" }],
  },
};

const disciplines = [
  { number: "01", title: "Forward deployed engineering", body: "Engineers who work alongside your operators and technical team. We map the real constraint, build in context, and stay accountable through deployment.", detail: "ON-SITE / HYBRID / REMOTE", href: "/services#forward-deployed-engineering" },
  { number: "02", title: "AI agents and workflows", body: "Purpose-built agents, human review, document intelligence and multi-step systems connected to the way your business actually runs.", detail: "AGENTS / WORKFLOW REDESIGN", href: "/services#ai-automation" },
  { number: "03", title: "Integration and engineering", body: "APIs, data pipelines, internal applications and platform integrations that turn a promising model response into a usable product.", detail: "SYSTEMS / DATA / PRODUCT", href: "/services#product-engineering" },
  { number: "04", title: "Evaluation and operations", body: "Real-world evaluations, permission boundaries, observability, exception handling and improvements after launch.", detail: "EVALUATION / RELIABILITY", href: "/services#production-ai" },
];

const principles = [
  { n: "01", title: "Start in the workflow", text: "We work with the people who do the job, not just the people who sponsor the project. We find the bottleneck worth solving." },
  { n: "02", title: "Build against reality", text: "We test with representative inputs, existing systems and real constraints. A working system comes before a large transformation plan." },
  { n: "03", title: "Measure what changed", text: "Accuracy, turnaround time, throughput, human effort and reliability are measured against an agreed baseline." },
  { n: "04", title: "Deploy, then improve", text: "We connect the system, prepare the team, make failure modes visible and support the next iteration when the evidence justifies it." },
];

export default function Home() {
  return (
    <main id="main-content" className="fd-landing">
      <section className="fd-hero">
        <div className="fd-container fd-hero-wrap">
          <div className="fd-topline"><span>ARCHANGEL / FORWARD DEPLOYED ENGINEERING</span><span>BANGKOK · THAILAND · GLOBAL DELIVERY</span></div>
          <div className="fd-hero-copy">
            <span className="fd-eyebrow fd-on-dark">FROM AI EXPERIMENTS TO OPERATIONS</span>
            <h1>Intelligence<br />belongs in<br /><span>the real world.</span></h1>
            <p>We embed with organizations to solve difficult operational problems using AI—designing, building and deploying systems with the teams who depend on them. <strong>Any model. The right solution.</strong></p>
            <div className="fd-hero-ctas">
              <Link className="fd-button fd-button-light" href={bookingHref} data-cta="fde-home-hero">Discuss a deployment <ArrowUpRight size={19} /></Link>
              <a className="fd-text-cta" href="#what-is-fde">How we work <ArrowDown size={17} /></a>
            </div>
          </div>
          <div className="fd-hero-bottom"><span>ENGINEERS, NOT JUST ADVICE.</span><span>MODEL-INDEPENDENT BY DESIGN.</span><span>01 — 06</span></div>
        </div>
      </section>

      <section id="what-is-fde" className="fd-intro fd-light-section">
        <div className="fd-container fd-two-col">
          <div className="fd-rail"><span className="fd-index">01 / THE APPROACH</span><span className="fd-rail-line" /></div>
          <div className="fd-intro-main">
            <span className="fd-eyebrow">WHAT IS FORWARD DEPLOYED ENGINEERING?</span>
            <h2>Close to the problem.<br /><span>Responsible for the result.</span></h2>
            <p>Forward deployed engineering puts builders directly beside the people doing the work. Instead of handing over a strategy deck or selling a prepackaged tool, we study a specific problem, build a working system, test it in context and take it toward production.</p>
            <p>For Archangel, that means pairing AI engineering with your industry expertise, existing software, data and operational realities. We are not tied to one model provider or one product.</p>
            <Link className="fd-inline-link" href="/services">Explore what we deploy <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="fd-model-section">
        <div className="fd-container">
          <div className="fd-section-head"><span className="fd-index">02 / THE DIFFERENCE</span><h2>Choose the model.<br />Own the outcome.</h2><p>Your problem determines the architecture—not a model sales target. We can evaluate frontier APIs, open-weight models and conventional software together.</p></div>
          <div className="fd-architecture" aria-label="Illustrative architecture showing operations connected through an AI deployment layer to a choice of models">
            <div className="fd-arch-node"><span>01 / THE INPUT</span><strong>Your operations</strong><small>People · Data · Existing systems</small></div>
            <div className="fd-arch-connector"><span /></div>
            <div className="fd-arch-node fd-arch-core"><span>02 / ARCHANGEL</span><strong>Deployment layer</strong><small>Integration · Evaluation · Controls</small></div>
            <div className="fd-arch-connector"><span /></div>
            <div className="fd-arch-node"><span>03 / THE INTELLIGENCE</span><strong>Best-fit AI</strong><small>Frontier · Open-weight · Hybrid</small></div>
          </div>
          <div className="fd-model-footer"><span>OPENAI / ANTHROPIC / GOOGLE / OPEN-WEIGHT / CLASSICAL SOFTWARE</span><span>TECHNOLOGY OPTIONS, NOT PARTNER ENDORSEMENTS</span></div>
        </div>
      </section>

      <section className="fd-offerings fd-light-section" id="capabilities">
        <div className="fd-container">
          <div className="fd-section-head fd-head-row"><div><span className="fd-index">03 / WHAT WE DEPLOY</span><h2>Built for the work<br />that matters.</h2></div><p>From the first difficult workflow to a system teams can operate every day. One engineering partner across design, delivery and improvement.</p></div>
          <div className="fd-discipline-list">
            {disciplines.map((item) => (
              <Link href={item.href} className="fd-discipline" key={item.number}>
                <span className="fd-disc-num">{item.number} / 04</span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
                <div className="fd-disc-end"><span>{item.detail}</span><ArrowUpRight size={25} strokeWidth={1.4} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="fd-method">
        <div className="fd-container">
          <div className="fd-section-head"><span className="fd-index">04 / THE OPERATING MODEL</span><h2>Build. Prove.<br /><span>Make it last.</span></h2><p>We work in short, testable loops with visible assumptions, practical safeguards and a clear path to production.</p></div>
          <div className="fd-steps">
            {principles.map((item) => (
              <div className="fd-step" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></div>
            ))}
          </div>
          <div className="fd-method-note"><span>NO LOCK-IN BY DEFAULT</span><p>If simpler automation can solve the problem more reliably than AI, we say so.</p></div>
        </div>
      </section>

      <section className="fd-evidence fd-light-section">
        <div className="fd-container">
          <div className="fd-section-head fd-head-row"><div><span className="fd-index">05 / SELECTED BUILD WORK</span><h2>Show the system.<br />Not just the pitch.</h2></div><p>We distinguish our own product development and technical demonstrations from verified customer deployments. No invented case-study metrics.</p></div>
          <div className="fd-evidence-grid">
            <article className="fd-evidence-card"><div className="fd-evidence-top"><span>01 / OWN PRODUCT</span><span>IN DEVELOPMENT</span></div><div className="fd-evidence-symbol">h.</div><h3>Hanna</h3><p>An AI-assisted clinical documentation and care-plan product. Human review is central; it is not presented as a deployed patient-care system.</p><a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore the product <ArrowUpRight size={17} /></a></article>
            <article className="fd-evidence-card fd-evidence-alt"><div className="fd-evidence-top"><span>02 / TECHNICAL DEMONSTRATIONS</span><span>ILLUSTRATIVE</span></div><div className="fd-evidence-symbol">↗</div><h3>From workflow to system.</h3><p>Engineering studies showing intake, checks, human approval and integration patterns. These demonstrate how we build, not claimed client results.</p><Link href="/work">See our work <ArrowUpRight size={17} /></Link></article>
          </div>
        </div>
      </section>

      <section className="fd-end">
        <div className="fd-container fd-end-inner">
          <span className="fd-index">06 / START A DEPLOYMENT</span>
          <h2>Bring us the<br /><span>hard problem.</span></h2>
          <div className="fd-end-row"><p>We can begin with a focused discovery conversation, a scoped pilot or an engineering engagement alongside your team. Based in Thailand, working wherever the problem needs us.</p><Link className="fd-button fd-button-light" href={bookingHref} data-cta="fde-home-bottom">Talk to Archangel <ArrowRight size={19} /></Link></div>
          <div className="fd-end-meta"><span>ARCHANGEL COMPANY LIMITED · BOI-PROMOTED IN THAILAND</span><a href={"mailto:" + site.email}>{site.email}</a></div>
        </div>
      </section>
    </main>
  );
}

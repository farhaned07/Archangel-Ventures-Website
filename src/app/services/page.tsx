import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Deployment Services & Forward Deployed Engineering | Archangel",
  description: "Forward deployed engineers, production AI agents, enterprise integrations, evaluations and AI operations. Model-independent delivery from Bangkok, Thailand.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "forward-deployed-engineering", number: "01", kicker: "EMBEDDED ENGINEERING",
    title: "Forward deployed engineering",
    body: "Hands-on engineers working with your operations, product and technology teams to build a solution to a specific, consequential problem. We take responsibility for working software, not just recommendations.",
    deliverables: ["Workflow discovery with domain experts", "Technical scoping and rapid first deployment", "Integration with your team, systems and processes", "Clear acceptance criteria and handover"],
    begin: "Start with a fit conversation. We can scope a short implementation sprint, a pilot or dedicated engineering capacity against a defined workstream.",
  },
  {
    id: "ai-automation", number: "02", kicker: "INTELLIGENT SYSTEMS",
    title: "AI agents and workflow redesign",
    body: "Turn repetitive, multi-step tasks into reliable workflows with the right balance of AI decisions, deterministic software and human oversight. Build around your operating reality rather than a generic chatbot.",
    deliverables: ["Tool-using AI agents and orchestration", "Document intelligence, extraction and review", "Human approvals and escalation routes", "Internal knowledge and search systems"],
    begin: "A scoped 30-day implementation pilot starts from ฿150,000. We agree the workflow, baseline, permissions and measures of success before delivery.",
  },
  {
    id: "product-engineering", number: "03", kicker: "INFRASTRUCTURE AND INTEGRATIONS",
    title: "From models to working products",
    body: "A model is one component. We build the surrounding application, APIs, data access and business integration so your teams can use it safely and productively.",
    deliverables: ["Model evaluation and routing across vendors", "APIs, internal applications and data connectors", "Retrieval, permissions and enterprise integration", "Deployment, environments and technical handover"],
    begin: "Bring an existing system, a stalled proof-of-concept or a product idea. We define the smallest production-worthy release and quote against the actual integration work.",
  },
  {
    id: "production-ai", number: "04", kicker: "RELIABILITY AND OPERATIONS",
    title: "Reliable AI in production",
    body: "Performance in a demo is not performance at work. We help make systems observable, reviewable and maintainable after release, with explicit limits and owners.",
    deliverables: ["Task-specific evaluations and regression checks", "Latency, cost, quality and failure monitoring", "Access controls, exceptions and human review", "Post-launch improvement and managed support"],
    begin: "Production rollout and ongoing operations are scoped separately from pilots. Support responsibilities, response hours and third-party costs are agreed in writing.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="fd-services">
      <section className="fd-services-hero">
        <div className="fd-container">
          <div className="fd-services-preamble"><span>ARCHANGEL / WHAT WE DEPLOY</span><span>MODEL-AGNOSTIC ENGINEERING · BANGKOK</span></div>
          <h1>Beyond the pilot.<br /><span>Into production.</span></h1>
          <div className="fd-services-hero-desc">
            <p>We design, build, integrate and operate AI systems alongside your team. No prescribed model. No strategy-only handoff. The right people and technology for the problem.</p>
            <Link href={bookingHref} className="fd-button fd-button-light" data-cta="fde-services-hero">Start a conversation <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="fd-services-section">
        <div className="fd-container">
          <div className="fd-services-intro"><span className="fd-index">OUR CAPABILITIES / 01—04</span><p>We bring deployment engineering, model selection and product development into one accountable engagement. Work starts with the operating problem and ends with a system the team can use.</p></div>
          {services.map((service) => (
            <article id={service.id} className="fd-service" key={service.number}>
              <div className="fd-service-no">{service.number} / 04<br />{service.kicker}</div>
              <div>
                {service.number === "03" && <span id="digital-experiences" />}
                <h2>{service.title}</h2>
                <p className="fd-service-copy">{service.body}</p>
                <div className="fd-service-details">
                  <div><h4>WHAT WE DELIVER</h4><ul>{service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></div>
                  <aside><h4>HOW TO START</h4>{service.begin}<div><Link href={bookingHref}>Discuss this work <ArrowUpRight size={17} /></Link></div></aside>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fd-services-tail">
        <div className="fd-container">
          <span className="fd-index">TECHNOLOGY SHOULD FOLLOW THE PROBLEM</span>
          <h2>Any model.<br />One accountable team.</h2>
          <p>We can evaluate and integrate OpenAI, Anthropic Claude, Google Gemini, open-weight models or conventional software. Model choice depends on quality, privacy, latency, cost and the realities of your environment—not provider affiliation.</p>
          <Link className="fd-button" href={bookingHref}>Bring us the hard problem <ArrowRight size={18} /></Link>
          <div className="fd-services-tail-meta">MODEL NAMES REFER TO TECHNOLOGY OPTIONS; NO LAB PARTNERSHIP OR ENDORSEMENT IS IMPLIED.</div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import { SystemImage } from "@/components/deployment/Visuals";
import { CapabilityAtlas } from "@/components/deployment/CinematicArt";
import { MobileAtlas } from "@/components/deployment/MobileArt";

export const metadata: Metadata = {
  title: "AI Deployment & Forward Deployed Engineering Services | Archangel",
  description: "Embedded AI engineers, AI agents and workflows, enterprise integrations and production reliability. Model-independent AI delivery from Bangkok, Thailand.",
  alternates: { canonical: "/services" },
};

const capabilities=[
  {id:"forward-deployed-engineering",number:"01",category:"EMBEDDED ENGINEERING",title:"Forward deployed engineering",intro:"Engineers embedded with your team to solve a consequential problem from inside the actual workflow—not at the distance of a consulting presentation.",deliverables:["Understand the workflow with domain experts","Build a working version against representative data","Connect people, business systems and controls","Define acceptance criteria and technical handover"],start:"Start with a fit call, then scope a focused engineering sprint, paid pilot or dedicated delivery workstream."},
  {id:"ai-automation",number:"02",category:"INTELLIGENT WORKFLOWS",title:"AI agents & business automation",intro:"Make AI useful in the steps where work actually happens. We combine agentic models, business rules and human decisions into one coherent system.",deliverables:["Agent orchestration and safe tool use","Document processing and structured extraction","Knowledge retrieval and human review","Approvals, exception routes and operational handoff"],start:"A 30-day bounded AI implementation pilot starts from ฿150,000. Scope, permissions and measurable outcomes are agreed in advance."},
  {id:"product-engineering",number:"03",category:"APPS, DATA AND INTEGRATION",title:"Product & systems engineering",intro:"A model is never the whole product. We build the surrounding applications, APIs, data flows and permissions that let people use it reliably.",deliverables:["Enterprise APIs and application development","Model selection, routing and evaluation","Data connectors, retrieval and integration","Production deployments and technical transition"],start:"Bring an unfinished proof-of-concept, a disconnected process or an application that needs AI. We agree on the smallest useful deployment."},
  {id:"production-ai",number:"04",category:"TESTING AND OPERATIONS",title:"Evaluation & reliable AI operations",intro:"Model responses are probabilistic. Business systems cannot be vague about failures. We create evaluations, visibility and controls around what matters.",deliverables:["Task-specific evaluations and regression tests","Observability for quality, latency and cost","Human oversight and escalation boundaries","Monitoring, maintenance and continuous improvements"],start:"Production rollout and support are scoped separately from initial pilots, with clear system owners, service limits and provider costs."},
];

export default function ServicesPage(){
  return <main id="main-content" className="adv-site adv-services-page">
    <section className="adv-service-hero">
      <div className="adv-shell">
        <span className="adv-eyebrow">ARCHANGEL / CAPABILITIES</span>
        <h1>From first principles.<br/><em>To working systems.</em></h1>
        <p>We build beside your team, integrating AI with the workflows, tools and decisions that run your business. We choose technology by fit, not affiliation.</p>
        <Link className="adv-button adv-button-black" href={bookingHref} data-cta="adv-services-top">Discuss your deployment <ArrowUpRight size={17}/></Link>
        <div className="am4-desktop-art"><CapabilityAtlas/></div><div className="am4-mobile-art"><MobileAtlas/></div>
      </div>
    </section>
    <section className="adv-service-content">
      <div className="adv-shell">
        <div className="adv-service-intro"><span className="adv-marker">01—04 / THE PRACTICE</span><p>Four connected disciplines. One purpose: build systems that work in the reality of your organization and improve with evidence from use.</p></div>
        {capabilities.map(s=><article key={s.id} id={s.id} className="adv-service-line">
          <span className="adv-service-no">{s.number} / 04<br/>{s.category}</span>
          <div>
            {s.number==="03"&&<span id="digital-experiences"/>}
            <h2>{s.title}</h2>
            <p className="adv-service-desc">{s.intro}</p>
            <div className="adv-service-meta">
              <div><strong>WHAT WE BUILD</strong><ul>{s.deliverables.map(d=><li key={d}>{d}</li>)}</ul></div>
              <aside><strong>HOW TO START</strong><p>{s.start}</p><Link className="adv-underline-link" href={bookingHref}>Discuss this work <ArrowUpRight size={17}/></Link></aside>
            </div>
          </div>
        </article>)}
      </div>
    </section>
    <section className="adv-services-visual">
      <div className="adv-shell adv-services-visual-grid">
        <div><span className="adv-marker">MODEL-INDEPENDENT ENGINEERING</span><h2>Choose the tools.<br/>Own the outcome.</h2><p>We can evaluate OpenAI, Anthropic Claude, Google Gemini, open-weight models and conventional software. The best architecture is the one that satisfies your requirements for quality, safety, cost and reliability.</p><p><small>Provider names indicate technologies we may evaluate, not partnerships, endorsements or certifications.</small></p><Link className="adv-underline-link" href={bookingHref}>Find your first use case <ArrowRight size={18}/></Link></div>
        <SystemImage/>
      </div>
    </section>
  </main>;
}

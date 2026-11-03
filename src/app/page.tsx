import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { bookingHref } from "@/lib/site";
import { FieldImage, HannaPreview, SystemImage, WorkflowPreview } from "@/components/deployment/Visuals";
import { ProcessGlyph } from "@/components/deployment/CinematicArt";

export const metadata: Metadata = {
  title: "Forward Deployed AI Engineering in Thailand | Archangel",
  description: "We deploy AI where work happens. Embedded engineers, AI agents, custom integrations and production-ready systems, built with the right model for each business.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Archangel — We deploy AI where work happens",
    description: "Model-independent AI engineering. From first workflow to reliable production system, built alongside your team in Thailand and beyond.",
    url: "/", type: "website", locale: "en_TH", siteName: "Archangel",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Archangel forward deployed AI engineering" }],
  },
};

const services=[
  {no:"01",name:"Forward deployed engineering",desc:"Hands-on engineers alongside your team, moving from a hard operational problem to working software.",link:"/services#forward-deployed-engineering"},
  {no:"02",name:"AI agents & automation",desc:"Agents and human-led workflows integrated with your tools, information and business processes.",link:"/services#ai-automation"},
  {no:"03",name:"Systems & integrations",desc:"APIs, applications, data pipelines and model routing built around the software you already run.",link:"/services#product-engineering"},
  {no:"04",name:"Evaluation & operations",desc:"Test, monitor and improve behavior so a promising prototype becomes a dependable system.",link:"/services#production-ai"},
];
const steps=[
  {no:"01",title:"Get close",desc:"Talk to the people who do the work. Map the operational constraint and agree what improvement looks like."},
  {no:"02",title:"Build the right system",desc:"Prototype against real inputs and evaluate the tools, models and integrations the workflow actually needs."},
  {no:"03",title:"Prove it works",desc:"Test against representative cases, edge conditions and a measured baseline—not just a polished demo."},
  {no:"04",title:"Deploy & improve",desc:"Put it into use with appropriate controls, monitoring and a clear owner for the next iteration."},
];

export default function Home() {
  return <main id="main-content" className="adv-site adv-home">
    <section className="adv-hero">
      <div className="adv-shell adv-hero-inner">
        <div className="adv-hero-meta"><span>ARCHANGEL / FORWARD DEPLOYED ENGINEERING</span><span>INDEPENDENT AI DEPLOYMENT · THAILAND</span></div>
        <div className="adv-hero-center">
          <p className="adv-eyebrow">FROM EXPERIMENT TO PRODUCTION</p>
          <h1>We deploy AI<br/><em>where work happens.</em></h1>
          <p className="adv-hero-description">Embedded engineers who turn powerful AI into working business systems. We work with your team to build, integrate, evaluate and deploy—using whichever technology fits the problem.</p>
          <div className="adv-actions"><Link className="adv-button adv-button-black" href={bookingHref} data-cta="adv-home-hero">Discuss a deployment <ArrowUpRight size={17}/></Link><a href="#approach" className="adv-text-button">How we work <ArrowDownRight size={17}/></a></div>
        </div>
        <FieldImage/>
      </div>
    </section>

    <section className="adv-thesis" id="approach">
      <div className="adv-shell adv-thesis-grid">
        <div className="adv-thesis-copy">
          <span className="adv-marker">01 / WHAT WE BELIEVE</span>
          <h2>AI is powerful.<br/><span>Deployment is the work.</span></h2>
          <p>Good models are increasingly available. Making them useful inside real organizations takes something else: understanding the workflow, connecting the systems, designing the controls and staying responsible after launch.</p>
          <p>We work directly with domain experts and engineering teams. We don't arrive with a prescribed product or a single-model agenda.</p>
          <Link className="adv-underline-link" href="/services">What we can deploy <ArrowUpRight size={18}/></Link>
        </div>
        <SystemImage/>
      </div>
    </section>

    <section className="adv-offerings" id="capabilities">
      <div className="adv-shell">
        <div className="adv-heading-row"><div><span className="adv-marker">02 / OUR PRACTICE</span><h2>Built for the<br/>complex work.</h2></div><p>From an uncertain first use case to an operational system, Archangel brings the engineering capacity to get there.</p></div>
        <div className="adv-offerings-list">{services.map(s=><Link className="adv-offering" key={s.no} href={s.link}><span className="adv-offer-no">{s.no} / 04</span><div><h3>{s.name}</h3><p>{s.desc}</p></div><MoveUpRight size={24} strokeWidth={1.4}/></Link>)}</div>
      </div>
    </section>

    <section className="adv-workshow" id="selected-work">
      <div className="adv-shell">
        <div className="adv-heading-row adv-work-heading"><div><span className="adv-marker">03 / WORK & STUDIES</span><h2>See what we build.</h2></div><p>Real product development and clearly identified technical demonstrations. No borrowed client logos or invented impact statistics.</p></div>
        <div className="adv-feature adv-feature-hanna">
          <div className="adv-feature-content"><span className="adv-kicker">01 / ARCHANGEL PRODUCT · IN DEVELOPMENT</span><h3>Hanna</h3><p>Turning a clinical conversation into structured documentation and a patient-friendly care plan—with the clinician in charge of review.</p><a href="https://www.hanna.care" target="_blank" rel="noreferrer">Explore Hanna <ArrowUpRight size={17}/></a><small>Illustrative interface using sample content. Not a deployed hospital system.</small></div>
          <div className="adv-feature-screen"><HannaPreview/></div>
        </div>
        <div className="adv-feature adv-feature-ops">
          <div className="adv-feature-screen"><WorkflowPreview/></div>
          <div className="adv-feature-content"><span className="adv-kicker">02 / INTERNAL ENGINEERING STUDY</span><h3>Systems that<br/>make decisions visible.</h3><p>An example of document intake, validation, human approval and controlled handoff—designed around reliability and traceability.</p><Link href="/work">Explore our work <ArrowUpRight size={17}/></Link><small>Architecture illustration; not a commissioned client deployment.</small></div>
        </div>
      </div>
    </section>

    <section className="adv-method">
      <div className="adv-shell">
        <div className="adv-method-heading"><span className="adv-marker">04 / HOW FDE WORKS</span><h2>Close to the problem.<br/><em>Accountable for the result.</em></h2><p>We take an evidence-led path from the first working version to something people can operate with confidence.</p></div>
        <div className="adv-steps">{steps.map(s=><div className="adv-step" key={s.no}><div className="av3-step-heading"><span>{s.no} / 04</span><ProcessGlyph phase={Number(s.no) as 1 | 2 | 3 | 4}/></div><h3>{s.title}</h3><p>{s.desc}</p></div>)}</div>
        <div className="adv-method-foot"><span><Check size={14}/> Bounded pilots</span><span><Check size={14}/> Model choice by evidence</span><span><Check size={14}/> Human oversight where needed</span></div>
      </div>
    </section>

    <section className="adv-models">
      <div className="adv-shell adv-model-row">
        <div><span className="adv-marker">05 / NO SINGLE-MODEL AGENDA</span><h2>One problem.<br/>Every option.</h2></div>
        <div><p>OpenAI. Anthropic. Gemini. Open-weight models. Traditional software. We evaluate the trade-offs and choose the architecture your work needs—not the one a vendor wants to sell.</p><span>TECHNOLOGIES CONSIDERED / NOT CLAIMS OF PARTNERSHIP</span></div>
      </div>
    </section>

    <section className="adv-contact">
      <div className="adv-shell adv-contact-wrap"><span className="adv-marker">06 / START HERE</span><h2>Bring us the<br/><em>hard part.</em></h2><div className="adv-contact-row"><p>Have an AI pilot that needs to ship, or a workflow you know could work better? Tell us what's blocking it. We'll define a practical first move.</p><Link href={bookingHref} className="adv-button adv-button-white" data-cta="adv-home-contact">Start a conversation <ArrowRight size={18}/></Link></div><div className="adv-contact-bottom"><span>ARCHANGEL COMPANY LIMITED · BANGKOK, THAILAND</span><span>INDEPENDENT BY DESIGN</span></div></div>
    </section>
  </main>;
}

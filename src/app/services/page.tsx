import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BuildLab } from "@/components/editorial/BuildLab";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Development, Product Engineering & AI Implementation | Archangel",
  description: "Archangel designs and builds AI workflow automation, custom software, product prototypes, websites and digital platforms. Founder-led engineering from Bangkok, Thailand.",
  alternates: { canonical: "/services" },
};

const services = [
  { id:"ai-automation", number:"01", label:"AI & AUTOMATION", title:"Make the work\nwork better.", deck:"For teams losing time to repetitive work, disconnected tools or information that never quite gets where it needs to go.", deliverables:["Intelligent workflows and practical AI agents","Document and data processing with human review","Internal tools and system integrations","Pilot, deployment, monitoring and optimization"], note:"A scoped 30-day AI implementation pilot starts from ฿150,000. Larger engagements are quoted against the actual workflow.", href:"/ai-transformation", cta:"Explore AI implementation" },
  { id:"product-engineering", number:"02", label:"PRODUCT ENGINEERING", title:"An idea is only\nthe beginning.", deck:"For founders and teams that need to test a product with real users or bring a new digital service into the world.", deliverables:["Product strategy, user journeys and rapid prototypes","MVPs, customer-facing software and internal applications","Full-stack development, APIs and data architecture","Launch planning, iteration and technical handover"], note:"We start by agreeing the smallest useful release. Pricing depends on scope, integrations and the level of production readiness required.", href:"/book", cta:"Discuss your product" },
  { id:"digital-experiences", number:"03", label:"DIGITAL EXPERIENCES", title:"Digital should\nfeel different.", deck:"For organizations whose website, portal or digital platform needs to do more than simply exist.", deliverables:["Brand-led websites and custom interfaces","Customer portals and conversion-focused journeys","Responsive front-end engineering and accessibility","Performance, analytics and production deployment"], note:"We build bespoke digital experiences, not generic low-cost website packages. Each project is scoped around its actual business and user needs.", href:"/book", cta:"Discuss your platform" },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="aa-home aa-studio-interior aa-services-page">
      <section className="aa-services-hero">
        <div className="page-shell">
          <span className="aa-kicker">CAPABILITIES / DESIGN + ENGINEERING</span>
          <div className="aa-services-intro"><h1>Whatever the<br /><em>challenge,</em><br />make it real<span>.</span></h1><div><p>We combine product thinking, applied AI and hands-on software engineering to take ambitious work from question to working system.</p><Link className="aa-pill aa-pill-lime" href={bookingHref}>Talk about your project <ArrowUpRight size={18} /></Link></div></div>
          <div className="aa-services-ticker"><span>INTELLIGENCE</span><span>PRODUCTS</span><span>PLATFORMS</span><span>EXECUTION</span></div>
        </div>
      </section>
      <section className="aa-services-lines page-shell">
        {services.map((s)=><article className="aa-service" id={s.id} key={s.id}>
          <div className="aa-service-index"><span>{s.number} / 03</span><span>{s.label}</span></div>
          <div className="aa-service-body"><h2>{s.title.split("\n").map((line,i)=><span key={line}>{line}{i===0&&<br />}</span>)}</h2><p className="aa-service-deck">{s.deck}</p><div className="aa-service-details"><div><span className="aa-kicker">WHAT WE CAN DELIVER</span><ul>{s.deliverables.map(d=><li key={d}><CheckCircle2 size={15} />{d}</li>)}</ul></div><div><span className="aa-kicker">HOW TO BEGIN</span><p>{s.note}</p><Link href={s.href}>{s.cta} <ArrowUpRight size={17} /></Link></div></div></div>
        </article>)}
      </section>
      <section className="aa-services-demo">
        <div className="page-shell aa-services-demo-layout"><div><span className="aa-kicker">SEE THE THINKING, NOT JUST THE WORDS</span><h2>Different problems.<br /><em>One build mindset.</em></h2><p>Explore three small interactive interface studies. They illustrate our approach and use sample content; they are not customer deployments.</p><Link href="/work">Explore studio work <ArrowRight size={17} /></Link></div><BuildLab /></div>
      </section>
      <section className="aa-start"><div className="page-shell aa-start-layout"><div><span className="aa-kicker">ONE CONVERSATION. A USEFUL NEXT STEP.</span><h2>Bring us the<br /><em>hard part.</em></h2></div><div className="aa-start-right"><p>Tell us what is not working or what you want to build. We will establish fit, scope and the right first milestone.</p><Link href={bookingHref} className="aa-pill aa-pill-lime">Start a project <ArrowUpRight size={18} /></Link></div></div></section>
    </main>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="page-shell">
      <div className="footer-main">
        <div>
          <Link href="/" className="wordmark" aria-label="Archangel home">ΛRCHΛNGEL</Link>
          <p>AI deployment.<br/>Built for the real world.</p>
          <span>Archangel Company Limited<br/>Bangkok, Thailand<br/>Thailand BOI promoted</span>
        </div>
        <nav aria-label="Footer navigation">
          <span>Explore</span>
          <Link href="/services">Deployment services</Link>
          <Link href="/work">Selected work</Link>
          <Link href="/#approach">How we work</Link>
          <Link href="/ai-transformation">30-day implementation pilot</Link>
          <Link href="/company">Company</Link>
          <Link href="/insights/ai-transformation-thailand-2026">Insights</Link>
        </nav>
        <div className="footer-contact">
          <span>Connect</span>
          <a href={"mailto:"+site.email}>{site.email}<ArrowUpRight size={16} aria-hidden="true"/></a>
          <a href={site.companyLinkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true"/><span className="sr-only"> (opens in a new tab)</span></a>
          <Link href="/book">Discuss a deployment <ArrowUpRight size={16} aria-hidden="true"/></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Archangel Company Limited · Thailand</span><Link href="/privacy">Privacy notice</Link></div>
    </div>
  </footer>;
}

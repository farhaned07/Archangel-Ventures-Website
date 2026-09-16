import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <Link href="/" className="wordmark" aria-label="Archangel home">
              ΛRCHΛNGEL
            </Link>
            <p>Make AI useful at work.</p>
            <span>
              Archangel Company Limited
              <br />
              Bangkok, Thailand
              <br />
              Thailand BOI promoted
            </span>
          </div>
          <nav aria-label="Footer navigation">
            <span>Explore</span>
            <Link href="/ai-transformation-partner-thailand">
              AI transformation Thailand
            </Link>
            <Link href="/ai-transformation">AI Transformation Workshop</Link>
            <Link href="/work">Our work & company</Link>
            <Link href="/farhan-sabbir">Farhan Sabbir</Link>
            <Link href="/insights/ai-transformation-thailand-2026">
              Thailand AI 2026
            </Link>
          </nav>
          <div className="footer-contact">
            <span>Start a conversation</span>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={site.companyLinkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Archangel Company Limited</span>
          <Link href="/privacy">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}

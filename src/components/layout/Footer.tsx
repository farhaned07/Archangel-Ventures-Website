import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <BrandMark className="wordmark" inverse />
            <p>Make AI useful at work.</p>
            <span>
              Archangel Company Limited
              <br />
              AI Transformation
              <br />
              Bangkok, Thailand
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <span>Institution</span>
            <Link href="/services">Capabilities</Link>
            <Link href="/ai-transformation">AI transformation</Link>
            <Link href="/work">Work</Link>
            <Link href="/company">Company</Link>
            <Link href="/insights">Insights</Link>
          </nav>

          <div className="footer-contact">
            <span>Start a conversation</span>
            <a href={site.calendarBookingUrl} target="_blank" rel="noreferrer">
              Book a 15-minute call
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={site.companyLinkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Archangel Company Limited</span>
          <span>AI Transformation · Bangkok</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

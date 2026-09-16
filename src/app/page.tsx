import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WorkCanvas } from "@/components/editorial/WorkCanvas";
import {
  Closing,
  FeaturedWork,
  SectionLabel,
  TextLink,
  WorkshopSummary,
} from "@/components/editorial/Elements";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Archangel | AI Transformation Strategy & Implementation Thailand",
  description:
    "Make AI useful at work. Archangel Company Limited identifies expensive work, redesigns it, builds AI systems and measures the business result. Bangkok. Thailand BOI promoted.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <Image
          src="/images/bangkok.webp"
          alt="Bangkok’s business district at dusk"
          fill
          priority
          sizes="100vw"
          className="hero-city"
        />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <div className="hero-kicker">
            <span>
              AI transformation
              <br />
              Strategy + implementation
            </span>
            <span>
              Bangkok, Thailand
              <br />
              Founder led
            </span>
          </div>
          <h1>
            Make AI useful
            <br />
            <em>at work.</em>
          </h1>
          <div className="hero-bottom">
            <Link
              href={bookingHref}
              className="hero-invitation"
              data-cta="hero-opportunity-call"
            >
              <span>Book an AI Opportunity Call</span>
              <span className="circle-arrow">
                <ArrowUpRight size={25} aria-hidden="true" />
              </span>
            </Link>
            <p>
              We help management teams identify expensive work, redesign it,
              build AI systems and measure the business result.
            </p>
          </div>
          <div className="hero-footnote">
            <span>Archangel Company Limited · Thailand BOI promoted</span>
            <a href="#how" aria-label="Explore the Archangel method">
              <ArrowDown size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <div className="identity-strip page-shell">
        <span>Strategy through implementation.</span>
        <span>Built in Bangkok. Made for the work.</span>
      </div>
      <WorkCanvas />
      <FeaturedWork />
      <WorkshopSummary />
      <section className="company-section page-shell">
        <SectionLabel number="04">Why Archangel</SectionLabel>
        <div className="company-statement">
          <h2>
            Close to the business.
            <br />
            <span className="muted">Responsible for the build.</span>
          </h2>
          <div>
            <p>
              Archangel Company Limited is a Thailand BOI promoted software and
              AI company. We bring commercial judgment and software engineering
              into the same conversation.
            </p>
            <p>
              Founder & Executive Director Farhan Sabbir leads the work from the
              first operating question through implementation.
            </p>
            <TextLink href="/work">Meet Archangel</TextLink>
          </div>
        </div>
        <dl className="company-facts">
          <div>
            <dt>Company</dt>
            <dd>Archangel Company Limited</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Bangkok, Thailand</dd>
          </div>
          <div>
            <dt>Promotion</dt>
            <dd>Thailand Board of Investment</dd>
          </div>
          <div>
            <dt>Leadership</dt>
            <dd>
              <Link href="/farhan-sabbir">
                Farhan Sabbir
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </dd>
          </div>
        </dl>
      </section>
      <section className="insight-teaser page-shell">
        <span>Perspective / September 2026</span>
        <Link href="/insights/ai-transformation-thailand-2026">
          Thailand’s next AI challenge:
          <br />
          turning adoption into value.
          <ArrowUpRight size={28} aria-hidden="true" />
        </Link>
      </section>
      <Closing />
    </main>
  );
}

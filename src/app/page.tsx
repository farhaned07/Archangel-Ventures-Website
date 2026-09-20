import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  title: "Archangel | AI Implementation Partner in Bangkok, Thailand",
  description:
    "Archangel implements AI automation for business operations in Thailand. Start with a free fit call, a scoped 30-day pilot, and a measurable path to production.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="relative bg-[#111312] text-[#f5f6f2]">
        <div className="page-shell flex min-h-[720px] flex-col pb-8 pt-[122px] md:min-h-[820px] md:pb-10 md:pt-[150px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9faa9f] md:text-xs">
            AI implementation partner · Bangkok, Thailand
          </p>

          <div className="my-auto max-w-[1080px] py-12 md:py-20">
            <h1 className="max-w-[980px] text-[clamp(3.75rem,10vw,7.4rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              AI that works.
              <br />
              <span className="text-[#adb5ae]">In your business.</span>
            </h1>

            <div className="mt-8 grid max-w-[900px] gap-8 md:mt-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
              <p className="max-w-[590px] text-[18px] leading-[1.6] text-[#c8cec8] md:text-[20px]">
                We redesign expensive workflows, implement working AI systems
                and measure the result. Start with one 30-day paid pilot.
              </p>
              <Link
                href={bookingHref}
                className="group inline-flex w-fit items-center gap-3 border-b border-[#738078] pb-2 text-[15px] font-medium"
                data-cta="hero-opportunity-call"
              >
                Discuss an implementation
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-[#ffffff24] pt-5 text-[11px] text-[#8f9991] md:text-xs">
            <span>Archangel Company Limited</span>
            <span className="md:ml-auto">Bangkok · Thailand BOI promoted</span>
          </div>
        </div>
      </section>

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

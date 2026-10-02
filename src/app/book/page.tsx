import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { emailHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Conversation | ARCHANGEL",
  description:
    "Book a free 15-minute fit call with Archangel about an AI transformation, technology system or digital platform.",
  alternates: { canonical: "/book" },
  robots: { index: false, follow: true },
};

export default function BookPage() {
  return (
    <main id="main-content" className="aa-inner">
      <section className="aa-inner-hero">
        <div className="page-shell aa-inner-hero-grid">
          <div className="aa-inner-hero-copy">
            <div className="aa-section-kicker">START / ARCHANGEL</div>
            <h1>
              One problem.
              <br />
              <span>Fifteen minutes.</span>
            </h1>
            <p className="aa-inner-hero-deck">
              Tell us what costs too much time, money or attention — or what
              system needs to exist. We will establish whether there is a serious
              next step.
            </p>
          </div>

          <aside className="aa-inner-material aa-suede">
            <div className="aa-micro">FREE FIT CALL / 15 MINUTES</div>
            <div>
              <h2>Speak directly with Archangel.</h2>
              <p>
                No presentation is required. A plain description of the process,
                users and business consequence is enough to start.
              </p>
              <div className="aa-inner-hero-actions">
                <a
                  href={site.calendarBookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="aa-button aa-button-dark"
                  data-cta="calendar-booking"
                >
                  See available times
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="aa-inner-material-foot">
              <span>GOOGLE MEET</span>
              <span>BANGKOK / GLOBAL</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="aa-inner-section">
        <div className="page-shell aa-two-col">
          <h2>
            Bring the
            <br />
            <span>operating problem.</span>
          </h2>
          <div className="aa-two-col-copy">
            <h3>What is happening today?</h3>
            <p>
              Describe the process, where it breaks, who owns it and what the
              problem costs in time, money, quality or attention.
            </p>
            <h3>What should be different?</h3>
            <p>
              Tell us what a useful result would look like. You do not need to
              know whether the answer is AI, automation, software or process redesign.
            </p>
            <h3>What happens next?</h3>
            <p>
              If there is a fit, we define the appropriate first milestone and
              scope it separately. If there is not, we say so.
            </p>
            <a href={emailHref} className="aa-button aa-button-light">
              Prefer email?
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="aa-cta aa-suede">
        <div className="page-shell">
          <div className="aa-section-kicker">ARCHANGEL / BANGKOK</div>
          <h2>
            Make the first
            <br />
            <span>conversation useful.</span>
          </h2>
          <div className="aa-cta-row">
            <p>
              Bring one real problem. We will focus the call on whether it is
              valuable, tractable and worth taking to a working system.
            </p>
            <a
              href={site.calendarBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="aa-button aa-button-dark"
            >
              Book the call
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

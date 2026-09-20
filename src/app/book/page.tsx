import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Video } from "lucide-react";
import Link from "next/link";
import { emailHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Technology Project | Book a Free Fit Call | Archangel",
  description:
    "Book a free 15-minute fit call with Archangel about your AI implementation, software product, prototype or digital platform project.",
  alternates: {
    canonical: "/book",
  },
  robots: {
    index: false,
    follow: true,
  },
};

import { SectionLabel } from "@/components/editorial/Elements";
export default function BookPage() {
  return (
    <main id="main-content" className="interior aa-studio-interior">
      <section className="page-hero page-shell split-hero">
        <div>
          <Link href="/" className="route-breadcrumb">
            Archangel / Start a conversation
          </Link>
          <SectionLabel number="01">Free project fit call</SectionLabel>
          <h1>
            One conversation.
            <br />
            <span className="muted">A useful next step.</span>
          </h1>
          <p className="hero-deck">
            Tell us what you want to build or what is not working. We’ll discuss the
            users, business goal, decision timeline and a useful first milestone.
          </p>
          <div className="booking-meta">
            <span>
              <CalendarDays size={18} aria-hidden="true" />
              15 minutes
            </span>
            <span>
              <Video size={18} aria-hidden="true" />
              Google Meet
            </span>
          </div>
        </div>
        <div className="booking-panel">
          <SectionLabel number="↗">Choose your time</SectionLabel>
          <h2>Meet with Archangel.</h2>
          <p>
            Your call is with Farhan Sabbir,
            <br />
            Founder & Executive Director.
          </p>
          {site.calendarBookingUrl && (
            <a
              href={site.calendarBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
              data-cta="calendar-booking"
            >
              Open Google Calendar
              <ArrowUpRight size={19} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <p>
            Choose an available time on Google Calendar. Your invitation will
            include the meeting details.
          </p>
          <a href={emailHref} className="text-link" data-cta="booking-email">
            Prefer to arrange it by email?
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="page-shell section-grid">
        <div>
          <SectionLabel number="02">Before the call</SectionLabel>
          <h2>Bring one problem or product idea.</h2>
        </div>
        <div className="prose">
          <p>
            What needs to change or get built? Who will use it, and what would
            make the first release worthwhile?
          </p>
          <p>
            A simple description is enough to begin. You do not need to prepare
            a presentation or share sensitive documents.
          </p>
          <p>Archangel Company Limited · Bangkok · Thailand BOI promoted</p>
        </div>
      </section>
    </main>
  );
}

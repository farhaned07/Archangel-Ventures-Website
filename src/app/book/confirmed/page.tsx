import type { Metadata } from "next";
import { CalendarCheck2, Video } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your AI Opportunity Call | Archangel",
  description:
    "Check your Google Calendar invitation for your AI Opportunity Call with Archangel.",
  alternates: { canonical: "/book/confirmed" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingConfirmedPage() {
  return (
    <main
      id="main-content"
      className="confirmed-page"
    >
      <section className="confirmed-inner page-shell">
        <div className="confirmed-content">
          <div className="confirmed-icon">
            <CalendarCheck2 className="confirmed-icon-svg" />
          </div>
          <p className="eyebrow confirmed-eyebrow">AI Opportunity Call</p>
          <h1 className="confirmed-title">
            Check your invitation.
          </h1>
          <p className="confirmed-copy">
            If you completed your booking on Google Calendar, check your inbox
            for the invitation and Google Meet link. Bring one workflow that
            feels slower, more manual or more expensive than it should be.
          </p>

          <div className="confirmed-meta">
            <Video className="confirmed-meta svg" /> Google Meet
          </div>

          <Link
            href="/"
            className="button-primary confirmed-cta"
            data-cta="booking-confirmed-home"
          >
            Back to Archangel
          </Link>
        </div>
      </section>
    </main>
  );
}

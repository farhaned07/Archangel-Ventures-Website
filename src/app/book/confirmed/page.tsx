import type { Metadata } from "next";
import { CalendarCheck2, Video } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call Booked | Archangel",
  description: "Your AI Opportunity Call with Archangel is booked.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingConfirmedPage() {
  return (
    <main className="pt-[64px] md:pt-[72px] min-h-[78vh] bg-[#f6f6f2] flex items-center">
      <section className="page-shell py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          <div className="w-12 h-12 rounded-full border border-[#d8d8d2] bg-white flex items-center justify-center">
            <CalendarCheck2 className="w-5 h-5 text-[#11110f]" />
          </div>
          <p className="eyebrow text-[#85857f] mt-8">AI Opportunity Call</p>
          <h1 className="mt-5 text-[3.2rem] sm:text-[4.8rem] lg:text-[5.8rem] leading-[0.92] tracking-[-0.065em] font-medium">
            You’re booked.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#696963] max-w-2xl">
            Your calendar invitation and Google Meet link will be in your inbox. Bring one workflow that feels slower, more manual or more expensive than it should be.
          </p>

          <div className="mt-9 flex items-center gap-3 text-sm text-[#6f6f69]">
            <Video className="w-4 h-4" /> Google Meet
          </div>

          <Link href="/" className="button-primary mt-10 inline-flex" data-cta="booking-confirmed-home">
            Back to Archangel
          </Link>
        </div>
      </section>
    </main>
  );
}

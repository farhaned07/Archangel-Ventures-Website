import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CalendarDays, Video } from "lucide-react";
import Link from "next/link";
import { emailHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a 15 minute AI Opportunity Call | Archangel",
  description: "Book a short call with Archangel to discuss where work is costing your business time or money.",
};

export default function BookPage() {
  const hasCalendar = Boolean(site.calendarBookingUrl);

  return (
    <main className="pt-[64px] md:pt-[72px] min-h-screen bg-[#f6f6f2]">
      <section className="page-shell py-12 md:py-20 lg:py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#777771] hover:text-[#11110f] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archangel
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-10 lg:gap-16 mt-10 md:mt-14 items-start">
          <div className="max-w-xl">
            <p className="eyebrow text-[#85857f]">AI Opportunity Call</p>
            <h1 className="mt-5 text-[3.2rem] sm:text-[4.8rem] lg:text-[5.8rem] leading-[0.92] tracking-[-0.065em] font-medium">15 minutes. One problem.</h1>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-[#696963]">Show us where work is slow, manual or expensive. We will tell you whether the workshop is the right next step.</p>

            <div className="mt-9 space-y-3 text-sm text-[#6f6f69]">
              <div className="flex items-center gap-3"><CalendarDays className="w-4 h-4" /> 15 minutes</div>
              <div className="flex items-center gap-3"><Video className="w-4 h-4" /> Google Meet</div>
            </div>
          </div>

          <div className="rounded-[2rem] md:rounded-[2.5rem] border border-[#d9d9d3] bg-white p-6 md:p-9 lg:p-10 shadow-[0_24px_80px_rgba(20,20,18,0.06)]">
            {hasCalendar ? (
              <>
                <p className="text-sm text-[#777771]">Choose a time</p>
                <a href={site.calendarBookingUrl} className="button-primary mt-7 w-full" target="_blank" rel="noreferrer">
                  Open calendar <ArrowRight className="w-4 h-4" />
                </a>
              </>
            ) : (
              <>
                <p className="text-sm text-[#777771]">Calendar connection</p>
                <h2 className="mt-4 text-3xl md:text-4xl tracking-[-0.045em] font-medium">Scheduling is being connected.</h2>
                <p className="mt-5 text-[#777771] leading-relaxed">Until the Google Calendar booking page is authorized, you can schedule directly by email.</p>
                <a href={emailHref} className="button-primary mt-8 w-full">
                  Schedule by email <ArrowRight className="w-4 h-4" />
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

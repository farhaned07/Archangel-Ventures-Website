const defaultSiteUrl = "https://archangel-ventures-website.vercel.app";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredCalendarUrl = process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL?.trim();
const configuredGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export const site = {
  name: "Archangel",
  legalName: "Archangel Company Limited",
  email: "farhan.sabbir07@gmail.com",
  workshopPrice: "฿45,000",
  bookingSubject: "15 minute AI Opportunity Call",
  location: "Bangkok, Thailand",
  url: (configuredSiteUrl || defaultSiteUrl).replace(/\/+$/, ""),
  calendarBookingUrl: configuredCalendarUrl || "",
  gtmId: configuredGtmId || "",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(site.bookingSubject)}`;
export const bookingHref = "/book";

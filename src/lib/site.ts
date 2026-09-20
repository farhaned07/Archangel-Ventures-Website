const defaultSiteUrl = "https://archangel-ventures-website.vercel.app";
const defaultCalendarBookingUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0KbyUG8Zv6Gb9hjLvZ7CgYQ37wu9P2dzvxZoyj5UO7OfLasInTQBzPeqLTddrzu4LphvjMllL5";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredCalendarUrl = process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL?.trim();
const configuredGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export const site = {
  name: "Archangel",
  legalName: "Archangel Company Limited",
  companyRegistrationNumber: "0105566194825",
  email: "farhan.sabbir07@gmail.com",
  phone: "+66 92 686 7042",
  pilotPrice: "From ฿150,000",
  bookingSubject: "15 minute AI implementation fit call",
  location: "Bangkok, Thailand",
  streetAddress: "57 Witthayu Road, Lumphini, Pathum Wan",
  postalCode: "10330",
  countryCode: "TH",
  url: (configuredSiteUrl || defaultSiteUrl).replace(/\/+$/, ""),
  linkedinUrl: "https://th.linkedin.com/in/sabbirfarhan",
  companyLinkedinUrl: "https://www.linkedin.com/company/143891155",
  githubUrl: "https://github.com/farhaned07",
  businessRegistryUrl: "https://www.dataforthai.com/company/0105566194825/",
  googleBusinessProfileUrl: "https://share.google/4MzK4fvh5MJ5dczxI",
  calendarBookingUrl: configuredCalendarUrl || defaultCalendarBookingUrl,
  gtmId: configuredGtmId || "",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(site.bookingSubject)}`;
export const bookingHref = "/book";

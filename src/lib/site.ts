export const site = {
  name: "Archangel",
  legalName: "Archangel Company Limited",
  email: "farhan.sabbir07@gmail.com",
  workshopPrice: "฿45,000",
  bookingSubject: "15 minute AI Opportunity Call",
  location: "Bangkok, Thailand",
  calendarBookingUrl: "",
} as const;

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(site.bookingSubject)}`;

// All public CTAs route through /book. Once Google Calendar is connected,
// set calendarBookingUrl and the booking page will use it without changing the site narrative.
export const bookingHref = "/book";

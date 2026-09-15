export const site = {
  name: "Archangel",
  legalName: "Archangel Company Limited",
  email: "farhan.sabbir07@gmail.com",
  workshopPrice: "฿45,000",
  bookingSubject: "15 minute AI Opportunity Call",
  location: "Bangkok, Thailand",
} as const;

export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(site.bookingSubject)}`;

// Replace this single value with the public calendar URL when the booking calendar is connected.
export const bookingHref = emailHref;

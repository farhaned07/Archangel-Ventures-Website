# Redesign validation — 16 September 2026

The original ΛRCHΛNGEL wordmark is retained. No replacement logo or generated brand sculpture is included.

## Completed checks

- Production build, ESLint and TypeScript pass. Pages prerender successfully.
- `node scripts/verify-site.mjs <base-url>` validates nine routes, status codes, one H1, skip targets, titles, descriptions, canonicals, JSON-LD, internal links and fragment targets, booking links, sitemap, robots and social assets. Passed against the production build.
- Homepage browser layout measured at 320, 390, 430, 768, 1024 and 1440 CSS pixels. No horizontal overflow after correcting intrinsic grid sizing.
- Work, service, founder, article, workshop and booking layouts reviewed in the browser. Narrow service and founder layouts measured at 320; article, workshop and booking at 390. Homepage, work, founder and workshop received desktop visual review.
- Mobile native dialog opens and closes with Escape. Method tabs change the workflow presentation. Native FAQ disclosure markup retained.
- Original Google Calendar schedule opens and displays the 15-minute opportunity call and available appointments. No test meeting was submitted.
- Metadata, Organization/Person entities, fee terms, BOI identity, existing routes and configurable canonical domain are retained. Booking confirmation wording does not falsely assert a completed booking.
- Fonts are self hosted. Bangkok photograph is optimized with Next Image; source/licence attribution is in the audit. No new runtime dependencies.
- Temporary responsive review harness removed from final source.

## Limits and launch notes

This is a browser and code review, not a formal WCAG certification or measured field Core Web Vitals result. No Lighthouse score is claimed. Real device Safari and completion of a genuine calendar booking remain useful launch checks.

The redesign is delivered on a review branch and Vercel preview. Production promotion is a separate decision. Keep NEXT_PUBLIC_SITE_URL aligned with the canonical production domain when the permanent domain migration happens. The existing contact email remains in place until a business-domain address is supplied.

The design uses real Bangkok photography for geographic context; it does not represent an Archangel office. Product workflow illustrations are labelled as illustrations, and framework descriptions do not claim unverified client deployments or results.

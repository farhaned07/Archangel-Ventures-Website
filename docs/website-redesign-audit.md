# Archangel website audit and design brief

Baseline: a671739f3d0e2a7708b4c78851792f102b143187, 16 September 2026.
Live site: https://archangel-ventures-website.vercel.app

## Preserve
Next.js 16 App Router, React 19, npm lockfile, Tailwind 4; existing routes, Google Calendar URL, configurable canonical domain, Organization/Person identities, article sources, BOI identity, workshop price and implementation credit, consent architecture and existing social image.

## Findings before implementation
- Homepage: strong headline but no explicit audience or strategy-through-implementation explanation; company credentials sit below a very large hero. Real applied work is absent. Multiple interactive diagrams repeat the same proposition and make a presentation feel like a product demo.
- Workshop: oversized split heading; the large SVG canvas appeared empty on initial render in the live browser. Output descriptions are repeated in two sections. Large interactive containers hide simple information. Mobile fixed CTA is unnecessary pressure.
- Thailand partner page: sound Service and FAQ schema, but repeats homepage method, credentials and generic closing copy. Excessive section heights and repeated rounded cards reduce editorial distinction.
- Work: Hanna, Onnesha and Applied AI are preserved. All three appear under “Built systems” despite differing evidence. The repository substantiates a real enterprise delivery framework/AP blueprint; separate that from deployed-client claims. Existing product diagrams are illustrations, not screenshots.
- Founder: correct name/title/entity. Biography repeats generic service wording rather than explaining responsibility and approach.
- Insight: preserves valuable Article schema and sources. Oversized headline and cards interrupt reading. Deloitte 61%/19% and PwC 18% checked against original sources. Describe survey samples accurately, not all Thai businesses.
- Booking: external Google Calendar appointment schedule works, shows Farhan Sabbir, 15 minutes and available slots. Preserve this architecture. Add clearer expectations and always-available email alternative. Do not submit a test booking to the real calendar.
- Confirmation: an arbitrary visit to /book/confirmed currently emits booking_completed; no trusted confirmation integration is present. Stop counting page visits as confirmed conversions.
- Navigation/accessibility: no skip link; mobile overlay lacks Escape/focus handling. Dark surfaces use low-contrast labels; 10–12px text appears in diagrams. Smooth scrolling is not disabled under reduced-motion preference. Anchor destinations lack consistent sticky-header offsets.
- SEO: core metadata and entities are good. Main sitemap omits partner/article routes, relying on supplemental sitemap; include all indexable pages while retaining supplemental endpoint. Keep noindex booking routes.
- Performance: homepage is a client component and ships Framer Motion for presentational interactions. Existing production build fails in this environment fetching Google Fonts (TLS). Self-host licensed Inter to remove that build dependency.
- Visual identity: repeated oversized gray second lines, pill buttons and rounded containers. Sparse sections do not add evidence. No clear visual distinction between a product, methodology and service.

## Design thesis
An operating company expressed as a precise editorial publication. Black and white, disciplined Inter typography, a consistent marginal numbering system, fine rules and deliberate density changes. A strong left-aligned headline with a concise operating statement alongside it. Real systems and delivery artifacts supply interest; no decorative AI imagery, manufactured metrics or invented clients.

Homepage sequence: positioning and company identity → operating problem/method → Hanna and applied systems → workshop → institutional/founder credibility → one calm closing invitation.

Distinct route roles: homepage introduces; partner page explains engagement and controls; workshop supports a buying decision; work supplies evidence; founder identifies accountability; article provides readable research; booking gives one clear next action.

## Validation plan
Production build, TypeScript, lint, rendered route/link/metadata/schema checks, browser review of every requested route, responsive viewport checks, keyboard navigation, Google Calendar handoff, reduced motion, performance/asset review. Preserve domain migration through NEXT_PUBLIC_SITE_URL. Record actual results and any limitations; do not equate a self-score with buyer research.

## Visual direction revision
Farhan explicitly requested a complete frontend redesign and locked the existing logo. Generated sculpture exploration was rejected and is not used in the website. The implemented direction uses real monochrome Bangkok photography, the unchanged ΛRCHΛNGEL wordmark, a bespoke interactive workflow canvas, product-specific Hanna visualization, and varied editorial compositions across routes.

Hero photograph: Waranont (Joe), Bangkok, published 21 July 2019, Unsplash License. Source: https://unsplash.com/photos/lighted-metropolitan-building-GQT9KhEbJOY . Stored locally as optimized WebP; not presented as an Archangel office or client. Hanna visual is explicitly a workflow illustration, not an actual application screenshot.

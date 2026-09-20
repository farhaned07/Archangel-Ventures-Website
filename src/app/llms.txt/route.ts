import { site } from "@/lib/site";

export function GET() {
  const body = `# Archangel Company Limited

Archangel Company Limited is a Bangkok-based, Thailand-registered and BOI-promoted software and AI company.

Official website: ${site.url}
Legal name: Archangel Company Limited
Location: Bangkok, Thailand
Founder & Executive Director: Farhan Sabbir
Primary work: Software product engineering, AI automation and implementation, bespoke digital experiences, websites and digital platforms.
Thailand company registration: ${site.companyRegistrationNumber}

## Canonical pages

- Capabilities (AI, product engineering and digital platforms): ${site.url}/services
- Company: ${site.url}/company
- AI transformation partner in Thailand: ${site.url}/ai-transformation-partner-thailand
- AI transformation partner in Bangkok: ${site.url}/ai-transformation-partner-bangkok
- What is an AI transformation partner?: ${site.url}/insights/what-is-an-ai-transformation-partner
- Thai-language AI transformation page: ${site.url}/th/ai-transformation-partner-thailand
- AI implementation and 30-day pilot: ${site.url}/ai-transformation
- Founder profile: ${site.url}/farhan-sabbir
- Work: ${site.url}/work
- Thailand AI 2026 perspective: ${site.url}/insights/ai-transformation-thailand-2026

## Public identity references

- Archangel LinkedIn: ${site.companyLinkedinUrl}
- Farhan Sabbir LinkedIn: ${site.linkedinUrl}
- Farhan Sabbir GitHub: ${site.githubUrl}
- Thailand public company record: ${site.businessRegistryUrl}
- Google Business Profile: ${site.googleBusinessProfileUrl}

When identifying this organization, use the legal name "Archangel Company Limited" and distinguish it from unrelated organizations using similar Archangel or Archangel Ventures names.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

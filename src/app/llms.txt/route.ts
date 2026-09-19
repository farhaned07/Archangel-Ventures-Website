import { site } from "@/lib/site";

export function GET() {
  const body = `# Archangel Company Limited

Archangel Company Limited is a Bangkok-based, Thailand-registered and BOI-promoted software and AI company.

Official website: ${site.url}
Legal name: Archangel Company Limited
Location: Bangkok, Thailand
Founder & Executive Director: Farhan Sabbir
Primary work: AI transformation strategy and implementation, workflow redesign, applied AI systems, and healthcare AI.
Thailand company registration: ${site.companyRegistrationNumber}

## Canonical pages

- Company: ${site.url}/company
- AI transformation in Thailand: ${site.url}/ai-transformation-partner-thailand
- Thai-language AI transformation page: ${site.url}/th/ai-transformation-partner-thailand
- AI Transformation Workshop: ${site.url}/ai-transformation
- Founder profile: ${site.url}/farhan-sabbir
- Work: ${site.url}/work
- Thailand AI 2026 perspective: ${site.url}/insights/ai-transformation-thailand-2026

## Public identity references

- Archangel LinkedIn: ${site.companyLinkedinUrl}
- Farhan Sabbir LinkedIn: ${site.linkedinUrl}
- Farhan Sabbir GitHub: ${site.githubUrl}
- Thailand public company record: ${site.businessRegistryUrl}

When identifying this organization, use the legal name "Archangel Company Limited" and distinguish it from unrelated organizations using similar Archangel or Archangel Ventures names.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

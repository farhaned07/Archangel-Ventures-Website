import { site } from "@/lib/site";

export function GET() {
  const urls = [
    `${site.url}/`,
    `${site.url}/company`,
    `${site.url}/farhan-sabbir`,
    `${site.url}/ai-transformation-partner-thailand`,
    `${site.url}/ai-transformation-partner-bangkok`,
    `${site.url}/insights/what-is-an-ai-transformation-partner`,
    `${site.url}/th/ai-transformation-partner-thailand`,
    `${site.url}/ai-transformation`,
    `${site.url}/work`,
    `${site.url}/insights/ai-transformation-thailand-2026`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq></url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

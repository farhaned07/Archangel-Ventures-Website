import { absoluteUrl, site } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const articleUrl = absoluteUrl("/insights/ai-transformation-thailand-2026");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.legalName)} — Insights</title>
    <link>${site.url}</link>
    <description>AI transformation, applied AI systems and operating insight from Archangel Company Limited in Thailand.</description>
    <language>en-th</language>
    <lastBuildDate>Sun, 20 Sep 2026 00:00:00 GMT</lastBuildDate>
    <item>
      <title>AI Transformation in Thailand 2026: The Execution Gap</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>Wed, 16 Sep 2026 00:00:00 GMT</pubDate>
      <author>${escapeXml(site.email)} (Farhan Sabbir)</author>
      <description>Thailand is adopting AI quickly, but most organizations are still struggling to scale it into measurable business value.</description>
    </item>
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

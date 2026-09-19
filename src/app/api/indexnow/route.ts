import { site } from "@/lib/site";

const key = "9300ddb6ff1f76653c7b74e1889ba1f7";

export async function GET() {
  const urlList = [
    `${site.url}/`,
    `${site.url}/company`,
    `${site.url}/farhan-sabbir`,
    `${site.url}/ai-transformation-partner-thailand`,
    `${site.url}/insights/what-is-an-ai-transformation-partner`,
    `${site.url}/th/ai-transformation-partner-thailand`,
    `${site.url}/ai-transformation`,
    `${site.url}/work`,
    `${site.url}/insights/ai-transformation-thailand-2026`,
  ];

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: new URL(site.url).host,
        key,
        keyLocation: `${site.url}/${key}.txt`,
        urlList,
      }),
      cache: "no-store",
    });

    const responseText = await response.text();

    return Response.json(
      {
        submitted: response.ok,
        indexNowStatus: response.status,
        urlCount: urlList.length,
        response: responseText || null,
      },
      {
        status: response.ok ? 200 : 502,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    return Response.json(
      {
        submitted: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 502,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}

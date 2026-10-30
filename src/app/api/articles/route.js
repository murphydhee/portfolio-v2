import Parser from "rss-parser";

// Re-check Medium at most once an hour rather than on every visit.
export const revalidate = 3600;

const FEED_URL = "https://murphydhee.medium.com/feed";

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(FEED_URL);

    const articles = (feed.items || []).slice(0, 6).map((item, index) => {
      // Medium's RSS doesn't give a dedicated thumbnail field — pull the
      // first <img> out of the full-content HTML instead.
      const html = item["content:encoded"] || item.content || "";
      const imageMatch = /<img[^>]+src="([^"]+)"/.exec(html);

      return {
        id: item.guid || item.link || String(index),
        title: item.title,
        subtitle: item.creator || "Mfon Ekwere",
        meta: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : null,
        href: item.link,
        thumbnail: imageMatch ? imageMatch[1] : null,
      };
    });

    return Response.json({ articles });
  } catch (error) {
    return Response.json({ articles: [] }, { status: 502 });
  }
}

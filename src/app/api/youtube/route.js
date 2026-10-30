import Parser from "rss-parser";

// Re-check at most once an hour rather than on every visit.
export const revalidate = 3600;

const HANDLE = "subbyalpha";

// YouTube's channel RSS feed is keyed by channel ID, not the @handle, so we
// resolve the handle to an ID once by scraping it out of the channel page.
async function resolveChannelId() {
  const response = await fetch(`https://www.youtube.com/@${HANDLE}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    },
  });
  if (!response.ok) throw new Error("Could not load YouTube channel page");
  const html = await response.text();
  const match = /"channelId":"(UC[0-9A-Za-z_-]{22})"/.exec(html);
  if (!match) throw new Error("Could not resolve channel ID from handle");
  return match[1];
}

export async function GET() {
  try {
    const channelId = await resolveChannelId();
    const parser = new Parser();
    const feed = await parser.parseURL(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
    );

    const videos = (feed.items || []).slice(0, 6).map((item, index) => {
      // YouTube's atom id is "yt:video:<ID>"; the watch link also carries
      // ?v=<ID>. Either gets us the predictable, no-auth thumbnail URL.
      const videoId =
        item.id?.replace("yt:video:", "") ||
        /[?&]v=([a-zA-Z0-9_-]{11})/.exec(item.link || "")?.[1] ||
        null;

      return {
        id: videoId || item.link || String(index),
        title: item.title,
        subtitle: "Subby",
        meta: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : null,
        href: item.link,
        thumbnail: videoId
          ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
          : null,
      };
    });

    return Response.json({ videos });
  } catch (error) {
    return Response.json({ videos: [] }, { status: 502 });
  }
}

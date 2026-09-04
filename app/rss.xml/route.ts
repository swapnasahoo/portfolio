import RSS from "rss";
import { site } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const feed = new RSS({
    title: `${site.name} — Writing`,
    description: `Notes on React Native, Expo, Next.js, and shipping mobile and web apps. By ${site.name}.`,
    site_url: site.url,
    feed_url: `${site.url}/rss.xml`,
    language: "en-IN",
    image_url: `${site.url}/og.png`,
    managingEditor: site.email,
    webMaster: site.email,
    copyright: `${new Date().getFullYear()} ${site.name}`,
    categories: ["Technology", "React Native", "Expo", "Next.js", "TypeScript"],
  });

  const posts = getAllPosts();

  for (const post of posts) {
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${site.url}${post.url}`,
      guid: `${site.url}${post.url}`,
      author: site.name,
      date: post.frontmatter.date,
      categories: post.frontmatter.tags ?? [],
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

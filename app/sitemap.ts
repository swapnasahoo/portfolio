import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${site.url}${post.url}`,
      lastModified: new Date(post.frontmatter.updated ?? post.frontmatter.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

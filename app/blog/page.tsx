import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";
import { formatDateShort, getAllPosts } from "@/lib/blog";

const title = "Writing";
const description = `Notes on React Native, Expo, Next.js, and building mobile apps. By ${site.name}.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    `${site.name} blog`,
    "React Native blog",
    "Expo blog",
    "Next.js blog",
    "Appwrite blog",
    "TypeScript blog",
    "India developer blog",
  ],
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    type: "website",
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}/blog`,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${title} — ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${site.name}`,
    description,
    images: ["/og.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} — ${title}`,
    url: `${site.url}/blog`,
    description,
    author: { "@type": "Person", name: site.name, url: site.url },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.frontmatter.title,
      url: `${site.url}${p.url}`,
      datePublished: p.frontmatter.date,
      dateModified: p.frontmatter.updated ?? p.frontmatter.date,
      description: p.frontmatter.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <header className="mb-12">
          <p className="eyebrow">Writing</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Notes and posts</h1>
          <p className="mt-3 text-[var(--ink-mute)]">
            Short writeups on React Native, Expo, Next.js, and the smaller problems I run into
            while shipping mobile and web apps.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="hairline pt-6 text-[var(--ink-mute)]">No posts yet.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="group">
                <Link href={post.url} className="block">
                  <article className="hairline pt-6">
                    <div className="flex items-center gap-3 text-xs text-[var(--ink-mute)]">
                      <time dateTime={post.frontmatter.date}>
                        {formatDateShort(post.frontmatter.date)}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight group-hover:underline">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-2 text-[var(--ink-mute)]">{post.frontmatter.description}</p>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {post.frontmatter.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-xs text-[var(--ink-mute)]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16">
          <Link href="/" className="link text-sm text-[var(--ink-mute)]">
            ← Back home
          </Link>
        </div>
      </main>
    </>
  );
}

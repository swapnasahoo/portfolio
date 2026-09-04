import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { site } from "@/lib/content";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `${site.url}${post.url}`;
  const ogImage = post.frontmatter.cover ?? "/og.png";

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: [
      post.frontmatter.title,
      site.name,
      ...(post.frontmatter.tags ?? []),
    ],
    alternates: { canonical: url },
    authors: [{ name: site.name, url: site.url }],
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      siteName: site.name,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated ?? post.frontmatter.date,
      authors: [site.name],
      tags: post.frontmatter.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${site.url}${post.url}`;
  const ogImage = `${site.url}${post.frontmatter.cover ?? "/og.png"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated ?? post.frontmatter.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: ogImage,
    keywords: post.frontmatter.tags?.join(", "),
    wordCount: post.wordCount,
    url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <nav className="mb-8 text-sm">
          <Link href="/blog" className="link text-[var(--ink-mute)] hover:text-[var(--ink)]">
            ← All posts
          </Link>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-[var(--ink-mute)]">
              {post.frontmatter.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--ink-mute)]">
              <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.frontmatter.updated &&
              post.frontmatter.updated !== post.frontmatter.date ? (
                <>
                  <span aria-hidden>·</span>
                  <span>Updated {formatDate(post.frontmatter.updated)}</span>
                </>
              ) : null}
            </div>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
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
          </header>

          <div className="prose-custom">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap",
                        properties: { className: ["heading-anchor"] },
                      },
                    ],
                  ],
                },
              }}
            />
          </div>
        </article>

        <footer className="mt-16 hairline pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Author</p>
              <p className="mt-1 text-sm">
                <Link href="/" className="link">
                  {site.name}
                </Link>{" "}
                — {site.jobTitle}
              </p>
            </div>
            <Link
              href={`mailto:${site.email}?subject=Re: ${encodeURIComponent(post.frontmatter.title)}`}
              className="link text-sm"
            >
              Reply by email →
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

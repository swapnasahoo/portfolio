import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  url: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingMinutes: number;
  wordCount: number;
};

export type BlogPostSummary = {
  slug: string;
  url: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function ensurePostsDir() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  return { raw, data: parsed.data as Partial<BlogFrontmatter>, content: parsed.content };
}

function isValidFrontmatter(data: Partial<BlogFrontmatter>): data is BlogFrontmatter {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.date === "string"
  );
}

export function getAllSlugs(): string[] {
  ensurePostsDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getAllPosts(options: { includeDrafts?: boolean } = {}): BlogPost[] {
  const { includeDrafts = false } = options;
  const slugs = getAllSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    const file = readPostFile(slug);
    if (!file) continue;
    if (!isValidFrontmatter(file.data)) continue;
    if (file.data.draft && !includeDrafts) continue;

    const stats = readingTime(file.content);
    posts.push({
      slug,
      url: `/blog/${slug}`,
      frontmatter: file.data,
      content: file.content,
      readingMinutes: Math.max(1, Math.round(stats.minutes)),
      wordCount: stats.words,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  );
}

export function getPost(slug: string): BlogPost | null {
  const file = readPostFile(slug);
  if (!file) return null;
  if (!isValidFrontmatter(file.data)) return null;
  const stats = readingTime(file.content);
  return {
    slug,
    url: `/blog/${slug}`,
    frontmatter: file.data,
    content: file.content,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    wordCount: stats.words,
  };
}

export function getAllPostSummaries(): BlogPostSummary[] {
  return getAllPosts().map((p) => ({
    slug: p.slug,
    url: p.url,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    updated: p.frontmatter.updated,
    tags: p.frontmatter.tags ?? [],
    readingMinutes: p.readingMinutes,
  }));
}

export function getPostSummary(slug: string): BlogPostSummary | null {
  const post = getPost(slug);
  if (!post) return null;
  return {
    slug: post.slug,
    url: post.url,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    date: post.frontmatter.date,
    updated: post.frontmatter.updated,
    tags: post.frontmatter.tags ?? [],
    readingMinutes: post.readingMinutes,
  };
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

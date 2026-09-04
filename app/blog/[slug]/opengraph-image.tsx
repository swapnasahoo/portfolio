import { ImageResponse } from "next/og";
import { site } from "@/lib/content";
import { getPost } from "@/lib/blog";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  return [{ id: params.slug, alt: `Cover for ${params.slug}`, contentType: "image/png", size }];
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.frontmatter.title ?? "Untitled";
  const description = post?.frontmatter.description ?? "";
  const dateStr = post
    ? new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#fafaf7",
          color: "#111111",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#6b6b6b",
            fontSize: 22,
          }}
        >
          <div style={{ width: 10, height: 10, background: "#111111", borderRadius: 2 }} />
          <span>{site.name} · Writing</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                fontSize: 28,
                color: "#6b6b6b",
                maxWidth: 900,
                lineHeight: 1.3,
              }}
            >
              {description.length > 140 ? description.slice(0, 137) + "…" : description}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#6b6b6b",
            fontSize: 20,
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          {dateStr ? <span>{dateStr}</span> : null}
        </div>
      </div>
    ),
    size,
  );
}

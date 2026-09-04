import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="hairline">
      <div className="mx-auto flex max-w-2xl flex-col gap-2 px-6 py-6 text-sm text-[var(--ink-mute)] sm:flex-row sm:items-center sm:justify-between">
        <span>
          {site.name} · {new Date().getFullYear()}
        </span>
        <ul className="flex gap-5">
          <li>
            <Link href="/blog" className="link">
              Writing
            </Link>
          </li>
          <li>
            <a href="/rss.xml" className="link" rel="alternate" type="application/rss+xml">
              RSS
            </a>
          </li>
          <li>
            <a href={site.github} className="link" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

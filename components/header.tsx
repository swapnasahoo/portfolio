import Link from "next/link";
import { site } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="hairline">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5"
      >
        <Link href="/" className="link text-sm font-medium tracking-tight">
          {site.name}
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href="/#work" className="link text-[var(--ink-mute)] hover:text-[var(--ink)]">
              Work
            </Link>
          </li>
          <li>
            <Link href="/blog" className="link text-[var(--ink-mute)] hover:text-[var(--ink)]">
              Writing
            </Link>
          </li>
          <li>
            <a
              href={site.github}
              className="link text-[var(--ink-mute)] hover:text-[var(--ink)]"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="link text-[var(--ink-mute)] hover:text-[var(--ink)]">
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

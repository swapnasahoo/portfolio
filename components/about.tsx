import { about } from "@/lib/content";

export function About() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-2xl px-6 py-10 sm:py-12">
      <h2 id="about-heading" className="eyebrow">
        About
      </h2>
      <p className="mt-4 max-w-prose text-[var(--ink-soft)]">{about}</p>
    </section>
  );
}

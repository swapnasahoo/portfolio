import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-12 pb-6 sm:pt-16 sm:pb-8">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        {hero.title}
      </h1>
      <p className="mt-4 max-w-prose text-base text-[var(--ink-soft)] sm:text-lg">
        {hero.blurb}
      </p>
    </section>
  );
}

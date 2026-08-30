import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        {hero.title}
      </h1>
      <p className="mt-4 max-w-prose text-base text-[var(--ink-soft)] sm:text-lg">
        {hero.blurb}
      </p>
    </section>
  );
}

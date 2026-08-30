import { contributions } from "@/lib/content";

export function Contributions() {
  if (contributions.length === 0) return null;

  return (
    <section aria-labelledby="contrib-heading" className="mx-auto max-w-2xl px-6 py-10 sm:py-12">
      <h2 id="contrib-heading" className="eyebrow">
        Open source
      </h2>
      <ol className="mt-6 divide-y" style={{ borderColor: "var(--line)" }}>
        {contributions.map((c) => (
          <li key={c.project} className="py-5">
            <h3 className="text-lg font-medium tracking-tight">
              <a href={c.url} className="link" rel="noreferrer noopener">
                {c.project}
              </a>
            </h3>
            <p className="mt-2 max-w-prose text-[var(--ink-soft)]">
              {c.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

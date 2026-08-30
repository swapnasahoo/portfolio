import { projects } from "@/lib/content";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-2xl px-6 py-10 sm:py-12">
      <h2 id="work-heading" className="eyebrow">
        Selected work
      </h2>
      <ol className="mt-6 divide-y" style={{ borderColor: "var(--line)" }}>
        {projects.map((p) => (
          <li key={p.name} className="py-5">
            <article className="grid grid-cols-1 gap-1 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <div className="text-sm text-[var(--ink-mute)]">{p.year}</div>
              <div>
                <h3 className="text-lg font-medium tracking-tight">
                  <a
                    href={p.github}
                    className="link"
                    rel="noreferrer noopener"
                  >
                    {p.name}
                  </a>
                </h3>
                <p className="mt-1 max-w-prose text-[var(--ink-soft)]">
                  {p.blurb}
                </p>
                <p className="mt-3 text-sm text-[var(--ink-mute)]">
                  {p.stack.join(" · ")}
                </p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <a
                    href={p.github}
                    className="link"
                    rel="noreferrer noopener"
                  >
                    GitHub →
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      className="link"
                      rel="noreferrer noopener"
                    >
                      Live →
                    </a>
                  ) : null}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-[var(--ink-mute)]">
        <a
          href="https://github.com/swapnasahoo?tab=repositories"
          className="link"
          rel="noreferrer noopener"
        >
          All repositories on GitHub →
        </a>
      </p>
    </section>
  );
}

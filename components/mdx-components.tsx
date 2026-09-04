import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...rest }) => {
    if (typeof href === "string" && href.startsWith("/")) {
      return (
        <Link href={href} className="link" {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="link"
        target={href?.startsWith("#") ? undefined : "_blank"}
        rel="noreferrer noopener"
        {...rest}
      >
        {children}
      </a>
    );
  },
  h2: ({ children, id, ...rest }) => (
    <h2
      id={id}
      className="mt-12 mb-3 text-2xl font-semibold tracking-tight scroll-mt-24"
      {...rest}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id, ...rest }) => (
    <h3
      id={id}
      className="mt-10 mb-2 text-xl font-semibold tracking-tight scroll-mt-24"
      {...rest}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...rest }) => (
    <p className="my-4 leading-relaxed text-[var(--ink-soft)]" {...rest}>
      {children}
    </p>
  ),
  ul: ({ children, ...rest }) => (
    <ul className="my-4 ml-6 list-disc space-y-1 text-[var(--ink-soft)]" {...rest}>
      {children}
    </ul>
  ),
  ol: ({ children, ...rest }) => (
    <ol className="my-4 ml-6 list-decimal space-y-1 text-[var(--ink-soft)]" {...rest}>
      {children}
    </ol>
  ),
  li: ({ children, ...rest }) => (
    <li className="leading-relaxed" {...rest}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...rest }) => (
    <blockquote
      className="my-6 border-l-2 border-[var(--ink)] pl-4 italic text-[var(--ink-mute)]"
      {...rest}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...rest }) => (
    <code
      className="rounded bg-[var(--bg-soft)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--ink)]"
      {...rest}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...rest }) => (
    <pre
      className="my-6 overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-sm leading-relaxed"
      {...rest}
    >
      {children}
    </pre>
  ),
  hr: (props) => <hr className="my-10 border-[var(--line)]" {...props} />,
};

import { site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-2xl px-6"
    >
      <h2 id="contact-heading" className="eyebrow">
        Contact
      </h2>
      <p className="mt-4 text-lg text-[var(--ink-soft)]">
        Have something interesting in mind?{" "}
        <a href={`mailto:${site.email}`} className="link">
          Get in touch →
        </a>
      </p>
    </section>
  );
}

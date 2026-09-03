import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/content";
import "./globals.css";

const titleDefault = `${site.name} — ${site.jobTitle}`;
const description =
  `${site.name} is an Indian developer building mobile apps with React Native, Expo and Appwrite, and web apps with Next.js. View selected work and get in touch.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "Swapna Sahoo",
    "SwapnaSahoo",
    "Swapna",
    "swapnasahoo",
    "Swapna Swarup Sahoo",
    "React Native developer",
    "Expo developer",
    "Next.js developer",
    "Appwrite developer",
    "India developer",
    "TypeScript developer",
  ],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "profile",
    title: titleDefault,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    countryName: "India",
    firstName: "Swapna",
    lastName: "Sahoo",
    username: site.handle,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: titleDefault,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0e" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alternateNames,
  url: site.url,
  image: `${site.url}/og.png`,
  jobTitle: site.jobTitle,
  description,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.location.country,
  },
  homeLocation: {
    "@type": "Place",
    name: site.location.name,
  },
  knowsAbout: site.knowsAbout,
  knowsLanguage: site.knowsLanguage,
  sameAs: [site.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
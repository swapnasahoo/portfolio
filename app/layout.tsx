import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Developer`,
    template: `%s — ${site.name}`,
  },
  description:
    "Personal site of Swapna Sahoo. React Native, Expo, Appwrite and Next.js. Selected work and contact.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.name} — Developer`,
    description:
      "React Native, Expo, Appwrite and Next.js. Selected work and contact.",
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Developer`,
    description:
      "React Native, Expo, Appwrite and Next.js. Selected work and contact.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

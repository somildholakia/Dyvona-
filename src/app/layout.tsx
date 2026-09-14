import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { site, siteUrl } from "@/data/site";
import { Grain } from "@/components/ui/Grain";
import "./globals.css";

/* Margin-note face, self-hosted from @fontsource (variable 400–700). */
const caveat = localFont({
  src: "../../node_modules/@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-caveat",
  fallback: ["cursive"],
});

const title = "Dyvona — Building Technology for Problems That Matter";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Dyvona",
  },
  description,
  applicationName: "Dyvona",
  authors: [{ name: "Dyvona", url: siteUrl }],
  creator: "Dyvona",
  publisher: "Dyvona",
  keywords: [
    "Dyvona",
    "technology venture",
    "product studio",
    "LinkedIn branding",
    "development studio",
    "digital products",
    "building in public",
    "Mumbai",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dyvona",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@dyvona",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#191917" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${caveat.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:tracking-[0.12em] focus:text-paper focus:uppercase"
        >
          Skip to content
        </a>
        {children}
        <Grain />
      </body>
    </html>
  );
}

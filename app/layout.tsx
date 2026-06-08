import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});

const siteUrl = "https://basetools.website";
const ogImage = {
  url: `${siteUrl}/welcome-image.jpg`,
  width: 1200,
  height: 630,
  alt: "BaseTools — Official Digital Tools Marketplace",
};

export const metadata: Metadata = {
  title: {
    default: "BaseTools — Official Digital Tools Marketplace",
    template: "%s | BaseTools",
  },
  description:
    "BaseTools is the official digital tools marketplace and the trusted successor to BaseTools.sk. Buy premium accounts, RDP access, virtual phone numbers, and social media tools from verified sellers.",
  keywords: [
    "digital tools marketplace",
    "buy RDP access",
    "premium accounts",
    "virtual phone numbers",
    "SMS verification",
    "buy social media accounts",
    "BaseTools official",
    "BaseTools.sk alternative",
    "BaseTools website",
    "digital accounts marketplace",
    "remote desktop access",
    "phone verified accounts",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "BaseTools — Official Digital Tools Marketplace",
    description:
      "The official successor to BaseTools.sk. Buy premium accounts, RDP access, virtual phone numbers and social media tools from verified sellers — with a replacement guarantee.",
    url: siteUrl,
    siteName: "BaseTools",
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaseTools — Official Digital Tools Marketplace",
    description:
      "The official successor to BaseTools.sk. Buy premium accounts, RDP access, virtual phone numbers and social media tools from verified sellers.",
    images: [`${siteUrl}/welcome-image.jpg`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BaseTools",
  url: siteUrl,
  logo: `${siteUrl}/Black-logo.svg`,
  description:
    "BaseTools is the official digital tools marketplace and the trusted successor to BaseTools.sk, operating since 2015.",
  foundingDate: "2015",
  sameAs: [
    "https://basetools.se",
    "https://basetools.me",
    "https://basetools.st",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BaseTools",
  url: siteUrl,
  description:
    "The official digital tools marketplace. Buy premium accounts, RDP access, virtual phone numbers, and social media tools.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

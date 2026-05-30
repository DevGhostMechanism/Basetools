import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "BaseTools — Official Digital Tools Marketplace",
    template: "%s | BaseTools",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
  ],
  metadataBase: new URL("https://basetools.website"),
  openGraph: {
    title: "BaseTools — Official Digital Tools Marketplace",
    description:
      "The official successor to BaseTools.sk. Buy premium accounts, RDP, virtual phone numbers and more.",
    url: "https://basetools.website",
    siteName: "BaseTools",
    locale: "en_US",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

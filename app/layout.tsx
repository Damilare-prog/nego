import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nego - Private Member Network",
  description: "A private member network connecting discerning clients with verified, elite talent. Excellence with discretion.",
  keywords: ["premium", "talent", "exclusive", "luxury", "Nigeria", "Lagos"],
  authors: [{ name: "Nego" }],
  openGraph: {
    title: "Nego - Private Member Network",
    description: "A private member network connecting discerning clients with verified, elite talent.",
    url: "https://negoempire.live",
    siteName: "Nego",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nego - Private Member Network",
    description: "A private member network connecting discerning clients with verified, elite talent.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased bg-black min-h-screen text-white">
        {children}
      </body>
    </html>
  );
}

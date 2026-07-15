import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://iqra-khan-portfolio-self.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Iqra Fatima Khan | Full-Stack and AI/ML Developer",
    template: "%s | Iqra Fatima Khan",
  },
  description:
    "Portfolio of Iqra Fatima Khan, a full-stack and AI/ML developer building reliable web applications, backend systems, APIs and intelligent data products.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "FastAPI Developer",
    "Java Developer",
    "AI ML Engineer",
    "MCA 2026",
    "Hubli",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "Iqra Fatima Khan" }],
  creator: "Iqra Fatima Khan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Iqra Fatima Khan | Full-Stack and AI/ML Developer",
    description:
      "Full-stack systems, backend foundations, and intelligent data products built end to end.",
    type: "website",
    locale: "en_IN",
    siteName: "Iqra Fatima Khan Portfolio",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Iqra Fatima Khan developer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqra Fatima Khan | Full-Stack and AI/ML Developer",
    description: "Full-stack systems, backend foundations, and intelligent data products.",
    images: ["/og-card.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#F7F0E6",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

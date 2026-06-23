import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Strativis — Premium Enterprise Consulting",
    template: "%s | Strativis",
  },
  description:
    "Strativis is a premier enterprise consulting firm delivering transformative strategy, digital innovation, and operational excellence to Fortune 500 companies worldwide.",
  keywords: [
    "enterprise consulting",
    "strategy consulting",
    "digital transformation",
    "operational excellence",
    "management consulting",
    "business strategy",
  ],
  authors: [{ name: "Strativis" }],
  creator: "Strativis",
  metadataBase: new URL("https://strativis.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strativis.com",
    siteName: "Strativis",
    title: "Strativis — Premium Enterprise Consulting",
    description:
      "Transforming enterprises through strategic insight, digital innovation, and operational excellence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strativis — Premium Enterprise Consulting",
    description:
      "Transforming enterprises through strategic insight, digital innovation, and operational excellence.",
    creator: "@strativis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

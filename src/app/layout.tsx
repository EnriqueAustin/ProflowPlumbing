import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProFlow Plumbing — Reliable Licensed Plumbing Services",
  description:
    "ProFlow Plumbing provides 24/7 emergency plumbing, bathroom renovations, water heater installations, drain cleaning, and more. Licensed, insured, and trusted by homeowners since 2009.",
  keywords: [
    "plumbing",
    "emergency plumber",
    "plumbing services",
    "drain cleaning",
    "water heater",
    "bathroom renovation",
    "licensed plumber",
  ],
  openGraph: {
    title: "ProFlow Plumbing — Reliable Licensed Plumbing Services",
    description:
      "24/7 emergency plumbing, renovations, installations & more. Licensed & insured. Get a free quote today.",
    type: "website",
    locale: "en_US",
    siteName: "ProFlow Plumbing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

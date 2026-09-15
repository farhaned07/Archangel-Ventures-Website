import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Archangel | AI Transformation Partner in Thailand",
  description:
    "Archangel works with management teams in Thailand to find where AI can create measurable value, implement the right systems, and make them work in the business.",
  applicationName: "Archangel",
  category: "technology",
  openGraph: {
    title: "Archangel | Make AI useful at work",
    description:
      "AI transformation strategy and implementation for management teams in Thailand.",
    type: "website",
    locale: "en_TH",
    siteName: "Archangel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archangel | Make AI useful at work",
    description:
      "AI transformation strategy and implementation for management teams in Thailand.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  description:
    "Bangkok based, BOI promoted software and AI company focused on applied AI transformation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-[#f6f6f2] text-[#0d0d0c] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

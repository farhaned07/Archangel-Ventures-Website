import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Archangel | AI Transformation Partner in Thailand",
  description:
    "Archangel works with management teams in Thailand to find where AI can create measurable value, implement the right systems, and make them work in the business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-[#f6f6f2] text-[#0d0d0c] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

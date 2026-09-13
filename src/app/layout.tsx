import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Archangel | Applied AI for Business Workflows",
  description:
    "Archangel is a Thailand BOI promoted applied AI company. Give us one painful business process and we build a working AI automation in a 10-day fixed-fee sprint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white min-h-screen selection:bg-accent selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

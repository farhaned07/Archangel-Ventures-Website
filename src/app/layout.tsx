import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Archangel Company Limited | AI Transformation Thailand",
  description:
    "Archangel Company Limited is a Bangkok-based, Thailand BOI-promoted software and AI company helping management teams find, build and measure high-value AI transformation.",
  applicationName: "Archangel",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Archangel Company Limited | Make AI useful at work",
    description:
      "AI transformation strategy and implementation for management teams in Thailand.",
    type: "website",
    url: "/",
    locale: "en_TH",
    siteName: "Archangel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Archangel Company Limited — Make AI useful at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archangel Company Limited | AI Transformation Thailand",
    description:
      "Strategy and implementation for management teams that want measurable operating value from AI.",
    images: ["/opengraph-image"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: absoluteUrl("/favicon.ico"),
      email: site.email,
      slogan: "Make AI useful at work.",
      foundingDate: "2023",
      sameAs: [site.companyLinkedinUrl],
      description:
        "Archangel Company Limited is a Bangkok-based, Thailand BOI-promoted software and AI company focused on AI transformation, applied AI systems and workflow implementation.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
      },
      areaServed: {
        "@type": "Country",
        name: "Thailand",
      },
      founder: {
        "@type": "Person",
        "@id": `${site.url}/#farhan-sabbir`,
        name: "Farhan Sabbir",
        jobTitle: "Founder & Executive Director",
        url: absoluteUrl("/farhan-sabbir"),
        sameAs: [site.linkedinUrl],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        areaServed: "TH",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "AI transformation in Thailand",
        "Applied AI",
        "Business process automation",
        "AI workflow implementation",
        "Enterprise AI",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: site.legalName,
      inLanguage: "en",
      publisher: {
        "@id": `${site.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const hasGtm = Boolean(site.gtmId);

  return (
    <html lang="en">
      <head>
        {hasGtm ? (
          <Script id="google-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){dataLayer.push(arguments);};
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
              gtag('set', 'ads_data_redaction', true);
            `}
          </Script>
        ) : null}
      </head>
      <body className={`${inter.variable} min-h-screen bg-[#f6f6f2] text-[#0d0d0c] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {hasGtm ? (
          <>
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${site.gtmId}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
        <Navbar />
        {children}
        <Footer />
        {hasGtm ? <AnalyticsEvents /> : null}
        {hasGtm ? <ConsentBanner /> : null}
      </body>
    </html>
  );
}

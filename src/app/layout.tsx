import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";
import "./atelier.css";
import "./atelier-more.css";
import "./studio-system.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Archangel Company Limited | Technology & AI Implementation",
  description:
    "Archangel is a founder-led technology and AI implementation company in Bangkok. We design and build software products, intelligent workflows, websites and digital platforms.",
  applicationName: "Archangel",
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
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
    title: "Archangel | Make AI useful at work",
    description:
      "Software products, AI automation and digital platforms. Founder-led design and implementation in Bangkok.",
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
    title: "Archangel Company Limited | Technology & AI Implementation",
    description:
      "Technology design and implementation. Software products, intelligent workflows and digital experiences.",
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
      foundingDate: "2023-10-05",
      disambiguatingDescription:
        "Thailand-registered software and AI company based in Bangkok.",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Thailand DBD company registration",
        value: site.companyRegistrationNumber,
      },
      sameAs: [
        site.companyLinkedinUrl,
        site.businessRegistryUrl,
        site.googleBusinessProfileUrl,
      ],
      hasMap: site.googleBusinessProfileUrl,
      subjectOf: [
        {
          "@type": "WebPage",
          name: "ARCHANGEL CO., LTD. public company record",
          url: site.businessRegistryUrl,
        },
        {
          "@type": "WebPage",
          name: "Archangel Company Limited Google Business Profile",
          url: site.googleBusinessProfileUrl,
        },
      ],
      description:
        "Archangel Company Limited is a Bangkok-based software and AI technology studio providing software product engineering, workflow automation, AI implementation and digital platform development.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        addressLocality: "Bangkok",
        postalCode: site.postalCode,
        addressCountry: site.countryCode,
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
        sameAs: [site.linkedinUrl, site.githubUrl],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: "TH",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "AI transformation in Thailand",
        "Applied AI",
        "Business process automation",
        "AI workflow implementation",
        "Enterprise AI",
        "Healthcare AI",
        "Software product engineering",
        "Digital platform development",
        "Website design and development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology design and implementation services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI implementation and workflow automation",
              url: absoluteUrl("/ai-transformation-partner-thailand"),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software product engineering and digital platforms",
              url: absoluteUrl("/services"),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "30-day AI implementation pilot",
              url: absoluteUrl("/ai-transformation"),
            },
          },
        ],
      },
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      <body className={`${inter.variable} min-h-screen antialiased`}>
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
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        {hasGtm ? <AnalyticsEvents /> : null}
        {hasGtm ? <ConsentBanner /> : null}
      </body>
    </html>
  );
}

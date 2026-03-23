import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

import SchemaMarkup from '@/components/seo/schema-markup';

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://purewayoc.com'),

  title: {
    default: "PureWay OC | Water Filtration Orange County",
    template: "%s | PureWay OC",
  },
  description:
    "Medical-grade whole-house water filtration for Orange County homes. Free water test, same-day response, lifetime warranty. Powered by Toppen Health.",
  keywords:
    "water filtration Orange County, whole home water filter OC, water softener Orange County, PFAS water filter, free water test Orange County",
  openGraph: {
    title: "PureWay OC | Pure Water From Every Tap",
    description:
      "Whole-house water filtration designed for better drinking, cooking, and bathing. Serving Orange County families.",
    type: "website",
    locale: "en_US",
    siteName: "PureWay OC",
    url: "https://purewayoc.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureWay OC | Pure Water From Every Tap",
    description:
      "Whole-house water filtration for Orange County homes. Free water test, lifetime warranty.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <SchemaMarkup />
        {children}
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "PureWay OC",
                    "description": "PureWay OC provides professional water filtration, water softeners, and reverse osmosis systems . Clean, healthy water for your home or business.",
                    "url": "https://purewayoc.com",
                    "telephone": "4084021920",
                    "priceRange": "$$",
                    "image": "https://purewayoc.com/images/og-image.png",
                    "address": {
                              "@type": "PostalAddress",
                              "streetAddress": {},
                              "addressLocality": "",
                              "addressRegion": "",
                              "postalCode": "",
                              "addressCountry": "US"
                    },
                    "areaServed": [
                              {
                                        "@type": "City",
                                        "name": "Orange County, CA"
                              }
                    ],
                    "openingHoursSpecification": [
                              {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                                  "Monday",
                                                  "Tuesday",
                                                  "Wednesday",
                                                  "Thursday",
                                                  "Friday"
                                        ],
                                        "opens": "08:00",
                                        "closes": "18:00"
                              },
                              {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                                  "Saturday"
                                        ],
                                        "opens": "08:00",
                                        "closes": "14:00"
                              }
                    ],
                    "makesOffer": [
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Softener",
                                                  "description": "Professional Water Softener services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Whole-House Filtration",
                                                  "description": "Professional Whole-House Filtration services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Reverse Osmosis",
                                                  "description": "Professional Reverse Osmosis services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Filtration",
                                                  "description": "Professional Water Filtration services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Water Testing",
                                                  "description": "Professional Water Testing services in ."
                                        }
                              },
                              {
                                        "@type": "Offer",
                                        "itemOffered": {
                                                  "@type": "Service",
                                                  "name": "Well Water Treatment",
                                                  "description": "Professional Well Water Treatment services in ."
                                        }
                              }
                    ]
          }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "PureWay OC",
                    "url": "https://purewayoc.com",
                    "potentialAction": {
                              "@type": "SearchAction",
                              "target": "https://purewayoc.com/?s={search_term_string}",
                              "query-input": "required name=search_term_string"
                    }
          }),
          }}
        />
</body>
    </html>
  );
}

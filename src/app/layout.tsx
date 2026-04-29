import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import dynamic from 'next/dynamic';

const SchemaMarkup = dynamic(() => import('@/components/seo/schema-markup'), {
  ssr: false,
});

const MobileCallBar = dynamic(() => import('@/components/conversion/mobile-call-bar'), {
  ssr: false,
});
const ExitIntentPopup = dynamic(() => import('@/components/conversion/exit-intent-popup'), {
  ssr: false,
});
const SocialProofToast = dynamic(() => import('@/components/conversion/social-proof-toast'), {
  ssr: false,
});
const ScrollRevealCTA = dynamic(() => import('@/components/conversion/scroll-reveal-cta'), {
  ssr: false,
});
const CornerOfferPeek = dynamic(() => import('@/components/conversion/corner-offer-peek'), {
  ssr: false,
});
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
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69cedf38e39b25054744e349"
          async
        />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <SchemaMarkup />
        {children}
        <MobileCallBar />
        <ExitIntentPopup />
        <SocialProofToast />
        <ScrollRevealCTA />
        <CornerOfferPeek />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wj277wgzsm");`}
        </Script>
</body>
    </html>
  );
}

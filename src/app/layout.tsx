import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
  title: "PureWay OC | Whole-Home Water Filtration for Orange County",
  description:
    "Pure water from every tap. Medical-grade whole-house water filtration for Orange County homes. Free water test, same-day response, lifetime warranty.",
  keywords:
    "water filtration Orange County, whole home water filter OC, water softener Orange County, PFAS water filter, free water test Orange County",
  openGraph: {
    title: "PureWay OC | Pure Water From Every Tap",
    description:
      "Whole-house water filtration designed for better drinking, cooking, and bathing. Serving Orange County families.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

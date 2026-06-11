import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free In-Home Water Test | PureWay OC",
  description:
    "A PureWay OC specialist comes to your Orange County home, runs a full water test, and explains every number in plain English. No pressure, no obligation.",
  robots: { index: false, follow: true },
};

export default function LandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

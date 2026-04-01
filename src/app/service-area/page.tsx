import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AreaHero from '@/components/service-area/area-hero'
import CitiesGrid from '@/components/service-area/cities-grid'
import OCWaterInfo from '@/components/service-area/oc-water-info'
import AreaCTA from '@/components/service-area/area-cta'
import InlineCTA from '@/components/conversion/inline-cta'

export const metadata: Metadata = {
  title: 'Service Area | Orange County Water Filtration',
  description:
    'PureWay OC serves all of Orange County including Irvine, Anaheim, Newport Beach, Huntington Beach, and 25+ more cities. Same-day response, professional installation.',
  alternates: { canonical: 'https://purewayoc.com/service-area' },
  openGraph: {
    title: 'Service Area | PureWay OC Orange County',
    description: 'PureWay OC serves Irvine, Anaheim, Newport Beach, Huntington Beach, and 25+ Orange County cities. Same-day response.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/service-area',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC Service Area' }],
  },
}

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main>
        <AreaHero />
        <CitiesGrid />
        <InlineCTA
          variant="button"
          text="Check If We Service Your Area"
          trustLine="Same-day response for all Orange County cities"
        />
        <OCWaterInfo />
        <AreaCTA />
      </main>
      <Footer />
    </>
  )
}

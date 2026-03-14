import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AreaHero from '@/components/service-area/area-hero'
import CitiesGrid from '@/components/service-area/cities-grid'
import OCWaterInfo from '@/components/service-area/oc-water-info'
import AreaCTA from '@/components/service-area/area-cta'

export const metadata: Metadata = {
  title: 'Service Area | PureWay OC - Orange County Water Filtration',
  description:
    'PureWay OC serves all of Orange County including Irvine, Anaheim, Newport Beach, Huntington Beach, and more. Same-day response, professional installation.',
}

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main>
        <AreaHero />
        <CitiesGrid />
        <OCWaterInfo />
        <AreaCTA />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import WholeHouseContent from '@/components/services/pages/whole-house-content'

export const metadata: Metadata = {
  title: 'Whole-House Water Filtration | PureWay OC',
  description:
    'Medical-grade whole-house water filtration using MicronGuard Disruptor PAC technology. Removes 99.99% of contaminants including PFAS, chlorine, bacteria, and microplastics. Serving Orange County.',
  keywords:
    'whole house water filtration Orange County, MicronGuard water filter, PFAS removal, whole home water purification OC',
  alternates: { canonical: 'https://purewayoc.com/services/whole-house-filtration' },
  openGraph: {
    title: 'Whole-House Water Filtration | PureWay OC',
    description:
      'Clean water from every tap in your home. Medical-grade 3-stage filtration with zero wastewater and no maintenance for up to 3 years.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/whole-house-filtration',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Whole-House Water Filtration - PureWay OC' }],
  },
}

export default function WholeHouseFiltrationPage() {
  return (
    <>
      <Header />
      <main>
        <WholeHouseContent />
      </main>
      <Footer />
    </>
  )
}

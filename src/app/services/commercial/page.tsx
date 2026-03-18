import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import CommercialContent from '@/components/services/pages/commercial-content'

export const metadata: Metadata = {
  title: 'Commercial Water Filtration | PureWay OC',
  description:
    'Medical-grade commercial water filtration for restaurants, medical offices, dental practices, and businesses in Orange County. Same Toppen Health technology trusted by 75%+ of medical facilities.',
  keywords:
    'commercial water filtration Orange County, restaurant water filter, medical office water purification, business water treatment OC',
  alternates: { canonical: 'https://purewayoc.com/services/commercial' },
  openGraph: {
    title: 'Commercial Water Filtration | PureWay OC',
    description:
      'Medical-grade water quality for your business. Custom commercial filtration systems with zero wastewater operation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/commercial',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Commercial Water Filtration - PureWay OC' }],
  },
}

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        <CommercialContent />
      </main>
      <Footer />
    </>
  )
}

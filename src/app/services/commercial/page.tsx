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
  openGraph: {
    title: 'Commercial Water Filtration | PureWay OC',
    description:
      'Medical-grade water quality for your business. Custom commercial filtration systems with zero wastewater operation.',
    type: 'website',
    locale: 'en_US',
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

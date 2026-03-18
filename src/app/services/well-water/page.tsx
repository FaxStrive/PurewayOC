import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import WellWaterContent from '@/components/services/pages/well-water-content'

export const metadata: Metadata = {
  title: 'Well Water Filtration | PureWay OC',
  description:
    'Custom well water filtration solutions for Orange County. Comprehensive testing, iron and manganese removal, bacteria elimination, and sulfur odor treatment.',
  keywords:
    'well water filtration Orange County, well water filter, iron removal, manganese filter, sulfur smell water, bacteria well water, well water testing',
  alternates: { canonical: 'https://purewayoc.com/services/well-water' },
  openGraph: {
    title: 'Well Water Filtration | PureWay OC',
    description:
      'Custom solutions for your specific well water challenges. Comprehensive testing and tailored filtration for every well.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/well-water',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Well Water Filtration - PureWay OC' }],
  },
}

export default function WellWaterPage() {
  return (
    <>
      <Header />
      <main>
        <WellWaterContent />
      </main>
      <Footer />
    </>
  )
}

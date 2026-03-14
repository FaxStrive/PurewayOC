import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ROContent from '@/components/services/pages/ro-content'

export const metadata: Metadata = {
  title: 'Reverse Osmosis Systems | PureWay OC',
  description:
    'Under-sink reverse osmosis systems for the purest drinking water from your kitchen tap. Multi-stage filtration with remineralization. Professional installation in Orange County.',
  keywords:
    'reverse osmosis Orange County, under sink RO system, drinking water purification OC, RO water filter installation',
  openGraph: {
    title: 'Reverse Osmosis Systems | PureWay OC',
    description:
      'The purest drinking water from your kitchen tap. Multi-stage RO filtration with remineralization for balanced, great-tasting water.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ReverseOsmosisPage() {
  return (
    <>
      <Header />
      <main>
        <ROContent />
      </main>
      <Footer />
    </>
  )
}

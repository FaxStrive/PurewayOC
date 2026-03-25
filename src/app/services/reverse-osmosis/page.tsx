import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ROContent from '@/components/services/pages/ro-content'

export const metadata: Metadata = {
  title: 'Reverse Osmosis Systems | PureWay OC',
  description:
    'Under-sink reverse osmosis systems with alkaline remineralization for the purest, mineral-rich drinking water. Multi-stage filtration with elevated pH. Professional installation in Orange County.',
  keywords:
    'reverse osmosis Orange County, alkaline water Orange County, under sink RO system, drinking water purification OC, RO water filter installation, remineralized water',
  alternates: { canonical: 'https://purewayoc.com/services/reverse-osmosis' },
  openGraph: {
    title: 'Reverse Osmosis Systems | PureWay OC',
    description:
      'The purest drinking water from your kitchen tap. Multi-stage RO filtration with alkaline remineralization for mineral-rich, elevated-pH water.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/reverse-osmosis',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Reverse Osmosis Systems - PureWay OC' }],
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

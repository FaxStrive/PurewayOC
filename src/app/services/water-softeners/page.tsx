import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import SoftenerContent from '@/components/services/pages/softener-content'

export const metadata: Metadata = {
  title: 'Water Softener Installation | PureWay OC',
  description:
    'Professional water softener installation in Orange County. Eliminate hard water scale, protect your plumbing and appliances, and enjoy softer skin and spot-free dishes.',
  keywords:
    'water softener installation Orange County, hard water treatment OC, water softener system, scale removal Orange County',
  alternates: { canonical: 'https://purewayoc.com/services/water-softeners' },
  openGraph: {
    title: 'Water Softener Installation | PureWay OC',
    description:
      'Protect your home from hard water damage. Professional water softener installation for softer skin, cleaner dishes, and longer-lasting appliances.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/water-softeners',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Water Softener Installation - PureWay OC' }],
  },
}

export default function WaterSoftenersPage() {
  return (
    <>
      <Header />
      <main>
        <SoftenerContent />
      </main>
      <Footer />
    </>
  )
}

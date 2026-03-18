import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import MaintenanceContent from '@/components/services/pages/maintenance-content'

export const metadata: Metadata = {
  title: 'Maintenance & Repairs | PureWay OC',
  description:
    'Lifetime warranty, free repairs, and professional filter replacement for your PureWay water filtration system. Serving Orange County homes.',
  keywords:
    'water filter maintenance Orange County, water system repair, filter replacement service, lifetime warranty water filter, PureWay service',
  alternates: { canonical: 'https://purewayoc.com/services/maintenance' },
  openGraph: {
    title: 'Maintenance & Repairs | PureWay OC',
    description:
      'We stand behind every system we install. Lifetime warranty, free repairs, and hassle-free maintenance.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services/maintenance',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Water Filter Maintenance - PureWay OC' }],
  },
}

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <MaintenanceContent />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ServicesHero from '@/components/services/services-hero'
import ServiceDetailCards from '@/components/services/service-detail-cards'
import TechComparison from '@/components/services/tech-comparison'
import WaterQualityChecker from '@/components/services/water-quality-checker'
import ServicesCTA from '@/components/services/services-cta'
import InlineCTA from '@/components/conversion/inline-cta'

export const metadata: Metadata = {
  title: 'Water Filtration Services Orange County',
  description:
    'Whole-house filtration, reverse osmosis, water softeners, commercial systems, well water treatment, and free water testing. Medical-grade filtration for Orange County, CA.',
  keywords:
    'water filtration services Orange County, whole house water filter, reverse osmosis OC, water softener installation, well water filtration, free water test',
  alternates: { canonical: 'https://purewayoc.com/services' },
  openGraph: {
    title: 'Water Filtration Services | PureWay OC',
    description:
      'From whole-house purification to targeted solutions, we tailor every system to your home and water. Serving Orange County, CA.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/services',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC Water Filtration Services' }],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServiceDetailCards />
        <InlineCTA
          variant="banner"
          message="Not Sure Which System? Get a Free Consultation"
          text="Get Free Consultation"
          phone="(408) 402-1920"
        />
        <TechComparison />
        <WaterQualityChecker />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}

import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import TestimonialsHero from '@/components/testimonials/testimonials-hero'
import ReviewCards from '@/components/testimonials/review-cards'
import CertBadges from '@/components/testimonials/cert-badges'
import TestimonialsCTA from '@/components/testimonials/testimonials-cta'

export const metadata: Metadata = {
  title: 'Customer Reviews | 5-Star Water Filtration OC',
  description:
    'Read what Orange County families say about PureWay OC water filtration. 5-star rated on HomeAdvisor with professional installation and lifetime warranty.',
  alternates: { canonical: 'https://purewayoc.com/testimonials' },
  openGraph: {
    title: 'Customer Reviews | PureWay OC',
    description:
      '5-star rated water filtration company serving Orange County. Read real customer testimonials from Irvine, Anaheim, Newport Beach, and surrounding cities.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/testimonials',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC Customer Reviews' }],
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <TestimonialsHero />
        <ReviewCards />
        <CertBadges />
        <TestimonialsCTA />
      </main>
      <Footer />
    </>
  )
}

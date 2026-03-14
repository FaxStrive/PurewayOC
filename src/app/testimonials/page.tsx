import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import TestimonialsHero from '@/components/testimonials/testimonials-hero'
import ReviewCards from '@/components/testimonials/review-cards'
import CertBadges from '@/components/testimonials/cert-badges'
import TestimonialsCTA from '@/components/testimonials/testimonials-cta'

export const metadata: Metadata = {
  title: 'Customer Reviews | PureWay OC Testimonials',
  description:
    'Read what Orange County families say about PureWay OC water filtration. 5-star rated service with professional installation and lifetime warranty.',
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

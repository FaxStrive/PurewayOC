import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import FAQHero from '@/components/faq/faq-hero'
import FAQAccordion from '@/components/faq/faq-accordion'
import FAQCTA from '@/components/faq/faq-cta'
import InlineCTA from '@/components/conversion/inline-cta'

export const metadata: Metadata = {
  title: 'FAQ | Water Filtration Questions Answered',
  description:
    'Common questions about PureWay OC water filtration systems, installation, warranty, and Orange County water quality. Get answers before your free water test.',
  alternates: { canonical: 'https://purewayoc.com/faq' },
  openGraph: {
    title: 'FAQ | PureWay OC Water Filtration',
    description:
      'Answers to common questions about whole-house filtration, installation time, warranty coverage, and Orange County water quality.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/faq',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC FAQ' }],
  },
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQHero />
        <FAQAccordion />
        <InlineCTA
          variant="button"
          text="Talk to an Expert"
          message="Still Have Questions?"
          trustLine="Our water specialists are happy to help - no pressure"
        />
        <FAQCTA />
      </main>
      <Footer />
    </>
  )
}

import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import FAQHero from '@/components/faq/faq-hero'
import FAQAccordion from '@/components/faq/faq-accordion'
import FAQCTA from '@/components/faq/faq-cta'

export const metadata: Metadata = {
  title: 'FAQ | PureWay OC Water Filtration Questions',
  description:
    'Common questions about PureWay OC water filtration systems, installation, warranty, pricing, and Orange County water quality.',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQHero />
        <FAQAccordion />
        <FAQCTA />
      </main>
      <Footer />
    </>
  )
}

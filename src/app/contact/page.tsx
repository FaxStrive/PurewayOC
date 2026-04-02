import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ContactHero from '@/components/contact/contact-hero'
import ContactForm from '@/components/contact/contact-form'
import ContactCTAStrip from '@/components/contact/contact-cta-strip'

export const metadata: Metadata = {
  title: 'Contact Us | Free Water Test Orange County',
  description:
    'Contact PureWay OC for a free water test in Orange County, CA. Same-day response, no obligation. Call (949) 998-9443 or fill out our contact form.',
  alternates: { canonical: 'https://purewayoc.com/contact' },
  openGraph: {
    title: 'Contact PureWay OC | Free Water Test Orange County',
    description: 'Request your free water test in Orange County. Same-day response, no obligation. Call (949) 998-9443.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/contact',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Contact PureWay OC' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactCTAStrip />
      </main>
      <Footer />
    </>
  )
}

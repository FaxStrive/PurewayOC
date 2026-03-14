import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ContactHero from '@/components/contact/contact-hero'
import ContactForm from '@/components/contact/contact-form'
import ContactCTAStrip from '@/components/contact/contact-cta-strip'

export const metadata: Metadata = {
  title: 'Contact PureWay OC | Free Water Test Orange County',
  description:
    'Contact PureWay OC for a free water test in Orange County. Same-day response, no obligation. Call (408) 402-1920 or fill out our contact form.',
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

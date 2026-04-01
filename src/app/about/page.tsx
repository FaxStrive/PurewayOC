import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AboutHero from '@/components/about/about-hero'
import BarahehStory from '@/components/about/bahareh-story'
import ToppenHeritage from '@/components/about/toppen-heritage'
import CompanyValues from '@/components/about/company-values'
import AboutCTA from '@/components/about/about-cta'
import InlineCTA from '@/components/conversion/inline-cta'

export const metadata: Metadata = {
  title: 'About PureWay OC | Our Story & Mission',
  description:
    'Learn about PureWay OC and our medical-grade water filtration technology powered by Toppen Health - 40 years of proven filtration trusted in hospitals and dental offices.',
  alternates: { canonical: 'https://purewayoc.com/about' },
  openGraph: {
    title: 'About PureWay OC | Our Story & Mission',
    description:
      'Medical-grade water filtration powered by Toppen Health. Serving Orange County families with 40+ years of proven water purification technology.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/about',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'About PureWay OC' }],
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <BarahehStory />
        <ToppenHeritage />
        <InlineCTA
          variant="button"
          text="Work With Our Family"
          message="40+ Years of Water Purification Expertise"
          trustLine="Family-owned, locally operated in Orange County"
        />
        <CompanyValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}

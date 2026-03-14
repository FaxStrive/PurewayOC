import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AboutHero from '@/components/about/about-hero'
import BarahehStory from '@/components/about/bahareh-story'
import ToppenHeritage from '@/components/about/toppen-heritage'
import CompanyValues from '@/components/about/company-values'
import AboutCTA from '@/components/about/about-cta'

export const metadata: Metadata = {
  title: 'About PureWay OC | Our Story & Mission',
  description:
    'Founded by a mom who believed every family deserves clean water. Learn about PureWay OC and our medical-grade water filtration technology powered by Toppen Health.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <BarahehStory />
        <ToppenHeritage />
        <CompanyValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}

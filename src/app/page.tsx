import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import TrustBar from '@/components/sections/trust-bar'
import WaterProblems from '@/components/sections/water-problems'
import ThreeStageSystem from '@/components/sections/three-stage-system'
import ServicesOverview from '@/components/sections/services-overview'
import Stats from '@/components/sections/stats'
import Process from '@/components/sections/process'
import Testimonials from '@/components/sections/testimonials'
import FinalCTA from '@/components/sections/final-cta'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PureWay OC | Water Filtration Orange County',
  description:
    'Medical-grade whole-house water filtration for Orange County homes. Free water test, same-day response, lifetime warranty. Powered by Toppen Health Disruptor PAC.',
  alternates: { canonical: 'https://purewayoc.com/' },
  openGraph: {
    title: 'PureWay OC | Pure Water From Every Tap',
    description:
      'Whole-house water filtration for Orange County families. 99.99% contaminant removal, lifetime warranty, free water test.',
    url: 'https://purewayoc.com/',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC - Water Filtration Orange County' }],
  },
};


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WaterProblems />
        <ThreeStageSystem />
        <ServicesOverview />
        <Stats />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

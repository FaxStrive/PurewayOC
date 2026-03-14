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

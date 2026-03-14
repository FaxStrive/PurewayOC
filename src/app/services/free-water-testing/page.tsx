import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import FreeWaterTestingContent from '@/components/services/pages/free-water-testing-content'

export const metadata: Metadata = {
  title: 'Free Water Testing | PureWay OC',
  description:
    'Free water test for Orange County homes. Test for PFAS, heavy metals, bacteria, and 100+ contaminants. Get a personalized water quality report with no obligation.',
  keywords:
    'free water test Orange County, water testing OC, PFAS water test, water quality report, water contaminant test, free water analysis',
  openGraph: {
    title: 'Free Water Testing | PureWay OC',
    description:
      'Know exactly what is in your water. Free basic test and comprehensive lab analysis for Orange County homeowners.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function FreeWaterTestingPage() {
  return (
    <>
      <Header />
      <main>
        <FreeWaterTestingContent />
      </main>
      <Footer />
    </>
  )
}

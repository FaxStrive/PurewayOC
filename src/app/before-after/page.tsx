import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import GalleryHero from '@/components/before-after/gallery-hero'
import InstallationGallery from '@/components/before-after/installation-gallery'
import WaterTestResults from '@/components/before-after/water-test-results'
import GalleryCTA from '@/components/before-after/gallery-cta'

export const metadata: Metadata = {
  title: 'Gallery | PureWay OC Installations',
  description:
    'See real PureWay OC installations in Orange County homes. Professional copper work, clean results, and water quality improvements.',
}

export default function BeforeAfterPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <InstallationGallery />
        <WaterTestResults />
        <GalleryCTA />
      </main>
      <Footer />
    </>
  )
}

import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import GalleryHero from '@/components/before-after/gallery-hero'
import InstallationGallery from '@/components/before-after/installation-gallery'
import WaterTestResults from '@/components/before-after/water-test-results'
import GalleryCTA from '@/components/before-after/gallery-cta'

export const metadata: Metadata = {
  title: 'Installation Gallery | PureWay OC',
  description:
    'See real PureWay OC water filtration installations in Orange County homes. Professional copper pipe work, before-and-after water quality results.',
  alternates: { canonical: 'https://purewayoc.com/before-after' },
  openGraph: {
    title: 'Installation Gallery | PureWay OC',
    description:
      'Real installations in Orange County homes. Professional copper work and water quality results from whole-house filtration systems.',
    type: 'website',
    locale: 'en_US',
    url: 'https://purewayoc.com/before-after',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC Installation Gallery' }],
  },
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

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Filtration Huntington Beach, CA — PureWay OC',
  description: 'Medical-grade whole-house water filtration in Huntington Beach, CA. PureWay OC — Toppen Health PAC, 99.99% contaminant removal, lifetime warranty. Free water test. (949) 998-9443.',
  alternates: { canonical: 'https://purewayoc.com/water-filter-huntington-beach-ca' },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Water Filtration in Huntington Beach, CA',
    provider: { '@type': 'LocalBusiness', name: 'PureWay OC', telephone: '+19499989443', url: 'https://purewayoc.com' },
    areaServed: { '@type': 'City', name: 'Huntington Beach, CA' },
    url: 'https://purewayoc.com/water-filter-huntington-beach-ca',
    description: 'Medical-grade water filtration in Huntington Beach, CA using Toppen Health Disruptor PAC technology.',
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is the water in Huntington Beach, CA?', acceptedAnswer: { '@type': 'Answer', text: 'Huntington Beach water is supplied by the city\'s water system, which blends imported Metropolitan Water District water with local groundwater from the Orange County groundwater basin. Huntington Beach water typically tests 12-18 GPG — hard to very hard. The city uses chloramines for disinfection. A free PureWay OC water test measures your home\'s exact hardness and contaminant levels.' } },
      { '@type': 'Question', name: 'Does PureWay OC serve all of Huntington Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PureWay OC serves all of Huntington Beach including Surf City, Huntington Harbour, Bolsa Chica, Downtown HB, and all surrounding neighborhoods.' } },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PureWay OC', item: 'https://purewayoc.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://purewayoc.com/service-area' },
      { '@type': 'ListItem', position: 3, name: 'Huntington Beach, CA', item: 'https://purewayoc.com/water-filter-huntington-beach-ca' },
    ],
  },
]

export default function WaterFilterHBPage() {
  return (
    <main className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-sky-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">PureWay OC</Link><span className="mx-2">/</span>
            <Link href="/service-area" className="hover:text-white">Service Areas</Link><span className="mx-2">/</span>
            <span className="text-white">Huntington Beach, CA</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical-Grade Water Filtration in Huntington Beach, CA</h1>
          <p className="text-xl text-sky-100 max-w-2xl mb-8">Huntington Beach water tests 12-18 GPG with chloramine disinfection. PureWay OC&apos;s Toppen Health Disruptor PAC delivers 99.99% contaminant removal with a lifetime warranty. Free water test, same-day response in Surf City.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (949) 998-9443</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
            <span>✓ Medical-grade Toppen Health PAC</span><span>✓ 99.99% contaminant removal</span><span>✓ Lifetime warranty</span><span>✓ Same-day response</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Huntington Beach Water Quality</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">Huntington Beach sits on the Orange County groundwater basin and receives blended water from the Metropolitan Water District. Despite the beach city feel, HB water quality challenges are typical of coastal Orange County — 12-18 GPG hardness with chloramine disinfection. The coastal environment also means some properties can have elevated levels of specific contaminants depending on proximity to industrial areas in West HB.</p>
            <p className="text-gray-600 text-lg leading-relaxed">PureWay OC&apos;s whole-house Toppen Health PAC system addresses all of these challenges, delivering medical-grade 99.99% contaminant removal with a lifetime warranty.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Huntington Beach Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['Surf City HB', 'Huntington Harbour', 'Bolsa Chica', 'Downtown HB', 'Seacliff', 'Huntington Beach Mesa', 'Newland Center', 'East Garden Grove', 'Fountain Valley', 'Westminster', 'Garden Grove'].map((n) => (
                <span key={n} className="px-3 py-1 bg-sky-50 text-sky-700 text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-sky-900 to-blue-800 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-3">Free Water Test in Huntington Beach</h2>
            <p className="text-sky-100 mb-6">Medical-grade Toppen Health PAC · 99.99% removal · Lifetime warranty · Same-day response · Free in-home water test</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Get Free Water Test</Link>
              <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (949) 998-9443</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-gray-200" aria-label="Related pages">
            <div className="flex flex-wrap gap-3">
              <Link href="/water-filter-irvine-ca" className="text-sky-700 hover:underline text-sm">Irvine, CA</Link>
              <Link href="/water-filter-anaheim-ca" className="text-sky-700 hover:underline text-sm">Anaheim, CA</Link>
              <Link href="/service-area" className="text-sky-700 hover:underline text-sm">All OC Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Filtration Anaheim, CA — PureWay OC Medical-Grade',
  description: 'Medical-grade water filtration in Anaheim, CA. PureWay OC — Toppen Health PAC, 99.99% contaminant removal, lifetime warranty. Free water test. Call (949) 998-9443.',
  alternates: { canonical: 'https://purewayoc.com/water-filter-anaheim-ca' },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Water Filtration in Anaheim, CA',
    provider: { '@type': 'LocalBusiness', name: 'PureWay OC', telephone: '+19499989443', url: 'https://purewayoc.com' },
    areaServed: { '@type': 'City', name: 'Anaheim, CA' },
    url: 'https://purewayoc.com/water-filter-anaheim-ca',
    description: 'Medical-grade water filtration in Anaheim, CA using Toppen Health Disruptor PAC technology. 99.99% contaminant removal, lifetime warranty.',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PureWay OC', item: 'https://purewayoc.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://purewayoc.com/service-area' },
      { '@type': 'ListItem', position: 3, name: 'Anaheim, CA', item: 'https://purewayoc.com/water-filter-anaheim-ca' },
    ],
  },
]

export default function WaterFilterAnaheimPage() {
  return (
    <main className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-sky-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">PureWay OC</Link><span className="mx-2">/</span>
            <Link href="/service-area" className="hover:text-white">Service Areas</Link><span className="mx-2">/</span>
            <span className="text-white">Anaheim, CA</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical-Grade Water Filtration in Anaheim, CA</h1>
          <p className="text-xl text-sky-100 max-w-2xl mb-8">Anaheim water can test 14-20 GPG — harder than many OC cities — and uses chloramines for disinfection. PureWay OC&apos;s Toppen Health PAC delivers 99.99% contaminant removal with a lifetime warranty. Free water test, same-day response.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (949) 998-9443</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Anaheim Water Quality</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">Anaheim Public Utilities delivers a blend of imported Metropolitan Water District water and local groundwater from the Orange County basin. Anaheim water typically tests 14-20 GPG — harder than coastal OC cities — and uses chloramines for disinfection, requiring specialized filtration media. Inland Anaheim neighborhoods can have particularly high hardness levels.</p>
            <p className="text-gray-600 text-lg leading-relaxed">PureWay OC&apos;s Toppen Health Disruptor PAC handles both challenges: medical-grade catalytic carbon removes chloramines effectively while delivering 99.99% overall contaminant removal. Lifetime warranty included on all Anaheim installations.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Anaheim Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['Anaheim Hills', 'West Anaheim', 'Central Anaheim', 'North Anaheim', 'Platinum Triangle', 'Fullerton', 'Orange', 'Villa Park', 'Placentia', 'Brea'].map((n) => (
                <span key={n} className="px-3 py-1 bg-sky-50 text-sky-700 text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-sky-900 to-blue-800 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-3">Free Water Test in Anaheim</h2>
            <p className="text-sky-100 mb-6">Medical-grade Toppen Health PAC · 99.99% contaminant removal · Lifetime warranty · Same-day response</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Get Free Water Test</Link>
              <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (949) 998-9443</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-gray-200" aria-label="Related pages">
            <div className="flex flex-wrap gap-3">
              <Link href="/water-filter-irvine-ca" className="text-sky-700 hover:underline text-sm">Irvine, CA</Link>
              <Link href="/water-filter-huntington-beach-ca" className="text-sky-700 hover:underline text-sm">Huntington Beach, CA</Link>
              <Link href="/service-area" className="text-sky-700 hover:underline text-sm">All OC Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

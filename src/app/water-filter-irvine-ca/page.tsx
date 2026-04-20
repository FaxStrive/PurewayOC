import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Filtration Irvine, CA — PureWay OC Medical-Grade',
  description: 'Medical-grade whole-house water filtration in Irvine, CA. PureWay OC — Toppen Health Disruptor PAC, 99.99% contaminant removal, lifetime warranty. Free water test. (949) 998-9443.',
  alternates: { canonical: 'https://purewayoc.com/water-filter-irvine-ca' },
  openGraph: {
    title: 'Water Filtration Irvine, CA | PureWay OC',
    description: 'Medical-grade whole-house water filtration for Irvine homes. Toppen Health PAC technology. 99.99% removal. Lifetime warranty. Free water test.',
    url: 'https://purewayoc.com/water-filter-irvine-ca',
    siteName: 'PureWay OC',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'PureWay OC Water Filtration Irvine CA' }],
    type: 'website',
  },
}

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Service',
    name: 'Medical-Grade Water Filtration in Irvine, CA',
    provider: { '@type': 'LocalBusiness', name: 'PureWay OC', telephone: '+19499989443', url: 'https://purewayoc.com' },
    areaServed: { '@type': 'City', name: 'Irvine, CA' },
    url: 'https://purewayoc.com/water-filter-irvine-ca',
    description: 'Medical-grade whole-house water filtration in Irvine, CA using Toppen Health Disruptor PAC technology. 99.99% contaminant removal, lifetime warranty.',
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How hard is the water in Irvine, CA?', acceptedAnswer: { '@type': 'Answer', text: 'Irvine water, supplied by the Irvine Ranch Water District, blends imported Metropolitan Water District water (from the Colorado River) with local groundwater. Irvine water typically tests 12-18 grains per gallon (GPG) — hard to very hard. This level causes scale buildup in water heaters, dishwashers, and appliances. The Irvine Ranch Water District also uses chloramines for disinfection, which require specialized catalytic carbon filtration to remove effectively.' } },
      { '@type': 'Question', name: 'What makes PureWay OC different from other Irvine water filtration companies?', acceptedAnswer: { '@type': 'Answer', text: 'PureWay OC uses Toppen Health Disruptor PAC (Powered Activated Carbon) technology — a medical-grade filtration system delivering 99.99% contaminant removal. This level of purification is typically found only in medical and laboratory settings. Combined with a lifetime warranty and same-day response, PureWay OC offers a significantly higher standard of water treatment than conventional Irvine water filtration companies.' } },
      { '@type': 'Question', name: 'Does PureWay OC serve all of Irvine?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PureWay OC serves all Irvine neighborhoods including University Hills, Portola Springs, Woodbury, Quail Hill, Turtle Rock, Northwood, Westpark, Stonegate, and surrounding areas. We also serve nearby Tustin, Lake Forest, Mission Viejo, and throughout Orange County.' } },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PureWay OC', item: 'https://purewayoc.com' },
      { '@type': 'ListItem', position: 2, name: 'Service Area', item: 'https://purewayoc.com/service-area' },
      { '@type': 'ListItem', position: 3, name: 'Irvine, CA', item: 'https://purewayoc.com/water-filter-irvine-ca' },
    ],
  },
]

export default function WaterFilterIrvinePage() {
  return (
    <main className="min-h-screen">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-sky-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">PureWay OC</Link>
            <span className="mx-2">/</span>
            <Link href="/service-area" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Irvine, CA</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical-Grade Water Filtration in Irvine, CA</h1>
          <p className="text-xl text-sky-100 max-w-2xl mb-8">Irvine water tests 12-18 GPG and uses chloramines — a combination that standard filters can&apos;t handle effectively. PureWay OC&apos;s Toppen Health Disruptor PAC delivers 99.99% contaminant removal with a lifetime warranty. Free water test, same-day response.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all duration-300 hover:scale-105">Get Free Water Test</Link>
            <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (949) 998-9443</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-sky-200">
            <span>✓ Medical-grade Toppen Health PAC</span>
            <span>✓ 99.99% contaminant removal</span>
            <span>✓ Lifetime warranty</span>
            <span>✓ Same-day response</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Irvine Homeowners Need Better Water Filtration</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">The Irvine Ranch Water District delivers water testing 12-18 GPG — in the hard to very hard range — blended from Colorado River imports and local groundwater. Irvine also uses chloramines for disinfection, unlike some cities that use free chlorine. Chloramines are harder to remove and require specialized catalytic carbon media that most standard whole-house filters don&apos;t include.</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">PureWay OC&apos;s Toppen Health Disruptor PAC technology addresses both challenges simultaneously: the PAC media effectively removes chloramines along with 99.99% of other contaminants — chloroform, trihalomethanes, PFAS, lead, chromium-6, and total dissolved solids. The &quot;medical-grade&quot; designation reflects the same contaminant removal standards used in hospital water treatment.</p>
            <p className="text-gray-600 text-lg leading-relaxed">Every PureWay OC installation includes a free in-home water test so you know exactly what you&apos;re removing, a whole-home installation that treats every faucet and shower, and a lifetime warranty. Same-day appointments are available throughout Irvine.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '12–18 GPG', label: 'Irvine water hardness' },
              { value: '99.99%', label: 'Contaminant removal' },
              { value: 'Lifetime', label: 'System warranty' },
              { value: 'Same-day', label: 'Response time' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-sky-50 rounded-xl text-center">
                <div className="text-2xl font-bold text-sky-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Water Treatment Services in Irvine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Whole-House Filtration', desc: 'Medical-grade Toppen Health PAC system. 99.99% contaminant removal. Treats every faucet, shower, and appliance in your Irvine home.', href: '/services/whole-house-filtration' },
                { title: 'Water Softeners', desc: 'Eliminates hard water scale. Protects Irvine homes\' water heaters, dishwashers, and plumbing from 12-18 GPG mineral damage.', href: '/services/water-softeners' },
                { title: 'Reverse Osmosis', desc: 'Premium drinking water. Removes lead, arsenic, fluoride, PFAS, nitrates, and TDS from Irvine tap water.', href: '/services/reverse-osmosis' },
                { title: 'Free Water Testing', desc: 'Free in-home water test for Irvine homes. We measure hardness, chloramine levels, PFAS, TDS, and more. Same-day results.', href: '/services/free-water-testing' },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="p-5 border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-sm transition-all group">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sky-700">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Irvine Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {['University Hills', 'Portola Springs', 'Woodbury', 'Quail Hill', 'Turtle Rock', 'Northwood', 'Westpark', 'Stonegate', 'Great Park', 'Orchard Hills', 'Laguna Altura', 'Shady Canyon', 'Tustin', 'Lake Forest', 'Mission Viejo'].map((n) => (
                <span key={n} className="px-3 py-1 bg-sky-50 text-sky-700 text-sm rounded-full">{n}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'How hard is Irvine, CA water?', a: 'Irvine water from the Irvine Ranch Water District typically tests 12-18 GPG — hard to very hard. Irvine also uses chloramines for disinfection, which require specialized catalytic carbon media to remove. A free PureWay OC water test gives your home\'s exact readings.' },
                { q: 'What is Toppen Health Disruptor PAC?', a: 'Toppen Health Disruptor PAC (Powered Activated Carbon) is a medical-grade filtration technology delivering 99.99% contaminant removal. It was developed for medical and laboratory settings and is now available for residential use exclusively through companies like PureWay OC.' },
                { q: 'Does PureWay OC offer same-day service in Irvine?', a: 'Yes. PureWay OC offers same-day response for Irvine residents. Call (949) 998-9443 to check current availability. Most installations in Irvine are completed within 1-2 business days of the free water test.' },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-sky-900 to-blue-800 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-3">Free Water Test in Irvine</h2>
            <p className="text-sky-100 mb-6">Medical-grade Toppen Health PAC · 99.99% contaminant removal · Lifetime warranty · Same-day response · Free in-home water test</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Get Free Water Test</Link>
              <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (949) 998-9443</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-gray-200" aria-label="Related pages">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/water-filter-huntington-beach-ca" className="text-sky-700 hover:underline text-sm">Huntington Beach, CA</Link>
              <Link href="/water-filter-anaheim-ca" className="text-sky-700 hover:underline text-sm">Anaheim, CA</Link>
              <Link href="/service-area" className="text-sky-700 hover:underline text-sm">All OC Service Areas</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

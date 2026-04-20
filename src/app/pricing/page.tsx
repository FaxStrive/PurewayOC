import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Water Filtration Pricing — Orange County, CA',
  description: 'Transparent pricing for medical-grade water filtration, water softeners, and reverse osmosis in Orange County, CA. PureWay OC. Lifetime warranty. Free water test.',
  alternates: { canonical: 'https://purewayoc.com/pricing' },
}

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does medical-grade water filtration cost in Orange County?', acceptedAnswer: { '@type': 'Answer', text: 'PureWay OC whole-house filtration systems using Toppen Health Disruptor PAC technology typically cost $2,500-$6,000 installed in Orange County, CA. This includes medical-grade filtration with 99.99% contaminant removal and a lifetime warranty. Free in-home water test and no-obligation quote before any commitment.' } },
    { '@type': 'Question', name: 'How much does a water softener cost in Irvine or Anaheim?', acceptedAnswer: { '@type': 'Answer', text: 'Water softener installation in Orange County typically costs $1,800-$4,500 depending on system capacity and installation complexity. OC water hardness (12-20 GPG) requires properly sized systems for effective treatment. Free water test determines exact capacity needed.' } },
    { '@type': 'Question', name: 'Does PureWay OC offer financing?', acceptedAnswer: { '@type': 'Answer', text: 'Contact PureWay OC at (949) 998-9443 to ask about current financing options. Most customers prefer to start with the free in-home water test to understand the system requirements before discussing financing.' } },
  ],
}

const items = [
  { service: 'Free In-Home Water Test', range: 'Always Free', desc: 'We test your Orange County water for hardness, chloramine levels, PFAS, TDS, pH, and specific contaminants. Same-day results, no obligation.' },
  { service: 'Whole-House Filtration (Toppen PAC)', range: '$2,500 – $6,000', desc: 'Medical-grade Toppen Health Disruptor PAC system. 99.99% contaminant removal. Treats every faucet and shower. Lifetime warranty. The most comprehensive OC water treatment available.' },
  { service: 'Water Softener', range: '$1,800 – $4,500', desc: 'Eliminates hard water scale. OC water at 12-20 GPG requires properly sized systems. Protects water heaters, dishwashers, and plumbing. Free water test determines exact capacity.' },
  { service: 'Combination System', range: '$3,500 – $8,000', desc: 'Whole-house Toppen PAC filtration + water softener. Comprehensive OC water treatment: removes contaminants AND eliminates hardness scale. Most popular for OC homeowners.' },
  { service: 'Reverse Osmosis', range: '$800 – $2,000', desc: 'Under-sink RO for premium drinking water. Removes lead, arsenic, PFAS, fluoride, nitrates, and TDS from OC tap water. Medical-grade purity at the kitchen faucet.' },
  { service: 'Commercial Systems', range: 'Custom Quote', desc: 'High-capacity medical-grade filtration for OC restaurants, offices, medical facilities, and commercial properties. Contact for assessment.' },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Water Treatment Pricing</h1>
          <p className="text-xl text-sky-100 max-w-2xl mb-8">Real pricing for medical-grade water treatment in Orange County, CA. Every PureWay OC quote starts with a free in-home water test — because OC water hardness varies by city and your system needs to be sized correctly.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Get Free Water Test + Quote</Link>
            <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">Call (949) 998-9443</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.service} className="p-6 md:p-8 border border-gray-200 rounded-2xl hover:border-sky-200 hover:shadow-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{item.service}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-sky-700">{item.range}</span>
                    {!['Always Free', 'Custom Quote'].includes(item.range) && <span className="block text-sm text-gray-500 text-right">installed</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-sky-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Always Included</h2>
            <ul className="space-y-2 text-gray-700">
              {['Free in-home water test (hardness, chloramine, PFAS, TDS)', 'Written quote before any work begins', 'Medical-grade Toppen Health Disruptor PAC technology', 'Professional installation by certified technicians', 'Post-installation water quality verification', 'Lifetime system warranty', 'Same-day response across Orange County'].map((i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-sky-700 font-bold">✓</span><span>{i}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-sky-900 to-blue-800 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get Your Exact Price</h2>
            <p className="text-sky-100 mb-6 max-w-xl mx-auto">Free water test · Medical-grade Toppen PAC · 99.99% removal · Lifetime warranty · Same-day OC response</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Schedule Free Water Test</Link>
              <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (949) 998-9443</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

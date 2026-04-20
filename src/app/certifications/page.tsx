import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Certifications — WQA, NSF 42/53/55, Toppen Health | PureWay OC',
  description: 'PureWay OC holds WQA certification, NSF 42/53/55 standards, CSA certification, and uses Toppen Health Disruptor PAC medical-grade technology. Learn what each means.',
  alternates: { canonical: 'https://purewayoc.com/certifications' },
}

const certSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What certifications does PureWay OC hold?', acceptedAnswer: { '@type': 'Answer', text: 'PureWay OC systems carry WQA (Water Quality Association) certification, NSF/ANSI 42 (aesthetic effects), NSF/ANSI 53 (health effects including lead and cysts), NSF/ANSI 55 (UV treatment), and CSA (Canadian Standards Association) certification. Most importantly, PureWay OC uses Toppen Health Disruptor PAC technology — a medical-grade filtration system delivering 99.99% contaminant removal.' } },
    { '@type': 'Question', name: 'What is the Toppen Health partnership?', acceptedAnswer: { '@type': 'Answer', text: 'Toppen Health developed the Disruptor PAC (Powered Activated Carbon) technology originally for medical and laboratory water purification applications. PureWay OC is among a select group of residential water treatment companies licensed to install Toppen Health Disruptor PAC systems. This partnership allows OC homeowners to access medical-grade water filtration that delivers 99.99% contaminant removal.' } },
  ],
}

const certs = [
  { name: 'Toppen Health Disruptor PAC', what: 'Medical-Grade Technology Partner', means: 'Toppen Health developed Disruptor PAC (Powered Activated Carbon) technology for medical and laboratory water purification. At 99.99% contaminant removal, it exceeds the performance of conventional residential filtration systems. PureWay OC is licensed to install these systems in Orange County homes, bringing medical-grade water quality to residential use. This is PureWay OC\'s key differentiator in the Orange County market.' },
  { name: 'WQA Certified', what: 'Water Quality Association', means: 'WQA membership and certification verifies that PureWay OC technicians are trained in water chemistry, treatment technologies, and professional standards. WQA certification requires demonstrated knowledge of current water treatment best practices and adherence to a professional code of ethics.' },
  { name: 'NSF/ANSI 42', what: 'Aesthetic Effects Certification', means: 'NSF/ANSI 42 independently verifies that filtration systems reduce chlorine taste, odor, and other aesthetic contaminants. For Orange County water, which uses chloramines for disinfection, the relevant certification extends to chloramine reduction — a key performance metric for PureWay OC systems serving the Irvine Ranch Water District service area.' },
  { name: 'NSF/ANSI 53', what: 'Health Effects Certification', means: 'NSF/ANSI 53 is the stricter health-effects certification, verifying that a system reduces specific health-concern contaminants including lead, cysts (Giardia, Cryptosporidium), and PFAS. Given that Orange County water contains trace levels of these contaminants (documented by the EWG Tap Water Database), NSF-53 certification is particularly relevant for OC homeowners.' },
  { name: 'NSF/ANSI 55', what: 'UV Treatment Systems', means: 'NSF/ANSI 55 certifies ultraviolet disinfection systems for microorganism inactivation — Class A achieving 99.9% bacteria reduction and 99.99% virus reduction. PureWay OC systems incorporating UV disinfection carry this certification for complete microbiological protection.' },
  { name: 'CSA Certified', what: 'Canadian Standards Association', means: 'CSA certification (Canadian Standards Association) for plumbing and water treatment equipment is recognized throughout North America. CSA-certified components in PureWay OC systems confirm material safety and performance standards consistent with North American building codes.' },
  { name: 'Lifetime Warranty', what: 'Industry-Leading Guarantee', means: 'PureWay OC backs all installed systems with a lifetime warranty — the strongest coverage available in the Orange County water treatment market. The lifetime warranty covers system performance and parts for the life of the system in your home. Combined with same-day response, this represents a full-service commitment from installation through the life of the system.' },
]

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(certSchema) }} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-sky-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">PureWay OC</Link><span className="mx-2">/</span>
            <span className="text-white">Certifications</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Technology</h1>
          <p className="text-xl text-sky-100 max-w-2xl mb-6">PureWay OC uses Toppen Health Disruptor PAC medical-grade technology alongside WQA certification, NSF 42/53/55 standards, and CSA certification. Here&apos;s what each means for the water in your Orange County home.</p>
          <div className="flex flex-wrap gap-3">
            {['Toppen Health PAC', 'WQA Certified', 'NSF 42', 'NSF 53', 'NSF 55', 'CSA Certified', 'Lifetime Warranty'].map((c) => (
              <span key={c} className="px-4 py-2 bg-white/15 text-white text-sm font-bold rounded-full">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Medical-Grade Difference</h2>
          <p className="text-gray-700 text-lg leading-relaxed">Standard residential water filtration removes 85-95% of contaminants. PureWay OC&apos;s Toppen Health Disruptor PAC technology removes 99.99% — a level of purification typically found only in medical and laboratory settings. When you choose PureWay OC, you&apos;re bringing medical-grade water quality to your Orange County home.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {certs.map((cert) => (
              <div key={cert.name} className="p-6 md:p-8 border border-gray-200 rounded-2xl">
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sky-700 text-xs text-center leading-tight px-1">{cert.name.split(' ').slice(0,2).join(' ')}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{cert.name}</h2>
                    <p className="text-sm text-sky-600 font-semibold">{cert.what}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.means}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-sky-900 to-blue-800 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Medical-Grade Water for Orange County</h2>
            <p className="text-sky-100 mb-6 max-w-xl mx-auto">Toppen Health PAC · 99.99% contaminant removal · WQA certified · NSF 42/53/55 · CSA · Lifetime warranty · Free in-home water test</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-900 font-bold rounded-full hover:bg-sky-50 transition-all">Get Free Water Test</Link>
              <a href="tel:+19499989443" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 border border-white/30 transition-colors">Call (949) 998-9443</a>
            </div>
          </div>

          <nav className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="text-sky-700 hover:underline text-sm">About PureWay OC</Link>
              <Link href="/pricing" className="text-sky-700 hover:underline text-sm">Pricing</Link>
              <Link href="/services/whole-house-filtration" className="text-sky-700 hover:underline text-sm">Whole-House Filtration</Link>
              <Link href="/faq" className="text-sky-700 hover:underline text-sm">FAQ</Link>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

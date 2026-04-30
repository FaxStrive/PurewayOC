import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | PureWay OC',
  description: 'Thank you for contacting PureWay OC. We will be in touch shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads conversion event — fires when this page loads */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18054370384/ThfRCLmW4qQcENCo_6BD',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>

      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;ve received your request and will be in touch within 24 hours. In the meantime, feel free to explore our services.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--color-primary)' }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}

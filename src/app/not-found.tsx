import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | PureWay OC',
  description: 'The page you are looking for could not be found. Return to PureWay OC for water filtration services in Orange County.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(8,145,178,0.08) 0%, transparent 70%), #ffffff',
      }}
    >
      {/* Decorative water drop SVG */}
      <div className="mb-8 opacity-20">
        <svg
          width="80"
          height="100"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M40 5C40 5 5 45 5 65C5 84 21 95 40 95C59 95 75 84 75 65C75 45 40 5 40 5Z"
            fill="var(--color-primary, #0891b2)"
          />
        </svg>
      </div>

      <h1 className="font-heading text-6xl md:text-8xl font-bold text-[var(--color-secondary,#1e3a5f)] mb-4 text-center">
        404
      </h1>
      <p className="font-heading text-2xl md:text-3xl text-[var(--color-secondary,#1e3a5f)] mb-4 text-center">
        Page Not Found
      </p>
      <p className="font-body text-base md:text-lg text-[var(--color-text-secondary,#64748b)] max-w-md text-center mb-10 leading-relaxed">
        The page you are looking for does not exist or may have moved. Let us help you find what you need.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold font-body text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-primary, #0891b2)' }}
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border px-8 py-3.5 text-base font-semibold font-body transition-colors hover:bg-gray-50"
          style={{
            borderColor: 'var(--color-border, #e2e8f0)',
            color: 'var(--color-text-primary, #1e293b)',
          }}
        >
          Contact Us
        </Link>
      </div>

      <nav className="mt-12" aria-label="Helpful links">
        <p className="font-body text-sm text-[var(--color-text-muted,#94a3b8)] mb-4 text-center">
          Helpful links
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { href: '/services', label: 'Our Services' },
            { href: '/services/free-water-testing', label: 'Free Water Test' },
            { href: '/service-area', label: 'Service Area' },
            { href: '/faq', label: 'FAQ' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm text-[var(--color-primary,#0891b2)] hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

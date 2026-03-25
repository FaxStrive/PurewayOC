'use client'

import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(8,145,178,0.08) 0%, transparent 70%), #ffffff',
      }}
    >
      <h1 className="font-heading text-6xl md:text-8xl font-bold text-[var(--color-secondary,#1e3a5f)] mb-4 text-center">
        500
      </h1>
      <p className="font-heading text-2xl md:text-3xl text-[var(--color-secondary,#1e3a5f)] mb-4 text-center">
        Something Went Wrong
      </p>
      <p className="font-body text-base md:text-lg text-[var(--color-text-secondary,#64748b)] max-w-md text-center mb-10 leading-relaxed">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold font-body text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--color-primary, #0891b2)' }}
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border px-8 py-3.5 text-base font-semibold font-body transition-colors hover:bg-gray-50"
          style={{
            borderColor: 'var(--color-border, #e2e8f0)',
            color: 'var(--color-text-primary, #1e293b)',
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

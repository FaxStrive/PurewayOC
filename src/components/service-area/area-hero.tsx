'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function AreaHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 md:pb-32"
      style={{
        background: 'var(--color-surface-alt)',
      }}
    >
      {/* Directional sweep from primary at bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, var(--color-primary) 0%, transparent 40%)',
          opacity: 0.05,
        }}
      />

      {/* Organic curve at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C480,0 960,100 1440,40 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 flex items-center justify-center gap-2 text-sm font-body"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            Home
          </Link>
          <span className="text-[var(--color-text-muted)]">/</span>
          <span className="text-[var(--color-text-primary)] font-medium">
            Service Area
          </span>
        </motion.nav>

        {/* Headline with line-shadow effect */}
        <motion.h1
          className="area-hero-headline font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--color-secondary)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Serving Orange County
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-body text-[var(--color-text-secondary)] leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Same-day response. Professional installation in 3-5 days.
        </motion.p>
      </div>

      {/* Line-shadow text animation */}
      <style jsx>{`
        .area-hero-headline {
          text-shadow: 0 2px 4px rgba(30, 58, 95, 0.08);
          animation: area-shadow-shift 4s ease-in-out infinite;
        }
        @keyframes area-shadow-shift {
          0%,
          100% {
            text-shadow: 0 2px 4px rgba(30, 58, 95, 0.08);
          }
          25% {
            text-shadow: 2px 4px 8px rgba(30, 58, 95, 0.12);
          }
          50% {
            text-shadow: 0 3px 6px rgba(30, 58, 95, 0.1);
          }
          75% {
            text-shadow: -2px 4px 8px rgba(30, 58, 95, 0.12);
          }
        }
      `}</style>
    </section>
  )
}

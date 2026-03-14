'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FAQHero() {

  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 md:pb-32"
      style={{
        background:
          'linear-gradient(180deg, var(--color-cyan-pale) 0%, #ffffff 100%)',
      }}
    >
      {/* Decorative SVG wave at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[120px]"
        >
          <path
            d="M0,60 C240,110 480,20 720,70 C960,120 1200,30 1440,80 L1440,120 L0,120 Z"
            fill="var(--color-primary)"
            fillOpacity="0.05"
          />
          <path
            d="M0,80 C320,40 640,100 960,50 C1120,30 1300,70 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-cyan)"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan-pale) 0%, transparent 70%)',
          opacity: 0.6,
        }}
      />

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
            FAQ
          </span>
        </motion.nav>

        {/* Headline */}
        <motion.h1
          className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--color-secondary)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Frequently Asked Questions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-body text-[var(--color-text-secondary)] leading-relaxed"
        >
          Everything you need to know about water filtration for your Orange
          County home.
        </motion.p>
      </div>
    </section>
  )
}

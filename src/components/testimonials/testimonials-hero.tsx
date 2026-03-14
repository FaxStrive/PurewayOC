'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import Link from 'next/link'

const platforms = ['Google', 'Yelp', 'HomeAdvisor']

export default function TestimonialsHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 md:pb-32"
      style={{
        background:
          'linear-gradient(165deg, var(--color-accent-lighter) 0%, #ffffff 60%)',
      }}
    >
      {/* Decorative gold star SVG accent */}
      <div className="pointer-events-none absolute top-16 right-8 md:right-20 opacity-[0.08]">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 10L123 73H190L136 113L152 177L100 140L48 177L64 113L10 73H77L100 10Z"
            fill="var(--color-accent)"
          />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-lighter) 0%, transparent 70%)',
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
            Testimonials
          </span>
        </motion.nav>

        {/* Headline with aurora gradient */}
        <motion.h1
          className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--color-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          What Our{' '}
          <span className="text-[var(--color-accent)]">Customers Say</span>
        </motion.h1>

        {/* Star rating summary */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + i * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <Star className="h-6 w-6 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              </motion.div>
            ))}
          </div>
          <span className="font-body text-lg font-semibold text-[var(--color-text-primary)]">
            5.0
          </span>
          <span className="font-body text-[var(--color-text-secondary)]">
            on HomeAdvisor
          </span>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {platforms.map((platform, i) => (
            <motion.span
              key={platform}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 1.0 + i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-1.5 text-sm font-medium font-body text-[var(--color-text-secondary)] backdrop-blur-sm"
            >
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

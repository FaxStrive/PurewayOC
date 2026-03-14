'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background: `
          radial-gradient(ellipse 55% 50% at 10% 15%, rgba(8,145,178,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 50% 45% at 90% 85%, rgba(6,182,212,0.05) 0%, transparent 70%),
          #ffffff
        `,
      }}
    >
      {/* SVG flowing curve at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="var(--color-surface)"
          />
        </svg>
      </div>

      {/* Floating gradient orbs for depth */}
      <motion.div
        className="pointer-events-none absolute top-20 right-[15%] h-[320px] w-[320px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-24 left-[8%] h-[250px] w-[250px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(212,160,6,0.04) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-cyan-pale)] px-5 py-2 font-body text-xs tracking-wide text-[var(--color-primary-dark)] sm:text-sm">
            7 Services &mdash; Residential &amp; Commercial
          </span>
        </motion.div>

        {/* Headline with line-shadow text effect */}
        <motion.h1
          className="line-shadow-heading font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Water Filtration Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          From whole-house purification to targeted solutions, we tailor every
          system to your home and water.
        </motion.p>
      </div>

      {/* Inline styles for line-shadow text effect */}
      <style jsx>{`
        .line-shadow-heading {
          text-shadow: 0 1px 0 rgba(8, 145, 178, 0.08),
            0 2px 0 rgba(8, 145, 178, 0.06),
            0 3px 0 rgba(8, 145, 178, 0.04),
            0 4px 8px rgba(30, 58, 95, 0.06);
          animation: line-shadow-drift 4s ease-in-out infinite;
        }
        @keyframes line-shadow-drift {
          0%,
          100% {
            text-shadow: 0 1px 0 rgba(8, 145, 178, 0.08),
              0 2px 0 rgba(8, 145, 178, 0.06),
              0 3px 0 rgba(8, 145, 178, 0.04),
              0 4px 8px rgba(30, 58, 95, 0.06);
          }
          50% {
            text-shadow: 2px 3px 0 rgba(8, 145, 178, 0.1),
              3px 5px 0 rgba(8, 145, 178, 0.07),
              4px 6px 0 rgba(8, 145, 178, 0.04),
              5px 8px 12px rgba(30, 58, 95, 0.08);
          }
        }
      `}</style>
    </section>
  )
}

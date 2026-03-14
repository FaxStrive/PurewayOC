'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function AreaCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'linear-gradient(135deg, #152B47 0%, #1E3A5F 100%)',
      }}
    >
      {/* Animated background orb */}
      <motion.div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.08,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gold accent stripe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, var(--color-accent) 50%, transparent 60%)',
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Live in Orange County? Let&apos;s test your water.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Link
            href="/contact"
            className="area-cta-pulse inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)]"
          >
            Book Free Test
          </Link>
        </motion.div>
      </div>

      {/* Pulsating CTA styles */}
      <style jsx>{`
        .area-cta-pulse {
          animation: area-pulse 2.5s ease-in-out infinite;
        }
        @keyframes area-pulse {
          0%,
          100% {
            box-shadow: 0 0 12px rgba(212, 160, 6, 0.3),
              0 0 32px rgba(212, 160, 6, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(212, 160, 6, 0.5),
              0 0 48px rgba(212, 160, 6, 0.2);
          }
        }
      `}</style>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function AboutCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)',
      }}
    >
      {/* Cyan accent orb */}
      <motion.div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)',
          opacity: 0.08,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gold accent sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, var(--color-accent) 50%, transparent 60%)',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView ? { opacity: 1, y: 0 } : {}
          }
          transition={{ duration: 0.7, ease }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8"
        >
          Meet the team that cares about your water.
        </motion.h2>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn relative inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base md:text-lg font-semibold font-body text-[var(--color-secondary-dark)] overflow-hidden"
              style={{ background: 'var(--color-accent)' }}
            >
              Schedule a Free Water Test
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Shimmer button styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .shimmer-btn { position: relative; }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 55%, transparent 75%);
          background-size: 250% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
        }
        @keyframes shimmer-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      ` }} />
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function TestimonialsCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Gold accent radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent-lighter) 0%, transparent 70%)',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] leading-tight"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Join hundreds of Orange County families who trust PureWay.
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
            className="testimonials-cta-shimmer inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)]"
          >
            Get Your Free Water Test
          </Link>
        </motion.div>
      </div>

      {/* Shimmer styles */}
      <style jsx>{`
        .testimonials-cta-shimmer {
          position: relative;
          overflow: hidden;
        }
        .testimonials-cta-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 100%
          );
          animation: cta-shimmer 3s ease-in-out infinite;
        }
        @keyframes cta-shimmer {
          0% {
            left: -100%;
          }
          60%,
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  )
}

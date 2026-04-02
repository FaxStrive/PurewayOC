'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function FAQCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'var(--color-surface-alt)',
      }}
    >
      {/* Gold accent sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, transparent 40%, var(--color-accent) 55%, transparent 70%)',
          opacity: 0.06,
        }}
      />

      {/* Soft orb */}
      <motion.div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
          opacity: 0.08,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Headline with blur fade in */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-[var(--color-secondary)] mb-6"
          initial={{ opacity: 0 }}
          animate={
            inView ? { opacity: 1 } : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Still have questions? We&apos;d love to help.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Link
            href="/contact"
            className="shimmer-gold-btn relative inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)] overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.45,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Phone className="h-4 w-4 text-[var(--color-primary)]" />
          <a
            href="tel:9499989443"
            className="font-body text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            (949) 998-9443
          </a>
        </motion.div>
      </div>

      {/* Shimmer effect */}
      <style dangerouslySetInnerHTML={{ __html: `
        .shimmer-gold-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.35) 55%, transparent 75%);
          background-size: 250% 100%;
          animation: shimmer-gold 3s ease-in-out infinite;
        }
        @keyframes shimmer-gold {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      ` }} />
    </section>
  )
}

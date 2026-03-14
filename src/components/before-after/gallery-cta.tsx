'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Gallery CTA Section                                                */
/* ------------------------------------------------------------------ */
export default function GalleryCTA() {
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
      {/* ---- Animated background orb ---- */}
      <motion.div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.1,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ---- Gold accent stripe ---- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, var(--color-accent) 50%, transparent 60%)',
          opacity: 0.05,
        }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          className="font-heading mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Want to see what{' '}
          <span className="text-[var(--color-cyan-light)]">clean water</span> looks like
          in your home?
        </motion.h2>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <a
            href="/contact"
            className="cta-pulse-glow group inline-block rounded-lg bg-[var(--color-accent)] px-10 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)]"
          >
            Get Started
          </a>
        </motion.div>

        {/* Phone number */}
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
          <Phone className="h-4 w-4 text-white/70" />
          <a
            href="tel:4084021920"
            className="font-body text-sm text-white/70 transition-colors hover:text-white"
          >
            (408) 402-1920
          </a>
        </motion.div>
      </div>

      {/* ---- Inline styles for pulse glow ---- */}
      <style jsx>{`
        .cta-pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        @keyframes pulse-glow {
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

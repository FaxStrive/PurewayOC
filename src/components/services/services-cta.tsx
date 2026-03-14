'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export default function ServicesCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #152B47 100%)',
      }}
    >
      {/* Gold accent orb */}
      <motion.div
        className="pointer-events-none absolute right-[20%] top-[25%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(212,160,6,0.12) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cyan accent stripe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, var(--color-primary) 50%, transparent 60%)',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        {/* Headline */}
        <motion.h2
          className="font-heading mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Not sure which system is right for{' '}
          <span className="aurora-gradient-text">your home</span>?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mx-auto mb-8 max-w-lg font-body text-base leading-relaxed text-white/75 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          We start with a free water test and honest conversation. No pressure,
          no upselling -- just the right solution for your water.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Link
            href="/contact"
            className="cta-pulse-glow group inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)]"
          >
            Get a Free Consultation
          </Link>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="mt-5 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Phone className="h-4 w-4 text-white/70" />
          <a
            href="tel:4084021920"
            className="font-body text-sm text-white/70 transition-colors hover:text-white"
          >
            (408) 402-1920 -- Call or text anytime
          </a>
        </motion.div>
      </div>

      {/* Inline styles: aurora text + pulse glow */}
      <style jsx>{`
        .aurora-gradient-text {
          background: linear-gradient(
            90deg,
            var(--color-primary),
            var(--color-cyan),
            var(--color-cyan-light),
            var(--color-primary)
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: aurora-shift 4s ease-in-out infinite;
        }
        @keyframes aurora-shift {
          0%,
          100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
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

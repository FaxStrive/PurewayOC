'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from 'lucide-react'
import Image from 'next/image'

/* ------------------------------------------------------------------ */
/*  Final CTA section                                                  */
/* ------------------------------------------------------------------ */
export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  const stagger = {
    headline: 0,
    sub: 0.2,
    btn: 0.4,
    phone: 0.6,
  }

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
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.1,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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

      {/* ---- Content grid ---- */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: text + CTA */}
        <div>
          {/* Headline */}
          <motion.h2
            className="font-heading mb-5 text-4xl font-bold leading-tight text-white md:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: stagger.headline,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Ready for{' '}
            <span className="aurora-gradient-text">Clean Water</span> From
            Every Tap?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-body mb-8 max-w-lg text-lg leading-relaxed text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: stagger.sub,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Start with a free water test. No pressure, no commitment -- just
            honest answers about your water.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: stagger.btn,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <a
              href="/free-water-test"
              className="cta-pulse-glow group inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--color-accent-light)]"
            >
              Schedule Your Free Water Test
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="mt-5 flex items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: stagger.phone,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Phone className="h-4 w-4 text-white/70" />
            <a
              href="tel:9499989443"
              className="font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              (949) 998-9443 -- Call or text anytime
            </a>
          </motion.div>
        </div>

        {/* Right: image (lg+) */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
          animate={
            inView ? { opacity: 1, rotate: 1.5, scale: 1 } : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/family-water-glasses.jpg"
              alt="Family enjoying clean filtered water together"
              width={600}
              height={440}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 0vw"
            />
            {/* Subtle overlay tint */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 60%, #152B47 100%)',
                opacity: 0.3,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ---- Inline styles for aurora text + pulse glow ---- */}
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

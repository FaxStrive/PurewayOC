'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ------------------------------------------------------------------ */
/*  Gallery Hero Section                                                */
/* ------------------------------------------------------------------ */
export default function GalleryHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-16 md:py-32 md:pt-40"
    >
      {/* ---- Gradient mesh background ---- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 60% 50% at 15% 20%, var(--color-primary) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 85% 80%, #FEF9E7 0%, transparent 70%)',
          ]
            .map((g) => g)
            .join(', '),
          opacity: 0.06,
        }}
      />

      {/* ---- Slow-moving accent orb ---- */}
      <motion.div
        className="pointer-events-none absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan-light) 0%, transparent 70%)',
          opacity: 0.08,
        }}
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Scramble headline */}
        <motion.h1
          className="font-heading mb-6 text-5xl font-bold md:text-6xl lg:text-7xl"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          See the Difference
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body mx-auto max-w-xl text-lg md:text-xl"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Real installations in Orange County homes. Professional copper work,
          clean results.
        </motion.p>
      </div>
    </section>
  )
}

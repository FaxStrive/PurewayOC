'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Floating particle that drifts upward                               */
/* ------------------------------------------------------------------ */
function Particle({ size, left, delay, duration }: {
  size: number
  left: string
  delay: number
  duration: number
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        bottom: '-10%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(34,211,238,0) 70%)',
      }}
      animate={{ y: [0, -800], opacity: [0, 0.7, 0.7, 0] }}
      transition={{
        y: { duration, repeat: Infinity, ease: 'linear', delay },
        opacity: { duration, repeat: Infinity, ease: 'linear', delay, times: [0, 0.1, 0.85, 1] },
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Headline fade-slide animation                                     */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Hero section                                                      */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const particles = [
    { size: 6, left: '12%', delay: 0, duration: 7 },
    { size: 10, left: '30%', delay: 1.2, duration: 9 },
    { size: 5, left: '52%', delay: 0.6, duration: 8 },
    { size: 8, left: '68%', delay: 2, duration: 10 },
    { size: 7, left: '82%', delay: 0.3, duration: 7.5 },
    { size: 4, left: '92%', delay: 1.8, duration: 8.5 },
  ]

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* ---- Video background ---- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ---- Dark overlay gradient ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(21,43,71,0.65) 0%, rgba(30,58,95,0.40) 100%)',
        }}
      />

      {/* ---- Floating particles ---- */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* ---- Content ---- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="shimmer-badge inline-block rounded-full border border-white/20 bg-white/[0.07] backdrop-blur-sm px-5 py-2 text-xs sm:text-sm tracking-wide text-white/90 font-body">
            Powered by Toppen Health &mdash; 40 Years of Medical-Grade Filtration
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl"
        >
          Pure Water From Every Tap
        </motion.h1>


        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA */}
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn relative inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm sm:text-base font-semibold font-body text-[var(--color-secondary-dark)] overflow-hidden"
              style={{ background: 'var(--color-accent)' }}
            >
              Get a Free Consultation
            </motion.span>
          </Link>

          {/* Secondary CTA */}
          <Link href="#how-it-works">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="shine-btn relative inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/[0.06] backdrop-blur-sm px-8 py-3.5 text-sm sm:text-base font-semibold font-body text-white overflow-hidden"
            >
              See How It Works
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7 text-white/60" />
        </motion.div>
      </motion.div>

      {/* ---- Inline styles for shimmer / shine effects ---- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .shimmer-badge { position: relative; }
        .shimmer-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 60%, transparent 80%);
          background-size: 250% 100%;
          animation: shimmer-sweep 3.5s ease-in-out infinite;
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 55%, transparent 75%);
          background-size: 250% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
        }
        .shine-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 52%, transparent 70%);
          background-size: 250% 100%;
          animation: shimmer-sweep 4s ease-in-out infinite;
        }
        @keyframes shimmer-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      ` }} />
    </section>
  )
}

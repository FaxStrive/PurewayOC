'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function ContactCTAStrip() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-40px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-16"
      style={{
        background: 'var(--color-secondary)',
      }}
    >
      {/* Subtle orb */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 w-[400px] h-[300px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8">
        {/* Text */}
        <motion.p
          className="font-body text-lg text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Prefer to talk? Call or text us anytime.
        </motion.p>

        {/* CTA phone button */}
        <motion.a
          href="tel:9499989443"
          className="cta-strip-shine relative inline-flex items-center gap-2.5 rounded-lg border border-white/30 bg-white/[0.08] backdrop-blur-sm px-7 py-3 font-heading text-base font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Phone className="h-4 w-4" />
          <span className="relative z-10">(949) 998-9443</span>
        </motion.a>
      </div>

      {/* Shine effect matching hero pattern */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-strip-shine::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 52%, transparent 70%);
          background-size: 250% 100%;
          animation: strip-shine-sweep 4s ease-in-out infinite;
        }
        @keyframes strip-shine-sweep {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      ` }} />
    </section>
  )
}

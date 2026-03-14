'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { X as XIcon, Check } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Counter hook: counts from 0 to target on trigger                   */
/* ------------------------------------------------------------------ */
function useCounter(target: number, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  const run = useCallback(() => {
    if (hasRun.current) return
    hasRun.current = true

    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setValue(parseFloat((eased * target).toFixed(2)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])

  useEffect(() => {
    if (trigger) run()
  }, [trigger, run])

  return value
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const beforeItems = [
  'Chloramine disinfection byproducts',
  'Hard water (180+ PPM)',
  'Trace PFAS/PFOA',
  'Lead from aging pipes',
  'Microplastics',
  'Pharmaceutical residue',
]

const afterItems = [
  '99.99% contaminant removal',
  'Minerals retained for taste',
  'No chlorine smell or taste',
  'Zero PFAS/PFOA',
  'Lab-verified purity',
  'Better taste from every tap',
]

/* ------------------------------------------------------------------ */
/*  Water Test Results Section                                          */
/* ------------------------------------------------------------------ */
export default function WaterTestResults() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const count = useCounter(99.99, 2200, inView)

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      {/* ---- Radial accent bg ---- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 40%, var(--color-accent) 0%, transparent 70%)',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section title */}
        <motion.h2
          className="font-heading mb-14 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The PureWay Difference
        </motion.h2>

        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {/* ---- Before Card ---- */}
          <motion.div
            className="flex flex-col rounded-2xl border p-7 shadow-sm"
            style={{
              borderColor: 'var(--color-border)',
              background:
                'linear-gradient(135deg, #FFF5F5 0%, var(--color-surface) 100%)',
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3
              className="font-heading mb-5 text-xl font-bold"
              style={{ color: '#B91C1C' }}
            >
              Typical OC Tap Water
            </h3>
            <ul className="flex flex-1 flex-col gap-3">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="font-body flex items-start gap-2 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <XIcon
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: '#DC2626' }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ---- Center Counter ---- */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-2xl p-7"
            style={{
              background:
                'linear-gradient(180deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="font-body mb-2 text-sm font-medium uppercase tracking-wider text-white/60">
              Contaminant Removal
            </span>
            <span className="font-heading text-5xl font-bold text-white md:text-6xl">
              {count.toFixed(2)}
              <span style={{ color: 'var(--color-accent-light)' }}>%</span>
            </span>
            <span className="font-body mt-3 text-center text-sm text-white/70">
              Verified by independent lab testing
            </span>

            {/* Pulsing ring */}
            <motion.div
              className="mt-6 h-20 w-20 rounded-full border-2"
              style={{ borderColor: 'var(--color-cyan-light)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* ---- After Card ---- */}
          <motion.div
            className="flex flex-col rounded-2xl border p-7 shadow-sm"
            style={{
              borderColor: 'var(--color-border)',
              background:
                'linear-gradient(135deg, #F0FDF4 0%, var(--color-surface) 100%)',
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3
              className="font-heading mb-5 text-xl font-bold"
              style={{ color: '#15803D' }}
            >
              After PureWay Installation
            </h3>
            <ul className="flex flex-1 flex-col gap-3">
              {afterItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="font-body flex items-start gap-2 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: '#16A34A' }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Search, AlertTriangle, Droplets, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  OC Zip Code Water Quality Data                                     */
/* ------------------------------------------------------------------ */
interface WaterIssue {
  contaminant: string
  level: string
  removal: number
}

interface ZipResult {
  area: string
  issues: WaterIssue[]
}

function getWaterData(zip: number): ZipResult | null {
  if (zip >= 92602 && zip <= 92620) {
    return {
      area: 'Irvine Area',
      issues: [
        { contaminant: 'Chloramine', level: 'High', removal: 99 },
        { contaminant: 'Hardness (CaCO3)', level: 'Moderate', removal: 95 },
        { contaminant: 'PFAS (Trace)', level: 'Detected', removal: 98 },
      ],
    }
  }
  if (zip >= 92621 && zip <= 92650) {
    return {
      area: 'Anaheim / Fullerton Area',
      issues: [
        { contaminant: 'Water Hardness', level: 'Very Hard', removal: 96 },
        { contaminant: 'Chloramine', level: 'High', removal: 99 },
        { contaminant: 'Aging Pipe Residue', level: 'Moderate', removal: 97 },
      ],
    }
  }
  if (zip >= 92651 && zip <= 92680) {
    return {
      area: 'Coastal OC (HB / Newport / Costa Mesa)',
      issues: [
        { contaminant: 'Hardness', level: 'Moderate', removal: 95 },
        { contaminant: 'Chloramine', level: 'High', removal: 99 },
        {
          contaminant: 'Desalination Byproducts',
          level: 'Moderate',
          removal: 94,
        },
      ],
    }
  }
  if (zip >= 92681 && zip <= 92710) {
    return {
      area: 'South Orange County',
      issues: [
        { contaminant: 'Hardness', level: 'Moderate', removal: 95 },
        { contaminant: 'Chloramine', level: 'Moderate', removal: 99 },
        {
          contaminant: 'Agricultural Runoff Traces',
          level: 'Low-Moderate',
          removal: 97,
        },
      ],
    }
  }
  // General OC zip
  if (zip >= 90620 && zip <= 92899) {
    return {
      area: 'Orange County',
      issues: [
        { contaminant: 'Chloramine', level: 'Moderate-High', removal: 99 },
        { contaminant: 'Hardness', level: 'Moderate', removal: 95 },
        { contaminant: 'Sediment & Particulates', level: 'Low', removal: 99 },
      ],
    }
  }
  return null
}

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useAnimatedCounter(target: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) {
      setValue(0)
      return
    }
    let start = 0
    const startTime = performance.now()
    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * target)
      setValue(start)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return value
}

/* ------------------------------------------------------------------ */
/*  Letter scramble title component                                    */
/* ------------------------------------------------------------------ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const TITLE_TEXT = "What's In Your Water?"

function ScrambleTitle() {
  const [display, setDisplay] = useState(TITLE_TEXT)
  const [isScrambling, setIsScrambling] = useState(false)

  const scramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        TITLE_TEXT.split('')
          .map((char, idx) => {
            if (char === ' ' || char === "'" || char === '?') return char
            if (idx < iteration) return TITLE_TEXT[idx]
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )
      iteration += 0.5
      if (iteration >= TITLE_TEXT.length) {
        clearInterval(interval)
        setDisplay(TITLE_TEXT)
        setIsScrambling(false)
      }
    }, 35)
  }, [isScrambling])

  return (
    <h2
      className="font-heading text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl cursor-default"
      onMouseEnter={scramble}
    >
      {display}
    </h2>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function WaterQualityChecker() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [zipCode, setZipCode] = useState('')
  const [result, setResult] = useState<ZipResult | null>(null)
  const [error, setError] = useState('')
  const [showResults, setShowResults] = useState(false)

  const avgRemoval = result
    ? Math.round(
        result.issues.reduce((sum, i) => sum + i.removal, 0) /
          result.issues.length
      )
    : 0

  const animatedRemoval = useAnimatedCounter(avgRemoval, 1.2, showResults)

  const handleCheck = () => {
    setError('')
    setShowResults(false)
    setResult(null)

    const zip = parseInt(zipCode, 10)
    if (isNaN(zip) || zipCode.length !== 5) {
      setError('Please enter a valid 5-digit zip code.')
      return
    }

    const data = getWaterData(zip)
    if (!data) {
      setError(
        'We currently serve Orange County. Enter an OC zip code (e.g. 92602).'
      )
      return
    }

    setResult(data)
    setTimeout(() => setShowResults(true), 100)
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 50% 40%, var(--color-cyan-pale) 0%, transparent 70%),
            #ffffff
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <ScrambleTitle />
          <p className="mx-auto mt-3 max-w-lg font-body text-[var(--color-text-secondary)]">
            Enter your zip code to see common water quality issues in your area
            and how our systems address them.
          </p>
        </motion.div>

        {/* Tool card */}
        <motion.div
          className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-lg sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Input row */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <Input
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder="Enter OC zip code (e.g. 92602)"
                value={zipCode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '')
                  setZipCode(val)
                  setError('')
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCheck()
                }}
                className="h-12 pl-10 font-body text-base"
              />
            </div>
            <button
              onClick={handleCheck}
              className="shimmer-gold-btn relative flex-shrink-0 overflow-hidden rounded-md bg-[var(--color-accent)] px-6 font-heading text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Check Water</span>
            </button>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                className="mt-3 flex items-center gap-2 font-body text-sm text-red-500"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <AlertTriangle className="h-4 w-4" />
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Results panel */}
          <AnimatePresence>
            {showResults && result && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.3, delay: 0.15 },
                }}
                className="overflow-hidden"
              >
                <div className="mt-6 border-t border-[var(--color-border)] pt-6">
                  {/* Area + removal stat */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="font-body text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                        Your area
                      </p>
                      <p className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                        {result.area}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                        Avg. removal
                      </p>
                      <p className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                        {animatedRemoval}%
                      </p>
                    </div>
                  </div>

                  {/* Contaminant list */}
                  <div className="space-y-3">
                    {result.issues.map((issue, i) => (
                      <motion.div
                        key={issue.contaminant}
                        className="flex items-center justify-between rounded-lg bg-[var(--color-surface)] p-3"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.12,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Droplets className="h-4 w-4 text-[var(--color-primary)]" />
                          <div>
                            <p className="font-body text-sm font-medium text-[var(--color-text-primary)]">
                              {issue.contaminant}
                            </p>
                            <p className="font-body text-xs text-[var(--color-text-muted)]">
                              Level: {issue.level}
                            </p>
                          </div>
                        </div>
                        <span className="font-heading text-sm font-bold text-emerald-600">
                          {issue.removal}% removed
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA after results */}
                  <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-2 font-heading text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-light)]"
                    >
                      Get a free in-home water test
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Shimmer button style */}
      <style jsx>{`
        .shimmer-gold-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.3) 45%,
            rgba(255, 255, 255, 0.45) 50%,
            rgba(255, 255, 255, 0.3) 55%,
            transparent 75%
          );
          background-size: 250% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
        }
        @keyframes shimmer-sweep {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  )
}

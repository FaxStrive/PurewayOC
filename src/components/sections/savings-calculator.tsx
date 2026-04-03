'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, DollarSign, Droplets, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface CalculatorResults {
  monthlySavings: number
  annualSavings: number
}

const calculateSavings = (householdSize: number, bathrooms: number): CalculatorResults => {
  const bottledWaterSavings = householdSize * 25
  const applianceSavings = bathrooms * 15
  const soapSavings = householdSize * 8
  const monthlySavings = bottledWaterSavings + applianceSavings + soapSavings
  const annualSavings = monthlySavings * 12

  return { monthlySavings, annualSavings }
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function SavingsCalculator() {
  const [householdSize, setHouseholdSize] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<CalculatorResults | null>(null)

  const handleCalculate = () => {
    const calculated = calculateSavings(householdSize, bathrooms)
    setResults(calculated)
    setShowResults(true)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 50% 40%, rgba(8,145,178,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 70%, rgba(212,160,6,0.04) 0%, transparent 60%),
            #ffffff
          `,
        }}
      />

      {/* Floating accent */}
      <motion.div
        className="pointer-events-none absolute left-[5%] top-[20%] h-[200px] w-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
          filter: 'blur(35px)',
        }}
        animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 font-body text-sm font-semibold uppercase tracking-widest text-emerald-700">
            <DollarSign className="h-4 w-4" />
            <span>Savings Calculator</span>
          </span>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl md:text-5xl">
            How Much Could You{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-[var(--color-primary)] bg-clip-text text-transparent">
              Save?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-[var(--color-text-secondary)]">
            Stop spending hundreds on bottled water every year. See how much a whole-house filtration system could save your family.
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/80 shadow-xl backdrop-blur-sm"
        >
          <div className="p-6 sm:p-8">
            {/* Household Size */}
            <div className="mb-6">
              <label className="mb-3 block font-body text-sm font-medium text-[var(--color-text-primary)]">
                Household Size
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((size) => (
                  <button
                    key={size}
                    onClick={() => { setHouseholdSize(size); setShowResults(false) }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl font-heading text-sm font-semibold transition-all duration-200 sm:h-12 sm:w-12 ${
                      householdSize === size
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
                <span className="ml-2 flex items-center font-body text-sm text-[var(--color-text-muted)]">
                  {householdSize === 1 ? 'person' : 'people'}
                </span>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="mb-8">
              <label className="mb-3 block font-body text-sm font-medium text-[var(--color-text-primary)]">
                Bathrooms
              </label>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((count) => (
                  <button
                    key={count}
                    onClick={() => { setBathrooms(count); setShowResults(false) }}
                    className={`flex h-11 items-center justify-center rounded-xl px-4 font-heading text-sm font-semibold transition-all duration-200 sm:h-12 ${
                      bathrooms === count
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {count}{count === 5 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <motion.button
              onClick={handleCalculate}
              className="group relative w-full overflow-hidden rounded-xl bg-[var(--color-accent)] py-4 font-heading text-base font-bold text-white transition-all duration-300 hover:brightness-110"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                Calculate My Savings
              </span>
            </motion.button>

            {/* Results */}
            <AnimatePresence>
              {showResults && results && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                    {/* Monthly Savings - hero stat */}
                    <div className="mb-6 text-center">
                      <p className="mb-1 font-body text-sm text-[var(--color-text-secondary)]">Estimated Monthly Savings</p>
                      <motion.p
                        className="font-heading text-5xl font-bold text-[var(--color-primary)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        ${results.monthlySavings}
                      </motion.p>
                    </div>

                    {/* Annual Savings */}
                    <div className="mb-6 text-center">
                      <p className="mb-1 font-body text-sm text-[var(--color-text-secondary)]">Annual Savings</p>
                      <motion.p
                        className="font-heading text-2xl font-semibold text-[var(--color-text-primary)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        ${results.annualSavings.toLocaleString()}/year
                      </motion.p>
                    </div>

                    {/* Savings breakdown */}
                    <div className="mb-6 grid gap-3 sm:grid-cols-3">
                      {[
                        { label: 'No More Bottled Water', value: `$${householdSize * 25}/mo`, icon: Droplets },
                        { label: 'Extended Appliance Life', value: `$${bathrooms * 15}/mo`, icon: Sparkles },
                        { label: 'Reduced Soap & Detergent', value: `$${householdSize * 8}/mo`, icon: DollarSign },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          className="rounded-lg border border-[var(--color-border)] bg-white p-3 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1, ease }}
                        >
                          <item.icon className="mx-auto mb-1 h-4 w-4 text-[var(--color-primary)]" />
                          <p className="font-body text-xs text-[var(--color-text-muted)]">{item.label}</p>
                          <p className="font-heading text-sm font-bold text-[var(--color-text-primary)]">{item.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="/contact"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                        >
                          <span>Schedule Free Water Test</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                      <a
                        href="tel:9499989443"
                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call (949) 998-9443</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

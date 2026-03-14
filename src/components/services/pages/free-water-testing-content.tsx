'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronRight,
  Calendar,
  TestTube,
  FileText,
  Check,
  Star,
} from 'lucide-react'

const contaminants = [
  { name: 'PFAS / PFOA', risk: 'Linked to cancer, thyroid disease, and immune system damage' },
  { name: 'Lead', risk: 'Damages brain development in children, kidney problems in adults' },
  { name: 'Chlorine', risk: 'Dries skin and hair, linked to bladder cancer with long-term exposure' },
  { name: 'Bacteria', risk: 'E. coli and coliform cause gastrointestinal illness and infection' },
  { name: 'Arsenic', risk: 'Known carcinogen affecting skin, lungs, and bladder' },
  { name: 'Pharmaceuticals', risk: 'Trace medications in water supply with unknown long-term effects' },
  { name: 'Microplastics', risk: 'Emerging concern linked to inflammation and cellular damage' },
  { name: 'VOCs', risk: 'Volatile organic compounds from industrial runoff causing organ damage' },
  { name: 'Chloramine', risk: 'Harder to remove than chlorine, irritates skin and respiratory system' },
]

const basicFeatures = [
  'Tests for key water quality indicators',
  'Same-day results on site',
  'Identifies major contamination issues',
  'Perfect starting point for any home',
]

const comprehensiveFeatures = [
  'Tests for 100+ contaminants',
  'Certified independent lab results',
  'Detailed PDF water quality report',
  'Full PFAS / forever chemicals panel',
  'Heavy metals panel (lead, arsenic, etc.)',
]

const steps = [
  {
    icon: Calendar,
    title: 'Book',
    description: 'Schedule your free visit online or by phone',
  },
  {
    icon: TestTube,
    title: 'Test',
    description: 'Our specialist tests your water on-site',
  },
  {
    icon: FileText,
    title: 'Results',
    description: 'Get your personalized water quality report',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function FreeWaterTestingContent() {
  const heroRef = useRef<HTMLElement>(null)
  const contaminantsRef = useRef<HTMLElement>(null)
  const optionsRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const contaminantsInView = useInView(contaminantsRef, { once: true, margin: '-60px' })
  const optionsInView = useInView(optionsRef, { once: true, margin: '-60px' })
  const stepsInView = useInView(stepsRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero Section - White-to-cyan gradient */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(175deg, #ffffff 0%, #f4fbfc 40%, rgba(6,182,212,0.07) 100%),
            radial-gradient(ellipse 55% 50% at 80% 30%, rgba(6,182,212,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 45% 45% at 15% 70%, rgba(8,145,178,0.05) 0%, transparent 70%)
          `,
        }}
      >
        {/* Bottom curve */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C480 80 960 0 1440 40V80H0V40Z"
              fill="var(--color-surface)"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-2 font-body text-sm text-[var(--color-text-muted)]"
          >
            <Link href="/" className="transition-colors hover:text-[var(--color-primary)]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#services" className="transition-colors hover:text-[var(--color-primary)]">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[var(--color-primary)]">Free Water Testing</span>
          </motion.nav>

          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            Free Water Testing
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            Know exactly what&apos;s in your water. Our free test is the first step
            toward water you can trust.
          </motion.p>
        </div>
      </section>

      {/* What We Test For - 3x3 grid of contaminant cards */}
      <section
        ref={contaminantsRef}
        className="relative py-20 md:py-28"
        style={{ background: 'var(--color-surface)' }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.h2
            className="mb-4 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={contaminantsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            What We Test For
          </motion.h2>
          <motion.p
            className="mx-auto mb-14 max-w-xl text-center font-body text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={contaminantsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Orange County water can contain a range of contaminants. Here is what we
            screen for.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contaminants.map((item, i) => (
              <motion.div
                key={item.name}
                className="rounded-xl border border-red-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={contaminantsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.06, ease }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                    {item.name}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.risk}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Test Options - Side-by-side comparison */}
      <section
        ref={optionsRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 30% 30%, rgba(6,182,212,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 70% 70%, rgba(8,145,178,0.04) 0%, transparent 70%),
            #ffffff
          `,
        }}
      >
        <div className="mx-auto max-w-5xl px-5">
          <motion.h2
            className="mb-4 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Two Testing Options
          </motion.h2>
          <motion.p
            className="mx-auto mb-14 max-w-xl text-center font-body text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Start with our free basic test or go straight to the full picture.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Basic Test Card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm md:p-10"
              initial={{ opacity: 0, y: 24 }}
              animate={optionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {/* Free badge */}
              <div className="mb-6 inline-block rounded-full bg-green-50 px-4 py-1.5 font-body text-sm font-semibold text-green-700">
                Free
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)]">
                Basic Test
              </h3>
              <p className="mt-3 font-body text-[var(--color-text-secondary)]">
                A quick on-site analysis that reveals the most important indicators
                of your water quality.
              </p>
              <ul className="mt-6 space-y-3">
                {basicFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-[var(--color-text-primary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Comprehensive Test Card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border-2 border-[var(--color-primary)] bg-white p-8 shadow-md md:p-10"
              initial={{ opacity: 0, y: 24 }}
              animate={optionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              {/* Top accent bar */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-cyan-light))' }}
              />

              {/* Recommended badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-cyan-pale)] px-4 py-1.5 font-body text-sm font-semibold text-[var(--color-primary)]">
                <Star className="h-3.5 w-3.5" />
                Recommended
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)]">
                Comprehensive Lab Analysis
              </h3>
              <p className="mt-3 font-body text-[var(--color-text-secondary)]">
                A certified independent lab tests your water for 100+ contaminants,
                delivering a detailed PDF report.
              </p>
              <ul className="mt-6 space-y-3">
                {comprehensiveFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-cyan-pale)]">
                      <Check className="h-3 w-3 text-[var(--color-primary)]" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-[var(--color-text-primary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 steps in a row */}
      <section
        ref={stepsRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)
          `,
        }}
      >
        <div className="mx-auto max-w-5xl px-5">
          <motion.h2
            className="mb-14 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            How It Works
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease }}
              >
                {/* Step number + icon */}
                <div className="relative mx-auto mb-5">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-cyan-pale)]">
                    <step.icon className="h-9 w-9 text-[var(--color-primary)]" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] font-heading text-xs font-bold text-white">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)`,
        }}
      >
        <motion.div
          className="pointer-events-none absolute top-[-30px] right-[8%] h-[350px] w-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Book Your Free Water Test
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl font-body text-base text-cyan-100 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            Find out what&apos;s really in your water. No cost, no pressure - just the
            facts you need to make an informed decision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-4 font-body text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-accent-dark)] hover:shadow-xl sm:text-lg"
            >
              Book Your Free Water Test
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShowerHead,
  GlassWater,
  Sparkles,
  Timer,
  Flame,
  Shirt,
  Check,
  ChevronRight,
} from 'lucide-react'

const problems = [
  {
    icon: ShowerHead,
    title: 'Scale Buildup on Fixtures',
    description:
      'White, crusty deposits on faucets, showerheads, and around drains that are nearly impossible to remove.',
  },
  {
    icon: GlassWater,
    title: 'Spots on Dishes & Glasses',
    description:
      'Cloudy film and water spots on freshly washed dishes, glasses, and silverware.',
  },
  {
    icon: Sparkles,
    title: 'Dry, Itchy Skin & Hair',
    description:
      'Hard water strips natural oils, leaving skin feeling tight and hair looking dull and brittle.',
  },
  {
    icon: Timer,
    title: 'Shortened Appliance Lifespan',
    description:
      'Scale clogs pipes and damages water heaters, dishwashers, and washing machines from the inside out.',
  },
  {
    icon: Flame,
    title: 'Higher Energy Bills',
    description:
      'Scale insulates heating elements in your water heater, forcing it to work harder and use more energy.',
  },
  {
    icon: Shirt,
    title: 'Stiff, Faded Laundry',
    description:
      'Hard water minerals trap soap in fabric fibers, making clothes stiff, scratchy, and faded.',
  },
]

const solutionBenefits = [
  'Prevents scale buildup without salt or chemicals',
  'Retains healthy minerals traditional softeners strip out',
  'No wastewater, no electricity, no backwashing',
  'Protects all water-using appliances from scale damage',
  'Softer skin and silkier hair after every shower',
  'Zero maintenance until filter change (every 3 years)',
]

const stats = [
  { value: '85%', label: 'of OC homes have hard water' },
  { value: '2-3x', label: 'longer appliance life with soft water' },
  { value: '$0', label: 'maintenance cost with PureWay systems' },
]

export default function SoftenerContent() {
  const heroRef = useRef<HTMLElement>(null)
  const problemsRef = useRef<HTMLElement>(null)
  const solutionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const problemsInView = useInView(problemsRef, { once: true, margin: '-60px' })
  const solutionInView = useInView(solutionRef, { once: true, margin: '-60px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero Section - Warm amber/gold tones */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(170deg, #FFFBF0 0%, #ffffff 45%, rgba(212,160,6,0.04) 100%),
            radial-gradient(ellipse 55% 50% at 20% 30%, rgba(212,160,6,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 45% 40% at 80% 70%, rgba(245,200,66,0.05) 0%, transparent 70%)
          `,
        }}
      >
        {/* Decorative warm sweep */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(280deg, transparent 0%, transparent 60%, rgba(212,160,6,0.03) 80%, transparent 100%)',
          }}
        />

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
            <span className="text-[var(--color-accent)]">Water Softeners</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Water Softener Installation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Orange County has some of the hardest water in California. Protect your home, your
            appliances, and your family with professional water softener installation.
          </motion.p>
        </div>
      </section>

      {/* Hard Water Problems Grid */}
      <section
        ref={problemsRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 30% 20%, rgba(212,160,6,0.03) 0%, transparent 70%),
            var(--color-surface)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              Signs You Have Hard Water
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-[var(--color-text-secondary)]">
              If any of these sound familiar, hard water is likely costing you money and comfort
              every day.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                className="group rounded-2xl border border-orange-100 p-7 transition-shadow hover:shadow-md"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,237,213,0.4) 0%, rgba(254,243,199,0.25) 100%)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 transition-colors group-hover:bg-orange-200">
                  <problem.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                  {problem.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Two Column */}
      <section
        ref={solutionRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            linear-gradient(180deg, #ffffff 0%, var(--color-surface) 50%, #ffffff 100%),
            radial-gradient(ellipse 50% 45% at 70% 50%, rgba(8,145,178,0.04) 0%, transparent 70%)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.h2
            className="mb-14 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            How We Fix It
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Description + Benefits */}
            <div>
              <motion.p
                className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Our PureWay 3-Stage System uses patented anti-scale technology to prevent
                calcium and magnesium buildup without salt, chemicals, or wastewater. Unlike
                traditional softeners that strip minerals and discharge brine, our system
                conditions your water while keeping healthy minerals intact. The result is
                scale-free water from every faucet, with zero maintenance.
              </motion.p>

              <ul className="mt-8 space-y-4">
                {solutionBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[var(--color-text-primary)]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: PureWay System Image */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-surface-alt)]"
              initial={{ opacity: 0, y: 24 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/system-combined.webp"
                alt="PureWay 3-Stage System - salt-free alternative to water softeners"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section
        ref={statsRef}
        className="relative py-16 md:py-24"
        style={{
          background: `
            linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)
          `,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 60% at 80% 30%, rgba(6,182,212,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-5">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="font-heading text-5xl font-bold text-[var(--color-accent)] md:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-3 font-body text-base text-cyan-100">{stat.label}</p>
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
          background: `
            linear-gradient(160deg, rgba(212,160,6,0.08) 0%, #ffffff 40%, var(--color-surface) 100%)
          `,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 70% 40%, rgba(212,160,6,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Schedule Your Free Water Test
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl font-body text-base text-[var(--color-text-secondary)] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Find out exactly how hard your water is and get a custom solution designed for your
            home. Our water test is free, fast, and eye-opening.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-4 font-body text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-accent-dark)] hover:shadow-xl sm:text-lg"
            >
              Schedule Your Free Water Test
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

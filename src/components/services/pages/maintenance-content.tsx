'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Shield, Wrench, Clock, X } from 'lucide-react'

const warrantyCards = [
  {
    icon: Shield,
    title: 'Lifetime Housing Warranty',
    description: 'Your system housing is covered for life. Period.',
    accent: 'rgba(8,145,178,0.08)',
  },
  {
    icon: Wrench,
    title: '100% Free Repairs',
    description: 'Something breaks? We fix it. No charge. Ever.',
    accent: 'rgba(212,160,6,0.08)',
  },
  {
    icon: Clock,
    title: '3-Year Filter Life',
    description: 'Go up to 3 years between filter changes. We handle the swap.',
    accent: 'rgba(34,120,80,0.08)',
  },
]

const dontHaveToDo = [
  'Buy salt bags monthly',
  'Schedule backwashing cycles',
  'Monitor electricity usage',
  'Call for service contracts',
  'Worry about system failures',
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function MaintenanceContent() {
  const heroRef = useRef<HTMLElement>(null)
  const warrantyRef = useRef<HTMLElement>(null)
  const dontRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const warrantyInView = useInView(warrantyRef, { once: true, margin: '-60px' })
  const dontInView = useInView(dontRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero Section - Calm light teal gradient */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(160deg, #f0fafb 0%, #ffffff 45%, rgba(8,145,178,0.05) 100%),
            radial-gradient(ellipse 55% 45% at 75% 25%, rgba(8,145,178,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 25% 75%, rgba(212,160,6,0.04) 0%, transparent 70%)
          `,
        }}
      >
        {/* Diagonal accent stripe */}
        <div
          className="pointer-events-none absolute -right-20 top-0 h-full w-[300px] -skew-x-12 opacity-[0.03]"
          style={{ background: 'var(--color-primary)' }}
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
            <span className="text-[var(--color-primary)]">Maintenance & Repairs</span>
          </motion.nav>

          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            Maintenance & Repairs
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            We stand behind every system we install. Lifetime warranty, free repairs,
            and zero-hassle maintenance - so you never worry about your water again.
          </motion.p>
        </div>
      </section>

      {/* Warranty Highlights - 3 large feature cards */}
      <section
        ref={warrantyRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.h2
            className="mb-4 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={warrantyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            What Your Warranty Covers
          </motion.h2>
          <motion.p
            className="mx-auto mb-14 max-w-xl text-center font-body text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={warrantyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Every PureWay system comes with industry-leading coverage. No fine print, no
            surprises.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {warrantyCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-10 text-center shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                animate={warrantyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
              >
                {/* Background accent */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${card.accent}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-cyan-pale)]">
                    <card.icon className="h-10 w-10 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)] md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You DON'T Have To Do */}
      <section
        ref={dontRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(8,145,178,0.04) 0%, transparent 60%),
            #ffffff
          `,
        }}
      >
        <div className="mx-auto max-w-3xl px-5">
          <motion.h2
            className="mb-4 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={dontInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            What You Don&apos;t Have To Do
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-lg text-center font-body text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={dontInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Traditional water systems come with a laundry list of chores. With PureWay,
            you can cross them all off.
          </motion.p>

          <div className="space-y-5">
            {dontHaveToDo.map((task, i) => (
              <motion.div
                key={task}
                className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-white px-6 py-5 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={dontInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <X className="h-4 w-4 text-red-400" strokeWidth={3} />
                </div>
                <span className="font-body text-lg text-[var(--color-text-muted)] line-through decoration-red-300 decoration-2">
                  {task}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-10 text-center font-heading text-xl font-semibold text-[var(--color-primary)] md:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={dontInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            With PureWay, you just enjoy clean water.
          </motion.p>
        </div>
      </section>

      {/* Simple CTA */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background: `
            linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)
          `,
        }}
      >
        <motion.div
          className="pointer-events-none absolute bottom-[-40px] left-[5%] h-[300px] w-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Schedule a Service Call
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl font-body text-base text-cyan-100 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            Whether it&apos;s routine maintenance or an unexpected issue, our team is
            here to keep your water flowing pure.
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
              Schedule a Service Call
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

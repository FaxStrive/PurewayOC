'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import InlineCTA from '@/components/conversion/inline-cta'
import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Scissors,
  Building,
  Key,
  ChevronRight,
  Gauge,
  Zap,
  ShieldCheck,
} from 'lucide-react'

const industries = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food Service',
    description:
      'Meet health codes with filtered water for cooking, ice, and beverages. Protect commercial kitchen equipment from scale damage.',
    size: 'large' as const,
  },
  {
    icon: Stethoscope,
    title: 'Medical & Dental Offices',
    description:
      'The same technology already trusted by 75%+ of dental facilities. Medical-grade purity for patient care and equipment longevity.',
    size: 'large' as const,
  },
  {
    icon: Dumbbell,
    title: 'Gyms & Fitness Centers',
    description:
      'Clean hydration stations your members will notice. Better water drives member satisfaction and retention.',
    size: 'small' as const,
  },
  {
    icon: Scissors,
    title: 'Salons & Spas',
    description:
      'Soft, pure water for better hair and skin treatments. Hard water undermines every service you offer.',
    size: 'small' as const,
  },
  {
    icon: Building,
    title: 'Office Buildings',
    description:
      'Better water means healthier, more productive employees. Eliminate bottled water delivery costs.',
    size: 'small' as const,
  },
  {
    icon: Key,
    title: 'Property Management',
    description:
      'Add value to units with building-wide filtration. Reduce maintenance calls from scale-related plumbing issues.',
    size: 'small' as const,
  },
]

const featureBars = [
  {
    icon: Gauge,
    title: 'Scaled for Demand',
    description:
      'Systems sized and engineered for high-volume commercial use. Whether you serve 50 or 5,000 people daily, we match the system to your flow rate.',
  },
  {
    icon: Zap,
    title: 'Zero Downtime',
    description:
      'No backwashing cycles, no power requirements, no salt to refill. Your water stays clean and flowing even during power outages.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Ready',
    description:
      'Meets health department standards for food service and medical facilities. We provide documentation for inspections and certifications.',
  },
]

export default function CommercialContent() {
  const heroRef = useRef<HTMLElement>(null)
  const industriesRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const industriesInView = useInView(industriesRef, { once: true, margin: '-60px' })
  const featuresInView = useInView(featuresRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero Section - Professional dark navy */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(155deg, var(--color-secondary) 0%, var(--color-secondary-dark) 60%, #0f1f33 100%)
          `,
        }}
      >
        {/* Subtle light sweep */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 75% 30%, rgba(8,145,178,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-2 font-body text-sm text-cyan-200/70"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#services" className="transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[var(--color-cyan-light)]">Commercial</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Commercial Water Filtration
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-cyan-100/80 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Medical-grade water purification scaled for your business. The same Toppen Health
            technology trusted by healthcare facilities, now available for every industry.
          </motion.p>
        </div>
      </section>

      {/* Industries We Serve - Bento Grid */}
      <section
        ref={industriesRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 50% 0%, rgba(8,145,178,0.04) 0%, transparent 60%),
            var(--color-surface)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-[var(--color-text-secondary)]">
              From restaurants to medical offices, we design commercial filtration systems tailored
              to your industry&apos;s specific needs and regulations.
            </p>
          </motion.div>

          {/* Bento grid: 2 large on top, 4 smaller below */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {/* Two large cards */}
            {industries
              .filter((ind) => ind.size === 'large')
              .map((industry, i) => (
                <motion.div
                  key={industry.title}
                  className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-secondary)] text-white transition-colors group-hover:bg-[var(--color-primary)]">
                    <industry.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                    {industry.title}
                  </h3>
                  <p className="mt-3 font-body text-[var(--color-text-secondary)] leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}

            {/* Four smaller cards in a nested 2x2 grid */}
            {industries
              .filter((ind) => ind.size === 'small')
              .map((industry, i) => (
                <motion.div
                  key={industry.title}
                  className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-secondary)] text-white transition-colors group-hover:bg-[var(--color-primary)]">
                    <industry.icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                    {industry.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="banner"
        message="Need a Custom Commercial Solution?"
        text="Request a Quote"
        phone="(949) 998-9443"
      />

      {/* Why Commercial Section - Horizontal Feature Bars */}
      <section
        ref={featuresRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            linear-gradient(180deg, #ffffff 0%, var(--color-surface) 40%, #ffffff 100%)
          `,
        }}
      >
        <div className="mx-auto max-w-5xl px-5">
          <motion.h2
            className="mb-12 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Why Businesses Choose PureWay
          </motion.h2>

          <div className="space-y-5">
            {featureBars.map((feature, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-6 rounded-2xl border p-7 md:p-8"
                  style={{
                    borderColor: isEven ? 'var(--color-border)' : 'rgba(8,145,178,0.15)',
                    background: isEven
                      ? 'linear-gradient(135deg, #ffffff 0%, var(--color-surface) 100%)'
                      : 'linear-gradient(135deg, var(--color-cyan-pale) 0%, rgba(236,254,255,0.5) 100%)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div
                    className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: isEven ? 'var(--color-secondary)' : 'var(--color-primary)',
                    }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-[var(--color-text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional dark styling */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `
            linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 60%, #0f1f33 100%)
          `,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 45% 55% at 30% 60%, rgba(8,145,178,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 35% 45% at 80% 20%, rgba(6,182,212,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Request a Commercial Quote
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl font-body text-base text-cyan-100/80 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Every business has unique water demands. Tell us about your operation and we&apos;ll
            design a system that matches your volume, your industry standards, and your budget.
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
              Request a Commercial Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

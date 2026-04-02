'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import InlineCTA from '@/components/conversion/inline-cta'
import {
  ChevronRight,
  Droplets,
  Wind,
  Bug,
  Palette,
  Gauge,
  Waves,
  TestTube,
  PenTool,
  Wrench,
  Eye,
} from 'lucide-react'

const wellIssues = [
  {
    icon: Palette,
    title: 'Iron Staining',
    description:
      'Rusty orange-brown stains on sinks, toilets, and laundry. Iron in well water oxidizes on contact with air, leaving unsightly marks on every surface it touches.',
  },
  {
    icon: Wind,
    title: 'Sulfur Smell',
    description:
      'That unmistakable rotten egg odor comes from hydrogen sulfide gas dissolved in your well water. Even at low concentrations, it makes drinking and showering unpleasant.',
  },
  {
    icon: Bug,
    title: 'Bacterial Contamination',
    description:
      'Wells are susceptible to coliform bacteria, E. coli, and other pathogens, especially after heavy rain or flooding. Regular testing is essential for safety.',
  },
  {
    icon: Droplets,
    title: 'Manganese Discoloration',
    description:
      'Black or dark brown staining in water and on fixtures. High manganese levels can also affect water taste and may pose long-term health concerns.',
  },
  {
    icon: Gauge,
    title: 'Low pH / Acidic Water',
    description:
      'Acidic well water corrodes copper pipes and plumbing fixtures, causing blue-green staining and potentially leaching metals into your drinking water.',
  },
  {
    icon: Waves,
    title: 'Sediment & Turbidity',
    description:
      'Sand, silt, and clay particles make water cloudy and can clog appliances, reduce water pressure, and carry other contaminants into your home.',
  },
]

const processSteps = [
  {
    icon: TestTube,
    title: 'Test Your Water',
    description:
      'We run a comprehensive well water analysis covering iron, manganese, sulfur, bacteria, pH, hardness, and other key contaminants specific to your area.',
  },
  {
    icon: PenTool,
    title: 'Design Your Solution',
    description:
      'Based on your test results, we engineer a custom filtration system that targets your exact contaminant profile. No cookie-cutter solutions.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description:
      'Our licensed local technicians install your system with precision. Every connection is tested, every seal verified, every setting calibrated.',
  },
  {
    icon: Eye,
    title: 'Ongoing Monitoring',
    description:
      'Well water quality can change seasonally. We schedule regular check-ups to ensure your system continues to perform at its best year-round.',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function WellWaterContent() {
  const heroRef = useRef<HTMLElement>(null)
  const issuesRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })
  const issuesInView = useInView(issuesRef, { once: true, margin: '-60px' })
  const processInView = useInView(processRef, { once: true, margin: '-60px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Hero Section - Earthy green-tinted gradient */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(170deg, #f0f7f4 0%, #ffffff 40%, rgba(34,120,80,0.06) 100%),
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(34,120,80,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 80% 70%, rgba(56,142,60,0.05) 0%, transparent 70%)
          `,
        }}
      >
        {/* Organic wave at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C360 100 720 0 1080 50C1260 75 1380 30 1440 40V100H0V40Z"
              fill="var(--color-surface)"
            />
          </svg>
        </div>

        {/* Subtle floating accent */}
        <motion.div
          className="pointer-events-none absolute top-20 right-[10%] h-[280px] w-[280px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(34,120,80,0.06) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
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
            <span className="text-[var(--color-primary)]">Well Water Filtration</span>
          </motion.nav>

          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            Well Water Filtration
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            Every well is unique. Iron, sulfur, bacteria, sediment - we test for it all
            and build a custom solution for your specific water challenges.
          </motion.p>
        </div>
      </section>

      {/* Common Well Water Issues - Alternating editorial rows */}
      <section
        ref={issuesRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            var(--color-surface)
          `,
        }}
      >
        {/* Decorative side accent */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-1"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(34,120,80,0.15), transparent)' }}
        />

        <div className="mx-auto max-w-5xl px-5">
          <motion.h2
            className="mb-4 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={issuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Common Well Water Issues
          </motion.h2>
          <motion.p
            className="mx-auto mb-16 max-w-2xl text-center font-body text-[var(--color-text-secondary)]"
            initial={{ opacity: 0, y: 16 }}
            animate={issuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Well water faces challenges that city water does not. Here are the most
            common problems we solve.
          </motion.p>

          <div className="space-y-12 md:space-y-16">
            {wellIssues.map((issue, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={issue.title}
                  className={`flex flex-col items-center gap-6 md:flex-row md:gap-12 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={issuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
                >
                  {/* Icon block */}
                  <div className="flex shrink-0 items-center justify-center">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-2xl md:h-24 md:w-24"
                      style={{
                        background: `linear-gradient(135deg, rgba(34,120,80,0.1) 0%, rgba(8,145,178,0.08) 100%)`,
                      }}
                    >
                      <issue.icon className="h-10 w-10 text-[var(--color-primary)] md:h-12 md:w-12" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)] md:text-2xl">
                      {issue.title}
                    </h3>
                    <p className="mt-2 font-body text-[var(--color-text-secondary)] leading-relaxed">
                      {issue.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="banner"
        message="Worried About Your Well Water? Test It Free"
        text="Book Free Well Water Test"
        phone="(949) 998-9443"
      />

      {/* Our Process - Vertical Timeline */}
      <section
        ref={processRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 30% 20%, rgba(34,120,80,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 70% 80%, rgba(8,145,178,0.04) 0%, transparent 70%),
            #ffffff
          `,
        }}
      >
        <div className="mx-auto max-w-4xl px-5">
          <motion.h2
            className="mb-16 text-center font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Our Process
          </motion.h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--color-border)] md:block" />

            {/* Mobile vertical line (left-aligned) */}
            <div className="absolute left-6 top-0 block h-full w-px bg-[var(--color-border)] md:hidden" />

            <div className="space-y-12 md:space-y-20">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={step.title}
                    className="relative"
                    initial={{ opacity: 0, y: 24 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease }}
                  >
                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                      {/* Left side content */}
                      <div className={`flex ${isLeft ? 'justify-end' : ''}`}>
                        {isLeft ? (
                          <div className="max-w-sm text-right">
                            <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                              {step.title}
                            </h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                              {step.description}
                            </p>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                      {/* Right side content */}
                      <div className={`flex ${!isLeft ? 'justify-start' : ''}`}>
                        {!isLeft ? (
                          <div className="max-w-sm">
                            <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                              {step.title}
                            </h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                              {step.description}
                            </p>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>

                    {/* Center dot - desktop */}
                    <div className="absolute left-1/2 top-1 hidden -translate-x-1/2 md:flex">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[var(--color-primary)] shadow-md">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex items-start gap-5 md:hidden">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[var(--color-primary)] shadow-md">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="pt-1">
                        <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                          {step.title}
                        </h3>
                        <p className="mt-1 font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(135deg, #1a3d2e 0%, var(--color-secondary-dark) 100%)`,
        }}
      >
        <motion.div
          className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,120,80,0.2) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Get Your Well Water Tested Free
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl font-body text-base text-emerald-100 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            Every well is unique. Let us test yours and design a system built for
            your specific water challenges.
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
              Get Your Well Water Tested Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

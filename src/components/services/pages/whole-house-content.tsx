'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Atom,
  FlaskConical,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import InlineCTA from '@/components/conversion/inline-cta'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const stages = [
  {
    number: 1,
    name: 'Pure Shield',
    tagline: 'Sediment Protection',
    icon: ShieldCheck,
    image: '/images/filter-stage-1.jpg',
    description:
      'The first line of defense captures sediment, rust, sand, and particulates down to 1 micron. This pre-filtration stage protects the advanced media downstream and extends the life of the entire system.',
    removes: [
      'Sediment and silt',
      'Rust and pipe scale',
      'Sand and grit',
      'Particulates down to 1 micron',
    ],
  },
  {
    number: 2,
    name: 'Nano Armor',
    tagline: 'Molecular Filtration',
    icon: Atom,
    image: '/images/filter-stage-2.jpg',
    description:
      'Medical-grade Disruptor PAC media captures contaminants at the molecular level through electroadsorption. Unlike traditional filters that rely on pore size, Nano Armor uses charged nanofibers to attract and trap even the smallest threats.',
    removes: [
      'Bacteria and viruses (99.99%)',
      'PFAS and PFOA',
      'Microplastics',
      'Pharmaceuticals and hormones',
    ],
  },
  {
    number: 3,
    name: 'Chem Guard',
    tagline: 'Carbon Finishing',
    icon: FlaskConical,
    image: '/images/filter-stage-3.jpg',
    description:
      'Premium catalytic carbon eliminates chemical contaminants and improves taste and odor. This final polishing stage ensures every drop of water from every tap in your home is clean, fresh, and great-tasting.',
    removes: [
      'Chlorine and chloramines',
      'Volatile organic compounds (VOCs)',
      'Pesticides and herbicides',
      'Taste and odor compounds',
    ],
  },
]

const comparisonData = [
  {
    metric: 'Contaminants Removed',
    pureway: '99.99%',
    ro: '95-99%',
    softener: 'Hard minerals only',
    bottled: 'Varies widely',
  },
  {
    metric: 'Wastewater Produced',
    pureway: 'Zero',
    ro: '3-4 gallons per 1 gallon',
    softener: '50+ gallons per regen',
    bottled: 'Plastic waste',
  },
  {
    metric: 'Minerals Retained',
    pureway: 'Yes, all beneficial',
    ro: 'No, stripped out',
    softener: 'Replaced with sodium',
    bottled: 'Inconsistent',
  },
  {
    metric: 'Maintenance Required',
    pureway: 'Filter change every 3 years',
    ro: 'Filters every 6-12 months',
    softener: 'Monthly salt refills',
    bottled: 'Constant reordering',
  },
  {
    metric: 'Electricity Needed',
    pureway: 'None',
    ro: 'None',
    softener: 'Yes',
    bottled: 'N/A',
  },
  {
    metric: 'Cost per Gallon',
    pureway: 'Under $0.01',
    ro: '$0.02-0.05',
    softener: 'N/A',
    bottled: '$1.00-3.00',
  },
]

const certifications = [
  'NSF 42',
  'NSF 53',
  'NSF 61',
  'NSF 372',
  'IAPMO Certified',
  'EPA Award Winner',
]

const statBadges = [
  { value: '99.99%', label: 'Contaminant Removal' },
  { value: '0', label: 'Wastewater Produced' },
  { value: '3 yr', label: 'Filter Life' },
]

export default function WholeHouseContent() {
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })

  const stagesRef = useRef<HTMLElement>(null)
  const stagesInView = useInView(stagesRef, { once: true, margin: '-60px' })

  const compRef = useRef<HTMLElement>(null)
  const compInView = useInView(compRef, { once: true, margin: '-60px' })

  const certRef = useRef<HTMLElement>(null)
  const certInView = useInView(certRef, { once: true, margin: '-40px' })

  const ctaRef = useRef<HTMLElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
        style={{
          background: `linear-gradient(160deg, var(--color-secondary-dark) 0%, var(--color-secondary) 40%, var(--color-primary-dark) 100%)`,
        }}
      >
        {/* Decorative orbs */}
        <motion.div
          className="pointer-events-none absolute top-10 right-[8%] h-[320px] w-[320px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-12 left-[4%] h-[220px] w-[220px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,160,6,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.06, 1], y: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <ol className="flex items-center justify-center gap-2 text-sm text-cyan-200/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Whole-House Filtration</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Whole-House Water Filtration
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cyan-100/90 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            Medical-grade 3-stage filtration that delivers clean water from
            every tap in your home. Zero wastewater. Zero electricity. Pure
            results.
          </motion.p>

          {/* Stat badges */}
          <motion.div
            className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            {statBadges.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-[var(--color-accent-light)] sm:text-3xl">
                  {badge.value}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wide text-cyan-200/80">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C360 80 720 0 1080 40C1260 60 1380 30 1440 40V80H0V40Z"
              fill="var(--color-surface)"
            />
          </svg>
        </div>
      </section>

      {/* ── 3-STAGE WALKTHROUGH ── */}
      <section
        ref={stagesRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 10% 30%, rgba(8,145,178,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 70%, rgba(6,182,212,0.03) 0%, transparent 70%),
            var(--color-surface)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={stagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              3 Stages of Protection
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Each stage targets a different class of contaminant, working
              together to deliver comprehensive purification.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {stages.map((stage, i) => {
              const Icon = stage.icon
              const isEven = i % 2 === 1
              return (
                <motion.div
                  key={stage.number}
                  className={`flex flex-col gap-8 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={stagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.15,
                    ease,
                  }}
                >
                  {/* Filter image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--color-surface-alt)]">
                      <Image
                        src={stage.image}
                        alt={`${stage.name} - ${stage.tagline}`}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                          Stage {stage.number}
                        </span>
                        <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
                          {stage.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm uppercase tracking-wide text-[var(--color-text-muted)] mb-4">
                      {stage.tagline}
                    </p>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {stage.description}
                    </p>
                    <ul className="space-y-2.5">
                      {stage.removes.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-sm text-[var(--color-text-primary)]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="banner"
        message="See What Our 3-Stage System Can Do for Your Home"
        text="Get a Free Water Analysis"
        phone="(949) 998-9443"
      />

      {/* ── COMPARISON TABLE ── */}
      <section
        ref={compRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 75% 20%, rgba(212,160,6,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba(8,145,178,0.03) 0%, transparent 70%),
            #ffffff
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              How PureWay Compares
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-secondary)]">
              See how our whole-house system stacks up against common
              alternatives.
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Metric
                  </th>
                  <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    PureWay
                  </th>
                  <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Reverse Osmosis
                  </th>
                  <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Water Softener
                  </th>
                  <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Bottled Water
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i < comparisonData.length - 1
                        ? 'border-b border-[var(--color-border)]/50'
                        : ''
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-[var(--color-text-primary)]">
                      {row.metric}
                    </td>
                    <td className="px-6 py-4 font-semibold text-[var(--color-primary)]">
                      {row.pureway}
                    </td>
                    <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                      {row.ro}
                    </td>
                    <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                      {row.softener}
                    </td>
                    <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                      {row.bottled}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <InlineCTA
        variant="button"
        text="Get Your Custom Recommendation"
        trustLine="Free in-home consultation - no obligation"
      />

      {/* ── CERTIFICATIONS BAR ── */}
      <section
        ref={certRef}
        className="relative py-14 md:py-20"
        style={{
          background: `
            linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.p
            className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]"
            initial={{ opacity: 0 }}
            animate={certInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            Certified and Recognized
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={certInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                {cert}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 50%, var(--color-primary-dark) 100%)`,
        }}
      >
        <motion.div
          className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Schedule Your Free Water Analysis
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base text-cyan-100 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Find out exactly what is in your water and get a custom
            recommendation from our Orange County specialists.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-secondary-dark)] shadow-lg transition-all duration-300 hover:bg-[var(--color-accent-light)] hover:shadow-xl hover:-translate-y-0.5 sm:text-lg"
            >
              Schedule Your Free Water Analysis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Filter,
  Droplets,
  Sparkles,
  GlassWater,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const steps = [
  {
    number: 1,
    title: 'Pre-Filtration',
    description:
      'Removes sediment and chlorine to protect the delicate RO membrane and extend its lifespan.',
    icon: Filter,
  },
  {
    number: 2,
    title: 'RO Membrane',
    description:
      'Removes dissolved solids at the molecular level, eliminating up to 99% of contaminants including lead, fluoride, and arsenic.',
    icon: Droplets,
  },
  {
    number: 3,
    title: 'Alkaline Remineralization',
    description:
      'Restores calcium, magnesium, and essential minerals to elevate pH for alkaline, mineral-rich water. No flat or acidic taste.',
    icon: Sparkles,
  },
  {
    number: 4,
    title: 'Dedicated Faucet',
    description:
      'Pure water on demand from a sleek dedicated faucet installed at your kitchen sink.',
    icon: GlassWater,
  },
]

const perfectFor = [
  'Families with infants and young children',
  'Cooking and coffee/tea enthusiasts',
  'Anyone with compromised immunity',
  'Health-conscious households',
  'Homes pairing with whole-house filtration',
]

const faqs = [
  {
    question: 'Does reverse osmosis waste a lot of water?',
    answer:
      'Traditional RO systems waste 3-4 gallons per gallon produced, but our modern systems include a permeate pump that reduces waste to about 1:1 ratio. When paired with whole-house filtration, the membrane lasts even longer since fewer contaminants reach it.',
  },
  {
    question: 'Do I lose beneficial minerals with RO?',
    answer:
      'Standard RO strips all minerals, which is why our system includes an alkaline remineralization stage. It restores calcium, magnesium, and essential minerals after purification, raising the pH to create alkaline, mineral-rich water that tastes great — without the contaminants.',
  },
  {
    question: 'How often do I need to change the filters?',
    answer:
      'Pre-filters should be replaced every 6-12 months depending on usage and water quality. The RO membrane typically lasts 2-3 years. The remineralization cartridge lasts about 12 months. We will set you up with a maintenance schedule after installation.',
  },
  {
    question: 'Can I pair RO with whole-house filtration?',
    answer:
      'Absolutely, and we recommend it. Whole-house filtration handles every tap in your home, while an under-sink RO system gives you the highest purity at your kitchen faucet for drinking and cooking. Together, they provide the most comprehensive water solution available.',
  },
]

export default function ROContent() {
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-40px' })

  const processRef = useRef<HTMLElement>(null)
  const processInView = useInView(processRef, { once: true, margin: '-60px' })

  const splitRef = useRef<HTMLElement>(null)
  const splitInView = useInView(splitRef, { once: true, margin: '-60px' })

  const faqRef = useRef<HTMLElement>(null)
  const faqInView = useInView(faqRef, { once: true, margin: '-60px' })

  const ctaRef = useRef<HTMLElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background: `
            linear-gradient(165deg, var(--color-cyan-pale) 0%, #ffffff 40%, var(--color-surface-alt) 100%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(8,145,178,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 45% 40% at 15% 80%, rgba(6,182,212,0.04) 0%, transparent 70%)
          `,
        }}
      >
        {/* Subtle floating accent */}
        <motion.div
          className="pointer-events-none absolute top-20 left-[10%] h-[260px] w-[260px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.06, 1], y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Bottom wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 35C480 70 960 0 1440 35V70H0V35Z"
              fill="var(--color-surface)"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <ol className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-[var(--color-primary-dark)]">
                Reverse Osmosis
              </li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-[var(--color-secondary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Reverse Osmosis Systems
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            The purest drinking water from your kitchen tap. Multi-stage
            filtration with alkaline remineralization — purified, then enriched
            with essential minerals for elevated-pH, great-tasting water.
          </motion.p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        ref={processRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 50% 20%, rgba(8,145,178,0.04) 0%, transparent 70%),
            var(--color-surface)
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-secondary)]">
              Four stages from tap to glass, delivering water at its absolute
              purest.
            </p>
          </motion.div>

          {/* Desktop: horizontal layout */}
          <div className="hidden md:block">
            <div className="relative grid grid-cols-4 gap-6">
              {/* Connecting line */}
              <div
                className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[44px] h-px"
                style={{
                  background: `linear-gradient(90deg, var(--color-border) 0%, var(--color-primary) 30%, var(--color-primary) 70%, var(--color-border) 100%)`,
                }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 24 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
                  >
                    {/* Number badge */}
                    <div className="relative z-10 mb-5 flex h-[88px] w-[88px] items-center justify-center rounded-2xl border-2 border-[var(--color-primary)]/20 bg-white shadow-sm">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--color-cyan-pale)]">
                        <Icon className="h-7 w-7 text-[var(--color-primary)]" />
                      </div>
                      <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white shadow-sm">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile: vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  className="flex gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
                >
                  {/* Left: number + line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-[var(--color-border)]" />
                    )}
                  </div>
                  {/* Right: text */}
                  <div className="pb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                      Step {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SPLIT SECTION: PERFECT FOR + IMAGE ── */}
      <section
        ref={splitRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 20% 30%, rgba(6,182,212,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 85% 80%, rgba(212,160,6,0.03) 0%, transparent 70%),
            #ffffff
          `,
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Perfect For */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={splitInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
                Perfect For
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                Our under-sink RO system is ideal for anyone who wants the
                absolute purest drinking and cooking water.
              </p>
              <ul className="mt-8 space-y-4">
                {perfectFor.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={splitInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + i * 0.08,
                      ease,
                    }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--color-text-primary)]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: RO Installation Image */}
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={splitInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <Image
                src="/images/under-sink-ro-faucet.jpg"
                alt="Under-sink RO system faucet delivering purified water"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section
        ref={faqRef}
        className="relative py-20 md:py-28"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 70% 80%, rgba(8,145,178,0.04) 0%, transparent 70%),
            var(--color-surface)
          `,
        }}
      >
        <div className="mx-auto max-w-3xl px-5">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <motion.div
                  key={i}
                  className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[var(--color-surface)]"
                  >
                    <span className="font-heading text-base font-semibold text-[var(--color-secondary)] pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease }}
                    >
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-[var(--color-text-muted)]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)`,
        }}
      >
        <motion.div
          className="pointer-events-none absolute -left-16 -bottom-16 h-[350px] w-[350px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            Get a Free Consultation
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base text-cyan-50/90 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            Our Orange County water specialists will help you choose the right
            RO system for your home and install it the same week.
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
              Get a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

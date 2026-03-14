'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
} from 'framer-motion'
import { Shield, Zap, Sparkles } from 'lucide-react'
import Image from 'next/image'

const stages = [
  {
    id: 1,
    tab: 'Stage 1',
    name: 'Pure Shield',
    filterName: '20 Micron Pleated Hi-Dirt Holding Capacity Filter',
    description:
      'Removes particulates, rust, dirt, sand, and silt. The essential first barrier protecting your home\'s water supply.',
    removes: ['Particulates', 'Rust & sediment', 'Dirt & sand', 'Silt'],
    icon: Shield,
    image: '/images/filter-stage-1.jpg',
  },
  {
    id: 2,
    tab: 'Stage 2',
    name: 'Nano Armor',
    filterName: 'Proprietary Hi-Flow Nano Alumina Anti-Scale Filter',
    description:
      'Electropositive charge captures contaminants below 3 microns. Removes heavy metals including lead, microplastics, pathogens, bacteria, cysts, and viruses. Patented anti-scale technology prevents calcium buildup while retaining healthy minerals.',
    removes: [
      'Heavy metals & lead',
      'Microplastics',
      'Pathogens & bacteria',
      'Cysts & viruses',
      'Scale buildup',
    ],
    icon: Zap,
    image: '/images/filter-stage-2.jpg',
  },
  {
    id: 3,
    tab: 'Stage 3',
    name: 'MicronGuard',
    filterName:
      'Proprietary Microbiological MicronGuard Electropositive Filter',
    description:
      'Takes contaminant capture from microns to nanometers. 99.9999999% bacteria elimination. Reduces PFAS, PFOA, VOCs, chlorine, chloramine, pesticides, arsenic, and pharmaceuticals.',
    removes: [
      'PFAS & PFOA',
      'VOCs & chlorine',
      'Chloramine',
      'Pesticides & arsenic',
      'Pharmaceuticals',
    ],
    icon: Sparkles,
    image: '/images/filter-stage-3.jpg',
  },
]

function AnimatedStageNumber({ number }: { number: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()
    const duration = 600

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * number))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, number])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}


function ConnectingLine() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <svg
      ref={ref}
      className="pointer-events-none mx-auto my-2 hidden h-16 w-px lg:block"
      viewBox="0 0 2 64"
      preserveAspectRatio="none"
    >
      <motion.line
        x1="1"
        y1="0"
        x2="1"
        y2="64"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
      />
    </svg>
  )
}

export default function ThreeStageSystem() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const subtitleInView = useInView(subtitleRef, { once: true, margin: '-60px' })

  const activeStage = stages[activeTab]
  const Icon = activeStage.icon

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden bg-[var(--color-surface-alt)] py-20 sm:py-28 lg:py-32"
    >
      {/* Background: directional gradient sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(215deg, transparent 40%, rgba(8, 145, 178, 0.04) 70%, rgba(8, 145, 178, 0.06) 100%)',
        }}
      />

      {/* Animated cyan orb - top right */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full opacity-30 sm:h-[500px] sm:w-[500px]"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.04) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="font-heading mb-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
            The PureWay 3-Stage System
          </h2>
          <motion.p
            ref={subtitleRef}
            className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={
              subtitleInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Medical-grade MicronGuard technology. No electricity. No
            backwashing. No service contracts.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left: Tabs + Content */}
          <div className="flex-1">
            {/* Tab buttons */}
            <div className="relative mb-8 flex gap-1 rounded-lg border border-[var(--color-border)] bg-white p-1 sm:mb-10 sm:inline-flex">
              {stages.map((stage, i) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(i)}
                  className={`font-heading relative z-10 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-7 sm:text-base ${
                    activeTab === i
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                  }`}
                >
                  {stage.tab}
                  {activeTab === i && (
                    <motion.div
                      layoutId="stage-tab-indicator"
                      className="absolute inset-0 rounded-md bg-[var(--color-cyan-pale)] border border-[var(--color-primary)]/15"
                      style={{ zIndex: -1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {/* Stage number + name */}
                  <div className="mb-6 flex items-start gap-5">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md sm:h-20 sm:w-20">
                      <span className="font-heading text-3xl font-bold sm:text-4xl">
                        <AnimatedStageNumber number={activeStage.id} />
                      </span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2.5">
                        <Icon
                          className="h-5 w-5 text-[var(--color-primary)]"
                          strokeWidth={1.8}
                        />
                        <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                          {activeStage.name}
                        </h3>
                      </div>
                      <p className="font-body text-sm font-medium text-[var(--color-primary)]">
                        {activeStage.filterName}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body mb-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                    {activeStage.description}
                  </p>

                  {/* What it removes */}
                  <div>
                    <p className="font-heading mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      What it removes
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {activeStage.removes.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: i * 0.06,
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="font-body inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-sm text-[var(--color-text-secondary)]"
                        >
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative connecting line */}
                  <ConnectingLine />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Filter Images */}
          <motion.div
            className="relative flex-shrink-0 lg:w-[340px] xl:w-[380px] self-start lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-[var(--color-surface)] to-white p-5 shadow-xl border border-[var(--color-border)]">
              {/* Active filter + combined system side by side concept */}
              <div className="flex items-center gap-4">
                {/* Active filter - highlighted */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative w-[120px] flex-shrink-0"
                  >
                    <Image
                      src={activeStage.image}
                      alt={`${activeStage.name} - ${activeStage.filterName}`}
                      width={240}
                      height={360}
                      className="h-auto w-full object-contain"
                      sizes="120px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Info panel */}
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                        {activeStage.name}
                      </p>
                      <p className="font-body text-xs text-[var(--color-primary)] mt-0.5 leading-snug">
                        Stage {activeStage.id} of 3
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Stage selector dots */}
                  <div className="mt-3 flex items-center gap-2">
                    {stages.map((stage, i) => (
                      <button
                        key={stage.id}
                        onClick={() => setActiveTab(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeTab === i
                            ? 'w-6 bg-[var(--color-primary)]'
                            : 'w-2 bg-[var(--color-border)] hover:bg-[var(--color-primary)]/40'
                        }`}
                        aria-label={`View ${stage.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Combined system below - compact */}
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <Image
                  src="/images/system-combined.webp"
                  alt="PureWay 3-Stage Filtration System"
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain max-h-[180px]"
                  sizes="(min-width: 1024px) 340px, 100vw"
                />
              </div>
            </div>

            {/* Decorative badge */}
            <motion.div
              className="absolute -bottom-3 -left-3 z-10 rounded-lg bg-white px-4 py-2 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="font-heading text-xl font-bold text-[var(--color-primary)]">
                99.99%
              </p>
              <p className="font-body text-[10px] text-[var(--color-text-muted)]">
                Bacteria elimination
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

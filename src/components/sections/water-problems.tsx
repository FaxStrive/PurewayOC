'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion'
import { Droplets, FlaskConical, AlertTriangle, Ban } from 'lucide-react'
import Image from 'next/image'

const problems = [
  {
    title: 'Hard Water',
    description:
      'Scale buildup damages pipes, appliances, and leaves spots on everything',
    icon: Droplets,
  },
  {
    title: 'Chlorine & Chemicals',
    description:
      'Chlorine, chloramine, and treatment byproducts in every tap',
    icon: FlaskConical,
  },
  {
    title: 'Forever Chemicals',
    description:
      'PFAS, PFOA, lead, and pharmaceuticals found in OC water supplies',
    icon: AlertTriangle,
  },
  {
    title: 'Taste & Odor',
    description:
      'Unpleasant taste and smell that affects your drinking and cooking water',
    icon: Ban,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function ProblemCard({
  problem,
  index,
  scrollYProgress,
}: {
  problem: (typeof problems)[number]
  index: number
  scrollYProgress: import('framer-motion').MotionValue<number>
}) {
  const yOffsets = [30, -20, 25, -15]
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [yOffsets[index] ?? 0, -(yOffsets[index] ?? 0)]
  )
  const y = useSpring(rawY, { stiffness: 120, damping: 30 })
  const Icon = problem.icon

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ y }}
      whileHover={{
        translateY: -4,
        boxShadow: '0 8px 32px rgba(8, 145, 178, 0.18), 0 0 0 1px rgba(8, 145, 178, 0.12)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-colors duration-300 sm:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-cyan-pale)]">
        <Icon
          className="h-6 w-6 text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.8}
        />
      </div>
      <h3 className="font-heading mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
        {problem.title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {problem.description}
      </p>
    </motion.div>
  )
}

export default function WaterProblems() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const imageYSmooth = useSpring(imageY, { stiffness: 80, damping: 25 })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* Background: organic radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 10% 15%, rgba(236, 254, 255, 0.55) 0%, transparent 70%)',
        }}
      />

      {/* Background: flowing SVG wave at bottom */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        style={{ height: '140px' }}
      >
        <path
          d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,90 L1440,180 L0,180 Z"
          fill="var(--color-surface-alt)"
          opacity="0.7"
        />
        <path
          d="M0,110 C300,60 600,150 900,100 C1100,70 1300,130 1440,110 L1440,180 L0,180 Z"
          fill="var(--color-surface-alt)"
          opacity="0.4"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-14 max-w-2xl sm:mb-16">
          <motion.h2
            className="font-heading mb-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={
              titleInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            What&apos;s Really In Your Water?
          </motion.h2>
          <motion.p
            className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={
              titleInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Orange County tap water meets minimum EPA standards &mdash; but
            that&apos;s not enough for your family.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          {/* Cards grid */}
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {problems.map((problem, i) => (
              <ProblemCard
                key={problem.title}
                problem={problem}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right image (hidden on mobile) */}
          <motion.div
            className="relative hidden flex-shrink-0 lg:block lg:w-[380px] xl:w-[420px]"
            style={{ y: imageYSmooth }}
          >
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/water-droplet-lab.jpg"
                alt="Water testing and analysis"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 0px"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(30, 58, 95, 0.12) 0%, transparent 40%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

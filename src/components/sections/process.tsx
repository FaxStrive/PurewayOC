'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  TestTube2,
  ClipboardCheck,
  Wrench,
  HeartHandshake,
} from 'lucide-react'
import Image from 'next/image'

/* ------------------------------------------------------------------ */
/*  Process steps data                                                 */
/* ------------------------------------------------------------------ */
const steps = [
  {
    num: 1,
    title: 'Free Water Test',
    description:
      'We visit your home and test your water for free. Every home is different, so we start with understanding yours.',
    icon: TestTube2,
  },
  {
    num: 2,
    title: 'Custom Recommendation',
    description:
      'Based on your results, we recommend the right solution tailored to your home, lifestyle, and budget.',
    icon: ClipboardCheck,
  },
  {
    num: 3,
    title: 'Professional Installation',
    description:
      'Licensed technicians install your system in 3-5 days. Clean, professional copper pipe work.',
    icon: Wrench,
  },
  {
    num: 4,
    title: 'Ongoing Support',
    description:
      '30-day follow-up to ensure satisfaction. 100% free repairs. We\'re here for the life of your system.',
    icon: HeartHandshake,
  },
]

/* ------------------------------------------------------------------ */
/*  Connecting line with draw animation                                */
/* ------------------------------------------------------------------ */
function ConnectingLine({ progress }: { progress: ReturnType<typeof useTransform<number, number>> }) {
  return (
    <div
      className="
        hidden lg:block absolute left-0 right-0
        top-[40px] z-0 pointer-events-none
      "
      style={{ paddingLeft: '12.5%', paddingRight: '12.5%' }}
    >
      <svg
        viewBox="0 0 900 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-2"
        preserveAspectRatio="none"
      >
        {/* Background track */}
        <line
          x1="0"
          y1="4"
          x2="900"
          y2="4"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {/* Animated fill line */}
        <motion.line
          x1="0"
          y1="4"
          x2="900"
          y2="4"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Vertical connecting line for mobile                                */
/* ------------------------------------------------------------------ */
function VerticalConnectingLine({
  progress,
}: {
  progress: ReturnType<typeof useTransform<number, number>>
}) {
  return (
    <div className="lg:hidden absolute left-[27px] top-[80px] bottom-0 w-[2px] pointer-events-none">
      <div className="h-full w-full bg-white/20" />
      <motion.div
        className="absolute top-0 left-0 w-full bg-[var(--color-primary)]"
        style={{
          height: useTransform(progress, [0, 1], ['0%', '100%']),
          originY: 0,
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Step card                                                          */
/* ------------------------------------------------------------------ */
function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const Icon = step.icon

  return (
    <motion.div
      className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Number circle */}
      <div
        className="
          relative z-10 flex-shrink-0
          flex items-center justify-center
          h-14 w-14 rounded-full
          bg-[var(--color-primary)] text-white
          font-heading text-xl font-bold
          shadow-[0_4px_20px_rgba(8,145,178,0.3)]
        "
      >
        {step.num}
      </div>

      <div className="lg:mt-5 flex-1">
        {/* Icon */}
        <div className="hidden lg:flex items-center justify-center mb-3">
          <Icon
            className="h-5 w-5 text-[var(--color-cyan-light)]"
            strokeWidth={1.8}
          />
        </div>

        {/* Mobile icon inline */}
        <div className="lg:hidden flex items-center gap-2 mb-1.5">
          <Icon
            className="h-4 w-4 text-[var(--color-cyan-light)]"
            strokeWidth={1.8}
          />
          <h3 className="font-heading text-lg font-semibold text-white">
            {step.title}
          </h3>
        </div>

        {/* Desktop title */}
        <h3 className="hidden lg:block font-heading text-lg font-semibold text-white mb-2">
          {step.title}
        </h3>

        <p className="font-body text-sm text-white/70 leading-relaxed max-w-[260px] lg:mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.8'],
  })
  const lineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-[var(--color-secondary)]">
      {/* --- Background: subtle gradient overlay --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(21,43,71,0.6) 0%, transparent 55%)',
            opacity: 0.7,
          }}
        />
        {/* Decorative SVG curve accent at bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32 text-white/5"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V80C240 20 480 60 720 50C960 40 1200 80 1440 45V120H0Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* --- Heading --- */}
        <div ref={headingRef} className="text-center mb-14 md:mb-18">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-white leading-tight mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            How PureWay Works
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan-light)] to-transparent"
              initial={{ width: 0 }}
              animate={headingInView ? { width: '100%' } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </motion.h2>
        </div>

        {/* --- Content: timeline + image --- */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* Steps */}
          <div className="relative">
            {/* Desktop: horizontal layout */}
            <div className="hidden lg:block">
              <div className="relative">
                <ConnectingLine progress={lineProgress} />
                <div className="grid grid-cols-4 gap-6">
                  {steps.map((step, i) => (
                    <StepCard key={step.num} step={step} index={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="lg:hidden relative">
              <VerticalConnectingLine progress={lineProgress} />
              <div className="flex flex-col gap-10">
                {steps.map((step, i) => (
                  <StepCard key={step.num} step={step} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(30,58,95,0.12)]">
              <Image
                src="/images/kids-drinking-kitchen.jpg"
                alt="Kids drinking clean filtered water in their kitchen"
                width={380}
                height={480}
                className="w-full h-auto object-cover"
                sizes="380px"
              />
              {/* Overlay gradient at bottom */}
              <div
                className="
                  absolute inset-x-0 bottom-0 h-1/3
                  bg-gradient-to-t from-[var(--color-secondary)]/30 to-transparent
                  pointer-events-none
                "
              />
            </div>
            {/* Decorative accent behind image */}
            <div
              className="
                absolute -bottom-4 -right-4 h-full w-full rounded-2xl
                border-2 border-[var(--color-primary)]/15 -z-10
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

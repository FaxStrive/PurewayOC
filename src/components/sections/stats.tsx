'use client'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Shield, Award, Clock, DollarSign } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(
  end: number,
  duration: number,
  isActive: boolean,
  decimals: number = 0,
) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * end).toFixed(decimals)))

      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, isActive, decimals])

  return value
}

/* ------------------------------------------------------------------ */
/*  Stat card                                                          */
/* ------------------------------------------------------------------ */
interface StatData {
  value: string
  numericEnd?: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  icon: typeof Shield
  animate: boolean // whether to use counter
}

const stats: StatData[] = [
  {
    value: '99.99%',
    numericEnd: 99.99,
    decimals: 2,
    suffix: '%',
    label: 'Contaminant Removal',
    icon: Shield,
    animate: true,
  },
  {
    value: '40+',
    numericEnd: 40,
    decimals: 0,
    suffix: '+',
    label: 'Years of Medical-Grade Technology',
    icon: Award,
    animate: true,
  },
  {
    value: '3-5',
    numericEnd: undefined,
    label: 'Day Average Install Time',
    icon: Clock,
    animate: false,
  },
  {
    value: '$0',
    numericEnd: undefined,
    prefix: '$',
    label: 'Maintenance Required',
    icon: DollarSign,
    animate: false,
  },
]

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: StatData
  index: number
  isVisible: boolean
}) {
  const Icon = stat.icon
  const counter = useCounter(
    stat.numericEnd ?? 0,
    1.8,
    isVisible && stat.animate,
    stat.decimals ?? 0,
  )

  const displayValue = stat.animate
    ? `${stat.prefix ?? ''}${counter}${stat.suffix ?? ''}`
    : stat.value

  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Icon className="h-7 w-7 text-white mb-4" strokeWidth={1.6} />
      <span className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
        {displayValue}
      </span>
      <span className="font-body text-white/70 text-sm md:text-base leading-snug max-w-[180px]">
        {stat.label}
      </span>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Wave SVG divider                                                   */
/* ------------------------------------------------------------------ */
function WaveDivider() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <div ref={ref} className="absolute -top-1 left-0 right-0 z-10 overflow-hidden">
      <motion.div style={{ y }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V60C1440 60 1320 120 1080 100C840 80 720 110 540 105C360 100 240 70 120 85C60 92 0 80 0 80V0Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-secondary)] py-20 md:py-24"
    >
      {/* Wave divider at top */}
      <WaveDivider />

      {/* Animated gradient orb at bottom-left */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
            opacity: 0.12,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Secondary subtle orb top-right */}
        <motion.div
          className="absolute -top-10 right-10 h-48 w-48 rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--color-cyan-light) 0%, transparent 70%)',
            opacity: 0.06,
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 15, -10, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, CheckCircle, Clock } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animated counter – counts from 0 to target when in view           */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  target,
  decimals = 0,
  suffix = '',
  inView,
}: {
  target: number
  decimals?: number
  suffix?: string
  inView: boolean
}) {
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000 // ms
    const steps = 60
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // ease-out quad
      const progress = step / steps
      const eased = 1 - (1 - progress) * (1 - progress)
      current = target * eased

      if (step >= steps) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Trust item data                                                   */
/* ------------------------------------------------------------------ */
interface TrustItem {
  id: string
  icon?: React.ReactNode
  label: string
  isCounter?: boolean
  counterTarget?: number
  counterDecimals?: number
  counterSuffix?: string
  counterLabel?: string
}

const trustItems: TrustItem[] = [
  {
    id: 'wqa',
    icon: <Shield className="w-5 h-5" />,
    label: 'WQA Certified',
  },
  {
    id: 'nsf',
    icon: <CheckCircle className="w-5 h-5" />,
    label: 'NSF 42/53/55',
  },
  {
    id: 'contaminant',
    isCounter: true,
    counterTarget: 99.99,
    counterDecimals: 2,
    counterSuffix: '%',
    counterLabel: 'Contaminant Removal',
    label: '',
  },
  {
    id: 'warranty',
    icon: <Shield className="w-5 h-5" />,
    label: 'Lifetime Warranty',
  },
  {
    id: 'response',
    icon: <Clock className="w-5 h-5" />,
    label: 'Same Day Response',
  },
]

/* ------------------------------------------------------------------ */
/*  Stagger animation variants                                        */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ------------------------------------------------------------------ */
/*  Trust Bar section                                                 */
/* ------------------------------------------------------------------ */
export default function TrustBar() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* 3px gradient top border */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            'linear-gradient(to right, var(--color-cyan-light), var(--color-primary), var(--color-accent))',
        }}
      />

      {/* Dark background */}
      <div
        className="py-5 sm:py-6"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4 items-center justify-items-center"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-center gap-2.5 text-white font-body"
            >
              {item.isCounter ? (
                <div className="flex items-center gap-2">
                  <span
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: 'var(--color-cyan-light)' }}
                  >
                    <AnimatedCounter
                      target={item.counterTarget!}
                      decimals={item.counterDecimals}
                      suffix={item.counterSuffix}
                      inView={inView}
                    />
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 leading-tight max-w-[100px]">
                    {item.counterLabel}
                  </span>
                </div>
              ) : (
                <>
                  <span style={{ color: 'var(--color-cyan-light)' }}>
                    {item.icon}
                  </span>
                  <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

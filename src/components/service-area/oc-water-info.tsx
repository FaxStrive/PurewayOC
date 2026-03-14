'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Droplets, AlertTriangle, Home } from 'lucide-react'

const infoCards = [
  {
    icon: Droplets,
    title: 'Where OC Water Comes From',
    description:
      "Orange County's water supply is a blend of imported Metropolitan Water District water from the Colorado River and Northern California, plus local groundwater managed by the Orange County Water District (OCWD).",
  },
  {
    icon: AlertTriangle,
    title: 'Common OC Water Issues',
    description:
      'Hard water from Colorado River supply affects most homes. Chloramine disinfection adds chemical byproducts. Aging infrastructure can introduce lead and other contaminants. Trace PFAS compounds have been detected in multiple water districts.',
  },
  {
    icon: Home,
    title: 'Why Whole-Home Filtration',
    description:
      'Every tap means every use is protected: drinking, cooking, bathing, laundry, and even watering your garden. Unlike pitcher filters or under-sink systems, whole-home filtration ensures clean water throughout your entire home.',
  },
]

export default function OCWaterInfo() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      {/* Directional sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, transparent 30%, var(--color-primary) 70%, transparent 100%)',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section title */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-secondary)] text-center mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Orange County Water Quality
        </motion.h2>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl bg-white border border-[var(--color-border)] p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/30"
              >
                {/* Icon */}
                <motion.div
                  className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-cyan-pale)]"
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.15 + 0.2,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <Icon className="h-6 w-6 text-[var(--color-primary)]" />
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-[var(--color-secondary)] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {card.description}
                </p>

                {/* Hover glow line */}
                <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

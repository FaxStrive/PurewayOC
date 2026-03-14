'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Users, MapPin, Shield } from 'lucide-react'

interface ValueCard {
  icon: React.ElementType
  title: string
  description: string
}

const values: ValueCard[] = [
  {
    icon: Heart,
    title: 'Honesty & Transparency',
    description:
      'We tell you exactly what\'s in your water and exactly what our system does.',
  },
  {
    icon: Users,
    title: 'Family-First Approach',
    description:
      'We treat every home with the same care as our own.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      'We know Orange County water. We test and tailor solutions to each home.',
  },
  {
    icon: Shield,
    title: 'Reliable Solutions',
    description:
      'Lifetime warranty. Zero maintenance. Free repairs. We stand behind our work.',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function CompanyValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background: 3 positioned radial gradients */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.05,
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.05,
          transform: 'translate(30%, 30%)',
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan-pale) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-center mb-4 leading-tight"
          style={{ color: 'var(--color-secondary)' }}
        >
          What We Stand For
        </motion.h2>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={titleInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mx-auto mb-14 md:mb-16 h-1 w-20 rounded-full origin-center"
          style={{ background: 'var(--color-accent)' }}
        />

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, i) => {
            const Icon = value.icon
            const isHovered = hoveredIndex === i
            const someoneHovered = hoveredIndex !== null
            const dimmed = someoneHovered && !isHovered

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-xl border p-6 md:p-8 transition-all duration-300 cursor-default"
                style={{
                  borderColor: isHovered
                    ? 'var(--color-primary)'
                    : 'var(--color-border)',
                  background: '#ffffff',
                  boxShadow: isHovered
                    ? '0 8px 32px rgba(8,145,178,0.12), 0 0 0 1px rgba(8,145,178,0.08)'
                    : '0 1px 4px rgba(0,0,0,0.04)',
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                  opacity: dimmed ? 0.6 : 1,
                  filter: dimmed ? 'blur(2px)' : 'none',
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-300"
                  style={{
                    background: isHovered
                      ? 'var(--color-primary)'
                      : 'var(--color-cyan-pale)',
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{
                      color: isHovered
                        ? '#ffffff'
                        : 'var(--color-primary)',
                    }}
                  />
                </div>

                <h3 className="font-heading text-xl md:text-2xl mb-2 text-[var(--color-secondary)]">
                  {value.title}
                </h3>
                <p className="font-body text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

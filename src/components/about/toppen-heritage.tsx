'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Award, Beaker, Building2, Home, Leaf, Users } from 'lucide-react'

interface TimelineItem {
  label: string
  description: string
  icon: React.ElementType
}

const timelineItems: TimelineItem[] = [
  {
    label: 'Medical Origins',
    description:
      'Toppen Health began developing filtration technology for medical and dental facilities, where water purity is critical.',
    icon: Beaker,
  },
  {
    label: 'EPA Innovation Award',
    description:
      'Recognized by the EPA for breakthrough water treatment technology.',
    icon: Award,
  },
  {
    label: 'ENR Best Technology',
    description:
      'Engineering News Record named the Disruptor PAC technology Best in Class.',
    icon: Leaf,
  },
  {
    label: 'Grainger Challenge',
    description:
      'National Academy of Engineering Grainger Challenge Silver Award for innovation in water treatment.',
    icon: Building2,
  },
  {
    label: 'Residential Launch',
    description:
      'The same medical-grade technology adapted for whole-home residential use.',
    icon: Home,
  },
  {
    label: 'PureWay OC',
    description:
      'PureWay OC brings Toppen Health technology to Orange County families.',
    icon: Users,
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease,
      }}
      className="relative pl-10 md:pl-14 pb-12 last:pb-0"
    >
      {/* Dot on line */}
      <div
        className="absolute left-0 top-1 w-7 h-7 md:w-8 md:h-8 rounded-full border-[3px] flex items-center justify-center z-10"
        style={{
          borderColor: 'var(--color-primary)',
          background: 'var(--color-surface-alt)',
        }}
      >
        <Icon
          className="w-3.5 h-3.5 md:w-4 md:h-4"
          style={{ color: 'var(--color-primary)' }}
        />
      </div>

      {/* Connecting line segment (not on last item) */}
      {index < timelineItems.length - 1 && (
        <div
          className="absolute left-[13px] md:left-[15px] top-9 w-[2px] bottom-0"
          style={{ background: 'var(--color-border)' }}
        />
      )}

      {/* Card content */}
      <div
        className="rounded-xl p-5 md:p-6 border transition-shadow duration-300 hover:shadow-md"
        style={{
          background: '#ffffff',
          borderColor: 'var(--color-border)',
        }}
      >
        <h3 className="font-heading text-lg md:text-xl text-[var(--color-secondary)] mb-2">
          {item.label}
        </h3>
        <p className="font-body text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ToppenHeritage() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.6'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      {/* Directional sweep from bottom-right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(315deg, var(--color-primary) 0%, transparent 50%)',
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            titleInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.7, ease }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-center text-[var(--color-secondary)] mb-4 leading-tight"
        >
          Powered by Toppen Health &mdash; 40 Years of Innovation
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={titleInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mx-auto mb-14 md:mb-20 h-1 w-20 rounded-full origin-left"
          style={{ background: 'var(--color-accent)' }}
        />

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Scroll-driven progress line */}
          <motion.div
            className="absolute left-[13px] md:left-[15px] top-0 w-[2px] origin-top"
            style={{
              background: 'var(--color-primary)',
              height: lineHeight,
              opacity: 0.4,
            }}
          />

          {timelineItems.map((item, i) => (
            <TimelineCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Award badges grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
          {['EPA Innovation', 'ENR Best Technology', 'Grainger Challenge Silver', 'Medical-Grade Certified', '40+ Years Proven', 'Zero Maintenance'].map(
            (badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease,
                }}
                className="flex items-center justify-center rounded-lg border p-3 md:p-4 text-center font-body text-xs md:text-sm font-medium"
                style={{
                  borderColor: 'var(--color-border)',
                  background: '#ffffff',
                  color: 'var(--color-secondary)',
                }}
              >
                <Award
                  className="mr-2 h-4 w-4 flex-shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                />
                {badge}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

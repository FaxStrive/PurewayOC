'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    quote:
      'The water tastes incredible from every tap. No more buying bottled water for our family.',
    name: 'Sarah M.',
    location: 'Irvine',
    stars: 5,
  },
  {
    quote:
      'Professional installation, clean copper work. The team was respectful and efficient.',
    name: 'Mike R.',
    location: 'Huntington Beach',
    stars: 5,
  },
  {
    quote:
      'We noticed the difference in our first shower. Softer skin, no more chlorine smell.',
    name: 'Jessica L.',
    location: 'Newport Beach',
    stars: 5,
  },
  {
    quote:
      'As a mom, knowing my kids drink clean water from every faucet gives me peace of mind.',
    name: 'Amanda T.',
    location: 'Anaheim',
    stars: 5,
  },
  {
    quote:
      'Best investment for our home. The system pays for itself in bottled water savings alone.',
    name: 'David K.',
    location: 'Costa Mesa',
    stars: 5,
  },
]

export default function ReviewCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Organic gradient accents */}
      <div
        className="pointer-events-none absolute top-20 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.04,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
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
          Real Stories, Real Results
        </motion.h2>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-xl bg-white border border-[var(--color-border)] p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--color-primary)]/30"
            >
              {/* Quote icon accent */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-[var(--color-primary)] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-300" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-base leading-relaxed text-[var(--color-text-secondary)] italic mb-5">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
                  {review.name}
                </span>
                <span className="font-body text-sm text-[var(--color-text-muted)]">
                  {review.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="font-body mt-10 text-center text-sm text-[var(--color-text-muted)]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          More reviews coming soon. Ask us about our customer experiences.
        </motion.p>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Review data                                                        */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Single review card                                                 */
/* ------------------------------------------------------------------ */
function ReviewCard({
  quote,
  name,
  location,
  stars,
}: {
  quote: string
  name: string
  location: string
  stars: number
}) {
  return (
    <div className="review-card group min-w-[320px] max-w-[360px] rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-body mb-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div>
        <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
          {name}
        </span>
        <span className="font-body ml-1 text-sm text-[var(--color-text-secondary)]/60">
          {location}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Marquee row                                                        */
/* ------------------------------------------------------------------ */
function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const direction = reverse ? 'marquee-reverse' : 'marquee'

  return (
    <div className="marquee-wrapper group relative flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 gap-5 ${direction}`}
        style={{ animationPlayState: 'running' }}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={`a-${i}`} {...r} />
        ))}
      </div>
      <div
        className={`marquee-track flex shrink-0 gap-5 ${direction}`}
        aria-hidden
        style={{ animationPlayState: 'running' }}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={`b-${i}`} {...r} />
        ))}
      </div>

      {/* CSS for the keyframes + hover pause */}
      <style jsx>{`
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused !important;
        }
        .marquee {
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-reverse {
          animation: marquee-scroll-reverse 44s linear infinite;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Platform badges                                                    */
/* ------------------------------------------------------------------ */
const platforms = [
  { name: 'Google', rating: '4.9' },
  { name: 'HomeAdvisor', rating: '4.8' },
  { name: 'Yelp', rating: '4.7' },
]

function PlatformBadge({ name, rating }: { name: string; rating: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--color-primary)]/10 bg-white px-4 py-2 shadow-sm">
      <span className="font-heading text-sm font-semibold text-[var(--color-text-primary)]">
        {name}
      </span>
      <div className="flex items-center gap-0.5">
        <Star className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        <span className="font-body text-sm font-medium text-[var(--color-text-secondary)]">
          {rating}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Testimonials section                                               */
/* ------------------------------------------------------------------ */
export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'linear-gradient(180deg, var(--color-cyan-pale) 0%, #ffffff 100%)',
      }}
    >
      {/* Animated accent orb */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)',
          opacity: 0.05,
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <motion.h2
          className="font-heading mb-3 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          What Orange County Families Say
        </motion.h2>
        <motion.p
          className="font-body text-lg text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Real results from real homes across OC
        </motion.p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      {/* Platform badges */}
      <motion.div
        className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-4 px-6"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {platforms.map((p) => (
          <PlatformBadge key={p.name} {...p} />
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        className="font-body mx-auto mt-6 max-w-md px-6 text-center text-xs text-[var(--color-text-secondary)]/50"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Reviews shown are representative. Ask us about our customer
        experiences.
      </motion.p>
    </section>
  )
}

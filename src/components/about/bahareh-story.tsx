'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'

const storyParagraphs = [
  'PureWay OC was built on a simple belief: every family deserves access to clean, safe water. We bring medical-grade water filtration technology directly to Orange County homes, powered by Toppen Health -- a name trusted in medical and dental facilities for nearly four decades.',
  'After extensive research into water quality issues affecting Orange County families, we partnered with Toppen Health to bring their MicronGuard system to residential homes. This proven technology delivers hospital-grade filtration without the complexity.',
  'Today, PureWay OC serves hundreds of families across Orange County. No contracts, no maintenance headaches, no electricity required. Just clean, pure water from every single tap in your home.',
]

const badges = ['Medical-Grade Technology', 'Licensed & Insured', 'Orange County Local']

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function BarahehStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const quoteInView = useInView(sectionRef, { once: true, margin: '-200px' })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const imageShadow = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['0px 8px 24px rgba(0,0,0,0.08)', '0px 24px 48px rgba(0,0,0,0.16)']
  )

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background: radial glow behind text */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan-pale) 0%, transparent 70%)',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left column: story text */}
          <div>
            {storyParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease,
                }}
                className="font-body text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed mb-5 last:mb-0"
              >
                {text}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="mt-8 pl-6 py-2 font-heading text-lg md:text-xl italic text-[var(--color-secondary)] leading-relaxed"
              style={{ borderLeft: '4px solid var(--color-accent)' }}
            >
              &ldquo;Clean water is one of the most important foundations
              for a healthy life. That is what drives everything we do.&rdquo;
            </motion.blockquote>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + i * 0.1,
                    ease,
                  }}
                  className="inline-block rounded-full border font-body text-sm px-4 py-1.5 font-medium"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-primary)',
                    background: 'var(--color-cyan-pale)',
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right column: image */}
          <motion.div
            ref={imageRef}
            style={{ scale: imageScale, boxShadow: imageShadow }}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/mom-child-faucet.jpg"
              alt="Family using clean filtered water from the faucet"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

const cities = [
  'Irvine',
  'Anaheim',
  'Santa Ana',
  'Huntington Beach',
  'Newport Beach',
  'Costa Mesa',
  'Fullerton',
  'Garden Grove',
  'Orange',
  'Tustin',
  'Laguna Beach',
  'Laguna Niguel',
  'Mission Viejo',
  'Lake Forest',
  'Yorba Linda',
  'Brea',
  'Placentia',
  'Buena Park',
  'Fountain Valley',
  'Westminster',
  'Seal Beach',
  'Dana Point',
  'San Clemente',
  'Rancho Santa Margarita',
]

export default function CitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28">
      {/* Organic mesh gradients */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-cyan-pale) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section title */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-secondary)] text-center mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Cities We Serve
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* City grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.35,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group flex items-center gap-1.5 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-[var(--color-surface)] hover:scale-[1.02] cursor-default"
              >
                <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                <span className="font-body text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors relative">
                  {city}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-primary)] group-hover:w-full transition-all duration-300" />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Map image */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/images/oc-mission-viejo-aerial.jpg"
              alt="Aerial view of Orange County, California"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, var(--color-secondary) 100%)',
                opacity: 0.25,
              }}
            />
            {/* Label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
              <span className="font-body text-sm font-medium text-[var(--color-text-primary)]">
                Orange County, CA
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

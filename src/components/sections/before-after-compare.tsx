'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import Link from 'next/link'

const beforeItems = [
  'Cloudy, discolored water',
  'Chlorine taste and odor',
  'Hard water scale buildup',
  'PFAS and contaminant concerns',
]

const afterItems = [
  'Crystal clear water from every tap',
  'Fresh, clean taste',
  'No more scale or residue',
  '99.99% contaminants removed',
]

export default function BeforeAfterCompare() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Custom background treatment - layered radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 30%, var(--color-primary) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 80% 70%, var(--color-cyan) 0%, transparent 60%),
              radial-gradient(ellipse 90% 40% at 50% 90%, var(--color-accent) 0%, transparent 70%)
            `,
            opacity: 0.05,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)',
            opacity: 0.04,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            The PureWay Difference
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            See what our filtration system does for Orange County homes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* BEFORE card */}
          <motion.div
            className="rounded-2xl shadow-md bg-white overflow-hidden"
            style={{ border: '1px solid var(--color-border)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Placeholder image area */}
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-lg font-medium">Before Photo</span>
            </div>

            <div className="p-6 md:p-8">
              <h3
                className="text-xl font-semibold mb-5"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Before PureWay
              </h3>
              <ul className="space-y-3">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER card */}
          <motion.div
            className="rounded-2xl shadow-md bg-white overflow-hidden"
            style={{ border: '1px solid var(--color-border)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Placeholder image area */}
            <div
              className="aspect-video flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-cyan-pale)' }}
            >
              <span style={{ color: 'var(--color-primary)' }} className="text-lg font-medium">
                After Photo
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h3
                className="text-xl font-semibold mb-5"
                style={{ color: 'var(--color-text-primary)' }}
              >
                After PureWay
              </h3>
              <ul className="space-y-3">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
              boxShadow: '0 4px 14px rgba(8, 145, 178, 0.3)',
            }}
          >
            Get Your Free Water Test
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

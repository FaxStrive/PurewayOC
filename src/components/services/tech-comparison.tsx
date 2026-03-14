'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface TechRow {
  label: string
  disruptor: boolean
  ro: boolean
  nf: boolean
  uf: boolean
  mf: boolean
  carbon: boolean
  uv: boolean
}

const rows: TechRow[] = [
  {
    label: 'Retain Minerals',
    disruptor: true,
    ro: false,
    nf: false,
    uf: true,
    mf: true,
    carbon: true,
    uv: true,
  },
  {
    label: 'Endotoxin',
    disruptor: true,
    ro: true,
    nf: true,
    uf: false,
    mf: false,
    carbon: false,
    uv: false,
  },
  {
    label: 'Virus',
    disruptor: true,
    ro: true,
    nf: true,
    uf: false,
    mf: false,
    carbon: false,
    uv: true,
  },
  {
    label: 'Bacteria',
    disruptor: true,
    ro: true,
    nf: true,
    uf: true,
    mf: false,
    carbon: false,
    uv: true,
  },
  {
    label: 'Cysts',
    disruptor: true,
    ro: true,
    nf: true,
    uf: true,
    mf: true,
    carbon: false,
    uv: false,
  },
  {
    label: 'Chemical Reduction',
    disruptor: true,
    ro: true,
    nf: true,
    uf: false,
    mf: false,
    carbon: true,
    uv: false,
  },
  {
    label: 'Trace Pharmaceuticals',
    disruptor: true,
    ro: true,
    nf: false,
    uf: false,
    mf: false,
    carbon: false,
    uv: false,
  },
]

const techHeaders = [
  { key: 'disruptor', label: 'Disruptor PAC', highlight: true },
  { key: 'ro', label: 'RO', highlight: false },
  { key: 'nf', label: 'NF', highlight: false },
  { key: 'uf', label: 'UF', highlight: false },
  { key: 'mf', label: 'MF', highlight: false },
  { key: 'carbon', label: 'Carbon Block', highlight: false },
  { key: 'uv', label: 'UV', highlight: false },
]

export default function TechComparison() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'var(--color-secondary)',
      }}
    >
      {/* SVG wave at top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V0H0V40Z"
            fill="var(--color-surface)"
          />
        </svg>
      </div>

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            How Our Technology Compares
          </motion.h2>
          <motion.p
            className="mt-3 font-body text-base text-white/70 md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Disruptor PAC technology outperforms conventional filtration methods
            across every critical measure.
          </motion.p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-4 text-left font-heading text-sm font-semibold text-white/60">
                  Capability
                </th>
                {techHeaders.map((tech) => (
                  <th
                    key={tech.key}
                    className={`px-3 py-4 text-center font-heading text-sm font-semibold ${
                      tech.highlight
                        ? 'text-[var(--color-accent-light)]'
                        : 'text-white/70'
                    }`}
                  >
                    {tech.highlight && (
                      <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-[var(--color-accent)]" />
                    )}
                    {tech.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <motion.tr
                  key={row.label}
                  className="border-t border-white/10"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.3 + rowIndex * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <td className="px-4 py-3.5 font-body text-sm text-white/90">
                    {row.label}
                  </td>
                  {techHeaders.map((tech) => {
                    const value = row[tech.key as keyof TechRow] as boolean
                    return (
                      <td
                        key={tech.key}
                        className={`px-3 py-3.5 text-center ${
                          tech.highlight
                            ? 'bg-white/[0.04]'
                            : ''
                        }`}
                      >
                        {value ? (
                          <Check
                            className={`mx-auto h-5 w-5 ${
                              tech.highlight
                                ? 'text-[var(--color-accent-light)]'
                                : 'text-emerald-400/80'
                            }`}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <X
                            className="mx-auto h-5 w-5 text-white/20"
                            strokeWidth={2}
                          />
                        )}
                      </td>
                    )
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-6 text-center font-body text-sm text-white/50"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Disruptor PAC is the only technology that removes 99.99% of
          contaminants while retaining beneficial minerals.
        </motion.p>
      </div>
    </section>
  )
}

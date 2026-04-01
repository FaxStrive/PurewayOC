'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

interface InlineCTAProps {
  variant: 'banner' | 'button' | 'text'
  text: string
  message?: string
  phone?: string
  trustLine?: string
  href?: string
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function InlineCTA({
  variant,
  text,
  message,
  phone,
  trustLine,
  href = '/contact',
}: InlineCTAProps) {
  /* ── BANNER ── Full-width gradient strip */
  if (variant === 'banner') {
    return (
      <section className="relative overflow-hidden">
        <div
          className="relative py-10 md:py-12"
          style={{
            background:
              'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark) 100%)',
          }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-5">
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-8">
              {/* Message */}
              {message && (
                <motion.p
                  className="text-center text-lg font-bold text-white md:text-left md:text-xl"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease }}
                >
                  {message}
                </motion.p>
              )}

              {/* Button + phone */}
              <motion.div
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5 flex-shrink-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                {phone && (
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                )}
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-[var(--color-secondary-dark)] shadow-lg transition-all duration-300 hover:bg-[var(--color-accent-light)] hover:shadow-xl hover:-translate-y-0.5"
                >
                  {text}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /* ── BUTTON ── Centered button with optional trust line */
  if (variant === 'button') {
    return (
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-5 text-center">
          {message && (
            <motion.p
              className="mb-4 text-lg font-semibold text-[var(--color-secondary)] md:text-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease }}
            >
              {message}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-secondary-dark)] shadow-lg transition-all duration-300 hover:bg-[var(--color-accent-light)] hover:shadow-xl hover:-translate-y-0.5"
            >
              {text}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
          {trustLine && (
            <motion.p
              className="mt-3 text-sm text-[var(--color-text-muted)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.2, ease }}
            >
              {trustLine}
            </motion.p>
          )}
        </div>
      </section>
    )
  }

  /* ── TEXT ── Simple arrow link */
  return (
    <div className="py-6 text-center">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)] group"
        >
          {text}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        {trustLine && (
          <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">
            {trustLine}
          </p>
        )}
      </motion.div>
    </div>
  )
}

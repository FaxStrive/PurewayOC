'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Clock, Award, Phone } from 'lucide-react'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const pathname = usePathname()

  const triggerPopup = useCallback(() => {
    if (sessionStorage.getItem('pw-exit-shown')) return
    sessionStorage.setItem('pw-exit-shown', '1')
    setShow(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setEnabled(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Desktop: mouseout
  useEffect(() => {
    if (!enabled) return
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && e.relatedTarget === null) {
        triggerPopup()
      }
    }
    document.documentElement.addEventListener('mouseout', handleMouseOut)
    return () => document.documentElement.removeEventListener('mouseout', handleMouseOut)
  }, [enabled, triggerPopup])

  // Mobile: 60% scroll + 3s pause
  useEffect(() => {
    if (!enabled) return
    let pauseTimer: NodeJS.Timeout | null = null
    let triggered = false

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent >= 0.6 && !triggered) {
        triggered = true
        pauseTimer = setTimeout(() => {
          triggerPopup()
        }, 3000)
      } else if (scrollPercent < 0.6 && pauseTimer) {
        clearTimeout(pauseTimer)
        pauseTimer = null
        triggered = false
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (pauseTimer) clearTimeout(pauseTimer)
    }
  }, [enabled, triggerPopup])

  if (pathname === '/contact') return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Accent top bar */}
            <div className="h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-cyan)] to-[var(--color-accent)]" />

            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors text-[var(--color-text-muted)]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cyan-pale)] mb-4">
                <Shield className="w-7 h-7 text-[var(--color-primary)]" />
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Wait — Your Free Water Test Is Ready
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6 text-sm leading-relaxed">
                Find out exactly what&apos;s in your water. Our certified technicians test for 100+ contaminants — completely free, no obligation.
              </p>

              <Link
                href="/contact"
                onClick={() => setShow(false)}
                className="inline-flex items-center justify-center w-full py-3.5 px-6 text-base font-semibold text-white bg-[var(--color-accent)] rounded-xl hover:bg-[var(--color-accent-light)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
              >
                Schedule My Free Test
              </Link>

              <a
                href="tel:4084021920"
                className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Or call (408) 402-1920
              </a>

              <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  Same-Day Response
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                  <Shield className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  100% Free
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                  <Award className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  Certified
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

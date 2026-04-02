'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ArrowRight } from 'lucide-react'

export default function ScrollRevealCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (sessionStorage.getItem('pw-scroll-cta-dismissed')) {
      setDismissed(true)
    }
  }, [])

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent >= 0.4) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  // Auto-dismiss after 15s
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => handleDismiss(), 15000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem('pw-scroll-cta-dismissed', '1')
  }

  if (pathname === '/contact' || dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 lg:bottom-4 left-0 right-0 lg:left-4 lg:right-4 z-30"
        >
          <div className="relative bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary-light)] to-[var(--color-primary-dark)] lg:rounded-2xl shadow-2xl overflow-hidden">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 sm:px-8 sm:py-4">
              <p className="text-white text-sm sm:text-base font-medium text-center sm:text-left">
                <span className="text-[var(--color-accent-light)] font-bold">99.99% contaminant removal</span>
                {' '}&mdash; See what&apos;s in your water with a free test
              </p>

              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="tel:9499989443"
                  className="hidden sm:flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (949) 998-9443
                </a>
                <Link
                  href="/contact"
                  onClick={handleDismiss}
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[var(--color-secondary)] bg-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent-light)] transition-colors overflow-hidden group"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="relative flex items-center gap-2">
                    Get Free Test
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

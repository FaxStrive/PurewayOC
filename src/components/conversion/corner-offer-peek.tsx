'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Droplets, ArrowRight } from 'lucide-react'

export default function CornerOfferPeek() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (sessionStorage.getItem('pw-corner-dismissed')) {
      setDismissed(true)
      return
    }

    const showTimer = setTimeout(() => setVisible(true), 8000)
    return () => clearTimeout(showTimer)
  }, [])

  // Auto-dismiss after 12s
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => handleDismiss(), 12000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem('pw-corner-dismissed', '1')
  }

  if (pathname === '/contact' || dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 left-4 sm:left-auto z-35 sm:max-w-[260px]"
          style={{ zIndex: 35 }}
        >
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-white shadow-xl overflow-hidden">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors text-[var(--color-text-muted)]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-cyan-pale)] flex items-center justify-center"
                >
                  <Droplets className="w-5 h-5 text-[var(--color-primary)]" />
                </motion.div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-secondary)]">Free Water Test</p>
                  <p className="text-xs text-[var(--color-text-muted)]">100+ contaminants checked</p>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={handleDismiss}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-light)] transition-colors group"
              >
                Schedule Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

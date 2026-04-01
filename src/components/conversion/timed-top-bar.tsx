'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Sparkles } from 'lucide-react'

export default function TimedTopBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('pw-topbar-dismissed')) {
      setDismissed(true)
      return
    }
    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem('pw-topbar-dismissed', '1')
  }

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-cyan)] overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>

            <div className="relative flex items-center justify-center gap-2 sm:gap-4 px-10 py-2.5 text-white text-center">
              <Sparkles className="hidden sm:block w-4 h-4 text-[var(--color-accent-light)] flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium">
                <span className="font-bold">Limited Time:</span> Free Water Test for First-Time Customers
              </p>
              <a
                href="tel:4084021920"
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-semibold transition-colors flex-shrink-0 border-l border-white/20 pl-4 ml-2"
              >
                <Phone className="w-3.5 h-3.5" />
                (408) 402-1920
              </a>
            </div>

            <button
              onClick={handleDismiss}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

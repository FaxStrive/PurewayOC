'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, FileText } from 'lucide-react'

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname === '/contact') return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="grid grid-cols-3 bg-[var(--color-secondary)] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
            <a
              href="tel:4084021920"
              className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[var(--color-secondary-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs font-semibold">Call Now</span>
            </a>
            <a
              href="sms:4084021920"
              className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[var(--color-secondary-light)] transition-colors border-x border-white/10"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs font-semibold">Text Us</span>
            </a>
            <Link
              href="/contact"
              className="flex flex-col items-center justify-center gap-1 py-3 text-[var(--color-secondary)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-semibold">Free Quote</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

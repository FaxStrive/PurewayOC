'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, MapPin } from 'lucide-react'

const CITIES = [
  'Irvine', 'Huntington Beach', 'Newport Beach', 'Costa Mesa', 'Anaheim',
  'Santa Ana', 'Fullerton', 'Orange', 'Laguna Beach', 'Mission Viejo',
  'Lake Forest', 'Tustin',
]

const NAMES = [
  'Sarah M.', 'James L.', 'Maria G.', 'David K.', 'Jennifer R.',
  'Michael T.', 'Ashley W.', 'Robert H.', 'Lisa P.', 'Kevin C.',
  'Amanda S.', 'Brian D.', 'Nicole F.', 'Chris B.', 'Rachel V.',
]

const SERVICES = [
  'Whole-House Filtration', 'Reverse Osmosis System', 'Water Softener Install',
  'Free Water Test', 'Well Water Treatment', 'Maintenance Service',
]

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomMinutes(): number {
  return Math.floor(Math.random() * 45) + 5
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({ name: '', city: '', service: '', minutes: 0 })

  const showToast = useCallback(() => {
    setData({
      name: getRandomItem(NAMES),
      city: getRandomItem(CITIES),
      service: getRandomItem(SERVICES),
      minutes: getRandomMinutes(),
    })
    setVisible(true)
    setTimeout(() => setVisible(false), 5000)
  }, [])

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showToast()
    }, 15000)

    const interval = setInterval(() => {
      showToast()
    }, 25000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [showToast])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-24 lg:bottom-6 left-4 z-40 max-w-xs"
        >
          <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white/95 backdrop-blur-md p-4 shadow-lg">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
                {data.name} just scheduled a {data.service}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[var(--color-text-muted)]" />
                <span className="text-xs text-[var(--color-text-muted)]">
                  {data.city} &middot; {data.minutes}m ago
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

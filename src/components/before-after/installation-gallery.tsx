'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Gallery data                                                       */
/* ------------------------------------------------------------------ */
const galleryItems = [
  {
    src: '/images/glass-with-filter-system.jpg',
    label: 'Whole-House Filtration System',
  },
  {
    src: '/images/kitchen-faucet-running.jpg',
    label: 'Every Tap Purified',
  },
  {
    src: '/images/filling-glass-faucet.jpg',
    label: 'Pure Drinking Water',
  },
  {
    src: '/images/kitchen-tap-filling.jpg',
    label: 'Kitchen Installation',
  },
  {
    src: '/images/water-droplet-lab.jpg',
    label: 'Water Quality Testing',
  },
  {
    src: '/images/washing-hands-clean-water.jpg',
    label: 'Clean Water Living',
  },
  {
    src: '/images/washing-vegetables-faucet.jpg',
    label: 'Safe for Cooking',
  },
  {
    src: '/images/water-pouring-glass.jpg',
    label: 'Crystal Clear Results',
  },
]

/* ------------------------------------------------------------------ */
/*  Installation Gallery                                                */
/* ------------------------------------------------------------------ */
export default function InstallationGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* ---- Directional sweep ---- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, transparent 30%, var(--color-primary) 60%, transparent 90%)',
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.h2
          className="font-heading mb-4 text-center text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Our Installation Gallery
        </motion.h2>
        <motion.p
          className="font-body mx-auto mb-12 max-w-lg text-center"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Click any photo to see it up close.
        </motion.p>

        {/* ---- Grid ---- */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
              aria-label={`View ${item.label}`}
            >
              <motion.div layoutId={`gallery-img-${i}`} className="h-full w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>

              {/* ---- Label overlay on hover ---- */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="font-body text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ---- Lightbox ---- */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              layoutId={`gallery-img-${selected}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={galleryItems[selected].src}
                  alt={galleryItems[selected].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>

              {/* Label */}
              <div className="px-6 py-4">
                <p
                  className="font-heading text-lg font-bold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {galleryItems[selected].label}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

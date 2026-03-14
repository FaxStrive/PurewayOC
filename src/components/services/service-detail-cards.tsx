'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Home,
  Droplets,
  Waves,
  Building2,
  Mountain,
  Wrench,
  TestTube2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Whole-House Filtration',
    short:
      'Clean water from every faucet. No electricity, no backwashing, no service contracts.',
    expanded:
      'Our MicronGuard system uses medical-grade Disruptor PAC technology to filter every drop of water entering your home. Three stages of filtration remove 99.99% of contaminants while retaining healthy minerals. No electricity needed, no backwashing, and zero maintenance until filter change.',
    icon: Home,
    image: '/images/system-combined.webp',
    href: '/services/whole-house-filtration',
  },
  {
    title: 'Reverse Osmosis',
    short:
      'Advanced RO drinking water, purified and remineralized for balanced, great-tasting water.',
    expanded:
      'Our under-sink RO system takes purification to the highest level for your drinking and cooking water. Multi-stage filtration followed by remineralization ensures you get pure, balanced, great-tasting water from a dedicated faucet.',
    icon: Droplets,
    image: '/images/kitchen-faucet-running.jpg',
    href: '/services/reverse-osmosis',
  },
  {
    title: 'Water Softeners',
    short: 'Remove hard minerals. Protect plumbing and appliances.',
    expanded:
      'Hard water is the most common issue in Orange County. Our water softening solutions prevent scale buildup that damages pipes, water heaters, and appliances. Enjoy softer skin, cleaner dishes, and longer-lasting plumbing.',
    icon: Waves,
    image: '/images/filling-glass-faucet.jpg',
    href: '/services/water-softeners',
  },
  {
    title: 'Commercial Systems',
    short: 'Whole-home system adapted for commercial spaces.',
    expanded:
      'We customize our filtration technology for businesses, restaurants, medical offices, and commercial properties. The same medical-grade quality scaled to meet your commercial water demands.',
    icon: Building2,
    image: '/images/kitchen-tap-filling.jpg',
    href: '/services/commercial',
  },
  {
    title: 'Well Water Filtration',
    short:
      'Custom filtration targeting your specific well water contaminants.',
    expanded:
      'Well water presents unique challenges. We test your specific water chemistry and build a custom filtration solution targeting your exact contaminants, whether that is iron, manganese, bacteria, or other well-specific issues.',
    icon: Mountain,
    image: '/images/why-water-matters.jpg',
    href: '/services/well-water',
  },
  {
    title: 'Maintenance & Repairs',
    short:
      '100% free repairs on all products. Zero maintenance until filter change.',
    expanded:
      'We stand behind our systems with lifetime warranty on housing and 100% free repairs. Your system requires zero maintenance until it is time for a filter change. We handle everything.',
    icon: Wrench,
    image: '/images/filter-stage-2.jpg',
    href: '/services/maintenance',
  },
  {
    title: 'Free Water Testing',
    short: 'Free basic testing. In-depth analysis available.',
    expanded:
      'Every home is different. We start with a free water test to understand your specific water quality. Our testing reveals what is actually in your water so we can recommend the right solution tailored to your home.',
    icon: TestTube2,
    image: '/images/researcher-test-tube.jpg',
    href: '/services/free-water-testing',
  },
]

export default function ServiceDetailCards() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background: surface with directional sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(8,145,178,0.03) 0%, transparent 50%),
            var(--color-surface)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section heading */}
        <div ref={headingRef} className="mx-auto mb-14 max-w-2xl text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={
              headingInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="mt-3 font-body text-[var(--color-text-secondary)] text-base md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Click any service to learn more about how we can help.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  layout: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                className={`group cursor-pointer ${
                  index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-shadow duration-400 hover:shadow-[0_8px_32px_rgba(8,145,178,0.10)]">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 50%, rgba(30,58,95,0.15) 100%)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center rounded-lg bg-[var(--color-cyan-pale)] p-2.5 transition-transform duration-300 group-hover:scale-110">
                          <Icon
                            className="h-5 w-5 text-[var(--color-primary)]"
                            strokeWidth={1.8}
                          />
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                          {service.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-[var(--color-text-muted)]" />
                      </motion.div>
                    </div>

                    <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {service.short}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.25, delay: 0.1 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                            <p className="font-body text-sm leading-relaxed text-[var(--color-text-secondary)]">
                              {service.expanded}
                            </p>
                            <Link
                              href={service.href}
                              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover accent glow */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--color-primary)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.06]" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

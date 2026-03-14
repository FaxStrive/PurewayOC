'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
} from 'framer-motion'
import {
  Home,
  Droplets,
  Waves,
  Building2,
  Mountain,
  Wrench,
  TestTube2,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Whole-House Filtration',
    description:
      'Clean water from every faucet. No electricity, no backwashing, no service contracts.',
    icon: Home,
    large: true,
    href: '/services/whole-house-filtration',
  },
  {
    title: 'Reverse Osmosis',
    description:
      'Advanced RO drinking water, purified and remineralized for balanced, great-tasting water.',
    icon: Droplets,
    large: true,
    href: '/services/reverse-osmosis',
  },
  {
    title: 'Water Softeners',
    description: 'Remove hard minerals. Protect plumbing and appliances.',
    icon: Waves,
    large: false,
    href: '/services/water-softeners',
  },
  {
    title: 'Commercial Systems',
    description: 'Whole-home system adapted for commercial spaces.',
    icon: Building2,
    large: false,
    href: '/services/commercial',
  },
  {
    title: 'Well Water Filtration',
    description:
      'Custom filtration targeting your specific well water contaminants.',
    icon: Mountain,
    large: false,
    href: '/services/well-water',
  },
  {
    title: 'Maintenance & Repairs',
    description:
      '100% free repairs on all products. Zero maintenance until filter change.',
    icon: Wrench,
    large: false,
    href: '/services/maintenance',
  },
  {
    title: 'Free Water Testing',
    description: 'Free basic testing. In-depth analysis available.',
    icon: TestTube2,
    large: false,
    href: '/services/free-water-testing',
  },
]

/* ------------------------------------------------------------------ */
/*  Card component                                                     */
/* ------------------------------------------------------------------ */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group ${service.large ? 'lg:col-span-1 lg:row-span-2' : ''}`}
    >
      <Link href={service.href} className="block h-full">
      <div
        className={`
          relative h-full rounded-xl border border-[var(--color-border)]
          bg-white p-6 md:p-7
          transition-shadow duration-400 ease-out
          hover:shadow-[0_8px_32px_rgba(8,145,178,0.10)]
          overflow-hidden
        `}
      >
        {/* Animated border beam pseudo-layer */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl opacity-0
            group-hover:opacity-100 transition-opacity duration-500
          "
          style={{
            background:
              'conic-gradient(from var(--beam-angle, 0deg), transparent 60%, var(--color-primary-light) 80%, var(--color-cyan-light) 90%, transparent 100%)',
            padding: '1.5px',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            animation: 'beamSpin 3s linear infinite',
          }}
        />

        {/* Icon */}
        <div
          className="
            mb-4 inline-flex items-center justify-center rounded-lg
            bg-[var(--color-cyan-pale)] p-3
            transition-transform duration-300 group-hover:scale-110
          "
        >
          <Icon
            className="h-6 w-6 text-[var(--color-primary)]"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Hover accent glow */}
        <div
          className="
            pointer-events-none absolute -bottom-8 -right-8 h-32 w-32
            rounded-full bg-[var(--color-primary)] opacity-0
            group-hover:opacity-[0.06] blur-2xl
            transition-opacity duration-500
          "
        />
      </div>
      </Link>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export default function ServicesOverview() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* --- Background: organic mesh of radial gradients --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 15% 20%, var(--color-cyan-pale) 0%, transparent 70%),
              radial-gradient(ellipse 45% 55% at 80% 70%, var(--color-surface-alt) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 50% 50%, var(--color-cyan-pale) 0%, transparent 60%)
            `,
            opacity: 0.55,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* --- Heading --- */}
        <div ref={headingRef} className="mx-auto max-w-2xl text-center mb-14 md:mb-18">
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[var(--color-text-primary)] leading-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={
              headingInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Our Water Filtration Services
          </motion.h2>

          <motion.p
            className="font-body text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            From whole-house purification to targeted solutions, tailored to
            your home and water.
          </motion.p>
        </div>

        {/* --- Bento grid --- */}
        {/* Top row: 2 wide cards. Middle: 3 equal. Bottom: 2 equal. All on 6-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {/* Large card 1 */}
          <div className="lg:col-span-3">
            <ServiceCard service={services[0]} index={0} />
          </div>
          {/* Large card 2 */}
          <div className="lg:col-span-3">
            <ServiceCard service={services[1]} index={1} />
          </div>

          {/* Middle row: 3 equal cards */}
          {services.slice(2, 5).map((service, i) => (
            <div key={service.title} className="lg:col-span-2">
              <ServiceCard service={service} index={i + 2} />
            </div>
          ))}

          {/* Bottom row: 2 cards centered */}
          {services.slice(5).map((service, i) => (
            <div key={service.title} className="lg:col-start-auto lg:col-span-3">
              <ServiceCard service={service} index={i + 5} />
            </div>
          ))}
        </div>

        {/* --- View all link --- */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/#services"
            className="
              group/link inline-flex items-center gap-2
              font-heading text-sm font-semibold tracking-wide uppercase
              text-[var(--color-primary)] hover:text-[var(--color-primary-light)]
              transition-colors duration-300
            "
          >
            View All Services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
              strokeWidth={2.2}
            />
          </Link>
        </motion.div>
      </div>

      {/* Keyframes for border beam spin */}
      <style jsx global>{`
        @keyframes beamSpin {
          to {
            --beam-angle: 360deg;
          }
        }
        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </section>
  )
}

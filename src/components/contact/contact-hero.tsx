'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'

const quickItems = [
  {
    icon: Phone,
    text: '(949) 998-9443',
    href: 'tel:9499989443',
  },
  {
    icon: Mail,
    text: 'purewayoc@gmail.com',
    href: 'mailto:purewayoc@gmail.com',
  },
  {
    icon: Clock,
    text: 'Same Day Response',
    href: null,
  },
]

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 md:pb-32"
      style={{
        background:
          'linear-gradient(180deg, rgba(8,145,178,0.08) 0%, #ffffff 100%)',
      }}
    >
      {/* Organic SVG curve at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[120px]"
        >
          <path
            d="M0,50 C280,110 560,10 840,70 C1040,100 1260,40 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-primary)"
            fillOpacity="0.04"
          />
          <path
            d="M0,70 C360,30 720,90 1080,45 C1200,30 1360,65 1440,55 L1440,120 L0,120 Z"
            fill="var(--color-cyan)"
            fillOpacity="0.025"
          />
        </svg>
      </div>

      {/* Radial glow behind content */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, var(--color-cyan-pale) 0%, transparent 70%)',
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 flex items-center justify-center gap-2 text-sm font-body"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            Home
          </Link>
          <span className="text-[var(--color-text-muted)]">/</span>
          <span className="text-[var(--color-text-primary)] font-medium">
            Contact
          </span>
        </motion.nav>

        {/* Headline with animated text-shadow */}
        <motion.h1
          className="contact-headline font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--color-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Get in Touch
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl font-body text-[var(--color-text-secondary)] leading-relaxed"
        >
          Start with a free water test. No pressure, no commitment.
        </motion.p>

        {/* Quick contact row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {quickItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center gap-2.5 text-[var(--color-text-primary)] font-medium font-body transition-colors hover:text-[var(--color-primary)] group"
                >
                  <item.icon className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                  {item.text}
                </a>
              ) : (
                <span className="flex items-center gap-2.5 text-[var(--color-text-primary)] font-medium font-body">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {item.text}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated text-shadow CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-headline {
          text-shadow: 0 2px 8px rgba(8,145,178,0.12);
          animation: contact-shadow-pulse 3s ease-in-out infinite;
        }
        @keyframes contact-shadow-pulse {
          0%, 100% {
            text-shadow: 0 2px 8px rgba(8,145,178,0.12), 0 4px 20px rgba(8,145,178,0.06);
          }
          50% {
            text-shadow: 0 2px 12px rgba(8,145,178,0.2), 0 4px 28px rgba(8,145,178,0.1);
          }
        }
      ` }} />
    </section>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/whole-house-filtration', label: 'Whole-House Filtration' },
  { href: '/services/reverse-osmosis', label: 'Reverse Osmosis' },
  { href: '/services/water-softeners', label: 'Water Softeners' },
  { href: '/services/commercial', label: 'Commercial Systems' },
  { href: '/services/well-water', label: 'Well Water Filtration' },
  { href: '/services/free-water-testing', label: 'Free Water Testing' },
]

const cities = [
  'Irvine', 'Anaheim', 'Santa Ana', 'Huntington Beach',
  'Newport Beach', 'Costa Mesa', 'Fullerton', 'Orange',
]

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-secondary)] text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-primary)] to-[var(--color-accent)]" />

      {/* Decorative orb */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="PureWay OC"
              width={160}
              height={48}
              className="h-12 w-auto object-contain mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Clean, healthier water for every tap in your home. Medical-grade filtration powered by Toppen Health.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Powered by Toppen Health</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-[var(--color-cyan-light)] transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-[var(--color-cyan-light)] transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:4084021920"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-[var(--color-cyan-light)] transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                  (408) 402-1920
                </a>
              </li>
              <li>
                <a
                  href="mailto:baharehlopez@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-[var(--color-cyan-light)] transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                  baharehlopez@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-primary)]" />
                Orange County, CA
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 mt-0.5 text-[var(--color-primary)]" />
                Same Day Response
              </li>
            </ul>
          </div>
        </div>

        {/* Service Area Cities */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 mb-3">Serving Orange County:</p>
          <p className="text-xs text-white/30">
            {cities.join(' \u00B7 ')} and surrounding areas
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} PureWay OC. All rights reserved.
            </p>
            <span className="hidden sm:inline text-xs text-white/20">|</span>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-xs text-white/20">|</span>
              <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">WQA Certified</span>
            <span className="text-xs text-white/40">NSF 42/53/55</span>
            <span className="text-xs text-white/40">CSA Certified</span>
            <span className="text-xs text-white/40">Powered by Toppen Health</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

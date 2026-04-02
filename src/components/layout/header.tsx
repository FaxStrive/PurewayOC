'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import dynamic from 'next/dynamic'

const TimedTopBar = dynamic(() => import('@/components/conversion/timed-top-bar'), {
  ssr: false,
})

const serviceLinks = [
  { href: '/services/whole-house-filtration', label: 'Whole-House Filtration' },
  { href: '/services/reverse-osmosis', label: 'Reverse Osmosis' },
  { href: '/services/water-softeners', label: 'Water Softeners' },
  { href: '/services/commercial', label: 'Commercial Systems' },
  { href: '/services/well-water', label: 'Well Water Filtration' },
  { href: '/services/maintenance', label: 'Maintenance & Repairs' },
  { href: '/services/free-water-testing', label: 'Free Water Testing' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function MobileServicesAccordion({ onLinkClick }: { onLinkClick: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-3 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] transition-colors"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-[var(--color-surface)]"
          >
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className="block px-10 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ServicesDropdown({ useDarkNav }: { useDarkNav: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
          useDarkNav
            ? 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
            : 'text-white/90 hover:text-white'
        }`}
      >
        Services
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-[var(--color-border)] bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="py-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Only the homepage has a dark hero video - all inner pages have light backgrounds
  const isHomePage = pathname === '/'
  // Use dark (scrolled) styling when on inner pages OR when scrolled on homepage
  const useDarkNav = scrolled || !isHomePage

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <TimedTopBar />
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`w-full transition-all duration-500 ${
          scrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/images/logo-main.png"
              alt="PureWay OC"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              style={useDarkNav ? {} : { filter: 'brightness(0) invert(1)' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              href="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                useDarkNav
                  ? 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            {/* Services Dropdown */}
            <ServicesDropdown useDarkNav={useDarkNav} />

            {/* Remaining links */}
            {navLinks.filter(l => l.href !== '/').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                  useDarkNav
                    ? 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right side: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9499989443"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                useDarkNav
                  ? 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              (949) 998-9443
            </a>
            <Link
              href="/contact"
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-accent)] rounded-lg overflow-hidden group transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-light)] via-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Free Water Test</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  useDarkNav
                    ? 'text-[var(--color-text-primary)] hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-[var(--color-border)]">
                  <Image
                    src="/images/logo-main.png"
                    alt="PureWay OC"
                    width={140}
                    height={42}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <nav className="flex-1 py-4 overflow-y-auto">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Home
                  </Link>
                  {/* Services with sub-links */}
                  <MobileServicesAccordion onLinkClick={() => setMobileOpen(false)} />
                  {/* Rest of links */}
                  {navLinks.filter(l => l.href !== '/').map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-[var(--color-border)] space-y-4">
                  <a
                    href="tel:9499989443"
                    className="flex items-center gap-3 text-[var(--color-text-primary)] font-medium"
                  >
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    (949) 998-9443
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-3 text-center text-white font-semibold bg-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    Free Water Test
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
    </div>
  )
}

'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, CalendarDays } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/* ------------------------------------------------------------------ */
/*  Contact info items                                                 */
/* ------------------------------------------------------------------ */
const contactDetails = [
  { icon: Phone, label: 'Phone', value: '(408) 402-1920', href: 'tel:4084021920' },
  { icon: Mail, label: 'Email', value: 'baharehlopez@gmail.com', href: 'mailto:baharehlopez@gmail.com' },
  { icon: Clock, label: 'Response Time', value: 'Same Day', href: null },
  { icon: MapPin, label: 'Service Area', value: 'Orange County, CA', href: null },
  { icon: CalendarDays, label: 'Hours', value: 'By Appointment', href: null },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Contact form submitted:', data)
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Radial gradient behind form */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* ---- Form Card ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="form-card-beam relative rounded-xl border border-[var(--color-border)] bg-white p-8 md:p-10 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-[var(--color-secondary)] mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-[var(--color-text-secondary)] max-w-sm">
                  Thank you for reaching out. We will get back to you within the same day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-[var(--color-text-primary)]">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="border-[var(--color-border)] focus-visible:ring-[var(--color-primary)] font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-[var(--color-text-primary)]">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="border-[var(--color-border)] focus-visible:ring-[var(--color-primary)] font-body"
                    />
                  </div>
                </div>

                {/* Phone + Service Interest row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-[var(--color-text-primary)]">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="border-[var(--color-border)] focus-visible:ring-[var(--color-primary)] font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-[var(--color-text-primary)]">
                      Service Interest
                    </Label>
                    <Select name="service">
                      <SelectTrigger className="border-[var(--color-border)] focus:ring-[var(--color-primary)] font-body">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whole-house">Whole-House Filtration</SelectItem>
                        <SelectItem value="reverse-osmosis">Reverse Osmosis</SelectItem>
                        <SelectItem value="water-softener">Water Softener</SelectItem>
                        <SelectItem value="commercial">Commercial System</SelectItem>
                        <SelectItem value="well-water">Well Water Filtration</SelectItem>
                        <SelectItem value="water-test">Free Water Test</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Zip Code */}
                <div className="space-y-2">
                  <Label htmlFor="zip" className="font-body text-[var(--color-text-primary)]">
                    Zip Code
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="92612"
                    className="border-[var(--color-border)] focus-visible:ring-[var(--color-primary)] font-body max-w-[200px]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body text-[var(--color-text-primary)]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your water concerns..."
                    className="border-[var(--color-border)] focus-visible:ring-[var(--color-primary)] font-body resize-none"
                  />
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label className="font-body text-[var(--color-text-primary)]">
                    How did you hear about us?
                  </Label>
                  <Select name="source">
                    <SelectTrigger className="border-[var(--color-border)] focus:ring-[var(--color-primary)] font-body">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="home-show">Home Show</SelectItem>
                      <SelectItem value="door-to-door">Door-to-Door</SelectItem>
                      <SelectItem value="direct-mail">Direct Mail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* SMS Consent */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="sms_consent"
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    />
                    <span className="font-body text-xs leading-relaxed text-[var(--color-text-muted)]">
                      I agree to receive text messages from PureWay OC at the phone number provided.
                      Message frequency varies (approx. 4&ndash;8/month). Message &amp; data rates may
                      apply. Reply STOP to opt out. View our{' '}
                      <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="/terms" className="text-[var(--color-primary)] hover:underline">
                        Terms of Service
                      </Link>.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit-btn relative w-full rounded-lg bg-[var(--color-accent)] px-8 py-4 font-heading text-lg font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-accent-light)] hover:shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* ---- Info Column ---- */}
          <div className="flex flex-col gap-8">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="space-y-5"
            >
              <h3 className="font-heading text-xl text-[var(--color-secondary)]">
                Contact Details
              </h3>
              {contactDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-cyan-pale)] transition-transform hover:scale-110">
                    <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium font-body text-[var(--color-text-muted)] uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-[var(--color-text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-[var(--color-text-primary)] font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="/images/oc-costa-mesa-aerial.jpg"
                alt="Aerial view of Costa Mesa, Orange County"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated border beam + submit button shimmer */}
      <style dangerouslySetInnerHTML={{ __html: `
        .form-card-beam::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from var(--beam-angle, 0deg),
            transparent 60%,
            var(--color-primary) 78%,
            var(--color-cyan-light) 84%,
            transparent 92%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-spin 4s linear infinite;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes beam-spin {
          to { --beam-angle: 360deg; }
        }
        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .contact-submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 55%, transparent 75%);
          background-size: 250% 100%;
          animation: contact-shimmer 3s ease-in-out infinite;
        }
        @keyframes contact-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      ` }} />
    </section>
  )
}

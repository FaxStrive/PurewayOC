'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Script from 'next/script'
import { Phone, Mail, Clock, MapPin, CalendarDays } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Contact info items                                                 */
/* ------------------------------------------------------------------ */
const contactDetails = [
  { icon: Phone, label: 'Phone', value: '(949) 998-9443', href: 'tel:9499989443' },
  { icon: Mail, label: 'Email', value: 'purewayoc@gmail.com', href: 'mailto:purewayoc@gmail.com' },
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

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (
        e.data?.type === 'form_submitted' ||
        e.data?.event === 'form_submitted' ||
        (typeof e.data === 'string' && e.data.includes('form_submitted'))
      ) {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18054370384/ThfRCLmW4qQcENCo_6BD',
            value: 1.0,
            currency: 'USD',
          })
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

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
          {/* ---- GHL Embedded Form ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative rounded-xl border border-[var(--color-border)] bg-white shadow-lg overflow-hidden"
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Q9KJNIYhe4S9zd4qPI76"
              style={{ width: '100%', height: '946px', border: 'none' }}
              id="inline-Q9KJNIYhe4S9zd4qPI76"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="946"
              data-layout-iframe-id="inline-Q9KJNIYhe4S9zd4qPI76"
              data-form-id="Q9KJNIYhe4S9zd4qPI76"
              title="Contact Form"
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="lazyOnload"
            />
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
    </section>
  )
}

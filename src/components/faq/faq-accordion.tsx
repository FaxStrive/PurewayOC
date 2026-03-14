'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

/* ------------------------------------------------------------------ */
/*  FAQ data by category                                               */
/* ------------------------------------------------------------------ */
const categories = ['General', 'Water Quality', 'Cost & Process', 'Systems'] as const
type Category = (typeof categories)[number]

interface FAQItem {
  question: string
  answer: string
}

const faqData: Record<Category, FAQItem[]> = {
  General: [
    {
      question: 'What makes PureWay different from other water filtration companies?',
      answer:
        'Our systems are powered by Toppen Health, a company with nearly 40 years of proven performance in the medical field. We use Disruptor PAC technology -- the same medical-grade filtration trusted in hospitals and dental offices. No electricity needed, no backwashing, no service contracts, and zero maintenance until filter change.',
    },
    {
      question: 'How long does installation take?',
      answer:
        'Most installations are completed within 3-5 days of your initial consultation. Our licensed technicians handle everything with professional copper pipe work.',
    },
    {
      question: 'Is there a warranty?',
      answer:
        'Yes. We offer a lifetime warranty on housing and 100% free repairs on all products. We stand behind our systems for as long as you own them.',
    },
    {
      question: 'Do I need maintenance?',
      answer:
        "Zero maintenance is required until it's time to change the filter. No backwashing, no salt to add, no electricity needed. When it's time for a filter change, we handle it.",
    },
  ],
  'Water Quality': [
    {
      question: 'What contaminants does PureWay remove?',
      answer:
        'Our MicronGuard system removes PFAS, PFOA, PFOS, VOCs, chlorine, chloramine, lead, bacteria, viruses, cysts, arsenic, pharmaceuticals, microplastics, and more. Our three-stage system achieves a 99.99% contaminant removal rate while retaining healthy minerals.',
    },
    {
      question: 'Is Orange County water safe to drink?',
      answer:
        'While OC water meets minimum EPA standards, it contains chloramine disinfection byproducts, hard minerals from the Colorado River supply, and trace contaminants including PFAS compounds. Whole-home filtration addresses these issues at every tap.',
    },
    {
      question: 'What about hard water?',
      answer:
        'Hard water is the most common issue in Orange County, caused primarily by mineral-heavy Colorado River water. Our system includes anti-scale technology that prevents calcium and mineral buildup, protecting your pipes, appliances, and skin.',
    },
  ],
  'Cost & Process': [
    {
      question: 'How much does it cost?',
      answer:
        'Every home is different, which is why we start with a free water test. Based on your results, we recommend the right solution tailored to your home, lifestyle, and budget. Contact us for a personalized quote.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        "We understand this is an investment in your family's health. Contact us to discuss payment options that work for your budget.",
    },
    {
      question: 'What does the free water test include?',
      answer:
        'We visit your home and test your water on-site. Our analysis reveals exactly what contaminants are present, and we provide a detailed report with a tailored recommendation -- no obligation, no pressure.',
    },
  ],
  Systems: [
    {
      question: 'Do I need a separate drinking water filter?',
      answer:
        'Our whole-house system provides clean, filtered water from every tap. For an extra level of purification specifically for drinking and cooking water, you can add a reverse osmosis system under the kitchen sink.',
    },
    {
      question: 'What about well water?',
      answer:
        "We customize filtration for well water customers. We test your specific water chemistry and build a filter solution targeting your exact contaminants, whether that's iron, manganese, bacteria, or other well-specific issues.",
    },
    {
      question: 'Can you install for businesses?',
      answer:
        'Yes. Our whole-home MicronGuard system can be adapted and scaled for commercial spaces including restaurants, medical offices, and other businesses.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<Category>('General')
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background: white with subtle radial gradient accents at corners */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px]"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, var(--color-cyan-pale) 0%, transparent 60%)',
          opacity: 0.7,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px]"
        style={{
          background:
            'radial-gradient(circle at 100% 100%, var(--color-surface-alt) 0%, transparent 60%)',
          opacity: 0.8,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Section heading */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl text-center text-[var(--color-secondary)] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          className="relative mb-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium font-body transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="faq-tab-indicator"
                  className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Accordion type="single" collapsible className="w-full" key={activeCategory}>
            {faqData[activeCategory].map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-[var(--color-border)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium font-body text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:no-underline transition-colors [&[data-state=open]]:text-[var(--color-primary)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--color-text-secondary)] font-body leading-relaxed text-[15px] pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

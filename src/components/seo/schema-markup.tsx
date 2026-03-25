'use client'

import { usePathname } from 'next/navigation'

const SITE_URL = 'https://purewayoc.com'
const BUSINESS_NAME = 'PureWay OC'
const PHONE = '+1-408-402-1920'
const PHONE_DISPLAY = '(408) 402-1920'
const DATE_MODIFIED = '2026-03-18'

// Orange County cities served
const SERVICE_AREAS = [
  'Irvine', 'Anaheim', 'Santa Ana', 'Huntington Beach', 'Newport Beach',
  'Costa Mesa', 'Fullerton', 'Orange', 'Tustin', 'Yorba Linda',
  'Lake Forest', 'Mission Viejo', 'Laguna Niguel', 'San Clemente', 'Dana Point',
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description:
    'PureWay OC provides medical-grade whole-house water filtration, water softeners, reverse osmosis systems, and free water testing for Orange County, CA homes and businesses. Powered by Toppen Health Disruptor PAC technology.',
  url: SITE_URL,
  telephone: PHONE,
  priceRange: '$$',
  image: `${SITE_URL}/images/og-image.png`,
  logo: `${SITE_URL}/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orange County',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7175,
    longitude: -117.8311,
  },
  areaServed: SERVICE_AREAS.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: {
      '@type': 'State',
      name: 'California',
    },
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Whole-House Water Filtration',
        description:
          'Medical-grade whole-house water filtration using MicronGuard Disruptor PAC technology. Removes 99.99% of contaminants including PFAS, chlorine, bacteria, and microplastics. Serving Orange County, CA.',
        url: `${SITE_URL}/services/whole-house-filtration`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Water Softener Installation',
        description:
          'Professional water softener and anti-scale system installation for Orange County homes. Eliminates hard water scale, protects plumbing and appliances.',
        url: `${SITE_URL}/services/water-softeners`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Reverse Osmosis Systems',
        description:
          'Under-sink reverse osmosis drinking water systems with alkaline remineralization for mineral-rich, elevated-pH water. Professional installation in Orange County.',
        url: `${SITE_URL}/services/reverse-osmosis`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Commercial Water Filtration',
        description:
          'Medical-grade commercial water filtration for restaurants, medical offices, dental practices, and businesses in Orange County.',
        url: `${SITE_URL}/services/commercial`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Well Water Filtration',
        description:
          'Custom well water filtration solutions including iron removal, bacteria elimination, and sulfur odor treatment for Orange County properties.',
        url: `${SITE_URL}/services/well-water`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Free Water Testing',
        description:
          'Free water quality test for Orange County homes. Tests for PFAS, heavy metals, bacteria, chlorine, and 100+ contaminants with no obligation.',
        url: `${SITE_URL}/services/free-water-testing`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Water Filtration Maintenance',
        description:
          'Lifetime warranty service including free repairs and professional filter replacement for PureWay water filtration systems in Orange County.',
        url: `${SITE_URL}/services/maintenance`,
        areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
      },
    },
  ],
  sameAs: [],
  dateModified: DATE_MODIFIED,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  description:
    'Medical-grade whole-house water filtration for Orange County, CA. Free water testing, same-day response, lifetime warranty.',
  dateModified: DATE_MODIFIED,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Per-service FAQ data
const SERVICE_FAQS: Record<string, Array<{ question: string; answer: string }>> = {
  'water-softeners': [
    {
      question: 'How hard is Orange County water?',
      answer:
        'Orange County water typically measures 200-400 mg/L (12-23 grains per gallon), which is classified as very hard to extremely hard. The primary source is Colorado River water, which is naturally mineral-rich. The USGS classifies water above 180 mg/L as very hard.',
    },
    {
      question: 'Does a water softener remove PFAS or other contaminants?',
      answer:
        'Traditional ion-exchange water softeners remove hardness minerals (calcium and magnesium) but do not remove PFAS, chlorine, bacteria, or most other contaminants. PureWay OC recommends pairing a water softener with whole-house filtration for complete water quality protection.',
    },
    {
      question: 'How long does a water softener installation take?',
      answer:
        'Most water softener installations are completed within 3-5 days of your initial consultation. Our licensed technicians handle all plumbing with professional copper pipe work. The process starts with a free water test to confirm hardness levels and system sizing.',
    },
  ],
  'whole-house-filtration': [
    {
      question: 'What contaminants does whole-house filtration remove?',
      answer:
        'PureWay OC MicronGuard whole-house filtration removes 99.99% of contaminants including PFAS, PFOA, lead, bacteria, viruses, chlorine, chloramines, microplastics, pharmaceuticals, and volatile organic compounds (VOCs). It uses Disruptor PAC technology trusted in medical facilities for 40 years.',
    },
    {
      question: 'Does whole-house filtration require electricity or maintenance?',
      answer:
        'No electricity is required and there is zero maintenance until filter replacement, typically every 2-3 years. The system operates passively with no backwashing, no salt to add, and no service contracts. When it is time to change the filter, PureWay OC handles it.',
    },
    {
      question: 'How is Disruptor PAC different from standard carbon filters?',
      answer:
        'Standard carbon filters use pore size to physically block contaminants. Disruptor PAC (Positively Charged Activated Carbon) uses electroadsorption, where charged nanofibers attract and trap contaminants at the molecular level. This allows it to capture viruses, bacteria, and PFAS that pass through conventional carbon filters.',
    },
  ],
  'reverse-osmosis': [
    {
      question: 'Does reverse osmosis remove fluoride and other minerals?',
      answer:
        'Yes, RO membranes remove fluoride, nitrates, arsenic, lead, and most dissolved minerals. PureWay OC systems include an alkaline remineralization stage that restores calcium, magnesium, and essential minerals after filtration, elevating the pH for alkaline, mineral-rich water — preventing the flat or acidic taste associated with standard RO systems.',
    },
    {
      question: 'How much water does reverse osmosis waste?',
      answer:
        'Traditional RO systems waste 3-4 gallons of water for every gallon produced. PureWay OC installs high-efficiency systems with 2:1 or better ratios, significantly reducing wastewater. The dedicated storage tank ensures pure water is available on demand.',
    },
    {
      question: 'Can I use RO water for cooking and coffee?',
      answer:
        'Yes, and you will notice a significant difference in taste. RO-filtered water produces cleaner-tasting coffee, tea, soups, and sauces because the impurities that cause off-flavors are removed. The remineralization stage ensures the water is not flat or acidic.',
    },
  ],
  commercial: [
    {
      question: 'What types of commercial businesses does PureWay OC serve?',
      answer:
        'PureWay OC serves restaurants, cafes, medical offices, dental practices, veterinary clinics, gyms, spas, and other commercial facilities in Orange County. Systems are custom-sized to match your water usage volume and specific water quality requirements.',
    },
    {
      question: 'Is commercial water filtration required for food service businesses?',
      answer:
        'California food service regulations require water used in food preparation to meet safety standards. Filtered water protects equipment from scale buildup, extending the life of espresso machines, ice makers, dishwashers, and steamers while ensuring consistent product quality.',
    },
    {
      question: 'How is commercial filtration different from residential systems?',
      answer:
        'Commercial systems are sized for higher flow rates and volume, often including pre-treatment for sediment and scale, specialized filtration stages for specific business needs, and remote monitoring options. PureWay OC assesses your specific usage and water quality before recommending a system.',
    },
  ],
  'well-water': [
    {
      question: 'What are common well water problems in Orange County?',
      answer:
        'Common Orange County well water issues include high iron content causing reddish staining, hydrogen sulfide causing rotten egg odor, hard water with elevated calcium and magnesium, bacterial contamination, and sediment. PureWay OC provides comprehensive testing before recommending a solution.',
    },
    {
      question: 'Do I need a permit to install well water filtration?',
      answer:
        'Installing water treatment equipment on your well water system typically does not require a permit in California, but any plumbing work must comply with local codes. PureWay OC handles all permits and code compliance as part of the installation process.',
    },
    {
      question: 'How often should well water be tested?',
      answer:
        'The EPA recommends testing private well water at least once a year for bacteria, nitrates, and any locally relevant contaminants. If you notice changes in taste, odor, or color, test immediately. PureWay OC provides free initial well water testing and ongoing monitoring recommendations.',
    },
  ],
  'free-water-testing': [
    {
      question: 'What does the free water test check for?',
      answer:
        'The free water test screens for water hardness (calcium and magnesium levels), chlorine and chloramine content, TDS (total dissolved solids), pH, and basic contaminant indicators. For a comprehensive lab analysis testing for PFAS, heavy metals, bacteria, and 100+ contaminants, we offer upgraded testing options.',
    },
    {
      question: 'Is there any obligation after the free water test?',
      answer:
        'No obligation at all. The free water test is designed to give you accurate information about your water quality. PureWay OC will explain the results and recommend solutions, but there is no pressure to purchase anything.',
    },
    {
      question: 'How long does the free water test take?',
      answer:
        'The on-site water test takes approximately 20-30 minutes. Our technician comes to your home, collects water samples from multiple taps, and provides results on the spot. A detailed report is provided along with personalized recommendations.',
    },
  ],
  maintenance: [
    {
      question: 'What does the lifetime warranty cover?',
      answer:
        'The PureWay OC lifetime warranty covers all housing components and labor for as long as you own the system. All repairs are 100% free. This includes system malfunctions, housing defects, and any installation-related issues. Filter replacements are scheduled separately.',
    },
    {
      question: 'How often do filters need to be replaced?',
      answer:
        'MicronGuard whole-house filters typically last 2-3 years depending on household water usage and local water quality. Reverse osmosis membrane replacement is typically every 2-5 years. PureWay OC tracks your system and contacts you when replacement is due.',
    },
    {
      question: 'What happens if my system stops working?',
      answer:
        'Contact PureWay OC immediately. Under the lifetime warranty, a technician will diagnose and repair your system at no charge. Same-day or next-day service is available for warranty repairs in Orange County.',
    },
  ],
}

// General FAQ for FAQ page
const generalFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes PureWay OC different from other water filtration companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PureWay OC systems are powered by Toppen Health Disruptor PAC technology with nearly 40 years of proven performance in the medical field. The same filtration trusted in hospitals and dental offices. No electricity, no backwashing, no service contracts, and zero maintenance until filter change. Lifetime warranty with 100% free repairs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Orange County water safe to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While Orange County water meets minimum EPA standards, it contains chloramine disinfection byproducts, hard minerals from the Colorado River supply, and trace contaminants including PFAS compounds. Orange County water typically measures 200-400 mg/L hardness (very hard to extremely hard). Whole-home filtration addresses these issues at every tap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does water filtration installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most installations are completed within 3-5 days of your initial consultation. Our licensed technicians handle all plumbing with professional copper pipe work. Installation begins with a free water test to assess your specific water quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What contaminants does PureWay OC remove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MicronGuard whole-house system removes PFAS, PFOA, PFOS, VOCs, chlorine, chloramine, lead, bacteria, viruses, cysts, arsenic, pharmaceuticals, microplastics, and more. Three-stage filtration achieves 99.99% contaminant removal while retaining healthy minerals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on PureWay OC systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PureWay OC offers a lifetime warranty on all system housing components with 100% free repairs for as long as you own the system. There are no service contracts or hidden fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does PureWay OC offer free water testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PureWay OC provides free water testing for Orange County homes with same-day response. The test checks for hardness, chlorine, TDS, pH, and contaminant indicators with no obligation to purchase.',
      },
    },
  ],
}

const SERVICE_SCHEMA_NAMES: Record<string, string> = {
  'water-softeners': 'Water Softener Installation in Orange County',
  'whole-house-filtration': 'Whole-House Water Filtration in Orange County',
  'reverse-osmosis': 'Reverse Osmosis Systems in Orange County',
  commercial: 'Commercial Water Filtration in Orange County',
  'well-water': 'Well Water Filtration in Orange County',
  'free-water-testing': 'Free Water Testing in Orange County',
  maintenance: 'Water Filtration Maintenance in Orange County',
}

function getBreadcrumbs(pathname: string) {
  if (pathname === '/') return null
  const segments = pathname.split('/').filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...segments.map((seg: string, i: number) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: seg
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c: string) => c.toUpperCase()),
        item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
      })),
    ],
  }
}

function getServiceSchema(pathname: string) {
  if (!pathname.startsWith('/services/')) return null
  const slug = pathname.replace('/services/', '').replace(/\/$/, '')
  const name =
    SERVICE_SCHEMA_NAMES[slug] ||
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c: string) => c.toUpperCase()) + ' in Orange County'

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: `Professional ${slug.replace(/-/g, ' ')} services for Orange County, CA homes and businesses. Contact PureWay OC at ${PHONE_DISPLAY} for a free estimate.`,
    url: `${SITE_URL}${pathname}`,
    dateModified: DATE_MODIFIED,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Orange County, CA',
    },
  }
}

function getServiceFAQSchema(pathname: string) {
  if (!pathname.startsWith('/services/')) return null
  const slug = pathname.replace('/services/', '').replace(/\/$/, '')
  const faqs = SERVICE_FAQS[slug]
  if (!faqs) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default function SchemaMarkup() {
  const pathname = usePathname() || '/'
  const schemas: object[] = []

  // Homepage: LocalBusiness + WebSite
  if (pathname === '/') {
    schemas.push(localBusinessSchema, websiteSchema)
  }

  // FAQ page: FAQPage schema
  if (pathname === '/faq') {
    schemas.push(generalFAQSchema)
  }

  // All interior pages: BreadcrumbList
  const breadcrumbs = getBreadcrumbs(pathname)
  if (breadcrumbs) schemas.push(breadcrumbs)

  // Service detail pages: Service + FAQPage schemas
  if (pathname.startsWith('/services/')) {
    const service = getServiceSchema(pathname)
    if (service) schemas.push(service)

    const faqSchema = getServiceFAQSchema(pathname)
    if (faqSchema) schemas.push(faqSchema)
  }

  if (schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

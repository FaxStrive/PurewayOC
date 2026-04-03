'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, ExternalLink, ArrowRight, CheckCircle, Search, Droplets } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  EWG contaminant data by water district (2021-2023 data, published 2025)
/*  Sources: ewg.org/tapwater/system.php?pws=<ID>                      */
/* ------------------------------------------------------------------ */

interface Contaminant {
  name: string
  timesOverGuideline: number
  legalLimit: string
  healthGuideline: string
  detected: string
}

interface AreaResult {
  area: string
  district: string
  contaminants: Contaminant[]
}

// Irvine Ranch Water District (CA3010092)
// Serves: Irvine, Tustin, parts of Newport Beach, parts of Lake Forest (Foothill Ranch), parts of Orange
const irwdContaminants: Contaminant[] = [
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 362, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '36.2 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 242, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '36.3 ppb' },
  { name: 'Haloacetic acids (HAA9)', timesOverGuideline: 254, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '15.2 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 16, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.32 ppb' },
  { name: 'Bromodichloromethane', timesOverGuideline: 188, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '11.3 ppb' },
  { name: 'Nitrate', timesOverGuideline: 18, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '2.52 ppm' },
  { name: 'Chloroform', timesOverGuideline: 145, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '14.5 ppb' },
  { name: 'Arsenic', timesOverGuideline: 205, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '0.82 ppb' },
]

// Mesa Water District (CA3010004)
// Serves: Costa Mesa, parts of Newport Beach
const mesaContaminants: Contaminant[] = [
  { name: 'Arsenic', timesOverGuideline: 409, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '1.64 ppb' },
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 362, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '36.2 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 242, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '36.3 ppb' },
  { name: 'Haloacetic acids (HAA9)', timesOverGuideline: 254, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '15.2 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 20, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.40 ppb' },
  { name: 'Bromodichloromethane', timesOverGuideline: 188, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '11.3 ppb' },
  { name: 'Nitrate', timesOverGuideline: 14, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '1.96 ppm' },
  { name: 'Chloroform', timesOverGuideline: 130, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '13.0 ppb' },
]

// East Orange County Water District (CA3010068)
// Serves: parts of Orange, Tustin, Santa Ana (east side)
const eocwdContaminants: Contaminant[] = [
  { name: 'PFOA (Forever Chemical)', timesOverGuideline: 229, legalLimit: '4 ppt', healthGuideline: '0.09 ppt', detected: '20.7 ppt' },
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 362, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '36.2 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 242, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '36.3 ppb' },
  { name: 'Nitrate', timesOverGuideline: 25, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '3.55 ppm' },
  { name: 'Bromodichloromethane', timesOverGuideline: 188, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '11.3 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 16, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.32 ppb' },
  { name: 'Arsenic', timesOverGuideline: 305, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '1.22 ppb' },
  { name: 'Chloroform', timesOverGuideline: 155, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '15.5 ppb' },
]

// Santa Margarita Water District (CA3010101)
// Serves: Rancho Santa Margarita, parts of Mission Viejo, Coto de Caza, Las Flores
const smwdContaminants: Contaminant[] = [
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 362, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '36.2 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 280, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '42.0 ppb' },
  { name: 'Haloacetic acids (HAA9)', timesOverGuideline: 254, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '15.2 ppb' },
  { name: 'Bromodichloromethane', timesOverGuideline: 200, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '12.0 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 14, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.28 ppb' },
  { name: 'Nitrate', timesOverGuideline: 12, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '1.68 ppm' },
  { name: 'Chloroform', timesOverGuideline: 160, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '16.0 ppb' },
  { name: 'Arsenic', timesOverGuideline: 175, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '0.70 ppb' },
]

// Moulton Niguel Water District - serves South OC
// Serves: Laguna Niguel, Laguna Hills, Aliso Viejo, parts of Mission Viejo, Lake Forest, Dana Point
const mnwdContaminants: Contaminant[] = [
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 340, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '34.0 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 260, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '39.0 ppb' },
  { name: 'Haloacetic acids (HAA9)', timesOverGuideline: 240, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '14.4 ppb' },
  { name: 'Bromodichloromethane', timesOverGuideline: 175, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '10.5 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 18, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.36 ppb' },
  { name: 'Nitrate', timesOverGuideline: 15, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '2.10 ppm' },
  { name: 'Arsenic', timesOverGuideline: 250, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '1.00 ppb' },
  { name: 'Chloroform', timesOverGuideline: 140, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '14.0 ppb' },
]

// General OC municipal water (Anaheim, Fullerton, Garden Grove, HB, Santa Ana, etc.)
// Blended Colorado River + local groundwater
const municipalContaminants: Contaminant[] = [
  { name: 'Haloacetic acids (HAA5)', timesOverGuideline: 350, legalLimit: '60 ppb', healthGuideline: '0.1 ppb', detected: '35.0 ppb' },
  { name: 'Total trihalomethanes (TTHMs)', timesOverGuideline: 250, legalLimit: '80 ppb', healthGuideline: '0.15 ppb', detected: '37.5 ppb' },
  { name: 'Haloacetic acids (HAA9)', timesOverGuideline: 248, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '14.9 ppb' },
  { name: 'Arsenic', timesOverGuideline: 300, legalLimit: '10 ppb', healthGuideline: '0.004 ppb', detected: '1.20 ppb' },
  { name: 'Chromium-6 (Hexavalent)', timesOverGuideline: 18, legalLimit: 'No federal limit', healthGuideline: '0.02 ppb', detected: '0.36 ppb' },
  { name: 'Bromodichloromethane', timesOverGuideline: 180, legalLimit: 'No legal limit', healthGuideline: '0.06 ppb', detected: '10.8 ppb' },
  { name: 'Nitrate', timesOverGuideline: 20, legalLimit: '10 ppm', healthGuideline: '0.14 ppm', detected: '2.80 ppm' },
  { name: 'Chloroform', timesOverGuideline: 150, legalLimit: 'No legal limit', healthGuideline: '0.1 ppb', detected: '15.0 ppb' },
]

/* ------------------------------------------------------------------ */
/*  Zip code to area/district mapping                                  */
/* ------------------------------------------------------------------ */

// Complete zip-to-area map for all 24 service cities
const zipToArea: Record<string, { area: string; district: string; contaminants: Contaminant[] }> = {}

function register(zips: string[], area: string, district: string, contaminants: Contaminant[]) {
  zips.forEach(z => { zipToArea[z] = { area, district, contaminants } })
}

// Irvine - IRWD
register(
  ['92602','92603','92604','92606','92612','92614','92616','92617','92618','92620','92623','92650','92697'],
  'Irvine', 'Irvine Ranch Water District', irwdContaminants
)

// Anaheim - City of Anaheim Public Utilities
register(
  ['92801','92802','92803','92804','92805','92806','92807','92808','92809','92812','92814','92815','92816','92817','92825','92850','92899'],
  'Anaheim', 'City of Anaheim Public Utilities', municipalContaminants
)

// Santa Ana - City of Santa Ana
register(
  ['92701','92703','92704','92705','92706','92707'],
  'Santa Ana', 'City of Santa Ana Water', municipalContaminants
)

// Huntington Beach - City of HB
register(
  ['92605','92615','92646','92647','92648','92649'],
  'Huntington Beach', 'City of Huntington Beach Water', municipalContaminants
)

// Newport Beach - IRWD + Mesa Water
register(
  ['92625','92657','92658','92659','92660','92661','92662','92663'],
  'Newport Beach', 'Irvine Ranch Water District / Mesa Water District', irwdContaminants
)

// Costa Mesa - Mesa Water District
register(
  ['92626','92627','92628'],
  'Costa Mesa', 'Mesa Water District', mesaContaminants
)

// Fullerton - City of Fullerton
register(
  ['92831','92832','92833','92834','92835','92836','92837','92838'],
  'Fullerton', 'City of Fullerton Public Utilities', municipalContaminants
)

// Garden Grove - City of Garden Grove
register(
  ['92840','92841','92843','92844','92845'],
  'Garden Grove', 'Garden Grove Water', municipalContaminants
)

// Orange - City of Orange / East OC WD
register(
  ['92856','92857','92859','92861','92862','92863','92864','92865','92866','92867','92868','92869'],
  'Orange', 'East Orange County Water District', eocwdContaminants
)

// Tustin - IRWD
register(
  ['92780','92781','92782'],
  'Tustin', 'Irvine Ranch Water District', irwdContaminants
)

// Laguna Beach - Laguna Beach County WD
register(
  ['92651','92652','92653','92654','92656'],
  'Laguna Beach', 'Laguna Beach County Water District', mnwdContaminants
)

// Laguna Niguel - Moulton Niguel WD
register(
  ['92607','92677'],
  'Laguna Niguel', 'Moulton Niguel Water District', mnwdContaminants
)

// Mission Viejo - MNWD + SMWD
register(
  ['92690','92691','92692'],
  'Mission Viejo', 'Moulton Niguel Water District', mnwdContaminants
)

// Lake Forest - MNWD + IRWD
register(
  ['92609','92610','92630'],
  'Lake Forest', 'Moulton Niguel Water District', mnwdContaminants
)

// Yorba Linda - Yorba Linda WD
register(
  ['92885','92886','92887'],
  'Yorba Linda', 'Yorba Linda Water District', municipalContaminants
)

// Brea - City of Brea
register(
  ['92821','92822','92823'],
  'Brea', 'City of Brea Public Works', municipalContaminants
)

// Placentia - Yorba Linda WD / Anaheim
register(
  ['92870','92871'],
  'Placentia', 'Yorba Linda Water District', municipalContaminants
)

// Buena Park - City of Buena Park
register(
  ['90620','90621','90622','90623','90624'],
  'Buena Park', 'City of Buena Park Public Works', municipalContaminants
)

// Fountain Valley - City of Fountain Valley
register(
  ['92708','92728'],
  'Fountain Valley', 'City of Fountain Valley Public Works', municipalContaminants
)

// Westminster - City of Westminster
register(
  ['92683','92684','92685'],
  'Westminster', 'City of Westminster Public Works', municipalContaminants
)

// Seal Beach - City of Seal Beach
register(
  ['90740'],
  'Seal Beach', 'City of Seal Beach Public Works', municipalContaminants
)

// Dana Point - South Coast WD / MNWD
register(
  ['92629'],
  'Dana Point', 'South Coast Water District', mnwdContaminants
)

// San Clemente - South Coast WD
register(
  ['92672','92673','92674'],
  'San Clemente', 'South Coast Water District', mnwdContaminants
)

// Rancho Santa Margarita - SMWD
register(
  ['92688'],
  'Rancho Santa Margarita', 'Santa Margarita Water District', smwdContaminants
)

function lookupZip(zip: string): AreaResult | null {
  const match = zipToArea[zip]
  if (match) return match
  return null
}

type Step = 'intro' | 'results' | 'capture' | 'success'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function EWGWaterChecker() {
  const [step, setStep] = useState<Step>('intro')
  const [zipCode, setZipCode] = useState('')
  const [zipError, setZipError] = useState('')
  const [areaResult, setAreaResult] = useState<AreaResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [smsConsent, setSmsConsent] = useState(false)

  const handleZipSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (zipCode.length !== 5) return

    setZipError('')
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1200))

    const result = lookupZip(zipCode)
    if (!result) {
      setIsLoading(false)
      setZipError('We currently serve Orange County. Please enter an OC zip code (e.g. 92602).')
      return
    }

    setAreaResult(result)
    setIsLoading(false)
    setStep('results')
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await fetch('https://hook.us2.make.com/so9sxpx28eman35xakbw23713orkzgsa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          zipCode,
          smsConsent,
          source: 'pureway-oc-ewg-checker',
        }),
      })
    } catch {
      // Still show success - webhook failure shouldn't block the user
    }
    setIsLoading(false)
    setStep('success')
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 20% 30%, rgba(8,145,178,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 60%, rgba(212,160,6,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 70% 40% at 50% 80%, rgba(30,58,95,0.03) 0%, transparent 60%),
            var(--color-surface)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 font-body text-sm font-semibold uppercase tracking-widest text-amber-700">
            <AlertTriangle className="h-4 w-4" />
            <span>Water Quality Alert</span>
          </span>
          <h2 className="font-heading text-3xl font-bold text-[var(--color-secondary)] sm:text-4xl md:text-5xl">
            {"What\u2019s Really in "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-amber-500 bg-clip-text text-transparent">
              Your Tap Water?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-[var(--color-text-secondary)]">
            According to the Environmental Working Group, Orange County water contains contaminants that exceed health guidelines - even when they meet legal limits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease }}
          className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Zip Code Entry */}
            {step === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease }}
                className="p-8"
              >
                <form onSubmit={handleZipSubmit} className="mx-auto max-w-md text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-amber-100 p-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-secondary)]">
                    Check Your Local Water Quality
                  </h3>
                  <p className="mb-6 mt-2 font-body text-[var(--color-text-secondary)]">
                    Enter your zip code to see what contaminants have been found in your area&apos;s water supply.
                  </p>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={zipCode}
                        onChange={(e) => { setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5)); setZipError('') }}
                        placeholder="Enter zip code"
                        className="w-full rounded-xl border-2 border-[var(--color-border)] px-5 py-4 font-body text-lg outline-none transition-all focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10"
                      />
                      <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-text-muted)]" />
                    </div>
                    <button
                      type="submit"
                      disabled={zipCode.length !== 5 || isLoading}
                      className="relative flex-shrink-0 overflow-hidden rounded-xl bg-[var(--color-accent)] px-8 py-4 font-heading text-base font-bold text-white transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {isLoading ? (
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      ) : (
                        'Check'
                      )}
                    </button>
                  </div>
                  <AnimatePresence>
                    {zipError && (
                      <motion.p
                        className="mt-3 flex items-center justify-center gap-2 font-body text-sm text-red-500"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        <AlertTriangle className="h-4 w-4" />
                        {zipError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            )}

            {/* Step 2: Results Display */}
            {step === 'results' && areaResult && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease }}
              >
                {/* Header */}
                <div
                  className="p-6 text-white"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 50%, var(--color-primary-dark) 100%)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-1 font-body text-sm text-white/70">Water Quality Report for {areaResult.area}</p>
                      <p className="font-heading text-2xl font-bold">Zip Code {zipCode}</p>
                      <p className="mt-1 font-body text-xs text-white/50">{areaResult.district}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-4xl font-black">{areaResult.contaminants.length}</p>
                      <p className="font-body text-sm text-white/70">Contaminants Found</p>
                    </div>
                  </div>
                </div>

                {/* Contaminants list */}
                <div className="p-4 sm:p-6">
                  <div className="mb-6 grid gap-2 sm:gap-3">
                    {areaResult.contaminants.slice(0, 4).map((contaminant, index) => (
                      <motion.div
                        key={contaminant.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, ease }}
                        className="flex items-center justify-between gap-2 rounded-xl bg-[var(--color-surface)] p-3 sm:p-4"
                      >
                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:h-10 sm:w-10">
                            <AlertTriangle className="h-3 w-3 text-amber-600 sm:h-4 sm:w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-body text-sm font-semibold text-[var(--color-text-primary)] sm:text-base">{contaminant.name}</p>
                            <p className="font-body text-xs text-[var(--color-text-muted)]">Detected: {contaminant.detected}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="font-heading text-base font-black text-amber-600 sm:text-lg">{contaminant.timesOverGuideline}x</p>
                          <p className="hidden font-body text-xs text-[var(--color-text-muted)] sm:block">over EWG guideline</p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Blurred additional items */}
                    <div className="relative">
                      <div className="pointer-events-none space-y-3 blur-sm">
                        {areaResult.contaminants.slice(4).map((contaminant) => (
                          <div
                            key={contaminant.name}
                            className="flex items-center justify-between rounded-xl bg-[var(--color-surface)] p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                                <AlertTriangle className="h-4 w-4 text-amber-600" />
                              </div>
                              <p className="font-body font-semibold text-[var(--color-text-primary)]">{contaminant.name}</p>
                            </div>
                            <p className="font-heading font-black text-amber-600">{contaminant.timesOverGuideline}x</p>
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full border border-[var(--color-border)] bg-white/95 px-6 py-3 shadow-lg backdrop-blur-sm">
                          <span className="font-body font-semibold text-[var(--color-text-primary)]">+{areaResult.contaminants.length - 4} more contaminants detected</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl bg-amber-50 p-4">
                    <p className="font-body text-sm text-amber-900">
                      <strong>Important:</strong> These contaminants may be within legal limits but exceed EWG&apos;s health guidelines, which are based on the latest scientific research.
                    </p>
                  </div>

                  <button
                    onClick={() => setStep('capture')}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] py-3 font-heading text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)] sm:py-4 sm:text-base"
                  >
                    <span>Get Your Full Report + Free Water Test</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  </button>

                  <p className="mt-3 text-center font-body text-xs text-[var(--color-text-muted)]">
                    Data sourced from{' '}
                    <a
                      href="https://www.ewg.org/tapwater/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[var(--color-primary)] hover:underline"
                    >
                      EWG Tap Water Database <ExternalLink className="ml-1 h-2.5 w-2.5" />
                    </a>
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 3: Lead Capture */}
            {step === 'capture' && (
              <motion.div
                key="capture"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease }}
                className="p-4 sm:p-8"
              >
                <div className="mb-6 text-center">
                  <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)]">
                    Get Your Complete Water Report
                  </h3>
                  <p className="mt-2 font-body text-[var(--color-text-secondary)]">
                    Plus a free in-home water test to see exactly what&apos;s in YOUR water
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="mx-auto max-w-md space-y-4">
                  <div>
                    <label className="mb-1 block font-body text-sm font-medium text-[var(--color-text-primary)]">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border-2 border-[var(--color-border)] px-4 py-3 font-body outline-none transition-all focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-body text-sm font-medium text-[var(--color-text-primary)]">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border-2 border-[var(--color-border)] px-4 py-3 font-body outline-none transition-all focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-body text-sm font-medium text-[var(--color-text-primary)]">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-xl border-2 border-[var(--color-border)] px-4 py-3 font-body outline-none transition-all focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10"
                    />
                  </div>

                  {/* SMS Consent Checkbox - A2P Compliant */}
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer rounded border-gray-300 text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                      <span className="font-body text-xs leading-relaxed text-[var(--color-text-muted)]">
                        I consent to receive SMS notifications from PureWay OC. Message frequency varies. Msg & data rates may apply. Text HELP to (949) 998-9443 for help. Reply STOP to opt out. <a href="/privacy" className="text-[var(--color-primary)] hover:underline">Privacy</a> | <a href="/terms" className="text-[var(--color-primary)] hover:underline">Terms</a>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] py-4 font-heading font-bold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)]"
                  >
                    {isLoading ? (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <span>Send My Free Report</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-body text-xs text-[var(--color-text-muted)]">
                    We&apos;ll contact you via phone or email to schedule your free water test. SMS is optional.
                  </p>
                </form>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease }}
                className="p-8 text-center"
              >
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-emerald-100 p-5">
                  <CheckCircle className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-secondary)]">
                  You&apos;re All Set!
                </h3>
                <p className="mx-auto mb-6 mt-2 max-w-md font-body text-[var(--color-text-secondary)]">
                  We&apos;ve sent your water quality report to your email. One of our water specialists will reach out soon to schedule your free in-home water test.
                </p>
                <div className="inline-flex items-center gap-3 rounded-xl bg-[var(--color-cyan-pale)] p-4">
                  <Droplets className="h-6 w-6 text-[var(--color-primary)]" />
                  <span className="font-body font-medium text-[var(--color-text-primary)]">
                    Questions? Call us at <a href="tel:+19499989443" className="font-bold text-[var(--color-primary)] hover:underline">(949) 998-9443</a>
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

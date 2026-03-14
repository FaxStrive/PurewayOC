'use client'

const certifications = [
  'WQA Certified',
  'NSF-42',
  'NSF-53',
  'NSF-55',
  'CSA Certified',
  'HomeAdvisor',
  'EPA Recognized',
]

export default function CertBadges() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      style={{ background: 'var(--color-secondary)' }}
    >
      {/* Decorative accent line */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
          opacity: 0.06,
        }}
      />

      {/* Marquee wrapper */}
      <div className="cert-marquee-wrapper relative flex overflow-hidden">
        <div className="cert-marquee-track flex shrink-0 items-center gap-10 md:gap-14">
          {certifications.map((cert, i) => (
            <span
              key={`a-${i}`}
              className="whitespace-nowrap text-sm md:text-base font-semibold font-body text-white/80 tracking-wide uppercase transition-transform duration-200 hover:scale-105 hover:text-white cursor-default select-none"
            >
              {cert}
            </span>
          ))}
        </div>
        <div
          className="cert-marquee-track flex shrink-0 items-center gap-10 md:gap-14"
          aria-hidden
        >
          {certifications.map((cert, i) => (
            <span
              key={`b-${i}`}
              className="whitespace-nowrap text-sm md:text-base font-semibold font-body text-white/80 tracking-wide uppercase transition-transform duration-200 hover:scale-105 hover:text-white cursor-default select-none"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee keyframes */}
      <style jsx>{`
        .cert-marquee-wrapper:hover .cert-marquee-track {
          animation-play-state: paused !important;
        }
        .cert-marquee-track {
          animation: cert-scroll 30s linear infinite;
        }
        @keyframes cert-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}

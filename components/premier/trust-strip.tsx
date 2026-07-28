import Image from 'next/image'
import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const ORGS = [
  {
    name: 'Google',
    src: '/logos/google.webp',
    width: 1440,
    height: 474,
    className: 'max-h-10 max-w-[9.5rem] sm:max-w-[10.5rem]',
  },
  {
    name: 'Toyota of Orlando',
    src: '/logos/toyota-of-orlando.webp',
    width: 355,
    height: 119,
    className: 'max-h-11 max-w-[8.8rem] sm:max-w-[9.8rem]',
  },
  {
    name: 'Bank of America Merrill Lynch',
    src: '/logos/merrill.webp',
    width: 1728,
    height: 494,
    className: 'max-h-10 max-w-[9.8rem] sm:max-w-[11rem]',
  },
  {
    name: 'Fortinet',
    src: '/logos/fortinet.webp',
    width: 628,
    height: 72,
    className: 'max-h-8 max-w-[9.4rem] sm:max-w-[10.4rem]',
  },
  {
    name: 'Zurich',
    src: '/logos/zurich.webp',
    width: 1595,
    height: 369,
    className: 'max-h-10 max-w-[9.5rem] sm:max-w-[10.7rem]',
  },
  {
    name: 'LA Times',
    src: '/logos/la-times.webp',
    width: 325,
    height: 42,
    className: 'max-h-8 max-w-[9.2rem] sm:max-w-[10rem]',
  },
  {
    name: 'The Clorox Company',
    src: '/logos/clorox.webp',
    width: 924,
    height: 201,
    className: 'max-h-10 max-w-[10.2rem] sm:max-w-[11.4rem]',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal x={-32}>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] sm:text-4xl">
            Trusted by teams that make hard legal choices.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4" gap={0.06}>
          {ORGS.map((org) => (
            <StaggerItem key={org.name} x={-16} y={14}>
              <span className="group relative flex h-20 items-center justify-center overflow-hidden border border-line-dark/55 bg-ivory/[0.025] px-5 transition duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-ivory/[0.055] hover:shadow-[0_20px_50px_rgba(26,31,37,0.28)]">
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-gold/12 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
                <Image
                  src={org.src}
                  alt={org.name}
                  width={org.width}
                  height={org.height}
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 12vw"
                  className={`relative z-10 h-auto w-auto object-contain opacity-70 transition duration-500 group-hover:opacity-95 ${org.className}`}
                />
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 flex flex-col gap-8 border-t border-line-dark/40 pt-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal x={-24}>
            <p className="max-w-xl text-balance font-serif text-2xl font-medium leading-snug tracking-[-0.01em] text-ivory sm:text-3xl">
              Turn Best Lawyers recognition into greater market visibility.
            </p>
          </Reveal>
          <Reveal delay={0.1} x={24}>
            <CtaButton variant="gold" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

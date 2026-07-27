'use client'

import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const ORGS = [
  'Google',
  'Toyota of Orlando',
  'Bank of America Merrill Lynch',
  'Fortinet',
  'Zurich',
  'LA Times',
  'The Clorox Company',
]

export function TrustStrip() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal x={-32}>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-light leading-[1.1] tracking-[-0.02em] sm:text-4xl">
            Trusted by teams that make hard legal choices.
          </h2>
        </Reveal>

        <Stagger className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-7 sm:gap-x-14" gap={0.06}>
          {ORGS.map((org) => (
            <StaggerItem key={org} x={-16} y={14}>
              <span className="font-serif text-xl tracking-tight text-ivory/60 transition-colors sm:text-2xl">
                {org}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 flex flex-col gap-8 border-t border-line-dark/40 pt-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal x={-24}>
            <p className="max-w-xl text-balance font-serif text-2xl font-light leading-snug tracking-[-0.01em] text-ivory sm:text-3xl">
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

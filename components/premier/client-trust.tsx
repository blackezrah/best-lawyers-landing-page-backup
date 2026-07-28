'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const SEQUENCE = [
  {
    index: '01',
    nav: 'Aronberg Goldgehn',
    quote:
      'Best Lawyers is more than a directory we glance at. It is a trusted reference we use when reviewing lawyers and law firms.',
    attribution: 'Aronberg Goldgehn',
  },
  {
    index: '02',
    nav: 'Banner Metals Group',
    quote:
      'Best Lawyers and Best Law Firms do not make the decision for us. They help us identify and narrow the legal partners we consider.',
    attribution: 'Banner Metals Group, Inc.',
  },
  {
    index: '03',
    nav: 'ABG Lab',
    quote:
      'The rankings do not decide whom we hire. They help determine which lawyers receive a closer look.',
    attribution: 'ABG Lab, LLC',
  },
]

export function ClientTrust() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const current = SEQUENCE[active]

  return (
    <section id="client-trust" className="scroll-mt-24 bg-parchment py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-md">
            <Reveal x={-32}>
              <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
                Where clients find lawyers they can trust.
              </h2>
            </Reveal>
            <Reveal delay={0.08} x={-24}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Best Lawyers gives clients the clarity they need to make a confident choice.
              </p>
            </Reveal>
            <Reveal delay={0.16} x={-18}>
              <div className="mt-9">
                <CtaButton variant="ink" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex flex-col" x={40}>
            <div className="relative min-h-[15rem] border-t border-line pt-10">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.index}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -16 }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="text-balance text-2xl font-normal leading-snug tracking-tight text-ink sm:text-[2rem] sm:leading-[1.25]">
                    {current.quote}
                  </blockquote>
                  <figcaption className="mt-7 text-base font-medium tracking-tight text-ink/70">
                    {current.attribution}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Restrained inline indices (not boxed) */}
            <div
              role="tablist"
              aria-label="Client testimonials"
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
            >
              {SEQUENCE.map((item, i) => (
                <button
                  key={item.index}
                  role="tab"
                  aria-selected={i === active}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group flex items-baseline gap-3 text-left"
                >
                  <span
                    className={cn(
                      'font-serif text-sm tabular-nums transition-colors',
                      i === active ? 'text-coral' : 'text-ink/35',
                    )}
                  >
                    {item.index}
                  </span>
                  <span
                    className={cn(
                      'text-sm font-medium tracking-tight transition-colors',
                      i === active ? 'text-ink' : 'text-ink/40 group-hover:text-ink/70',
                    )}
                  >
                    {item.nav}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { CtaButton } from './cta-button'

const STEPS = [
  {
    number: '1',
    title: 'Select the Market',
    body: 'Choose the metro and practice area aligned with the firm’s clearest commercial priority.',
  },
  {
    number: '2',
    title: 'Confirm Recognition',
    body: 'Best Lawyers confirms current eligibility for the chosen result set.',
  },
  {
    number: '3',
    title: 'Check Availability',
    body: 'The team checks whether the available allocation remains open.',
  },
  {
    number: '4',
    title: 'Activate Placement',
    body: 'Complete setup and approval; the listing moves into the Premier tier ahead of organic results.',
  },
]

const EASE_OUT = [0.22, 1, 0.36, 1] as const

export function MarketTargeting() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.32 })
  const active = Boolean(inView)
  const stepStartDelay = reduce ? 0 : 0.92
  const stepDelay = reduce ? 0 : 0.34
  const ctaDelay = stepStartDelay + STEPS.length * stepDelay + (reduce ? 0 : 0.34)

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-32 text-ivory sm:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(184,136,62,0.07),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_42%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <motion.h2
            className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] sm:text-6xl"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.72, ease: EASE_OUT }}
          >
            Choose where the position matters most.
          </motion.h2>
          <motion.p
            className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-ivory/72"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : 0.36, ease: EASE_OUT }}
          >
            One metro. One practice area. One choice about where your earned distinction should appear first.
          </motion.p>
        </div>

        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-line-dark/70 lg:block" />
          <motion.div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px origin-left bg-gold-light lg:block"
            initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 0.85 : 0 }}
            animate={active ? { scaleX: 1, opacity: 0.85 } : {}}
            transition={{ duration: reduce ? 0 : 2.05, delay: reduce ? 0 : 0.74, ease: EASE_OUT }}
            style={{ width: 'calc(100% - 3rem)' }}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, index) => {
              const delay = stepStartDelay + index * stepDelay

              return (
                <motion.article
                  key={step.title}
                  className="group relative border-l border-line-dark/55 pl-8 lg:border-l-0 lg:pl-0"
                  initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
                  animate={active ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: reduce ? 0 : 0.62, delay, ease: EASE_OUT }}
                >
                  <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-line-dark/70 lg:hidden" />
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-0 top-0 w-px origin-top bg-gold-light lg:hidden"
                    initial={{ scaleY: reduce ? 1 : 0, opacity: reduce ? 0.85 : 0 }}
                    animate={active ? { scaleY: 1, opacity: 0.85 } : {}}
                    transition={{ duration: reduce ? 0 : 0.8, delay, ease: EASE_OUT }}
                    style={{ height: '100%' }}
                  />

                  <motion.div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/70 bg-ink text-sm font-semibold tabular-nums text-gold-light shadow-[0_0_0_6px_rgba(40,46,58,1)] transition-colors duration-300 group-hover:border-gold-light group-hover:text-ivory"
                    initial={{
                      scale: reduce ? 1 : 0.92,
                      backgroundColor: '#282e3a',
                    }}
                    animate={
                      active
                        ? {
                            scale: 1,
                            backgroundColor: 'rgba(184,136,62,0.16)',
                          }
                        : {}
                    }
                    transition={{ duration: reduce ? 0 : 0.38, delay: delay + 0.12, ease: EASE_OUT }}
                  >
                    {step.number}
                  </motion.div>

                  <div className="mt-8 max-w-[18rem] lg:pr-4">
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-ivory transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-px w-12 origin-left bg-gold-light/60 transition-all duration-300 group-hover:w-24 group-hover:bg-gold-light"
                    />
                    <p className="mt-5 text-base leading-relaxed text-ivory/68 transition-colors duration-300 group-hover:text-ivory/86">
                      {step.body}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        <motion.div
          className="mt-16 rounded-lg border border-gold-light/25 bg-ink-soft/50 p-8 shadow-[0_20px_60px_rgba(0,0,0,.14)] sm:flex sm:items-center sm:justify-between sm:gap-10"
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.62, delay: ctaDelay, ease: EASE_OUT }}
        >
          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="mt-2 h-10 w-px bg-gold-light/70" />
            <div>
              <h3 className="font-serif text-3xl font-medium tracking-tight text-ivory">
                Checking availability does not reserve inventory.
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ivory/72">
                Waiting does not hold it.
              </p>
            </div>
          </div>

          <motion.div
            className="mt-8 shrink-0 sm:mt-0"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.48, delay: reduce ? 0 : ctaDelay + 0.18, ease: EASE_OUT }}
          >
            <CtaButton variant="gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

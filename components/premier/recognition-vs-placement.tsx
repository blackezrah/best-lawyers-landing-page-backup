'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

const STATS = [
  {
    pillar: 'Recognition',
    value: 'Approximately 5%',
    label: 'Of practicing U.S. attorneys earn Best Lawyers recognition through peer review',
  },
  {
    pillar: 'Placement',
    value: '5 Positions',
    label: 'Premier positions per metro and practice area within the recognized pool',
  },
  {
    pillar: 'Methodology',
    value: '13M+',
    label: 'Confidential peer evaluations behind the methodology',
    featured: true,
  },
]

const EASE_OUT = [0.22, 1, 0.36, 1] as const

export function RecognitionVsPlacement() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, margin: '-120px' })
  const active = Boolean(inView)
  const statStartDelay = reduce ? 0 : 1.82

  return (
    <section ref={sectionRef} className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <h2
            aria-label="Recognition is earned. Placement is selected."
            className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl"
          >
            <motion.span
              aria-hidden="true"
              className="block"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.68, ease: EASE_OUT }}
            >
              Recognition is earned.
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="block"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.68, delay: reduce ? 0 : 0.16, ease: EASE_OUT }}
            >
              Placement is selected.
            </motion.span>
          </h2>

          <div className="mt-10 space-y-6">
            {[
              'Best Lawyers recognition cannot be purchased.',
              'Premier Profile Placement does not alter peer review, award status, or methodology. It changes where an existing directory listing appears within the user experience.',
              'You are not buying a stronger credential. You are deciding whether the accolade you earned is encountered before the wider set.',
            ].map((copy, index) => (
              <motion.p
                key={copy}
                className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
                initial={{
                  opacity: reduce ? 1 : 0,
                  y: reduce ? 0 : 12 + index * 2,
                  filter: reduce ? 'blur(0px)' : 'blur(3px)',
                }}
                animate={active ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: reduce ? 0 : 0.62,
                  delay: reduce ? 0 : 0.42 + index * 0.18,
                  ease: EASE_OUT,
                }}
              >
                {copy}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="relative hidden h-12 md:block">
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-full origin-left bg-line"
              initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
              animate={active ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: reduce ? 0 : 0.82, delay: reduce ? 0 : 1.16, ease: EASE_OUT }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-full origin-left bg-gold-light/55"
              initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 0.55 : 0 }}
              animate={active ? { scaleX: 1, opacity: 0.55 } : {}}
              transition={{ duration: reduce ? 0 : 1.04, delay: reduce ? 0 : 1.24, ease: EASE_OUT }}
            />
            <div className="absolute inset-x-0 top-0 grid grid-cols-3">
              {STATS.map((item, index) => (
                <motion.span
                  key={item.pillar}
                  aria-hidden="true"
                  className="mx-auto h-12 w-px origin-top bg-gold-light/45"
                  initial={{ scaleY: reduce ? 1 : 0, opacity: reduce ? 0.45 : 0 }}
                  animate={active ? { scaleY: 1, opacity: 0.45 } : {}}
                  transition={{
                    duration: reduce ? 0 : 0.46,
                    delay: reduce ? 0 : 1.58 + index * 0.1,
                    ease: EASE_OUT,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {STATS.map((item, index) => (
              <motion.div
                key={item.pillar}
                className="relative border-t border-line pt-8 md:border-t-0 md:pt-0"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12, filter: reduce ? 'blur(0px)' : 'blur(4px)' }}
                animate={active ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: reduce ? 0 : 0.64,
                  delay: statStartDelay + index * (reduce ? 0 : 0.16),
                  ease: EASE_OUT,
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {item.pillar}
                </p>
                <p
                  className={
                    item.featured
                      ? 'mt-5 font-serif text-6xl font-medium leading-none tracking-[-0.03em] text-gold-light'
                      : 'mt-5 whitespace-nowrap font-serif text-5xl font-medium leading-none tracking-tight text-gold-light'
                  }
                >
                  {item.value}
                </p>
                <span aria-hidden="true" className="mt-7 block h-px w-24 bg-gold-light/45" />
                <p className="mt-5 max-w-[19rem] text-base leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

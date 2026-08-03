'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

const COMPARISON = [
  {
    factor: 'Cost',
    paidSearch: 'Billed per click. Cost rises as competitors bid.',
    premier: 'One fixed investment for the contracted term.',
  },
  {
    factor: 'Search placement',
    paidSearch: 'Auction-dependent and never assured.',
    premier: 'Reserved placement ahead of organic results in the chosen geography and practice area.',
  },
  {
    factor: 'Management',
    paidSearch: 'Keywords, bids, creative, landing pages, and ongoing optimization.',
    premier: 'No daily bid management, ad creative rotation, or media optimization.',
  },
  {
    factor: 'After the spend',
    paidSearch: 'Attention stops when the campaign stops.',
    premier: 'The placement remains active through the term and continues supporting discovery and verification.',
  },
  {
    factor: 'Competitive effect',
    paidSearch: 'A competitor can outbid the campaign tomorrow.',
    premier: 'A secured Premier placement is unavailable to another eligible attorney for the term.',
  },
]

const STRATEGIC_VALUES = [
  {
    title: 'Market Defense',
    accent: 'shield',
    copy: 'Defend a flagship territory before an eligible competitor claims the earlier listing.',
  },
  {
    title: 'Practice Focus',
    accent: 'architecture',
    copy: 'Strengthen a high-value or strategically important practice area.',
  },
  {
    title: 'Referral Confidence',
    accent: 'network',
    copy: 'Give referred prospects and in-house teams independent proof at the moment of verification.',
  },
  {
    title: 'Operational Simplicity',
    accent: 'flow',
    copy: 'Claim a finite search opportunity without adding another advertising operation to manage.',
  },
]

const EASE_OUT = [0.22, 1, 0.36, 1] as const

function StrategicIllustration({ accent }: { accent: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 112"
      className="pointer-events-none absolute right-8 top-1/2 hidden h-20 w-36 -translate-y-1/2 text-gold-light opacity-[0.09] transition-opacity duration-300 group-hover:opacity-[0.18] md:block"
    >
      {accent === 'shield' && (
        <>
          <path
            d="M90 8L134 24V58C134 82 114 98 90 106C66 98 46 82 46 58V24L90 8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path d="M90 19V94M62 41H118M67 67H113" fill="none" stroke="currentColor" strokeWidth=".9" />
        </>
      )}
      {accent === 'architecture' && (
        <>
          <path d="M34 90H150M50 90V40M74 90V25M98 90V50M122 90V34" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <path d="M42 40L74 25L122 34L146 22" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M42 58H136M42 72H136" fill="none" stroke="currentColor" strokeWidth=".65" />
        </>
      )}
      {accent === 'network' && (
        <>
          <path d="M42 72L74 38L112 58L142 30M74 38L88 86L112 58" fill="none" stroke="currentColor" strokeWidth="1" />
          {[42, 72, 74, 38, 112, 58, 142, 30, 88, 86].map((value, index, points) =>
            index % 2 === 0 ? (
              <circle key={`${value}-${points[index + 1]}`} cx={value} cy={points[index + 1]} r="4" fill="none" stroke="currentColor" strokeWidth="1" />
            ) : null,
          )}
        </>
      )}
      {accent === 'flow' && (
        <>
          <path
            d="M30 72C58 42 82 96 112 62C126 46 138 37 154 34"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.1"
          />
          <path
            d="M30 48C58 24 82 64 110 44C128 31 138 22 154 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth=".75"
          />
          <path d="M145 14L158 19L148 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1" />
        </>
      )}
    </svg>
  )
}

export function TrustStrip() {
  const comparisonRef = useRef<HTMLElement | null>(null)
  const strategyRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(comparisonRef, { once: true, amount: 0.32 })
  const strategyInView = useInView(strategyRef, { once: true, amount: 0.32 })
  const active = Boolean(inView)
  const strategyActive = Boolean(strategyInView)
  const rowStartDelay = reduce ? 0 : 2.05
  const rowStep = reduce ? 0 : 0.34
  const finalRowDelay = rowStartDelay + (COMPARISON.length - 1) * rowStep
  const conclusionDelay = reduce ? 0 : finalRowDelay + 0.62
  const strategyStartDelay = reduce ? 0 : 0.82
  const strategyStep = reduce ? 0 : 0.42
  const strategyConclusionDelay = strategyStartDelay + STRATEGIC_VALUES.length * strategyStep + 0.34

  return (
    <>
      <section ref={comparisonRef} className="bg-parchment py-32 text-ink sm:py-40">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <motion.h2
              className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] sm:text-6xl"
              initial={{
                opacity: reduce ? 1 : 0,
                y: reduce ? 0 : 18,
                filter: reduce ? 'blur(0px)' : 'blur(5px)',
              }}
              animate={active ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: reduce ? 0 : 0.78, ease: EASE_OUT }}
            >
              Buying traffic isn&apos;t the same as owning the opportunity.
            </motion.h2>

            <motion.p
              className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : 0.54, ease: EASE_OUT }}
            >
              The useful comparison is not against a standard listing.
            </motion.p>

            <motion.p
              className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : 0.86, ease: EASE_OUT }}
            >
              It is the{' '}
              <motion.span
                className="relative inline-block text-ink"
                animate={active ? { color: '#282e3a' } : {}}
                transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 1.22, ease: EASE_OUT }}
              >
                fixed Premier field
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold-light"
                  initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 0.75 : 0 }}
                  animate={active ? { scaleX: 1, opacity: 0.75 } : {}}
                  transition={{ duration: reduce ? 0 : 0.62, delay: reduce ? 0 : 1.22, ease: EASE_OUT }}
                />
              </motion.span>{' '}
              against the recurring cost of buying comparable legal-search attention elsewhere.
            </motion.p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <div className="min-w-[48rem]" role="table" aria-label="Paid Search and Premier Profile Placement comparison">
              <motion.div
                aria-hidden="true"
                className="h-px origin-left bg-line"
                initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                animate={active ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 1.42, ease: EASE_OUT }}
              />

              <div role="rowgroup">
                <div role="row" className="grid grid-cols-[1fr_1.4fr_1.6fr] text-left text-sm text-ink">
                  {['Decision Factor', 'Paid Search', 'Premier Profile Placement'].map((header, index) => (
                    <motion.div
                      key={header}
                      role="columnheader"
                      className={
                        index === 0
                          ? 'py-4 pr-5 font-semibold'
                          : index === 1
                            ? 'px-5 py-4 font-semibold'
                            : 'py-4 pl-5 font-semibold'
                      }
                      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
                      animate={active ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: reduce ? 0 : 0.46,
                        delay: reduce ? 0 : 1.62 + index * 0.06,
                        ease: EASE_OUT,
                      }}
                    >
                      {header}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div role="rowgroup">
                {COMPARISON.map((row, index) => {
                  const delay = rowStartDelay + index * rowStep
                  const isFinal = index === COMPARISON.length - 1

                  return (
                    <motion.div
                      key={row.factor}
                      role="row"
                      className="group relative grid grid-cols-[1fr_1.4fr_1.6fr] text-sm transition-colors duration-300 hover:bg-gold-light/[0.045]"
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-px w-full origin-left bg-line"
                        initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                        animate={active ? { scaleX: 1, opacity: 1 } : {}}
                        transition={{ duration: reduce ? 0 : 0.54, delay: reduce ? 0 : delay - 0.08, ease: EASE_OUT }}
                      />

                      <motion.div
                        role="rowheader"
                        className="py-5 pr-5 align-top font-semibold text-ink/85 transition-colors duration-300 group-hover:text-ink"
                        initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -8 }}
                        animate={active ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: reduce ? 0 : 0.42, delay, ease: EASE_OUT }}
                      >
                        {row.factor}
                      </motion.div>

                      <motion.div
                        role="cell"
                        className="px-5 py-5 align-top leading-relaxed text-muted-foreground transition-colors duration-300"
                        initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -6 }}
                        animate={active ? { opacity: isFinal ? 0.62 : 1, x: 0 } : {}}
                        transition={{ duration: reduce ? 0 : 0.42, delay: reduce ? 0 : delay + 0.08, ease: EASE_OUT }}
                      >
                        {row.paidSearch}
                      </motion.div>

                      <motion.div
                        role="cell"
                        className="relative py-5 pl-6 pr-4 align-top leading-relaxed text-ink transition-colors duration-300 group-hover:bg-gold-light/[0.065]"
                        initial={{
                          opacity: reduce ? 1 : 0,
                          y: reduce ? 0 : 2,
                          backgroundColor: 'rgba(184,136,62,0)',
                        }}
                        animate={
                          active
                            ? {
                                opacity: 1,
                                y: 0,
                                backgroundColor: isFinal ? 'rgba(184,136,62,0.085)' : 'rgba(184,136,62,0.045)',
                              }
                            : {}
                        }
                        transition={{ duration: reduce ? 0 : 0.46, delay: reduce ? 0 : delay + 0.2, ease: EASE_OUT }}
                      >
                        <motion.span
                          aria-hidden="true"
                          className="absolute left-0 top-4 w-px bg-gold-light"
                          initial={{
                            height: reduce ? (isFinal ? 50 : 34) : 0,
                            opacity: reduce ? (isFinal ? 0.82 : 0.56) : 0,
                          }}
                          animate={active ? { height: isFinal ? 50 : 34, opacity: isFinal ? 0.82 : 0.56 } : {}}
                          transition={{ duration: reduce ? 0 : 0.36, delay: reduce ? 0 : delay + 0.22, ease: EASE_OUT }}
                        />
                        <span className={isFinal ? 'font-medium text-ink' : 'text-ink/88'}>{row.premier}</span>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          <motion.div
            className="mt-14 border-l border-gold-light/50 pl-6"
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -18 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.62, delay: conclusionDelay, ease: EASE_OUT }}
          >
            <h3 className="font-serif text-3xl font-medium tracking-tight text-ink">
              More than <span className="conversion-emphasis">$200,000 in modeled equivalent paid-search value</span>
            </h3>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              At the case study’s assumed average legal CPC of approximately $75, the annualized view volume of the average Premier listing represents more than $200,000 in modeled equivalent paid-search traffic.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This is a media-value comparison, not revenue or guaranteed return.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={strategyRef} className="relative overflow-hidden bg-ink py-32 text-ivory sm:py-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(184,136,62,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <motion.h2
              className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] sm:text-6xl"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
              animate={strategyActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.72, ease: EASE_OUT }}
            >
              More inquiries are not the only return.
            </motion.h2>
            <motion.p
              className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-ivory/72"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
              animate={strategyActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : 0.38, ease: EASE_OUT }}
            >
              The placement can support firm priorities that extend well beyond raw inquiry volume:
            </motion.p>
          </div>

          <div className="relative mt-16 max-w-5xl">
            <motion.span
              aria-hidden="true"
              className="absolute left-[0.55rem] top-2 bottom-2 w-px origin-top bg-gold-light/55 md:left-[1.05rem]"
              initial={{ scaleY: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
              animate={strategyActive ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: reduce ? 0 : 2.65, delay: reduce ? 0 : 0.68, ease: EASE_OUT }}
            />

            <div className="space-y-0">
              {STRATEGIC_VALUES.map((item, index) => {
                const delay = strategyStartDelay + index * strategyStep

                return (
                  <motion.article
                    key={item.title}
                    className="group relative grid gap-5 border-t border-line-dark/35 py-10 pl-11 transition-colors duration-300 first:border-t-0 hover:border-gold-light/35 md:grid-cols-[15rem_1fr] md:gap-16 md:pl-20"
                    initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
                    animate={strategyActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: reduce ? 0 : 0.64, delay, ease: EASE_OUT }}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute left-0 top-12 h-5 w-5 rounded-full border border-gold-light/60 bg-ink md:left-2"
                      initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                      animate={strategyActive ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: reduce ? 0 : 0.34, delay: delay + 0.08, ease: EASE_OUT }}
                    />

                    <div className="relative">
                      <h3 className="font-serif text-2xl font-medium tracking-tight text-ivory transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-4 block h-px w-12 origin-left bg-gold-light/60 transition-all duration-300 group-hover:w-24 group-hover:bg-gold-light"
                      />
                    </div>

                    <div className="relative max-w-2xl pr-0 md:pr-48">
                      <p className="text-pretty text-xl leading-relaxed text-ivory/68 transition-colors duration-300 group-hover:text-ivory/88">
                        {item.copy}
                      </p>
                      <StrategicIllustration accent={item.accent} />
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>

          <motion.p
            className="mt-[4.5rem] max-w-4xl border-t border-gold-light/25 pt-10 font-serif text-2xl font-medium leading-snug tracking-tight text-ivory sm:text-3xl"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
            animate={strategyActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.72, delay: strategyConclusionDelay, ease: EASE_OUT }}
          >
            That is why this is a market decision, not a generic lead-generation purchase.
          </motion.p>
        </div>
      </section>
    </>
  )
}

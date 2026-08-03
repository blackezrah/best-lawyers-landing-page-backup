'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

const TESTIMONIALS = [
  {
    before: '“',
    emphasis: 'Peer review',
    after: ' is important when selecting outside counsel.”',
    quote: '“Peer review is important when selecting outside counsel.”',
    attribution: 'Google',
  },
  {
    before: '“I use Best Lawyers as an ',
    emphasis: 'initial screening tool',
    after: ' when I have a need for counsel in areas that I am unfamiliar with.”',
    quote: '“I use Best Lawyers as an initial screening tool when I have a need for counsel in areas that I am unfamiliar with.”',
    attribution: 'EPIC Brokers',
  },
  {
    before: '“Our organization uses Best Lawyers as a ',
    emphasis: 'vetting tool',
    after: ' for the selection of legal counsel.”',
    quote: '“Our organization uses Best Lawyers as a vetting tool for the selection of legal counsel.”',
    attribution: 'United HomeCare',
  },
]

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const HEADLINE =
  'Your other channels start the conversation. Premier Placement helps finish the evaluation.'
const HEADLINE_LINES = [
  'Your other channels',
  'start the conversation.',
  'Premier Placement',
  'helps finish',
  'the evaluation.',
] as const

function NetworkPattern({ active }: { active: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 1200 760"
      preserveAspectRatio="none"
      className="absolute inset-0 z-0 h-full w-full text-gold-light opacity-[0.16]"
    >
      <motion.g
        animate={active && !reduce ? { x: [0, 10, 0], y: [0, -8, 0] } : { x: 0, y: 0 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
      >
        <path
          d="M66 544C210 456 314 532 438 424C566 312 696 344 816 246C946 138 1046 180 1164 92"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".12"
          strokeWidth="1"
        />
        <path
          d="M-30 248C128 214 222 280 342 224C474 162 588 202 704 142C832 76 952 104 1110 42"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".08"
          strokeWidth="1"
        />
        <path
          d="M162 680C292 584 426 626 548 528C700 406 786 448 916 332C1014 244 1088 230 1230 194"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".08"
          strokeWidth="1"
        />
        {[
          [66, 544],
          [438, 424],
          [816, 246],
          [1164, 92],
          [342, 224],
          [704, 142],
          [548, 528],
          [916, 332],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" fillOpacity=".16" />
        ))}
      </motion.g>
    </motion.svg>
  )
}

function QuoteMark({ active, delay }: { active: boolean; delay: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className="absolute right-6 top-5 h-16 w-16 text-gold-light/40"
    >
      {[
        'M31 17C21 23 16 33 16 47C16 57 22 64 31 64C39 64 44 59 44 51C44 44 39 39 32 39C29 39 27 39 25 41C25 31 30 24 37 20',
        'M61 17C51 23 46 33 46 47C46 57 52 64 61 64C69 64 74 59 74 51C74 44 69 39 62 39C59 39 57 39 55 41C55 31 60 24 67 20',
      ].map((path) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 0.42 : 0 }}
          animate={active ? { pathLength: 1, opacity: 0.42 } : {}}
          transition={{ duration: reduce ? 0 : 1.1, delay, ease: EASE_OUT }}
        />
      ))}
    </motion.svg>
  )
}

export function BrandLogos() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.32 })
  const active = Boolean(inView)

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ivory py-32 text-ink sm:py-40"
    >
      <NetworkPattern active={active} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <h2
            aria-label={HEADLINE}
            className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] sm:text-6xl"
          >
            {HEADLINE_LINES.map((line, index) => (
              <motion.span
                key={line}
                aria-hidden="true"
                className="block"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : index * 0.08, ease: EASE_OUT }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : 0.48, ease: EASE_OUT }}
          >
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Some prospects begin on BestLawyers.com. Others arrive through a referral, search result, event, direct outreach, or AI-assisted answer.
            </p>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Origin varies. Verification does not.
            </p>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              When that check happens, an earlier Best Lawyers presence gives your credential more room to be seen.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-14">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => {
              const delay = reduce ? 0 : 0.72 + index * 0.18

              return (
                <motion.article
                  key={item.attribution}
                  initial={{
                    opacity: reduce ? 1 : 0,
                    y: reduce ? 0 : 20,
                    x: reduce ? 0 : 14,
                    rotate: reduce ? 0 : -0.15,
                  }}
                  animate={
                    active
                      ? {
                          opacity: 1,
                          y: 0,
                          x: index === 0 ? -4 : index === 1 ? -2 : 0,
                          rotate: 0,
                        }
                      : {}
                  }
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          borderColor: 'rgba(184,136,62,.42)',
                          boxShadow:
                            '0 18px 48px rgba(40,46,58,.12), 0 1px 0 rgba(255,255,255,.72) inset',
                        }
                  }
                  transition={{
                    opacity: { duration: reduce ? 0 : 0.72, delay, ease: EASE_OUT },
                    y: { duration: reduce ? 0 : 0.72, delay, ease: EASE_OUT },
                    x: { duration: reduce ? 0 : 0.72, delay, ease: EASE_OUT },
                    rotate: { duration: reduce ? 0 : 0.72, delay, ease: EASE_OUT },
                    borderColor: { duration: reduce ? 0 : 0.24, ease: EASE_OUT },
                    boxShadow: { duration: reduce ? 0 : 0.3, ease: EASE_OUT },
                  }}
                  className="group relative min-h-[16rem] overflow-hidden rounded-[18px] border border-line/80 bg-[#fffdf8] p-8 shadow-[0_12px_34px_rgba(40,46,58,.06)]"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,255,255,.95), rgba(250,248,242,.92)), radial-gradient(circle at 20% 0%, rgba(184,136,62,.08), transparent 32%)',
                  }}
                >
                  <QuoteMark active={active} delay={delay + 0.16} />
                  <figure className="relative z-10 flex h-full flex-col justify-between">
                    <blockquote
                      aria-label={item.quote}
                      className="text-pretty text-xl font-normal leading-snug text-ink/78 transition-colors duration-300 group-hover:text-ink"
                    >
                      <span aria-hidden="true">
                        {item.before}
                        <span className="transition-colors duration-300 group-hover:font-semibold group-hover:text-ink">
                          {item.emphasis}
                        </span>
                        {item.after}
                      </span>
                    </blockquote>
                    <figcaption className="mt-8 font-semibold tracking-tight text-gold-light transition-colors duration-300 group-hover:text-gold">
                      {item.attribution}
                    </figcaption>
                  </figure>
                </motion.article>
              )
            })}
          </div>

          <div aria-hidden="true" className="mx-auto mt-8 hidden max-w-[72%] items-center lg:flex">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className="flex flex-1 items-center last:flex-none">
                <motion.span
                  className="h-2 w-2 rounded-full bg-gold-light"
                  initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 0.7 : 0 }}
                  animate={active ? { scale: 1, opacity: 0.7 } : {}}
                  transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : 1.55 + dot * 0.14, ease: EASE_OUT }}
                />
                {dot < 2 && (
                  <motion.span
                    className="h-px flex-1 origin-left bg-gold-light/45"
                    initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 0.45 : 0 }}
                    animate={active ? { scaleX: 1, opacity: 0.45 } : {}}
                    transition={{ duration: reduce ? 0 : 0.72, delay: reduce ? 0 : 1.68 + dot * 0.18, ease: EASE_OUT }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

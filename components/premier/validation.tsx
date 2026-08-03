"use client"

import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Reveal } from "./reveal"

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const STATS = [
  { value: 222, suffix: "", label: "Average monthly page views" },
  { value: 203, suffix: "", label: "Average monthly unique visitors" },
  { value: 50, suffix: "%", label: "Of recorded interactions continued to the lawyer’s website" },
  { value: 38, suffix: "%", label: "Of recorded interactions were contact clicks from the profile" },
]

function CountUp({
  value,
  suffix,
  delay,
  start,
}: {
  value: number
  suffix: string
  delay: number
  start: boolean
}) {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!start) return

    if (reduce) {
      setDisplay(value)
      return
    }

    const controls = animate(0, value, {
      duration: 1.3,
      delay,
      ease: EASE_OUT,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [delay, reduce, start, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

function StatPanel({
  value,
  suffix,
  label,
  index,
  start,
}: {
  value: number
  suffix: string
  label: string
  index: number
  start: boolean
}) {
  const reduce = useReducedMotion()
  const delay = reduce ? 0 : index * 0.12

  return (
    <motion.article
      initial="hidden"
      animate={start ? "show" : "hidden"}
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              borderColor: "rgba(212,175,55,.38)",
              backgroundColor: "#282e3a",
              boxShadow:
                "0 14px 34px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.03) inset",
            }
      }
      variants={{
        hidden: {
          opacity: reduce ? 1 : 0,
          y: reduce ? 0 : 14,
          borderColor: "rgba(255,255,255,0)",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        },
        show: {
          opacity: 1,
          y: 0,
          borderColor: "rgba(255,255,255,.12)",
          boxShadow: "0 10px 26px rgba(0,0,0,.12)",
          transition: {
            borderColor: { duration: reduce ? 0 : 0.55, delay },
            boxShadow: { duration: reduce ? 0 : 0.55, delay: delay + 0.08 },
            default: { duration: reduce ? 0 : 0.55, delay, ease: EASE_OUT },
          },
        },
      }}
      transition={{ duration: 0.32, ease: EASE_OUT }}
      className="group relative z-10 flex min-h-[10.5rem] flex-col justify-between overflow-hidden rounded-lg border bg-ink-soft p-7"
    >
      <div>
        <motion.p
          className="font-serif text-4xl font-medium tracking-tight text-ivory transition-colors duration-300 group-hover:text-white"
          initial={{ opacity: reduce ? 1 : 0.78 }}
          animate={start ? { opacity: 1 } : { opacity: reduce ? 1 : 0.78 }}
          transition={{ duration: reduce ? 0 : 0.45, delay: delay + 0.22 }}
        >
          <CountUp value={value} suffix={suffix} delay={delay + 0.25} start={start} />
        </motion.p>
        <motion.span
          aria-hidden="true"
          className="mt-3 block h-px bg-gold/70"
          initial={{ scaleX: 0, opacity: reduce ? 1 : 0 }}
          animate={
            start
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }
          }
          transition={{ duration: reduce ? 0 : 0.55, delay: delay + 1.48, ease: EASE_OUT }}
          style={{ originX: 0 }}
        />
        <motion.p
          className="mt-4 text-sm leading-relaxed text-ivory/65"
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
          animate={start ? { opacity: 1, y: 0 } : { opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
          transition={{ duration: reduce ? 0 : 0.55, delay: delay + 0.58, ease: EASE_OUT }}
        >
          {label}
        </motion.p>
      </div>
    </motion.article>
  )
}

function BackgroundGraph({ start }: { start: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.svg
      data-validation-graph="measured-behavior"
      aria-hidden="true"
      viewBox="0 0 1200 520"
      className="absolute inset-x-0 top-24 z-0 h-[32rem] w-full text-gold opacity-[0.08]"
      preserveAspectRatio="none"
    >
      <g>
        <motion.path
          data-validation-graph-path="primary"
          d="M-48 462C105 438 192 410 318 356C456 296 540 322 660 244C786 162 870 178 972 104C1074 30 1152 48 1248 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1600 1600"
          initial={{ strokeDashoffset: reduce ? 0 : 1600, opacity: reduce ? 1 : 0 }}
          animate={
            start
              ? { strokeDashoffset: 0, opacity: 1 }
              : { strokeDashoffset: reduce ? 0 : 1600, opacity: reduce ? 1 : 0 }
          }
          transition={{ duration: reduce ? 0 : 8.5, delay: reduce ? 0 : 0.08, ease: "linear" }}
        />
        <motion.path
          data-validation-graph-path="secondary"
          d="M-48 500C128 462 224 428 356 382C492 334 570 348 704 286C850 218 938 226 1086 148C1158 110 1198 90 1248 76"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="1500 1500"
          initial={{ strokeDashoffset: reduce ? 0 : 1500, opacity: reduce ? 0.7 : 0 }}
          animate={
            start
              ? { strokeDashoffset: 0, opacity: 0.7 }
              : { strokeDashoffset: reduce ? 0 : 1500, opacity: reduce ? 0.7 : 0 }
          }
          transition={{ duration: reduce ? 0 : 9.25, delay: reduce ? 0 : 0.42, ease: "linear" }}
        />
      </g>
    </motion.svg>
  )
}

export function Validation() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.32 })
  const start = Boolean(inView)
  const conclusionDelay = reduce ? 0 : 2

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-32 text-ivory md:py-44">
      <BackgroundGraph start={start} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal x={-32} className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            Measured behavior, not vague exposure.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">
            In a 30-day GA4 sample across 119 live Premier profiles, the average listing received 222 views and 203 unique visitors.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <motion.span
            aria-hidden="true"
            className="absolute left-[11%] right-[11%] top-[3.6rem] z-0 hidden h-px origin-left bg-gold/18 lg:block"
            initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
            animate={start ? { scaleX: 1, opacity: 1 } : { scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 1.05, delay: 0.28, ease: EASE_OUT }}
          />
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((item, index) => (
              <StatPanel
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                index={index}
                start={start}
              />
            ))}
          </div>
        </div>

        <motion.p
          className="mt-12 max-w-3xl text-lg leading-relaxed text-ivory/78"
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
          animate={start ? { opacity: 1, y: 0 } : { opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
          transition={{ duration: reduce ? 0 : 0.65, delay: conclusionDelay, ease: EASE_OUT }}
        >
          Visitors kept moving.
        </motion.p>

        <Reveal delay={0.08} y={18} className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-ivory/78">
            Across the sample, <span className="conversion-emphasis">95% of recorded interactions</span> were a website visit, contact click, or phone tap.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

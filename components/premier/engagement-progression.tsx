"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { useState, type PointerEvent } from "react"
import { Reveal } from "./reveal"
import { CtaButton } from "./cta-button"

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const VALUE_PATHS = [
  {
    title: "Media Value",
    icon: "media",
    body: [
      "Reach active legal buyers without entering an auction for every visit or managing a paid-search campaign.",
      "The supporting case study models the annualized traffic of the average Premier directory presence at more than $200,000 in equivalent paid-search value under its stated CPC assumption.",
    ],
  },
  {
    title: "Search and AI Visibility",
    icon: "search",
    body: [
      "Maintain a complete, structured directory presence on an established legal platform, giving prospective clients, search engines, and AI-assisted research tools a clearer source for credentials, practice areas, and peer-reviewed distinction.",
    ],
  },
  {
    title: "Referral Conversion",
    icon: "referral",
    body: [
      "Referrals create awareness. Third-party proof helps turn that awareness into confidence.",
      "When a prospect checks the name they were given, your earned distinction is easier to encounter.",
    ],
  },
  {
    title: "Done for You",
    icon: "done",
    body: [
      "No keyword strategy. No bid management. No creative rotation. No daily media optimization.",
      "Choose the territory, confirm availability, and activate the placement.",
    ],
  },
]

type BenefitIconName = (typeof VALUE_PATHS)[number]["icon"]

function BenefitIcon({ name, index }: { name: BenefitIconName; index: number }) {
  const reduce = useReducedMotion()
  const baseDelay = reduce ? 0 : index * 0.12 + 0.18
  const draw = {
    hidden: { opacity: reduce ? 1 : 0, pathLength: reduce ? 1 : 0 },
    show: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: reduce ? 0 : 0.9,
        delay: baseDelay,
        ease: EASE_OUT,
      },
    },
  }
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  }

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="mb-7 h-12 w-12 text-gold/80 transition-colors duration-500 group-hover:text-gold"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
    >
      {name === "media" && (
        <>
          <motion.circle {...common} variants={draw} cx="24" cy="24" r="4" />
          <motion.path {...common} variants={draw} d="M15 24a9 9 0 0 1 18 0" />
          <motion.path {...common} variants={draw} d="M9 24a15 15 0 0 1 30 0" />
          <motion.path {...common} variants={draw} d="M18 31c3.8 2.7 8.2 2.7 12 0" />
        </>
      )}
      {name === "search" && (
        <>
          <motion.path {...common} variants={draw} d="M14 17l12-5 9 18-17 4-4-17Z" />
          <motion.path {...common} variants={draw} d="M18 34l8-22" />
          <motion.path {...common} variants={draw} d="M14 17l21 13" />
          <motion.circle {...common} variants={draw} cx="14" cy="17" r="3" />
          <motion.circle {...common} variants={draw} cx="26" cy="12" r="3" />
          <motion.circle {...common} variants={draw} cx="35" cy="30" r="3" />
          <motion.circle {...common} variants={draw} cx="18" cy="34" r="3" />
        </>
      )}
      {name === "referral" && (
        <>
          <motion.path {...common} variants={draw} d="M15 33c1.8-4 5-6 9-6s7.2 2 9 6" />
          <motion.circle {...common} variants={draw} cx="24" cy="17" r="5" />
          <motion.path {...common} variants={draw} d="M8 30c1.2-3 3.5-4.6 6.8-4.9" />
          <motion.path {...common} variants={draw} d="M40 30c-1.2-3-3.5-4.6-6.8-4.9" />
          <motion.circle {...common} variants={draw} cx="12" cy="20" r="3.5" />
          <motion.circle {...common} variants={draw} cx="36" cy="20" r="3.5" />
        </>
      )}
      {name === "done" && (
        <>
          <motion.path
            {...common}
            variants={draw}
            className="origin-center transition-transform duration-700 group-hover:rotate-45 motion-reduce:transition-none group-hover:motion-reduce:rotate-0"
            d="M24 9v5M24 34v5M13.4 13.4l3.5 3.5M31.1 31.1l3.5 3.5M9 24h5M34 24h5M13.4 34.6l3.5-3.5M31.1 16.9l3.5-3.5"
          />
          <motion.circle {...common} variants={draw} cx="24" cy="24" r="9" />
          <motion.path {...common} variants={draw} d="M20 24.4l2.7 2.7L28.8 21" />
        </>
      )}
    </motion.svg>
  )
}

function ValueCard({
  item,
  index,
  onHoverChange,
}: {
  item: (typeof VALUE_PATHS)[number]
  index: number
  onHoverChange: (active: boolean) => void
}) {
  const reduce = useReducedMotion()
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 22, mass: 0.5 })
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 22, mass: 0.5 })

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rawRotateX.set(y * -0.6)
    rawRotateY.set(x * 0.8)
  }

  function resetTilt() {
    rawRotateX.set(0)
    rawRotateY.set(0)
    onHoverChange(false)
  }

  return (
    <motion.article
      custom={index}
      variants={{
        hidden: {
          opacity: reduce ? 1 : 0,
          y: reduce ? 0 : 28,
          scale: reduce ? 1 : 0.985,
          filter: reduce ? "blur(0px)" : "blur(8px)",
        },
        show: (order: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 22,
            mass: 0.8,
            delay: reduce ? 0 : order * 0.12,
          },
        }),
      }}
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={resetTilt}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              backgroundColor: "#333a46",
              boxShadow:
                "0 18px 42px rgba(0,0,0,.22), 0 1px 0 rgba(255,255,255,.03) inset, 0 0 0 1px rgba(212,175,55,.15)",
            }
      }
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-lg border border-line-dark/60 bg-ink-soft p-7 transition-colors duration-500 will-change-transform"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-[140%] w-[140%] translate-x-0 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,.06),transparent)] transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[220%] motion-reduce:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-8 bg-gold/35 transition-all duration-500 group-hover:w-24 group-hover:bg-gold/70 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-8 w-px bg-gold/35 transition-all duration-500 group-hover:h-14 group-hover:bg-gold/70 motion-reduce:transition-none"
      />

      <BenefitIcon name={item.icon} index={index} />

      <h3 className="font-serif text-2xl font-medium tracking-tight text-ivory transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
        {item.title}
      </h3>
      {item.body.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 text-base leading-relaxed text-ivory/70 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-ivory/90 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
        >
          {paragraph}
        </p>
      ))}
    </motion.article>
  )
}

export function EngagementProgression() {
  const reduce = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="four-ways-it-pays" className="scroll-mt-24 relative overflow-hidden bg-ink py-32 text-ivory md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal x={-32} className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            One fixed investment. Four ways it pays.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">
            The investment does not rely on a single path to return. It supports audience access, modern discovery, referral verification, and operational efficiency.
          </p>
        </Reveal>

        <motion.div
          className="mt-14 grid grid-cols-1 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { gap: reduce ? 40 : 24, scale: reduce ? 1 : 0.96 },
            show: {
              gap: 40,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 24,
                mass: 0.9,
              },
            },
          }}
        >
          {VALUE_PATHS.map((item, index) => (
            <ValueCard
              key={item.title}
              item={item}
              index={index}
              onHoverChange={(active) => setHoveredCard(active ? index : null)}
            />
          ))}
        </motion.div>

        <Reveal delay={0.1} x={24} className="mt-12">
          <CtaButton
            variant="gold"
            className={
              hoveredCard === null
                ? undefined
                : "ring-1 ring-gold/30 shadow-[0_0_34px_rgba(212,175,55,0.24)]"
            }
          />
        </Reveal>
      </div>
    </section>
  )
}

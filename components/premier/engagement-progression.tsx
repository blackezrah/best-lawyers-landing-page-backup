"use client"

import { motion } from "motion/react"
import { Reveal } from "./reveal"
import { CtaButton } from "./cta-button"

const STAGES = [
  { icon: "search", label: "Search view", note: "Seen near the top" },
  { icon: "user", label: "Profile view", note: "Strong interest" },
  { icon: "globe", label: "Website visit", note: "Deeper review" },
  { icon: "phone", label: "Contact action", note: "New lead chance" },
]

function StageIcon({ name }: { name: string }) {
  if (name === "search") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    )
  }

  if (name === "user") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }

  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}

export function EngagementProgression() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal x={-32}>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            See how visibility turns into engagement.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">
            The goal is simple: help more ready buyers find your profile and take the next step.
          </p>
        </Reveal>
        <div className="mt-16 hidden md:block">
          <div className="relative flex items-stretch justify-between gap-4">
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[7%] right-[7%] top-[2.15rem] h-px origin-left bg-gradient-to-r from-gold/20 via-gold/50 to-gold"
            />
            {STAGES.map((stage, i) => {
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-1 flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-[4.3rem] w-[4.3rem] items-center justify-center rounded-full border border-gold/30 bg-ink shadow-[0_0_0_6px_rgba(26,31,37,1)]">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-gold/10">
                      <StageIcon name={stage.icon} />
                    </span>
                  </span>
                  <p className="mt-6 font-serif text-xl tracking-tight">{stage.label}</p>
                  <p className="mt-1.5 text-sm text-ivory/55">{stage.note}</p>
                  {i < STAGES.length - 1 && (
                    <span aria-hidden="true" className="absolute right-[-0.6rem] top-[1.9rem] text-coral/80">
                      &rarr;
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
        <div className="mt-14 flex flex-col md:hidden">
          {STAGES.map((stage, i) => {
            return (
              <Reveal key={stage.label} delay={i * 0.08} x={18} className="relative flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <StageIcon name={stage.icon} />
                  </span>
                  {i < STAGES.length - 1 && <span aria-hidden="true" className="mt-2 w-px flex-1 bg-gold/25" />}
                </div>
                <div className="pt-3">
                  <p className="font-serif text-xl tracking-tight">{stage.label}</p>
                  <p className="mt-1 text-sm text-ivory/55">{stage.note}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1} x={24} className="mt-16">
          <CtaButton variant="gold" />
        </Reveal>
      </div>
    </section>
  )
}

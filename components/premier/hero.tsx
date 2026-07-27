'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { CtaButton } from './cta-button'

const ANCHORS = ['Discovery', 'Consideration', 'Opportunity']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])

  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: visualY }}
          className="absolute inset-0"
        >
          <Image
            src="/best-lawyers-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/95 via-[38%] to-transparent to-[67%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-ink/20" />
        <motion.div
          style={{ y: glowY }}
          className="absolute right-0 top-0 h-full w-1/2 bg-gold/5 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 pb-24 pt-32 sm:px-8 lg:justify-center lg:pb-28 lg:pt-32">
        <div className="max-w-[48rem]">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="text-balance font-serif text-[2.7rem] font-light leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.75rem]"
          >
            The right position starts the right conversations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-ivory/70"
          >
            Premier Placement helps clients discover your practice earlier in their search for
            legal counsel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease }}
            className="mt-9"
          >
            <CtaButton variant="gold" />
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease }}
            className="mt-12 max-w-md border-l border-gold/40 pl-6"
          >
            <blockquote className="text-pretty text-base leading-relaxed text-ivory/80">
              Best Lawyers is not a resource we turn to only after a shortlist is built. They are
              among the places we start when reviewing a lawyer or firm.
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium tracking-tight text-ivory/60">
              Gorden, Wolf &amp; Carney, Chtd.
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-line-dark/40">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-3 divide-x divide-line-dark/40 px-5 sm:px-8">
          {ANCHORS.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-center py-5 first:justify-start first:pl-0 last:justify-end last:pr-0 sm:py-6"
            >
              <span className="font-serif text-base tracking-tight text-ivory/85 sm:text-lg">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

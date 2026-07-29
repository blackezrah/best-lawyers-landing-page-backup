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
      {/* Navy/charcoal gradient at the top to improve contrast behind the fixed header.
          Increased height so the fade reaches lower into the hero. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-30 h-56 sm:h-72">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/100 to-transparent" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-md:hidden">
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
            // Shift the image focal point down so the face is lower in the frame
            // (adjust the second value to move more/less: '50% 40%' etc.)
            style={{ objectPosition: '50% 35%' }}
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
            Be found first.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="mt-8 font-serif text-3xl font-semibold tracking-tight text-gold sm:text-4xl"
          >
            Premier Placement
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-ivory/85 sm:text-xl"
          >
            Be found first by high-intent prospective clients searching for a leading lawyer in your metro and practice area.
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
            transition={{ duration: 0.9, delay: 0.32, ease }}
            className="mt-14 max-w-2xl text-left text-ivory"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold/85">
              Client testimonial
            </p>
            <blockquote className="mt-5 text-2xl font-medium leading-[1.45] tracking-[-0.02em] text-ivory sm:text-[2.2rem]">
              “Premier Placement finally got our firm discovered by the right clients in the right markets.”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-gold/85 sm:text-base">
              Rookridge Law Firm
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

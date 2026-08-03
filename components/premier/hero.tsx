'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { CtaButton } from './cta-button'

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

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 pb-32 pt-40 sm:px-8 lg:justify-center lg:pb-36 lg:pt-40">
        <div className="max-w-[48rem]">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, ease }}
            className="text-balance font-serif text-[2.7rem] font-light leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.75rem]"
          >
            The right placement starts the right conversations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.12, ease }}
            className="mt-8 max-w-2xl text-[1.05rem] leading-[1.75] text-ivory/85 sm:text-xl"
          >
            Premier Profile Placement moves the attorney listing behind your Best Lawyers credential into <span className="conversion-emphasis">one of five placements</span> ahead of organic results for the chosen region and practice area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.18, ease }}
            className="mt-9"
          >
            <CtaButton variant="gold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.24, ease }}
            className="mt-12 max-w-2xl border-l border-gold/50 pl-6"
          >
            <h2 className="font-serif text-2xl font-medium leading-snug tracking-tight text-ivory sm:text-3xl">
              Every open allocation in your chosen geography will belong to a Best Lawyers honoree.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ivory/75">
              The only question is whether yours is among them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

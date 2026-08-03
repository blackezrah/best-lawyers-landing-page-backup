'use client'

import Image from "next/image"
import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { CtaButton } from "./cta-button"

const easeOut = [0.22, 1, 0.36, 1] as const

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.32 })
  const active = inView || reduce

  return (
    <>
      <section ref={sectionRef} className="relative min-h-[108svh] overflow-hidden bg-ink text-ivory max-md:min-h-[78svh]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.045),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(216,187,122,0.055),transparent_28%)]"
            initial={reduce ? false : { opacity: 0 }}
            animate={active ? { opacity: 1 } : undefined}
            transition={{ duration: reduce ? 0 : 2.8, delay: reduce ? 0 : 0.55, ease: easeOut }}
          />
          <motion.div
            className="absolute inset-x-[18%] top-[22%] h-px bg-gradient-to-r from-transparent via-gold-light/18 to-transparent"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: reduce ? 0 : 1.8, delay: reduce ? 0 : 1.1, ease: easeOut }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(40,46,58,0.22)_62%,rgba(40,46,58,0.72)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[108svh] max-w-5xl items-center justify-center px-6 py-40 text-center md:py-56 max-md:min-h-[78svh]">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="font-serif text-5xl leading-[1.1] tracking-tight text-balance md:text-7xl"
              initial={reduce ? false : { opacity: 0, y: 8, filter: "blur(8px)" }}
              animate={active ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
              transition={{ duration: reduce ? 0 : 1.55, delay: reduce ? 0 : 0.25, ease: easeOut }}
            >
              Your competitors don&apos;t need a better reputation.
              <br />
              They only need to move first.
            </motion.h2>
            <motion.div
              className="mt-12 flex justify-center"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 2.22, ease: easeOut }}
            >
              <span className="inline-flex flex-col items-stretch">
                <CtaButton variant="gold" />
                <motion.span
                  aria-hidden="true"
                  className="mt-4 block h-px w-full origin-left bg-gold-light/70"
                  initial={reduce ? false : { scaleX: 0, opacity: 0 }}
                  animate={active ? { scaleX: 1, opacity: 1 } : undefined}
                  transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 2.95, ease: easeOut }}
                />
              </span>
            </motion.div>
            <motion.p
              className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/60"
              initial={reduce ? false : { opacity: 0, filter: "blur(3px)" }}
              animate={active ? { opacity: 1, filter: "blur(0px)" } : undefined}
              transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 2.58, ease: easeOut }}
            >
              Availability is confirmed individually. Checking does not reserve or purchase a position.
            </motion.p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line-dark/60 bg-ink py-14 text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <a href="https://www.bestlawyers.com" target="_top" rel="noopener noreferrer" aria-label="Visit Best Lawyers">
            <Image
              src="/best-lawyers.svg"
              alt="Best Lawyers"
              width={720}
              height={144}
              className="h-auto w-[8.8rem]"
            />
          </a>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="https://www.bestlawyers.com/about" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">About</a>
            <a href="https://www.bestlawyers.com/methodology" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Methodology</a>
            <a href="https://www.bestlawyers.com/privacy-policy" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Privacy Policy</a>
            <a href="https://www.bestlawyers.com/cookie-policy" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Cookie Policy</a>
            <a href="https://www.bestlawyers.com/terms-and-conditions" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Terms and Conditions</a>
          </nav>

          <p className="text-xs tracking-tight text-ivory/50">© 2026 Best Lawyers. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'

const TOP_LOGOS = [
  { src: '/logos/google.webp', alt: 'Google' },
  { src: '/logos/toyota-of-orlando.webp', alt: 'Toyota of Orlando' },
  { src: '/logos/fortinet.webp', alt: 'Fortinet' },
  { src: '/logos/zurich.webp', alt: 'Zurich' },
]

const BOTTOM_LOGOS = [
  { src: '/logos/la-times.webp', alt: 'Los Angeles Times' },
  { src: '/logos/clorox.webp', alt: 'The Clorox Company' },
  { src: '/logos/merrill.webp', alt: 'Merrill' },
]

export function BrandLogos() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-1 shadow-[0_40px_120px_rgba(15,23,42,0.16)]">
          <div className="rounded-[2.5rem] bg-ink p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 28, scale: reduce ? 1 : 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {TOP_LOGOS.map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.9, y: reduce ? 0 : 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center rounded-3xl bg-ink/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-16 w-full items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={52}
                      className="max-h-16 w-auto object-contain"
                      priority={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-5 grid w-full max-w-4xl grid-cols-3 gap-4"
            >
              {BOTTOM_LOGOS.map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.9, y: reduce ? 0 : 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.32 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center rounded-3xl bg-ink/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-16 w-full items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={52}
                      className="max-h-16 w-auto object-contain"
                      priority={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
              <p className="mx-auto max-w-3xl text-base leading-8 text-ivory sm:text-lg">
                Peer review is important when selecting outside counsel.
                <span className="font-semibold text-gold"> - Google</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

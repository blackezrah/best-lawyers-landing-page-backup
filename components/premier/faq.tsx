"use client"

import { useState } from "react"
import { useRef } from "react"
import type { ReactNode } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react"
import { CtaButton } from "./cta-button"

type FaqItem = {
  question: string
  answer: ReactNode
}

const FAQS: FaqItem[] = [
  {
    question: "Is Premier Profile Placement a paid ranking?",
    answer: (
      <>
        <p>No.</p>
        <p>Best Lawyers recognition remains earned through peer review. Premier Placement does not create recognition or change an award.</p>
        <p>It moves an existing attorney listing into the limited Premier tier ahead of organic results for the selected region and practice area.</p>
      </>
    ),
  },
  {
    question: "How should we evaluate the cost?",
    answer: (
      <>
        <p>Evaluate the investment across four sources of value:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Audience access</li>
          <li>Search and AI discoverability</li>
          <li>Referral verification</li>
          <li>The absence of a campaign to manage</li>
        </ul>
        <p>The supporting case study also provides observed GA4 behavior from 119 live profiles and a modeled paid-search comparison.</p>
        <p>Your Best Lawyers representative can provide pricing and the supporting methodology for internal review.</p>
      </>
    ),
  },
  {
    question: "We rely on referrals. Why would we need this?",
    answer: (
      <>
        <p>Because referrals are still evaluated.</p>
        <p>Prospects and in-house teams use third-party sources to confirm reputation, experience, and fit. An earlier Best Lawyers presence makes the credential easier to find when that check happens.</p>
      </>
    ),
  },
  {
    question: "We already have enough work. Why would we buy more visibility?",
    answer: (
      <>
        <p>The value is not limited to increasing inquiry volume.</p>
        <p>Firms can use it to defend a priority territory, support a high-value practice, reinforce referral confidence, or prevent a qualified competitor from claiming the earlier listing first.</p>
      </>
    ),
  },
  {
    question: "Does this require another marketing workflow?",
    answer: (
      <>
        <p>There are no keywords, bids, ad creative, or daily media optimization to manage.</p>
        <p>Your directory information still needs to be accurate, and your Best Lawyers representative can confirm the setup and update process.</p>
      </>
    ),
  },
  {
    question: "Can we wait until the standard profile proves value?",
    answer: (
      <>
        <p>You can.</p>
        <p>Premier inventory is not held while you wait. If the market fills, the option to move into the Premier field is no longer available until inventory opens.</p>
      </>
    ),
  },
  {
    question: "Who can secure Premier Profile Placement?",
    answer: <p>Only attorneys currently recognized by Best Lawyers in the chosen region and practice area, subject to remaining availability.</p>,
  },
  {
    question: "What happens if our preferred market is full?",
    answer: <p>Best Lawyers can review another relevant metro or practice area where the attorney is recognized and the allocation remains available.</p>,
  },
  {
    question: "How do I present this to partners or a marketing committee?",
    answer: (
      <>
        <p>Your Best Lawyers representative can provide:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Market availability</li>
          <li>Pricing</li>
          <li>The performance case study</li>
          <li>The methodology behind the modeled media-value comparison</li>
        </ul>
        <p>This gives decision-makers a complete record for evaluating the investment.</p>
      </>
    ),
  },
]

export function Faq() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const inView = useInView(sectionRef, { once: true, amount: 0.32 })
  const active = Boolean(inView)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="scroll-mt-24 relative overflow-hidden bg-ink py-32 text-ivory md:py-44"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <motion.h2
            className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-6xl"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            What decision-makers usually ask.
          </motion.h2>
          <motion.p
            className="mt-8 max-w-sm text-pretty text-base leading-relaxed text-ivory/62 md:text-lg"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            These are the questions Best Lawyers is most often asked by firms evaluating Premier Profile Placement before they decide whether to check availability.
          </motion.p>
        </div>

        <div className="flex flex-col">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const buttonId = `faq-question-${index}`
            const itemDelay = reduce ? 0 : 0.34 + index * 0.045

            return (
              <motion.div
                key={item.question}
                className="group relative"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
                animate={active ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: reduce ? 0 : 0.5, delay: itemDelay, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(index)}
                  className={`flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl leading-snug tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light/50 focus-visible:ring-offset-4 focus-visible:ring-offset-ink md:text-2xl ${
                    isOpen ? "text-gold-light" : "text-ivory/82 hover:text-ivory"
                  }`}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-gold-light/70 text-gold-light"
                        : "border-ivory/18 text-ivory/50 group-hover:border-gold-light/45 group-hover:text-ivory/78"
                    }`}
                  >
                    <span className="absolute h-px w-3 bg-current transition-opacity duration-300" />
                    <span
                      className={`absolute h-3 w-px bg-current transition-all duration-300 ${
                        isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: reduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="space-y-4 pb-7 pr-10 text-base leading-relaxed text-ivory/68"
                        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 5, filter: reduce ? "blur(0px)" : "blur(3px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 2, filter: reduce ? "blur(0px)" : "blur(2px)" }}
                        transition={{ duration: reduce ? 0 : 0.28, delay: reduce ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <span
                  aria-hidden="true"
                  className={`block h-px transition-all duration-300 ${
                    isOpen
                      ? "w-full bg-gold-light/38"
                      : "w-[82%] bg-line-dark/60 group-hover:w-full group-hover:bg-gold-light/24"
                  }`}
                />
              </motion.div>
            )
          })}

          <motion.div
            className="mt-10 border-t border-line-dark/55 pt-8"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.86, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-2xl font-medium tracking-tight text-ivory">
              Still have questions?
            </p>
            <p className="mt-3 text-base leading-relaxed text-ivory/62">
              Talk with a Best Lawyers specialist.
            </p>
            <div className="mt-7">
              <CtaButton variant="gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

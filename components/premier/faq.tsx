"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Reveal, Stagger, StaggerItem } from "./reveal"
import { CtaButton } from "./cta-button"

const FAQS = [
  {
    question: "Who can get Premier Placement?",
    answer:
      "Premier Placement is available to lawyers who are currently recognized by Best Lawyers and have an eligible profile in the selected market and practice area. It does not create recognition, change tier rankings, or influence recognition outcomes. It adds priority visibility above standard directory listings. Eligibility and availability are confirmed before activation.",
  },
  {
    question: "How are markets and practice areas set?",
    answer:
      "Each placement is tied to one specific metro and one specific practice area, matching the search context prospective clients use when looking for counsel. Only five Premier positions are available per metro and practice area. You select the market and practice area you want to prioritize, and the Best Lawyers team confirms eligibility and availability.",
  },
  {
    question: "How fast can it go live?",
    answer:
      "Once eligibility, market availability, and the placement details are confirmed, the profile can move into its Premier position. Exact timing depends on final setup and approval, and your Best Lawyers representative will confirm the expected launch date.",
  },
  {
    question: "What if my first market is full?",
    answer:
      "If all Premier positions are already taken in your first-choice market and practice area, the Best Lawyers team can help evaluate another relevant metro, practice area, or search context that aligns with your objectives. No alternative placement should be selected without your approval.",
  },
  {
    question: "How do price, term, and renewal work?",
    answer:
      "Pricing and contract terms depend on the selected market, practice area, available inventory, and placement package. The exact price, term, and renewal conditions are provided before activation and documented in your agreement. Renewal is handled according to those agreed terms.",
  },
  {
    question: "Need help choosing the right market?",
    answer:
      "Share the metro, practice area, and visibility objective you want to prioritize. The Best Lawyers team can help you review eligibility, available inventory, and the search context that best supports your goals.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal x={-32}>
          <h2 className="font-serif text-4xl leading-[1.02] tracking-tight text-balance md:text-6xl">
            Clear answers.
            <br />
            No sales fog.
          </h2>
          <div className="mt-9">
            <CtaButton variant="gold" />
          </div>
        </Reveal>

        <Stagger className="flex flex-col" gap={0.06}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const buttonId = `faq-question-${index}`

            return (
            <StaggerItem key={item.question} x={24} y={14}>
              <div className="border-b border-line-dark/60">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl leading-snug tracking-tight text-ivory/90 transition-colors hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-4 focus-visible:ring-offset-ink md:text-2xl"
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-coral bg-coral text-ivory"
                        : "border-ivory/20 text-ivory/60 group-hover:border-coral group-hover:text-coral"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-10 text-base leading-relaxed text-ivory/68">
                        <p>{item.answer}</p>
                        {index === FAQS.length - 1 && (
                          <div className="mt-7">
                            <CtaButton variant="gold" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

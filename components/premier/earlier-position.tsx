"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { CtaButton } from "./cta-button"

export function EarlierPosition() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-parchment text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/be-seen-first.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-parchment from-0% via-parchment/96 via-[39%] to-transparent to-[67%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment/15 via-transparent to-parchment/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-md">
          <Reveal x={-32}>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink text-balance md:text-5xl">
              Be seen first.
              <br />
              Be considered first.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Premier Placement helps your profile stand out before buyers move down the list.
            </p>
            <p className="mt-6 max-w-md border-l-2 border-gold pl-5 font-serif text-xl italic leading-relaxed text-ink/80">
              Recognition establishes credibility. Placement expands visibility.
            </p>
            <div className="mt-9">
              <CtaButton variant="ink" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

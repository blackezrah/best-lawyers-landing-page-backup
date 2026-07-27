import Image from "next/image"
import { Reveal } from "./reveal"
import { CtaButton } from "./cta-button"

export function FinalCta() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory max-md:min-h-[70svh]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-md:hidden">
          <Image
            src="/Visibility-Shapes-Opps.webp"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/62" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/35" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl items-center justify-center px-6 py-24 text-center md:py-32 max-md:min-h-[70svh]">
          <Reveal y={34}>
            <h2 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-7xl">
              Visibility shapes opportunity.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70 md:text-xl">
              Help more prospective clients find your practice.
            </p>
            <div className="mt-10 flex justify-center">
              <CtaButton variant="gold" />
            </div>
            <p className="mt-10 font-serif text-3xl leading-none text-gold">→</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line-dark/60 bg-ink py-14 text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <p className="font-serif text-xl tracking-tight text-ivory">
            Best Lawyers<sup className="ml-[1px] align-super text-[0.5em] text-gold">&reg;</sup>
          </p>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["About", "Methodology", "Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-ivory/60 transition-colors hover:text-gold"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-xs tracking-tight text-ivory/50">© 2026 Best Lawyers. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

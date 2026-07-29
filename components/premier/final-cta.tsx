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
              Stand above your competition.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70 md:text-xl">
              Position your firm where high-intent prospective clients begin their search and make sure your profile is seen by the right audience.
            </p>
            <div className="mt-10 flex justify-center">
              <CtaButton variant="gold" />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line-dark/60 bg-ink py-14 text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <a href="https://www.bestlawyers.com" target="_top" rel="noopener noreferrer" aria-label="Visit Best Lawyers">
            <Image
              src="/best-lawyers-light-logo.webp"
              alt="Best Lawyers"
              width={434}
              height={88}
              className="h-auto w-[8.8rem]"
              // Brighten the footer logo so it reads white on transparent backgrounds.
              // Developer note: replace with an approved white logo file if available.
              style={{ filter: 'brightness(2) saturate(1.2)' }}
            />
          </a>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="https://www.bestlawyers.com/about" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">About</a>
            <a href="https://www.bestlawyers.com/methodology" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Methodology</a>
            <a href="https://www.bestlawyers.com/privacy-policy" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Privacy</a>
            <a href="https://www.bestlawyers.com/cookie-policy" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Cookies</a>
            <a href="https://www.bestlawyers.com/cookie-policy" target="_top" rel="noopener noreferrer" className="text-sm text-ivory/60 transition-colors hover:text-coral">Terms</a>
          </nav>

          <p className="text-xs tracking-tight text-ivory/50">© 2026 Best Lawyers. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

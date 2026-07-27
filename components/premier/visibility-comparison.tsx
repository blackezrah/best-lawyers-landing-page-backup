import Image from 'next/image'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const premierImage = '/premier.webp'

const premierAlt =
  'Best Lawyers search results with Julie Cooper’s Premier Placement profile prominently displayed at the top'

export function VisibilityComparison() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory max-md:min-h-0">
      <div className="pointer-events-none absolute inset-0 max-md:hidden">
        <Image
          src={premierImage}
          alt={premierAlt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
          draggable={false}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/95 via-[36%] to-transparent to-[64%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-ink/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-32 max-md:min-h-0 max-md:py-28">
        <div className="max-w-md">
          <Reveal x={-34}>
            <h2 className="font-serif text-2xl font-light tracking-tight text-ivory/80">
              Why position matters
            </h2>
          </Reveal>
          <Reveal delay={0.06} x={-30}>
            <p className="mt-5 text-balance font-serif text-4xl font-light leading-[1.08] tracking-[-0.02em] text-ivory sm:text-5xl">
              Get seen before the list gets crowded.
            </p>
          </Reveal>
          <Reveal delay={0.12} x={-24}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ivory/65">
              See how placement changes where your profile appears during client searches.
            </p>
          </Reveal>

          <Reveal delay={0.2} x={-22}>
            <figure className="mt-12 border-l border-gold/40 pl-6">
              <blockquote className="text-pretty text-base leading-relaxed text-ivory/75">
                Peer review is not the only factor in our choice of outside counsel. It helps
                determine which lawyers stay on our shortlist.
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium tracking-tight text-ivory/50">
                Google
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.26} x={-18}>
            <div className="mt-9">
              <CtaButton variant="gold" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

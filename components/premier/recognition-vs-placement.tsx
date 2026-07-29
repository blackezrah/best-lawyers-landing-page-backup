import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </div>
  )
}

export function RecognitionVsPlacement() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
              You earn the honor. You choose the visibility.
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Premier Placement positions earned Best Lawyers recognition in the search result set you choose while preserving the merit-based selection process.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal x={-36}>
            <article className="relative flex h-full flex-col rounded-2xl border border-gold-light/50 bg-card p-8 sm:p-10">
              <span
                aria-hidden="true"
                className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-light text-gold-light"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="6" />
                  <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                </svg>
              </span>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-ink">
                Peer-reviewed honor
              </h3>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Recognition comes from peer review. It cannot be bought.
              </p>
              <CardLabel>Merit-based recognition</CardLabel>
            </article>
          </Reveal>

          <Reveal delay={0.06} x={28}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-8">
              <h3 className="font-serif text-xl font-normal tracking-tight text-ink">
                Premier Placement
              </h3>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Place earned Best Lawyers recognition in the search result set for the market and practice area you choose.
              </p>
              <div className="flex-1" />
              <CardLabel>Market-specific visibility</CardLabel>
            </article>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-10 border-t border-line pt-14 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xl" x={-28}>
            <figure>
              <blockquote className="text-pretty text-xl font-normal leading-snug text-ink/80 sm:text-2xl">
                Recognition would carry less weight if it could be purchased. What matters to us is
                that Best Lawyers recognition is earned.
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium tracking-tight text-ink/50">
                Anonymous selection committee
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} x={24}>
            <CtaButton variant="ink" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

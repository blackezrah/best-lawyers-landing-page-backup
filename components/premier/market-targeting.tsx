import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const SELECTIONS = [
  {
    label: 'City or metro',
    value: 'Los Angeles, CA',
    statuses: ['Market chosen', 'Goal set'],
  },
  {
    label: 'Practice area',
    value: 'Personal Injury Litigation, Plaintiffs',
    statuses: ['Fit checked', 'Open spot found'],
  },
]

const STATUS_PHRASES = [
  'Market chosen',
  'Goal set',
  'Fit checked',
  'Open spot found',
  'Placement live',
  'Priority spot active',
]

function StatusChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm tracking-tight text-ivory/70">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
      {text}
    </span>
  )
}

export function MarketTargeting() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-md">
            <Reveal x={-32}>
              <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                Choose the market your firm wants to win.
              </h2>
            </Reveal>
            <Reveal delay={0.08} x={-24}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-ivory/70">
                Pick the city and practice area that matter most. Open Premier spots are limited.
              </p>
            </Reveal>
            <Reveal delay={0.16} x={-18}>
              <figure className="mt-12 border-l border-gold/40 pl-6">
                <blockquote className="text-pretty text-base leading-relaxed text-ivory/75">
                  When we know a market, we may already have a place to begin. When we do not, Best
                  Lawyers becomes especially useful.
                </blockquote>
                <figcaption className="mt-3 text-sm font-medium tracking-tight text-ivory/50">
                  Cabot Oil &amp; Gas
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Editorial selection model */}
          <Reveal delay={0.1} x={40}>
            <div className="rounded-xl border border-line-dark/50 bg-ink-soft/30">
              <div className="divide-y divide-line-dark/40">
                {SELECTIONS.map((sel) => (
                  <div key={sel.label} className="p-7 sm:p-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/45">
                      {sel.label}
                    </div>
                    <div className="mt-3 font-serif text-2xl font-medium tracking-tight text-ivory">
                      {sel.value}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                      {sel.statuses.map((s) => (
                        <StatusChip key={s} text={s} />
                      ))}
                    </div>
                  </div>
                ))}

                <div className="p-7 sm:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/45">
                    Placement goal
                  </div>
                  <div className="mt-3 text-pretty text-lg leading-relaxed text-ivory/85">
                    Show near the top in a search that matters.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 border-t border-line-dark/40 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal x={-32}>
            <p className="max-w-xl text-pretty font-serif text-xl font-medium leading-snug text-ivory/85 sm:text-2xl">
              Once approved, your profile is placed in the Premier area. You do not have to wait for
              the standard list to move.
            </p>
            <figure className="mt-10 border-l border-gold/40 pl-6">
              <blockquote className="max-w-lg text-pretty text-base leading-relaxed text-ivory/75">
                What gives the results credibility is that they reflect both client experience and
                peer perspective.
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium tracking-tight text-ivory/50">
                Anonymous Client
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Stagger className="flex flex-col gap-4" gap={0.07}>
              {STATUS_PHRASES.map((phrase) => (
                <StaggerItem key={phrase} x={24} y={12}>
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-base tracking-tight text-ivory/80">{phrase}</span>
                    <span className="h-px flex-1 bg-line-dark/50" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-8 border-t border-line-dark/40 pt-14 sm:flex-row sm:items-center sm:justify-between">
          <Reveal x={-24}>
            <p className="text-balance font-serif text-3xl font-medium tracking-[-0.01em] text-ivory sm:text-4xl">
              Choose where you want to lead.
            </p>
          </Reveal>
          <Reveal delay={0.1} x={24}>
            <CtaButton variant="gold" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

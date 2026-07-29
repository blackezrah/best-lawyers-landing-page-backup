import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const RESULTS = [
  { label: 'Premier Profile Placement result', description: 'Placed above standard search results', badge: true },
  { label: 'Premier Profile Placement result', description: 'Placed above standard search results', badge: true },
  { label: 'Premier Profile Placement result', description: 'Placed above standard search results', badge: true },
  { label: 'Premier Profile Placement result', description: 'Placed above standard search results', badge: true },
  { label: 'Premier Profile Placement result', description: 'Placed above standard search results', badge: true },
  { label: 'Standard profile', description: 'Appears in organic directory order', badge: false },
  { label: 'Standard profile', description: 'Appears in organic directory order', badge: false },
  { label: 'Standard profile', description: 'Appears in organic directory order', badge: false },
]

export function VisibilityComparison() {
  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 py-24 sm:grid-cols-[0.95fr_1.05fr] sm:px-8 sm:py-32">
        <div className="max-w-md">
          <Reveal x={-34}>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.32em] text-gold/85">
              Product visualization
            </p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ivory sm:text-5xl">
              Premier Placement places your profile above organic listings.
            </h2>
          </Reveal>

          <Reveal delay={0.08} x={-30}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ivory/65">
              Premier profiles are positioned within the top five placements so prospective clients see them before standard search results.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              Your profile is guaranteed to appear above organic listings when clients search in your area.
            </p>
          </Reveal>

          <Reveal delay={0.16} x={-24}>
            <div className="mt-10 border-l border-gold/40 pl-6">
              <p className="text-pretty text-base leading-relaxed text-ivory/75">
                Only five Premier Placement positions are available per market and practice area. Securing one helps keep your profile in the most visible search positions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22} x={-22}>
            <div className="mt-12">
              <CtaButton variant="gold" />
            </div>
          </Reveal>
        </div>

        <div className="rounded-[2rem] border border-ivory/15 bg-white/5 p-6 shadow-[0_30px_80px_rgba(8,15,23,0.18)] sm:p-8">
          <div className="mb-6 flex items-center justify-between rounded-3xl border border-ivory/15 bg-ink/85 px-4 py-3 text-sm uppercase tracking-[0.28em] text-ivory/80">
            <span>Search results</span>
            <span className="rounded-full bg-gold/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Chicago • Employment Law
            </span>
          </div>

          <div className="space-y-3">
            {RESULTS.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl border p-4 ${
                  item.badge ? 'border-gold/25 bg-gold/5 text-ink' : 'border-ivory/15 bg-white text-ink'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-base font-semibold tracking-tight">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink/70">
                      {item.description}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                      item.badge ? 'bg-gold text-ink' : 'bg-line text-ink'
                    }`}
                  >
                    {item.badge ? 'Premier' : 'Standard'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-ivory/15 bg-ink/90 px-4 py-4 text-sm leading-6 text-ivory/75">
            <p className="font-medium text-ivory">Only five Premier Placement results are available per market.</p>
            <p className="mt-2 text-sm text-ivory/70">
              The first five positions are reserved for Premier Placement builds. Other eligible profiles continue to appear in organic ordering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

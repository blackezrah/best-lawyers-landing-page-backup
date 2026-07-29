import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const PROOF = [
  { value: '75%', label: 'of clients contact only one lawyer.' },
  { value: '1 in 4', label: "profile viewers go to a firm's website." },
  {
    value: 'Top 5',
    label:
      'Premier profiles can appear in the first five results for one city and practice area.',
  },
]

export function PositionAdvantage() {
  return (
    <section id="why-premier" className="scroll-mt-24 bg-ink py-24 text-ivory sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.04] tracking-[-0.02em] sm:text-6xl">
              Place Yourself Ahead
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ivory/70">
              These data points show why placement matters: the right profile needs to be easy for clients to find when they are ready to hire.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/60">
              Premier Placement helps your profile stand out in the one search result set that matters.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-10 border-t border-line-dark/40 pt-14 sm:grid-cols-3 sm:gap-8">
          {PROOF.map((item) => (
            <StaggerItem key={item.value} x={-18}>
              <div className="flex flex-col gap-4">
                <span className="font-serif text-6xl font-medium tracking-[-0.03em] text-gold">
                  {item.value}
                </span>
                <span className="max-w-[16rem] text-base leading-relaxed text-ivory/65">
                  {item.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xl" x={-28}>
            <figure className="border-l border-gold/40 pl-6">
              <blockquote className="text-pretty text-xl font-normal leading-snug text-ivory/85 sm:text-2xl">
                Best Lawyers plays an important role in how we evaluate and select counsel.
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium tracking-tight text-ivory/50">
                Anonymous Client
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} x={24}>
            <CtaButton variant="gold" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

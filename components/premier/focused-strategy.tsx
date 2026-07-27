import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

export function FocusedStrategy() {
  return (
    <section className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <Reveal y={30}>
          <h2 className="mx-auto max-w-3xl text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            A focused strategy creates a stronger position.
          </h2>
        </Reveal>
        <Reveal delay={0.08} y={26}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Pick one city and one practice area. Keep the goal clear. Win the place that matters
            most.
          </p>
        </Reveal>
        <Reveal delay={0.16} y={22}>
          <div className="mt-10 flex justify-center">
            <CtaButton variant="ink" />
          </div>
        </Reveal>

        <Reveal delay={0.24} y={28}>
          <figure className="mx-auto mt-16 max-w-2xl border-t border-line pt-10">
            <blockquote className="text-pretty font-serif text-xl font-light leading-snug text-ink/80 sm:text-2xl">
              When I know the market, I may already know where to begin. When I do not, Best
              Lawyers is one of the first places I look.
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium tracking-tight text-ink/50">
              EPIC Brokers
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

export function VisibilityComparison() {
  return (
    <section id="premier-advantage" className="scroll-mt-24 relative overflow-hidden bg-ivory text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 py-52 sm:px-8 sm:py-60 lg:py-72">
        <div className="mx-auto text-center">
          <Reveal x={-34}>
            <h2 className="mx-auto font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl xl:whitespace-nowrap">
              Premier Placement places your profile above organic listings.
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-10 text-left md:grid-cols-[1.15fr_0.85fr] md:items-start lg:mt-20">
            <Reveal delay={0.08} x={-24}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                The first five results form the Premier field. Every lawyer shown there has already earned Best Lawyers distinction. Standard directory entries continue underneath.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                The difference is not who earned the honor. It is who is encountered first.
              </p>
            </Reveal>

            <Reveal delay={0.14} x={22}>
              <div className="border-t border-gold/40 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-ink">
                  No additional inventory opens once the tier is full.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  The cap applies to each metro and practice-area combination.
                </p>
                <div className="mt-8 flex justify-center">
                  <CtaButton variant="gold" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const STAGES = [
  {
    title: 'Pick your target',
    body: 'Choose the city and practice area that matter most.',
  },
  {
    title: 'Check fit and open spots',
    body: 'Best Lawyers checks your profile and current space.',
  },
  {
    title: 'Turn on the placement',
    body: 'Once approved, your profile moves into a Premier spot.',
  },
  {
    title: 'Track the response',
    body: 'Review visits, clicks, and lead activity.',
  },
]

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-parchment py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
              A clear path to a top spot.
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start with the market you want to win.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0">
          {STAGES.map((stage, i) => (
            <StaggerItem key={stage.title} className="lg:px-8 lg:first:pl-0" x={18}>
              <div className="relative">
                {/* Directional continuity: connecting rule with a node, no numbers */}
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-light" />
                  <span
                    aria-hidden="true"
                    className={`h-px flex-1 bg-line ${i === STAGES.length - 1 ? 'lg:hidden' : ''}`}
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-normal tracking-tight text-ink">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[15rem] text-pretty text-base leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 flex flex-col gap-10 border-t border-line pt-14 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xl" x={-28}>
            <figure>
              <blockquote className="text-pretty text-xl font-normal leading-snug text-ink/80 sm:text-2xl">
                Best Lawyers does not choose counsel for us. It helps our team identify and evaluate
                the lawyers we may choose.
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium tracking-tight text-ink/50">
                United HomeCare
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

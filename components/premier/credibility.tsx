import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const PROOF = [
  { value: 'Top 5%', label: 'of lawyers awarded in the U.S.' },
  { value: '13M+', label: 'peer evaluations' },
  { value: '151', label: 'practice areas' },
  { value: '40+', label: 'years of peer review' },
]

export function Credibility() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl">
              Recognition backed by decades of peer review.
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Premier Placement helps recognized lawyers stand out where clients are already
              evaluating counsel.
            </p>
          </Reveal>
          <Reveal delay={0.16} x={-24}>
            <div className="mt-12">
              <CtaButton variant="ink" />
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((item) => (
            <StaggerItem key={item.value} className="bg-ivory" x={-18}>
              <div className="flex h-full flex-col gap-3 px-7 py-10">
                <span className="font-serif text-5xl font-medium tracking-[-0.02em] text-ink">
                  {item.value}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

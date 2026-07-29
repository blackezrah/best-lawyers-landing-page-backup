import { Reveal, Stagger, StaggerItem } from './reveal'
import { CtaButton } from './cta-button'

const PROOF_POINTS = [
  {
    title: 'Top Position',
    description: 'Appear within the top five positions when prospective clients search in your metro and practice area.',
  },
  {
    title: 'Maximum Visibility',
    description: 'Your profile is guaranteed to appear above organic listings, giving your firm prominent exposure where it matters most.',
  },
  {
    title: 'Instant Results',
    description: 'Begin receiving enhanced visibility as soon as your Premier Placement is active.',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal x={-32}>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] sm:text-4xl">
            A distinct visibility experience for eligible profiles.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3" gap={0.06}>
          {PROOF_POINTS.map((item) => (
            <StaggerItem key={item.title} x={-16} y={14}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-lg font-semibold tracking-tight text-ivory">{item.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 flex flex-col gap-8 border-t border-line-dark/40 pt-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal x={-24}>
            <p className="max-w-xl text-balance font-serif text-2xl font-medium leading-snug tracking-[-0.01em] text-ivory sm:text-3xl">
              Position your eligible profile where it will be seen first.
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

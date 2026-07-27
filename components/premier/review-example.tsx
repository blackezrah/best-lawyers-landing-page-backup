'use client'

import { Reveal } from './reveal'

const ROWS = [
  { label: 'Metro', value: 'Los Angeles, CA' },
  { label: 'Practice area', value: 'Personal Injury Litigation, Plaintiffs' },
  { label: 'Priority profile', value: 'Avery Bennett' },
  { label: 'Placement', value: 'Premier position 01' },
  { label: 'Search match', value: 'Set' },
]

export function ReviewExample() {
  return (
    <section className="bg-ink py-24 text-ivory sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal y={30}>
          <div className="overflow-hidden rounded-2xl border border-line-dark/50 bg-ink-soft/30">
            <div className="flex items-center justify-between border-b border-line-dark/40 px-8 py-6">
              <span className="font-serif text-xl font-light tracking-tight text-ivory">
                Placement Review
              </span>
              <span className="inline-flex items-center gap-2 text-sm tracking-tight text-ivory/60">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                Ready to check
              </span>
            </div>

            <dl className="divide-y divide-line-dark/40">
              {ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-6 px-8 py-5"
                >
                  <dt className="text-sm uppercase tracking-[0.12em] text-ivory/45">
                    {row.label}
                  </dt>
                  <dd className="text-right text-base tracking-tight text-ivory/90">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex items-center gap-3 border-t border-line-dark/40 bg-gold/[0.06] px-8 py-5">
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm font-medium tracking-tight text-ivory">
                Search match set
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

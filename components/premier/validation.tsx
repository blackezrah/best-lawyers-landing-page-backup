import { Reveal, Stagger, StaggerItem } from "./reveal"
import { Stars } from "./stars"

function StatPanel({ stat, label, note }: { stat: string; label: string; note?: string }) {
  return (
    <StaggerItem x={18} className="flex flex-col justify-between rounded-lg border border-line-dark/60 bg-ink-soft p-7">
      <Stars className="text-gold" />
      <div className="mt-8">
        <p className="font-serif text-4xl tracking-tight text-ivory">{stat}</p>
        <p className="mt-2 text-sm leading-relaxed text-ivory/60">{label}</p>
        {note && <p className="mt-1 text-xs tracking-tight text-gold/70">{note}</p>}
      </div>
    </StaggerItem>
  )
}

function QuotePanel({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <StaggerItem x={18} className="flex flex-col justify-between rounded-lg border border-line-dark/60 bg-ink-soft p-7">
      <Stars className="text-gold" />
      <div className="mt-6">
        <p className="font-serif text-lg leading-relaxed text-ivory/90 text-pretty">{quote}</p>
        <p className="mt-4 text-sm text-ivory/55">{attribution}</p>
      </div>
    </StaggerItem>
  )
}

export function Validation() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal x={-32} className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            People use Best Lawyers when the choice matters.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">Trust starts before the first call.</p>
          <p className="mt-4 text-sm tracking-tight text-ivory/50">
            Client comments are lightly paraphrased for clarity.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3" gap={0.08}>
          {/* Featured large pull quote spanning two columns */}
          <StaggerItem x={-24} className="flex flex-col justify-between rounded-lg border border-gold/25 bg-gradient-to-br from-ink-soft to-ink p-8 md:col-span-2">
            <Stars className="text-gold" />
            <p className="mt-6 font-serif text-2xl leading-snug text-ivory text-pretty md:text-3xl">
              The value went beyond adding another credential. Best Lawyers changed how clients saw our firm.
            </p>
            <p className="mt-6 text-sm text-ivory/55">Mitchell &amp; Associates</p>
          </StaggerItem>

          <StatPanel stat="97%" label="Would recommend Best Lawyers" note="Client trust" />

          <QuotePanel
            quote="When the legal need is significant, Best Lawyers is one of the first places we look to identify firms that fit our needs."
            attribution="Anonymous Client"
          />
          <QuotePanel
            quote="Some of the strongest firms we've considered weren't previously on our radar. Best Lawyers has helped us identify attorneys we may have otherwise overlooked."
            attribution="Anonymous Client"
          />
          <StatPanel stat="13M+" label="peer evaluations" note="Scale" />

          <StatPanel stat="151" label="practice areas" note="Market reach" />
          <QuotePanel
            quote="A Best Lawyers recognition immediately tells us a firm belongs in the conversation."
            attribution="Anonymous Client"
          />
          <QuotePanel
            quote="We don't have time to evaluate every firm. Best Lawyers helps us focus on the strongest candidates."
            attribution="Anonymous Client"
          />

          <StatPanel stat="40+" label="years of trust" note="Since 1983" />
          <QuotePanel
            quote="Recognition helps determine who makes our initial shortlist. From there, we evaluate experience, fit, and the needs of the engagement before making a final decision."
            attribution="Anonymous Client"
          />
          <QuotePanel
            quote="Best Lawyers is one of the resources we use to compare potential legal partners before selecting outside counsel."
            attribution="Doll Distributing"
          />

          <StatPanel stat="28K+" label="recognized lawyers" />
        </Stagger>
      </div>
    </section>
  )
}

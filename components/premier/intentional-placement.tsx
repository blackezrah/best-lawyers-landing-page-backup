import Image from 'next/image'
import { Reveal } from './reveal'

export function IntentionalPlacement() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ivory text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-[72vw]">
          <Image
            src="/harder-to-overlook.webp"
            alt=""
            fill
            priority={false}
            sizes="72vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ivory from-0% via-ivory/98 via-[43%] to-transparent to-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/10 via-transparent to-ivory/5" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-md xl:max-w-xl">
          <Reveal x={-32}>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
              Make your profile harder to overlook.
            </h2>
          </Reveal>
          <Reveal delay={0.08} x={-24}>
            <p className="mt-6 text-balance font-serif text-2xl font-light leading-snug text-ink/80 sm:text-3xl">
              Where your profile appears shapes who finds it.
            </p>
          </Reveal>
          <Reveal delay={0.14} x={-20}>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Premier Placement is designed to create a clear advantage without competing for
              attention everywhere at once.
            </p>
          </Reveal>
          <Reveal delay={0.2} x={-18}>
            <figure className="mt-12 border-l border-gold pl-6">
              <blockquote className="text-pretty text-base leading-relaxed text-ink/75">
                We did not know the firm before the search. Best Lawyers brought
                <br />
                it into the group we considered.
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium tracking-tight text-ink/50">
                Anonymous Client
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

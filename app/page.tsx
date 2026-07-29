import { SiteHeader } from "@/components/premier/site-header"
import { Hero } from "@/components/premier/hero"
import { BrandLogos } from "@/components/premier/brand-logos"
import { PositionAdvantage } from "@/components/premier/position-advantage"
import { VisibilityComparison } from "@/components/premier/visibility-comparison"
import { TrustStrip } from "@/components/premier/trust-strip"
import { EngagementProgression } from "@/components/premier/engagement-progression"
import { MarketTargeting } from "@/components/premier/market-targeting"
import { RecognitionVsPlacement } from "@/components/premier/recognition-vs-placement"
import { Validation } from "@/components/premier/validation"
import { Faq } from "@/components/premier/faq"
import { FinalCta } from "@/components/premier/final-cta"

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
          <Hero />
          <BrandLogos />
        <VisibilityComparison />
        <PositionAdvantage />
        <TrustStrip />
        <EngagementProgression />
        <MarketTargeting />
        <RecognitionVsPlacement />
        <Validation />
        <Faq />
      </main>
      <FinalCta />
    </>
  )
}

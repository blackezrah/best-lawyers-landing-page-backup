import { SiteHeader } from "@/components/premier/site-header"
import { Hero } from "@/components/premier/hero"
import { Credibility } from "@/components/premier/credibility"
import { TrustStrip } from "@/components/premier/trust-strip"
import { ClientTrust } from "@/components/premier/client-trust"
import { PositionAdvantage } from "@/components/premier/position-advantage"
import { VisibilityComparison } from "@/components/premier/visibility-comparison"
import { IntentionalPlacement } from "@/components/premier/intentional-placement"
import { MarketTargeting } from "@/components/premier/market-targeting"
import { FocusedStrategy } from "@/components/premier/focused-strategy"
import { ReviewExample } from "@/components/premier/review-example"
import { RecognitionVsPlacement } from "@/components/premier/recognition-vs-placement"
import { Process } from "@/components/premier/process"
import { EngagementProgression } from "@/components/premier/engagement-progression"
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
        <VisibilityComparison />
        <PositionAdvantage />
        <Credibility />
        <TrustStrip />
        <ClientTrust />
        <IntentionalPlacement />
        <MarketTargeting />
        <FocusedStrategy />
        <ReviewExample />
        <RecognitionVsPlacement />
        <Process />
        <EngagementProgression />
        <Validation />
        <Faq />
      </main>
      <FinalCta />
    </>
  )
}

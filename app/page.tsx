import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactStats } from "@/components/impact-stats"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <ImpactStats />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}

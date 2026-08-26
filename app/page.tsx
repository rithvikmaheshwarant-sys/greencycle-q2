import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactStats } from "@/components/impact-stats"

import { DonationZone } from "@/components/donation-zone"
import { EcoCalculator } from "@/components/eco-calculator"
import { Faq } from "@/components/faq"
import { Partners } from "@/components/partners"

import { CTA } from "@/components/cta"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>

        <Hero />

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="impact">
          <ImpactStats />
        </section>

        <section id="calculator">
          <EcoCalculator />
        </section>

        <section id="donate">
          <DonationZone />
        </section>

        <section id="partners">
          <Partners />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <CTA />

      </main>

      <SiteFooter />
    </>
  )
}

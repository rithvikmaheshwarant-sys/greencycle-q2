import { SiteHeader } from "@/components/site-header"
import { EcoCalculator } from "@/components/eco-calculator"
import { SiteFooter } from "@/components/site-footer"

export default function CalculatorPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <EcoCalculator />
      </main>

      <SiteFooter />
    </>
  )
}
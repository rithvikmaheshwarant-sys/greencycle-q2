import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="get-started" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
        <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to make recycling the easy choice?
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-primary-foreground/80">
          Join thousands of homes and businesses cutting waste with GreenCycle. Your first pickup is free.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="#signup">
            Start recycling today
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  )
}

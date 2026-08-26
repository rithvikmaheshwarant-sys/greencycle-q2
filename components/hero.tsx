import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            Recycling made effortless
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Turn everyday waste into everyday wins
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            GreenCycle picks up your recycling, sorts it right, and shows you the real impact — for homes and businesses
            that want to do better without the guesswork.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#get-started">
                Schedule a pickup
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border">
          <Image
            src="/images/greencycle-hero.png"
            alt="Neatly sorted recycling materials arranged on a light background"
            width={720}
            height={720}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

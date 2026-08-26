import { CalendarClock, Truck, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: CalendarClock,
    title: "Schedule a pickup",
    description:
      "Pick a day that works for you. Weekly, biweekly, or on-demand — set it once and forget the calendar.",
  },
  {
    icon: Truck,
    title: "We collect and sort",
    description:
      "Our team handles the pickup and sorts everything at certified facilities, so nothing recyclable ends up in landfill.",
  },
  {
    icon: BarChart3,
    title: "Track your impact",
    description:
      "See exactly how much you've diverted, in kilograms and CO₂ saved, right from your GreenCycle dashboard.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Three simple steps to a smaller footprint
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">{step.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

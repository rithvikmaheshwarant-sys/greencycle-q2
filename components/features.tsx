import { HeartHandshake, MousePointerClick, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: MousePointerClick,
    title: 'Drop & Donate',
    body: 'Drag recyclable items into the platform and let your action be counted instantly, with zero paperwork.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Local Change',
    body: 'Connect with Tamil Nadu government services, NGOs, and community recyclers all in one place.',
  },
  {
    icon: TrendingUp,
    title: 'See Your Impact',
    body: 'Watch participation grow from zero and celebrate real, measurable progress with every contribution.',
  },
]

export function Features() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-medium text-primary">Why GreenCycle</p>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Recycling that feels easy and inspiring
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

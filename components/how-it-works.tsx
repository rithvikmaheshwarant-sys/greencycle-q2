import { Coins, Package, Sprout, Truck } from 'lucide-react'

const steps = [
  {
    icon: Package,
    title: 'Collect Recyclables',
    description: 'Gather plastics, paper, cardboard, and old electronics at home or work.',
  },
  {
    icon: Truck,
    title: 'Drop Off or Pickup',
    description: 'Use our drop zone tool or schedule a free community neighborhood pickup.',
  },
  {
    icon: Coins,
    title: 'Earn Green Credits',
    description: 'Every kilogram contributed updates community stats and earns eco-rewards.',
  },
  {
    icon: Sprout,
    title: 'Watch Green Bloom',
    description: 'Recycled materials are repurposed to fund local green parks and schools.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-medium text-primary">Simple 4-step journey</p>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          How GreenCycle works
        </h2>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
            <span className="font-display text-sm font-bold text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <step.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

import Image from 'next/image'
import { ArrowRight, Leaf, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroStats = [
  { value: '12,480', label: 'people joined' },
  { value: '3,150', label: 'donations made' },
  { value: '86,200 kg', label: 'cleaner streets' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Tamil Nadu &middot; Community Recycling
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Make India <span className="text-primary">greener</span>, one donation at a time.
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Join a vibrant movement where families, schools, and businesses donate recyclable waste,
            partner with trusted NGOs, and watch real progress unfold in their community.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<a href="#donate">Start donating</a>} />
            <Button
              variant="outline"
              size="lg"
              render={
                <a href="#partners">
                  Meet partners
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              }
            />
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/greencycle-hero.png"
              alt="Community volunteers sorting recyclables into color-coded bins at a neighborhood recycling drive in Tamil Nadu"
              width={1200}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Leaf className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-tight">Zero waste, brighter futures</p>
              <p className="text-xs text-muted-foreground">A greener India begins with each small action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="rounded-3xl border border-primary/30 bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build a cleaner India with GreenCycle?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Join today and become part of a bright movement that starts with one donation and grows into lasting change.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" render={<a href="#donate">Join GreenCycle</a>} />
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            render={<a href="#partners">Explore partners</a>}
          />
        </div>
      </div>
    </section>
  )
}

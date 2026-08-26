const stats = [
  { value: "12,400t", label: "Waste diverted from landfill" },
  { value: "38,000", label: "Households & businesses served" },
  { value: "94%", label: "Materials successfully recycled" },
  { value: "8,900t", label: "CO₂ emissions avoided" },
]

export function ImpactStats() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Impact</p>
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Numbers our community is proud of
        </h2>
      </div>

      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 bg-background p-8">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-4xl font-semibold tracking-tight text-primary">{stat.value}</dd>
            <p className="text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}

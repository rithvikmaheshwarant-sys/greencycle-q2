import { Building2, Leaf, Users } from 'lucide-react'

const partners = [
  {
    icon: Building2,
    name: 'Tamil Nadu Government',
    body: 'Explore official state initiatives and civic sustainability programs.',
  },
  {
    icon: Leaf,
    name: 'TNPCB',
    body: 'Work with environmental governance programs and waste management support.',
  },
  {
    icon: Users,
    name: 'NGOs & Community Groups',
    body: 'Join hands with changemakers who turn waste into lasting community support.',
  },
  {
    icon: Leaf,
    name: 'Recycling Networks',
    body: 'Connect with green organizations helping local recyclers grow stronger.',
  },
]

export function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-medium text-primary">Trusted partners for real impact</p>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Backed by government, NGOs and local recyclers
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <partner.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold">{partner.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{partner.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

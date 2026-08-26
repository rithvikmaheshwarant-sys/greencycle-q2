'use client'

import { useState } from 'react'
import { BookOpen, Cpu, Milk, Package, Recycle } from 'lucide-react'

const items = [
  { key: 'plastic', label: 'Plastic bottle', icon: Milk },
  { key: 'paper', label: 'Paper', icon: BookOpen },
  { key: 'cardboard', label: 'Cardboard', icon: Package },
  { key: 'ewaste', label: 'Electronic waste', icon: Cpu },
]

export function DonationZone() {
  const [dragging, setDragging] = useState<string | null>(null)
  const [over, setOver] = useState(false)
  const [donations, setDonations] = useState(0)
  const [lastDropped, setLastDropped] = useState<string | null>(null)

  const handleDrop = (key: string) => {
    const item = items.find((i) => i.key === key)
    setDonations((n) => n + 1)
    setLastDropped(item?.label ?? null)
    setOver(false)
    setDragging(null)
  }

  return (
    <section id="donate" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-medium text-primary">Try the experience</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Drag your recyclable item here
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Drag an item below into the drop zone (or click one) to add your contribution to GreenCycle in real time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-wrap content-start gap-3 rounded-2xl border border-border bg-background p-6">
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                draggable
                onDragStart={() => setDragging(item.key)}
                onDragEnd={() => setDragging(null)}
                onClick={() => handleDrop(item.key)}
                className={`flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-95 ${
                  dragging === item.key ? 'opacity-40' : ''
                }`}
              >
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </div>

          <div
            onDragOver={(e) => {
              e.preventDefault()
              setOver(true)
            }}
            onDragLeave={() => setOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              if (dragging) handleDrop(dragging)
            }}
            className={`flex min-h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${
              over ? 'border-primary bg-primary/10' : 'border-border bg-background'
            }`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Recycle className={`h-7 w-7 ${over ? 'animate-spin' : ''}`} aria-hidden="true" />
            </span>
            <p className="mt-4 font-display font-bold">Drop your recyclable item here</p>
            <p className="mt-1 text-sm text-muted-foreground" aria-live="polite">
              {lastDropped
                ? `Thank you! ${lastDropped} added to the cycle.`
                : 'Your contribution will be counted instantly.'}
            </p>
            <p className="mt-4 font-display text-3xl font-bold text-primary" aria-live="polite">
              {donations.toLocaleString('en-IN')}
              <span className="ml-1 align-middle text-sm font-medium text-muted-foreground">donations</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

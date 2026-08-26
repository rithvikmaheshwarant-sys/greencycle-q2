'use client'

import { useMemo, useState } from 'react'
import { Milk, BookOpen, Cpu, TreePine } from 'lucide-react'

type Material = {
  key: string
  label: string
  icon: typeof Milk
  unit: string
  defaultKg: number
  max: number
  // kg CO2 saved per kg recycled (annual, illustrative)
  co2PerKg: number
}

const materials: Material[] = [
  { key: 'plastic', label: 'Plastic Bottles', icon: Milk, unit: 'kg/month', defaultKg: 5, max: 40, co2PerKg: 1.5 },
  { key: 'paper', label: 'Paper & Books', icon: BookOpen, unit: 'kg/month', defaultKg: 10, max: 60, co2PerKg: 0.9 },
  { key: 'ewaste', label: 'E-Waste / Electronics', icon: Cpu, unit: 'kg/month', defaultKg: 2, max: 20, co2PerKg: 20 },
]

// ~21.77 kg CO2 sequestered per tree per year
const CO2_PER_TREE = 21.77

export function EcoCalculator() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(materials.map((m) => [m.key, m.defaultKg])),
  )

  const { co2, trees } = useMemo(() => {
    const monthly = materials.reduce((sum, m) => sum + values[m.key] * m.co2PerKg, 0)
    const annual = monthly * 12
    return { co2: Math.round(annual), trees: annual / CO2_PER_TREE }
  }, [values])

  return (
    <section id="calculator" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-medium text-primary">Personal impact estimator</p>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Calculate your eco impact
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          See how much CO&#8322; you prevent from entering the atmosphere every month by recycling with GreenCycle.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
          <div className="flex flex-col gap-8">
            {materials.map((m) => (
              <div key={m.key}>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 font-medium">
                    <m.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    {m.label}
                  </span>
                  <span className="font-display text-sm font-bold tabular-nums text-muted-foreground">
                    {values[m.key]} {m.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={m.max}
                  step={1}
                  value={values[m.key]}
                  onChange={(e) => setValues((prev) => ({ ...prev, [m.key]: Number(e.target.value) }))}
                  aria-label={`${m.label} in ${m.unit}`}
                  className="mt-4 w-full accent-primary"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8 lg:col-span-2">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {co2.toLocaleString('en-IN')} kg
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">CO&#8322; prevented / year</p>
          </div>
          <div className="mx-auto h-px w-16 bg-border" />
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-3xl font-bold tracking-tight">
              <TreePine className="h-7 w-7 text-accent" aria-hidden="true" />
              {trees.toFixed(1)}
            </p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">Equivalent trees planted</p>
          </div>
        </div>
      </div>
    </section>
  )
}

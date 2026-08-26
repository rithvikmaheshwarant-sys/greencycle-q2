'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Waste collected', value: 86200, suffix: ' kg' },
  { label: 'Donations made', value: 3150, suffix: '' },
  { label: 'Participants', value: 12480, suffix: '' },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value
}

function StatCard({ label, value, suffix, active }: (typeof stats)[number] & { active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center">
      <p className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {count.toLocaleString('en-IN')}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  )
}

export function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" className="border-y border-border bg-primary/5">
      <div ref={ref} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-medium text-primary">Live community impact</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Every contribution begins at zero and grows into a cleaner, greener tomorrow
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}

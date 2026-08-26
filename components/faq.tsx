'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What items can I recycle through GreenCycle?',
    a: 'You can donate plastic bottles, paper and books, cardboard, and electronic waste such as old phones, chargers, and small appliances. If you are unsure about an item, our drop zone tool will guide you.',
  },
  {
    q: 'Is there any cost for home pickup?',
    a: 'No. Community neighborhood pickups are completely free. Simply schedule a slot through the platform and a local recycler or volunteer will collect your sorted materials.',
  },
  {
    q: 'How does GreenCycle measure community impact?',
    a: 'Every kilogram contributed updates live community statistics in real time. We convert recycled weight into CO\u2082 prevented and equivalent trees planted so you can see tangible progress.',
  },
  {
    q: 'Who are your partners?',
    a: 'We work with the Tamil Nadu Government, the Tamil Nadu Pollution Control Board (TNPCB), local NGOs, community groups, and established recycling networks to ensure materials are responsibly processed.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 font-medium text-primary">Got questions?</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-background">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-bold"
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`grid transition-all ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

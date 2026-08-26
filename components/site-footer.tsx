import { Recycle } from 'lucide-react'

const footerLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Donate', href: '#donate' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Recycle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">GreenCycle</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A greener India begins with each small action. Make India greener, one donation at a time.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          &copy; {new Date().getFullYear()} GreenCycle. All rights reserved. Tamil Nadu &middot; Community Recycling.
        </div>
      </div>
    </footer>
  )
}

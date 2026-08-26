import { Recycle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Recycle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">GreenCycle</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" render={<a href="#login">Login</a>} />
          <Button size="sm" render={<a href="#donate">Start donating</a>} />
        </div>
      </div>
    </header>
  )
}

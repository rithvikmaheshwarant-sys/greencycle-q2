import { Recycle } from "lucide-react"

const columns = [
  { title: "Product", links: ["How it works", "Pricing", "Business", "Dashboard"] },
  { title: "Company", links: ["About", "Careers", "Sustainability", "Press"] },
  { title: "Support", links: ["Help center", "Contact", "Service areas", "FAQ"] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Recycle className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">GreenCycle</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Recycling made effortless for homes and businesses everywhere.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GreenCycle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

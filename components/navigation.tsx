"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
  ]

  return (
    <nav
      aria-label="Main navigation"
      className="portfolio-navigation sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto portfolio-container">
        <div className="flex items-center justify-between gap-4 min-h-24">
          <a
            href="#home"
            className="nav-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <span aria-hidden="true">
              ac<span className="text-primary">↗</span>
            </span>
            <span className="sr-only">Ayoub Cherguelaine</span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <a href="#contact" className="nav-contact hidden sm:inline-flex">
            Get In Touch
            <ArrowUpRight size={15} />
          </a>

          <button
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="space-y-2 pb-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-card hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 text-sm text-primary"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

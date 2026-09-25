"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

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
    <nav className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur supports-[backdrop-filter]:bg-[#050505]/60 border-b border-[#2a2a2a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="rounded-full bg-gradient-to-r from-[#d4d4d4] via-[#00d2be] to-[#d4d4d4] bg-clip-text text-xl font-bold text-transparent gradient-shift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
          >
            Ayoub Cherguelaine
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full text-sm font-medium text-[#b0b0b0] transition-colors hover:text-[#00d2be] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <button
            className="rounded-full p-2 text-[#b0b0b0] transition-colors hover:text-[#00d2be] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
                className="block rounded-full px-3 py-2 text-sm font-medium text-[#b0b0b0] transition-colors hover:bg-[#111] hover:text-[#00d2be] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2be]/60"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

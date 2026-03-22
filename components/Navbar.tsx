"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#section-1" },
  { name: "Approach", href: "#section-2" },
  { name: "Curriculum", href: "#section-3" },
  { name: "In Action", href: "#section-4" },
  { name: "Get Involved", href: "#section-5" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">NovaSTEM</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

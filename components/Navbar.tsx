"use client"

import Link from "next/link"
import Image from "next/image"

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
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image src="/images/brain.png" alt="Brain Icon" fill className="object-contain drop-shadow-sm" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-emerald-950">NovaSTEM</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-emerald-900/70 hover:text-emerald-950 transition-all hover:scale-105 duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

"use client"

import { Hero } from "@/components/Hero"
import { Research } from "@/components/Research"
import { Experience } from "@/components/Experience"
import { Gallery } from "@/components/Gallery"
import { Bio } from "@/components/Bio"

const sections = [
  { id: "section-1", content: <Hero /> },
  { id: "section-2", content: <Research /> },
  { id: "section-3", content: <Experience /> },
  { id: "section-4", content: <Gallery /> },
  { id: "section-5", content: <Bio /> },
]

export default function HomePage() {
  return (
    <div className="snap-container">
      {sections.map((section) => (
        <section 
          key={section.id} 
          id={section.id}
          className="snap-section"
        >
          {section.content}
        </section>
      ))}
    </div>
  )
}

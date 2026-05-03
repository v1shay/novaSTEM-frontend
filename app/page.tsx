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
      {sections.map((section) => {
        const isHero = section.id === "section-1";
        return (
          <section 
            key={section.id} 
            id={section.id}
            className="snap-start relative w-full flex items-start justify-center overflow-y-auto overflow-x-hidden"
            style={{ 
              zoom: isHero ? 1 : 0.75,
              height: isHero ? '100vh' : '133.333vh',
              paddingTop: isHero ? '0' : '120px'
            }}
          >
            <div className="w-full flex flex-col items-center">
              {section.content}
            </div>
          </section>
        );
      })}
    </div>
  )
}

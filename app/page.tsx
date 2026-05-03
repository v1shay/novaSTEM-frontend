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
            className="snap-start relative w-full h-screen overflow-hidden"
          >
            <div 
              className="w-full flex items-center justify-center"
              style={{ 
                zoom: isHero ? 1 : 0.8,
                height: isHero ? '100vh' : '125vh'
              }}
            >
              {section.content}
            </div>
          </section>
        );
      })}
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
  {
    title: "Biology",
    description: "Explore life through experiments like DNA extraction and plant response testing, making living systems tangible and real.",
    image: "/how/biology-1.jpg",
  },
  {
    title: "Chemistry",
    description: "Create reactions firsthand, from Mentos explosions to acid-base tests, turning chemistry into something you can see and feel.",
    image: "/how/chemistry-1.jpg",
  },
  {
    title: "Physics",
    description: "Build, test, and experiment with motion, forces, and energy through real-world challenges and hands-on projects.",
    image: "/how/physics-1.jpg",
  },
]

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-screen items-center justify-center">
      {pillars.map((pillar, idx) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="flex-1 w-full lg:h-[70vh] liquid-glass flex flex-col overflow-hidden relative group"
        >
          <div className="flex-1 relative">
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-none opacity-80" />
          </div>
          <div className="p-10 relative z-10 space-y-4">
            <h3 className="text-4xl font-extrabold text-white uppercase tracking-tighter">
              {pillar.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed tracking-wider font-light">
              {pillar.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

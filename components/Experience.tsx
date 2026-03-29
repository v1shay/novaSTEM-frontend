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
    <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-screen items-center justify-center perspective">
      {pillars.map((pillar, idx) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, scale: 0.95, y: 80, rotateX: 15, z: -50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0, z: 0, filter: "blur(0px)" }}
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2, z: 20 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
          className="flex-1 w-full lg:h-[70vh] liquid-glass flex flex-col overflow-hidden relative group preserve-3d transform-gpu shadow-xl"
        >
          <div className="flex-1 relative overflow-hidden mask-image-bottom">
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-none opacity-90" />
          </div>
          <div className="p-10 relative z-10 space-y-4 transform-gpu" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tighter drop-shadow-lg">
              {pillar.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed tracking-wider font-light">
              {pillar.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

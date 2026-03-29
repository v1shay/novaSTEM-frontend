"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const researchItems = [
  {
    title: "Spark Curiosity",
    description: "We begin with an engaging problem or experiment that grabs attention",
    image: "/how/process-1.jpg",
    alignment: "right",
  },
  {
    title: "Build through Exploration",
    description: "Students dive in, experiment, and create real projects",
    image: "/images/IMG_2991.jpeg",
    alignment: "left",
  },
  {
    title: "Turn Experience into Understanding",
    description: "Through reflection and guidance, students connect what they built to real STEM concepts.",
    image: "/images/IMG_3011.jpeg",
    alignment: "right",
  },
]

export function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 space-y-24 lg:space-y-40 perspective preserve-3d relative w-full">
      {researchItems.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: item.alignment === "right" ? 150 : -150, z: -500, rotateY: item.alignment === "right" ? 45 : -45, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, z: 0, rotateY: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-150px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 + idx * 0.15 }}
          className={`flex flex-col ${item.alignment === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20 preserve-3d transform-gpu`}
        >
          <div className="flex-1 space-y-6 transform-gpu" style={{ transform: "translateZ(80px)" }}>
            <h3 className="font-display text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              {item.title}
            </h3>
            <p className="text-2xl text-white/60 leading-relaxed font-light transform-gpu" style={{ transform: "translateZ(30px)" }}>
              {item.description}
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: item.alignment === "right" ? -10 : 10, rotateX: 5, z: 100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 w-full aspect-video lg:aspect-square relative liquid-glass overflow-hidden preserve-3d shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

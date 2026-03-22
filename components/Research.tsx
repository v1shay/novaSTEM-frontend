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
    <div className="max-w-7xl mx-auto px-4 py-32 space-y-16 lg:space-y-24">
      {researchItems.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: item.alignment === "right" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col ${item.alignment === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-16`}
        >
          <div className="flex-1 space-y-4">
            <h3 className="text-4xl font-bold text-white tracking-tight">
              {item.title}
            </h3>
            <p className="text-xl text-white/50 leading-relaxed font-light">
              {item.description}
            </p>
          </div>
          <div className="flex-1 w-full aspect-video lg:aspect-square relative liquid-glass overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const row1 = [
  "/images/home/hero-1.jpg",
  "/how/students-1.jpg",
  "/images/IMG_3005.jpeg",
  "/images/home/impact-1.jpg",
  "/how/process-1.jpg",
  "/images/home/hero-1.jpg",
  "/how/students-1.jpg",
  "/images/IMG_3005.jpeg",
  "/images/home/impact-1.jpg",
  "/how/process-1.jpg",
]

const row2 = [
  "/images/home/impact-2.jpg",
  "/images/IMG_3011.jpeg",
  "/how/process-1.jpg",
  "/images/home/hero-2.jpg",
  "/images/IMG_2991.jpeg",
  "/images/home/impact-2.jpg",
  "/images/IMG_3011.jpeg",
  "/how/process-1.jpg",
  "/images/home/hero-2.jpg",
  "/images/IMG_2991.jpeg",
]

const row3 = [
  "/images/home/hero-1.jpg",
  "/images/IMG_2991.jpeg",
  "/how/students-1.jpg",
  "/images/home/impact-1.jpg",
  "/images/IMG_3005.jpeg",
  "/images/home/hero-1.jpg",
  "/images/IMG_2991.jpeg",
  "/how/students-1.jpg",
  "/images/home/impact-1.jpg",
  "/images/IMG_3005.jpeg",
]

export function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-32 space-y-12 overflow-hidden select-none w-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-black text-white/5 uppercase tracking-[0.4em] mb-8 pointer-events-none"
      >
        NovaSTEM Gallery
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 150, z: -300 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, z: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col gap-8 px-4 preserve-3d"
      >
        {/* Row 1 - Moves Left */}
        <MarqueeRow images={row1} direction="left" speed={28} />

        {/* Row 2 - Moves Right */}
        <MarqueeRow images={row2} direction="right" speed={24} />

        {/* Row 3 - Moves Left (Slower) */}
        <MarqueeRow images={row3} direction="left" speed={38} />
      </motion.div>

      <div className="pt-20 text-[10px] uppercase tracking-[1.5em] text-white/10 font-bold animate-pulse">

      </div>
    </div>
  )
}

function MarqueeRow({ images, direction, speed }: { images: string[], direction: "left" | "right", speed: number }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="flex gap-6 pr-6"
        style={{ width: "max-content" }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-[320px] md:w-[500px] aspect-[16/10] liquid-glass rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
          >
            <Image
              src={src}
              alt={`Capture ${idx}`}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              sizes="(max-width: 768px) 320px, 500px"
              priority={idx < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-none" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "100+", label: "Students reached", type: "text" },
  { value: "/how/image.png", label: "Partners", type: "image" },
  { value: "0 $", label: "Locally funded", type: "text" },
]

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 px-4 max-w-7xl mx-auto w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-72 h-72 md:w-[24rem] md:h-[24rem] mb-4"
      >
        <Image
          src="/images/novastem-logo.png"
          alt="NovaSTEM Logo"
          fill
          className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-white drop-shadow-2xl leading-[0.8]">
          NovaSTEM
        </h1>
        <p className="text-xl md:text-2xl text-white/70 font-light tracking-[0.4em] uppercase mt-12">
          The next generation of STEM builders
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl pt-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label + idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.2, duration: 1 }}
            className="liquid-glass p-10 flex flex-col items-center justify-center text-center space-y-4"
          >
            {stat.type === "image" ? (
              <div className="relative w-20 h-20">
                <Image
                  src={stat.value}
                  alt={stat.label}
                  fill
                  className="object-contain brightness-200"
                />
              </div>
            ) : (
              <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">
                {stat.value}
              </span>
            )}
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

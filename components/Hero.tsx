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
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, z: -1000, rotateX: -20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, z: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center space-y-12 px-4 max-w-7xl mx-auto w-full min-h-screen preserve-3d"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotateX: 80, rotateY: -80, rotateZ: 45, z: -2000, filter: "blur(40px) brightness(3)" }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0, filter: "blur(0px) brightness(1)" }}
        viewport={{ once: false }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mb-4 preserve-3d transform-gpu perspective"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0], 
            rotateX: [0, 5, -2, 0], 
            rotateY: [0, -5, 3, 0], 
            rotateZ: [0, -1, 1, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotateY: -20, rotateX: 10, z: 150 }}
          className="w-full h-full relative preserve-3d cursor-pointer group"
        >
          <Image
            src="/images/novastem-logo.png"
            alt="NovaSTEM Logo"
            fill
            className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_200px_rgba(255,255,255,1)] group-hover:brightness-125 transition-all duration-700 ease-out"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80, rotateX: 45, z: -300, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0, filter: "blur(0px)" }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center preserve-3d"
      >
        <h1 className="font-display text-8xl md:text-[12rem] font-extrabold tracking-tighter text-white drop-shadow-2xl leading-[0.85]">
          NovaSTEM
        </h1>
        <p className="font-display text-xl md:text-2xl text-white/60 font-bold tracking-[0.5em] uppercase mt-12 transform-gpu" style={{ transform: "translateZ(30px)" }}>
          The next generation of STEM builders
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl pt-16 perspective">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label + idx}
            initial={{ opacity: 0, y: 100, rotateX: 60, z: -200, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, z: 0, scale: 1 }}
            transition={{ delay: 0.8 + idx * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, z: 30, transition: { duration: 0.4 } }}
            className="liquid-glass p-10 flex flex-col items-center justify-center text-center space-y-4 preserve-3d transform-gpu"
          >
            {stat.type === "image" ? (
              <div className="relative w-20 h-20 transform-gpu" style={{ transform: "translateZ(30px)" }}>
                <Image
                  src={stat.value}
                  alt={stat.label}
                  fill
                  className="object-contain brightness-200"
                />
              </div>
            ) : (
              <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight transform-gpu" style={{ transform: "translateZ(40px)" }}>
                {stat.value}
              </span>
            )}
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold transform-gpu" style={{ transform: "translateZ(20px)" }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

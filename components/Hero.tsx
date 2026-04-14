"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { src: "/how/image.png", alt: "Partner 1" },
  { src: "/images/partner-logo-2022.png", alt: "Partner 2" },
]

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, z: -1000, rotateX: -20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, z: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-start pt-6 md:pt-10 px-4 w-full min-h-screen preserve-3d"
    >
      {/* Brand Block: Logo and Name tied tightly together */}
      <div className="flex flex-col items-center w-full preserve-3d">
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2, rotateX: 80, rotateY: -80, rotateZ: 45, z: -2000, filter: "blur(40px) brightness(3)" }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0, filter: "blur(0px) brightness(1)" }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-64 h-64 md:w-[26rem] md:h-[26rem] preserve-3d transform-gpu perspective"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0], 
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

        {/* Name and Tagline - Pulled very close/under the logo */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 45, z: -300, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center preserve-3d -mt-16 md:-mt-28 relative z-10 w-full flex flex-col items-center"
        >
          <h1 className="font-display text-7xl md:text-[10rem] font-extrabold tracking-[-0.05em] text-white drop-shadow-2xl leading-[0.85] whitespace-nowrap text-center">
            NovaSTEM
          </h1>
          <p className="font-display text-lg md:text-xl text-white/50 font-bold tracking-[0.4em] uppercase mt-10 transform-gpu" style={{ transform: "translateZ(30px)" }}>
            The next generation of STEM builders
          </p>
        </motion.div>
      </div>

      {/* Trusted Partners Section */}
      <div className="flex flex-col items-center w-full pt-6 md:pt-10 perspective pb-10">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-6 w-full preserve-3d"
        >
          <span className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-black transform-gpu" style={{ transform: "translateZ(20px)" }}>
            Trusted Partners
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl px-4">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.src}
                initial={{ opacity: 0, scale: 0.8, z: -100 }}
                whileInView={{ opacity: 1, scale: 1, z: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.2 + idx * 0.15, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: idx === 0 ? -5 : 5, 
                  z: 50,
                  filter: "brightness(1.2) drop-shadow(0 0 40px rgba(255,255,255,0.2))"
                }}
                className="liquid-glass p-8 md:p-12 relative cursor-pointer transform-gpu preserve-3d flex items-center justify-center min-h-[150px] md:min-h-[280px] w-full aspect-[21/9]"
              >
                <div className="relative w-full h-full max-w-[85%]">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain brightness-110 contrast-125 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

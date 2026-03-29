"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, FileText, Globe } from "lucide-react"

const summary = [
  { label: "Founded", value: "2025" },
  { label: "Based in", value: "Bay Area, CA" },
]

export function Bio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col items-start justify-center min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-black text-white uppercase tracking-tighter mb-16"
      >
        Vishay Agarwal
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center h-full w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50, rotateX: 10, rotateY: -10, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateY: 0, filter: "blur(0px)" }}
          whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2, z: 20, transition: { duration: 0.4 } }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full lg:w-96 liquid-glass p-0 overflow-hidden ring-1 ring-white/10 preserve-3d transform-gpu shadow-xl group"
        >
          <Image
            src="/how/founder-photo-good.JPG"

            alt="Vishay Agarwal"
            fill
            className="object-cover opacity-90 brightness-110 group-hover:scale-110 transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, z: -100 }}
          whileInView={{ opacity: 1, x: 0, z: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 space-y-8 flex flex-col justify-center preserve-3d perspective"
        >
          <p className="text-2xl text-white/80 leading-relaxed font-light tracking-wide lg:max-w-2xl transform-gpu" style={{ transform: "translateZ(30px)" }}>
            Hi, I’m Vishay! As a kid, I took a variety of STEM classes, but I never learned the most there. It was in my room, spending hours experimenting, dropping Mentos into Coke bottles, taking apart electronics, and trying to build things that barely worked. Most of it failed, but that is where I actually learned how things work.

            That is the same energy I bring to NovaSTEM. I care about each student because I know what it feels like to be curious without the right space to explore. Real learning happens through experiments, challenges, and figuring things out yourself.

            That is why NovaSTEM focuses on experiences, not just concepts. My favorite moments are when a student’s face lights up during an experiment or when something finally clicks. That excitement is what I want every student to leave with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-md pt-8 self-end perspective">
            {summary.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateX: 45, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, z: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-glass p-6 text-center space-y-1 preserve-3d"
              >
                <div className="text-2xl font-bold text-white tracking-widest transform-gpu" style={{ transform: "translateZ(20px)" }}>{stat.value}</div>
                <div className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em] transform-gpu" style={{ transform: "translateZ(10px)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex gap-8 pt-12 text-white/60 self-start preserve-3d"
          >
            <motion.a whileHover={{ scale: 1.2, z: 20, rotateZ: 5 }} href="mailto:v.agrwl17@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-500" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, z: 20, rotateZ: -5 }} href="https://docs.google.com/document/d/17_go6arOIviQ2X_M8XTwY88k7OC9EA-g/edit" target="_blank" rel="noopener noreferrer">
              <FileText className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-700" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, z: 20, rotateZ: 5 }} href="https://vishayagarwal.vercel.app" target="_blank" rel="noopener noreferrer">
              <Globe className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-1000" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

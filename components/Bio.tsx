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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full lg:w-96 liquid-glass p-0 overflow-hidden ring-1 ring-white/10"
        >
          <Image
            src="/how/founder-photo-good.JPG"

            alt="Vishay Agarwal"
            fill
            className="object-cover opacity-90 brightness-110"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </motion.div>

        <div className="flex-1 space-y-8 flex flex-col justify-center">
          <p className="text-2xl text-white/80 leading-relaxed font-light tracking-wide lg:max-w-2xl">
            Hi, I’m Vishay! As a kid, I took a variety of STEM classes, but I never learned the most there. It was in my room, spending hours experimenting, dropping Mentos into Coke bottles, taking apart electronics, and trying to build things that barely worked. Most of it failed, but that is where I actually learned how things work.

            That is the same energy I bring to NovaSTEM. I care about each student because I know what it feels like to be curious without the right space to explore. Real learning happens through experiments, challenges, and figuring things out yourself.

            That is why NovaSTEM focuses on experiences, not just concepts. My favorite moments are when a student’s face lights up during an experiment or when something finally clicks. That excitement is what I want every student to leave with.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-md pt-8 self-end">
            {summary.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="liquid-glass p-6 text-center space-y-1"
              >
                <div className="text-2xl font-bold text-white tracking-widest">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-8 pt-12 text-white/60 self-start">
            <a href="mailto:v.agrwl17@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-500" />
            </a>
            <a href="https://docs.google.com/document/d/17_go6arOIviQ2X_M8XTwY88k7OC9EA-g/edit" target="_blank" rel="noopener noreferrer">
              <FileText className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-700" />
            </a>
            <a href="https://vishayagarwal.vercel.app" target="_blank" rel="noopener noreferrer">
              <Globe className="w-8 h-8 hover:text-white transition-opacity cursor-pointer animate-in fade-in duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

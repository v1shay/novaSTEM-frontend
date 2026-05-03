"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { src: "/partners/partner-logo-2022.png", alt: "Partner 1" },
  { src: "/partners/image-removebg-preview.png", alt: "Partner 2" },
  { src: "/partners/logo.png", alt: "Partner 3" },
  { src: "/how/image.png", alt: "Partner 4" },
]

export function Hero() {
  return (
    <div className="relative w-full h-screen max-h-screen flex flex-col pt-16 md:pt-20 pb-6 px-6 md:px-12 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      {/* Main Hero Section - Flex-1 to take available space and center content */}
      <div className="flex-1 flex items-center justify-center w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column: Brand Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start justify-center"
          >
            {/* NovaSTEM Brand Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-4 relative h-20 w-[160px] md:h-28 md:w-[220px] lg:h-36 lg:w-[280px]"
            >
              <Image
                src="/images/novastem-logo.png"
                alt="NovaSTEM Logo"
                fill
                className="object-contain object-left drop-shadow-sm"
                priority
              />
            </motion.div>

            {/* Typography Stack */}
            <div className="space-y-4">
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-display text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-emerald-950 leading-none whitespace-normal"
                >
                  NovaSTEM
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-display text-[10px] md:text-xs lg:text-sm text-emerald-900/60 font-bold tracking-[0.4em] uppercase"
                >
                  The next generation of STEM builders
                </motion.p>
              </div>

              {/* Stat Boxes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {[
                  { label: "Underserved Students Reached", value: "350+" },
                  { label: "Events Led", value: "5" },
                  { label: "Locally Funded", value: "0$ Workshops" }
                ].map((stat, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl bg-emerald-900/5 border border-emerald-900/10 backdrop-blur-md flex flex-col items-start justify-center shadow-sm">
                    <span className="text-emerald-950 font-black text-lg md:text-xl leading-none">{stat.value}</span>
                    <span className="text-emerald-900/50 text-[9px] md:text-[10px] uppercase tracking-widest mt-1 font-bold">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            {/* Main Hero Photo - Smaller and landscape */}
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] aspect-video overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 group">
              <Image
                src="/partners/hero-image.png"
                alt="STEM Students Collaborating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Visual Depth Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Partners / Trusted Section - Pinned to bottom via flex layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-7xl mx-auto mt-6 pt-6 border-t border-white/10"
      >
        <div className="flex flex-col items-center space-y-4">
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-900/50 text-center m-0">
            Trusted Partners
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.src}
                whileHover={{ scale: 1.05 }}
                className="relative w-20 h-8 md:w-32 md:h-10 lg:w-40 lg:h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain brightness-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

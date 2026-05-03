"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Calendar, MapPin } from "lucide-react"

const sessions = [
  {
    id: 1,
    name: "Physics and Density Investigation",
    date: "January 28, 2026",
    location: "Good Samaritan Preschool",
    cover: "/1/1083B3EB-4D6F-4062-B376-6104C3E01FF1.jpeg",
    images: [
      "/1/1083B3EB-4D6F-4062-B376-6104C3E01FF1.jpeg",
      "/1/0084FAD0-31E8-4380-88EE-9233B89762FE.jpeg",
      "/1/1C8514E0-58D9-4DB8-AC3B-F6E345100BF6.jpeg",
      "/1/2F6D443E-DCA5-4C1A-93CF-71153D0514E5.jpeg",
      "/1/65644A29-3F9B-4024-B131-A1B48165D099.jpeg",
      "/1/7CC6AAE7-183B-490A-8E9E-F45E2738ADBC.jpeg",
      "/1/A1095B82-5526-4F33-88ED-E3E7C54BC8E5.jpeg"
    ]
  },
  {
    id: 2,
    name: "Particle Diffusion Exploration",
    date: "January 14, 2026",
    location: "Good Samaritan Preschool",
    cover: "/2/04428367-01DB-45F3-A4DD-942E184D34F6_1_105_c.jpeg",
    images: [
      "/2/04428367-01DB-45F3-A4DD-942E184D34F6_1_105_c.jpeg",
      "/2/13877A6F-444B-4344-A506-5C731ABF544E_1_105_c.jpeg",
      "/2/1C7D714C-43FE-4987-AC87-C7D367441038_1_105_c.jpeg",
      "/2/1E6529DB-CC5E-48E7-96B4-29BABEDA8EE5_1_105_c.jpeg",
      "/2/894B54CD-04C4-4457-8383-3C110C2D9495_1_105_c.jpeg",
      "/2/A114D6F3-BA43-468D-A6AB-B77502FA5A8B_1_105_c.jpeg",
      "/2/C58EE37B-7B3A-42BF-9ECD-960908347400_1_105_c.jpeg",
      "/2/FAF5BCC3-8EE0-4B90-8C9D-F738F1231843_1_105_c.jpeg"
    ]
  },
  {
    id: 3,
    name: "Force and Propulsion Experiment",
    date: "November 11, 2025",
    location: "Good Samaritan Preschool",
    cover: "/3/2F7791BB-2C45-4CC3-B612-4544CAC16582_1_105_c.jpeg",
    images: [
      "/3/2F7791BB-2C45-4CC3-B612-4544CAC16582_1_105_c.jpeg",
      "/3/1E1E9162-33E9-47C3-BADC-7D7E055BC6F1_1_105_c.jpeg",
      "/3/36695CAD-1B77-4DC2-B531-8C992AC780AB_1_105_c.jpeg",
      "/3/4EDDF87F-74DC-4925-A1C9-9E7122A62D71_1_105_c.jpeg",
      "/3/52EE7B87-1F31-4372-88D6-B77244256CCA_1_105_c.jpeg",
      "/3/6F51544F-F64E-42CB-BE2D-C06838FC47D8_1_105_c.jpeg",
      "/3/743DB1F9-7DB0-4FBF-A20E-2E8B11D9FBDB_1_105_c.jpeg",
      "/3/8AA2D8F8-4F8E-41AF-B580-D4324A791E3B_1_105_c.jpeg",
      "/3/E646E29C-F7A9-47F3-B5AA-CCEBE111C055_1_105_c.jpeg",
      "/3/E85B570F-EE9B-4D93-B9CD-D9829EB58491_1_105_c.jpeg"
    ]
  },
  {
    id: 4,
    name: "Exothermic Explosion Challenge",
    date: "April 12, 2026",
    location: "Sobrato, Center for Nonprofits",
    cover: "/4/077B4C50-9DD6-440F-8750-B296E6F5BA64_1_106_c.jpeg",
    images: [
      "/4/077B4C50-9DD6-440F-8750-B296E6F5BA64_1_106_c.jpeg",
      "/4/0EEC4568-2B99-4474-9EED-9AC9A50D3DC2_1_201_a.jpeg",
      "/4/1A1ED2EC-F5A9-4EC0-8698-8C32FE4E9D37_1_201_a.jpeg",
      "/4/479B644B-D355-42E7-BDDB-1DB4F8846405_1_102_a.jpeg",
      "/4/582A0CFF-9DC7-4E09-937F-D8C0B70ED14D_1_201_a.jpeg",
      "/4/6CE17639-10D7-41AB-9044-5C0A7A3F44FB_1_201_a.jpeg",
      "/4/BC118A87-C71D-4706-9BA5-533B0E43C86C_1_201_a.jpeg",
      "/4/D0CF1A97-B459-4428-B3D9-B0CDCF713AE9_1_201_a.jpeg"
    ]
  }
]

export function Gallery() {
  const [activeSession, setActiveSession] = useState<typeof sessions[0] | null>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeSession) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeSession])

  return (
    <div className="w-full flex flex-col items-center min-h-screen pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black text-emerald-900 uppercase tracking-[0.2em] mb-12 text-center"
      >
        Event Gallery
      </motion.h2>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
        {sessions.map((session, idx) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 30, z: -100, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, z: 0, rotateX: 0 }}
            whileHover={{ scale: 1.03, rotateY: idx % 2 === 0 ? 5 : -5, rotateX: -5, z: 30, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveSession(session)}
            className="group relative h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-emerald-900/10 preserve-3d"
          >
            <Image
              src={session.cover}
              alt={session.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 transform-gpu translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 leading-tight">{session.name}</h3>
              <div className="flex items-center gap-2 text-emerald-900/80 text-sm md:text-base font-medium">
                <Calendar className="w-4 h-4" />
                <span>{session.date}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-900/80 text-sm md:text-base font-medium">
                <MapPin className="w-4 h-4" />
                <span>{session.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Gallery Modal */}
      <AnimatePresence>
        {activeSession && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white/80 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-[110] flex justify-between items-start p-6 bg-gradient-to-b from-white/95 to-transparent">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-5xl font-black text-emerald-900 tracking-tight uppercase">{activeSession.name}</h2>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 text-emerald-900/80 text-sm md:text-base font-bold">
                  <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {activeSession.date}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {activeSession.location}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveSession(null)}
                className="p-4 bg-emerald-900/10 hover:bg-emerald-900/20 hover:scale-110 rounded-full transition-all text-emerald-900 backdrop-blur-md shadow-lg fixed top-6 right-6"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Masonry Image Grid */}
            <div className="p-6 md:p-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto w-full pt-20">
              {activeSession.images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-crosshair mb-6"
                >
                  <Image
                    src={src}
                    alt={`Gallery photo ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

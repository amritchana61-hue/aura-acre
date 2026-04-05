'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../lib/animations'
import GlassPanel from '../ui/GlassPanel'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen pt-14 md:pt-16 px-6"
    >
      <motion.div
        className="max-w-2xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <GlassPanel className="px-8 md:px-10 py-12 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-[#A7EBF2] tracking-tight leading-tight"
          >
            Find Your Place in Toronto
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/80 mt-4 leading-relaxed"
          >
            Trusted local agents. Real neighbourhoods. Homes that fit your life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center mt-8 flex-wrap"
          >
            <Button variant="primary" className="px-8 py-3">
              Browse Listings
            </Button>
            <Button variant="ghost" className="px-8 py-3">
              How It Works
            </Button>
          </motion.div>

          {/* Search bar */}
          <motion.div variants={itemVariants} className="mt-8 max-w-xl mx-auto w-full">
            <div className="bg-white/[0.06] backdrop-blur-xl border border-[#A7EBF2]/[0.15] rounded-xl p-3 flex flex-col md:flex-row gap-3">
              <select
                className="bg-transparent border border-[#54ACBF]/30 rounded-lg px-4 py-2 text-white text-sm flex-1 focus:outline-none focus:border-[#54ACBF] cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#011C40]">All Types</option>
                <option value="detached" className="bg-[#011C40]">Detached House</option>
                <option value="condo" className="bg-[#011C40]">Condo</option>
                <option value="townhouse" className="bg-[#011C40]">Townhouse</option>
                <option value="semi" className="bg-[#011C40]">Semi-Detached</option>
              </select>

              <select
                className="bg-transparent border border-[#54ACBF]/30 rounded-lg px-4 py-2 text-white text-sm flex-1 focus:outline-none focus:border-[#54ACBF] cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#011C40]">All Neighbourhoods</option>
                <option value="yorkville" className="bg-[#011C40]">Yorkville</option>
                <option value="kingwest" className="bg-[#011C40]">King West</option>
                <option value="foresthill" className="bg-[#011C40]">Forest Hill</option>
                <option value="rosedale" className="bg-[#011C40]">Rosedale</option>
                <option value="distillery" className="bg-[#011C40]">Distillery District</option>
              </select>

              <Button variant="primary" className="px-6 py-2 text-sm">
                Search
              </Button>
            </div>
          </motion.div>
        </GlassPanel>
      </motion.div>
    </section>
  )
}

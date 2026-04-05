'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, itemVariants } from '../../lib/animations'

const stats = [
  { value: '1,200+', label: 'Active Listings' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Toronto Neighbourhoods' },
  { value: '2015', label: 'Year Established' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      className="w-full py-8 px-6 md:px-16 border-y border-[#A7EBF2]/10"
      style={{ background: 'rgba(2, 56, 89, 0.4)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <div className="text-3xl md:text-4xl font-bold text-[#A7EBF2] tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-white/60 mt-1 tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

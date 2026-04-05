'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, itemVariants } from '../../lib/animations'
import SectionWrapper from '../ui/SectionWrapper'
import GlassPanel from '../ui/GlassPanel'

const testimonials = [
  {
    quote:
      'We found our dream home in Rosedale within three weeks. The process was transparent from start to finish.',
    name: 'James & Priya T.',
    neighbourhood: 'Rosedale',
  },
  {
    quote:
      'As first-time buyers we were nervous, but the team made everything feel manageable. Closed on our King West condo in 30 days.',
    name: 'Sofia R.',
    neighbourhood: 'King West',
  },
  {
    quote:
      'Sold our Forest Hill property $80K above asking. Couldn\'t recommend this team more highly.',
    name: 'David M.',
    neighbourhood: 'Forest Hill',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#A7EBF2] tracking-tight leading-tight">
        What Our Clients Say
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(84, 172, 191, 0.25)' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-2xl"
          >
            <GlassPanel className="p-8 h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg text-[#A7EBF2]">★</span>
                ))}
              </div>
              <p className="text-base text-white/80 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-[#A7EBF2] mt-6 tracking-wide">{t.name}</p>
              <p className="text-xs text-white/50 mt-1 tracking-wide">{t.neighbourhood}</p>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

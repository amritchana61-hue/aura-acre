'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, itemVariants } from '../../lib/animations'
import SectionWrapper from '../ui/SectionWrapper'
import GlassPanel from '../ui/GlassPanel'

const steps = [
  {
    number: 1,
    title: 'Tell Us What You Need',
    description:
      'Share your budget, preferred neighbourhoods, and must-haves. We listen before we suggest anything.',
  },
  {
    number: 2,
    title: 'We Match You With Listings',
    description:
      "Our team filters Toronto's MLS in real time and sends you properties that actually fit your criteria.",
  },
  {
    number: 3,
    title: 'Book a Viewing',
    description:
      'Schedule a viewing in seconds through our calendar. No back-and-forth emails, no wasted trips.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="how-it-works">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#B8C6D9] tracking-tight leading-tight">
        How It Works
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Dashed connector line — desktop only */}
        <div className="hidden md:block absolute top-10 left-1/4 right-1/4 border-t border-dashed border-[#4A5D73]/30 z-0" />

        {steps.map((step) => (
          <motion.div key={step.number} variants={itemVariants} className="relative z-[10]">
            <GlassPanel className="p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#314357] flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#B8C6D9] mt-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">{step.description}</p>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

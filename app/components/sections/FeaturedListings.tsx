'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { containerVariants, itemVariants } from '../../lib/animations'
import SectionWrapper from '../ui/SectionWrapper'
import GlassPanel from '../ui/GlassPanel'

const listings = [
  {
    address: '42 Hazelton Ave',
    neighbourhood: 'Yorkville',
    price: '$2,450,000',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    alt: 'Luxury home at 42 Hazelton Ave, Yorkville',
  },
  {
    address: '180 Strachan Ave',
    neighbourhood: 'King West',
    price: '$1,180,000',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    alt: 'Modern condo at 180 Strachan Ave, King West',
  },
  {
    address: '65 Forest Hill Rd',
    neighbourhood: 'Forest Hill',
    price: '$3,750,000',
    beds: 4,
    baths: 3,
    sqft: '2,900',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    alt: 'Estate home at 65 Forest Hill Rd, Forest Hill',
  },
]

export default function FeaturedListings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="listings">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#A7EBF2] tracking-tight leading-tight mb-12">
        Featured Properties
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {listings.map((listing) => (
          <motion.div
            key={listing.address}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(84, 172, 191, 0.25)' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-2xl"
          >
            <GlassPanel className="p-0">
              {/* overflow-hidden on the image container only, NOT on GlassPanel */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <Image
                  src={listing.image}
                  alt={listing.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-medium text-[#54ACBF] bg-[#54ACBF]/15 rounded-full px-3 py-1 mb-3 tracking-wide">
                  {listing.neighbourhood}
                </span>
                <div className="text-base font-semibold text-white leading-snug">
                  {listing.address}
                </div>
                <div className="text-2xl font-bold text-[#A7EBF2] tracking-tight mt-1">
                  {listing.price}
                </div>
                <div className="flex gap-4 mt-3 text-sm text-white/60">
                  <span>{listing.beds} bed</span>
                  <span>{listing.baths} bath</span>
                  <span>{listing.sqft} sqft</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

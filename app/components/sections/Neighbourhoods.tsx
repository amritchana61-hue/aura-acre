'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { containerVariants, itemVariants } from '../../lib/animations'
import SectionWrapper from '../ui/SectionWrapper'

const neighbourhoods = [
  {
    name: 'Yorkville',
    price: 'Avg. $2.4M',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Upscale townhomes in Yorkville, Toronto',
    span: 'col-span-2 md:col-span-2',
  },
  {
    name: 'King West',
    price: 'Avg. $1.1M',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    alt: 'Modern condos in King West, Toronto',
    span: 'col-span-1',
  },
  {
    name: 'Forest Hill',
    price: 'Avg. $3.7M',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    alt: 'Estate homes in Forest Hill, Toronto',
    span: 'col-span-1',
  },
  {
    name: 'Rosedale',
    price: 'Avg. $2.9M',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    alt: 'Victorian homes in Rosedale, Toronto',
    span: 'col-span-1',
  },
  {
    name: 'Distillery District',
    price: 'Avg. $890K',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Historic Distillery District, Toronto',
    span: 'col-span-2 md:col-span-2',
  },
]

export default function Neighbourhoods() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="neighbourhoods">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#B8C6D9] tracking-tight leading-tight mb-12">
        Explore Toronto Neighbourhoods
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {neighbourhoods.map((n) => (
          <motion.div
            key={n.name}
            variants={itemVariants}
            className={`${n.span} relative overflow-hidden rounded-2xl cursor-pointer h-48 md:h-64`}
            whileHover="hovered"
          >
            <Image
              src={n.image}
              alt={n.alt}
              fill
              className="object-cover z-[1]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Dark overlay */}
            <motion.div
              className="absolute inset-0 z-[2]"
              variants={{
                hovered: { backgroundColor: 'rgba(1, 28, 64, 0.3)' },
              }}
              style={{ backgroundColor: 'rgba(1, 28, 64, 0.5)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />

            {/* Name */}
            <motion.span
              className="absolute bottom-4 left-4 z-[10] text-xl font-semibold text-white tracking-tight"
              variants={{
                hovered: { scale: 1.04 },
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {n.name}
            </motion.span>

            {/* Price */}
            <span className="absolute bottom-4 right-4 z-[10] text-sm font-medium text-[#B8C6D9]">
              {n.price}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

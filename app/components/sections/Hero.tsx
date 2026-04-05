'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HERO_VIDEO_SRC = '/4301618-hd_1920_1080_30fps.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showHeadline, setShowHeadline] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const tryPlay = () => {
      el.play().catch(() => {})
    }
    tryPlay()
    el.addEventListener('loadeddata', tryPlay)

    // Delay headline by 3.5 seconds (slower reveal)
    const timer = setTimeout(() => {
      setShowHeadline(true)
    }, 3500)

    return () => {
      el.removeEventListener('loadeddata', tryPlay)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen md:min-h-[115vh] items-center justify-center overflow-hidden px-6 pt-20 md:pt-24"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover md:object-[50%_30%]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[#011C40]/45"
        aria-hidden
      />

      {/* Headline */}
      <AnimatePresence>
        {showHeadline && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.6, 
              ease: [0.22, 1, 0.36, 1], // Custom quintic ease-out for a premium feel
              delay: 0.1 
            }}
            className="relative z-10 text-white text-4xl md:text-6xl lg:text-7xl font-semibold text-center tracking-tight px-4 max-w-4xl mx-auto leading-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            Find what moves you
          </motion.h1>
        )}
      </AnimatePresence>
    </section>
  )
}

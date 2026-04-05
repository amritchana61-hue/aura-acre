'use client'

import { useRef, useEffect } from 'react'

const HERO_VIDEO_SRC = '/7646491-uhd_2160_3840_25fps.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const tryPlay = () => {
      el.play().catch(() => {})
    }
    tryPlay()
    el.addEventListener('loadeddata', tryPlay)
    return () => el.removeEventListener('loadeddata', tryPlay)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 md:pt-24"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover"
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
    </section>
  )
}

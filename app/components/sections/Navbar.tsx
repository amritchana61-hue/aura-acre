'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Listings', href: '#listings' },
  { label: 'Neighbourhoods', href: '#neighbourhoods' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className="fixed left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-10 pointer-events-none"
        style={{ top: 'max(1rem, env(safe-area-inset-top, 0px))' }}
      >
        <nav
          className={`pointer-events-auto w-full max-w-6xl h-14 md:h-16 flex items-center justify-between px-5 md:px-8 rounded-full backdrop-blur-xl border border-[#A7EBF2]/10 bg-white/[0.03] [box-shadow:inset_0_1px_0_0_rgba(167,235,242,0.08)] ${
            scrolled
              ? 'border-[#A7EBF2]/20 bg-white/[0.07] [box-shadow:inset_0_1px_0_0_rgba(167,235,242,0.15),0_12px_40px_-8px_rgba(1,28,64,0.35)]'
              : ''
          }`}
        >
        {/* Logo */}
        <a href="#hero" className="text-xl font-medium text-white tracking-tight">
          Aura &amp; Acre
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-light text-white cursor-pointer no-underline"
              whileHover={{ color: '#B8C6D9' }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button variant="primary" className="px-5 py-2 text-xs">
            Book a Call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white/[0.08] backdrop-blur-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-6 text-white text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-light text-white no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" className="mt-4 px-8 py-3">
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

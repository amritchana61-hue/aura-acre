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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16 flex items-center justify-between px-6 md:px-16 ${
          scrolled ? 'border-b border-[#A7EBF2]/10' : ''
        }`}
        style={{
          background: 'rgba(1, 28, 64, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-[#A7EBF2] tracking-tight">
          Aura &amp; Acre
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A7EBF2] cursor-pointer no-underline"
              whileHover={{ color: '#54ACBF' }}
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
          <span className="block w-6 h-0.5 bg-[#A7EBF2]" />
          <span className="block w-6 h-0.5 bg-[#A7EBF2]" />
          <span className="block w-6 h-0.5 bg-[#A7EBF2]" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center backdrop-blur-xl"
            style={{ background: 'rgba(1, 28, 64, 0.95)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-6 text-[#A7EBF2] text-3xl cursor-pointer"
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
                  className="text-2xl font-medium text-[#A7EBF2] no-underline"
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

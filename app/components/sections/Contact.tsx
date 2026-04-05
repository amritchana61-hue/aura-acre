'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { itemVariants } from '../../lib/animations'
import GlassPanel from '../ui/GlassPanel'
import Button from '../ui/Button'

const inputClass =
  'bg-white/[0.06] border border-[#4A5D73]/30 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#4A5D73] w-full font-sans text-base'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16"
      style={{ background: 'rgba(1, 28, 64, 0.4)' }}
    >
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8C6D9] tracking-tight leading-tight">
          Ready to Find Your Home?
        </h2>
        <p className="text-base text-white/70 mt-4 leading-relaxed">
          Speak with a local Toronto agent today. No pressure, just honest advice.
        </p>

        {submitted ? (
          <GlassPanel className="mt-10 p-10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-lg font-semibold text-[#B8C6D9]">
              Thanks! We&apos;ll be in touch within 24 hours.
            </p>
          </GlassPanel>
        ) : (
          <form className="mt-10 text-left" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm font-medium text-[#B8C6D9] mb-1 block tracking-wide">
                Name
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-[#B8C6D9] mb-1 block tracking-wide">
                Email
              </label>
              <input
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-[#B8C6D9] mb-1 block tracking-wide">
                Phone
              </label>
              <input
                type="tel"
                className={inputClass}
                placeholder="+1 (416) 555-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium text-[#A7EBF2] mb-1 block tracking-wide">
                Message
              </label>
              <textarea
                className={`${inputClass} resize-none`}
                placeholder="Tell us what you're looking for…"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {loading ? (
              <motion.div
                className="w-full mt-2 bg-[#314357] text-white font-semibold text-sm tracking-wide px-8 py-3 rounded-lg text-center cursor-not-allowed"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                Sending…
              </motion.div>
            ) : (
              <Button variant="primary" type="submit" className="w-full mt-2">
                Send Message
              </Button>
            )}
          </form>
        )}
      </motion.div>
    </section>
  )
}

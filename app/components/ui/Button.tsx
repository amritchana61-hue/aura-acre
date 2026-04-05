'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'ghost'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'font-semibold text-sm tracking-wide px-8 py-3 rounded-lg cursor-pointer'
  const primary = 'bg-[#243342] text-white'
  const ghost = 'bg-transparent text-[#B8C6D9] border border-[#B8C6D9]'

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`${base} ${variant === 'primary' ? primary : ghost} ${className}`}
      whileHover={
        variant === 'primary'
          ? { backgroundColor: '#1E2B3E', scale: 1.01 }
          : { backgroundColor: 'rgba(184, 198, 217, 0.1)', scale: 1.01 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

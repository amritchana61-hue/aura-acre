interface GlassPanelProps {
  children: React.ReactNode
  className?: string
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div
      className={`bg-white/[0.06] backdrop-blur-xl border border-[#B8C6D9]/[0.15] rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}

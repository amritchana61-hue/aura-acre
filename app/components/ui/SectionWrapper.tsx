interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className="w-full">
      <div className={`py-24 px-6 md:px-16 max-w-7xl mx-auto ${className}`}>
        {children}
      </div>
    </section>
  )
}

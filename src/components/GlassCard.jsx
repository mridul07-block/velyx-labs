import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, style = {} }) {
  const ref = useRef(null)
  const highlightRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 260, damping: 30 })
  const rotateY = useSpring(rawRotateY, { stiffness: 260, damping: 30 })

  const handleMouseMove = (e) => {
    if (!hover || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    // Normalize mouse to -1..1 within card
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    rawRotateY.set(nx * 8)
    rawRotateX.set(-ny * 8)

    // Update highlight position directly (avoids FM CSS var issues)
    if (highlightRef.current) {
      const pctX = ((e.clientX - rect.left) / rect.width) * 100
      const pctY = ((e.clientY - rect.top) / rect.height) * 100
      highlightRef.current.style.setProperty('--mx', `${pctX}%`)
      highlightRef.current.style.setProperty('--my', `${pctY}%`)
    }
  }

  const handleMouseEnter = () => {
    if (hover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    rawRotateX.set(0)
    rawRotateY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-2xl relative overflow-hidden ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
        transformPerspective: 1000,
        rotateX: hover ? rotateX : 0,
        rotateY: hover ? rotateY : 0,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="expand"
      whileHover={hover ? {
        borderColor: 'rgba(127,119,221,0.45)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(127,119,221,0.2)',
      } : {}}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      {/* Glossy highlight overlay */}
      {hover && (
        <div
          ref={highlightRef}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            '--mx': '50%',
            '--my': '50%',
            background: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.06) 0%, transparent 60%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

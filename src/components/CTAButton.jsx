import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTAButton({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  size = 'md',
}) {
  const ref = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 300, damping: 20 })
  const y = useSpring(rawY, { stiffness: 300, damping: 20 })

  const isMagnetic = variant === 'primary'

  const handleMouseMove = (e) => {
    if (!isMagnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    rawX.set(Math.max(-12, Math.min(12, deltaX * 0.3)))
    rawY.set(Math.max(-12, Math.min(12, deltaY * 0.3)))
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const variants = {
    primary: `
      bg-velyx-500 text-white border border-velyx-500
      hover:bg-velyx-400 hover:border-velyx-400
      shadow-glow-sm hover:shadow-glow
      active:scale-[0.97]
    `,
    secondary: `
      bg-transparent text-velyx-400 border border-velyx-border
      hover:border-velyx-500 hover:text-velyx-300 hover:bg-velyx-dim
      active:scale-[0.97]
    `,
    ghost: `
      bg-transparent text-white border border-white/10
      hover:border-white/25 hover:bg-white/5
      active:scale-[0.97]
    `,
  }

  const base = `
    inline-flex items-center gap-2
    rounded-xl font-body font-medium
    transition-colors duration-200
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-velyx-500
    select-none
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `

  const motionProps = {
    ref,
    style: isMagnetic ? { x, y } : {},
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.97 },
    'data-cursor': 'expand',
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={base}>{children}</Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps} target="_blank" rel="noopener noreferrer">
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  )
}

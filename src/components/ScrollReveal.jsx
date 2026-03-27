import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SMOOTH_SPRING = [0.16, 1, 0.3, 1]

const variantMap = {
  fadeSlide: (direction) => ({
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
      scale: direction === 'scale' ? 0.92 : 1,
    },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
  }),

  clipReveal: () => ({
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
    visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1 },
  }),

  staggerContainer: () => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }),
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  variant = 'fadeSlide',
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  const variantFn = variantMap[variant] ?? variantMap.fadeSlide
  const variants = variantFn(direction)

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: variant === 'clipReveal' ? 0.75 : 0.65,
        delay,
        ease: SMOOTH_SPRING,
      }}
    >
      {children}
    </motion.div>
  )
}

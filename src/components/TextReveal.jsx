import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SMOOTH_SPRING = [0.16, 1, 0.3, 1]

export default function TextReveal({ text, delay = 0, className = '', as: Tag = 'span' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: 'bottom' }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: SMOOTH_SPRING,
            }}
          >
            {word}
          </motion.span>
          {/* Non-breaking space outside overflow-hidden to preserve word gap */}
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}

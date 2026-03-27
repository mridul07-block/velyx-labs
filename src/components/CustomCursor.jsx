import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const DOT_SIZE = 8
const RING_SIZE = 36
const RING_SIZE_EXPANDED = 56

export default function CustomCursor() {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Centered dot positions (offset by half size)
  const dotX = useTransform(mouseX, v => v - DOT_SIZE / 2)
  const dotY = useTransform(mouseY, v => v - DOT_SIZE / 2)

  // Ring trails with spring physics
  const ringSpringX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const ringSpringY = useSpring(mouseY, { stiffness: 150, damping: 20 })
  const ringSize = expanded ? RING_SIZE_EXPANDED : RING_SIZE
  const ringX = useTransform(ringSpringX, v => v - ringSize / 2)
  const ringY = useTransform(ringSpringY, v => v - ringSize / 2)

  useEffect(() => {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches
    if (!isPointerFine) return
    setIsTouch(false)

    const onMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const onMouseOver = (e) => {
      const target = e.target.closest('[data-cursor="expand"]')
      setExpanded(!!target)
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Dot — exact mouse position */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full bg-velyx-400"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          x: dotX,
          y: dotY,
          zIndex: 99999,
          opacity: visible ? (expanded ? 0 : 1) : 0,
          scale: expanded ? 0 : 1,
          transition: 'opacity 0.15s ease, scale 0.15s ease',
        }}
      />

      {/* Ring — spring-trailing */}
      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          x: ringX,
          y: ringY,
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          border: '1.5px solid rgba(127,119,221,0.7)',
          backgroundColor: expanded ? 'rgba(127,119,221,0.08)' : 'transparent',
          transition: 'opacity 0.2s ease, width 0.25s ease, height 0.25s ease, background-color 0.25s ease',
        }}
      />
    </>
  )
}

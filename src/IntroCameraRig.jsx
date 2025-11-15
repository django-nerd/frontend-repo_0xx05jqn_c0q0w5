import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IntroCameraRig = ({ children }) => {
  const { scrollYProgress } = useScroll()
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 6])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 })

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setMouse({ x, y })
      }}
      style={{
        rotateX,
        y: translateY,
        rotateY: mouse.x * 6,
      }}
      className="relative will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default IntroCameraRig

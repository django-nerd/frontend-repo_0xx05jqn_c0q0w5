import React from 'react'
import { motion } from 'framer-motion'

const hoverNudge = {
  hover: {
    y: -2,
    rotate: 0.8,
    transition: { type: 'spring', stiffness: 180, damping: 12 },
  },
}

const DeskPropsPhysics = () => {
  const items = [
    { key: 'keyboard', x: '20%', y: '72%', w: 220 },
    { key: 'headphones', x: '68%', y: '64%', w: 140 },
    { key: 'note', x: '52%', y: '75%', w: 90 },
    { key: 'cable', x: '36%', y: '70%', w: 160 },
  ]

  return (
    <div className="absolute inset-0">
      {items.map((i) => (
        <motion.div
          key={i.key}
          whileHover="hover"
          variants={hoverNudge}
          className="absolute bg-gradient-to-br from-white/5 to-white/0 rounded-md"
          style={{ left: i.x, top: i.y, width: i.w, height: i.w * 0.3, transform: 'translate(-50%, -50%)' }}
        />
      ))}
    </div>
  )
}

export default DeskPropsPhysics

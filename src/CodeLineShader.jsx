import React from 'react'
import { motion } from 'framer-motion'

// Faux shader-like flowing code lines as a background accent
const CodeLineShader = () => {
  const rows = new Array(8).fill(0)
  return (
    <div className="absolute inset-0 -z-0 opacity-40 pointer-events-none">
      {rows.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-20%' }}
          animate={{ x: '120%' }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: 'linear' }}
          className="absolute h-[1px] w-1/2 left-0"
          style={{ top: `${10 + i * 10}%`, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,.6), rgba(168,85,247,.5), transparent)' }}
        />
      ))}
    </div>
  )
}

export default CodeLineShader

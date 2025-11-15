import React from 'react'
import { motion } from 'framer-motion'

const DeviceScreenShader = ({ variant = 'code-lines' }) => {
  if (variant === 'code-lines') {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-[10%]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-10%' }}
            animate={{ x: '110%' }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
            className="absolute h-px left-0"
            style={{ top: `${(i * 5) % 100}%`, background: 'linear-gradient(90deg, rgba(34,211,238,.0), rgba(34,211,238,.6), rgba(168,85,247,.6), rgba(168,85,247,0))' }}
          />
        ))}
      </div>
    )
  }
  return null
}

export default DeviceScreenShader

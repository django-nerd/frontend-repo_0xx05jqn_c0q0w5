import React from 'react'
import { motion } from 'framer-motion'

const AboutMonitor = () => {
  return (
    <motion.div
      whileHover={{ rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 140, damping: 12 }}
      className="relative bg-black/80 border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md"
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
        boxShadow: 'inset 0 0 40px rgba(34,211,238,.15), inset 0 0 60px rgba(168,85,247,.12)'
      }} />
      <div className="relative">
        <p className="font-mono text-xs text-cyan-300/70">About John</p>
        <h3 className="mt-2 text-white text-xl font-semibold">I turn ideas into polished, performant products.</h3>
        <p className="mt-2 text-white/70 text-sm leading-relaxed">
          Full‑stack developer focused on delightful UX, robust APIs, and thoughtful systems.
        </p>
      </div>
    </motion.div>
  )
}

export default AboutMonitor

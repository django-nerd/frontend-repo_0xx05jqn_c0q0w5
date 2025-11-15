import React from 'react'
import { motion } from 'framer-motion'

const GlowingKeysEffect = () => (
  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-2 rounded bg-gradient-to-r from-cyan-400/30 via-white/20 to-fuchsia-400/30 blur-sm" />
)

const LaptopScreenContent = () => (
  <div className="absolute inset-[10px] bg-black/70 rounded-md overflow-hidden flex flex-col items-center justify-center text-center">
    <div className="text-white text-sm md:text-base">Let’s work together.</div>
    <div className="mt-2 flex items-center gap-4 text-xs text-white/70">
      <a href="mailto:john@example.com" className="hover:text-white/90">john@example.com</a>
      <a href="#" className="hover:text-white/90">GitHub</a>
      <a href="#" className="hover:text-white/90">LinkedIn</a>
    </div>
  </div>
)

const ContactLaptop = () => {
  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: 2 }}
      className="relative bg-neutral-900 border border-white/10 rounded-xl shadow-2xl"
      style={{ width: 360, height: 220 }}
    >
      <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,.06)' }} />
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="absolute inset-[14px] rounded-md"
      >
        <LaptopScreenContent />
      </motion.div>
      <GlowingKeysEffect />
    </motion.div>
  )
}

export default ContactLaptop

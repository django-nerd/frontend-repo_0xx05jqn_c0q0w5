import React from 'react'
import { motion } from 'framer-motion'

const HeroText = () => {
  return (
    <div className="relative z-10 text-center select-none">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,.25)]"
      >
        Hey, I’m John — I build apps.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="mt-4 text-sm md:text-base text-white/70"
      >
        Interactive curiosity, crafted with code.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-transparent via-cyan-400/60 to-fuchsia-400/60 shadow-[0_0_20px_rgba(168,85,247,.35)]" />
      </motion.div>
    </div>
  )
}

export default HeroText

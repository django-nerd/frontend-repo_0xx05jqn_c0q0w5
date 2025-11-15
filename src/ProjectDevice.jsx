import React from 'react'
import { motion } from 'framer-motion'
import DeviceScreenShader from './DeviceScreenShader'

const sizes = {
  phone: { w: 120, h: 220, r: 28 },
  tablet: { w: 220, h: 160, r: 20 },
  monitor: { w: 340, h: 210, r: 12 },
}

const ProjectDevice = ({ type = 'phone' }) => {
  const s = sizes[type]
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 160, damping: 12 }}
      className="relative bg-neutral-900 border border-white/10 shadow-2xl"
      style={{ width: s.w, height: s.h, borderRadius: s.r }}
    >
      <div className="absolute inset-0 rounded-[inherit]" style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,.05)' }} />
      <div className="absolute inset-[8px] bg-black/70 rounded-[inherit] overflow-hidden">
        <DeviceScreenShader variant="code-lines" />
      </div>
    </motion.div>
  )
}

export default ProjectDevice

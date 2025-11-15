import React from 'react'
import { motion } from 'framer-motion'

const ProjectStopCameraRig = ({ index = 1, children }) => {
  const offsets = [0, 120, 260]
  return (
    <motion.div
      initial={{ x: offsets[index - 1] || 0, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export default ProjectStopCameraRig

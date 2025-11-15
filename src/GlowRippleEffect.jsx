import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GlowRippleEffect = ({ active }) => {
  const [ripples, setRipples] = React.useState([])

  React.useEffect(() => {
    if (!active) return
    const id = setInterval(() => {
      setRipples((r) => [
        ...r,
        {
          id: Math.random().toString(36).slice(2),
          x: 50,
          y: 60,
        },
      ])
    }, 1600)
    return () => clearInterval(id)
  }, [active])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0.25, scale: 0.8 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
            className="absolute rounded-full"
            style={{
              left: `${r.x}%`,
              top: `${r.y}%`,
              width: 220,
              height: 220,
              background: 'radial-gradient(circle, rgba(64,224,255,0.15), rgba(168,85,247,0.05) 60%, rgba(0,0,0,0) 70%)',
              filter: 'blur(20px)',
              transform: 'translate(-50%, -50%)',
            }}
            onAnimationComplete={() => {
              setRipples((list) => list.filter((i) => i.id !== r.id))
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default GlowRippleEffect

import React from 'react'

const skills = [
  { name: 'React', color: 'text-cyan-300/80' },
  { name: 'FastAPI', color: 'text-fuchsia-300/80' },
  { name: 'MongoDB', color: 'text-cyan-300/80' },
  { name: 'Three.js', color: 'text-fuchsia-300/80' },
  { name: 'GSAP', color: 'text-cyan-300/80' },
]

const SkillsPanel = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
      {skills.map((s) => (
        <div key={s.name} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-center">
          <span className={`text-xs font-medium ${s.color}`}>{s.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SkillsPanel

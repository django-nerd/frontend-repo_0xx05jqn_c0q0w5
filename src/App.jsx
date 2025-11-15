import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import IntroCameraRig from './IntroCameraRig'
import GlowRippleEffect from './GlowRippleEffect'
import DeskPropsPhysics from './DeskPropsPhysics'
import HeroText from './HeroText'
import AboutMonitor from './AboutMonitor'
import SkillsPanel from './SkillsPanel'
import CodeLineShader from './CodeLineShader'
import ProjectDevice from './ProjectDevice'
import ProjectStopCameraRig from './ProjectStopCameraRig'
import ContactLaptop from './ContactLaptop'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* SECTION 1: INTRO */}
      <section className="relative h-[100svh] overflow-hidden">
        {/* 3D Hero */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none" />
        <IntroCameraRig>
          <div className="relative h-full flex items-center justify-center px-6">
            <GlowRippleEffect active />
            <HeroText />
            <DeskPropsPhysics />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="h-12 w-[2px] bg-gradient-to-b from-cyan-400/70 to-fuchsia-400/70 rounded-full" />
            </div>
          </div>
        </IntroCameraRig>
      </section>

      {/* SECTION 2: ABOUT / SKILLS */}
      <section className="relative py-24 md:py-36">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,.15),rgba(168,85,247,.12),transparent_70%)] blur-2xl" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <AboutMonitor />
            <div className="relative">
              <CodeLineShader />
              <SkillsPanel />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS */}
      <section className="relative py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10 place-items-center">
            <ProjectStopCameraRig index={1}>
              <ProjectDevice type="phone" />
            </ProjectStopCameraRig>
            <ProjectStopCameraRig index={2}>
              <ProjectDevice type="tablet" />
            </ProjectStopCameraRig>
            <ProjectStopCameraRig index={3}>
              <ProjectDevice type="monitor" />
            </ProjectStopCameraRig>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section className="relative py-28 md:py-40">
        <div className="container mx-auto px-6 max-w-5xl flex items-center justify-center">
          <ContactLaptop />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} John — Built with love and curiosity
      </footer>
    </div>
  )
}

export default App

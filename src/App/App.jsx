import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Desc from '../Description/Description'
import Nav from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import TechStack from '../Techstack/TechStack'
import Projects from '../Projects/Projects'
import AppSection from '../components/AppSection'
import { SECTION_IDS } from '../data/sections'
import './App.css'

function App() {
  const appRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const ctx = gsap.context(() => {
      const cleanupSelectors = [
        '.navbar',
        '.sidebar',
        '.hero-section',
        '.hero-rail',
        '.hero-copy > *',
        '.hero-visual > *',
        '.page-section--stack',
        '.technology',
        '.page-section--projects',
        '.project_card'
      ]

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.92,
          ease: 'power3.out'
        }
      })

      timeline
        .from('.navbar', {
          x: -64,
          y: -72,
          rotation: -4,
          opacity: 0,
          filter: 'blur(10px)'
        })
        .from('.sidebar', {
          x: -160,
          rotation: -22,
          opacity: 0,
          filter: 'blur(10px)'
        }, '-=0.72')
        .from('.hero-section', {
          y: 48,
          scale: 0.95,
          opacity: 0,
          filter: 'blur(6px)',
          duration: 0.8
        }, '-=0.68')
        .from('.hero-rail', {
          x: -120,
          opacity: 0,
          duration: 0.72
        }, '-=0.56')
        .from('.hero-copy > *', {
          x: -170,
          y: 28,
          rotation: -8,
          opacity: 0,
          filter: 'blur(8px)',
          stagger: 0.08,
          duration: 0.74
        }, '-=0.54')
        .from('.hero-visual > :not(.portrait-frame)', {
          x: 180,
          y: -30,
          rotation: 10,
          opacity: 0,
          filter: 'blur(8px)',
          stagger: 0.12,
          duration: 0.86
        }, '-=0.78')
        .from('.page-section--stack', {
          x: -120,
          y: 52,
          rotation: -4,
          opacity: 0,
          filter: 'blur(7px)',
          duration: 0.82
        }, '-=0.6')
        .from('.technology', {
          x: (index) => (index % 2 === 0 ? -120 : 120),
          y: () => gsap.utils.random(-36, 36),
          rotation: () => gsap.utils.random(-16, 16),
          scale: 0.74,
          opacity: 0,
          filter: 'blur(8px)',
          stagger: 0.08,
          duration: 0.74
        }, '-=0.56')
        .from('.page-section--projects', {
          x: 145,
          y: 42,
          rotation: 4,
          opacity: 0,
          filter: 'blur(7px)',
          duration: 0.86
        }, '-=0.56')
        .from('.project_card', {
          x: (index) => (index % 2 === 0 ? 190 : -190),
          y: () => gsap.utils.random(-50, 50),
          rotation: () => gsap.utils.random(-18, 18),
          scale: 0.78,
          opacity: 0,
          filter: 'blur(10px)',
          stagger: 0.09,
          duration: 0.84
        }, '-=0.62')
        .from('.portrait-frame', {
          x: () => -window.innerWidth * 0.72,
          y: -24,
          rotation: -18,
          scale: 0.72,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1.24,
          ease: 'bounce.out'
        }, '-=0.1')

      timeline.eventCallback('onComplete', () => {
        gsap.set(cleanupSelectors, {
          clearProps: 'transform,opacity,filter'
        })
      })

      return () => {
        timeline.kill()
        gsap.set(cleanupSelectors, {
          clearProps: 'transform,opacity,filter'
        })
      }
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="page-shell">
      <Nav />
      <Sidebar />

      <main className="page-content">
        <AppSection id={SECTION_IDS.HOME} className="hero-section">
          <Desc />
        </AppSection>

        <div className="editorial-spread">
          <AppSection id={SECTION_IDS.STACK} className="page-section--stack">
            <TechStack />
          </AppSection>

          <AppSection id={SECTION_IDS.PROJECTS} className="page-section--projects">
            <Projects />
          </AppSection>
        </div>
      </main>
    </div>
  )
}

export default App

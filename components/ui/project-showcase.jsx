"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

  const projects = [
  {
    title: "Front-End Developer Certificate of Competency",
    description: "PT. Sekawan Media Informatika",
    year: "November 2024",
    image: "/img/Sertifikat%20PT.%20Sekawan%20Media%20Informatika.jpg",
    // show a taller (portrait) preview on hover
    previewOrientation: 'portrait',
  },
  {
    title: "Certificate of Achievement Website Design, Front-End Development, and UI/UX Intern",
    description: "PT. Infimech Harmony Teknologi",
    year: "January 2026",
    image: "/img/Infimech%20Certificate%20Nikamtus%20Sholihah.jpg",
    // show a wider (landscape) preview on hover
    previewOrientation: 'landscape',
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e) => {
    // use absolute client coordinates so preview can be positioned at viewport coords
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-3xl mx-auto px-6 py-6">
      <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">CERTIFICATIONS</h2>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {/** compute preview dims based on hovered project */}
        {(() => {
          const defaultW = 320
          const defaultH = 180
          const orient = hoveredIndex != null && projects[hoveredIndex]?.previewOrientation
          let w = defaultW
          let h = defaultH

          if (orient === 'square') {
            w = 320
            h = 320
          } else if (orient === 'portrait') {
            w = 280
            h = 420
          } else if (orient === 'landscape') {
            w = 420
            h = 240
          }

          // clamp width to viewport for responsiveness (only if window available)
          if (typeof window !== 'undefined') {
            const maxW = Math.min(w, Math.round(window.innerWidth * 0.7))
            if (maxW < w) {
              const ratio = maxW / w
              w = maxW
              h = Math.round(h * ratio)
            }
          }

          return (
            <div className="relative overflow-hidden rounded-xl border border-border/40" style={{ width: `${w}px`, height: `${h}px`, backgroundColor: 'var(--secondary)' }}>
              {projects.map((project, index) => (
                <div key={project.title} className="absolute inset-0 transition-all duration-500 ease-out" style={{ opacity: hoveredIndex === index ? 1 : 0 }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={w}
                    height={h}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          )
        })()}
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href="#work-experience"
            className="group block"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('work-experience')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-5 border-t border-border transition-all duration-300">
              <div
                className={`absolute inset-0 -mx-4 px-4 bg-secondary/50 rounded-lg transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-lg tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span className={`absolute left-0 -bottom-0.5 h-px bg-foreground transition-all duration-300 ${hoveredIndex === index ? 'w-full' : 'w-0'}`} />
                      </span>
                    </h3>

                    <ArrowUpRight className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`} />
                  </div>

                  <p className={`text-muted-foreground text-sm mt-1 leading-relaxed transition-all duration-300 ${hoveredIndex === index ? 'text-foreground/70' : 'text-muted-foreground'}`}>
                    {project.description}
                  </p>
                </div>

                <span className={`text-xs font-mono text-muted-foreground tabular-nums transition-all duration-300 ${hoveredIndex === index ? 'text-foreground/60' : ''}`}>
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}

export default ProjectShowcase

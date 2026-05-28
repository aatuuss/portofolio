"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

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
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  

  useEffect(() => {
    // Scroll entrance animation detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasEntered) {
            setHasEntered(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasEntered])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")

    const updateHoverCapability = () => {
      setCanHover(mediaQuery.matches)
    }

    updateHoverCapability()

    mediaQuery.addEventListener("change", updateHoverCapability)

    return () => {
      mediaQuery.removeEventListener("change", updateHoverCapability)
    }
  }, [])

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor

    if (!canHover || hoveredIndex === null) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      return
    }

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
  }, [mousePosition, hoveredIndex, canHover])

  const handleMouseMove = (e) => {
    if (!canHover) return

    // use absolute client coordinates so preview can be positioned at viewport coords
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = (index) => {
    if (!canHover) return

    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    if (!canHover) return

    setHoveredIndex(null)
    setIsVisible(false)
  }

  const handleProjectPress = (e, index) => {
    if (canHover) return

    e.preventDefault()
    setMobileActiveIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-3xl mx-auto px-6 py-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">CERTIFICATIONS</motion.h2>

      {canHover && (
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
                  <div key={project.title} className="absolute inset-0 transition-all duration-300 ease-out" style={{ opacity: hoveredIndex === index ? 1 : 0 }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={w}
                      height={h}
                      className="h-full w-full object-cover"
                      priority={index === hoveredIndex}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
              </div>
            )
          })()}
        </div>
      )}

      {!canHover && mobileActiveIndex != null && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mb-4 overflow-hidden rounded-2xl border border-border/40 bg-secondary/70 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.55)]"
        >
          {(() => {
            const project = projects[mobileActiveIndex]
            const isPortrait = project.previewOrientation === 'portrait'
            const isLandscape = project.previewOrientation === 'landscape'
            const heightClass = isPortrait ? 'aspect-[2/3]' : isLandscape ? 'aspect-[16/9]' : 'aspect-square'

            return (
              <div className={`relative w-full ${heightClass}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/35 via-background/10 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  Tap to close
                </div>
              </div>
            )
          })()}
        </motion.div>
      )}

      <div className="space-y-0">
        {projects.map((project, index) => (
          <motion.button
            key={project.title}
            type="button"
            initial={hasEntered ? { opacity: 0, x: -20 } : { opacity: 0, x: -20 }}
            animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="group block w-full text-left"
            onClick={(e) => {
              handleProjectPress(e, index)
              if (canHover) {
                setHoveredIndex(index)
                setIsVisible(true)
              }
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-5 border-t border-border transition-all duration-300">
              <div
                className={`absolute inset-0 -mx-4 px-4 bg-secondary/50 rounded-lg transition-all duration-300 ${canHover ? hoveredIndex === index : mobileActiveIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-lg tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span className={`absolute left-0 -bottom-0.5 h-px bg-foreground transition-all duration-300 ${canHover ? hoveredIndex === index : mobileActiveIndex === index ? 'w-full' : 'w-0'}`} />
                      </span>
                    </h3>

                    <ArrowUpRight className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${canHover ? hoveredIndex === index : mobileActiveIndex === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`} />
                  </div>

                  <p className={`text-muted-foreground text-sm mt-1 leading-relaxed transition-all duration-300 ${canHover ? hoveredIndex === index : mobileActiveIndex === index ? 'text-foreground/70' : 'text-muted-foreground'}`}>
                    {project.description}
                  </p>
                </div>

                <span className={`text-xs font-mono text-muted-foreground tabular-nums transition-all duration-300 ${canHover ? hoveredIndex === index : mobileActiveIndex === index ? 'text-foreground/60' : ''}`}>
                  {project.year}
                </span>
              </div>
            </div>
          </motion.button>
        ))}

        <div className="border-t border-border" />
      </div>
    </motion.section>
  )
}

export default ProjectShowcase

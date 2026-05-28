"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CalendarDays, ChevronDown, ChevronUp, ExternalLink, MapPin, Sparkles } from "lucide-react"

const FigmaIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
)

const cardData = {
  1: {
    type: "work",
    company: "PT. Infimech Harmoni Teknologi",
    position: "Website Developer, UI/UX, & SEO Intern",
    period: "July 2025 – April 2026",
    location: "Malang",
    highlights: [
      "Developed high-performance company landing page using JavaScript and React.js",
      "Improved website SEO and page structure to increase search visibility",
      "Received positive feedback from CEO for work quality",
      "Designed modern UI/UX using Figma and implemented into production",
    ],
    links: [
      { label: "Infimech Website", url: "https://infimech.tech", type: "web" },
      { label: "Figma Mockup", url: "https://www.figma.com/proto/B0PXpRfbszmw38w0j4LVzl/Mockup-Website-Infimech?node-id=126-12&p=f&t=JecHCNniWmmZZbCb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=126%3A12&show-proto-sidebar=1", type: "figma" }
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  2: {
    type: "work",
    company: "PT. Karya Mulya Korpora",
    position: "Frontend Developer, UI/UX, & Website Developer Intern",
    period: "October 2025 – April 2026",
    location: "Malang",
    highlights: [
      "Developed responsive company landing page using Next.js and TypeScript",
      "Improved performance and desktop experience",
      "Designed UI/UX using Figma and Canva, creating high-fidelity mockups",
    ],
    links: [
      { label: "Kalako Website", url: "https://kalako.infimech.tech/home", type: "web" },
      { label: "Figma Kalako", url: "https://www.figma.com/proto/eww5IitCOGJXk7fTZxqLuK/Mock-up-Website-Kalako?node-id=2019-8&p=f&t=jrgVuyaFPYe6OcKm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2019%3A8", type: "figma" },
      { label: "ERP Mockup", url: "https://www.figma.com/proto/viwAkMrfTsH7DlqyXrR2aB/Mockup-ERP?node-id=16-2&p=f&t=at5UKeXqMmzgAF8T-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A2&show-proto-sidebar=1", type: "figma" }
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  3: {
    type: "work",
    company: "PT. Prima Rekayasa Mandiri",
    position: "Website Developer & UI/UX Intern",
    period: "November 2025 – April 2026",
    location: "Malang",
    highlights: [
      "Developed responsive company landing page using React.js and JavaScript",
      "Improved performance and desktop experience",
      "Designed UI/UX prototypes in Figma and converted to responsive websites",
      "Delivered responsive and visually appealing web interface",
    ],
    links: [
      { label: "Prime FEM Website", url: "https://fem.infimech.tech/", type: "web" },
      { label: "Figma Mockup", url: "https://www.figma.com/proto/S7qAVu0MzwECjGvOLRxjXP/Mock-Up-PrimeFEM?node-id=201-2&p=f&t=LH6rPnN3w6Wyn9jr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=201%3A2&show-proto-sidebar=1", type: "figma" }
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  4: {
    type: "work",
    company: "SMP Negeri 10 Malang",
    position: "UI/UX Design & Front-End Developer",
    period: "January 2025 – July 2025",
    location: "Malang",
    highlights: [
      "Designed and developed the school website with interactive user interface",
      "Created UI/UX designs using Figma",
    ],
    links: [
      { label: "Sikomodasa Website", url: "https://purple-coyote-369792.hostingersite.com/login", type: "web" },
      { label: "Figma Mockup", url: "https://www.figma.com/proto/wZXSoH7HI00wbBsDvwTGDc/Rancangan-Web-PancaKreatif?node-id=1-3&t=QRec0ffPak7vYTFO-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1", type: "figma" }
    ],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
  },
}

const initialCards = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
  { id: 4, contentType: 4 },
]

const TOTAL_CONTENT = Object.keys(cardData).length

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  opacity: 0,
  zIndex: 10,
  transition: { duration: 0.45, ease: "easeIn" },
}


function CardContent({ contentType, isExpanded, onToggle, cardId }) {
  const data = cardData[contentType]

  if (data.type === "work") {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[inherit]">
        <div className="relative h-38 w-full shrink-0 overflow-hidden">
          <Image
            src={data.image || "/placeholder.svg"}
            alt={data.company}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/35 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/35 to-transparent" />

          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/75 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-foreground shadow-[0_10px_24px_-12px_rgba(15,23,42,0.9)] backdrop-blur-md">
            <Sparkles className="size-3 text-indigo-400" />
            WORK EXPERIENCE
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-base font-bold leading-tight text-foreground drop-shadow-md">
                  {data.company}
                </h3>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-foreground/10 px-2.5 py-1 text-[10px] font-medium text-foreground/85 backdrop-blur-sm">
                  <CalendarDays className="size-3 text-indigo-400" />
                  {data.period}
                </div>
              </div>

              <div className="shrink-0 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md">
                Internship
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/15 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold text-indigo-400">
              <MapPin className="size-3" />
              {data.location}
            </span>
            <span className="rounded-full border border-border/70 bg-secondary/70 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
              {data.position}
            </span>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="rounded-2xl border border-border/60 bg-background/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm">
                  <ul className="space-y-2">
                    {data.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/85">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {data.links && data.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 border-t border-border/30 pt-3">
                      {data.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${link.type === 'figma' ? 'bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E]/20' : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20'}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.type === 'figma' ? <FigmaIcon className="size-3" /> : <ExternalLink className="size-3" />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* PERBAIKAN TOMBOL: Dibuat sangat kontras, tidak samar/nyaru dengan card */}
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={() => onToggle(cardId)}
              className={`flex h-9 w-full shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 rounded-full border text-[11px] font-bold tracking-wider uppercase transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-98 ${
                isExpanded 
                  ? 'border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 shadow-[0_4px_20px_rgba(244,63,94,0.15)]' 
                  : 'border-indigo-500/40 bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:shadow-[0_4px_25px_rgba(79,70,229,0.5)]'
              }`}
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="size-3" />
                </                >
              ) : (
                <>
                  View Details <ChevronDown className="size-3" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 relative flex h-50 w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-foreground">{data.title}</span>
          <span className="text-muted-foreground">{data.description}</span>
        </div>
        <button
          type="button"
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-indigo-600 pl-4 pr-3 text-sm font-medium text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:bg-indigo-500"
        >
          Read
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({ card, index, isAnimating, isExpanded, onToggle, hasEntered }) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = hasEntered ? { opacity: 0, scale: 0.85, y: y + 18 } : false

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ opacity: 1, y, scale }}
      exit={exitAnim}
      layout
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 22,
        mass: 0.6,
        bounce: 0,
        delay: hasEntered ? index * 0.08 : 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className={`group absolute flex ${isExpanded ? 'h-auto' : 'h-79'} w-81 origin-bottom items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-card via-card to-secondary/35 p-1 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)] ring-1 ring-white/5 backdrop-blur-xl will-change-transform transform-gpu sm:w-lg`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-px rounded-[26px] border border-white/5" />
      <CardContent contentType={card.contentType} isExpanded={isExpanded} onToggle={onToggle} cardId={card.id} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(5)
  const [expandedCards, setExpandedCards] = useState({})
  const [hasEntered, setHasEntered] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
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

  const handleToggleExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const handleAnimate = () => {
    if (isAnimating) return

    setIsAnimating(true)

    const lastBufferedContent = cards[3]?.contentType ?? cards[cards.length - 1].contentType
    const nextContentType = (lastBufferedContent % TOTAL_CONTENT) + 1

    const maxId = cards.reduce((m, c) => Math.max(m, c.id), 0)
    const newId = Math.max(nextId, maxId + 1)

    setCards([...cards.slice(1), { id: newId, contentType: nextContentType }])
    setNextId(newId + 1)

    window.setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex w-full flex-col items-center justify-center pt-3"
    >
      <motion.div className="relative min-h-105 w-full overflow-visible sm:w-161">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard 
              key={card.id}
              card={card} 
              index={index} 
              isAnimating={isAnimating}
              isExpanded={expandedCards[card.id] || false}
              onToggle={handleToggleExpand}
              hasEntered={hasEntered}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={hasEntered ? { opacity: 0, y: 10 } : { opacity: 0, y: 10 }}
        animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border/70 py-4"
      >
        <button
          type="button"
          onClick={handleAnimate}
          className="flex h-10 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-full border border-white/10 bg-linear-to-r from-background via-secondary/40 to-background px-4 font-medium text-secondary-foreground shadow-[0_18px_40px_-24px_rgba(15,23,42,0.9)] transition-all hover:-translate-y-0.5 hover:border-indigo-500/25 hover:bg-secondary/70 active:scale-[0.98]"
        >
          Animate
        </button>
      </motion.div>
    </motion.div>
  )
}
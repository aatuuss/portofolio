"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

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
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType, isExpanded, onToggle, cardId }) {
  const data = cardData[contentType]

  if (data.type === "work") {
    return (
      <div className="flex h-full w-full flex-col gap-0 pb-3">
        <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-t-xl">
          <Image
            src={data.image || "/placeholder.svg"}
            alt={data.company}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <h3 className="font-bold text-foreground text-sm leading-tight drop-shadow-md">{data.company}</h3>
            <p className="text-[10px] text-foreground/80 font-medium drop-shadow-sm">{data.period}</p>
          </div>
        </div>

        <div className="flex-1 px-3 pt-2 flex flex-col">
          <p className="text-xs font-semibold text-indigo-500 mb-0.5 leading-tight">{data.position}</p>
          <p className="text-[10px] text-muted-foreground flex items-center gap-1 mb-2">
             • {data.location}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-1 pt-2 border-t border-border/50">
                  <ul className="space-y-1 mb-2">
                    {data.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-[11px] text-foreground/80 leading-relaxed flex items-start gap-1.5">
                        <span className="text-indigo-500 font-bold mt-px">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {data.links && data.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-border/30 pb-2">
                      {data.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all hover:scale-105 ${link.type === 'figma' ? 'bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E]/20' : 'bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20'}`}
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
          
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={() => onToggle(cardId)}
              className="flex w-full h-7 shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-[11px] font-semibold text-secondary-foreground transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="size-3" />
                </>
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
      <div className="-outline-offset-1 relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
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
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-foreground pl-4 pr-3 text-sm font-medium text-background"
        >
          Read
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({ card, index, isAnimating, isExpanded, onToggle }) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className={`absolute flex ${isExpanded ? 'h-auto' : 'h-[280px]'} w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-border bg-card p-1 shadow-lg will-change-transform sm:w-[512px]`}
    >
      <CardContent contentType={card.contentType} isExpanded={isExpanded} onToggle={onToggle} cardId={card.id} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(5)
  const [expandedCards, setExpandedCards] = useState({})

  const handleToggleExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const handleAnimate = () => {
    // prevent triggering while an animation is already running
    if (isAnimating) return

    setIsAnimating(true)

    // pick the content of the buffered card (index 3) to compute the next one
    const lastBufferedContent = cards[3]?.contentType ?? cards[cards.length - 1].contentType
    const nextContentType = (lastBufferedContent % TOTAL_CONTENT) + 1

    // ensure generated id is unique based on current cards
    const maxId = cards.reduce((m, c) => Math.max(m, c.id), 0)
    const newId = Math.max(nextId, maxId + 1)

    setCards([...cards.slice(1), { id: newId, contentType: nextContentType }])
    setNextId(newId + 1)

    window.setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative min-h-[380px] w-full overflow-visible sm:w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard 
              key={card.id} 
              card={card} 
              index={index} 
              isAnimating={isAnimating}
              isExpanded={expandedCards[card.id] || false}
              onToggle={handleToggleExpand}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4">
        <button
          type="button"
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-border bg-background px-3 font-medium text-secondary-foreground transition-all hover:bg-secondary/80 active:scale-[0.98]"
        >
          Animate
        </button>
      </div>
    </div>
  )
}

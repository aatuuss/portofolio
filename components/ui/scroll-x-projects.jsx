"use client"

import * as React from "react"
import Image from "next/image"
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel"
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover"
import { Badge } from "@/components/ui/badge"

const SLIDES = [
  {
    id: "slide-1",
    title: "UI/UX Design",
    description: "Figma, Canva, Prototyping, High-Fidelity Mockups, User Interface",
    services: ["Figma", "Canva", "Prototyping", "UI Design"],
    type: "Design",
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "Technical",
    description: "React.js, Next.js, TypeScript, JavaScript, Laravel. Vite, MySQL",
    services: ["React.js", "Next.js", "TypeScript", "Laravel"],
    type: "Development",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "Tools",
    description: "Git, GitHub, SEO Optimization, Responsive Design",
    services: ["Git", "GitHub", "SEO", "Responsive"],
    type: "Optimization",
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2574&auto=format&fit=crop",
  },
]

export function ScrollXProjects() {
  const wrapClass = `flex flex-4/5 space-x-8 [&>*:first-child]:ml-8 ${SLIDES.length <= 4 ? 'justify-center' : ''}`

  return (
    <ScrollXCarousel className="h-[70vh]">
      <ScrollXCarouselContainer className="flex h-dvh flex-col gap-8 py-12 place-content-center">
        <div className="pointer-events-none absolute inset-[0_auto_0_0] z-10 h-[100%] w-[5vw] bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]" />
        <div className="pointer-events-none absolute inset-[0_0_0_auto] z-10 h-[100%] w-[5vw] bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)]" />

        <ScrollXCarouselWrap className={wrapClass}>
          {SLIDES.map((slide) => (
            <CardHoverReveal
              key={slide.id}
              className="min-w-[70vw] rounded-xl border shadow-xl md:min-w-[38vw] xl:min-w-[30vw]"
            >
              <CardHoverRevealMain>
                <div className="relative aspect-square size-full">
                  <Image
                    alt={slide.title}
                    src={slide.imageUrl}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, (max-width: 1280px) 38vw, 30vw"
                    priority
                  />
                </div>
              </CardHoverRevealMain>
              <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.5)] p-4 backdrop-blur-3xl">
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-full bg-indigo-500 capitalize">
                      {slide.type}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <Badge
                        key={service}
                        className="rounded-full capitalize"
                        variant="secondary"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-2 space-y-2">
                  <h3 className="font-medium capitalize text-white">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-white/80">{slide.description}</p>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </ScrollXCarouselWrap>
        <ScrollXCarouselProgress
          className="mx-8 h-1 overflow-hidden rounded-full bg-secondary"
          progressStyle="size-full rounded-full bg-indigo-500/70"
        />
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  )
}

export default ScrollXProjects

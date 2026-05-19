'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import AnimatedCardStack from '@/components/ui/animate-card-animation';
import { LinkPreview } from '@/components/ui/link-preview';
import AuroraBackground from '@/components/ui/aurora-background';
import { ProfessionalConnect } from '@/components/ui/get-in-touch';
import ProjectShowcase from '@/components/ui/project-showcase';
import { TextScramble } from '@/components/ui/text-scramble';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'PROJECTS', href: '#work-experience' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleScroll = (e) => {
      if (showIntro && e.deltaY > 10) setShowIntro(false);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e) => {
      if (showIntro && touchStartY - e.touches[0].clientY > 20) setShowIntro(false);
    };

    if (showIntro) {
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showIntro]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] w-full h-[100dvh] bg-background flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setShowIntro(false)}
          >
            <motion.div
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

              <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-muted-foreground mb-8 uppercase text-center px-4 animate-pulse">
                Scroll down to reveal
              </h1>

              <div className="w-[1px] h-32 bg-gradient-to-b from-muted-foreground to-transparent overflow-hidden">
                <motion.div
                  animate={{ y: [0, 100, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-white/50"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuroraBackground>

        <div id="home" />
        <MinimalistHero
          className="bg-transparent! min-h-[70vh]!"
          logoText={
            <TextScramble as="span" className="inline-block text-xl font-bold tracking-wider">
              PORTOFOLIO
            </TextScramble>
          }
          navLinks={navLinks}
          mainText={
            <div className="space-y-4">
              <p>
                Frontend Developer & UI/UX Designer with over 1 year of experience building responsive and modern websites using{' '}
                <LinkPreview url="https://nextjs.org" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4">Next.js</LinkPreview>
                ,{' '}
                <LinkPreview url="https://react.dev" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4">React</LinkPreview>
                , and{' '}
                <LinkPreview url="https://laravel.com" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4">Laravel</LinkPreview>, as well as transforming Figma designs into production-ready code.
              </p>
              <p>
                Experienced in improving the performance and SEO of corporate websites and creating user-friendly interfaces. Ready to contribute in a dynamic and agile environment.
              </p>

            </div>
          }
          imageSrc="/img/nikmatus_remove.png"
          imageAlt="Foto Nikmatus"
          overlayText={{ part1: 'Nikmatus', part2: 'Solihah' }}
        />

        <div id="work-experience" style={{ scrollMarginTop: '96px' }} className="mx-auto w-full max-w-5xl py-8 px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <TextScramble as="span" className="uppercase tracking-widest text-foreground">Work Experience</TextScramble>
          </h2>
          <div className="mx-auto w-full max-w-2xl">
            <AnimatedCardStack />
          </div>
        </div>

        {/* Selected Work */}
        <ProjectShowcase />
        <div id="contact" />
        <ProfessionalConnect />
      </AuroraBackground>
    </>
  );
}
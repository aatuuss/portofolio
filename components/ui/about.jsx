"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { navLinks, NavbarLogo } from '@/components/ui/navbar';

const TEXT_ANIMATION = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '-120%', opacity: 0 },
  transition: { type: 'spring', damping: 25, stiffness: 300 },
};

const splitIntoWords = (text) => text.split(' ');

const getStaggerDelay = (index, total, staggerFrom = 'first', staggerDuration = 0.035) => {
  if (staggerFrom === 'first') return index * staggerDuration;
  if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
  if (staggerFrom === 'center') {
    const center = Math.floor(total / 2);
    return Math.abs(center - index) * staggerDuration;
  }
  if (staggerFrom === 'random') {
    const randomIndex = Math.floor(Math.random() * total);
    return Math.abs(randomIndex - index) * staggerDuration;
  }

  return Math.abs(staggerFrom - index) * staggerDuration;
};

const RotatingText = ({ text, accentWords = [] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const words = useMemo(() => splitIntoWords(text), [text]);
  const cleanWord = (word) => word.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <motion.span className="flex flex-wrap whitespace-pre-wrap text-foreground/75 leading-relaxed tracking-wide">
      <span className="sr-only">{text}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? 'visible' : 'hidden'}
          className="flex flex-wrap"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {words.map((word, wordIndex, array) => {
            const isAccentWord = accentWords.some(
              (accentWord) => cleanWord(accentWord) === cleanWord(word)
            );

            return (
            <span
              key={`${word}-${wordIndex}`}
              className={`inline-flex ${isAccentWord ? 'font-semibold text-[#9b2c2c]' : ''}`}
            >
              {Array.from(word).map((char, charIndex) => {
                const characterIndex =
                  array.slice(0, wordIndex).reduce((sum, item) => sum + item.length, 0) +
                  charIndex;
                const totalCharacters = array.reduce((sum, item) => sum + item.length, 0);

                return (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    initial={TEXT_ANIMATION.initial}
                    animate={mounted ? TEXT_ANIMATION.animate : TEXT_ANIMATION.initial}
                    exit={TEXT_ANIMATION.exit}
                    transition={{
                      ...TEXT_ANIMATION.transition,
                      delay: getStaggerDelay(characterIndex, totalCharacters, 'first', 0.02),
                    }}
                    className={isAccentWord ? 'inline-block text-[#9b2c2c]' : 'inline-block'}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wordIndex !== array.length - 1 && <span className="whitespace-pre"> </span>}
            </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default function AboutHero({ startAnimation = true }) {
  return (
    <>
      <div id="about" />
      <MinimalistHero
        className="bg-transparent! min-h-[70vh]!"
        logoText={<NavbarLogo />}
        navLinks={navLinks}
        mainText={
          <div className="space-y-4">
            <RotatingText
              text="Hello! I'm Nikmatus Solihah, a Frontend Developer, UI/UX Designer, Website Developer, and SEO Specialist. I create digital products that are not only aesthetic and responsive, but also SEO-friendly, fast, and data-driven."
              accentWords={['Nikmatus', 'Solihah']}
            />
          </div>
        }
        imageSrc="/img/nikmatus_remove.png"
        imageAlt="Foto Nikmatus"
        overlayText={{ part1: 'Nikmatus', part2: 'Solihah' }}
        startAnimation={startAnimation}
      />
    </>
  );
}

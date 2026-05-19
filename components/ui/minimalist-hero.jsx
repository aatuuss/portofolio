"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonColorful from '@/components/ui/button-colorful';
import { EducationModal } from '@/components/ui/education-modal';
import { TextScramble } from '@/components/ui/text-scramble';

// Helper: gabungkan class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Komponen NavLink
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/70 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Komponen SocialIcon
const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/20 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

// Komponen utama MinimalistHero
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        'relative flex min-h-svh h-auto w-full flex-col items-center justify-start overflow-visible bg-background px-4 pb-10 pt-24 font-sans md:h-screen md:justify-between md:overflow-hidden md:px-12 md:pb-12 md:pt-32',
        className
      )}
    >
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-border/10 bg-background/80 px-8 py-6 backdrop-blur-md md:px-12 transition-all">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden z-50 p-2"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn("block h-0.5 w-6 bg-foreground transition-transform", isMenuOpen && "translate-y-2 rotate-45")}></span>
          <span className={cn("block h-0.5 w-6 bg-foreground transition-opacity", isMenuOpen && "opacity-0")}></span>
          <span className={cn("block h-0.5 w-5 bg-foreground transition-all", isMenuOpen && "w-6 -translate-y-2 -rotate-45")}></span>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-8 right-8 top-24 z-40 flex flex-col items-center space-y-6 rounded-2xl bg-background/95 border border-border/50 p-8 shadow-2xl backdrop-blur-lg md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold tracking-widest text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </header>

      {/* Area Konten Utama */}
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center gap-8 py-8 md:gap-0 md:py-0 md:grid-cols-3">
        {/* Teks Kiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-3 text-center md:order-1 md:text-left"
        >
          <div className="mx-auto max-w-sm space-y-4 text-sm leading-relaxed text-foreground/60 md:mx-0 md:max-w-md md:space-y-4 md:text-base">
            {mainText}
          </div>
          <div className="mt-4">
            <ButtonColorful label="Explore Components" onClick={() => setIsModalOpen(true)} />
          </div>
        </motion.div>

        {/* Gambar Tengah dengan Lingkaran */}
        <div className="relative order-1 flex h-full min-h-70 items-center justify-center md:order-2 md:min-h-100">
          {/* Glowing Aura */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-64 w-64 rounded-full bg-[#9b2c2c]/50 blur-3xl md:h-80 md:w-80 lg:h-96 lg:w-96"
          ></motion.div>
          
          {/* Colored Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute z-0 h-64 w-64 rounded-full border border-[#9b2c2c]/40 bg-[#9b2c2c] shadow-[0_0_60px_rgba(155,44,44,0.3)] md:h-80 md:w-80 lg:h-96 lg:w-96"
          ></motion.div>

          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-56 object-cover md:w-64 scale-125 lg:w-72 drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found';
            }}
          />
        </div>

        {/* Teks Kanan */}
        <div className="z-20 order-2 mt-6 flex items-center justify-center text-center md:mt-0 md:order-3 md:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <TextScramble
              as="span"
              duration={0.9}
              speed={0.05}
              className="block text-4xl sm:text-6xl font-extrabold leading-none text-foreground md:text-5xl lg:text-8xl"
            >
              {overlayText.part1}
            </TextScramble>
            <TextScramble
              as="span"
              duration={0.9}
              speed={0.05}
              className="block text-4xl sm:text-6xl font-extrabold leading-none text-foreground md:text-5xl lg:text-8xl"
            >
              {overlayText.part2}
            </TextScramble>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-30 mt-8 flex w-full max-w-7xl items-center justify-between md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks?.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>

      <EducationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
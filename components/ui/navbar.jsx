"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TextScramble } from '@/components/ui/text-scramble';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#work-experience' },
  { label: 'CONTACT', href: '#contact' },
];

export function NavbarLogo() {
  return (
    <TextScramble as="span" className="inline-block text-xl font-bold tracking-wider">
      PORTOFOLIO
    </TextScramble>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-6 z-50 w-[90%] max-w-5xl -translate-x-1/2">
    <motion.header
      animate={{
        scale: isScrolled ? 1.01 : 1,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative overflow-visible rounded-full border border-white/10 bg-background/40 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:bg-background/60 md:px-10"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-white/15 to-transparent"
        animate={{ opacity: isScrolled ? 0.75 : 0.35, scaleX: isScrolled ? 1 : 0.65 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />

      <div className="relative mx-auto flex w-full items-center justify-between gap-4">
        <motion.div
          animate={{ opacity: 1, x: isScrolled ? -18 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-xl font-bold tracking-wider"
        >
          <NavbarLogo />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: isScrolled ? 18 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="hidden items-center space-x-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-bold tracking-widest text-foreground/80 transition-all duration-300 hover:text-indigo-500 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-500 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </motion.div>

        <motion.button
          animate={{ opacity: 1, x: isScrolled ? 10 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="z-50 flex flex-col items-center justify-center gap-1.5 p-2 text-sm font-bold tracking-widest text-foreground/70 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navbar-menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className={cn('block h-0.5 w-6 bg-foreground transition-transform duration-300', isMenuOpen && 'translate-y-2 rotate-45')} />
          <span className={cn('block h-0.5 w-6 bg-foreground transition-opacity duration-300', isMenuOpen && 'opacity-0')} />
          <span className={cn('block h-0.5 w-5 bg-foreground transition-all duration-300', isMenuOpen && 'w-6 -translate-y-2 -rotate-45')} />
        </motion.button>
      </div>
    </motion.header>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          id="mobile-navbar-menu"
          initial={{ opacity: 0, y: -16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="absolute left-0 right-0 top-[calc(100%+0.75rem)] mx-auto flex w-full flex-col gap-3 rounded-3xl border border-white/10 bg-background/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-2xl border border-white/5 px-4 py-3 text-center text-sm font-bold tracking-[0.22em] text-foreground/85 transition-colors hover:border-white/10 hover:bg-white/5 hover:text-indigo-500"
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}

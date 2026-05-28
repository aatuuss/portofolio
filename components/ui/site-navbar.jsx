"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="group relative text-sm font-bold tracking-widest text-foreground/80 transition-all duration-300 hover:text-indigo-500 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
  >
    {children}
    <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
  </a>
);

export function SiteNavbar({ logoText, navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    //<div className="fixed left-1/2 top-6 z-50 w-[90%] max-w-5xl -translate-x-1/2">
    //<motion.header
    //window.addEventListener('scroll', handleScroll, { passive: true });

      //className="relative overflow-visible rounded-full border border-white/10 bg-background/40 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:bg-background/60 md:px-10"
  }, []);

  return (
    <motion.header
      animate={{ scale: isScrolled ? 1.01 : 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed left-1/2 top-6 z-50 w-[90%] max-w-5xl -translate-x-1/2 overflow-hidden rounded-full border border-white/10 bg-background/40 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:bg-background/60 md:px-10"
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
          {logoText}
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: isScrolled ? 18 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="hidden items-center space-x-8 md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </motion.div>

        <motion.button
          animate={{ opacity: 1, x: isScrolled ? 10 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="z-50 flex flex-col space-y-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={cn('block h-0.5 w-6 bg-foreground transition-transform', isMenuOpen && 'translate-y-2 rotate-45')} />
          <span className={cn('block h-0.5 w-6 bg-foreground transition-opacity', isMenuOpen && 'opacity-0')} />
          <span className={cn('block h-0.5 w-5 bg-foreground transition-all', isMenuOpen && 'w-6 -translate-y-2 -rotate-45')} />
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-8 right-8 top-24 z-40 flex flex-col items-center space-y-6 rounded-2xl border border-border/50 bg-background/95 p-8 shadow-2xl backdrop-blur-lg md:hidden"
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
    </motion.header>
  );
}
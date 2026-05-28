"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonColorful from '@/components/ui/button-colorful';
import { EducationModal } from '@/components/ui/education-modal';
import { TextScramble } from '@/components/ui/text-scramble';
import { TypingText } from '@/components/ui/typing-text';
import { SiteNavbar } from '@/components/ui/site-navbar';

// Helper: gabungkan class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
  startAnimation = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={cn(
          'relative flex min-h-svh h-auto w-full flex-col items-center justify-start overflow-visible bg-transparent px-4 pb-10 pt-14 font-sans md:h-screen md:justify-between md:px-12 md:pb-12 md:pt-20 after:absolute after:inset-0 after:pointer-events-none after:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.04),transparent_45%)]',
        className
      )}
    >
      {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-18">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
      </div>
      <SiteNavbar logoText={logoText} navLinks={navLinks} />

      {/* Area Konten Utama */}
      <div className="relative z-10 grid w-full max-w-7xl grow grid-cols-1 items-center gap-8 py-8 md:gap-0 md:py-0 md:grid-cols-3">
        {/* Teks Kiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="z-20 order-3 text-center md:order-1 md:text-left"
        >
          <div className="mx-auto max-w-sm space-y-4 text-sm leading-relaxed text-foreground/70 md:mx-0 md:max-w-md md:space-y-4 md:text-base group">
            {mainText}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6"
          >
            <ButtonColorful label="More About Me" onClick={() => setIsModalOpen(true)} />
          </motion.div>
        </motion.div>

        {/* Gambar Tengah dengan Lingkaran */}
        <div className="relative order-1 flex h-full min-h-70 items-center justify-center md:order-2 md:min-h-100">
          {/* Glowing Aura */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ 
              scale: [0.3, 1.2, 1],
              opacity: [0, 1, 0.8]
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute z-0 h-64 w-64 rounded-full bg-[#9b2c2c]/50 blur-3xl md:h-80 md:w-80 lg:h-96 lg:w-96"
          ></motion.div>
          
          {/* Colored Circle */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotate: -90 }}
            whileInView={{ 
              scale: [0.4, 1.25, 1],
              opacity: [0, 1, 0.9],
              rotate: [-90, 45, 0]
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.4, ease: "easeOut", delay: 0.1 }}
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
            <TypingText
              as="span"
              speed={150}
              start={startAnimation}
              className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none bg-linear-to-br from-foreground via-indigo-400 to-foreground/70 bg-clip-text text-transparent"
            >
              {`${overlayText.part1} ${overlayText.part2}`}
            </TypingText>
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
          className="flex items-center gap-6"
        >
          {socialLinks?.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <SocialIcon href={link.href} icon={link.icon} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/60"
        >
          {locationText}
        </motion.div>
      </footer>

      <EducationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
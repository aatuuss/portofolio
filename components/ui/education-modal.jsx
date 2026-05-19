import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export function EducationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] dark:bg-zinc-950 dark:border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Education</h2>
                <p className="text-sm text-muted-foreground">My academic background</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">SMK Negeri 6 Malang</h3>
                <p className="text-primary font-medium">Software Engineering (Rekayasa Perangkat Lunak)</p>
                
                <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Malang, East Java</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>July 2023 – May 2026 (Expected Graduation)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/30 p-4 border border-border/50">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Relevant Coursework
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Frontend Development</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent p-4 border border-emerald-500/20">
                <Award className="h-6 w-6 text-emerald-500" />
                <div>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Average Grade</p>
                  <p className="text-2xl font-bold text-foreground">89.39</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

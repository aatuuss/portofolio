"use client";

import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const WhatsAppIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.3-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.26-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.294-.501.1-.2.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.246-.705.246-1.29.173-1.425-.074-.135-.274-.225-.574-.375z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.667 1.436 5.168L2 22l4.969-1.385C8.384 21.493 10.134 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
)

export function SocialConnect() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section className="relative w-full overflow-hidden px-6 py-24 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 mb-6 w-max">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            Tersedia untuk Bekerja
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Mari bangun sesuatu yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">menakjubkan</span> bersama.
          </h2>
          
          <p className="text-foreground/70 text-lg mb-10 max-w-md leading-relaxed">
            Saya sedang mencari peluang baru. Jika Anda memiliki pertanyaan, ide proyek, atau sekadar ingin menyapa, saya akan berusaha membalas secepatnya!
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                <Mail className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/50 mb-1">Email</p>
                <a href="mailto:nikmatussolihah@icloud.com" className="text-lg font-semibold text-foreground hover:text-indigo-500 transition-colors">
                  nikmatussolihah@icloud.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                <MapPin className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/50 mb-1">Location</p>
                <p className="text-lg font-semibold text-foreground">
                  Malang, East Java
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground/50 mb-4">Terhubung di Media Sosial</p>
            <div className="flex gap-4">
              <a href="https://wa.me/6282141342998" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-emerald-500 hover:text-white transition-all hover:scale-110">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/nikmatus-solihah-72361840a/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-blue-600 hover:text-white transition-all hover:scale-110">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="https://github.com/aatuuss" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-slate-800 hover:text-white transition-all hover:scale-110">
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/_505atus/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-pink-500 hover:text-white transition-all hover:scale-110">
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-2xl rounded-3xl z-0"></div>
          
          <form 
            onSubmit={handleSubmit}
            className="relative z-10 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-2xl dark:bg-zinc-900/50"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Subjek</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Pesan</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-600 disabled:opacity-70"
              >
                <div className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  <Send className={`h-4 w-4 transition-transform duration-300 ${isSubmitting ? 'translate-x-2 opacity-0' : 'group-hover:translate-x-1'}`} />
                </div>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default SocialConnect;
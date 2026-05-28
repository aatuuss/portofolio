"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AuroraBackground from '@/components/ui/aurora-background';
import { Navbar } from '@/components/ui/navbar';
import AboutHero from '@/components/ui/about';
import { LinkPreview } from '@/components/ui/link-preview';
import AnimatedCardStack from '@/components/ui/animate-card-animation';
import ProjectShowcase from '@/components/ui/project-showcase';
import { ProfessionalConnect } from '@/components/ui/get-in-touch';
import { Typewriter } from '@/components/ui/typewriter';
import { ArrowRight, LayoutGrid, Rocket, Sparkles, Smartphone } from 'lucide-react';

	const homeCards = [
	{ title: 'Frontend Craft', description: 'Landing page, company profile, dan portfolio yang terasa premium, cepat, dan responsif.', icon: LayoutGrid },
	{ title: 'Interactive Motion', description: 'Animasi halus dan transisi yang dipakai untuk memperjelas fokus, bukan sekadar hiasan.', icon: Sparkles },
	{ title: 'Mobile First', description: 'Setiap layout disusun agar tetap rapi di layar kecil, tablet, dan desktop.', icon: Smartphone },
	{ title: 'Launch Ready', description: 'Struktur konten, performa, dan SEO disiapkan supaya siap dipresentasikan ke klien.', icon: Rocket },
];

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);

	const scrollToPortfolio = () => {
		const target = document.getElementById('work-experience');

		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	useEffect(() => {
		document.body.style.overflow = showIntro ? 'hidden' : 'unset';

		const handleScroll = (event) => {
			if (showIntro && event.deltaY > 10) setShowIntro(false);
		};

		if (showIntro) {
			window.addEventListener('wheel', handleScroll);
		}

		return () => {
			document.body.style.overflow = 'unset';
			window.removeEventListener('wheel', handleScroll);
		};
	}, [showIntro]);

	return (
		<>
			<AnimatePresence>
				{showIntro && (
					<motion.div
						initial={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
						className="fixed inset-0 z-9999 flex h-dvh w-full cursor-pointer flex-col items-center justify-center bg-background"
						onClick={() => setShowIntro(false)}
					>
						<motion.div exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }} className="relative flex h-full w-full flex-col items-center justify-center">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_60%)]" />

							<h1 className="mb-8 px-4 text-center text-3xl font-light uppercase tracking-[0.2em] text-muted-foreground animate-pulse md:text-5xl">
								Scroll down to reveal
							</h1>

							<div className="h-32 w-px overflow-hidden bg-linear-to-b from-muted-foreground to-transparent">
								<motion.div animate={{ y: [0, 100, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="h-full w-full bg-white/50" />
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AuroraBackground>
				<div className="relative z-10">
					<Navbar />
				</div>

				<main className="relative overflow-hidden px-6 pb-12 pt-12 md:px-12 md:pt-16">
                    

					<section id="home" className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-20 pb-8 text-center md:pt-12 md:pb-10">
						<motion.div
							className="relative z-10 max-w-5xl"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						>
							<div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
								

								<h1
									style={{ fontFamily: 'var(--font-geist-sans)' }}
									className="animate-fade-rise max-w-4xl text-balance text-[clamp(3.5rem,10vw,8.75rem)] font-black uppercase leading-[0.82] -tracking-widest"
								>
									<span className="block tracking-normal text-slate-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]">
										Hai!! <span className="inline-block whitespace-nowrap">welcome my</span>
									</span>
									<span
										className="block text-transparent"
										style={{ WebkitTextStroke: '2px rgba(15, 23, 42, 0.75)' }}
									>
										portofolio
									</span>
								</h1>

								<p className="animate-fade-rise-delay mx-auto max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
									Sebuah ruang singkat untuk melihat karya, pengalaman, dan pendekatan saya membangun tampilan yang rapi, cepat, dan terasa premium.
								</p>

								<motion.a
									href="/CV/CV%20Nikmatus%20Solihah.pdf"
									download
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.98 }}
									className="animate-fade-rise-delay-2 group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black px-3 py-2 sm:px-8 sm:py-3.5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black hover:shadow-[0_18px_60px_-18px_rgba(255,255,255,0.45)]"
								>
									<span className="flex h-10 w-10 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-black text-white transition-all duration-300 group-hover:border-black/80 group-hover:bg-white group-hover:text-black">
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
									</span>
									<span className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.22em]">
										Get My CV
									</span>
								</motion.a>
							</div>
						</motion.div>
					</section>

					{/* About (in-page) */}
					<div className="pointer-events-none -mb-10 h-16 bg-linear-to-b from-transparent via-white/15 to-transparent dark:via-black/15 md:-mb-16 md:h-20" />

					<section className="relative z-20 -mt-24 mx-auto w-full max-w-7xl md:-mt-32" aria-labelledby="about">
						<AboutHero startAnimation={true} />
					</section>

					{/* Work Experience */}
					<section id="work-experience" className="mx-auto mt-10 w-full max-w-7xl md:mt-12">
						<h2 className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
				
								
							<span className="max-w-3xl bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl">
								<Typewriter
									text="Selected roles and projects"
									speed={55}
									waitTime={1200}
									deleteSpeed={35}
									loop={true}
									cursorChar="_"
									className="inline-flex items-center gap-1"
								/>
							</span>
							<span className="h-px w-24 bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />
						</h2>
						<AnimatedCardStack />
					</section>

					{/* Certification (original view) */}
					<section id="certification" className="mx-auto mt-16 w-full max-w-7xl">
						<ProjectShowcase />
					</section>

					{/* Contact */}
					<div id="contact" />
					<ProfessionalConnect />
				</main>
			</AuroraBackground>
		</>
	);
}


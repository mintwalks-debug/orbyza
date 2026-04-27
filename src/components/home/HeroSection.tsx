'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
      style={{ paddingTop: '5rem' }}
    >
      {/* ── Abstract Animated Background (Master Plan) ── */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-brand-accent/10 to-transparent rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container-max relative z-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-secondary/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-success animate-ping" />
              <span className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                Strategic Execution Hub
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-jakarta font-black leading-[1.1] tracking-tighter text-brand-dark">
              India&apos;s <span className="text-brand-primary">Growth-First</span> <br />
              Digital Agency.
            </h1>

            <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-xl font-medium">
              Trusted by 100+ brands across Mumbai, Delhi, Bengaluru & 12 countries. We engineer high-performance engines for absolute market dominance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-brand-primary text-white font-jakarta font-bold px-10 py-5 rounded-full hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 text-sm uppercase tracking-widest"
              >
                Get Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-jakarta font-bold text-sm uppercase tracking-widest text-brand-dark border border-brand-border hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>

            {/* Local Proof Strip */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-10 border-t border-brand-border w-full justify-center lg:justify-start">
               <div className="flex flex-col">
                  <div className="text-2xl font-black text-brand-dark">100+</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-brand-muted">Brands Scaled</div>
               </div>
               <div className="h-8 w-px bg-brand-border hidden md:block" />
               <div className="flex flex-col">
                  <div className="text-2xl font-black text-brand-dark">12+</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-brand-muted">Countries Served</div>
               </div>
               <div className="h-8 w-px bg-brand-border hidden md:block" />
               <div className="flex flex-col">
                  <div className="text-2xl font-black text-brand-dark">320%</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-brand-muted">Avg. ROI Uplift</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
             <div className="relative w-full max-w-lg aspect-[5/6] rounded-[4rem] overflow-hidden border border-brand-border shadow-3xl bg-slate-50">
                <Image
                  src="/orbyza_female_elite_strategist_professional_1774771830941.png"
                  alt="Orbyza India Strategic Lead"
                  fill
                  className="object-cover object-top hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
             </div>

             {/* Dynamic Floaties (SEO Proof) */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-12 top-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-brand-border flex items-center gap-4"
             >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xl">📈</div>
                <div>
                   <div className="text-brand-dark font-black text-sm uppercase">Growth Engine</div>
                   <div className="text-brand-muted text-[8px] uppercase tracking-widest font-bold">Mumbai // Delhi // Bangalore</div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -right-8 bottom-32 bg-white p-6 rounded-[2rem] shadow-2xl border border-brand-border flex items-center gap-4"
             >
                <div className="w-12 h-12 rounded-xl bg-brand-success/10 flex items-center justify-center text-brand-success text-xl">🏆</div>
                <div>
                   <div className="text-brand-dark font-black text-sm uppercase">#1 Agency</div>
                   <div className="text-brand-muted text-[8px] uppercase tracking-widest font-bold">Tier 1 India Leader</div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import Link from 'next/link';
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
        <div className="flex justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-center items-center max-w-4xl"
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

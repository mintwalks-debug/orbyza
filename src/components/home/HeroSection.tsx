'use client';

const heroKeyframes = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes floatUp {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
    50% { transform: translateY(-40px) scale(1.2); opacity: 0.6; }
  }
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ROTATING_WORDS = ['SEO', 'SEM', 'Social Media', 'Web Design', 'Content'];

// Fixed particle data — avoids Math.random() SSR/client hydration mismatch
const PARTICLES = [
  { w: 3.2, h: 4.8, l: 12.5, t: 18.3, dur: 7.2, delay: 1.4 },
  { w: 2.8, h: 3.6, l: 28.7, t: 72.1, dur: 9.5, delay: 3.2 },
  { w: 4.1, h: 2.9, l: 45.3, t: 34.6, dur: 8.1, delay: 0.7 },
  { w: 3.7, h: 4.2, l: 61.8, t: 55.9, dur: 11.3, delay: 5.1 },
  { w: 2.4, h: 5.0, l: 78.2, t: 12.4, dur: 6.8, delay: 2.3 },
  { w: 5.5, h: 3.1, l: 5.9,  t: 88.7, dur: 13.0, delay: 4.8 },
  { w: 3.0, h: 4.5, l: 92.4, t: 41.2, dur: 7.6, delay: 1.9 },
  { w: 4.8, h: 2.6, l: 33.1, t: 67.5, dur: 10.4, delay: 3.7 },
  { w: 2.2, h: 3.8, l: 54.7, t: 23.8, dur: 8.9, delay: 0.3 },
  { w: 4.3, h: 5.2, l: 71.6, t: 80.1, dur: 12.1, delay: 5.6 },
  { w: 3.5, h: 2.3, l: 18.9, t: 47.4, dur: 9.7, delay: 2.8 },
  { w: 5.1, h: 4.0, l: 85.3, t: 6.2,  dur: 7.3, delay: 1.1 },
  { w: 2.7, h: 3.3, l: 40.8, t: 93.5, dur: 11.8, delay: 4.4 },
  { w: 4.6, h: 2.1, l: 67.2, t: 29.7, dur: 6.5, delay: 3.0 },
  { w: 3.9, h: 4.7, l: 9.4,  t: 61.8, dur: 10.2, delay: 0.5 },
  { w: 2.5, h: 3.4, l: 52.6, t: 14.3, dur: 8.4, delay: 5.9 },
  { w: 5.8, h: 2.8, l: 77.1, t: 76.9, dur: 13.5, delay: 2.1 },
  { w: 3.3, h: 5.1, l: 23.5, t: 38.2, dur: 7.9, delay: 4.2 },
  { w: 4.4, h: 3.7, l: 96.8, t: 52.5, dur: 9.1, delay: 1.6 },
  { w: 2.9, h: 4.4, l: 38.4, t: 85.0, dur: 11.6, delay: 3.5 },
];

const STATS = [
  { value: '420%', label: 'Avg. ROI Delivered' },
  { value: '150+', label: 'Brands Scaled' },
  { value: '3.2x', label: 'Traffic Uplift' },
  { value: '#1', label: 'Agency in Jaipur' },
];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  /* ── Typewriter ── */
  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 90);
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  /* ── Parallax orb on mouse move ── */
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020817]"
      style={{ paddingTop: '5rem' }}
    >
      {/* ── Animated grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Glowing orbs ── */}
      <div
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-primary/30"
            style={{
              width: `${p.w}px`,
              height: `${p.h}px`,
              left: `${p.l}%`,
              top: `${p.t}%`,
              animation: `floatUp ${p.dur}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="container-max relative z-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 self-start px-5 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.45em]">
                Jaipur&apos;s #1 Performance Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tighter text-white">
              We Engineer{' '}
              <br />
              <span className="relative inline-block">
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 50%, #7DD3FC 100%)' }}
                >
                  {displayText}
                </span>
                <span
                  className="inline-block w-[3px] h-[0.85em] bg-brand-primary ml-1 align-middle"
                  style={{ animation: 'blink 1s step-end infinite' }}
                />
              </span>
              <br />
              <span className="text-white/90">Growth.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-white/50 leading-relaxed max-w-lg font-light">
              High-velocity digital marketing powered by data, not guesswork. SEO, SEM, Social, and Web — 
              all under one elite growth protocol built for Jaipur&apos;s ambitious brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                  boxShadow: '0 0 30px rgba(14,165,233,0.4)',
                }}
              >
                <span>Start Growth Recon</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest text-white/70 border border-white/15 hover:border-brand-primary/60 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/8">
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div
                    className="text-2xl md:text-3xl font-black text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #0EA5E9, #7DD3FC)' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image + floating cards */}
          <div className="relative flex items-center justify-center">

            {/* Glow ring behind image */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
            />

            {/* Image frame */}
            <div
              className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden"
              style={{
                border: '1px solid rgba(14,165,233,0.25)',
                boxShadow: '0 0 80px rgba(14,165,233,0.15), inset 0 0 40px rgba(14,165,233,0.05)',
                transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Image
                src="/orbyza_female_elite_strategist_professional_1774771830941.png"
              sizes="(max-width: 768px) 100vw, 50vw"
                alt="Orbyza Elite Strategist"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, #020817 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Floating card — ROI */}
            <div
              className="absolute -left-8 top-12 px-5 py-4 rounded-2xl backdrop-blur-md border border-white/10 flex items-center gap-3"
              style={{
                background: 'rgba(14,165,233,0.12)',
                animation: 'floatCard 4s ease-in-out infinite',
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xl">📈</div>
              <div>
                <div className="text-white font-black text-sm">+420% ROI</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">Avg. Client Return</div>
              </div>
            </div>

            {/* Floating card — Clients */}
            <div
              className="absolute -right-6 bottom-28 px-5 py-4 rounded-2xl backdrop-blur-md border border-white/10 flex items-center gap-3"
              style={{
                background: 'rgba(14,165,233,0.10)',
                animation: 'floatCard 5s ease-in-out infinite',
                animationDelay: '1.5s',
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xl">🏆</div>
              <div>
                <div className="text-white font-black text-sm">150+ Brands</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">Scaled Globally</div>
              </div>
            </div>

            {/* Floating card — Rating */}
            <div
              className="absolute left-4 bottom-10 px-5 py-4 rounded-2xl backdrop-blur-md border border-white/10 flex items-center gap-3"
              style={{
                background: 'rgba(14,165,233,0.10)',
                animation: 'floatCard 6s ease-in-out infinite',
                animationDelay: '0.8s',
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">⭐</div>
              <div>
                <div className="text-white font-black text-sm">5.0 Rating</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Keyframe styles ── */}
      <style dangerouslySetInnerHTML={{ __html: heroKeyframes }} />
    </section>
  );
};

export default HeroSection;

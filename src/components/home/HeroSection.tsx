'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-32 bg-white overflow-hidden relative">
      {/* Decorative Sky Blue Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-brand-secondary border border-brand-primary/20 rounded-full text-brand-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              Expert Marketing Protocols
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-brand-dark mb-8 leading-[1.1] tracking-tight">
              Best <span className="text-brand-primary">Digital Marketing</span> <br/> Agency in Jaipur.
            </h1>
            <p className="text-xl text-brand-primary mb-12 max-w-lg leading-relaxed">
              We provide high-performance SEO, SEM, and web development services to help your business dominate the local market with global precision.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/#contact" className="btn-premium">
                Start Growth Recon
              </Link>
              <Link href="/services" className="border-2 border-brand-primary/30 text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all">
                The Protocol
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10">
            <Image 
              src="/korean_girl.png" 
              alt="Orbyza Specialist" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

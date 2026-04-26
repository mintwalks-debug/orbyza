import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Course in Jaipur & Delhi | Orbyza Academy',
  description: 'Master the digital orbit. Orbyza Academy offers the best digital marketing course in Jaipur and Delhi with 100% placement assistance. Learn technical SEO, SEM, and performance marketing from industry masters.',
  keywords: ['digital marketing course in jaipur', 'best digital marketing institute in delhi', 'social media marketing course', 'digital marketing coaching jaipur', 'digital marketing classes delhi'],
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
};

const CoursesPage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/orbyza_academy_training_1775965649449.png" 
            alt="Orbyza Academy" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Educational Protocol // Orbyza Academy</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Master The <br /> <span className="text-brand-primary italic">Digital Orbit.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              Stop learning theory. Start mastering performance. Orbyza Academy provides elite tactical training for the next generation of digital architects in Jaipur and Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-32">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {[
               { title: "Performance SEO Masterclass", desc: "Learn technical SEO, semantic intelligence, and AI search optimization (AEO). Designed for those seeking the best SEO course in Jaipur.", icon: "🎯" },
               { title: "Surgical SEM (Google Ads)", desc: "Master high-stakes ad spend management and ROI scaling. The definitive digital marketing training in Delhi for PPC aspirants.", icon: "⚡" },
               { title: "Social Media Dominance", desc: "Cinematic storytelling and data-driven SMM strategies to build viral brands. Perfect for social media courses in Delhi.", icon: "📱" },
               { title: "Web Architecture for Growth", desc: "Modern Next.js and React development focused on speed and conversion. Not just a web design course, but a performance engine course.", icon: "💻" },
               { title: "AI-Driven Content Marketing", desc: "Engineering content that satisfies humans and algorithms. Learn the future of content marketing in India.", icon: "🧠" },
               { title: "Elite Digital Internship", desc: "Work on live global projects for US, Canada, and Europe based clients. Gain real-world agency experience in Jaipur.", icon: "🚀" }
             ].map((item, i) => (
               <div key={i} className="bg-brand-secondary p-12 rounded-3xl border border-brand-primary/10 group hover:border-brand-primary transition-all shadow-xl shadow-brand-primary/5">
                 <div className="text-4xl mb-6">{item.icon}</div>
                 <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                 <p className="text-sm text-brand-primary/70 font-medium leading-relaxed mb-10">{item.desc}</p>
                 <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-brand-primary border-b border-brand-primary/20 pb-2 hover:border-brand-primary transition-all">Enrolment Protocol →</Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="container-max">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 italic">Why Orbyza <span className="text-brand-secondary">Academy?</span></h2>
                 <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light">
                    <p>
                      While others teach from textbooks, we teach from the **Digital Battlefield**. Our courses are engineered by the same specialists who manage multi-million dollar budgets for global enterprises. Whether you are searching for a **digital marketing course in Delhi** or a **marketing institute in Jaipur**, Orbyza provides the only ROI-linked curriculum in the market.
                    </p>
                    <p>
                      We focus on **Advanced Digital Marketing Certification**. This isn't a basic overview; it is a deep-dive into the technical and strategic protocols that actually move the needle for brands in 2026.
                    </p>
                    <ul className="grid grid-cols-2 gap-6 text-sm font-black uppercase tracking-widest mt-12">
                       <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-secondary rounded-full" /> Live Client Access</li>
                       <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-secondary rounded-full" /> 100% Placement</li>
                       <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-secondary rounded-full" /> AI Integration</li>
                       <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-secondary rounded-full" /> Hubs in Jaipur & Delhi</li>
                    </ul>
                 </div>
              </div>
              <div className="glass-card !bg-white/5 !border-white/10 p-12 rounded-[3rem] shadow-3xl text-center">
                 <div className="text-7xl font-black mb-4 italic tracking-tighter">99.9%</div>
                 <div className="text-xs font-black uppercase tracking-widest text-brand-secondary">Placement Success Velocity</div>
                 <p className="mt-8 text-white/50 text-sm leading-relaxed">"Orbyza graduates are not just employees; they are growth engineers trained for global dominance."</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;

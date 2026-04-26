'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const AboutClient = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen overflow-hidden relative pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#0047FF]/8 blur-[150px] -z-10" />
      
      <div className="section-padding">
        <div className="container-max">
           <Breadcrumbs />
        </div>
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48 container-max">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1.5 border border-[#0047FF]/30 bg-[#0047FF]/10 text-[#0047FF] font-black text-[10px] uppercase tracking-[0.5em] mb-10">
              The Orbyza Manifesto
            </span>
            <h1 className="heading-xl !mb-10 text-[#0F172A]">
               RESULTS <br /> <span className="bg-gradient-to-r from-[#0047FF] via-[#0F172A] to-[#0047FF] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] bg-clip-text text-transparent italic uppercase tracking-tighter">ABOVE ALL.</span>
            </h1>
            <p className="subheading mb-10 !text-[#0047FF]">
              Founded in {siteConfig.founded}, Orbyza didn't start in a boardroom. It started with a frustration: digital marketing had become too about "clicks" and not enough about "climbing."
            </p>
            <p className="text-[#0047FF]/70 text-lg mb-16 leading-relaxed max-w-xl font-medium">
              Today, our squad of {siteConfig.teamSize} specialists manages elite budgets across the globe. We don't just bridge gaps; we build digital empires for {siteConfig.clientsServed} clients who demand hyper-growth and absolute market dominance in Jaipur and beyond.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-16">
               <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#0047FF]/20 group hover:border-[#0047FF] transition-all shadow-xl">
                  <div className="text-5xl font-black text-[#0F172A] mb-2 group-hover:tracking-widest transition-all">{siteConfig.projectsCompleted}</div>
                  <div className="text-[10px] text-[#0047FF] font-black uppercase tracking-widest group-hover:text-[#0F172A] transition-colors">Campaigns Won</div>
               </div>
               <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#0047FF]/20 group hover:border-[#0047FF] transition-all shadow-xl">
                  <div className="text-5xl font-black text-[#0047FF] mb-2 group-hover:tracking-widest transition-all">{siteConfig.yearsExperience}</div>
                  <div className="text-[10px] text-[#0047FF] font-black uppercase tracking-widest group-hover:text-[#0F172A] transition-colors">Years Excellence</div>
               </div>
            </div>

            <Link href="/contact" className="btn-premium px-12 py-6">
              Establish Partnership →
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative group hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#0047FF]/10 blur-[120px] rounded-full group-hover:bg-[#0047FF]/20 transition-all duration-700 shadow-3xl" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[#0047FF]/20 group-hover:-translate-y-4 transition-all duration-1000 shadow-3xl">
               <img 
                 src="/orbyza_team_models_diverse_tech_1774770277357.png" 
                 alt="The Growth Squad" 
                 className="object-cover w-full h-full transition-all duration-1000 scale-110 group-hover:scale-100 opacity-80 group-hover:opacity-100" 
               />
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-[#F8FAFC] border border-[#0047FF]/20 rounded-3xl p-10 hidden sm:block animate-pulse backdrop-blur-2xl shadow-3xl">
               <div className="text-6xl font-black text-[#0047FF] mb-2">99.9%</div>
               <div className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/50">Engine Status: Optimal</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Careers & Education Section */}
      <section className="section-padding border-t border-[#0047FF]/15 bg-[#FFFFFF] relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 text-center mb-24">
              <span className="text-[#0047FF] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Knowledge Acquisition Protocol</span>
              <h2 className="text-4xl md:text-7xl font-black mb-10 text-[#0F172A] uppercase tracking-tighter">Learn Digital Marketing <br/> From <span className="text-[#0047FF] italic">the Masters.</span></h2>
              <p className="subheading mx-auto !text-[#0047FF] max-w-3xl">Empowering the next generation of digital leaders through our specialized internship frameworks and elite tactical workshops in Jaipur.</p>
            </div>
            
            {[
              {
                title: "Digital Marketing Course",
                desc: "Our hands-on tactical course covers everything from SEO to paid advertising at the standard of the best digital marketing institute in Jaipur.",
                btn: "ENROLL NOW"
              },
              {
                title: "Internship in Jaipur",
                desc: "Gain real-world experience with a digital marketing internship in Jaipur. Work with the top digital marketing agency on live global projects.",
                btn: "APPLY NOW"
              },
              {
                title: "Social Media Internship",
                desc: "Specialize in SMM with a focused social media marketing internship. Perfect for those searching for a digital marketing internship near me in Jaipur.",
                btn: "GET STARTED"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="lg:col-span-4 bg-[#F8FAFC] border border-[#0047FF]/20 rounded-3xl p-10 group hover:border-[#0047FF] transition-all duration-500 shadow-xl"
              >
                 <h3 className="text-2xl font-black mb-6 text-[#0F172A] uppercase tracking-tighter">{item.title}</h3>
                 <p className="text-sm text-[#0047FF] mb-10 leading-relaxed font-medium transition-colors">{item.desc}</p>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-[#0047FF] font-black text-[10px] uppercase tracking-widest hover:text-[#0F172A] transition-all">
                    {item.btn} <span className="text-lg">+</span>
                 </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient;

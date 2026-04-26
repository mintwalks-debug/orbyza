'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const ContactClient = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-32 pb-20 overflow-hidden relative">
       {/* Background Ambience */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047FF]/8 blur-[150px] -z-10" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0F172A]/5 blur-[150px] -z-10" />

       <div className="section-padding relative z-10">
          <div className="container-max">
             <Breadcrumbs />
          </div>
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-20 container-max">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center lg:text-left"
             >
                <span className="inline-block px-4 py-1.5 border border-[#0047FF]/30 bg-[#0047FF]/10 text-[#0047FF] font-black text-[10px] uppercase tracking-[0.5em] mb-10">
                   Secure Your Strategy
                </span>
                <h1 className="heading-xl !mb-10 text-[#0F172A]">
                   READY TO <br/> <span className="bg-gradient-to-r from-[#0047FF] via-[#0F172A] to-[#0047FF] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] bg-clip-text text-transparent italic uppercase tracking-tighter">DOMINATE?</span>
                </h1>
                <p className="subheading mb-16 mx-auto lg:mx-0 !text-[#0047FF]">
                   Stop guessing. Start winning. Our growth engineers in Jaipur are ready to dismantle your competitors' strategies and rebuild your digital empire with absolute precision.
                </p>
                
                <div className="space-y-12 max-w-md mx-auto lg:mx-0">
                   <div className="bg-[#F8FAFC] rounded-3xl p-10 border border-[#0047FF]/20 shadow-xl">
                      <div className="text-[10px] text-[#0047FF] font-black uppercase tracking-[0.4em] mb-6">Protocol Status</div>
                      <div className="text-[#0F172A] font-bold italic leading-relaxed text-sm">
                         Contact protocols are currently restricted to secure electronic inquiries. Please deploy your mission parameters below for a direct intelligence briefing.
                      </div>
                   </div>
                   
                   <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                      <div className="flex flex-col items-center lg:items-start gap-2">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0047FF]/60">HQ Status</span>
                         <span className="text-[#0F172A] font-black text-xs uppercase animate-pulse">Online // Jaipur Hub</span>
                      </div>
                      <div className="w-px h-10 bg-[#0047FF]/20 hidden sm:block" />
                      <div className="flex flex-col items-center lg:items-start gap-2">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0047FF]/60">Response Window</span>
                         <span className="text-[#0F172A] font-black text-xs uppercase tracking-widest">24H Intelligence Protocol</span>
                      </div>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative group lg:perspective"
             >
                <div className="absolute inset-0 bg-[#0047FF]/15 blur-[100px] rounded-full group-hover:bg-[#0047FF]/20 transition-all duration-1000 shadow-3xl" />
                <div className="bg-[#F8FAFC] rounded-3xl relative border border-[#0047FF]/20 !p-12 shadow-3xl backdrop-blur-3xl group-hover:border-[#0047FF]/40 transition-all">
                   <h3 className="text-3xl font-black mb-12 text-[#0F172A] uppercase tracking-tighter leading-none">Deploy Your <br/><span className="text-[#0047FF] italic">Inquiry Protocol.</span></h3>
                   <form className="space-y-10">
                      <div className="grid sm:grid-cols-2 gap-10">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047FF]/50 ml-2">Operator Name</label>
                            <input type="text" className="w-full bg-white/50 border border-[#0047FF]/20 rounded-2xl px-8 py-5 outline-none focus:border-[#0047FF] transition-all text-[#0F172A] placeholder:text-[#0047FF]/30 font-bold" placeholder="EX: JOHN DOE" required />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047FF]/50 ml-2">Communication Link</label>
                            <input type="email" className="w-full bg-white/50 border border-[#0047FF]/20 rounded-2xl px-8 py-5 outline-none focus:border-[#0047FF] transition-all text-[#0F172A] placeholder:text-[#0047FF]/30 font-bold" placeholder="EX: HELLO@ORBYZA.COM" required />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047FF]/50 ml-2">Mission Parameters</label>
                         <div className="relative">
                           <select className="w-full bg-white/50 border border-[#0047FF]/20 rounded-2xl px-8 py-5 outline-none focus:border-[#0047FF] transition-all text-[#0F172A] appearance-none cursor-pointer font-bold pr-16 bg-transparent">
                              <option value="seo">Full Spectrum SEO</option>
                              <option value="sem">Ad Dominance (SEM)</option>
                              <option value="social">Social Infiltration</option>
                              <option value="web">Enterprise Site Build</option>
                           </select>
                           <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-[#0047FF]/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                           </div>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047FF]/50 ml-2">Briefing Details</label>
                         <textarea className="w-full bg-white/50 border border-[#0047FF]/20 rounded-2xl px-8 py-5 outline-none focus:border-[#0047FF] transition-all text-[#0F172A] placeholder:text-[#0047FF]/30 font-bold min-h-[160px]" placeholder="Outline your objectives..."></textarea>
                      </div>
                      <button type="submit" className="w-full !py-8 text-xl shadow-2xl relative group/btn overflow-hidden bg-[#0F172A] text-[#FFFFFF] font-bold rounded-full hover:bg-[#0047FF] transition-all uppercase tracking-widest">
                         <span className="relative z-10 transition-transform group-hover/btn:scale-105 inline-block">Initialize Growth Protocol</span>
                      </button>
                      <p className="text-[9px] text-center text-[#0047FF]/40 font-black tracking-[0.5em] uppercase">
                         Estimated Intelligence Response: 24 Hours
                      </p>
                   </form>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
};

export default ContactClient;

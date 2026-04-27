'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '@/components/common/Breadcrumbs';

interface ServiceDetailProps {
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image?: string;
  painPoints?: string[]; // Added for Master Plan
  longDescription?: string;
  methodology?: { title: string; desc: string }[];
  roiDetails?: string;
  pricing?: { tier: string; price: string; features: string[] }[]; // Added for Master Plan
  faqs?: { q: string; a: string }[];
}

const ServiceDetail = ({ 
  title, 
  description, 
  iconName, 
  features,
  image,
  painPoints,
  longDescription,
  methodology,
  roiDetails,
  pricing,
  faqs
}: ServiceDetailProps) => {
  // @ts-ignore
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  // AEO: Structured Data for Service and FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "image": image || "/og-image.jpg",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Orbyza",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "RJ",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Service Features",
      "itemListElement": features.map((f, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f
        }
      }))
    }
  };

  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="pt-32 pb-20 overflow-hidden relative border-b border-brand-primary/10">
        {/* Background Ambience */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/8 blur-[150px] -z-10" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-brand-dark/8 blur-[150px] -z-10" />

        <div className="container-max relative z-20">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center lg:text-left"
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.div 
                   whileHover={{ rotate: 12, scale: 1.1 }}
                   className="w-20 h-20 bg-brand-secondary rounded-[2rem] border border-brand-primary/20 flex items-center justify-center mb-10 group transition-all duration-500 shadow-2xl shadow-brand-primary/10"
                >
                  {Icon && <Icon className="w-10 h-10 text-brand-primary group-hover:text-brand-dark transition-colors" />}
                </motion.div>
                
                <h1 className="heading-xl !text-5xl md:!text-7xl lg:!text-8xl mb-8">
                  <span className="text-brand-dark uppercase font-black tracking-tighter leading-none block">
                    {title}
                  </span>
                </h1>
                
                <p className="subheading mb-12 mx-auto lg:mx-0 max-w-xl">
                  {description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-16 w-full">
                  {features.map((f, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card !p-5 !border-brand-border flex items-center gap-4 group hover:!border-brand-primary/40 transition-all duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/30" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-brand-dark group-hover:text-brand-primary transition-colors">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                  <Link href="/contact" className="btn-premium px-12 py-6">
                    Initialize Protocol →
                  </Link>
                  <Link href="/portfolio" className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-muted hover:text-brand-primary transition-all group">
                    View Case Studies <span className="inline-block group-hover:translate-x-2 transition-transform">+</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative group hidden lg:block"
            >
              <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full group-hover:bg-brand-primary/15 transition-all duration-1000" />
              <div className="relative aspect-[10/12] glass-card !p-8 !border-brand-primary/15 rotate-3 group-hover:rotate-0 transition-all duration-1000 shadow-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-dark/5 opacity-50" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-brand-primary/10 border-dashed rounded-full"
                />
                
                {image ? (
                  <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-all duration-1000" />
                ) : (
                  <Icon className="w-64 h-64 text-brand-primary opacity-10 animate-pulse" />
                )}

                <div className="z-20 text-center p-12">
                   <div className="text-8xl font-black text-brand-dark/5 mb-4 select-none tracking-widest leading-none uppercase">{title.split(' ')[0]}</div>
                   <div className="text-[10px] font-black uppercase tracking-[1em] text-brand-primary/40 ml-4">DIGITAL EXCELLENCE</div>
                </div>
                
                {/* High-Tech HUD Accents */}
                <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-brand-primary/15 group-hover:border-brand-primary transition-colors" />
                <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-brand-primary/15 group-hover:border-brand-dark transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Pain Points Section (Master Plan Section 1.3) */}
      {painPoints && painPoints.length > 0 && (
        <section className="py-24 bg-brand-secondary/30 border-y border-brand-border">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-brand-dark uppercase italic mb-4">Critical Market Friction</h2>
              <p className="text-brand-muted max-w-2xl mx-auto">Common challenges that inhibit brand velocity and growth efficiency.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-brand-border shadow-xl shadow-slate-200/50">
                  <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6 font-black italic">!</div>
                  <p className="text-brand-dark font-medium leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expanded Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-20">
              {longDescription && (
                <div>
                  <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-8 italic">The Orbyza <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Philosophy.</span></h2>
                  <div className="text-brand-muted leading-relaxed text-lg space-y-6" dangerouslySetInnerHTML={{ __html: longDescription }} />
                </div>
              )}

              {methodology && (
                <div>
                  <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-12 italic">Our <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Methodology.</span></h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {methodology.map((m, i) => (
                      <div key={i} className="glass-card !p-8 !border-brand-border hover:!border-brand-primary/30 transition-all group">
                         <div className="text-brand-primary font-black text-xs mb-4 opacity-50">PHASE // 0{i+1}</div>
                         <h3 className="text-brand-dark font-bold text-xl mb-4 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{m.title}</h3>
                         <p className="text-brand-muted text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {faqs && (
                <div>
                  <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-10 italic">Intelligence <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Briefing (FAQ).</span></h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="glass-card !p-6 !border-brand-primary/15">
                        <h4 className="text-brand-dark font-bold mb-3 flex items-start gap-4">
                          <span className="text-brand-primary font-black">Q.</span>
                          {faq.q}
                        </h4>
                        <p className="text-brand-primary/70 text-sm pl-8 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-12">
               <div className="bg-brand-secondary rounded-3xl p-10 border border-brand-primary/20 sticky top-32 shadow-xl shadow-brand-primary/10">
                  <h3 className="text-xl font-black text-brand-dark uppercase mb-8 tracking-tighter italic underline decoration-brand-primary/30 underline-offset-4">Success Metrics</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="text-4xl font-black text-brand-primary mb-1">+420%</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/50">Average SEO Growth</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-brand-primary mb-1">2.4x</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/50">Conversion Efficiency</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-brand-primary mb-1">100%</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/50">Transparency Rating</div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-brand-primary/10">
                    <p className="text-brand-primary/70 text-xs leading-relaxed mb-8">
                      {roiDetails || "Our strategies are engineered for maximum impact and sustainable brand velocity."}
                    </p>
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Inquire Now →</Link>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

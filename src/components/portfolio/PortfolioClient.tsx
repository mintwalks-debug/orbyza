'use client';

import React from 'react';
import { caseStudies } from '@/data/caseStudies';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const PortfolioClient = () => {
    const deployments = [
        {
          title: "MintWalks",
          industry: "Finance & Wealth",
          description: "A premium wealth management platform built for strategic market dominance.",
          img: "/portfolio/mintwalks.png",
          link: "https://mintwalks.com"
        },
        {
          title: "Ivy Bridge Study",
          industry: "Education & Tutoring",
          description: "Elite Cambridge & IB tutoring interface with a focus on academic authority.",
          img: "/portfolio/ivybridge.png",
          link: "https://ivybridgestudy.com"
        },
        {
          title: "Agenzia Memorial",
          industry: "Funeral Services",
          description: "Sophisticated, respectful digital presence for a historic Italian brand.",
          img: "/portfolio/agenziamemorial.png",
          link: "https://www.agenziamemorial.com/"
        },
        {
          title: "Property Lords BBSR",
          industry: "Real Estate",
          description: "High-conversion real estate engine for premium listings in Odisha.",
          img: "/portfolio/propertylords.png",
          link: "https://propertylordsbbse.vercel.app/"
        },
        {
          title: "Farm to Fork Bliss",
          industry: "Organic Food",
          description: "Natural & organic food marketplace with an emphasis on pure-roots sourcing.",
          img: "/portfolio/farmtofork.png",
          link: "https://farm-to-fork-bliss.vercel.app/"
        },
        {
          title: "Chariot Ads",
          industry: "Performance Ads",
          description: "Extreme high-speed advertising interface for conversion-focused brands.",
          img: "/portfolio/chariotads.png",
          link: "https://chariotads.vercel.app/"
        }
      ];

  return (
    <div className="bg-white min-h-screen py-32">
      <div className="container-max">
        <Breadcrumbs />
        
        <div className="mb-24 mt-12">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6">Proven Trajectories</div>
          <h1 className="text-5xl md:text-8xl font-black text-brand-dark mb-8 uppercase italic tracking-tighter">
            Success <span className="text-brand-primary">Stories.</span>
          </h1>
          <p className="text-xl text-brand-primary max-w-2xl font-light italic border-l-4 border-brand-primary pl-8 leading-relaxed">
            Explore our portfolio of elite digital systems and strategic growth results executed for Jaipur's market leaders.
          </p>
        </div>

        <div className="mb-32">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark/40 mb-10 border-b border-brand-primary/20 pb-6 text-brand-primary">Web Engineering</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {deployments.map((item, index) => (
              <div key={index} className="group bg-brand-secondary border border-brand-primary/10 rounded-3xl overflow-hidden hover:border-brand-primary transition-all shadow-xl shadow-brand-primary/5">
                <div className="relative aspect-video bg-brand-primary/5 overflow-hidden">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-10">
                   <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">{item.industry}</div>
                   <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase italic tracking-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                   <p className="text-sm text-brand-primary mb-10 leading-relaxed font-medium line-clamp-2">{item.description}</p>
                   <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] font-black text-brand-dark uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors">Launch Deployment →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
           <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark/40 mb-10 border-b border-brand-primary/20 pb-6 text-brand-primary">Growth Strategy Impact</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudies.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.slug}`} className="group p-10 border border-brand-primary/10 rounded-3xl bg-brand-secondary hover:bg-white hover:border-brand-primary transition-all shadow-xl shadow-brand-primary/5">
                 <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-4">{item.industry}</div>
                 <h3 className="text-2xl font-black text-brand-dark mb-6 uppercase italic tracking-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                 <div className="flex flex-wrap gap-3">
                  {item.results.slice(0, 2).map((r, i) => (
                    <span key={i} className="text-[10px] font-black bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-2 rounded-full uppercase tracking-tighter">{r}</span>
                  ))}
                 </div>
              </Link>
            ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioClient;

import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Orbyza | Elite Digital Marketing Agency Jaipur',
  description: 'Learn about Orbyza — Jaipur\'s premier performance marketing agency. Founded to bridge creative ambition and technical precision, we deliver 420% ROI for brands across India, USA, Canada, and Europe.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About Orbyza | Elite Digital Marketing Agency Jaipur',
    description: 'The story behind Jaipur\'s #1 performance marketing agency. 500+ projects, 150+ brands scaled, 420% avg ROI.',
    url: `${siteConfig.url}/about`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'About Orbyza Digital Marketing Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Orbyza | Elite Digital Marketing Agency Jaipur',
    description: 'The story behind Jaipur\'s #1 performance marketing agency.',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

const AboutPage = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen py-32">
      <div className="container-max">
        <div className="max-w-4xl mb-24">
           <h1 className="text-5xl md:text-8xl font-bold text-[#0F172A] mb-10 uppercase tracking-tighter">Beyond an Agency.<br/>A Revenue <span className="text-[#0047FF]">Engine.</span></h1>
           <p className="text-2xl text-[#0047FF] font-light border-l-8 border-[#0047FF] pl-10 italic">
              Orbyza was founded to bridge the gap between creative ambition and technical precision.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-32">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#0F172A] uppercase tracking-tight">Our Philosophy</h2>
              <p className="text-[#0047FF] text-lg leading-relaxed">Most brands fail because they have market friction—slow websites and invisible search profiles. We focus on reducing that friction through engineering and data.</p>
           </div>
           <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Founded", val: "2020" },
                { label: "Location", val: "Jaipur" },
                { label: "Projects", val: "500+" }
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-[#0047FF]/15 bg-[#FFFFFF] rounded-3xl text-center group hover:border-[#0047FF] transition-colors">
                   <div className="text-3xl font-bold text-[#0047FF] mb-2">{stat.val}</div>
                   <div className="text-[10px] text-[#0047FF]/50 uppercase font-bold tracking-[0.3em]">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>

        <div className="mb-32">
           <h2 className="text-4xl font-bold text-[#0F172A] mb-12 text-center uppercase tracking-tighter">Our Core <span className="text-[#0047FF]">Principles</span></h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Engineering First", desc: "We approach marketing as a technical problem, optimizing at the code level." },
                { title: "Data Driven", desc: "Decisions are based on behavioral analytics and conversion flow intelligence." },
                { title: "Global Scale", desc: "Strategies built to scale local brands to the global market." }
              ].map((p, i) => (
                <div key={i} className="p-10 border border-[#0047FF]/15 rounded-[40px] bg-[#FFFFFF] shadow-xl shadow-[#0F172A]/5 transition-all hover:-translate-y-2">
                   <h3 className="font-bold text-[#0F172A] text-xl mb-4 uppercase">{p.title}</h3>
                   <p className="text-[#0047FF]/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Investment Tiers | Performance Marketing Pricing Orbyza Jaipur',
  description: 'Transparent investment models for elite digital scaling. Orbyza provides ROI-focused pricing for SEO, SEM, and performance marketing in Jaipur and global markets. No hidden friction, just data-driven results.',
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
  openGraph: {
    title: 'Resource Allocation // Investment Tiers',
    description: 'The investment roadmap for high-velocity scaling with Orbyza Digital Jaipur.',
    url: `${siteConfig.url}/pricing`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

const PricingPage = () => {
  const tiers = [
    {
      title: "Discovery Protocol",
      description: "Ideal for high-growth startups and local businesses in Jaipur starting their digital orbit.",
      investment: "Starting at ₹25K/mo",
      features: [
        "Technical SEO Foundation",
        "Strategic Keyword Mapping",
        "Social Media Management (2 Channels)",
        "Monthly Intelligence Briefing",
        "Google Business Profile Optimize"
      ],
      target: "Growth Phase // Early Orbit"
    },
    {
      title: "Scaling Architecture",
      description: "Our primary performance tier for brands demanding absolute search dominance and high ROI.",
      investment: "Starting at ₹65K/mo",
      features: [
        "Advanced E-E-A-T Content Engine",
        "Full SEM & Google Ads Management",
        "Authority Link Acquisition (Manually Earned)",
        "High-Performance Next.js Maintenance",
        "Real-Time ROI Dashboard Access",
        "Bi-Weekly Strategy Sessions"
      ],
      premium: true,
      target: "Dominance Phase // High Velocity"
    },
    {
      title: "Enterprise Ecosystem",
      description: "The complete digital department for global brands requiring multi-region, multi-platform excellence.",
      investment: "Custom Investment",
      features: [
        "Multi-Region SEO & International AEO",
        "Full-Scale Media Buying (Global Ads)",
        "Cinematic Content Production Suite",
        "Conversion Rate Optimization (CRO Lab)",
        "Dedicated Growth Squad Account Lead",
        "24/7 Priority Intelligence Support"
      ],
      target: "Dominance Phase // Total Market Capture"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container-max">
        <div className="max-w-4xl mb-32 text-center mx-auto">
           <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.5em] mb-10 block">Investment Roadmap</span>
           <h1 className="text-6xl md:text-8xl font-bold text-brand-dark uppercase tracking-tighter mb-12">Scaling <span className="text-brand-primary">Economies.</span></h1>
           <p className="text-brand-primary text-xl font-light leading-relaxed max-w-2xl mx-auto italic border-l-4 border-brand-primary pl-8">
              We focus on investment, not expense. Every Orbyza tier is engineered to dismantle your market resistance and generate a sustainable revenue stream.
           </p>
        </div>

         <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div key={i} className={`bg-brand-secondary border border-brand-primary/10 p-12 rounded-[40px] flex flex-col items-start gap-10 group hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-700 relative overflow-hidden shadow-xl ${tier.premium ? 'ring-2 ring-brand-primary/50 scale-105 z-10' : ''}`}>
                 {tier.premium && (
                    <div className="absolute top-0 right-0 bg-brand-dark text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl shadow-lg">Recommended</div>
                 )}
                 <div className="w-full flex flex-col gap-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60">{tier.target}</div>
                    <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tight group-hover:text-brand-primary transition-all leading-none">{tier.title}</h2>
                    <p className="text-brand-primary text-sm leading-relaxed min-h-[60px]">{tier.description}</p>
                 </div>
                 <div className="text-4xl font-bold text-brand-dark tracking-tighter">{tier.investment}</div>
                 <div className="space-y-4 w-full">
                    {tier.features.map((f, j) => (
                       <div key={j} className="flex items-center gap-4 text-brand-primary text-sm border-b border-brand-primary/10 pb-4 last:border-0 group-hover:text-brand-dark transition-colors">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0" />
                          {f}
                       </div>
                    ))}
                 </div>
                 <div className="mt-8 pt-8 border-t border-brand-primary/10 w-full">
                    <a href="/contact" className={`btn-premium w-full text-center py-5 uppercase font-bold tracking-widest text-[10px] block shadow-lg ${tier.premium ? '' : 'bg-brand-primary text-white hover:bg-brand-dark'}`}>Deploy Protocol →</a>
                 </div>
              </div>
            ))}
         </div>

        {/* Global Transparency Note */}
         <div className="mt-40 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-dark uppercase mb-8">Absolute <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Transparency.</span></h3>
            <p className="text-brand-primary text-lg leading-relaxed mb-12 font-medium italic border-l-4 border-brand-primary pl-8">
               Every partnership agreement includes a 100% transparency guarantee. No markup on ad spend, no hidden platform fees, and real-time dashboard access to your performance data. We serve the ambitious businesses of <strong>Jaipur</strong>, <strong>Rajasthan</strong>, and the global market.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary/50">
               Prices exclude GST and ad spend as applicable. For Rajasthan-based enterprises, we provide custom localized billing protocols.
            </div>
         </div>
      </div>
    </div>
  );
};

export default PricingPage;

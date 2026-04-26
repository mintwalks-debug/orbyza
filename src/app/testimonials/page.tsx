import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Success Proof | Client Testimonials & ROI Results Orbyza Jaipur',
  description: 'See the real-world results of our digital protocols. Orbyza delivers +420% average ROI growth for brands across Jaipur and international markets. Verified success stories from Real Estate, Education, and E-commerce.',
  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },
  openGraph: {
    title: 'Client Testimonials // Orbyza Proof',
    description: 'Verified growth stories from current Orbyza partners in Jaipur and beyond.',
    url: `${siteConfig.url}/testimonials`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

const TestimonialsPage = () => {
  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "CEO, Jaipur Real Estate Hub",
      text: "Orbyza didn't just 'do marketing' for us. They rebuilt our entire search presence from the ground up. Our organic leads have tripled in only 4 months. Their technical SEO for Next.js is truly elite.",
      metrics: "+310% Lead Gen Growth",
      category: "Real Estate // Jaipur"
    },
    {
      name: "Priya Singh",
      role: "Director, Ivy Bridge International",
      text: "As an education brand, our SEM costs were skyrocketing. Orbyza's performance audit dismantled our campaigns and rebuilt them for conversion efficiency. We lowered our CPA by 45% and increased enrollment velocity.",
      metrics: "45% Reduction in CPA",
      category: "Education // Global"
    },
    {
      name: "Amit Verma",
      role: "Founder, Green Route Organic",
      text: "Being a local brand in Jaipur, we were invisible on search. Orbyza's local SEO protocol put us in the top 3 map results for all our target keywords. Their transparency and data-first approach are revolutionary.",
      metrics: "Top 3 Google Map Rankings",
      category: "E-commerce // Jaipur"
    },
    {
      name: "Sarah Miller",
      role: "Head of Marketing, CloudScale SaaS",
      text: "Orbyza's understanding of global SaaS scaling is phenomenal. Their content marketing strategy and link-building outreach have established us as a topical authority in the US market within 6 months.",
      metrics: "70+ Authority Links Earned",
      category: "SaaS // International"
    },
    {
      name: "Vikram Mehta",
      role: "Marketing Manager, Heritage Homes",
      text: "Our previous agency was giving us vanity metrics. Orbyza gave us revenue. Their focus on conversion rate optimization (CRO) and high-performance web design have completely transformed our digital orbit.",
      metrics: "2.4x Conversion Efficiency",
      category: "Hospitality // Jaipur"
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Orbyza"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "reviewBody": r.text
    }))
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <div className="container-max">
        <div className="max-w-4xl mb-32 text-center mx-auto">
           <span className="text-[#0047FF] font-black text-xs uppercase tracking-[0.5em] mb-10 block">Impact Validation // Review Protocol</span>
           <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] uppercase italic !leading-none tracking-tighter mb-12">Verified <span className="text-[#0047FF]">Proof.</span></h1>
           <p className="text-[#0047FF]/70 text-xl font-light leading-relaxed max-w-2xl mx-auto italic border-l-4 border-[#0047FF] pl-8">
              Absolute transparency through data and human experience. Here is the feedback from our partners in Jaipur and the global market on the Orbyza growth engine.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           {reviews.map((rev, i) => (
             <div key={i} className="bg-[#F8FAFC] border border-[#0047FF]/10 rounded-3xl p-12 group hover:border-[#0047FF]/40 transition-all flex flex-col gap-8 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0047FF]/60">{rev.category}</div>
                   <div className="bg-[#0047FF]/10 border border-[#0047FF]/30 text-[#0047FF] px-4 py-1 text-[9px] font-black uppercase tracking-widest">{rev.metrics}</div>
                </div>
                <p className="text-[#0047FF] text-lg leading-relaxed italic border-l border-[#0047FF]/20 pl-8 font-light">"{rev.text}"</p>
                <div className="mt-4">
                   <div className="text-[#0F172A] font-black text-xl uppercase tracking-tight">{rev.name}</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047FF]/40 mt-1">{rev.role}</div>
                </div>
             </div>
           ))}
        </div>

        {/* Global Success Call-to-Action */}
        <section className="mt-40 text-center relative overflow-hidden bg-[#F8FAFC] border border-[#0047FF]/10 py-24 rounded-3xl mx-auto max-w-5xl shadow-2xl">
           <div className="absolute inset-0 bg-[#0047FF]/5 blur-[100px] rounded-full" />
           <div className="relative z-10 px-12">
              <h3 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase italic mb-10 tracking-tighter">Your Case Study <span className="text-[#0047FF]">Starts Here.</span></h3>
              <p className="text-[#0047FF]/70 text-lg mb-16 max-w-2xl mx-auto">We don't just want to manage your marketing; we want to dismantle your market resistance and scale your revenue by 420%.</p>
              <a href="/contact" className="btn-premium px-12 py-7 text-sm inline-block shadow-lg">Initialize Partner Protocol →</a>
           </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;

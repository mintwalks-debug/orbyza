import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Bangalore | #1 Performance Marketing Orbyza',
  description: 'Orbyza is the premier digital marketing agency in Bangalore, delivering 420% ROI growth for Silicon Valley startups and enterprises. Specialized in high-spec SEO, performance SEM, and social dominance in Bangalore.',
  keywords: ['digital marketing agency in bangalore', 'best digital marketing company in bangalore', 'marketing agency bangalore', 'seo services bangalore', 'performance marketing bangalore'],
  alternates: {
    canonical: `${siteConfig.url}/bangalore`,
  },
};

const BangalorePage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/bangalore_tech_hub_hero_1775965852994.png" 
            alt="Bangalore Digital Growth Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Regional Command // Bangalore</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              #1 <span className="text-brand-primary italic">Digital Marketing</span> <br /> Agency Bangalore.
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              Bangalore is the epicenter of global innovation. Orbyza provides the high-performance digital engines required to scale your startup or enterprise from Whitefield to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              <div id="bangalore-market">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">
                  Scaling In India's <span className="text-brand-primary">Tech Capital.</span>
                </h2>
                <div className="text-lg leading-loose text-brand-primary/80 space-y-8 font-medium">
                  <p>
                    In a city that builds the world's most sophisticated software, your digital marketing cannot be average. Whether you are searching for the **best digital marketing agency in Bangalore** or a **performance SEO partner** for your SaaS platform, Orbyza provides the technical vanguard. We speak the language of Whitefield, Koramangala, and Electronic City.
                  </p>
                  <p>
                    The Bangalore market is defined by high-intent, tech-savvy consumers. To capture this demographic, your brand needs a **High-Velocity Performance Mesh**. We specialize in technical SEO that bypasses algorithmic friction and Google Ads campaigns that optimize for the highest possible LTV (Life-Time Value).
                  </p>
                  <p>
                    Our squad doesn't just "run marketing." We engineer revenue outcomes using the same data-driven rigor that Bangalore's top unicorns use to scale. From **Social Media Marketing in Bangalore** to complex **Full-Funnel SEM**, we are your growth architects.
                  </p>
                </div>
              </div>

              <div id="strategic-outreach" className="bg-brand-primary p-16 rounded-[3rem] text-white">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Bangalore <br/><span className="text-brand-secondary">Performance Engineering.</span></h2>
                 <div className="space-y-8 text-white/70 text-lg leading-loose font-light">
                   <p>
                     For Bangalore enterprises, "standard" is a synonym for "failing." In this hyper-competitive node, Orbyza implements the **Algorithmic Infiltration Strategy**. We optimize your site using Next.js for 99+ speed scores and inject surgical schema markers to dominate the local and global Knowledge Graphs.
                   </p>
                   <p>
                     We understand the specific procurement cycles of Bangalore's B2B tech sector. Our content engineers produce high-E-E-A-T assets that satisfy both the CTO in Indiranagar and the search crawler in Mountain View. This is global-scale marketing executed with local Bangalore intelligence.
                   </p>
                   <p>
                     Our transparency protocol ensures you see the exact ROI your campaign generates. You get 24/7 access to our performance dashboards, linking every Rupee of ad spend to a measurable growth unit.
                   </p>
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-10 sticky top-32 shadow-2xl">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary mb-10">Bangalore Growth Analytics</h4>
                  <div className="space-y-10 text-brand-dark">
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">12M+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Digital-Native Consumers</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">40%+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Search Intent Growth (2025-26)</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">99+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Site Performance Score</div>
                    </div>
                  </div>
                  <div className="mt-16 pt-10 border-t border-brand-primary/10">
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Initialize Bangalore Protocol →</Link>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-32 bg-brand-secondary/30">
        <div className="container-max">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">Engineering <span className="text-brand-primary">Silicon Growth.</span></h2>
              <div className="prose prose-lg text-brand-primary/80 leading-relaxed max-w-none space-y-10">
                 <p>
                    Bangalore is where the future of India is being coded. At Orbyza, we believe your marketing should be as advanced as your product. We provide high-spec **digital marketing in Bangalore** that targets the elite demographic of the city—from HSR Layout's startup founders to Electronic City's corporate giants.
                 </p>
                 <p>
                    Our **SEO Services in Bangalore** go beyond baseline optimization. We focus on **Entity Authority** and **Semantic Search Clusters**, ensuring your brand owns the narrative for its core industry keywords. This is particularly critical for SaaS and FinTech brands that require high trust scores to convert.
                 </p>
                 <p>
                    In the **Social Media Marketing** arena, we use cinematic visuals and data-driven psychographics to build communities around your brand in Bangalore. We don't just "manage" channels; we create a digital gravity-well that attracts and retains users.
                 </p>
                 <p>
                    Partnering with Orbyza for your Bangalore operations is a declaration of technical intent. You are ready for the high-velocity, ROI-linked growth that defines the global digital economy. The hub of Bangalore performance is here.
                 </p>
              </div>
              <div className="mt-24 text-center">
                 <h3 className="text-2xl font-black uppercase mb-10 tracking-widest">Ready to scale in Bangalore?</h3>
                 <Link href="/contact" className="btn-premium px-16 py-8">Initialize Bangalore Alpha →</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default BangalorePage;

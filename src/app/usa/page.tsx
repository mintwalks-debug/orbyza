import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing USA | Elite Performance SEO & SEM Agency Orbyza',
  description: 'Dominating the American digital landscape. Orbyza is the premier high-velocity growth agency for US-based enterprises, delivering surgical SEO, high-ROI Google Ads, and world-class web architecture from our global hubs.',
  alternates: {
    canonical: `${siteConfig.url}/usa`,
  },
};

const USAPage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/usa_hero_tech_skyline_1775964866595.png" 
            alt="USA Digital Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Global Hub // United States</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Scale Your <br /> <span className="text-brand-primary italic">American Influence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              The US market doesn't reward "good." It rewards dominance. Orbyza provides the technical precision and strategic velocity required to conquer the world's most competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Volume Section 1 */}
      <section className="py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              <div id="market-context">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">
                  The American <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Digital Battlefield.</span>
                </h2>
                <div className="text-lg leading-loose text-brand-primary/80 space-y-8 font-medium">
                  <p>
                    Entering the United States digital market is an exercise in high-stakes strategy. With an annual digital ad spend exceeding $270 billion, the US is not just a market—it is an arena where only the technically superior and strategically aggressive survive. At Orbyza, we understand that for American enterprises, every percentage point of conversion efficiency translates to millions in revenue.
                  </p>
                  <p>
                    Standard marketing agencies often fail in the US because they treat it as a monolith. We don't. From the high-velocity tech hubs of Silicon Valley and Austin to the financial engines of New York and the manufacturing corridors of the Midwest, we employ a **"Hyper-Segmented Intelligence"** approach to North American growth.
                  </p>
                  <p>
                    Our squad specializes in dismantling the friction points that prevent ambitious brands from scaling. Whether it is navigating the highest CPCs in the world or engineering content that satisfies the sophisticated intent of US consumers, Orbyza acts as your technical vanguard.
                  </p>
                </div>
              </div>

              <div id="service-framework">
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">
                  Our <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">US Execution Framework.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-brand-secondary p-12 rounded-3xl border border-brand-primary/10 shadow-xl shadow-brand-primary/5 group hover:border-brand-primary transition-all">
                    <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-brand-primary transition-colors">Technical SEO Architecture</h3>
                    <p className="text-sm leading-relaxed mb-6 font-medium text-brand-primary/70">
                      In a landscape where page-one real estate is dominated by titans, we use surgery, not brute force. Our US SEO protocol focuses on **Semantic Entity Optimization** and **Zero-Latency Technical Performance**. We ensure Google and AI search agents recognize your brand as the undisputed authority in your niche.
                    </p>
                    <ul className="text-[10px] font-black uppercase tracking-widest text-brand-primary/50 space-y-2">
                       <li>// Core Web Vitals Dominance</li>
                       <li>// Knowledge Graph Integration</li>
                       <li>// High-Authority US Outreach</li>
                    </ul>
                  </div>
                  <div className="bg-brand-secondary p-12 rounded-3xl border border-brand-primary/10 shadow-xl shadow-brand-primary/5 group hover:border-brand-primary transition-all">
                    <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-brand-primary transition-colors">Surgical SEM & PPC</h3>
                    <p className="text-sm leading-relaxed mb-6 font-medium text-brand-primary/70">
                      Managing US-scale budgets requires absolute transparency and algorithmic precision. We focus on **CPA-Optimized Scaling**, ensuring your Google Ads and Meta campaigns are extracting every cent of value. We don't just "manage" spend; we engineer ROI.
                    </p>
                    <ul className="text-[10px] font-black uppercase tracking-widest text-brand-primary/50 space-y-2">
                       <li>// Multi-State Ad Segmentation</li>
                       <li>// Advanced Retargeting Funnels</li>
                       <li>// ROI-First Lead Infiltration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="deep-dive" className="bg-brand-primary p-16 rounded-[3rem] text-white">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Data-Obsessed <br/><span className="text-brand-secondary">Decision Making.</span></h2>
                 <p className="text-xl leading-relaxed font-light mb-12 italic border-l-2 border-brand-secondary pl-8">
                    "In God we trust; all others must bring data." This quintessential American philosophy is the bedrock of our United States operations. 
                 </p>
                 <div className="space-y-8 text-white/70 text-lg leading-loose">
                    <p>
                      At Orbyza, we dismantle the "black box" of digital marketing. US clients demand—and deserve—absolute clarity on where their investment is going. Our global command hubs in Jaipur and beyond provide 24/7 technical monitoring of your campaigns, allowing us to pivot with the speed of a high-frequency trading algorithm.
                    </p>
                    <p>
                      We utilize advanced AI-driven search intent mapping to identify shifts in US consumer behavior before they become mainstream. Whether it's the rise of voice search in suburban markets or the evolving B2B procurement cycles in major metropolises, our data feeds stay ahead of the curve.
                    </p>
                    <p>
                      Our relationship with US partners is built on **Radical Transparency**. We provide real-time dashboards that show exactly how many dollars are being converted into growth units. No fluff. No vanity metrics. Just hard revenue data.
                    </p>
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-10 sticky top-32 shadow-2xl">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary mb-10">US Market Intel</h4>
                  <div className="space-y-10">
                    <div>
                      <div className="text-4xl font-black text-brand-dark mb-2 tracking-tighter">92.4%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Search Engine Market Share (US)</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-brand-dark mb-2 tracking-tighter">$270B+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Annual Digital Ad Spend</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-brand-dark mb-2 tracking-tighter">+420%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Orbyza Avg Partner ROI</div>
                    </div>
                  </div>
                  <div className="mt-16 pt-10 border-t border-brand-primary/10">
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Apply for US Audit →</Link>
                  </div>
               </div>
               
               <div className="p-10 bg-brand-dark rounded-3xl text-white">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">Regional Commands</h4>
                  <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-primary rounded-full" /> Silicon Valley Hub</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-primary rounded-full" /> New York Division</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-primary rounded-full" /> Austin Growth Cell</li>
                  </ul>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Expanded Copy Section */}
      <section className="py-32 bg-brand-secondary/30">
        <div className="container-max">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">Engineering <span className="text-brand-primary">American Dominance.</span></h2>
              <div className="prose prose-lg text-brand-primary/80 leading-relaxed max-w-none space-y-10">
                 <p>
                    Winning in the USA requires a perfect marriage of cultural nuance and technical ruthlessness. Our team of "Growth Engineers" understands the subtle but critical differences in consumer behavior between the East Coast and West Coast. We don't just translate keywords; we translate **value**.
                 </p>
                 <p>
                    For US-based B2B enterprises, we specialize in **Strategic Lead Infiltration**. We identify where your high-value decision-makers spend their digital attention and engineer authority footprints that make your brand unavoidable. From specialized LinkedIn targeting to high-intent search broadsides, we handle the technical complexity so your sales team can focus on the closing.
                 </p>
                 <p>
                    E-commerce brands looking to capture the American consumer require a level of site performance that borders on the instantaneous. Orbyza utilizes Next.js and Edge-Optimized infrastructures to ensure your store loads faster than the blink of an eye, regardless of whether the customer is in Seattle or Miami. Performance is not just a metric; in the US, performance is **Sales**.
                 </p>
                 <p>
                    Our US SEO strategies are further enhanced by our **International Intelligence Loop**. Because we manage global portfolios, we often see algorithmic shifts in other major markets (like Europe or Asia) before they fully propagate through the US search landscape. This "Future-Proof" perspective gives our American partners a critical 2-3 week lead time to adjust strategies and maintain their ranking dominance.
                 </p>
                 <p>
                    Entering a partnership with Orbyza is a declaration of intent. You are no longer content with "organic growth" or "standard metrics." You are ready for the high-velocity, data-driven execution that defines the modern American digital economy. Let's dismantle the friction together.
                 </p>
              </div>
              <div className="mt-24 text-center">
                 <h3 className="text-2xl font-black uppercase mb-10 tracking-widest">Ready to deploy your US campaign?</h3>
                 <Link href="/contact" className="btn-premium px-16 py-8">Initialize US Protocol →</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default USAPage;

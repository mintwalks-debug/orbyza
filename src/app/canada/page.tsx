import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Canada | Performance SEO & Web Design Orbyza',
  description: 'The North Star of digital growth. Orbyza is the premier performance marketing agency for Canadian brands seeking global scale. Specialized in technical SEO, Vancouver & Toronto tech hub strategy, and high-conversion web engineering.',
  alternates: {
    canonical: `${siteConfig.url}/canada`,
  },
};

const CanadaPage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/canada_hero_modern_hub_1775964884063.png" 
            alt="Canada Digital Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Global Hub // Canada</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              The North Star <br /> <span className="text-brand-primary italic">Of Digital Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              From the Silicon Valley North to the maritime corridors, Orbyza provides Canadian enterprises with the technical architecture to dominate local markets and scale globally with effortless precision.
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
                  Bridging the <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">local-global divide.</span>
                </h2>
                <div className="text-lg leading-loose text-brand-primary/80 space-y-8 font-medium">
                  <p>
                    The Canadian digital landscape is uniquely positioned as a bridge between high-spec North American innovation and global stability. However, many Canadian firms find themselves trapped between expensive local boutique agencies that lack technical depth and massive US-based firms that fail to understand the nuances of the Canadian consumer. Orbyza fills this void.
                  </p>
                  <p>
                    Whether you are a SaaS powerhouse in the Kitchener-Waterloo corridor, a real estate giant in Vancouver, or a historic brand in Toronto's financial district, our approach is calibrated to your specific regional needs. We don't just "run ads"—we build the digital infrastructure that makes your brand the most logical choice for your target audience.
                  </p>
                  <p>
                    Our mission for our Canadian partners is simple: **Technical Superiority**. We dismantle the legacy hurdles that slow down your growth and implement modern, high-velocity marketing protocols that turn your digital presence into a revenue-generating engine.
                  </p>
                </div>
              </div>

              <div id="regional-intelligence">
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">
                  Regional <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Market Intelligence.</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-brand-secondary p-10 rounded-3xl border border-brand-primary/10 group hover:border-brand-primary transition-all">
                    <h3 className="text-xl font-black mb-4 uppercase">The GTA Hub</h3>
                    <p className="text-xs leading-relaxed text-brand-primary/70 font-bold">Focusing on financial authority, B2B enterprise scaling, and competitive SERP dominance in Canada's economic heart.</p>
                  </div>
                  <div className="bg-brand-secondary p-10 rounded-3xl border border-brand-primary/10 group hover:border-brand-primary transition-all">
                    <h3 className="text-xl font-black mb-4 uppercase">Silicon Valley North</h3>
                    <p className="text-xs leading-relaxed text-brand-primary/70 font-bold">Surgical technical SEO and high-intent PPC for the tech-heavy corridors of Waterloo and Ottawa.</p>
                  </div>
                  <div className="bg-brand-secondary p-10 rounded-3xl border border-brand-primary/10 group hover:border-brand-primary transition-all">
                    <h3 className="text-xl font-black mb-4 uppercase">The Vancouver Cell</h3>
                    <p className="text-xs leading-relaxed text-brand-primary/70 font-bold">Modern web architecture and luxury-market social strategy for the high-growth West Coast ecosystem.</p>
                  </div>
                </div>
              </div>

              <div id="trust-protocol" className="bg-brand-primary p-16 rounded-[3rem] text-white">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Trust Architecture <br/><span className="text-brand-secondary">As Competitive Advantage.</span></h2>
                 <p className="text-xl leading-relaxed font-light mb-12 italic border-l-2 border-brand-secondary pl-8">
                    "Canadian brands prioritize longevity and relationship-driven metrics over short-term hacks. We've built our agency to reflect that level of commitment."
                 </p>
                 <div className="space-y-8 text-white/70 text-lg leading-loose">
                    <p>
                      At Orbyza, we understand that "Trust" is not just a value—it is an asset that can be engineered into your digital presence. For our Canadian clients, we build authoritative SEO footprints and social narratives that establish you as the industry leader. 
                    </p>
                    <p>
                      Our Technical SEO audits are among the most thorough in the industry, focusing on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). We ensure that every piece of content and every technical optimization serves to validate your brand to both search engines and the discerning Canadian user.
                    </p>
                    <p>
                      We act as your "In-House Global Extension." You get the benefit of our global technical squad's expertise with the personalized attention and strategic nuance required for the Canadian market. It is the best of both worlds: Global Power, Canadian Heart.
                    </p>
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-10 sticky top-32 shadow-2xl">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary mb-10">Canada Growth Stats</h4>
                  <div className="space-y-10 text-brand-dark">
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">91%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Mobile User Penetration</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">$15B+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Digital Ad Economy (CAD)</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">24/7</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Active Technical Monitoring</div>
                    </div>
                  </div>
                  <div className="mt-16 pt-10 border-t border-brand-primary/10 text-brand-dark">
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Schedule Canadian Audit →</Link>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Deep Copy Section */}
      <section className="py-32 bg-brand-secondary/30">
        <div className="container-max">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">Performance Without <span className="text-brand-primary">Compromise.</span></h2>
              <div className="prose prose-lg text-brand-primary/80 leading-relaxed max-w-none space-y-10">
                 <p>
                    Canada is a country built on trade and global connection. In the digital era, your "trade route" is your search ranking and your ad conversion funnel. At Orbyza, we specialize in building these routes with a level of engineering precision that our competitors simply cannot match.
                 </p>
                 <p>
                    For the Canadian professional services sector—including legal, financial, and consultative firms—we focus on **Authority Displacement**. Your competitors have likely been coasting on legacy rankings for years. We use semantic content clusters and surgical link acquisition to displace them and establish your firm as the modern authority in your city.
                 </p>
                 <p>
                    Our web development division specializes in building **High-Performance Landing Hubs**. We have noticed that many Canadian sites are burdened by legacy "theme-based" builders that result in horrific Core Web Vital scores. We strip away the bloat and build bespoke, Next.js environments that load with surgical speed, significantly slashing your bounce rates and increasing your lead-to-close ratio.
                 </p>
                 <p>
                    Furthermore, for businesses in bilingual markets (Montreal/Ottawa), we provide specialized **Multicultural Search Strategy**. We understand that intent changes when language changes. Our technical squad ensures that your brand remains the primary answer for users regardless of their linguistic preference, maximizing your reach across the entire Canadian demographic.
                 </p>
                 <p>
                    Choosing Orbyza means choosing a partner that understands the true potential of the Canadian digital economy. We are here to dismantle the barriers to your growth and lead your brand to its rightful position as a market leader. Your North Star of digital growth is here.
                 </p>
              </div>
              <div className="mt-24 text-center">
                 <h3 className="text-2xl font-black uppercase mb-10 tracking-widest">Ready to scale your Canadian brand?</h3>
                 <Link href="/contact" className="btn-premium px-16 py-8">Initialize North Star →</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CanadaPage;

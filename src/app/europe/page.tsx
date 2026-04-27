import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Europe | SEO, SEM & GDPR-Compliant Web Orbyza',
  description: 'Digital excellence across borders. Orbyza is the premier growth agency for European brands, specialized in multilingual SEO, surgical performance ads, and high-precision, GDPR-ready web architecture.',
  alternates: {
    canonical: `${siteConfig.url}/europe`,
  },
  openGraph: {
    title: 'Digital Marketing Europe | SEO, SEM & GDPR-Compliant Web | Orbyza',
    description: 'Digital excellence across borders. Growth agency for European brands, specialized in multilingual SEO and GDPR-ready web architecture.',
    url: `${siteConfig.url}/europe`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Orbyza Europe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Europe | Orbyza',
    description: 'Digital excellence across Europe.',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

const EuropePage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/europe_hero_digital_excellence_1775964899796.png" 
            alt="Europe Digital Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Global Hub // Europe</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Digital Excellence <br /> <span className="text-brand-primary italic">Across Borders.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              In a continent defined by diversity and precision, Orbyza provides the technical vanguard required to unify your digital presence and dominate the European market.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Volume Section 1 */}
      <section className="py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              <div id="market-frontier">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">
                  Navigating the <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">European Frontier.</span>
                </h2>
                <div className="text-lg leading-loose text-brand-primary/80 space-y-8 font-medium">
                  <p>
                    Success in Europe requires more than just marketing—it requires an understanding of the intricate balance between cultural nuance, linguistic diversity, and strict regulatory frameworks. From the tech-hubs of London and Berlin to the fashion capitals of Paris and Milan, the European digital landscape is a tapestry of high-intent markets. At Orbyza, we specialize in dismantling the complexity of these cross-border operations.
                  </p>
                  <p>
                    We recognize that a single approach across the European Union is not only ineffective but technically flawed. Our strategies are designed to be **Hyper-Localized** yet **Globally Unified**. We ensure your brand resonates in Munich with the same technical authority that it carries in Madrid, while maintaining absolute compliance with GDPR and regional privacy protocols.
                  </p>
                  <p>
                    Our mission for European enterprises is to provide **Surgical Digital Performance**. We replace bloated, legacy systems with high-velocity architecture, helping you capture market share in a continent that demands the highest standards of design and data integrity.
                  </p>
                </div>
              </div>

              <div id="multilingual-dominance">
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">
                  Multilingual <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Search Dominance.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-brand-secondary p-12 rounded-3xl border border-brand-primary/10 shadow-xl shadow-brand-primary/5 group hover:border-brand-primary transition-all">
                    <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-brand-primary transition-colors">Semantic Translation</h3>
                    <p className="text-sm leading-relaxed mb-6 font-medium text-brand-primary/70">
                      We don't just translate words; we translate intent. Our technical SEO squad ensures your content is semantically optimized for the unique ways European users search in their native languages, capturing high-intent clusters your competitors are missing.
                    </p>
                  </div>
                  <div className="bg-brand-secondary p-12 rounded-3xl border border-brand-primary/10 shadow-xl shadow-brand-primary/5 group hover:border-brand-primary transition-all">
                    <h3 className="text-2xl font-black mb-6 uppercase group-hover:text-brand-primary transition-colors">Regulatory Compliance</h3>
                    <p className="text-sm leading-relaxed mb-6 font-medium text-brand-primary/70">
                      GDPR and PECR are not obstacles for Orbyza—they are the baseline. We build high-performance, privacy-first infrastructures that ensure your data collection and tracking are bulletproof, protecting your brand's reputation and legality across all EU member states.
                    </p>
                  </div>
                </div>
              </div>

              <div id="precision-protocol" className="bg-brand-primary p-16 rounded-[3rem] text-white">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Precision Design <br/><span className="text-brand-secondary">Meets Algorithmic Power.</span></h2>
                 <p className="text-xl leading-relaxed font-light mb-12 italic border-l-2 border-brand-secondary pl-8">
                    "European brands understand the value of aesthetic excellence. We've combined that with our raw technical power to create a new standard of performance."
                 </p>
                 <div className="space-y-8 text-white/70 text-lg leading-loose">
                    <p>
                      In Europe, your digital presence is your handshake. At Orbyza, we've dismantled the idea that you have to choose between beauty and performance. Our web engineering division utilizes Next.js and cinematic design principles to create interfaces that are as visually stunning as they are technically flawless. 
                    </p>
                    <p>
                      Our European SEO strategies focus on **Authority Acquisition** from high-DA, industry-specific domains across the continent. We build a network of trust that signals to search engines that your brand is the definitive choice for sophisticated European consumers.
                    </p>
                    <p>
                      Transparency is the bedrock of our European operations. We provide our partners with granular, 24/7 access to their performance data, ensuring that every Euro spent is mapped directly to a growth outcome. This is marketing engineered for the most demanding markets on earth.
                    </p>
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-10 sticky top-32 shadow-2xl text-brand-dark">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary mb-10">Europe Growth Intel</h4>
                  <div className="space-y-10">
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">740M+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Potential Consumer Reach</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">100%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">GDPR Compliance Protocol</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">24+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Target Languages Managed</div>
                    </div>
                  </div>
                  <div className="mt-16 pt-10 border-t border-brand-primary/10">
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Initialize EU Audit →</Link>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Expanded Copy Section */}
      <section className="py-32 bg-brand-secondary/30">
        <div className="container-max">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">The Standard Of <span className="text-brand-primary">European Excellence.</span></h2>
              <div className="prose prose-lg text-brand-primary/80 leading-relaxed max-w-none space-y-10">
                 <p>
                    The European market is at a crossroads where legacy brand loyalty meets a demand for hyper-modern digital convenience. Orbyza helps your brand navigate this transition by building high-velocity digital assets that honor your heritage while dominating the modern landscape.
                 </p>
                 <p>
                    For the European SaaS and tech sector, we specialize in **Strategic Market Infiltration**. We don't just help you rank in your home country; we build the technical bridges that allow you to scale seamlessly across borders. Our multilingual content clusters ensure that your solution is found by the right decision-makers in their own language, significantly lowering your customer acquisition costs (CAC).
                 </p>
                 <p>
                    In the luxury and high-end retail sectors, Orbyza provides **Premium Performance Web Architecture**. We understand that for a luxury brand, a fraction of a second in load time or a pixel out of place is unacceptable. We build bespoke digital environments that load instantly and provide a cinematic browsing experience, translating the prestige of your brand into the digital realm.
                 </p>
                 <p>
                    Our SEM and PPC divisions for Europe focus on **High-Efficiency Currency Management**. We manage complex, multi-currency bidding strategies across diverse platforms, ensuring that your ad spend is optimized for the specific economic health of each target region. With Orbyza, you are not just buying traffic; you are buying highly-targeted, high-value European users.
                 </p>
                 <p>
                    Choosing Orbyza as your European growth partner is a commitment to precision and excellence. We dismantle the barriers of language and regulation to provide you with a clear path to market dominance. The frontier of digital excellence is here.
                 </p>
              </div>
              <div className="mt-24 text-center">
                 <h3 className="text-2xl font-black uppercase mb-10 tracking-widest">Ready to deploy across Europe?</h3>
                 <Link href="/contact" className="btn-premium px-16 py-8">Initialize Euro Protocol →</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default EuropePage;

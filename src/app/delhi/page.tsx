import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Delhi | #1 Performance Marketing Orbyza',
  description: 'Orbyza is the premier digital marketing agency in Delhi, delivering 420% ROI growth for brands in CP, Laxmi Nagar, and South Delhi. Specialized in performance SEO, high-spec SEM, and social media dominance.',
  keywords: ['digital marketing agency in delhi', 'best digital marketing company in delhi', 'marketing agency delhi', 'social media agency delhi', 'digital marketing laxmi nagar', 'digital marketing connaught place'],
  alternates: {
    canonical: `${siteConfig.url}/delhi`,
  },
  openGraph: {
    title: 'Digital Marketing Agency Delhi | #1 Performance Marketing Orbyza',
    description: 'Premier digital marketing in Delhi, delivering 420% ROI growth for brands in CP, Laxmi Nagar, and South Delhi.',
    url: `${siteConfig.url}/delhi`,
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Orbyza Delhi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Delhi | Orbyza',
    description: 'Premier digital marketing in Delhi.',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

const DelhiPage = () => {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-brand-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/delhi_digital_skyline_1775965569268.png" 
            alt="Delhi Digital Growth Hub" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="container-max relative z-10">
          <Breadcrumbs />
          <div className="max-w-4xl mt-12">
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">Regional Command // New Delhi</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Best <span className="text-brand-primary italic">Digital Marketing</span> <br /> Agency in Delhi.
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary leading-relaxed max-w-2xl font-light italic border-l-4 border-brand-primary pl-10">
              New Delhi is the engine of Indian commerce. Orbyza provides the high-performance digital architecture needed to dominate search results from Laxmi Nagar to Connaught Place and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              <div id="delhi-market">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">
                  Digital Dominance in <span className="text-brand-primary">The Capital Territory.</span>
                </h2>
                <div className="text-lg leading-loose text-brand-primary/80 space-y-8 font-medium">
                  <p>
                    As the most competitive business landscape in India, New Delhi demands a digital marketing strategy that is both aggressive and scientifically precise. Whether you are searching for the **best digital marketing agency in Delhi** or a specialist for **South Delhi luxury markets**, Orbyza stands as the definitive answer. We don't just "manage" accounts; we dismantle market friction.
                  </p>
                  <p>
                    In hubs like **Laxmi Nagar** and **Connaught Place**, the noise is deafening. To stand out, your brand needs more than just social media posts—it needs a **Surgical Performance Framework**. We specialize in high-velocity SEO that targets the exact intent of the Delhi consumer, ensuring your brand is the primary answer on Google, regardless of the competition.
                  </p>
                  <p>
                    Our squad of growth engineers handles everything from **Technical SEO audits** for major enterprises to high-ROI **Google Ads (SEM)** campaigns that slash CPAs and maximize penetration in the NCR region.
                  </p>
                </div>
              </div>

              <div id="hyper-local">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic">Targeted <span className="text-brand-primary underline decoration-brand-primary/20 underline-offset-8">NCR Intelligence.</span></h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-brand-secondary rounded-3xl border border-brand-primary/10">
                       <h3 className="text-xl font-black uppercase mb-4">Laxmi Nagar & East Delhi</h3>
                       <p className="text-sm text-brand-primary/70 font-bold leading-relaxed">Dominating the educational and professional services sector with surgical SEO and authoritative content clusters.</p>
                    </div>
                    <div className="p-10 bg-brand-secondary rounded-3xl border border-brand-primary/10">
                       <h3 className="text-xl font-black uppercase mb-4">Connaught Place (CP)</h3>
                       <p className="text-sm text-brand-primary/70 font-bold leading-relaxed">High-prestige branding and performance-driven PPC for corporate leaders and established enterprise hubs.</p>
                    </div>
                    <div className="p-10 bg-brand-secondary rounded-3xl border border-brand-primary/10">
                       <h3 className="text-xl font-black uppercase mb-4">South Delhi Excellence</h3>
                       <p className="text-sm text-brand-primary/70 font-bold leading-relaxed">Cinematic social media strategy and luxury-focused targeting for Safdarjung, Hauz Khas, and Greater Kailash.</p>
                    </div>
                    <div className="p-10 bg-brand-secondary rounded-3xl border border-brand-primary/10">
                       <h3 className="text-xl font-black uppercase mb-4">Mansarovar & Sub-Hubs</h3>
                       <p className="text-sm text-brand-primary/70 font-bold leading-relaxed">Bridging the Jaipur-Delhi corridor with unified performance growth protocols for scaling businesses.</p>
                    </div>
                 </div>
              </div>

              <div id="strategic-outreach" className="bg-brand-primary p-16 rounded-[3rem] text-white">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic italic">The Delhi <br/><span className="text-brand-secondary">Performance Protocol.</span></h2>
                 <div className="space-y-8 text-white/70 text-lg leading-loose font-light">
                   <p>
                     For Delhi-based businesses, the "Cost of Inaction" is the highest in India. Every day you are not on the first page for keywords like **"digital marketing agency in Delhi"** or **"top marketing company in NCR,"** you are losing thousands of potential conversion units to technically superior competitors. 
                   </p>
                   <p>
                     Orbyza implements an **Algorithmic Infiltration** strategy. We optimize your digital presence for the way the 2026 search engines actually function—focusing on AI search readiness (AEO), technical schema precision, and ultra-fast Next.js architecture. We don't build websites; we build revenue engines.
                   </p>
                   <p>
                     Our Delhi division is managed by specialists who understand the pulse of the capital. We combine local cultural intelligence with our global technical power (derived from our work in USA and Europe) to give you an unfair advantage in the local market.
                   </p>
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-10 sticky top-32 shadow-2xl">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-primary mb-10">Delhi Market Intelligence</h4>
                  <div className="space-y-10 text-brand-dark">
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">18M+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Digital-Active Population</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">4.8/5</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Average Campaign Health Rating</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-2 tracking-tighter">99+</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/60">Performance Speed Score</div>
                    </div>
                  </div>
                  <div className="mt-16 pt-10 border-t border-brand-primary/10">
                    <Link href="/contact" className="btn-premium w-full text-center hover:bg-brand-dark">Initialize Delhi Protocol →</Link>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEO Volume Section */}
      <section className="py-32 bg-brand-secondary/30">
        <div className="container-max">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">Engineering <span className="text-brand-primary">NCR Dominance.</span></h2>
              <div className="prose prose-lg text-brand-primary/80 leading-relaxed max-w-none space-y-10">
                 <p>
                    New Delhi is not just a city; it is a global business node. To compete, your digital marketing must reflect that scale. At Orbyza, we specialize in **Strategic Growth Infiltration**. This means we identify where your competitors are mathematically weak and strike with surgical precision. 
                 </p>
                 <p>
                    For businesses seeking a **digital marketing course in Delhi** or internship-linked growth, we also provide mentorship programs for high-spec talent, ensuring your internal team evolves alongside your digital assets. We bridge the gap between educational theory and the ruthless reality of Delhi's performance markets.
                 </p>
                 <p>
                    Whether you are an established brand in Connaught Place or a rising tech giant in Laxmi Nagar, our **Delhi SEO Strategy** remains the same: Absolute Market Dominance. We utilize semantic schema markup, entity validation, and high-DA link acquisition to make your brand the most authoritative answer for any relevant search query in the capital.
                 </p>
                 <p>
                    Our focus includes **Social Media Marketing in Delhi**, where we employ CINEMATIC storytelling combined with data-driven targeting. We don't just "post"; we engineer social movements around your brand. 
                 </p>
                 <p>
                    Partnering with Orbyza for your Delhi operations is a commitment to performance. We are ready to dismantle the barriers to your growth and lead your brand to its rightful position as an NCR market leader. The capital of growth is here.
                 </p>
              </div>
              <div className="mt-24 text-center">
                 <h3 className="text-2xl font-black uppercase mb-10 tracking-widest">Ready to deploy in New Delhi?</h3>
                 <Link href="/contact" className="btn-premium px-16 py-8">Initialize Delhi Alpha →</Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default DelhiPage;

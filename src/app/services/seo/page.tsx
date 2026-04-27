import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Elite SEO Services in Jaipur | #1 Search Engine Optimization Agency Orbyza',
  description: 'Dominating search results with technical precision. Orbyza is the premier SEO agency in Jaipur, delivering +420% average organic growth through data-driven methodology, semantic content engineering, and authority link acquisition.',
  keywords: ['SEO services Jaipur', 'SEO agency Jaipur', 'technical SEO Jaipur', 'local SEO Jaipur', 'search engine optimization expert Jaipur', 'best SEO company Jaipur'],
  alternates: {
    canonical: `${siteConfig.url}/services/seo`,
  },
  openGraph: {
    title: 'Elite SEO Services in Jaipur | Orbyza',
    description: 'Expert SEO engineering for brands that demand dominance. Specialized in technical audits, keyword intelligence, and high-authority link acquisition.',
    url: `${siteConfig.url}/services/seo`,
    images: [`${siteConfig.url}/og-image.jpg`],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite SEO Services in Jaipur | Orbyza',
    description: 'Expert SEO engineering for brands that demand dominance.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function SEOPage() {
  return (
    <ServiceDetail
      title="Rank #1 on Google. Dominate Your Competition."
      description="Expert SEO services for Jaipur businesses. Orbyza dismantles market friction through surgical SEO engineering. We've helped 50+ companies achieve an average 320% ROI."
      iconName="Search"
      image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2670"
      features={[
        "Technical Architecture Audit",
        "Keyword Research & Strategy",
        "Core Web Vitals Optimization",
        "E-E-A-T Content Creation",
        "Authority Backlink Building",
        "Local SEO & GMB Domination",
        "Conversion Rate Integration",
        "Monthly Reporting & ROI Tracking"
      ]}
      longDescription={`
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-6">Trusted by 50+ Jaipur-based brands. ISO 9001 Certified. Google Partner.</h3>
            <p>In the hyper-competitive digital landscape of 2026, appearing on the first page of Google is no longer a luxury—it is the baseline for survival. As the premier <strong>SEO agency in Jaipur</strong>, Orbyza provides a sophisticated, multi-layered approach to search dominance that scales with your ambition.</p>
          </section>
          
          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">Our SEO Process</h3>
            <div className="grid sm:grid-cols-2 gap-8 not-prose">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Step 1: Audit</div>
                <p className="text-sm text-white/60">Competitive analysis, keyword research, and 300-point technical audit.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Step 2: Strategy</div>
                <p className="text-sm text-white/60">Custom roadmap development, milestone planning, and revenue KPI setting.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Step 3: Implementation</div>
                <p className="text-sm text-white/60">On-page optimization, semantic content creation, and technical fixes.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Step 4: Optimization</div>
                <p className="text-sm text-white/60">Continuous monitoring, data-driven refinement, and performance improvement.</p>
              </div>
            </div>
          </section>

          <section className="bg-brand-primary/10 p-10 rounded-[2rem] border border-brand-primary/20">
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">Case Study Showcase</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-brand-primary mb-2">Case Study 1: How We Increased Organic Traffic by 420% for TechCorp India</h4>
                <p className="text-sm text-white/60">Results: 2,000 visits/month → 12,000 visits/month in 6 months</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-2">Case Study 2: Local Retail Store Ranked #1 for 15 Keywords</h4>
                <p className="text-sm text-white/60">Results: From page 5 to #1, 300+ qualified leads/month</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">Performance Based Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-6 not-prose">
              <div className="p-6 bg-white border border-white/10 rounded-2xl text-center">
                <div className="text-brand-dark font-black text-xs mb-2">STARTER</div>
                <div className="text-2xl font-black text-brand-primary mb-4">₹15,000/mo</div>
                <p className="text-[10px] text-brand-dark/60">Small businesses, basic SEO</p>
              </div>
              <div className="p-6 bg-brand-primary border border-brand-primary rounded-2xl text-center text-white scale-105">
                <div className="text-white/80 font-black text-xs mb-2">GROWTH</div>
                <div className="text-2xl font-black mb-4">₹35,000/mo</div>
                <p className="text-[10px] text-white/60">Medium businesses, comprehensive SEO</p>
              </div>
              <div className="p-6 bg-white border border-white/10 rounded-2xl text-center">
                <div className="text-brand-dark font-black text-xs mb-2">ENTERPRISE</div>
                <div className="text-2xl font-black text-brand-primary mb-4">Custom</div>
                <p className="text-[10px] text-brand-dark/60">Large-scale strategy</p>
              </div>
            </div>
            <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-brand-border">
              <h3 className="text-2xl font-black text-brand-dark uppercase italic mb-8">Related SEO Intelligence</h3>
              <div className="grid sm:grid-cols-2 gap-6 not-prose">
                 <Link href="/blog/best-seo-agency-in-jaipur" className="p-6 bg-white border border-brand-border rounded-2xl hover:border-brand-primary transition-all group">
                    <div className="text-brand-primary font-black text-[10px] uppercase mb-2">Strategy Briefing</div>
                    <h4 className="text-brand-dark font-bold group-hover:text-brand-primary transition-colors">Best SEO Agency in Jaipur →</h4>
                 </Link>
                 <Link href="/blog/sem-vs-seo" className="p-6 bg-white border border-brand-border rounded-2xl hover:border-brand-primary transition-all group">
                    <div className="text-brand-primary font-black text-[10px] uppercase mb-2">Comparison Analysis</div>
                    <h4 className="text-brand-dark font-bold group-hover:text-brand-primary transition-colors">SEM vs SEO: Which Wins? →</h4>
                 </Link>
              </div>
            </section>
          </div>
      `}
      methodology={[
        { 
          title: "Phase 1: Structural Intelligence Audit", 
          desc: "We perform an exhaustive 300-point technical audit. This isn't just about broken links; we analyze your site's JS rendering efficiency, crawl budget distribution, and semantic HTML hierarchy. We find the friction points that are invisible to generic audit tools." 
        },
        { 
          title: "Phase 2: Semantic Mapping & Intent", 
          desc: "Keywords are dead; intent is everything. We map out the semantic universe of your industry, identifying high-value clusters that your competitors are ignoring. We build a 'Topic Map' that establishes you as the undisputed authority in your niche." 
        },
        { 
          title: "Phase 3: Tactical Content Deployment", 
          desc: "Our 'Content Engineers' (not just writers) produce high-E-E-A-T assets designed to satisfy both human users and AI crawlers. We optimize for 'Featured Snippets' and 'People Also Ask' boxes to capture maximum real estate on the SERP." 
        },
        { 
          title: "Phase 4: Authority Valve Link Building", 
          desc: "We don't buy links. We earn authority. Through surgical manual outreach and PR-driven campaigns, we secure mentions from high-DA, industry-relevant domains that pass true equity and validate your site's expertise to search engines." 
        },
        { 
          title: "Phase 5: AEO & Generative AI Optimization", 
          desc: "We prepare your brand for the future of search. By optimizing schema, implementing 'Knowledge Graph' signals, and curating your digital footprint, we ensure AI search engines recommend your services as the definitive choice." 
        }
      ]}
      roiDetails="Orbyza SEO partners typically experience a 250% increase in organic leads within the first 6 months, with a long-term compound growth curve that significantly reduces reliance on expensive paid advertising (SEM/PPC)."
      faqs={[
        { 
          q: "How does Orbyza handle the new AI Search era (Google SGE/AEO)?", 
          a: "We integrate Answer Engine Optimization (AEO) into our core SEO protocol. This involves structuring your content for LLM retrieval and ensuring your entity (Orbyza/Brand) is firmly established in the global knowledge graph." 
        },
        { 
          q: "Is SEO in Jaipur truly competitive?", 
          a: "Yes. With Jaipur becoming a major Tier-2 tech hub in India, the search volume for professional services has skyrocketed. If you aren't in the top 3 results, you are losing 75% of your potential market share to competitors who are likely using Orbyza's strategies." 
        },
        { 
          q: "What is your approach to backlink acquisition?", 
          a: "We focus on 'Authority Links.' One high-quality guest post or PR mention from a reputable site like Forbes, TechCrunch, or a NICHE-specific leader is worth 1,000 low-quality directories. We do manual outreach only." 
        },
        { 
          q: "How do you measure success beyond rankings?", 
          a: "Rankings are a proxy; revenue is the goal. We track 'Conversion from Organic,' behavior flow, and cost-per-acquisition (CPA-SEO). We provide real-time dashboards so you see the exact ROI your campaign is generating." 
        },
        { 
          q: "Do you offer technical SEO for Next.js and Headless sites?", 
          a: "This is our specialty. Being an engineering-first agency, we optimize JavaScript-heavy sites for zero-latency crawling and indexing, ensuring Google sees your content exactly as a user would." 
        }
      ]}
    />
  );
}

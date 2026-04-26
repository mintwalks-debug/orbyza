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
  }
};

export default function SEOPage() {
  return (
    <ServiceDetail
      title="Search Engine Optimization"
      description="Orbyza dismantles market friction through surgical SEO engineering. We don't just 'rank' pages; we build high-authority digital assets that dominate search landscapes and drive sustainable revenue."
      iconName="Search"
      image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2670"
      features={[
        "Technical Architecture Audit",
        "Semantic Keyword Intelligence",
        "Core Web Vitals Optimization",
        "E-E-A-T Content Engineering",
        "Authority Backlink Acquisition",
        "Local Search Dominance",
        "Conversion Rate Integration",
        "AI Search (AEO) Optimization"
      ]}
      longDescription={`
        <div className="space-y-8">
          <p>In the hyper-competitive digital landscape of 2026, appearing on the first page of Google is no longer a luxury—it is the baseline for survival. However, standard "keyword stuffing" and generic link building are relics of the past. As the premier <strong>SEO agency in Jaipur</strong>, Orbyza provides a sophisticated, multi-layered approach to search dominance that scales with your ambition.</p>
          
          <h3 className="text-2xl font-black text-white uppercase italic">The Orbyza Search Philosophy: Engineering Authority</h3>
          <p>Our methodology is rooted in the belief that search engines are not just algorithms to be tricked, but answer engines to be served. We focus on <strong>Technical Excellence</strong>, <strong>Semantic Authority</strong>, and <strong>Entity Validation</strong>. By aligning your digital infrastructure with the way LLMs and search crawlers actually process information, we create a "gravity well" of authority that naturally attracts top-tier rankings.</p>
          
          <p>We solve the "Paradox of Visibility": where legacy brands lose ground to technically superior newcomers. At Orbyza, we ensure you are the technically superior champion. From our Jaipur HQ, we manage global SEO portfolios for enterprises that require +400% growth as their quarterly standard.</p>

          <h3 className="text-2xl font-black text-white uppercase italic">Why Local SEO in Jaipur is Different</h3>
          <p>Jaipur represents a unique search ecosystem—a blend of heritage-driven sectors and a booming technology hub. Dominating <strong>Local SEO in Jaipur</strong> requires more than just a Google Business Profile. It requires technical localization, local entity linking, and hyper-relevant content that resonates with the regional audience while maintaining global standards. We've helped dozens of Jaipur's leading brands move from invisible to unavoidable.</p>
          
          <p>Our strategies are designed to be "Engine Agnostic." Whether your customers are searching on Google, Bing, or using AI agents like ChatGPT and Gemini, your brand remains the primary answer. This is the core of our Answer Engine Optimization (AEO) strategy, which we integrate into every SEO campaign.</p>
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

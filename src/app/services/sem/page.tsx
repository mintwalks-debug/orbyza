import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Google Ads & SEM Agency Jaipur | High ROI PPC Expert Orbyza',
  description: 'Drive instant sales with the best SEM agency in Jaipur. Our Google Ads experts manage high-conversion PPC campaigns to maximize your digital marketing ROI and accelerate growth.',
  alternates: {
    canonical: `${siteConfig.url}/services/sem`,
  },
  openGraph: {
    title: 'Google Ads & SEM Agency Jaipur | High ROI PPC Expert Orbyza',
    description: 'Maximize your digital advertising ROI with PPC specialists in Jaipur. High-performance Google Ads and SEM strategies for immediate scale.',
    url: `${siteConfig.url}/services/sem`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Dominance | SEM Agency Jaipur',
    description: 'Surgical PPC management for brands that demand ROI.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function SEMPage() {
  return (
    <ServiceDetail
      title="Dominate Search. Drive Instant ROI."
      description="Surgical SEM and Google Ads management for Jaipur's elite brands. We turn advertising spend into a predictable revenue engine through high-velocity performance engineering."
      iconName="TrendingUp"
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
      features={[
        "Strategic Account Architecture",
        "High-Intent Keyword Mining",
        "Cinematic Ad Copywriting",
        "Landing Page Performance Opt.",
        "Dynamic Remarketing Matrix",
        "A/B Testing & Data Feedback",
        "Competitor Ad Infiltration",
        "24/7 ROI Monitoring"
      ]}
      longDescription={`
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-6">Immediate Market Penetration. Zero Guesswork.</h3>
            <p>While SEO builds your digital fortress, <strong>SEM (Search Engine Marketing)</strong> is your tactical strike force. At Orbyza, we don't just "run ads"; we engineer revenue outcomes. As Jaipur's premier performance marketing agency, we specialize in building granular, high-conversion Google Ads campaigns that capture buyers at the exact moment of intent.</p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">The Orbyza SEM Protocol</h3>
            <div className="grid sm:grid-cols-2 gap-8 not-prose">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Vector 1: Intelligence</div>
                <p className="text-sm text-white/60">We identify high-ROAS keywords that your competitors are missing, targeting the "Ready-to-Buy" segment.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Vector 2: Architecture</div>
                <p className="text-sm text-white/60">Building surgical account structures that maximize Quality Score and minimize your cost-per-click.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Vector 3: Conversion</div>
                <p className="text-sm text-white/60">Every ad leads to a high-speed, persuasive landing path designed for one purpose: the conversion.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-brand-primary font-black mb-2">Vector 4: Refinement</div>
                <p className="text-sm text-white/60">Continuous A/B testing and algorithm feedback ensures your ROI only increases over time.</p>
              </div>
            </div>
          </section>

          <section className="bg-brand-primary/10 p-10 rounded-[2rem] border border-brand-primary/20">
            <h3 className="text-2xl font-black text-white uppercase italic mb-8 text-center">SEM Success Metrics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-black text-brand-primary mb-1">5.2x</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-primary mb-1">-28%</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">CPA Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-primary mb-1">100%</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Transparency</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-primary mb-1">24H</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Launch Window</div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">Ready to Scale Your Spend?</h3>
            <p className="mb-10">Stop burning your budget on "broad match" mediocrity. Join the Jaipur brands that use SEM as a precision revenue engine. Let's audit your current account or build your first world-class campaign.</p>
            <Link href="/contact" className="btn-premium px-16 py-8 inline-block">Initialize SEM Growth Protocol →</Link>
          </section>
        </div>
      `}
      methodology={[
        { 
          title: "Strategic Account Architecture", 
          desc: "We build granular account structures that separate high-intent queries from exploratory searches, allowing for hyper-precise bidding and budgeting." 
        },
        { 
          title: "Precision Ad Engineering", 
          desc: "Our copywriters and performance designers create ad experiences that resonate with searchers, resulting in higher Quality Scores and lower costs per click." 
        },
        { 
          title: "Conversion-Centric Landing Pages", 
          desc: "We don't just send traffic to your homepage. We build optimized landing paths that remove friction and maximize the likelihood of a conversion." 
        },
        { 
          title: "Continuous Algorithm Feedback", 
          desc: "Our team monitors performance data daily, applying machine learning optimizations and manual bid adjustments to maintain peak performance." 
        }
      ]}
      roiDetails="Our SEM clients average a 25% decrease in CPA within the first 60 days of management, with specific industries seeing up to 5x return on ad spend (ROAS)."
      faqs={[
        { 
          q: "How much should I spend on Google Ads?", 
          a: "The ideal budget depends on your industry and competition in Jaipur. We typically recommend starting with a budget that allows for at least 10-20 clicks per day to gather enough data for optimization." 
        },
        { 
          q: "What's the difference between SEO and SEM?", 
          a: "SEO is about earning organic traffic over time, while SEM is about buying visibility through paid advertising. A balanced strategy usually incorporates both for maximum market coverage." 
        },
        { 
          q: "Do you manage Meta (Facebook/Instagram) ads too?", 
          a: "Yes, we provide full-funnel advertising across all major platforms, though SEM specifically refers to search engines like Google and Bing where user intent is highest." 
        },
        { 
          q: "How do we track the results of SEM campaigns?", 
          a: "We implement advanced conversion tracking scripts using Google Tag Manager, allowing you to see exactly which keywords and ads are driving calls, form submissions, or sales." 
        }
      ]}
    />
  );
}

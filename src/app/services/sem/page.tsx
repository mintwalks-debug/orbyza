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
    description: 'Maximize your digital advertising ROI with PPC specialists in Jaipur. High-performance Google Ads and SEM strategies.',
    url: `${siteConfig.url}/services/sem`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function SEMPage() {
  return (
    <ServiceDetail
      title="Search Engine Marketing (SEM / PPC)"
      description="Maximize your ROI with precision-targeted Google Ads and search engine marketing. We build high-conversion campaigns that put your brand directly in front of buyers."
      iconName="TrendingUp"
      features={[
        "Google Ads Management",
        "Landing Page Analysis",
        "Conversion Rate Opt.",
        "Monthly Reporting",
        "Audience Targeting",
        "Retargeting Campaigns",
        "Bid Optimization",
        "Performance Analytics"
      ]}
      longDescription={`
        <p>While SEO builds long-term foundation, <strong>Search Engine Marketing (SEM)</strong> is your engine for immediate digital acceleration. At Orbyza, we don't just manage budgets; we engineer ROI. As a premier Google Ads partner in Jaipur, we specialize in building granular, high-intent campaigns that convert casual searchers into paying customers.</p>
        <p>Our approach to SEM/PPC is ruthlessly data-driven. We believe every rupee of your advertising spend should be held accountable. Through advanced keyword research, rigorous A/B testing of ad copy, and strategic landing page optimization, we ensure your brand captures market share while maintaining a healthy cost-per-acquisition (CPA).</p>
        <p>In a world where PPC costs are constantly rising, our expertise in Jaipur's competitive search landscape gives you the tactical advantage. We look beyond clicks to focus on metrics that actually impact your bottom line: conversions, sales, and lifetime customer value.</p>
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

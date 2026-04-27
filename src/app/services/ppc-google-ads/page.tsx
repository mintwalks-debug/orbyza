import React from 'react';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Agency India | ROI-Focused Ads | Orbyza',
  description: 'Maximize your ROI with the best PPC agency in India. Specialized in Google Ads, Shopping Ads, and Retargeting for brands in Mumbai, Delhi, and Bengaluru.',
};

const PPCPage = () => {
  return (
    <ServiceDetail
      title="PPC / Google Ads"
      description="Precision performance marketing that turns clicks into revenue."
      iconName="TrendingUp"
      features={[
        "Google Search Ads",
        "Shopping Ads Mastery",
        "Retargeting Protocols",
        "Display Network Domination",
        "YouTube Ads Strategy",
        "CPA/ROAS Optimization"
      ]}
      painPoints={[
        "High cost-per-click with low conversion efficiency.",
        "Lack of granular tracking and revenue attribution.",
        "Being outbid by competitors in prime Tier 1 markets."
      ]}
      longDescription={`
        <p>At Orbyza, we don't just 'run ads'. We engineer <strong>conversion engines</strong>. Our PPC protocols are designed to minimize waste and maximize ROAS (Return on Ad Spend).</p>
        <p>Whether you're targeting the high-intent audience in Mumbai or the global startup ecosystem, our performance team ensures every rupee is spent strategically.</p>
      `}
      methodology={[
        { title: "Intent Mapping", desc: "Identifying the exact keywords your buyers are searching for with high-velocity intent." },
        { title: "Bidding Precision", desc: "Algorithmic bidding strategies to maintain top positions at lowest costs." },
        { title: "Creative A/B Testing", desc: "Constant iteration of copy and visual assets to push CTR boundaries." },
        { title: "Analytics Feedback", desc: "Real-time dashboarding and weekly performance syncs." }
      ]}
      roiDetails="Average ROAS of 4.5x for E-commerce brands and 3.2x for B2B lead generation across the India region."
      faqs={[
        { q: "What is the minimum budget for Google Ads?", a: "We recommend starting with at least ₹30,000/month to ensure sufficient data for optimization." },
        { q: "How do you track sales?", a: "We implement server-side conversion tracking to ensure 100% accuracy in lead and revenue attribution." }
      ]}
    />
  );
};

export default PPCPage;

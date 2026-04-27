import React from 'react';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Mumbai, Delhi, Bengaluru | Orbyza',
  description: 'Orbyza is India\'s top digital marketing agency. Expert SEO, SEM, and performance growth for brands in Mumbai, Delhi, Bengaluru and global markets.',
};

const DigitalMarketingPage = () => {
  return (
    <ServiceDetail
      title="Digital Marketing"
      description="Full-scale growth engineering for India's most ambitious brands."
      iconName="Globe"
      features={[
        "Performance Marketing",
        "Market Infiltration",
        "ROI-Focused Content",
        "Multi-Channel Scaling",
        "Data-Driven Growth",
        "Global Expansion Strategy"
      ]}
      painPoints={[
        "Low quality lead volume and inconsistent sales pipelines.",
        "Wasteful ad spend without transparent ROI attribution.",
        "Stagnant organic growth in competitive Tier 1 city markets."
      ]}
      longDescription={`
        <p>In 2026, the Indian digital landscape is more competitive than ever. Orbyza provides the technical edge required to dominate markets in Mumbai, Delhi, Bengaluru, and beyond.</p>
        <p>Our approach is centered on <strong>revenue growth</strong>, not just vanity metrics. We synchronize SEO, SEM, and creative branding into a single high-velocity protocol.</p>
      `}
      methodology={[
        { title: "Strategic Audit", desc: "We dismantle your current presence to identify friction points and ROI leakage." },
        { title: "Protocol Setup", desc: "Engineering a custom growth engine tailored for your specific industry vertical." },
        { title: "High-Velocity Execution", desc: "Daily optimization and rapid-response tactical adjustments." },
        { title: "Scale Phase", desc: "Expanding success into new markets and city-specific landing vectors." }
      ]}
      roiDetails="Our clients see an average 320% ROI increase within the first 120 days of protocol initialization."
      faqs={[
        { q: "How do you handle local marketing in Jaipur or Delhi?", a: "We create city-specific landing protocols and local schema optimizations to capture region-intent searches." },
        { q: "What industries do you specialize in?", a: "E-commerce, SaaS, Real Estate, and EdTech are our primary high-performance verticals." }
      ]}
    />
  );
};

export default DigitalMarketingPage;

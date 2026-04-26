import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Social Media Marketing Company Jaipur | SMM Expert Orbyza',
  description: 'Grow your social presence with the best social media marketing company in Jaipur. We manage high-engagement Instagram, Facebook, and LinkedIn campaigns for brands.',
  alternates: {
    canonical: `${siteConfig.url}/services/social-media`,
  },
  openGraph: {
    title: 'Social Media Marketing Company Jaipur | SMM Expert Orbyza',
    description: 'Elevate your brand presence across social platforms. We specialize in high-impact SMM and community growth for Jaipur businesses.',
    url: `${siteConfig.url}/services/social-media`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function SocialMediaPage() {
  return (
    <ServiceDetail
      title="Social Media Marketing (SMM)"
      description="Connect directly with your customers on the platforms they use every day. We handle everything from content creation to community management and engagement spikes."
      iconName="Share2"
      features={[
        "Content Strategy",
        "Community Management",
        "Influencer Outreach",
        "Influencer Strategy",
        "Paid Ads (FB, IG, LI)",
        "Social Analytics",
        "Trend Monitoring",
        "Visual Branding"
      ]}
      longDescription={`
        <p>In the digital age, your brand's social media presence is the new storefront. At Orbyza, we don't just post content; we craft narratives that spark meaningful interaction. As the leading <strong>social media marketing company in Jaipur</strong>, we specialize in high-impact, brand-building strategies that turn followers into fervent advocates.</p>
        <p>Our philosophy focuses on the intersection of data-driven insights and cinematic creativity. We understand that every platform has its own unique ecosystem. Whether it's the professional landscape of LinkedIn, the visual demands of Instagram, or the high-velocity world of TikTok, we tailor our approach to ensure your brand resonates in the right context.</p>
        <p>Beyond engagement, we focus on attribution. Through strategic paid social advertising and sophisticated audience targeting, we bridge the gap between "likes" and local business growth in Jaipur.</p>
      `}
      methodology={[
        { 
          title: "Visual Brand Narrative", 
          desc: "We develop a cohesive visual language and tone of voice for your social profiles, ensuring that every post reinforces your brand's unique identity." 
        },
        { 
          title: "Audience Intelligence", 
          desc: "Our team uses advanced social listening tools to understand your target audience's behaviors, preferences, and pain points." 
        },
        { 
          title: "Cinematic Content Production", 
          desc: "From professional photography to high-quality short-form video content, we produce the visual assets that command attention and drive engagement." 
        },
        { 
          title: "Aggressive Paid Distribution", 
          desc: "We use sophisticated Facebook and Instagram ad campaigns to ensure your content reaches your ideal customers with precision and scale." 
        }
      ]}
      roiDetails="Our social media campaigns average a 40% increase in brand sentiment and a significant reduction in overall cost per lead (CPL) through high organic reach and optimized social funnels."
      faqs={[
        { 
          q: "Which social media platforms should my business be on?", 
          a: "The ideal platforms depend on where your target audience lives. We'll perform a full audience assessment to recommend a tailored platform mix that maximizes your impact in Jaipur." 
        },
        { 
          q: "How often will you post content?", 
          a: "Frequency is determined by your specific strategy. We focus on quality over quantity, ensuring each post serves a clear strategic purpose and provides value to your followers." 
        },
        { 
          q: "Do you handle influencer marketing?", 
          a: "Yes, we identify and partner with relevant influencers in Jaipur and beyond to amplify your brand's voice and build immediate trust with new audiences." 
        },
        { 
          q: "Can social media actually drive sales?", 
          a: "Absolutely. Through strategic retargeting and shoppable posts, we turn social platforms into measurable direct-response channels that contribute directly to your revenue." 
        }
      ]}
    />
  );
}

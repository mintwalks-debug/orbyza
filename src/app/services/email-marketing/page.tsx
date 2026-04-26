import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Email Marketing Services Jaipur | Personalized Automation Orbyza',
  description: 'Reach your audience directly in Jaipur through professional email marketing. Orbyza offers automation, newsletter design, and high-conversion drip campaigns.',
  alternates: {
    canonical: `${siteConfig.url}/services/email-marketing`,
  },
  openGraph: {
    title: 'Email Marketing Services Jaipur | Personalized Automation Orbyza',
    description: 'Nurture leads and drive repeat business with sophisticated email marketing funnels and automation in Jaipur.',
    url: `${siteConfig.url}/services/email-marketing`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function EmailMarketingPage() {
  return (
    <ServiceDetail
      title="Email Marketing Automation"
      description="Directly reach your most valuable leads with highly personalized, data-backed email campaigns that focus on conversion and long-term retention."
      iconName="Mail"
      features={[
        "Drip Campaigns",
        "Lead Nurturing",
        "A/B Testing Subject Lines",
        "Segmented Flow",
        "Personalization Logic",
        "HTML Newsletters",
        "Newsletter Design",
        "Conversion Analytics"
      ]}
      longDescription={`
        <p>In the digital age, your email list is your most valuable owned asset. At Orbyza, we don't just "send emails"; we engineer sophisticated communication funnels that nurture prospects into paying customers. As the premier <strong>email marketing service in Jaipur</strong>, we specialize in high-conversion automation that scales with your ambition.</p>
        <p>Our philosophy is built on the intersection of data-driven personalization and cinematic design. We understand that your customers are bombarded with hundreds of emails every day. To be heard, you must be relevant. Whether it's a series of automated welcome drips or a complex transactional flow, we ensure every message provides value and drives action.</p>
        <p>From Jaipur to the global inbox, our email engines are designed for deliverability and performance. We focus on metrics that actually impact your bottom line: open rates, click-throughs, and most importantly, attributed revenue.</p>
      `}
      methodology={[
        { 
          title: "Segmented Audience Mapping", 
          desc: "We dive deep into your customer data to identify distinct segments, ensuring every email is hyper-relevant to its recipient's specific stage in the buyer's journey." 
        },
        { 
          title: "Automated Lifecycle Flows", 
          desc: "Our team designs and implements complex automation flows—from welcome series to win-back campaigns—that continue to drive revenue while you sleep." 
        },
        { 
          title: "Cinematic Email Design", 
          desc: "We build visually stunning, mobile-optimized emails that reflect your brand's unique identity while focusing on the core objective: the click." 
        },
        { 
          title: "Continuous Deliverability Optimization", 
          desc: "We rigorously test and monitor SPF, DKIM, and DMARC settings to ensure your messages always land in the inbox, not the spam folder." 
        }
      ]}
      roiDetails="Our email marketing clients typically see a 25% increase in repeat business and a significant boost in overall customer lifetime value within 90 days of implementation."
      faqs={[
        { 
          q: "Why is email marketing still relevant for my Jaipur business?", 
          a: "Email marketing offers the highest ROI of almost any digital marketing channel because it's a direct line to your most interested prospects and customers." 
        },
        { 
          q: "How often should I be sending emails?", 
          a: "The ideal frequency depends on your industry and audience's preferences. We focus on providing enough value to stay top-of-mind without becoming a nuisance." 
        },
        { 
          q: "Do you handle the copywriting and design?", 
          a: "Yes, we provide full-service email marketing, including strategic planning, expert copywriting, professional design, and technical execution." 
        },
        { 
          q: "How do we track the revenue from emails?", 
          a: "We implement advanced UTM tracking and attribute revenue directly back to each specific email and automation flow through your analytics dashboard." 
        }
      ]}
    />
  );
}

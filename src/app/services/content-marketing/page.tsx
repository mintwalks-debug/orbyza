import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Content Marketing Agency Jaipur | Expert Copywriting Orbyza',
  description: 'Scale your brand with the best content marketing agency in Jaipur. We create viral content, blog posts, and copy that ranks and converts to drive business growth.',
  alternates: {
    canonical: `${siteConfig.url}/services/content-marketing`,
  },
  openGraph: {
    title: 'Content Marketing Agency Jaipur | Expert Copywriting Orbyza',
    description: 'Establish domain authority with high-impact content strategy and editorial excellence in Jaipur.',
    url: `${siteConfig.url}/services/content-marketing`,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing Agency Jaipur | Orbyza',
    description: 'Establish domain authority with high-impact content strategy.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function ContentMarketingPage() {
  return (
    <ServiceDetail
      title="Content Marketing Strategy"
      description="Establish authority and build trust with your target audience through high-quality blogging, articles, and whitepapers. Quality content drives quality customers."
      iconName="FileText"
      features={[
        "Blog Management",
        "Guest Posting",
        "Copywriting Focus",
        "Expert Research",
        "Storytelling Support",
        "Infographic Content",
        "Video Scripting",
        "E-book Production"
      ]}
      longDescription={`
        <p>In the age of information overload, attention is the most valuable currency. At Orbyza, we don't just "write content"; we engineer authoritative narratives that capture that attention and convert it into real-world business value. As the leading <strong>content marketing agency in Jaipur</strong>, we specialize in high-impact editorial strategies that build long-term brand equity.</p>
        <p>Our philosophy is rooted in the intersection of E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). We understand that search engines and users alike are looking for depth and value. Whether it's a technical whitepaper for a B2B startup or a series of lifestyle blog posts for a D2C brand, we ensure your voice is heard above the noise.</p>
        <p>We combine semantic SEO intelligence with cinematic storytelling to ensure your content doesn't just rank—it resonates. From Jaipur to the global stage, our content engines are built to scale.</p>
      `}
      methodology={[
        { 
          title: "Topical Cluster Discovery", 
          desc: "We identify the core topics and sub-topics your brand should own, building a roadmap for topical authority that search engines find irresistible." 
        },
        { 
          title: "Editorial Command Center", 
          desc: "Our team of expert writers and editors manage a rigorous production workflow, ensuring every piece matches your brand's unique tone and quality standards." 
        },
        { 
          title: "Semantic Optimization", 
          desc: "Every sentence is optimized for relevance and readability, ensuring both bots and humans understand the depth of your expertise." 
        },
        { 
          title: "Multi-Channel Amplification", 
          desc: "Great content is useless if it's not seen. We develop aggressive distribution strategies across search, social, and email to maximize your reach." 
        }
      ]}
      roiDetails="Our content strategies typically result in a 300% increase in indexed keywords and a significant boost in domain authority within 6-12 months of consistent execution."
      faqs={[
        { 
          q: "Why is content marketing important for my Jaipur business?", 
          a: "Content marketing builds trust, establishes authority, and provides the foundation for your SEO and social media efforts. It's the most sustainable way to attract and retain customers." 
        },
        { 
          q: "How do you ensure the content matches my brand voice?", 
          a: "We start by developing a comprehensive brand style guide and intake questionnaire, ensuring our writers understand your unique perspective and terminology." 
        },
        { 
          q: "Do you handle the distribution and promotion as well?", 
          a: "Absolutely. We view content creation and distribution as two sides of the same coin. We use organic and paid channels to get your content in front of the right eyes." 
        },
        { 
          q: "How do we measure the success of content?", 
          a: "We track metrics such as time-on-page, scroll depth, backlink acquisition, and most importantly, assisted conversions and lead generation." 
        }
      ]}
    />
  );
}

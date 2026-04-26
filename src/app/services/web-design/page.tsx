import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Web Design Company Jaipur | High-Performance UI/UX Orbyza',
  description: 'Boost your online presence with the best web design company in Jaipur. We create fast, responsive, and high-converting websites for businesses in Rajasthan.',
  alternates: {
    canonical: `${siteConfig.url}/services/web-design`,
  },
  openGraph: {
    title: 'Web Design Company Jaipur | High-Performance UI/UX Orbyza',
    description: 'Next-gen web design and development in Jaipur. We build high-speed, SEO-optimized websites using Next.js and React technology.',
    url: `${siteConfig.url}/services/web-design`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function WebDesignPage() {
  return (
    <ServiceDetail
      title="High-Performance Web Design"
      description="A website should be more than just pretty; it should be powerful. We design and build fast, secure, and highly optimized websites that convert visitors to customers."
      iconName="Monitor"
      image="https://images.unsplash.com/photo-1581291589117-2ed87cf80388?auto=format&fit=crop&q=80&w=2670"
      features={[
        "Modern UX/UI Design",
        "Responsive Development",
        "Fast Page Speed Opt.",
        "Mobile-First Approach",
        "Custom Feature Build",
        "Ecommerce Integration",
        "Lead Gen Focus",
        "Secure Maintenance"
      ]}
      longDescription={`
        <p>In the digital age, your website is your brand's most important asset. It's your flagship store, your pitch deck, and your sales engine all in one. At Orbyza, we don't just build websites; we engineer high-performance digital experiences. As the premier <strong>web design company in Jaipur</strong>, we specialize in websites that are as technically superior as they are visually stunning.</p>
        <p>Our philosophy is built on the intersection of cinematic design and rigorous engineering. We understand that your customers have no patience for slow-loading or confusing websites. Using cutting-edge technologies like Next.js and React, we build lightning-fast, mobile-first experiences that rank on Google and convert at scale.</p>
        <p>From Jaipur to the global web, our websites are designed to dominate. We focus on the core metrics that actually impact your business: load time, user engagement, and conversion efficiency.</p>
      `}
      methodology={[
        { 
          title: "Strategic Discovery & Information Architecture", 
          desc: "We dive deep into your brand's objectives and user behavior to build a structural foundation that guides every visitor toward a clear conversion." 
        },
        { 
          title: "Cinematic UI/UX Engineering", 
          desc: "Our design team creates a unique visual language for your site, focusing on a premium aesthetic and an intuitive user experience." 
        },
        { 
          title: "Speed-First Technical Execution", 
          desc: "We build your site using high-performance frameworks like Next.js, ensuring instant load times and technical SEO excellence from day one." 
        },
        { 
          title: "Conversion-Centric Optimization", 
          desc: "Every element of your site—from the copy to the call-to-action buttons—is designed and tested to maximize your leads and sales." 
        }
      ]}
      roiDetails="Our web design clients typically see a 50% improvement in page load speeds and a significant boost in conversion rate within 30 days of launch."
      faqs={[
        { 
          q: "How long does it take to build a website?", 
          a: "The timeline depends on the complexity of your project. Typically, a custom high-performance website takes between 4 and 8 weeks from discovery to launch." 
        },
        { 
          q: "Will my website be mobile-friendly?", 
          a: "Absolutely. Every site we build is developed with a mobile-first philosophy, ensuring a flawless experience on every device, from smartphones to desktops." 
        },
        { 
          q: "Do you handle SEO as part of the web design process?", 
          a: "Yes, technical SEO is baked into our development process. We ensure your site's structure, speed, and metadata are optimized for search engines from birth." 
        },
        { 
          q: "Will I be able to update the content myself?", 
          a: "Yes, we build our sites on modern, user-friendly CMS platforms that allow you to easily manage your content without needing technical skills." 
        }
      ]}
    />
  );
}

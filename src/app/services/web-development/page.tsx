import React from 'react';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company India | Affordable & Fast | Orbyza',
  description: 'Orbyza is the best web development agency in India. High-performance Next.js websites for brands in Mumbai, Delhi, and global markets. 90+ PageSpeed scores guaranteed.',
};

const WebDevelopmentPage = () => {
  return (
    <ServiceDetail
      title="Web Development"
      description="Architecting high-velocity digital experiences that convert."
      iconName="Code"
      features={[
        "Next.js & React Frameworks",
        "E-Commerce Architecture",
        "Headless CMS Integration",
        "Full-Stack Custom Apps",
        "Performance Optimization",
        "Cloud-Scale Infrastructure"
      ]}
      painPoints={[
        "Slow loading speeds that kill conversion and SEO rankings.",
        "Outdated designs that fail to build trust with modern buyers.",
        "Difficult-to-manage backends that frustrate internal teams."
      ]}
      longDescription={`
        <p>Your website is your 24/7 digital sales hub. At Orbyza, we build <strong>digital engines</strong>, not just pages. We specialize in modern tech stacks like Next.js to ensure your site is lightning-fast and SEO-ready out of the box.</p>
        <p>From Mumbai startups to global e-commerce giants, our development protocol is built for speed, security, and scalability.</p>
      `}
      methodology={[
        { title: "Discovery & UX", desc: "Mapping the user journey to ensure zero-friction conversion paths." },
        { title: "Agile Development", desc: "Bi-weekly sprints with full transparency and staging environment access." },
        { title: "Performance Tuning", desc: "Rigorous testing to ensure 90+ scores on Core Web Vitals." },
        { title: "Launch & Support", desc: "Seamless deployment with 24/7 technical monitoring." }
      ]}
      roiDetails="Websites developed by Orbyza experience a 40% lower bounce rate and a 25% higher conversion efficiency on average."
      faqs={[
        { q: "Do you use WordPress?", a: "While we can support legacy sites, we recommend Next.js or Headless CMS for maximum performance and security." },
        { q: "Is the website mobile-friendly?", a: "Every site we build is mobile-first, ensuring 100% fidelity across all India and International device standards." }
      ]}
    />
  );
};

export default WebDevelopmentPage;

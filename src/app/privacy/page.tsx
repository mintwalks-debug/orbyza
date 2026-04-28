import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Protocol | Orbyza',
  description: 'Our data protection protocols and privacy policy for elite digital marketing services in Jaipur.',
  robots: 'noindex, nofollow',
};

const PrivacyPage = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-brand-primary" />
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em]">Legal Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16 text-brand-dark">
            Privacy <br /> Protocol.
          </h1>
          
          <div className="prose max-w-none space-y-12 text-slate-600 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">01 // Data Intelligence</h2>
              <p>
                At Orbyza, we operate with surgical precision. We collect data only to optimize digital orbits and ensure maximum ROI for our partners. This includes usage analytics, contact information provided via forms, and technical markers used for performance engineering.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">02 // Encryption & Security</h2>
              <p>
                Our systems are built on high-performance frameworks (Next.js) and hosted on secure infrastructure. All data transmission is encrypted using industry-standard SSL/TLS protocols to prevent unauthorized interception of proprietary growth data.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">03 // Third-Party Integration</h2>
              <p>
                We use elite tools like Google Analytics and Meta Pixel to track conversion efficiency. These partners comply with global privacy standards, ensuring your identity remains protected while your performance data scales.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">04 // Contact HQ</h2>
              <p>
                For inquiries regarding data deletion or specific privacy protocols, contact our Jaipur HQ at hello@orbyza.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

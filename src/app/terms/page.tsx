import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Orbyza',
  description: 'Operational terms and service protocols for Orbyza - Digital Marketing Jaipur.',
  robots: 'noindex, nofollow',
};

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-brand-primary" />
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em]">Service Agreement</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16 text-brand-dark">
            Operational <br /> Terms.
          </h1>
          
          <div className="prose max-w-none space-y-12 text-slate-600 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">01 // Digital Contracts</h2>
              <p>
                By accessing Orbyza.com, you agree to comply with our tactical service protocols. These terms are governed by the laws of Rajasthan, India, and represent a binding agreement for all digital marketing interactions.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">02 // Intellectual Property</h2>
              <p>
                All "Revenue Engines," "Protocols," and architectural designs displayed are the proprietary property of ORBYZA CORE SYSTEMS. Unauthorized reproduction of our digital assets is strictly prohibited and subject to legal enforcement.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">03 // Service Delivery</h2>
              <p>
                As a performance-first agency, our focus is ROI. While we engineer high-speed search dominance and social media growth, results depend on varying market conditions and algorithm shifts in real-time.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">04 // Dispute Management</h2>
              <p>
                Any operational disputes shall be handled through arbitration in Jaipur, Rajasthan, and resolved with a data-first approach and professional mediation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

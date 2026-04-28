import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy & Tracking Protocols | Orbyza',
  description: 'Tracking and analytics data protocols for Orbyza - Digital Marketing Jaipur.',
  robots: 'noindex, nofollow',
};

const CookiesPage = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-brand-primary" />
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em]">Tracking Mechanism</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16 text-brand-dark">
            Cookie <br /> Analysis.
          </h1>
          
          <div className="prose max-w-none space-y-12 text-slate-600 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">01 // Session Cookies</h2>
              <p>
                To provide a high-speed user experience, we use diagnostic cookies that maintain your session and preference settings. These are temporary and automatically deleted once your growth session ends.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">02 // Analytics Intelligence</h2>
              <p>
                We use tracking markers from Google and Meta to understand user flows and conversion heatmaps. This data is essential for engineering more efficient digital marketing orbits and improving site-wide latency.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">03 // Marketing Pixels</h2>
              <p>
                Retargeting pixels are utilized to ensure our most relevant marketing intelligence reaches you after you leave the Orbyza ecosystem. This maintains brand recall across the high-traffic social media landscape.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-brand-dark uppercase tracking-widest border-b border-[#0047FF]/20 pb-4">04 // User Autonomy</h2>
              <p>
                You can dismantle all cookie tracking through your browser's security settings. Disabling essential cookies may result in a non-optimal structural experience on our platform.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;

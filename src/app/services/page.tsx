import { services } from '@/data/services';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Digital Marketing Services India | SEO, PPC & Web Development | Orbyza',
  description: 'Scale your business with India\'s elite digital growth agency. Expert SEO, PPC (Google Ads), and Web Development for brands in Mumbai, Delhi, Bengaluru & Global markets.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-32">
      <div className="container-max">
        <Breadcrumbs />
        <div className="text-center lg:text-left mb-24 mt-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Execution Vectors</div>
          <h1 className="heading-xl">
            Strategic <span className="text-brand-primary italic">Solutions.</span>
          </h1>
          <p className="subheading mx-auto lg:mx-0">
            We provide specialized digital marketing protocols engineered to scale your brand across Tier 1 India cities and international markets with absolute precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.id} className="group p-12 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-primary/30 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all relative overflow-hidden">
               <h3 className="text-2xl font-black text-brand-dark mb-6 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{s.label}</h3>
               <p className="text-brand-muted mb-10 leading-relaxed h-20 overflow-hidden font-medium">{s.description}</p>
               <Link 
                href={`/services/${s.id}`} 
                className="inline-block text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] border-b border-brand-primary/20 pb-2 hover:border-brand-primary transition-all"
               >
                Explore Protocol →
               </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

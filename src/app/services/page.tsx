import { services } from '@/data/services';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Digital Marketing Services Jaipur & Delhi | Performance SEO, SEM, Web',
  description: 'High-performance digital marketing services in Jaipur and Delhi. Specialized in ROI-driven SEO, Google Ads (SEM), and web architecture for global brands.',
  alternates: {
    canonical: 'https://orbyza.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-32">
      <div className="container-max">
        <Breadcrumbs />
        <div className="mb-24 mt-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Execution Vectors</div>
          <h1 className="text-5xl md:text-8xl font-bold text-brand-dark mb-8 uppercase tracking-tighter">
            Strategic <span className="text-brand-primary">Solutions.</span>
          </h1>
          <p className="text-xl text-brand-primary max-w-2xl leading-relaxed">
            We provide strategic digital growth solutions designed for high-performance business execution in the Jaipur market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.id} className="group bg-white border border-brand-primary/15 p-10 rounded-3xl hover:border-brand-dark hover:shadow-2xl hover:shadow-brand-dark/10 transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
               <h3 className="text-2xl font-bold text-brand-dark mb-6 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{s.label}</h3>
               <p className="text-sm text-brand-primary mb-10 leading-relaxed h-20 overflow-hidden font-medium">{s.description}</p>
               <Link href={`/services/${s.id}`} className="inline-block text-[10px] font-bold text-brand-dark uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

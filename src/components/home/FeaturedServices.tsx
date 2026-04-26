'use client';

import { services } from '@/data/services';
import Link from 'next/link';

const FeaturedServices = () => {
  return (
    <section className="py-32 bg-white" id="services">
      <div className="container-max">
        <div className="mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Execution Vectors</div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 uppercase tracking-tighter">
            Strategic <span className="text-brand-primary">Solutions.</span>
          </h2>
          <p className="text-xl text-brand-primary max-w-2xl leading-relaxed">
            We provide specialized digital marketing vectors engineered to scale your brand in the Jaipur market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="group p-10 bg-brand-secondary border border-brand-primary/10 rounded-3xl hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
              <h3 className="text-2xl font-bold mb-6 text-brand-dark uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                {item.label}
              </h3>
              <p className="text-brand-primary mb-10 leading-relaxed font-medium">
                {item.description}
              </p>
              <Link 
                href={`/services/${item.id}`} 
                className="inline-block text-[10px] font-bold text-brand-dark uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-primary transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

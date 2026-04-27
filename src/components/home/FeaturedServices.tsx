'use client';

import { services } from '@/data/services';
import Link from 'next/link';

const FeaturedServices = () => {
  return (
    <section className="py-32 bg-white" id="services">
      <div className="container-max">
        <div className="text-center lg:text-left mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Execution Vectors</div>
          <h2 className="heading-xl">
            Strategic <span className="text-brand-primary italic">Solutions.</span>
          </h2>
          <p className="subheading mx-auto lg:mx-0">
            We provide specialized digital marketing protocols engineered to scale your brand with absolute precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="group p-12 bg-white border border-brand-border rounded-[2.5rem] hover:border-brand-primary/30 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <h3 className="text-2xl font-black mb-6 text-brand-dark uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                {item.label}
              </h3>
              <p className="text-brand-muted mb-10 leading-relaxed font-medium">
                {item.description}
              </p>
              <Link 
                href={`/services/${item.id}`} 
                className="inline-block text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] border-b border-brand-primary/20 pb-2 hover:border-brand-primary transition-all"
              >
                Explore Protocol →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return {};

  return {
    title: `${item.title} | Case Study | Orbyza Jaipur Marketing`,
    description: `Case Study: ${item.description.substring(0, 160)}... Learn how Orbyza achieved ${item.results.join(', ')} for ${item.client}.`,
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${params.slug}`,
    },
    openGraph: {
      title: `${item.title} Case Study | Growth Results Orbyza`,
      description: item.description,
      url: `${siteConfig.url}/portfolio/${params.slug}`,
      images: [item.thumbnail],
    }
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative">
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] -z-10" />

      <div className="section-padding relative z-10">
        <div className="container-max">
           <Breadcrumbs />
           <div className="mb-20">
              <Link href="/portfolio" className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary hover:text-brand-dark transition-all mb-10 inline-block border-b border-brand-primary/20">← Back to Intelligence Hub</Link>
              
              <div className="grid lg:grid-cols-2 gap-20 items-end">
                 <div>
                    <span className="text-brand-primary font-black text-[10px] uppercase tracking-[0.6em] mb-6 block animate-pulse underline underline-offset-4 decoration-brand-primary/30">Success Protocol // Archived Impact</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-brand-dark underline decoration-brand-primary/20 underline-offset-8 italic mb-10">{item.title}</h1>
                    <div className="flex flex-wrap items-center gap-10">
                       <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-brand-secondary border border-brand-primary/20 flex items-center justify-center font-black text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">C</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-brand-dark transition-colors">Client: <span className="text-brand-dark ml-2 italic underline underline-offset-4 decoration-brand-primary/20">{item.client}</span></div>
                       </div>
                       <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 rounded-2xl bg-brand-secondary border border-brand-primary/20 flex items-center justify-center font-black text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">I</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-brand-dark transition-colors">Sector: <span className="text-brand-dark ml-2 italic underline underline-offset-4 decoration-brand-primary/20">{item.industry}</span></div>
                       </div>
                    </div>
                 </div>
                 <div className="hidden lg:block pb-4">
                    <p className="text-slate-500 text-[10px] items-center flex gap-4 uppercase font-black tracking-[0.5em] animate-pulse">DEPLOYMENT STATUS // STABLE <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" /></p>
                 </div>
              </div>
           </div>

           <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-brand-primary/20 mb-32 group relative shadow-3xl">
              <img src={item.thumbnail} alt={item.title} className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-all duration-[3000ms] opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-white/40 group-hover:opacity-0 transition-opacity" />
           </div>

           <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-8">
                 <div className="mb-24">
                    <h3 className="text-3xl font-black mb-10 text-brand-dark uppercase tracking-tighter italic border-l-4 border-brand-primary/30 pl-8 underline decoration-brand-primary/10 underline-offset-8 cursor-default">The Architectural <span className="text-brand-primary">Challenge.</span></h3>
                    <p className="text-xl text-slate-700 mb-12 leading-relaxed font-medium uppercase tracking-tight">{item.description}</p>
                 </div>
                 
                 <div className="mb-24">
                    <h3 className="text-3xl font-black mb-10 text-brand-dark uppercase tracking-tighter italic border-l-4 border-brand-primary/30 pl-8 underline decoration-brand-primary/10 underline-offset-8 cursor-default">Engineered <span className="text-brand-primary">Strategy.</span></h3>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold uppercase tracking-widest">
                       We implemented a high-speed marketing framework covering {item.services.join(' // ')} focused specifically on dismantling market resistance and achieving hyper-growth territory. 
                    </p>
                    <Link href="/contact" className="btn-premium w-full py-8 text-center text-xl shadow-2xl block mt-16 font-black uppercase tracking-widest italic group-hover:scale-105 transition-transform">Achieve Similar Dominance →</Link>
                 </div>
              </div>
              <div className="lg:col-span-4">
                 <div className="bg-brand-secondary border border-brand-primary/20 rounded-3xl p-12 shadow-3xl sticky top-32 group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-black mb-12 tracking-tighter uppercase text-brand-dark italic underline underline-offset-4 decoration-brand-primary/30">Growth Metrics</h3>
                    <ul className="space-y-12 relative z-10">
                       {item.results.map((r, i) => (
                         <li key={i} className="flex flex-col group/item cursor-default">
                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2 group-hover/item:text-brand-primary transition-colors italic transition-all group-hover/item:tracking-[0.5em]">Phase // Peak Performance</span>
                            <span className="text-5xl font-black text-brand-dark italic tracking-tighter transition-all group-hover/item:scale-110 origin-left">{r}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="mt-12 pt-10 border-t border-brand-primary/15">
                        <div className="text-[10px] font-black text-brand-primary text-center uppercase tracking-[0.4em] animate-pulse">DEPLOYMENT CONFIRMED</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

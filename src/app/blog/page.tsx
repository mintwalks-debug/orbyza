import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Intelligence Archive | Digital Marketing Insights Orbyza Jaipur',
  description: 'Expert deep-dives, strategic performance frameworks, and digital marketing trends from Jaipur leading growth agency. Stay ahead of the elite Rajasthan market.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Digital Marketing Insights & Strategy Blog | Orbyza Jaipur',
    description: 'Grow your brand with expert digital marketing insights. Our Jaipur-based specialists share strategies for SEO, SEM, and Social Media dominance.',
    url: `${siteConfig.url}/blog`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function BlogListingPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative text-brand-dark">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] -z-10" />

      <div className="section-padding relative z-10">
        <div className="container-max">
          <Breadcrumbs />
          <div className="mb-20">
             <span className="text-brand-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6 block font-mono">Intelligence Archive // Editorial</span>
             <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 text-brand-dark italic">
                Strategic <br /> <span className="text-brand-primary">Insights.</span>
             </h1>
             <p className="subheading max-w-2xl !text-brand-primary/70">Expert tips, deep-dives, and performance frameworks from Jaipur's leading digital minds.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="bg-brand-secondary border border-brand-primary/10 rounded-3xl !p-0 group overflow-hidden hover:border-brand-primary transition-all duration-500 shadow-xl shadow-brand-primary/5 block">
                <div className="aspect-video relative overflow-hidden bg-brand-primary/5 transition-all duration-700">
                   <img src={post.thumbnail} alt={post.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-90" />
                </div>
                <div className="p-8">
                   <div className="flex gap-2 mb-6">
                      {post.categories.map((c, i) => (
                        <span key={i} className="text-[9px] font-black text-brand-primary border border-brand-primary/20 px-2 py-1 uppercase tracking-widest bg-brand-primary/10">{c}</span>
                      ))}
                   </div>
                   <h3 className="text-2xl font-black mb-4 leading-tight text-brand-dark group-hover:text-brand-primary transition-colors uppercase tracking-tight">{post.title}</h3>
                   <p className="text-sm text-brand-primary mb-10 leading-relaxed font-medium group-hover:text-brand-dark transition-colors">{post.excerpt}</p>
                   <div className="flex items-center gap-4 border-t border-brand-primary/15 pt-6">
                      <div className="w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary/30" />
                      <div className="text-[9px] font-black uppercase tracking-widest text-brand-primary/60 italic">{post.author} <span className="text-brand-primary/30 mx-2">•</span> {post.date}</div>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

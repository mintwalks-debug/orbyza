import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = blogPosts.find((p) => p.slug === params.slug);
  if (!item) return {};

  return {
    title: `${item.title} | Orbyza Blog`,
    description: item.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${params.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [item.thumbnail],
    },
  };
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const item = blogPosts.find((p) => p.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="section-padding bg-[#E8DFC8]">
       <div className="container-max max-w-4xl">
          <div className="text-center mb-16">
             <div className="flex justify-center gap-2 mb-4">
                {item.categories.map((c, i) => (
                   <span key={i} className="text-[10px] font-black bg-[#84563B]/10 text-[#84563B] border border-[#84563B]/20 px-3 py-1 rounded-full uppercase tracking-widest">{c}</span>
                ))}
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-[#261311] uppercase tracking-tighter mb-6 leading-tight">{item.title}</h1>
             <div className="flex items-center justify-center gap-4 text-sm font-semibold text-[#84563B]">
                <div className="w-10 h-10 rounded-full bg-[#84563B]/10" />
                {item.author} <span className="opacity-40">•</span> {item.date}
             </div>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
             <img src={item.thumbnail} alt={item.title} className="object-cover w-full h-full" />
          </div>
          <div className="prose prose-lg max-w-none text-[#84563B] leading-relaxed space-y-8 mb-20 border-b pb-20 border-[#84563B]/15">
             <p className="font-bold text-xl text-[#261311] border-l-4 border-[#84563B] pl-6 italic">"{item.excerpt}"</p>
             <p>A full expert-written article would go here. We cover in-depth marketing analysis for business growth strategy focusing on {item.categories.join(' and ')} expertise.</p>
             <p>In our current market analysis, we found that focusing on long-term authority building and localized optimizations leads to better sustainability in conversion performance.</p>
          </div>
          <div className="bg-[#261311] p-12 rounded-2xl text-center">
             <h3 className="text-2xl font-bold text-[#E8DFC8] mb-4">Want More Insights Delivered Weekly?</h3>
             <p className="text-[#E8DFC8]/60 mb-10 max-w-lg mx-auto">Join 5,000+ marketers receiving our expert newsletter with actionable growth strategies.</p>
             <form className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
                <input type="email" placeholder="Email address" className="bg-[#E8DFC8]/10 border border-[#84563B]/30 rounded-xl px-4 py-3 min-w-[300px] outline-none focus:border-[#84563B] text-[#E8DFC8] placeholder:text-[#E8DFC8]/30" />
                <button type="submit" className="bg-[#84563B] text-[#E8DFC8] font-bold px-8 py-3 rounded-full hover:bg-[#E8DFC8] hover:text-[#261311] transition-all uppercase tracking-widest text-sm">Join Experts</button>
             </form>
          </div>
       </div>
    </div>
  );
}

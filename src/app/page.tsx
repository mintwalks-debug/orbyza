import HeroSection from '@/components/home/HeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutSection from '@/components/home/AboutSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ContactSection from '@/components/home/ContactSection';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Elite Digital Marketing Agency in Jaipur | Orbyza Jaipur & Delhi',
  description: 'Orbyza is the best digital marketing agency in Jaipur and Delhi. We offer 420% ROI performance marketing, SEO services, Google Ads (SEM), and web design in Jaipur, Delhi, and global markets (USA/Canada/Europe). Scale your growth today.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Elite Digital Marketing Agency in Jaipur | Orbyza',
    description: 'Transforming businesses with high-velocity SEO, SEM, and web engineering. Jaipur\'s #1 agency for performance growth.',
    url: siteConfig.url,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      
      {/* Industries Section */}
      <section className="py-24 bg-slate-950">
        <div className="container-max">
           <div className="text-center mb-16">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047FF] mb-4">Vertical Specialization</div>
              <h2 className="text-3xl font-bold text-[#FFFFFF] uppercase tracking-tight">Industries We <span className="text-[#0047FF]">Empower.</span></h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { label: "SaaS", icon: "Software" },
                { label: "Real Estate", icon: "Property" },
                { label: "Skincare", icon: "Beauty" },
                { label: "Clothing", icon: "Fashion" },
                { label: "E-Commerce", icon: "Retail" },
                { label: "Healthcare", icon: "Medical" },
                { label: "Education", icon: "EdTech" },
                { label: "Hospitality", icon: "Travel" },
                { label: "FinTech", icon: "Finance" },
                { label: "Automotive", icon: "Auto" },
                { label: "Legal", icon: "Law" },
                { label: "Logistics", icon: "Supply" },
                { label: "Manufacturing", icon: "Industrial" },
                { label: "Wellness", icon: "Health" },
                { label: "Jewellery", icon: "Luxury" },
                { label: "Construction", icon: "Build" },
                { label: "Gaming", icon: "Esports" },
                { label: "Interior Design", icon: "Decor" },
                { label: "Entertainment", icon: "Media" },
                { label: "Furniture", icon: "Home" },
                { label: "Wellness", icon: "Yoga" },
                { label: "Agriculture", icon: "Agri" },
                { label: "Non-Profit", icon: "NGO" },
                { label: "Telecom", icon: "Network" }
              ].map((sector, i) => (
                <div key={i} className="text-center group p-5 bg-[#F8FAFC] rounded-2xl border border-[#0047FF]/10 hover:shadow-lg hover:shadow-[#0047FF]/20 hover:border-[#0047FF]/40 transition-all">
                   <div className="text-[9px] font-bold text-[#0047FF]/50 mb-2 uppercase tracking-widest group-hover:text-[#0047FF] transition-colors">{sector.icon}</div>
                   <div className="text-xs font-bold text-[#0F172A] uppercase tracking-tight">{sector.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <FeaturedServices />
      <AboutSection />
      <ProjectsSection />

      {/* Blog Preview */}
      <section className="py-32 bg-white border-y border-slate-200">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
               <h2 className="text-5xl md:text-7xl font-bold text-[#0F172A] uppercase tracking-tighter mb-6 leading-none">Latest <span className="text-[#0047FF]">Insights.</span></h2>
               <p className="text-xl text-[#0047FF] font-light border-l-4 border-[#0047FF] pl-8 italic">Our recent intelligence reports on digital architecture and growth.</p>
            </div>
            <Link href="/blog" className="btn-premium px-10 py-5 text-[10px]">View Archive →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="group glass-card overflow-hidden !p-0">
                 <div className="relative aspect-video overflow-hidden">
                    <img src={post.thumbnail} alt={post.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="p-8 space-y-4">
                    <div className="text-[10px] font-bold text-[#0047FF] uppercase tracking-[0.3em]">{post.date}</div>
                    <h3 className="text-2xl font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#0047FF] transition-colors">{post.title}</h3>
                    <p className="text-[#0047FF]/70 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Basic FAQ */}
      <section className="py-32 bg-slate-950" id="faq">
        <div className="container-max">
           <div className="text-center mb-20">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047FF] mb-6">Transparency Protocol</div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#FFFFFF] uppercase tracking-tighter mb-4">Common <span className="text-[#0047FF]">Queries.</span></h2>
           </div>
           <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {[
                { q: "Why hire Orbyza?", a: "We provide a full-scale growth department with experts in SEO, SEM, and development working under a unified protocol." },
                { q: "Do you manage local SEO?", a: "Yes. Local SEO in Jaipur is a core competence. We manage location entities across Rajasthan." },
                { q: "How is pricing determined?", a: "Our pricing is tied to performance and the specific growth goals of your business." },
                { q: "What tech stack do you use?", a: "We primarily use modern, high-performance web architectures like Next.js for maximum speed." }
              ].map((faq, i) => (
                <div key={i} className="p-10 bg-[#F8FAFC] rounded-3xl border border-[#0047FF]/10 hover:border-[#0047FF]/40 transition-all flex flex-col gap-4">
                   <h4 className="font-bold text-[#0F172A] uppercase tracking-tight text-lg">Q. {faq.q}</h4>
                   <p className="text-[#0047FF] text-sm leading-relaxed border-l-2 border-[#0047FF] pl-6">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

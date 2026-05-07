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
  title: 'Best Digital Marketing Agency Jaipur | SEO & SEM Services - Orbyza',
  description: 'Orbyza: Top digital marketing agency in Jaipur specializing in SEO, Google Ads & web design. 320% average ROI. Get free audit today.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Best Digital Marketing Agency Jaipur | SEO & SEM Services - Orbyza',
    description: 'Orbyza: Top digital marketing agency in Jaipur specializing in SEO, Google Ads & web design. 320% average ROI. Get free audit today.',
    url: siteConfig.url,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency Jaipur | Orbyza',
    description: 'Top digital marketing agency in Jaipur specializing in SEO, Google Ads & web design.',
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />

      {/* Pain-Point Questions Section */}
      <section className="py-20 bg-[#0047FF] overflow-hidden relative">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 mb-4">
              Sounds Familiar?
            </span>
          </div>
          <div className="flex flex-col items-center gap-6 mb-14">
            {[
              { q: "Is your website getting traffic but zero sales?", delay: "0s" },
              { q: "Are your Google Ads draining budget with no results?", delay: "0.15s" },
              { q: "Still invisible on Google while competitors win?", delay: "0.3s" },
              { q: "Does your website look outdated and lose you customers?", delay: "0.45s" },
              { q: "Tired of agencies that promise but never deliver?", delay: "0.6s" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group"
                style={{ animationDelay: item.delay }}
              >
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-white text-sm font-black shrink-0 group-hover:bg-white group-hover:text-[#0047FF] transition-all duration-300">
                  ?
                </span>
                <p
                  className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight italic leading-none group-hover:text-white/80 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-jakarta, sans-serif)' }}
                >
                  {item.q}
                </p>
              </div>
            ))}
          </div>

          {/* Divider line */}
          <div className="flex items-center gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest shrink-0">Then</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* CTA Resolution */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-tight mb-8">
              All-in-One Solution for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FFD700]">SEM Activities</span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-white/10 rounded-full -z-0" />
              </span>
              {' '}at{' '}
              <span className="text-white underline decoration-[#FFD700] decoration-4 underline-offset-4">
                Orbyza
              </span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              SEO · Google Ads · Meta Ads · Website Designing · Analytics — engineered under one roof to drive real, measurable growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:9352047105"
                className="bg-white text-[#0047FF] font-black px-10 py-5 rounded-full hover:bg-[#FFD700] hover:text-[#0F172A] transition-all shadow-2xl shadow-black/30 text-sm uppercase tracking-widest"
              >
                📞 Call Now — Free Audit
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white/50 text-white font-bold px-10 py-5 rounded-full hover:border-white hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
              >
                Book Strategy Session →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white border-b border-brand-border">
        <div className="container-max">
           <div className="text-center mb-16">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-4">Vertical Specialization</div>
              <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight italic">Industries We <span className="text-brand-primary">Empower.</span></h2>
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
      <section className="py-32 bg-white" id="faq">
        <div className="container-max">
           <div className="text-center mb-20">
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Transparency Protocol</div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-4 italic">Common <span className="text-brand-primary">Queries.</span></h2>
           </div>
            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {[
                { q: "Why hire Orbyza?", a: "We provide a full-scale growth department with experts in SEO, SEM, and development working under a unified protocol." },
                { q: "Do you manage local SEO?", a: "Yes. Local SEO is a core competence. We manage location entities across Rajasthan and India Tier 1 cities." },
                { q: "How is pricing determined?", a: "Our pricing is tied to performance and the specific growth goals of your business." },
                { q: "What tech stack do you use?", a: "We primarily use modern, high-performance web architectures like Next.js for maximum speed." }
              ].map((faq, i) => (
                <div key={i} className="p-10 bg-white rounded-3xl border border-brand-border hover:border-brand-primary/40 transition-all flex flex-col gap-4 shadow-xl shadow-slate-200/50">
                   <h4 className="font-bold text-brand-dark uppercase tracking-tight text-lg">Q. {faq.q}</h4>
                   <p className="text-brand-muted text-sm leading-relaxed border-l-2 border-brand-primary pl-6">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

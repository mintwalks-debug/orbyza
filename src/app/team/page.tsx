import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Elite Growth Squad | The Minds Behind Orbyza Jaipur',
  description: 'Meet the technical architects and digital strategists engineering market dominance from the Orbyza Jaipur hub. Elite talent for global growth.',
  alternates: {
    canonical: `${siteConfig.url}/team`,
  },
  openGraph: {
    title: 'Precision Architectures // Meet the Team',
    description: 'A collective of elite growth engineers based in Jaipur, dismantling market friction for global brands.',
    url: `${siteConfig.url}/team`,
    images: [`${siteConfig.url}/og-image.jpg`],
  }
};

const TeamPage = () => {
  const members = [
    {
      name: "Harshit",
      role: "Founder & Chief Architect",
      expertise: "Strategic Growth // SEO Engineering",
      bio: "The visionary architect behind the Orbyza growth engine. Harshit focuses on dismantling market friction for global enterprises and establishing Jaipur as a primary tech-performance hub."
    },
    {
      name: "Rohan Gupta",
      role: "Lead Performance Engineer",
      expertise: "Google Ads (SEM) // ROI Specialist",
      bio: "An SEM veteran who manages multi-million dollar ad spends with surgical precision. Rohan is responsible for our -45% average CPC reduction record."
    },
    {
      name: "Priya Patel",
      role: "Chief Content Strategist",
      expertise: "Semantic Content // E-E-A-T Architecture",
      bio: "The authority behind our organic narratives. Priya ensures every piece of content satisfies human searchers and AI Answer Engines with elite precision."
    },
    {
      name: "Sarah Miller",
      role: "International Growth Lead",
      expertise: "SaaS Scaling // B2B Global Outreach",
      bio: "Based in our global division, Sarah bridges the gap between Orbyza's Jaipur hub and the North American enterprise market."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container-max">
        <div className="max-w-4xl mb-32 text-center mx-auto">
           <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-10 block">The Intelligence Unit // Team Protocol</span>
           <h1 className="text-6xl md:text-8xl font-black text-brand-dark uppercase italic !leading-none tracking-tighter mb-12">Growth <span className="text-brand-primary">Squad.</span></h1>
           <p className="text-brand-primary text-xl font-light leading-relaxed max-w-2xl mx-auto italic border-l-4 border-brand-primary pl-8 font-medium">
              We are a collective of energetic strategists, technical architects, and data engineers. We don't just work for Orbyza; we build higher-velocity digital ecosystems.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           {members.map((member, i) => (
             <div key={i} className="glass-card !bg-brand-secondary/50 !border-brand-primary/15 !p-12 flex flex-col items-start gap-10 group hover:!border-brand-primary/40 transition-all duration-700 shadow-2xl shadow-brand-primary/5">
                <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div>
                      <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter group-hover:text-brand-primary transition-all leading-none">{member.name}</h2>
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-dark/40 mt-2">{member.role}</div>
                   </div>
                   <div className="flex flex-col items-end gap-2">
                      <div className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary px-4 py-2 text-[9px] font-black uppercase tracking-widest">{member.expertise}</div>
                      {member.name === "Harshit" && (
                         <Link href={siteConfig.social.freelancer} target="_blank" className="hover:opacity-80 transition-opacity">
                            <span className="text-[9px] font-black text-brand-primary border-b border-brand-primary/30">Verified Freelancer Profile →</span>
                         </Link>
                      )}
                   </div>
                </div>
                <p className="text-brand-primary text-lg leading-relaxed font-light border-l border-brand-primary/20 pl-8 group-hover:border-brand-primary transition-all">"{member.bio}"</p>
                <div className="flex gap-6 pt-6 border-t border-brand-primary/5 w-full">
                   <div className="text-[9px] font-black uppercase tracking-widest text-brand-dark/30">Verification ID // 0{i+1}-ORBYZA</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-brand-dark/30">Jaipur Hub</div>
                </div>
             </div>
           ))}
        </div>

        {/* Tactical Culture Section */}
        <section className="mt-40 grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-brand-primary font-black text-xs uppercase tracking-[0.5em] mb-8 block">The Ecosystem // Culture Lab</span>
              <h3 className="text-4xl md:text-6xl font-black text-brand-dark uppercase italic mb-10 tracking-tighter leading-none">High-Energy <br /> <span className="text-brand-primary">Architecture.</span></h3>
              <p className="text-brand-primary/70 text-lg leading-relaxed mb-8">
                 At Orbyza, we've dismantled the standard office environment to create a high-performance culture of growth. We are headquartered in Jaipur because of the city's unique position as Rajasthan's capital and a rapidly growing technology hub.
              </p>
              <div className="space-y-4 text-brand-primary/50 text-sm font-bold uppercase tracking-widest">
                 <div className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full" /> Remote-First Flexibility</div>
                 <div className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full" /> Data-Driven Meritocracy</div>
                 <div className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full" /> Global Skillset Evolution</div>
              </div>
           </div>
           <div className="glass-card !bg-brand-secondary/30 !border-brand-primary/15 !p-12 rotate-2 group hover:rotate-0 transition-all duration-1000 relative overflow-hidden flex items-center justify-center text-center shadow-3xl">
              <div className="absolute inset-0 bg-brand-primary/5 blur-[50px] rounded-full" />
              <div className="relative z-10 p-12">
                 <div className="text-8xl font-black text-brand-primary/5 select-none mb-4 italic tracking-widest uppercase">Squad</div>
                 <p className="text-brand-primary/40 italic text-sm">"Driven by innovation, rooted in Jaipur's excellence."</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;

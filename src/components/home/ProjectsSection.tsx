'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { 
        id: 'tech-scaling', 
        title: 'Global Tech Scaling', 
        brand: 'Cyber-Dynamics', 
        outcome: '+420% Growth', 
        img: '/korean_team.png',
        category: 'PERFORMANCE SCALING'
    },
    { 
        id: 'market-infiltration', 
        title: 'Market Infiltration', 
        brand: 'Nexus Group', 
        outcome: 'Top 3 Ranking', 
        img: '/service_seo.png',
        category: 'SEO PROTOCOL'
    },
    { 
        id: 'brand-overhaul', 
        title: 'Brand Modernization', 
        brand: 'Ivy Bridge', 
        outcome: '70% Faster Loads', 
        img: '/service_web.png',
        category: 'WEB ARCHITECTURE'
    },
    { 
        id: 'social-dominance', 
        title: 'Social Dominance', 
        brand: 'MintWalks', 
        outcome: '2M+ Reach', 
        img: '/service_social.png',
        category: 'SMM STRATEGY'
    }
];

const ProjectsSection = () => {
    return (
        <section className="py-32 bg-brand-primary" id="projects">
            <div className="container-max">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-6">Execution Outcomes</div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter">
                            Case <span className="text-brand-secondary">Studies.</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Our recent work and results for clients across the global digital landscape.</p>
                    </div>
                    <Link href="/portfolio" className="bg-white text-brand-primary font-bold px-10 py-5 rounded-full uppercase tracking-widest text-[10px] hover:bg-brand-secondary hover:text-brand-dark transition-all inline-block">View Full Portfolio →</Link>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image 
                                    src={project.img} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-10">
                                <div className="text-[10px] font-bold text-brand-primary mb-4 uppercase tracking-[0.3em]">{project.category}</div>
                                <h3 className="text-3xl font-bold text-brand-dark mb-4 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{project.title}</h3>
                                <div className="flex justify-between items-end pt-6 border-t border-brand-primary/10">
                                    <div className="text-sm text-brand-primary font-medium">{project.brand}</div>
                                    <div className="text-xl font-bold text-brand-dark tracking-tighter">{project.outcome}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

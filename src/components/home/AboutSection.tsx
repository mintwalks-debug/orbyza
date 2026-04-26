'use client';

import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="py-32 bg-white" id="about">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10">
                        <Image 
                            src="/korean_team.png" 
                            alt="Orbyza Team" 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Our Vision</div>
                        <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-10 uppercase tracking-tighter">
                            Beyond an Agency. <br/>A Revenue <span className="text-brand-primary">Engine.</span>
                        </h2>
                        <div className="space-y-8 text-brand-text text-lg leading-relaxed">
                            <p>
                                Orbyza is a collective of digital architects and marketing specialists dedicated to one thing: dismantling market friction and accelerating growth.
                            </p>
                            <p>
                                Based on technical precision and creative ambition, we help businesses in Jaipur and global markets scale their digital operations efficiently.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-16 bg-brand-secondary p-10 rounded-3xl border border-brand-primary/10">
                            <div>
                                <div className="text-4xl font-bold text-brand-dark mb-2 tracking-tighter">+420%</div>
                                <div className="text-[10px] text-brand-primary uppercase font-bold tracking-widest">Performance ROI</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-brand-dark mb-2 tracking-tighter">500+</div>
                                <div className="text-[10px] text-brand-primary uppercase font-bold tracking-widest">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

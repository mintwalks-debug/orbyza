'use client';

import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Search Dominance (SEO)',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', service: 'Search Dominance (SEO)', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-32 bg-white" id="contact">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-6">Connect Protocol</div>
                        <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 uppercase tracking-tighter leading-none">
                            Initiate <br/><span className="text-brand-primary">Growth.</span>
                        </h2>
                        <p className="text-xl text-brand-primary mb-12 max-w-md leading-relaxed">
                            Our growth squad is ready to dismantle your market friction. Reach out to deploy your next high-velocity scaling campaign.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary shrink-0 border border-brand-primary/20">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-widest mb-1">Electronic Transmission</div>
                                    <div className="text-lg font-bold text-brand-dark">growth@orbyza.com</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary shrink-0 border border-brand-primary/20">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-widest mb-1">Voice Communication</div>
                                    <div className="text-lg font-bold text-brand-dark">+91 91169 0xxxx</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary shrink-0 border border-brand-primary/20">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-brand-primary/60 uppercase tracking-widest mb-1">Global Command Hub</div>
                                    <div className="text-lg font-bold text-brand-dark">Jaipur, Rajasthan, India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-primary border border-brand-primary/20 p-12 rounded-[40px] shadow-2xl shadow-brand-primary/20 text-white relative overflow-hidden">
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                            >
                                <CheckCircle2 size={80} className="text-white animate-bounce" />
                                <h3 className="text-3xl font-bold uppercase tracking-tighter">Transmission Successful</h3>
                                <p className="text-white/70 max-w-xs mx-auto">Your growth data has been received. Our squad will initiate contact within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="text-xs uppercase tracking-widest font-black underline underline-offset-8">Send another brief</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-4">Identifier</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="Your Name" 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-all md:text-sm" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-4">Transmission Node</label>
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="Email Address" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-all md:text-sm" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-4">Operation Objective</label>
                                    <select 
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-all md:text-sm appearance-none cursor-pointer"
                                    >
                                        <option className="text-brand-dark">Search Dominance (SEO)</option>
                                        <option className="text-brand-dark">Paid Infiltration (SEM)</option>
                                        <option className="text-brand-dark">Social Engagement (SMM)</option>
                                        <option className="text-brand-dark">Digital Architecture (Web)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/70 ml-4">Intelligence Brief</label>
                                    <textarea 
                                        required
                                        rows={4} 
                                        placeholder="Describe your growth parameters..." 
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-all md:text-sm"
                                    ></textarea>
                                </div>
                                <button 
                                    disabled={status === 'loading'}
                                    type="submit" 
                                    className="w-full py-6 mt-4 bg-white text-brand-primary font-bold rounded-full hover:bg-brand-secondary hover:text-brand-dark transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="animate-spin" size={20} /> Processing...</>
                                    ) : (
                                        'Deploy Inquiry →'
                                    )}
                                </button>
                                {status === 'error' && <p className="text-center text-xs font-bold uppercase text-red-200 mt-4 tracking-widest">Transmission Failure. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
